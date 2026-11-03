from __future__ import annotations

import argparse
import copy
import importlib.util
import json
from datetime import date
from decimal import Decimal
from math import fsum
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('document_review', ROOT / 'scripts/reconcile-cras-carteira-documents.py')
review = importlib.util.module_from_spec(spec)
spec.loader.exec_module(review)
engine = review.ENGINE
CUTOFF = '2026-10-27'
REVISION = '20261027-revisao-interna-20261103'
INCORPORATION_REVISION = f'{REVISION}-cra73'
INCORPORATION_CODE = 'CRA02600590'
INCORPORATION_DATE = '2026-09-18'

# The anchor date itself earns no new factor. Subsequent business days use DI D-2.
RULES = {
    'CRA026000MH': (51, '2026-08-17', Decimal('704.3928194241325'), .07,
                    'Comunicado CRA 51 de 17/08/2026, aba Versao final, PU residual informado.'),
    'CRA026000MI': (51, '2026-07-23', None, .07,
                    '5o aditamento do CRA 51, clausula 5.1.16.2. PU de 23/07 preservado na mudanca de regime.'),
    'CRA026000S8': (59, '2026-06-11', Decimal(1000), .065,
                    '1o aditamento do CRA 59, de 10/06/2026. Primeira integralizacao registrada em 11/06.'),
    'CRA0260020F': (62, '2026-07-10', Decimal('916.28861'), .075,
                    '1o aditamento do CRA 62, clausula 5.1.16.1, e comunicado de 10/07/2026, PU residual.'),
    'CRA0260020G': (62, '2026-06-05', Decimal(1000), .075,
                    '1o aditamento do CRA 62, clausula 5.1.16.2. Primeira integralizacao em 05/06 confirmada em 03/11/2026.'),
    INCORPORATION_CODE: (73, '2026-08-19', Decimal(1000), .075,
                         'TS CRA 73 e comunicado de 18/09/2026; incorporacao dos juros remanescentes confirmada por Leonardo.'),
}


def replay(cota, code, holidays, rates):
    _, anchor, principal, spread, source = RULES[code]
    history = cota['historicoPu']
    assert history[-1]['dataIso'] == CUTOFF
    start = next(row for row in history if row['dataIso'] == anchor)
    after = [row for row in history if row['dataIso'] > anchor]
    incorporation_date = INCORPORATION_DATE if code == INCORPORATION_CODE else None
    expected = [date.fromordinal(day) for day in range(
        date.fromisoformat(anchor).toordinal() + 1, date.fromisoformat(CUTOFF).toordinal() + 1)]
    if incorporation_date:
        expected = [day for day in expected if day.weekday() < 5 and day.isoformat() not in holidays]
    assert [row['dataIso'] for row in after] == [day.isoformat() for day in expected], f'Incomplete history: {code}'
    assert all(not row.get('puEvento', 0) or row['dataIso'] == incorporation_date
               for row in after), f'Unexpected payment after anchor: {code}'
    assert all(not (event['dataIso'] > anchor and event.get('tipo') not in {'integralizacao', 'alteracao_taxa'})
               or event['dataIso'] == incorporation_date
               for event in cota['eventosAplicados']), f'Unexpected event after anchor: {code}'

    old_pu = cota.get('revisaoInternaPu', {}).get('puAnterior', cota['pu'])
    principal = review.quantize(principal if principal is not None else Decimal(str(start['valorNominal'])), 8, review.ROUND_DOWN)
    # The July rate switch retains accrued pre-fixed remuneration without changing VNA.
    basis = Decimal(str(start['puAtualizado'])) if code == 'CRA026000MI' else principal
    days = 0
    days_at_reset = start['diasUteis']
    product = Decimal(1)
    if code != 'CRA026000MI':
        start.update(valorNominal=float(principal), puAtualizado=float(principal),
                     puAposEvento=float(principal), principalAposEvento=float(principal),
                     puJuros=0, diasUteisPeriodo=0, fator=1, fatorJurosAcumulado=1,
                     fatorDiAcumulado=1, fatorDiArredondado=1, fatorSpread=1, produtorioFatorDi=1,
                     valorReais=float(principal)*start['quantidade'], spreadAcumulado=0)
        if code == 'CRA026000MH':
            update_51_payment(cota, start, principal)
        elif code == 'CRA0260020F':
            assert start['quantidade'] == 20000 and start['valorEventoReais'] == 2170000
            start.update(puAntesEvento=1024.78861, puEvento=108.5, taxaDiStatus='saldo_documentado_evento')
        elif code in {'CRA026000S8', 'CRA0260020G', INCORPORATION_CODE}:
            start.update(puAntesEvento=float(principal), principalAntesEvento=float(principal),
                         taxaDiStatus='integralizacao_sem_acrescimo_diario', taxaDiUtilizadaDia=0,
                         tdk=0, fatorDiario=1, dataTaxaDi='', dataTaxaDiIso='',
                         dataReferenciaTaxaDi='', dataReferenciaTaxaDiIso='')
    for row in after:
        key = row['dataIso']
        business = date.fromisoformat(key).weekday() < 5 and key not in holidays
        ref, daily = '', Decimal(0)
        if business:
            ref = review.prior_business_day(key, 2, holidays)
            if ref not in rates:
                raise ValueError(f'DI historico indisponivel para {ref} ({code}); sem estimativa.')
            daily = review.quantize(Decimal(str(rates[ref]['taxaDia'])), 8)
            product = review.quantize(product*(1+daily), 16, review.ROUND_DOWN)
            days += 1
        calculated = review.documented_pu(basis, product, spread, days)
        pu = calculated['pu']
        row.update(diaUtil=business, diasUteis=days_at_reset+days, diasUteisPeriodo=days,
                   valorNominal=float(principal), puAtualizado=pu, puJuros=round(pu-float(principal), 8),
                   puAntesEvento=pu, puAposEvento=pu, principalAntesEvento=float(principal),
                   principalAposEvento=float(principal), valorReais=pu*row['quantidade'],
                   fator=pu/float(principal) if code == 'CRA026000MI' else calculated['factor'],
                   fatorJurosAcumulado=calculated['factor'],
                   fatorDiario=float(1+daily), produtorioFatorDi=float(product),
                   fatorDiAcumulado=calculated['di'], fatorDiArredondado=calculated['di'],
                   fatorSpread=calculated['spread'], spread=spread, spreadAcumulado=calculated['spread']-1,
                   taxaDiStatus='historica_documentada', taxaDiUtilizadaDia=float(daily), tdk=float(daily),
                   taxaDiAnualEquivalente=(1+float(daily))**252-1 if daily else 0,
                   dataTaxaDiIso=ref, dataTaxaDi=engine.date_key_to_br(ref) if ref else '',
                   dataReferenciaTaxaDiIso=ref, dataReferenciaTaxaDi=engine.date_key_to_br(ref) if ref else '',
                   lagBusinessDays=2, diasAdicionaisPrimeiroPeriodo=0, puBaseCalculo=float(basis),
                   metodoMemoria='DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8')
        if key == incorporation_date:
            principal = basis = apply_73_incorporation(cota, row, principal)
            days_at_reset, days, product = row['diasUteis'], 0, Decimal(1)
    last = history[-1]
    cota.update(pu=last['puAtualizado'], principalResidual=last['valorNominal'], valor=last['valorReais'],
                metodo='di_spread_ts_252', lagBusinessDays=2)
    cota['acumulacaoFinal'].update(puFinal=cota['pu'], diasAcumulacao=last['diasUteis'])
    if incorporation_date:
        cota['acumulacaoFinal'].update(periodoInicio=engine.date_key_to_br(incorporation_date),
                                      diasUteisPeriodo=last['diasUteisPeriodo'])
    cota['importacaoFundingCaixa']['calculation'] = 'memoria_recalculada_di_d2_com_ancora_documentada'
    version = INCORPORATION_REVISION if incorporation_date else REVISION
    cota['revisaoInternaPu'] = dict(versao=version, dataBase=CUTOFF, inicio=anchor, fonte=source,
                                 diasUteis=last['diasUteis']-start['diasUteis'],
                                 diReferenciaFinal=last['dataReferenciaTaxaDiIso'],
                                 puAnterior=old_pu, pendencia=None)
    return dict(ifCodigo=code, puAnterior=old_pu, puRevisado=cota['pu'], fonte=source,
                pendencia=None)


def update_51_payment(cota, row, principal):
    quantity = row['quantidade']
    payment = next(e for e in cota['eventosAplicados'] if e['dataIso'] == row['dataIso']
                   and e['tipo'] == 'juros_amortizacao')
    assert quantity == 9000 and payment['valorEventoReais'] == 1955000
    unit_amort = Decimal('204.92650657586756')
    unit_interest = Decimal('12.295715900000005')
    event_pu = unit_amort+unit_interest
    assert abs(event_pu*quantity-Decimal(1955000)) < Decimal('.005')
    before = review.quantize(principal+event_pu, 8)
    row.update(puAntesEvento=float(before), puEvento=float(event_pu),
               valorEventoReais=payment['valorEventoReais'], taxaDiStatus='saldo_documentado_evento')
    payment.update(puAntesEvento=float(before), puEvento=float(event_pu), puAposEvento=float(principal),
                   quantidadeNoEvento=quantity, puJuros=float(unit_interest), puAmortizacao=float(unit_amort),
                   efetivacaoConfirmadaEm='2026-11-03',
                   documentoRateio='CRA 51 / Comunicado de 17/08/2026 / Layout_ceres VF.xlsx / Versao final')


def apply_73_incorporation(cota, row, principal):
    events = [e for e in cota['eventosAplicados'] if e['dataIso'] == row['dataIso']]
    assert len(events) == 1
    payment = events[0]
    quantity = row['quantidade']
    paid = Decimal(str(payment['valorEventoReais']))
    assert quantity == 35900 and paid == payment['valorJuros'] == 263000 and payment['valorAmortizacao'] == 0
    before = Decimal(str(row['puAntesEvento']))
    paid_unit = paid / Decimal(str(quantity))
    after = review.quantize(before-paid_unit, 8, review.ROUND_DOWN)
    incorporated = after-principal
    assert incorporated > 0
    fields = dict(puAntesEvento=float(before), puEvento=float(paid_unit), puAposEvento=float(after),
                  principalAntesEvento=float(principal), principalAposEvento=float(after),
                  puJurosIncorporados=float(incorporated),
                  valorJurosIncorporados=float(review.quantize(incorporated*Decimal(str(quantity)), 2)))
    payment.update(fields, tipo='juros', tipoEvento='Juros com incorporacao do saldo',
                   quantidadeNoEvento=quantity, puAmortizacao=0, incorporacaoConfirmadaEm='2026-11-03',
                   puAposEventoImagem=1009.68097971)
    # The payment-day factors explain the gross PU; the next day starts on the new principal.
    row.update(fields, valorNominal=float(after), puAtualizado=float(after),
               diasUteisAntesEvento=row['diasUteisPeriodo'],
               puJurosAntesEvento=float(before-principal), puJuros=0, diasUteisPeriodo=0,
               valorReais=float(after)*quantity, valorEventoReais=float(paid),
               evento='Juros pagos e saldo incorporado')
    cota['financialEventConfirmation'].update(
        status='pagamento_e_incorporacao_confirmados_af_omisso', incorporationConfirmationDate='2026-11-03',
        remainingIssue='AF sem evento. Saldo recalculado pelo DI D-2 difere do informado na imagem.')
    validation = cota['documentValidation']
    validation['calculationStatus'] = 'recalculo_evento_confirmado'
    validation['fields'] = [field for field in validation['fields']
                            if not field.startswith('Pagamento de R$ 263.000 em 18/09')]
    validation['fields'].append('Pagamento de R$ 263.000 em 18/09 e incorporacao do saldo confirmados; AF sem evento.')
    return after


def reconcile(apply):
    registry = json.loads(review.REGISTRY.read_text(encoding='utf-8'))
    holidays = set(registry['businessCalendar']['holidays'])
    manifest_path = ROOT / 'data/cra-manifest.js'
    manifest = engine.load_json_assignment(manifest_path)
    ids = {f'cra-carteira-{rule[0]}' for rule in RULES.values()}
    overview_id = 'cras-carteira-overview'
    paths = {k: ROOT / f'data/cras/{k}/{CUTOFF}.js' for k in ids | {overview_id}}
    prior = {k: engine.load_snapshot(p, k, CUTOFF) for k,p in paths.items()}
    revised = copy.deepcopy(prior)
    changes = {}
    for k in sorted(ids):
        snap = revised[k]
        for cota in snap['passivo']['cotas']:
            code = cota.get('ifCodigo')
            if code in RULES:
                changes[code] = replay(cota, code, holidays, engine.DI_RATES)
        snap['metadata']['revisionId'] = INCORPORATION_REVISION if k == 'cra-carteira-73' else REVISION
        snap['passivo']['fundingTotal'] = fsum(c['valor'] for c in snap['passivo']['cotas'] if c['ehFunding'])
        assert snap['caixa'] == prior[k]['caixa'] and snap['ativo'] == prior[k]['ativo']
    assert set(changes) == set(RULES)
    overview = revised[overview_id]
    targets = {c['ifCodigo']:c for k in ids for c in revised[k]['passivo']['cotas']
               if c.get('ifCodigo') in changes}
    for row in overview['portfolioOverview']['rows']:
        cota = targets.get(row.get('ifCodigo'))
        if cota:
            row.update(puAtual=cota['pu'], valorAtual=cota['valor'], revisaoInternaPu=cota['revisaoInternaPu'])
            row['status'] = ('Juros incorporados; conciliar AF' if cota['ifCodigo'] == INCORPORATION_CODE
                             else 'PU revisado no controle')
    for vehicle in overview['fundingCashVehicles']:
        if vehicle['craId'] in ids:
            vehicle['funding'] = revised[vehicle['craId']]['passivo']['fundingTotal']
    overview['passivo']['fundingTotal'] = fsum(r['funding'] or 0 for r in overview['fundingCashVehicles'])
    overview['metadata']['revisionId'] = INCORPORATION_REVISION
    for item in manifest:
        key = item['craId']
        if key not in revised:
            continue
        assert item['currentDate'] == CUTOFF
        entry = next(r for r in item['dates'] if r['dateKey'] == CUTOFF)
        entry.update(funding=revised[key]['passivo']['fundingTotal'], revisionId=revised[key]['metadata']['revisionId'])
        if 'fundingTotal' in entry:
            entry['fundingTotal'] = entry['funding']
    report_path = ROOT / f'data/fundings/cras-carteira/{CUTOFF}.json'
    report = json.loads(report_path.read_text(encoding='utf-8'))
    report['currentPositions'] = overview['fundingCashVehicles']
    report['summary']['fundingTotal'] = overview['passivo']['fundingTotal']
    report['internalPuReview'] = dict(version=INCORPORATION_REVISION, sources=changes, pending={})
    if apply:
        for key, snapshot in revised.items():
            engine.write_snapshot(paths[key], key, CUTOFF, snapshot)
        engine.write_manifest(manifest_path, manifest)
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
    return dict(applied=apply, changes=changes, pending={}, fundingTotal=overview['passivo']['fundingTotal'])


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Recompoe memorias internas de PU com DI historico.')
    parser.add_argument('--apply', action='store_true')
    print(json.dumps(reconcile(parser.parse_args().apply), ensure_ascii=False, indent=2))
