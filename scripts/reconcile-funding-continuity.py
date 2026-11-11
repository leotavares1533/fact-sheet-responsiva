from __future__ import annotations

import argparse
import copy
from datetime import date, timedelta
from decimal import Decimal
import importlib.util
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('funding_continuity', ROOT/'scripts/refresh-funding-pu.py')
funding = importlib.util.module_from_spec(spec)
spec.loader.exec_module(funding)
engine, terms = funding.engine, funding.terms
VERSION = 'pu-continuidade-20261111'
RULES = {
    'CRA02500B49': dict(cra=47, anchor='2026-07-30', spread=.075, lag=1, capitalization=False),
    'CRA02500B9X': dict(cra=49, anchor='2026-07-23', spread=.07, lag=2, capitalization=True),
    'CRA026000B7': dict(cra=53, anchor='2026-07-23', spread=.07, lag=2, capitalization=True),
    'CRA026000B9': dict(cra=54, anchor='2026-07-23', spread=.07, lag=2, capitalization=True),
    'CRA026000MB': dict(cra=55, anchor='2026-07-23', spread=.07, lag=2, capitalization=True),
}
EXTRA_CONTINUITY = {'CRA02500B41', 'CRA02500B9U', 'CRA02500B9Z', 'CRA026000S7'}


def D(value):
    return Decimal(str(value or 0))


def q8(value):
    return terms.quantize(D(value), 8, terms.ROUND_DOWN)


def replay(cota, rule, cutoff, holidays, rates):
    result = copy.deepcopy(cota)
    anchor = rule['anchor']
    history = result['historicoPu']
    start = next(row for row in history if row['dataIso'] == anchor)
    old = {row['dataIso']: row for row in history}
    principal = q8(start['puAtualizado'] if rule['capitalization'] else start['valorNominal'])
    basis = principal
    rows = [copy.deepcopy(row) for row in history if row['dataIso'] < anchor]
    payments = {funding.event_date(e): e for e in result['eventosAplicados']
                if e.get('tipo') in ('juros_amortizacao', 'juros', 'amortizacao')
                and anchor < funding.event_date(e) <= cutoff}
    ignored = json.loads((ROOT/'data/fundings/cras-carteira/confirmacoes-2026-10-29.json').read_text('utf-8'))
    for key in payments:
        confirmation = ignored.get(f"cra-carteira-{rule['cra']}/{cota['classe']}/{key}")
        if confirmation and confirmation.get('ignoreForPu'):
            raise ValueError(f'Pagamento financeiro duplicado no PU: {cota["ifCodigo"]}/{key}')
    product, days = Decimal(1), 0
    absolute_days = int(start.get('diasUteis') or 0)
    cursor = date.fromisoformat(anchor)
    while cursor <= date.fromisoformat(cutoff):
        key = cursor.isoformat()
        business = engine.is_business_day(cursor, holidays)
        previous = old.get(key, {})
        quantity = D(previous.get('quantidade', cota['quantidade']))
        daily, reference = Decimal(0), ''
        if key > anchor and business:
            reference = terms.prior_business_day(key, rule['lag'], holidays)
            rate = rates.get(reference, {})
            if rate.get('fonte') != 'Banco Central do Brasil - SGS 12':
                raise ValueError(f'CDI oficial ausente: {reference}')
            daily = terms.quantize(D(rate['taxaDia']), 8)
            product = terms.quantize(product*(1+daily), 16, terms.ROUND_DOWN)
            days += 1
            absolute_days += 1
        calculated = terms.documented_pu(basis, product, rule['spread'], days)
        before = D(calculated['pu'])
        interest = q8(before-principal)
        payment = payments.get(key)
        nominal_before = principal
        paid = Decimal(0)
        if payment:
            paid = D(payment.get('valorEventoReais'))
            paid_unit = paid/quantity
            if not interest <= paid_unit <= before:
                raise ValueError(f'Rateio especial requer conferencia: {cota["ifCodigo"]}/{key}')
            payment.setdefault('rateioAntesRevisao20261111', {
                k: payment.get(k) for k in ('puAntesEvento', 'puAposEvento', 'puJuros',
                    'puAmortizacao', 'valorJuros', 'valorAmortizacao')})
            principal = basis = q8(before-paid_unit)
            payment.update(puAntesEvento=float(before), puAposEvento=float(principal),
                puJuros=float(interest), puAmortizacao=float(q8(paid_unit-interest)),
                puEvento=float(terms.quantize(paid_unit, 8)), quantidadeRateio=float(quantity),
                valorJuros=float(interest*quantity), valorAmortizacao=float(paid-interest*quantity),
                revisaoPu=VERSION, observacao='Valor financeiro preservado; rateio recomposto com defasagem e fatores contratuais.')
            after = principal
        else:
            after = before
        row = dict(previous)
        row.update(dataIso=key, data=engine.date_key_to_br(key), diaUtil=business,
            quantidade=float(quantity), valorNominal=float(principal), puBaseCalculo=float(basis),
            puAtualizado=float(after), puJuros=float(q8(after-principal)), valorReais=float(after*quantity),
            puAntesEvento=float(before), puAposEvento=float(after),
            principalAntesEvento=float(nominal_before), principalAposEvento=float(principal),
            puEvento=payment['puEvento'] if payment else 0, valorEventoReais=float(paid),
            evento='Juros / amortizacao' if payment else 'Incorporacao na troca de remuneracao'
                if key == anchor and rule['capitalization'] else previous.get('evento', ''),
            taxaDiUtilizadaDia=float(daily), tdk=float(daily), fatorDiario=float(1+daily),
            taxaDiAnualEquivalente=float((1+daily)**252-1) if daily else 0,
            dataTaxaDiIso=reference, dataReferenciaTaxaDiIso=reference,
            dataTaxaDi=engine.date_key_to_br(reference) if reference else '',
            dataReferenciaTaxaDi=engine.date_key_to_br(reference) if reference else '',
            taxaDiStatus='historica_documentada', lagBusinessDays=rule['lag'], spread=rule['spread'],
            diasUteis=absolute_days, diasUteisPeriodo=0 if payment else days,
            metodoCalculo='di_spread_ts_252', fatorJurosAcumulado=1 if payment else calculated['factor'],
            fator=1 if payment else calculated['factor'], fatorSpread=1 if payment else calculated['spread'],
            fatorDiAcumulado=1 if payment else calculated['di'],
            produtorioFatorDi=1 if payment else float(product),
            fatorAcumuladoDecimal='1' if payment else str(product))
        if key == anchor and not rule['capitalization']:
            for field in ('puAntesEvento', 'puEvento', 'valorEventoReais', 'principalAntesEvento', 'evento'):
                if field in start:
                    row[field] = start[field]
        rows.append(row)
        if payment:
            product, days = Decimal(1), 0
        cursor += timedelta(days=1)
    last = rows[-1]
    result.update(historicoPu=rows, pu=last['puAtualizado'], principalResidual=last['valorNominal'],
        valor=last['valorReais'], metodo='di_spread_ts_252', spreadAa=rule['spread'],
        taxaJurosSpread=rule['spread'], lagBusinessDays=rule['lag'], indexador='DI', percentualIndexador=1,
        taxaAa=0, taxaAm=0, taxaDia=0, usarMotorFundingContratual=True,
        fundingSourceDateKey=cutoff, previsaoPu=[])
    result['acumulacaoFinal'].update(puFinal=result['pu'], periodoFim=engine.date_key_to_br(cutoff),
        diasAcumulacao=last['diasUteis'], diasUteisPeriodo=last['diasUteisPeriodo'])
    result['revisaoContinuidadePu'] = dict(versao=VERSION, inicio=anchor, lagBusinessDays=rule['lag'],
        puAnterior=cota.get('revisaoContinuidadePu', {}).get('puAnterior', cota['pu']),
        caixaPreservado=True, carteiraPreservada=True, pagamentosFinanceirosPreservados=True,
        ancora='PU anterior a troca preservado e incorporado na base contratual' if rule['capitalization']
               else 'Saldo apos pagamento confirmado de 30/07 preservado')
    return result


def repair_continuity(cota, cutoff, holidays, rates):
    result = copy.deepcopy(cota)
    history = [r for r in result['historicoPu'] if r['dataIso'] <= '2026-10-27']
    result.update(historicoPu=history, pu=history[-1]['puAtualizado'])
    extension = funding.extend_series(result, '2026-10-27', cutoff, holidays, rates)
    if extension['through'] != cutoff:
        raise ValueError(extension)
    result['historicoPu'].extend(extension['rows'])
    last = result['historicoPu'][-1]
    result.update(pu=last['puAtualizado'], valor=last['valorReais'], fundingSourceDateKey=cutoff, previsaoPu=[])
    result['acumulacaoFinal'].update(puFinal=result['pu'], periodoFim=engine.date_key_to_br(cutoff),
        diasAcumulacao=last['diasUteis'], diasUteisPeriodo=last['diasUteisPeriodo'])
    result['revisaoContinuidadePu'] = dict(versao=VERSION, inicio='2026-10-27',
        puAnterior=cota.get('revisaoContinuidadePu', {}).get('puAnterior', cota['pu']),
        caixaPreservado=True, carteiraPreservada=True, pagamentosFinanceirosPreservados=True)
    return result


def residual(snapshot):
    p = snapshot['passivo']
    p['fundingTotal'] = math.fsum(c['valor'] for c in p['cotas'] if c.get('ehFunding'))
    if not snapshot['metadata'].get('fundingCashOnly') and snapshot['ativo'].get('total') is not None:
        p['subordinadaTotal'] = snapshot['ativo']['total']-p['fundingTotal']
        quantity = p.get('subordinadaQuantidade') or 100
        p['subordinadaPuResidual'] = p['subordinadaTotal']/quantity
        for c in p['cotas']:
            if c.get('tipo') == 'sub':
                c.update(pu=p['subordinadaPuResidual'], valor=p['subordinadaTotal'], principalResidual=p['subordinadaPuResidual'])
                for row in c.get('historicoPu', []):
                    if row['dataIso'] == snapshot['metadata']['dateKey']:
                        row.update(puAtualizado=c['pu'], valorNominal=c['pu'], valorReais=c['valor'])
        snapshot['sections'] = engine.build_sections(snapshot)


def run(through, output, apply=False):
    output.mkdir(parents=True, exist_ok=True)
    holidays = set(json.loads(terms.REGISTRY.read_text('utf-8'))['businessCalendar']['holidays'])
    rates = engine.parse_di_rates()
    manifest_path = ROOT/'data/cra-manifest.js'
    manifest = engine.load_json_assignment(manifest_path)
    changes, updates, snapshots_by_date = [], {}, {}
    for item in manifest:
        cra = item['craId']
        if not cra.startswith('cra-carteira-'):
            continue
        for entry in item['dates']:
            key = entry['dateKey']
            if not '2026-07-23' <= key <= through:
                continue
            file = ROOT/f'data/cras/{cra}/{key}.js'
            old = engine.load_snapshot(file, cra, key)
            snap = copy.deepcopy(old)
            revised = []
            for i, cota in enumerate(snap['passivo']['cotas']):
                code = cota.get('ifCodigo')
                if code in RULES and key >= RULES[code]['anchor']:
                    new = replay(cota, RULES[code], key, holidays, rates)
                elif code in EXTRA_CONTINUITY and key > '2026-10-27' and cota.get('pu') and cota.get('quantidade'):
                    new = repair_continuity(cota, key, holidays, rates)
                else:
                    continue
                snap['passivo']['cotas'][i] = new
                revised.append(code)
                changes.append(dict(cra=cra, date=key, code=code, oldPu=cota['pu'], newPu=new['pu'],
                    deltaFunding=new['valor']-cota['valor']))
            if not revised:
                continue
            residual(snap)
            assert snap['ativo'] == old['ativo'] and snap['caixa'] == old['caixa']
            assert snap.get('carteira') == old.get('carteira')
            snap['metadata'].update(revisionId=f'{key.replace("-", "")}-{VERSION}-{cra}', fundingContinuityRevision=VERSION)
            updates[file] = snap
            snapshots_by_date.setdefault(key, {})[cra] = snap
            entry.update(revisionId=snap['metadata']['revisionId'], funding=snap['passivo']['fundingTotal'])
            for field, path in [('subordinada', 'subordinadaTotal'), ('puSub', 'subordinadaPuResidual')]:
                if field in entry:
                    entry[field] = snap['passivo'].get(path)
    for key, changed in sorted(snapshots_by_date.items()):
        file = ROOT/f'data/cras/cras-carteira-overview/{key}.js'
        if not file.exists():
            continue
        original = engine.load_snapshot(file, 'cras-carteira-overview', key)
        overview = copy.deepcopy(original)
        if original['metadata'].get('portfolioConsolidado'):
            all_snapshots = {}
            for row in original['portfolioOverview']['assetRows']:
                cra = row['craId']
                p = ROOT/f'data/cras/{cra}/{key}.js'
                all_snapshots[cra] = changed.get(cra) or engine.load_snapshot(p, cra, key)
            meta = original['metadata']['assetImport']
            overview = engine.build_overview(key, all_snapshots, dict(meta, cashDate=engine.date_key_to_br(key)))
            overview['metadata'] = copy.deepcopy(original['metadata'])
            overview['sources'] = original['sources']
            assert overview['ativo'] == original['ativo'] and overview['caixa'] == original['caixa']
        else:
            cotas = {c['ifCodigo']: c for s in changed.values() for c in s['passivo']['cotas'] if c.get('ifCodigo')}
            for row in overview['portfolioOverview']['rows']:
                if c := cotas.get(row.get('ifCodigo')):
                    row.update(puAtual=c['pu'], valorAtual=c['valor'])
            for vehicle in overview.get('fundingCashVehicles', []):
                if s := changed.get(vehicle['craId']):
                    vehicle['funding'] = s['passivo']['fundingTotal']
            delta = math.fsum(s['passivo']['fundingTotal']-engine.load_snapshot(
                ROOT/f'data/cras/{cra}/{key}.js', cra, key)['passivo']['fundingTotal'] for cra,s in changed.items())
            overview['passivo']['fundingTotal'] += delta
        overview['metadata'].update(revisionId=f'{key.replace("-", "")}-{VERSION}-overview', fundingContinuityRevision=VERSION)
        updates[file] = overview
        entry = next(e for i in manifest if i['craId'] == 'cras-carteira-overview' for e in i['dates'] if e['dateKey'] == key)
        entry.update(revisionId=overview['metadata']['revisionId'], funding=overview['passivo']['fundingTotal'])
        for field, path in [('subordinada', 'subordinadaTotal'), ('puSub', 'subordinadaPuResidual')]:
            if field in entry:
                entry[field] = overview['passivo'].get(path)
    totals = {p.stem: s['passivo'].get('subordinadaTotal') for p,s in updates.items()
              if p.parent.name == 'cras-carteira-overview' and not s['metadata'].get('fundingCashOnly')}
    for p,s in updates.items():
        if p.parent.name != 'cras-carteira-overview':
            continue
        for row in s['portfolioOverview'].get('subHistory', []):
            if row['dateKey'] in totals:
                row['subordinadaTotal'] = totals[row['dateKey']]
                row['rendimentoSubDia'] = None
    report = dict(version=VERSION, through=through, applied=apply, changes=changes,
                  snapshots=len(updates), codes=sorted({r['code'] for r in changes}))
    (output/'reconciliation.json').write_text(json.dumps(report, ensure_ascii=False, indent=2), 'utf-8')
    if apply:
        for file,snap in updates.items():
            before = output/'before'/file.relative_to(ROOT)
            before.parent.mkdir(parents=True, exist_ok=True)
            if not before.exists():
                before.write_bytes(file.read_bytes())
            engine.write_snapshot(file, snap['metadata']['craId'], file.stem, snap)
        before = output/'before/data/cra-manifest.js'
        before.parent.mkdir(parents=True, exist_ok=True)
        if not before.exists():
            before.write_bytes(manifest_path.read_bytes())
        engine.write_manifest(manifest_path, manifest)
    print(json.dumps(dict(snapshots=len(updates), series=len(report['codes']), applied=apply,
        latest=[r for r in changes if r['date']==through]), ensure_ascii=True))
    return report


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--through', default='2026-11-09')
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    run(args.through, args.output, args.apply)
