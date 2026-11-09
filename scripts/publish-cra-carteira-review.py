from __future__ import annotations

import argparse
import copy
import csv
import importlib.util
import json
import math
from datetime import date
from decimal import Decimal
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


def book_subscription(cota, entry, funding):
    """Change historical quantities, not the per-unit valuation or cash already supplied."""
    result = copy.deepcopy(cota)
    if funding.already_booked(result, entry):
        return result
    affected = [r for r in result.get('historicoPu', []) if r['dataIso'] >= entry['date']]
    if not affected or affected[0]['dataIso'] != entry['date']:
        raise ValueError(f"Memoria sem a data da integralizacao: {entry['ifCodigo']} {entry['date']}")
    for row in affected:
        row['quantidade'] = float(Decimal(str(row['quantidade'])) + entry['quantity'])
        row['valorReais'] = float(Decimal(str(row['puAtualizado'])) * Decimal(str(row['quantidade'])))
    first = affected[0]
    first['valorEventoReais'] = float(Decimal(str(first.get('valorEventoReais') or 0)) + Decimal(entry['amount']))
    first['evento'] = ' / '.join(filter(None, [first.get('evento'), 'Integralizacao']))
    result['quantidade'] += entry['quantity']
    result['valor'] = float(Decimal(str(result['pu'])) * Decimal(str(result['quantidade'])))
    event = funding.integration_event(result, entry, first['puAtualizado'])
    event['diferencaPuIntegralizacaoControle'] = float(Decimal(entry['unitPrice']) - Decimal(str(first['puAtualizado'])))
    result.setdefault('eventosAplicados', []).append(event)
    result['eventosAplicados'].sort(key=lambda e: funding.event_date(e))
    return result


def number(value):
    return float(str(value).replace(',', '.')) if value not in ('', None) else 0.0


def iso(value):
    return '-'.join(reversed(value.split('/'))) if value else ''


def asset_row(raw, cutoff, engine):
    due, acquired = iso(raw['data_vencimento']), iso(raw['data_cessao'])
    vp = number(raw['vp_motor'])
    payment = number(raw['pagamentos_parciais'])
    label, order = engine.pdd_status_from_due(date.fromisoformat(cutoff), engine.as_date(due))
    rate = number(raw['taxa_motor_mensal_pct']) / 100
    return dict(craCarteira=raw['cra'], lastro=raw['lastro'], numeroUnico=raw['lastro'],
        cedente=raw['cedente'], sacado=raw['sacado'], devedor=raw['sacado'],
        valorAquisicao=number(raw['aquisicao']), valorFace=number(raw['face']),
        valorNominal=max(0, number(raw['face'])-payment), pagamentosAcumulados=payment,
        dataAquisicao=raw['data_cessao'], dataAquisicaoIso=acquired,
        dataVencimento=raw['data_vencimento'], dataVencimentoIso=due,
        dataLiquidacao=raw['data_baixa'] if vp == 0 else '', dataLiquidacaoIso=iso(raw['data_baixa']) if vp == 0 else '',
        status='EM CARTEIRA' if vp > 0 else raw['status_titulo'], statusOriginal=raw['status_titulo'],
        statusPagamento=raw['status_pagamento'], tipoTitulo=raw['tipo_titulo'], tipoAtivo=raw['tipo_titulo'],
        tipo=raw['tipo_taxa'], indexadorAtivo=raw['tipo_taxa'], taxa=rate, taxaOp=rate, taxaMedia=rate,
        base=number(raw['base_dias']), diasDoVencimento=(date.fromisoformat(due)-date.fromisoformat(cutoff)).days if due else 0,
        faixaVenc=label, faixaVencOrder=order, valorPresenteDia=vp, valorPresente=vp,
        valorPresenteLiquido=vp, pdd=0, metodoPrecificacao=raw['metodo_ou_motivo_exclusao'],
        observacao=raw['observacao'], valorLiquidacao=0)


def residual(snapshot):
    p = snapshot['passivo']
    p['fundingTotal'] = math.fsum(c['valor'] for c in p['cotas'] if c.get('ehFunding'))
    p['subordinadaQuantidade'] = 100
    p['subordinadaTotal'] = snapshot['ativo']['total'] - p['fundingTotal']
    p['subordinadaPuResidual'] = p['subordinadaTotal'] / 100
    for c in p['cotas']:
        if c.get('tipo') == 'sub' or c.get('classe') == 'SUB':
            c.update(quantidade=100, pu=p['subordinadaPuResidual'], valor=p['subordinadaTotal'],
                     principalResidual=p['subordinadaPuResidual'])


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--date', default='2026-11-05')
    parser.add_argument('--valuation', type=Path, required=True)
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    args.output.mkdir(parents=True, exist_ok=True)
    funding = module('publication_funding', ROOT/'scripts/refresh-funding-pu.py')
    engine = funding.engine
    engine.ACTIVE_VP_THRESHOLD = 0
    entries = json.loads(funding.INTEGRATIONS.read_text('utf-8'))
    manifest_path = ROOT/'data/cra-manifest.js'
    manifest = engine.load_json_assignment(manifest_path)
    original_manifest = copy.deepcopy(manifest)
    updates = {}
    audit = []
    for entry in entries:
        if entry['date'] < '2026-11-04':
            continue
        if funding.terms.quantize(Decimal(entry['unitPrice'])*entry['quantity'], 2) != Decimal(entry['amount']):
            raise ValueError('Valor de integralizacao nao fecha')
        for path in sorted((ROOT/f"data/cras/{entry['cra']}").glob('*.js')):
            key = path.stem
            if not entry['date'] <= key <= args.date:
                continue
            snap = updates.get(path) or engine.load_snapshot(path, entry['cra'], key)
            for i, cota in enumerate(snap['passivo']['cotas']):
                if cota.get('ifCodigo') == entry['ifCodigo']:
                    updated = book_subscription(cota, entry, funding)
                    if updated != cota:
                        audit.append(dict(cra=entry['cra'], date=key, code=entry['ifCodigo'],
                            quantityBefore=cota['quantidade'], quantityAfter=updated['quantidade'], cashUnchanged=True))
                    snap['passivo']['cotas'][i] = updated
            snap['passivo']['fundingTotal'] = math.fsum(c['valor'] for c in snap['passivo']['cotas'] if c.get('ehFunding'))
            snap['metadata']['revisionId'] = f"{key.replace('-', '')}-integracoes-20261109-{entry['cra']}"
            updates[path] = snap
    with (args.valuation/'vp-por-lastro.csv').open(encoding='utf-8-sig', newline='') as stream:
        raw = list(csv.DictReader(stream, delimiter=';'))
    assert len(raw) == 5763
    grouped = {}
    for r in raw:
        grouped.setdefault(f"cra-carteira-{r['cra']}", []).append(asset_row(r, args.date, engine))
    meta = dict(sourceFile='CRA_GER004 - Titulos (5).csv', sheetCarteira='CSV GER004',
                sheetCaixa='Caixa detalhado', cashDate=engine.date_key_to_br(args.date))
    snapshots = {}
    for cra, rows in grouped.items():
        path = ROOT/f'data/cras/{cra}/{args.date}.js'
        old = updates.get(path) or engine.load_snapshot(path, cra, args.date)
        engine.SNAPSHOT_SOURCE_OVERRIDES[cra] = (args.date, old)
        snap = engine.build_snapshot(cra, args.date, rows, old['caixa'], meta)
        # Asset publication must not bypass the funding engine's maturity/event holds.
        snap['passivo']['cotas'] = [copy.deepcopy(c) for c in old['passivo']['cotas'] if c.get('ehFunding')] + [
            c for c in snap['passivo']['cotas'] if c.get('tipo') == 'sub' or c.get('classe') == 'SUB']
        snap['caixa'] = copy.deepcopy(old['caixa'])
        snap['metadata'].update(fundingCashOnly=False, revisionId=f"20261105-revisao-20261109-{cra}",
            positionNotice='Previa de 05/11/2026. Carteira, caixa e funding na mesma data; pendencias de conciliacao continuam sinalizadas.',
            assetDateKey=args.date, cashDateKey=args.date, positionStatus='previa')
        snap['performanceCotas'] = []
        snap['rendimento30Dias'] = []
        residual(snap)
        assert abs(snap['ativo']['carteiraVpLiquido'] - math.fsum(r['valorPresenteDia'] for r in rows)) < .0001
        assert snap['caixa'] == old['caixa']
        assert [c for c in snap['passivo']['cotas'] if c.get('ehFunding')] == [c for c in old['passivo']['cotas'] if c.get('ehFunding')]
        snapshots[cra] = snap
        updates[path] = snap
    overview = engine.build_overview(args.date, snapshots, meta)
    overview['metadata'].update(fundingCashOnly=False, positionNotice='Previa de 05/11/2026; 30 CRAs Carteira, sem PDD. Subordinadas com 100 cotas.',
                                positionStatus='previa', revisionId='20261105-revisao-20261109-overview')
    overview['portfolioOverview']['subHistory'] = []
    updates[ROOT/f'data/cras/cras-carteira-overview/{args.date}.js'] = overview
    for key in sorted({p.stem for p in updates if p.stem < args.date}):
        path = ROOT/f'data/cras/cras-carteira-overview/{key}.js'
        historical = engine.load_snapshot(path, 'cras-carteira-overview', key)
        for updated_path,snap in list(updates.items()):
            if updated_path.stem != key:
                continue
            cra = snap['metadata']['craId']
            for row in historical['portfolioOverview']['rows']:
                if row['craId'] == cra:
                    cota = next(c for c in snap['passivo']['cotas'] if c.get('ifCodigo') == row.get('ifCodigo'))
                    row.update(puAtual=cota['pu'], valorAtual=cota['valor'], quantidadeIntegralizada=cota['quantidade'])
            next(v for v in historical['fundingCashVehicles'] if v['craId'] == cra)['funding'] = snap['passivo']['fundingTotal']
        historical['passivo']['fundingTotal'] = math.fsum(v['funding'] or 0 for v in historical['fundingCashVehicles'])
        historical['metadata']['revisionId'] = f"{key.replace('-', '')}-integracoes-20261109-overview"
        updates[path] = historical
    # A new subscription is matched by an equal pro forma cash inflow, never against stale cash alone.
    proforma = copy.deepcopy(snapshots['cra-carteira-74'])
    proforma_entry = next(e for e in entries if e['date'] == '2026-11-09')
    for i, c in enumerate(proforma['passivo']['cotas']):
        if c.get('ehFunding'):
            projected = funding.extend_series(c, args.date, '2026-11-09',
                set(json.loads(funding.terms.REGISTRY.read_text('utf-8'))['businessCalendar']['holidays']),
                engine.parse_di_rates(), integrations=[e for e in entries if e['cra']=='cra-carteira-74'])
            if projected['through'] != '2026-11-09':
                raise ValueError(projected)
            c['historicoPu'].extend(projected['rows'])
            last = projected['rows'][-1]
            c.update(pu=last['puAtualizado'], quantidade=last['quantidade'], valor=last['valorReais'], fundingSourceDateKey='2026-11-09')
            c.setdefault('eventosAplicados', []).extend(projected.get('events', []))
    incoming = float(proforma_entry['amount'])
    proforma['caixa']['total'] += incoming
    proforma['caixa']['accounts']['integralizacaoProForma'] = incoming
    proforma['caixa'].update(dataBaseSaldoOriginal=args.date, integralizacaoProForma=incoming,
        observacao='Caixa de 05/11 acrescido exclusivamente da integralizacao de 09/11; demais movimentos nao recebidos.')
    proforma['ativo']['caixa'] = proforma['caixa']['total']
    proforma['ativo']['total'] = proforma['ativo']['carteiraVpLiquido'] + proforma['caixa']['total']
    residual(proforma)
    proforma['metadata'].update(dateKey='2026-11-09', reportDate='09/11/2026', revisionId='20261109-proforma74',
        positionNotice='PREVIA PRO FORMA de 09/11/2026: carteira e caixa-base de 05/11, caixa acrescido em R$ 1.501.047,01; funding atualizado em 09/11. Demais movimentos posteriores a 05/11 ainda nao recebidos.',
        positionStatus='previa_pro_forma', assetDateKey=args.date, cashDateKey=args.date)
    proforma['cra'].update(dateKey='2026-11-09', dataBase='09/11/2026')
    proforma['performanceCotas'] = []
    proforma['rendimento30Dias'] = []
    proforma['sections'] = engine.build_sections(proforma)
    updates[ROOT/'data/cras/cra-carteira-74/2026-11-09.js'] = proforma
    for path, snap in updates.items():
        cra = snap['metadata']['craId']
        key = path.stem
        item = next(x for x in manifest if x['craId'] == cra)
        row = next((x for x in item['dates'] if x['dateKey'] == key), None)
        if row is None:
            row = dict(dateKey=key, reportDate=engine.date_key_to_br(key), dataScript=str(path.relative_to(ROOT)).replace('\\','/'))
            item['dates'].append(row)
        row.pop('path', None)
        row['dataScript'] = str(path.relative_to(ROOT)).replace('\\','/')
        row.update(revisionId=snap['metadata']['revisionId'], funding=snap['passivo']['fundingTotal'])
        if not snap['metadata'].get('fundingCashOnly'):
            row.update(fundingCashOnly=False, totalAtivo=snap['ativo']['total'],
                       subordinada=snap['passivo']['subordinadaTotal'], puSub=snap['passivo']['subordinadaPuResidual'],
                       assetImported=True, portfolioAssetImport=True)
        item['dates'].sort(key=lambda x:x['dateKey'])
        item['currentDate'] = max(item['currentDate'], key)
    for item in manifest:
        if item['craId'] in ('cra-modelo', 'cra-65'):
            assert item == next(x for x in original_manifest if x['craId']==item['craId'])
    report = dict(positionsDate=args.date, proFormaDate='2026-11-09', integrations=entries[2:],
        changes=audit, snapshots=len(updates), assetsTotal=math.fsum(s['ativo']['carteiraVpLiquido'] for s in snapshots.values()),
        rows=[dict(cra=int(k.rsplit('-',1)[1]), vp=s['ativo']['carteiraVpLiquido'], caixa=s['caixa']['total'],
            ativo=s['ativo']['total'], funding=s['passivo']['fundingTotal'], sub=s['passivo']['subordinadaTotal'],
            quantidade=100, pu=s['passivo']['subordinadaPuResidual'], data=args.date,
            observacao='Vencimento do funding pendente' if k=='cra-carteira-46' else 'Previa; conciliacao em andamento')
            for k,s in sorted(snapshots.items(),key=lambda x:int(x[0].rsplit('-',1)[1]))],
        proforma=dict(cra=74, vp=proforma['ativo']['carteiraVpLiquido'], caixa=proforma['caixa']['total'],
            ativo=proforma['ativo']['total'], funding=proforma['passivo']['fundingTotal'],
            sub=proforma['passivo']['subordinadaTotal'], quantidade=100, pu=proforma['passivo']['subordinadaPuResidual'],
            data='2026-11-09', observacao=proforma['metadata']['positionNotice']),
        funding=[dict(cra=int(k.rsplit('-',1)[1]), codigo=c.get('ifCodigo'), serie=c['classe'],
            quantidade=c['quantidade'], pu=c['pu'], valor=c['valor'], data=c.get('fundingSourceDateKey') or args.date)
            for k,s in snapshots.items() for c in s['passivo']['cotas'] if c.get('ehFunding')])
    (args.output/'positions.json').write_text(json.dumps(report,ensure_ascii=True,indent=2),'utf-8')
    if args.apply:
        backup = args.output/'before'
        backup.mkdir(exist_ok=True)
        for path,snap in updates.items():
            if path.exists():
                dest=backup/path.parent.name/path.name
                dest.parent.mkdir(parents=True,exist_ok=True)
                if not dest.exists(): dest.write_bytes(path.read_bytes())
            engine.write_snapshot(path,snap['metadata']['craId'],path.stem,snap)
        if not (backup/'cra-manifest.js').exists(): (backup/'cra-manifest.js').write_bytes(manifest_path.read_bytes())
        engine.write_manifest(manifest_path,manifest)
    print(json.dumps(dict(snapshots=len(updates), changes=len(audit), assetsTotal=report['assetsTotal'],
                         proformaSub=report['proforma']['sub'])))


if __name__ == '__main__':
    main()
