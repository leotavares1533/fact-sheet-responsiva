from __future__ import annotations

import argparse
import copy
import csv
import hashlib
import importlib.util
import json
import math
from collections import defaultdict
from datetime import date
from pathlib import Path

from cra_ger004_v2 import read_export, preserve_missing, preserve_migrated_contracts

ROOT = Path(__file__).resolve().parents[1]


def module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


def series_at(cota, source_key, target, funding, cash, rates, holidays, integrations):
    result = copy.deepcopy(cota)
    if target < source_key:
        result['historicoPu'] = [r for r in result.get('historicoPu', []) if r['dataIso'] <= target]
        result['eventosAplicados'] = [e for e in result.get('eventosAplicados', [])
                                     if funding.event_date(e) <= target]
        if result.get('pu') == 0 and result.get('principalResidual') == 0:
            return result
        if not result['historicoPu'] or result['historicoPu'][-1]['dataIso'] != target:
            raise ValueError(f'Memoria historica ausente: {cota.get("ifCodigo")} {target}')
        return cash.materialize_series(result, {'rows': []}, target)
    if result.get('pu') == 0 and result.get('principalResidual') == 0:
        return result
    code = result.get('ifCodigo') or result['classe']
    entries = [r for r in integrations if r['ifCodigo'] == code]
    projection = funding.extend_series(result, source_key, target, holidays, rates, integrations=entries)
    return cash.materialize_series(result, projection, target)


def main():
    parser = argparse.ArgumentParser(description='Importa o novo GER004 preservando a memoria aprovada dos titulos omitidos.')
    parser.add_argument('--portfolio', type=Path, required=True)
    parser.add_argument('--previous', type=Path, required=True)
    parser.add_argument('--cash', type=Path, required=True)
    parser.add_argument('--through', required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--preserve-missing', action='store_true')
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    ger = module('ger_v2_core', ROOT/'scripts/process-cra-ger004.py')
    cash = module('ger_v2_cash', ROOT/'scripts/import-cras-carteira-cash-text.py')
    publication = module('ger_v2_publication', ROOT/'scripts/publish-cra-carteira-review.py')
    funding = cash.REFRESH
    engine = cash.ENGINE
    engine.ACTIVE_VP_THRESHOLD = 0
    pricing = ger.load_module('ger_v2_pricing', ROOT/'financial-performance-tracking/scripts/import-confina-portfolio.py')
    parsed_cash = cash.parse_source(args.cash)
    dates = [key for key in parsed_cash['dates'] if key <= args.through]
    if not dates or dates[-1] != args.through:
        raise ValueError('Caixa nao contem a data final solicitada')
    rates = engine.parse_di_rates()
    holidays = set(json.loads(funding.terms.REGISTRY.read_text('utf-8'))['businessCalendar']['holidays'])
    if rates.get(args.through, {}).get('fonte') != 'Banco Central do Brasil - SGS 12':
        raise ValueError('CDI oficial nao atualizado ate a data final')
    holidays |= pricing.BRAZIL_MARKET_HOLIDAYS
    integrations = json.loads(funding.INTEGRATIONS.read_text('utf-8'))
    previous = ger.read_titles(args.previous)
    groups, source, issues = read_export(args.portfolio, previous)
    manifest_path = ROOT/'data/cra-manifest.js'
    manifest = engine.load_json_assignment(manifest_path)
    original_manifest = copy.deepcopy(manifest)
    opening, active = {}, {}
    for entry in manifest:
        cra = entry['craId']
        if not cra.startswith('cra-carteira-'):
            continue
        key = entry['currentDate']
        snapshot = engine.load_snapshot(ROOT/f'data/cras/{cra}/{key}.js', cra, key)
        opening[cra] = (key, snapshot)
        for row in snapshot.get('carteira', []):
            if row.get('valorPresenteDia', 0) > 0:
                active[(int(cra.rsplit('-', 1)[1]), str(row['lastro']).strip())] = row
    missing = [key for key in active if key not in groups]
    if missing and not args.preserve_missing:
        raise ValueError(f'{len(missing)} titulos ativos ausentes; confirmar preservacao antes de importar')
    links = preserve_migrated_contracts(groups, source, previous, active)
    preserve_missing(groups, previous, active)
    preserved = [dict(cra=key[0], **active[key]) for key in missing]
    if set(parsed_cash['vehicles']) != set(opening):
        raise ValueError('Universo de CRAs da carteira e do caixa nao coincide')
    if {key[0] for key in groups} != {int(cra.rsplit('-',1)[1]) for cra in opening}:
        raise ValueError('Carteira nao cobre todos os CRAs')
    sha = hashlib.sha256(args.portfolio.read_bytes()).hexdigest()
    # Closed records may differ only because one export reports principal and the
    # other gross receipts. Keep their audit separate from active reconciliation.
    pending = [i for i in issues if (i['cra'], i['lastro']) in active]
    pending.extend(dict(cra=r['cra'], lastro=r['lastroAnterior'], type='vinculo_parcelas_pendente', motivo=r['motivo'])
                   for r in links if r['motivo'].startswith('Possivel'))
    updates, summary, missing_latest = {}, [], []
    new_overview_history = []
    cash_histories = {cra: {key:value for key,value in snap.get('caixaHistorico', {}).items() if key < dates[0]}
                      for cra, (_,snap) in opening.items()}
    for key in dates:
        day_output = args.output/key
        day_output.mkdir(exist_ok=True)
        details = []
        for (cra, lastro), group in sorted(groups.items()):
            row = dict(cra=cra, lastro=lastro, **ger.classify(group, date.fromisoformat(key), pricing,
                (cra, lastro), rates, holidays))
            if (cra, lastro) in missing:
                row['observacao'] = '; '.join(filter(None, [row['observacao'],
                    'Ausente no GER004 novo; memoria anterior preservada por confirmacao de Leonardo em 10/11/2026']))
            details.append(row)
        ger.write_csv(day_output/'vp-por-lastro.csv', details)
        with (day_output/'vp-por-lastro.csv').open(encoding='utf-8-sig', newline='') as f:
            raw_rows = list(csv.DictReader(f, delimiter=';'))
        grouped = defaultdict(list)
        for row in raw_rows:
            portfolio_row = publication.asset_row(row, key, engine)
            source_row = source.get((int(row['cra']), row['lastro']))
            if source_row:
                portfolio_row.update(documentoCedente=source_row['Documento Cedente'].strip(),
                    documentoSacado=source_row['Documento Sacado'].strip(),
                    numeroTitulo=source_row['Número do Ativo'].strip(),
                    parcela=source_row['Parcela do Ativo'].strip())
            if (int(row['cra']), row['lastro']) in missing:
                portfolio_row['sourcePreserved'] = True
            grouped[f'cra-carteira-{row["cra"]}'].append(portfolio_row)
        day_snapshots = {}
        for cra, (source_key, old) in opening.items():
            record = parsed_cash['records'][key][cra]
            cotas = [series_at(c, source_key, key, funding, cash, rates, holidays, integrations)
                     for c in old['passivo']['cotas'] if c.get('ehFunding')]
            template = copy.deepcopy(old)
            template['passivo']['cotas'] = cotas
            engine.SNAPSHOT_SOURCE_OVERRIDES[cra] = (key, template)
            accounts = dict(cc=record['cc'], contaAplicacao=record['aplicacao'], fundoDespesas=record['reserva'])
            cash_record = dict(accounts=accounts, total=record['total'], totalCalculado=record['totalCalculado'])
            meta = dict(sourceFile=args.portfolio.name, sheetCarteira='GER004 formato novo',
                        sheetCaixa=args.cash.name, cashDate=engine.date_key_to_br(key))
            snap = engine.build_snapshot(cra, key, grouped[cra], cash_record, meta)
            snap['passivo']['cotas'] = cotas + [c for c in snap['passivo']['cotas'] if c.get('tipo') == 'sub']
            snap['caixa'] = dict(cash_record, totalInformado=record['totalInformado'],
                fonte='Saldos detalhados informados por Leonardo', arquivoOrigem=args.cash.name,
                contaCorrenteIdentificacao=record['bankAccount'], totalPolicy=record['totalPolicy'],
                reservaInsuficiente=record.get('reserveShortfall', 0),
                observacao='Fundo de despesas deduzido uma unica vez do caixa; sem nova deducao da subordinada.')
            cash_histories[cra][key] = dict(total=record['total'], totalCalculado=record['totalCalculado'], accounts=accounts)
            snap['caixaHistorico'] = copy.deepcopy(cash_histories[cra])
            number = int(cra.rsplit('-',1)[1])
            preserved_here = [r['lastro'] for r in preserved if r['cra'] == number]
            day_pending = [r for r in details if r['cra'] == number and r['pendencia_material']]
            notice = ('Previa: carteira e caixa na data-base, sem PDD. Subordinada com 100 cotas. '
                      'Titulos omitidos no novo arquivo preservados pela memoria anterior; conciliacao em andamento.')
            snap['metadata'].update(fundingCashOnly=False, assetDateKey=key, cashDateKey=key,
                positionStatus='previa', positionNotice=notice,
                revisionId=f'{key.replace("-", "")}-ger004-v2-{sha[:10]}',
                portfolioSourceSha256=sha, cashSourceSha256=parsed_cash['sourceSha256'],
                preservedMissingTitles=preserved_here, pendingValuationCount=len(day_pending))
            snap['assetReconciliation'] = dict(
                preservedMissingTitles=preserved_here,
                replacementParcels=[r for r in links if r['cra'] == number],
                paymentDifferences=[r for r in issues if r['cra'] == number and (r['cra'],r['lastro']) in active])
            for field in ('integralizacaoProForma',):
                snap['metadata'].pop(field, None)
            snap['performanceCotas'] = []
            snap['rendimento30Dias'] = []
            snap['fundingCashIssues'] = [i for i in snap.get('fundingCashIssues', [])
                if i.get('type') not in {'caixa_nao_informado', 'caixa_nao_concilia', 'reserva_superior_aos_saldos'}]
            snap['fundingCashIssues'].extend(i for i in parsed_cash['issues'] if i['cra'] == cra and i['date'] == key)
            publication.residual(snap)
            snap['sections'] = engine.build_sections(snap)
            if abs(snap['ativo']['carteiraVpLiquido'] - math.fsum(r['valorPresenteDia'] for r in grouped[cra])) > .0001:
                raise ValueError(f'Carteira nao concilia: {cra} {key}')
            if snap['ativo']['pddTotal'] != 0 or snap['passivo']['deducoesTotal'] != 0:
                raise ValueError('PDD ou despesa indevidamente deduzidos')
            day_snapshots[cra] = snap
            updates[ROOT/f'data/cras/{cra}/{key}.js'] = snap
            summary.append(dict(data=key, cra=number, carteira=snap['ativo']['carteiraVpLiquido'],
                caixa=record['total'], ativo=snap['ativo']['total'], funding=snap['passivo']['fundingTotal'],
                sub=snap['passivo']['subordinadaTotal'], quantidadeSub=100, puSub=snap['passivo']['subordinadaPuResidual'],
                preservados=len(preserved_here), pendencias=len(day_pending),
                fundingHeld=[dict(codigo=c.get('ifCodigo'), motivo=c['fundingPositionHeldReason']) for c in cotas if c.get('fundingPositionHeldReason')]))
            if key == args.through:
                for r in grouped[cra]:
                    if r.get('sourcePreserved'):
                        before = active[(number, r['lastro'])]
                        missing_latest.append(dict(cra=number, **r,
                            vpBaseAnterior=before['valorPresenteDia'], dataBaseAnterior=source_key,
                            numeroTituloAnterior=groups[(number,r['lastro'])][0].get('numero nf',''),
                            taxaContratoPct=float(ger.number(groups[(number,r['lastro'])][0].get('taxa desconto'))),
                            taxaPeriodo='a.a.' if (number,r['lastro']) in {(62,'475240')} else 'a.m.',
                            baseContrato=groups[(number,r['lastro'])][0].get('base de dias',''),
                            parcelasNovas=[v['lastroNovo'] for v in links if v['cra']==number and v['lastroAnterior']==r['lastro']]))
                pending.extend(dict(cra=number, lastro=r['lastro'], type='precificacao_pendente',
                    motivo=r['metodo_ou_motivo_exclusao']) for r in day_pending)
        overview = engine.build_overview(key, day_snapshots, meta)
        overview['metadata'].update(fundingCashOnly=False, positionStatus='previa', positionNotice=notice,
            revisionId=f'{key.replace("-", "")}-ger004-v2-{sha[:10]}-overview', assetDateKey=key, cashDateKey=key)
        totals = dict(caixa=overview['caixa']['total'], subordinada=overview['passivo']['subordinadaTotal'])
        if abs(totals['caixa'] - parsed_cash['totals'][key]) > .001:
            raise ValueError('Caixa consolidado nao concilia')
        new_overview_history.append(dict(dateKey=key, reportDate=engine.date_key_to_br(key),
            caixaTotal=totals['caixa'], subordinadaTotal=totals['subordinada'], rendimentoSubDia=None))
        earlier_history = [r for r in overview['portfolioOverview']['subHistory'] if r['dateKey'] < dates[0]]
        overview['portfolioOverview']['subHistory'] = earlier_history + copy.deepcopy(new_overview_history)
        updates[ROOT/f'data/cras/cras-carteira-overview/{key}.js'] = overview
    for path, snap in updates.items():
        cra, key = snap['metadata']['craId'], path.stem
        entry = next(r for r in manifest if r['craId'] == cra)
        row = next((r for r in entry['dates'] if r['dateKey'] == key), None)
        if row is None:
            row = dict(dateKey=key, reportDate=engine.date_key_to_br(key))
            entry['dates'].append(row)
        row.pop('path', None)
        row.update(dataScript=path.relative_to(ROOT).as_posix(), revisionId=snap['metadata']['revisionId'],
            funding=snap['passivo']['fundingTotal'], fundingCashOnly=False, totalAtivo=snap['ativo']['total'],
            subordinada=snap['passivo']['subordinadaTotal'], puSub=snap['passivo']['subordinadaPuResidual'],
            assetImported=True, portfolioAssetImport=True)
        entry['dates'].sort(key=lambda r:r['dateKey'])
        entry['currentDate'] = max(entry['currentDate'], key)
    for cra in ('cra-modelo', 'cra-65'):
        if next(r for r in manifest if r['craId'] == cra) != next(r for r in original_manifest if r['craId'] == cra):
            raise ValueError('CRA 42/65 alterado indevidamente')
    report = dict(dates=dates, portfolioFile=str(args.portfolio), cashFile=str(args.cash),
        preserved=missing_latest, issues=pending, paymentAudit=issues, replacementParcels=links, cashIssues=parsed_cash['issues'],
        rows=summary, snapshots=len(updates), inputTitles=len(source), processedTitles=len(groups),
        totals={key: {field: math.fsum(r[field] for r in summary if r['data']==key)
                      for field in ('carteira','caixa','ativo','funding','sub')} for key in dates})
    (args.output/'positions.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), 'utf-8')
    if args.apply:
        backup = args.output/'before'
        for path, snap in updates.items():
            if path.exists():
                dest = backup/path.relative_to(ROOT)
                dest.parent.mkdir(parents=True, exist_ok=True)
                if not dest.exists():
                    dest.write_bytes(path.read_bytes())
            engine.write_snapshot(path, snap['metadata']['craId'], path.stem, snap)
        dest = backup/'data/cra-manifest.js'
        dest.parent.mkdir(parents=True, exist_ok=True)
        if not dest.exists():
            dest.write_bytes(manifest_path.read_bytes())
        engine.write_manifest(manifest_path, manifest)
    print(json.dumps(dict(applied=args.apply, snapshots=len(updates), preserved=len(preserved),
        issues=len(pending), totals=report['totals']), ensure_ascii=True))


if __name__ == '__main__':
    main()
