from __future__ import annotations

import argparse
import copy
import csv
import hashlib
import importlib.util
import json
import math
from datetime import datetime
from decimal import Decimal, ROUND_HALF_UP
from pathlib import Path

from openpyxl import load_workbook

ROOT = Path(__file__).resolve().parents[1]
CRA = 'cra-carteira-56'
CODE = 'CRA026000RT'
CONFIRMED_ON = '2026-11-09'


def module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


def pu(value):
    return float(Decimal(str(value)).quantize(Decimal('.00000001'), rounding=ROUND_HALF_UP))


def load_funding_cache(path):
    text = path.read_text('utf-8-sig')
    prefix = 'window.LAMINA_FUNDING_PU = '
    if not text.startswith(prefix):
        raise ValueError('Formato do cache de funding inesperado')
    return json.loads(text[len(prefix):].strip().removesuffix(';'))


def read_memory(source, cutoff, quantity):
    importer = module('funding_import', ROOT / 'scripts/import-cras-fundings-cash.py')
    with source.open('rb') as stream:
        source_hash = hashlib.sha256(stream.read()).hexdigest()
    book = load_workbook(source, read_only=True, data_only=True)
    try:
        if len(book.worksheets) != 1:
            raise ValueError('A memoria do CRA 56 deve conter uma unica serie')
        sheet = book.worksheets[0]
        table = [list(row) for row in sheet.iter_rows(values_only=True)]
        if sheet['I1'].value != CODE or sheet['E10'].value != quantity:
            raise ValueError('Codigo ou quantidade confirmada diverge dos rateios da memoria')
        start = sheet['C4'].value.date().isoformat()
        maturity = sheet['C3'].value.date().isoformat()
        rate = float(sheet['D13'].value)
        source_quantity = int(sheet['E2'].value)
        if not 0 < rate < 1 or not start <= cutoff <= maturity:
            raise ValueError('Taxa ou intervalo da memoria invalido')
        payments, cancelled = [], []
        for i, row in enumerate(table):
            if len(row) <= 9 or importer.norm(row[8]) != 'amortizacao' or not isinstance(row[9], datetime):
                continue
            event_date = row[9].date().isoformat()
            if event_date > cutoff:
                continue
            fields, cells = {}, {}
            for j in range(i + 1, min(i + 11, len(table))):
                label = importer.norm(table[j][8])
                if label == 'amortizacao' and isinstance(table[j][9], datetime):
                    break
                if label and isinstance(table[j][9], (int, float)):
                    fields[label] = float(table[j][9])
                    cells[label] = f'J{j + 1}'
            required = {'saldoemconta', 'pujuros', 'valorjuros', 'valoramortizacao', 'puamortizacao', 'saldodevedor'}
            if not required.issubset(fields):
                raise ValueError(f'Rateio incompleto em {event_date}: {required - fields.keys()}')
            if abs(fields['valorjuros'] + fields['valoramortizacao'] - fields['saldoemconta']) > .02:
                raise ValueError(f'Juros e amortizacao nao conciliam em {event_date}')
            rounding_difference = fields['puamortizacao'] * quantity - fields['valoramortizacao']
            if abs(rounding_difference) > .10:
                raise ValueError(f'Quantidade do rateio nao concilia em {event_date}')
            event = dict(dataIso=event_date, data=importer.br(event_date), tipo='juros_amortizacao',
                tipoEvento='Juros / amortizacao', quantidadeRateio=quantity,
                valorEventoReais=fields['saldoemconta'], valorJuros=fields['valorjuros'],
                valorAmortizacao=fields['valoramortizacao'], puJuros=pu(fields['pujuros']),
                puAmortizacao=pu(fields['puamortizacao']), puEvento=pu(fields['saldoemconta'] / quantity),
                puAposEvento=pu(fields['saldodevedor']), sourceSheet=sheet.title, sourceCells=cells,
                diferencaArredondamentoRateio=rounding_difference)
            if event_date == '2026-10-07':
                event.update(status='nao_efetivado', confirmedBy='Leonardo', confirmationDate='2026-10-30',
                    observacao='Pagamentos de 07/10 nao ocorreram; a propria memoria mantem o saldo apos essa data.')
                cancelled.append(event)
            else:
                payments.append(event)
        by_date = {}
        for index, row in enumerate(table, 1):
            if len(row) < 8 or not isinstance(row[1], datetime):
                continue
            key = row[1].date().isoformat()
            if not start <= key <= cutoff:
                continue
            principal, interest, observed = map(float, row[2:5])
            if abs(principal + interest - observed) > .0000001:
                raise ValueError(f'PU nao fecha principal mais juros em {key}')
            by_date[key] = dict(dataIso=key, data=importer.br(key), diaUtil=True, valorNominal=pu(principal),
                puAtualizado=pu(observed), puJuros=pu(interest), diasUteisPeriodo=int(row[6]),
                quantidade=source_quantity, valorReais=float(row[7]), quantidadeHistoricaConfirmada=False,
                quantidadeFontePlanilha=source_quantity, valorFontePlanilha=float(row[7]),
                sourceRow=index, taxaDiStatus='importada_pendente_validacao')
        history = list(sorted(by_date.values(), key=lambda row: row['dataIso']))
        if not history or history[-1]['dataIso'] != cutoff:
            raise ValueError('Memoria nao cobre a data da posicao')
        for index, row in enumerate(history):
            row['diasUteis'] = index
            events = [e for e in payments if e['dataIso'] == row['dataIso']]
            paid = math.fsum(e['valorEventoReais'] for e in events)
            row.update(puAntesEvento=pu(row['puAtualizado'] + paid / quantity), puEvento=pu(paid / quantity),
                puAposEvento=row['puAtualizado'], principalAposEvento=row['valorNominal'],
                valorEventoReais=paid, evento='Juros / amortizacao' if events else 'Integralizacao' if index == 0 else '',
                fatorDiAcumulado=(row['puAtualizado'] / row['valorNominal'] if row['valorNominal'] else 1))
            if events and abs(row['valorNominal'] - events[-1]['puAposEvento']) > .0000001:
                raise ValueError(f'Principal residual nao concilia em {row["dataIso"]}')
        last = history[-1]
        last.update(quantidade=quantity, quantidadeHistoricaConfirmada=True,
                    valorReais=last['puAtualizado'] * quantity)
        confirmation = dict(quantity=quantity, positionDate=cutoff, confirmedBy='Leonardo', confirmedOn=CONFIRMED_ON,
            sourceQuantity=source_quantity, paymentAllocationQuantity=quantity,
            note='Estoque atual confirmado. Nao foi criado resgate ou cancelamento ficticio de 400 cotas. Estoque historico da fonte preservado e ainda requer conciliacao cadastral.')
        integration = dict(dataIso=start, data=importer.br(start), tipo='integralizacao',
            quantidade=source_quantity, valorEventoReais=float(sheet['D4'].value), sourceSheet=sheet.title,
            sourceCells={'quantidade': 'E4', 'valor': 'D4'}, statusValidacao='quantidade_historica_fonte_nao_confirmada')
        cota = dict(classe='SR1', tipo='sr', label='Senior', ifCodigo=CODE, ehFunding=True, ordem=10,
            quantidade=quantity, valorNominalInicial=1000, principalResidual=last['valorNominal'],
            pu=last['puAtualizado'], valor=last['valorReais'], taxaAa=rate, taxaAm=0,
            taxaDia=(1 + rate) ** (1 / 252) - 1, taxaTexto=f'{rate * 100:.2f}% a.a.',
            metodo='prefixado_252_ts', indexador='', percentualIndexador=1,
            dataInicioIso=start, dataInicio=importer.br(start), dataPrimeiraIntegralizacaoIso=start,
            dataVencimentoIso=maturity, dataVencimento=importer.br(maturity), revolvencia=None,
            historicoPu=history, eventosAplicados=[integration, *payments],
            eventosPendentes=[], eventosPrevistos=[], eventosNaoEfetivados=cancelled, previsaoPu=[], fundingSourceDateKey=cutoff,
            quantidadeAtualConfirmada=confirmation, dataHistoricaDisponivel=True,
            documentValidation=dict(status='pendente_documentos', fields=['taxa', 'prazo', 'revolvencia', 'estoque_historico'],
                sourceTerms=dict(method='prefixado_252_ts', annualRate=rate, firstIntegration=start, maturity=maturity),
                checks=['cabecalho_quantidade_20000_superado_pela_confirmacao_atual_19600']),
            importacaoFundingCaixa=dict(sourceFile=source.name, sourceHash=source_hash, sourceSheet=sheet.title,
                sourcePu=float(table[last['sourceRow'] - 1][4]), sourceBalance=last['valorFontePlanilha'],
                calculation='pu_planilha_com_estoque_atual_confirmado'),
            forecastBlockedReason='Taxa, prazo e revolvencia ainda dependem dos documentos da emissao.',
            acumulacaoFinal=dict(periodoInicio=importer.br(start), periodoFim=importer.br(cutoff),
                puFinal=last['puAtualizado'], diasAcumulacao=last['diasUteis'], diasUteisPeriodo=last['diasUteisPeriodo']))
        return cota, confirmation, source_hash
    finally:
        book.close()


def main():
    parser = argparse.ArgumentParser(description='Inclui a memoria do CRA 56 sem alterar caixa, carteiras ou outras emissoes.')
    parser.add_argument('--source', type=Path, required=True)
    parser.add_argument('--date', required=True)
    parser.add_argument('--quantity', type=int, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    if args.quantity != 19600:
        parser.error('A quantidade confirmada neste lote e 19.600')
    funding = module('funding56_refresh', ROOT / 'scripts/refresh-funding-pu.py')
    engine = funding.engine
    snap_path = ROOT / f'data/cras/{CRA}/{args.date}.js'
    overview_path = ROOT / f'data/cras/cras-carteira-overview/{args.date}.js'
    cache_path = ROOT / 'data/funding-pu-latest.js'
    snap = engine.load_snapshot(snap_path, CRA, args.date)
    overview = engine.load_snapshot(overview_path, 'cras-carteira-overview', args.date)
    before_cache = load_funding_cache(cache_path)
    if before_cache['target'] != args.date:
        raise ValueError('Data do cache difere da data solicitada; nao retroceder ou avancar outras emissoes neste lote')
    cota, confirmation, source_hash = read_memory(args.source, args.date, args.quantity)
    # Keep previous snapshots and their historical quantities untouched.
    revision = f'{args.date.replace("-", "")}-cra56-pu-{source_hash[:10]}-q19600'
    snap = copy.deepcopy(snap)
    original_cash = copy.deepcopy(snap['caixa'])
    snap['metadata'].update(revisionId=revision, funding56Memory=dict(source=args.source.name, sha256=source_hash,
        confirmedOn=CONFIRMED_ON, stockQuantity=args.quantity, noCashReprocessing=True, noPortfolioReprocessing=True))
    snap['passivo'].update(cotas=[cota], fundingTotal=cota['valor'], subordinadaQuantidade=100)
    snap['fundingCashIssues'] = [i for i in snap.get('fundingCashIssues', []) if i.get('type') != 'funding_nao_informado']
    memory_source = dict(name='Memoria de PU CRA 56 e estoque confirmado', file=args.source.name, date=engine.date_key_to_br(args.date))
    if memory_source not in snap['sources']:
        snap['sources'].append(memory_source)
    overview = copy.deepcopy(overview)
    overview['metadata']['revisionId'] = revision + '-overview'
    new_row = dict(operacao='CRA Carteira 56', craId=CRA, serie='Senior', classe='SR1', ifCodigo=CODE,
        quantidadeIntegralizada=args.quantity, puAtual=cota['pu'], valorAtual=cota['valor'], taxa=cota['taxaTexto'],
        dataVencimento=cota['dataVencimento'], dataVencimentoIso=cota['dataVencimentoIso'],
        status='Pendente documentos', documentValidation=cota['documentValidation'])
    overview['portfolioOverview']['rows'] = [r for r in overview['portfolioOverview']['rows'] if r['craId'] != CRA] + [new_row]
    overview['portfolioOverview']['rows'].sort(key=lambda r: (int(r['craId'].rsplit('-', 1)[1]), {'SR1': 0, 'MEZA': 1, 'MEZB': 2}.get(r.get('classe'), 3)))
    vehicle = next(v for v in overview['fundingCashVehicles'] if v['craId'] == CRA)
    vehicle['funding'] = cota['valor']
    overview['passivo']['fundingTotal'] = math.fsum(v['funding'] or 0 for v in overview['fundingCashVehicles'])
    overview['fundingCashIssues'] = [i for i in overview.get('fundingCashIssues', []) if not (i.get('cra') == CRA and i.get('type') == 'funding_nao_informado')]
    assert snap['caixa'] == original_cash
    assert abs(cota['pu'] * args.quantity - snap['passivo']['fundingTotal']) < .000001
    portfolio_path = ROOT / f'output/cra-carteira-ger004-{args.date}/vp-por-lastro.csv'
    with portfolio_path.open(encoding='utf-8-sig', newline='') as stream:
        title_rows = [r for r in csv.DictReader(stream, delimiter=';') if r['cra'] == '56']
    if not title_rows:
        raise ValueError('CRA 56 ausente da carteira precificada; nao presumir carteira zero')
    portfolio_vp = math.fsum(float(r['vp_motor'].replace(',', '.')) for r in title_rows)
    residual = portfolio_vp + snap['caixa']['total'] - cota['valor']
    holidays = set(json.loads(funding.terms.REGISTRY.read_text('utf-8'))['businessCalendar']['holidays'])
    rates = engine.parse_di_rates()
    projected = funding.extend_series(cota, args.date, args.date, holidays, rates)
    projected['forecasts'] = funding.build_series_forecasts(cota, args.date, projected, holidays, rates, ())
    new_cache_vehicle = dict(sourceDate=args.date, sourceRevision=revision, series={CODE: projected})
    audit = dict(positionDate=args.date, source=str(args.source), sourceHash=source_hash,
        quantityConfirmation=confirmation, code=CODE, pu=cota['pu'], funding=cota['valor'],
        cash=snap['caixa']['total'], subQuantity=100, previewPortfolioVp=portfolio_vp,
        portfolioSource=str(portfolio_path.relative_to(ROOT)), previewSubValue=residual,
        previewSubPu=residual/100,
        payments=len(cota['eventosAplicados'])-1, documentValidationRequired=cota['documentValidation']['fields'],
        note='Residual indicativo usa carteira GER004 de 05/11 com VP zero para o CRA 56, sem PDD ou nova deducao de reserva.', applied=args.apply)
    args.output.mkdir(parents=True, exist_ok=True)
    (args.output / 'cra56-pu-import.json').write_text(json.dumps(audit, ensure_ascii=False, indent=2), 'utf-8')
    if args.apply:
        for p in [snap_path, overview_path, ROOT / 'data/cra-manifest.js', cache_path]:
            backup = args.output / (p.parent.name + '-' + p.name)
            if not backup.exists():
                backup.write_bytes(p.read_bytes())
        engine.write_snapshot(snap_path, CRA, args.date, snap)
        engine.write_snapshot(overview_path, 'cras-carteira-overview', args.date, overview)
        manifest_path = ROOT / 'data/cra-manifest.js'
        manifest = engine.load_json_assignment(manifest_path)
        for item in manifest:
            if item['craId'] not in {CRA, 'cras-carteira-overview'}:
                continue
            current = snap if item['craId'] == CRA else overview
            row = next(r for r in item['dates'] if r['dateKey'] == args.date)
            row.update(revisionId=current['metadata']['revisionId'], funding=current['passivo']['fundingTotal'],
                       fundingCashOnly=True, assetImported=False, portfolioAssetImport=False)
        engine.write_manifest(manifest_path, manifest)
        cache = copy.deepcopy(before_cache)
        cache['vehicles'][CRA] = new_cache_vehicle
        cache_path.write_text('window.LAMINA_FUNDING_PU = ' + json.dumps(cache, ensure_ascii=True, separators=(',', ':')) + ';\n', 'utf-8')
        (ROOT / f'data/fundings/cras-carteira/cra56-pu-{args.date}.json').write_text(json.dumps(audit, ensure_ascii=False, indent=2), 'utf-8')
        saved = load_funding_cache(cache_path)
        assert all(saved['vehicles'][k] == v for k, v in before_cache['vehicles'].items() if k != CRA)
    print(json.dumps(audit, ensure_ascii=True))


if __name__ == '__main__':
    main()
