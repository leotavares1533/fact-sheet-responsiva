from __future__ import annotations

import argparse
import copy
import importlib.util
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
FIRST_DATES = ROOT / 'data/fundings/cras-carteira/confirmed-first-integrations.json'
DECISIONS = ROOT / 'data/fundings/cras-carteira/confirmacoes-2026-10-29.json'
REVISION = 'confirmacoes-20261109'


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def apply_first_date_confirmation(cota, snapshot, cutoff, engine):
    confirmations = json.loads(FIRST_DATES.read_text('utf-8')) if FIRST_DATES.exists() else {}
    confirmation = confirmations.get(cota.get('ifCodigo'))
    if not confirmation:
        return copy.deepcopy(cota)
    result = copy.deepcopy(cota)
    start = confirmation['date']
    if cutoff < start:
        return result
    history = result.get('historicoPu') or []
    if history and history[0]['dataIso'] != start:
        integrations = [e for e in result.get('eventosAplicados', []) if e.get('tipo') == 'integralizacao']
        payments = [e for e in result.get('eventosAplicados', []) if e.get('tipo') != 'integralizacao' and e.get('valorEventoReais')]
        if result.get('metodo') != 'prefixado_252_ts' or len(integrations) != 1 or payments:
            raise ValueError('Alteracao da primeira integralizacao exige replay dos eventos nao triviais')
        nominal = result['valorNominalInicial']
        quantity = result['quantidade']
        event = integrations[0]
        event.update(dataIso=start, data=engine.date_key_to_br(start), humanConfirmation=confirmation)
        result['eventosAplicados'] = [event]
        result.update(pu=nominal, principalResidual=nominal, valor=nominal*quantity,
            historicoPu=[dict(dataIso=start, data=engine.date_key_to_br(start), diaUtil=True,
                valorNominal=nominal, puAtualizado=nominal, puJuros=0, quantidade=quantity,
                valorReais=nominal*quantity, diasUteis=0, diasUteisPeriodo=0,
                fatorDiAcumulado=1, produtorioFatorDi=1, puEvento=0, puAntesEvento=nominal,
                puAposEvento=nominal, evento='Integralizacao', valorEventoReais=event.get('valorEventoReais', 0))])
        context = copy.deepcopy(snapshot)
        calendar = context.setdefault('metadata', {}).setdefault('businessCalendar', {})
        registry = json.loads((ROOT / 'data/fundings/cras-carteira/documented-terms.json').read_text('utf-8'))
        calendar['holidays'] = sorted(set(calendar.get('holidays', [])) | set(registry['businessCalendar']['holidays']))
        result = engine.project_cota_to_date(context, result, cutoff)
        for row in result['historicoPu']:
            row['quantidade'] = quantity
        result['fundingSourceDateKey'] = cutoff
    result.update(dataInicioIso=start, dataInicio=engine.date_key_to_br(start),
        dataPrimeiraIntegralizacaoIso=start, primeiraIntegralizacaoConfirmada=confirmation)
    if result.get('acumulacaoFinal'):
        result['acumulacaoFinal']['periodoInicio'] = engine.date_key_to_br(start)
    result.setdefault('documentValidation', {}).setdefault('sourceTerms', {})['firstIntegration'] = start
    return result


def apply_non_pu_decisions(cota, cra, decisions):
    result = copy.deepcopy(cota)
    kept, completed = [], list(result.get('eventosSemEfeitoPu', []))
    for event in result.get('eventosPendentes', []):
        key = f"{cra}/{result['classe']}/{event.get('date') or event.get('dataIso')}"
        decision = decisions.get(key)
        if decision and decision.get('ignoreForPu'):
            current = copy.deepcopy(event)
            current.update(pending=False, status='realizado_sem_efeito_pu', humanConfirmation=decision,
                           observacao=decision['note'])
            current.pop('pendingReason', None)
            if not any(e.get('date') == current.get('date') and e.get('humanConfirmation') == decision for e in completed):
                completed.append(current)
        else:
            kept.append(event)
    result['eventosPendentes'] = kept
    if completed:
        result['eventosSemEfeitoPu'] = completed
    return result


def main():
    parser = argparse.ArgumentParser(description='Aplica confirmacoes atuais de datas e pagamentos sem efeito no PU.')
    parser.add_argument('--date', default='2026-11-05')
    parser.add_argument('--output', type=Path, required=True)
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    funding = load_module('funding_confirmations', ROOT / 'scripts/refresh-funding-pu.py')
    engine = funding.engine
    cache_path = ROOT/'data/funding-pu-latest.js'
    initial_cache = json.loads(cache_path.read_text('utf-8').split(' = ', 1)[1].strip().removesuffix(';'))
    if initial_cache['target'] != args.date:
        raise ValueError('Data do cache diverge; nao alterar outras posicoes')
    registry = json.loads(funding.terms.REGISTRY.read_text('utf-8'))
    dates = json.loads(FIRST_DATES.read_text('utf-8'))
    decisions = json.loads(DECISIONS.read_text('utf-8'))
    selected = {'cra-carteira-46', 'cra-carteira-55', 'cra-carteira-58', 'cra-carteira-60'}
    before = {}
    after = {}
    changes = []
    for cra in sorted(selected):
        path = ROOT / f'data/cras/{cra}/{args.date}.js'
        original = engine.load_snapshot(path, cra, args.date)
        before[cra] = original
        snapshot = copy.deepcopy(original)
        for i, cota in enumerate(snapshot['passivo']['cotas']):
            current = apply_first_date_confirmation(cota, snapshot, args.date, engine)
            current = apply_non_pu_decisions(current, cra, decisions)
            snapshot['passivo']['cotas'][i] = current
            if current != cota:
                changes.append(dict(cra=cra, code=cota.get('ifCodigo'), className=cota['classe'],
                    beforePu=cota['pu'], afterPu=current['pu'], quantity=current['quantidade'],
                    deltaFunding=current['valor']-cota['valor'], firstIntegration=current.get('dataPrimeiraIntegralizacaoIso')))
        snapshot['passivo']['fundingTotal'] = math.fsum(c['valor'] for c in snapshot['passivo']['cotas'] if c.get('ehFunding'))
        snapshot['fundingCashIssues'] = [i for i in snapshot.get('fundingCashIssues', []) if not (
            i.get('type') == 'ajuste_generico_sem_detalhamento' and
            f"{cra}/{i.get('class')}/{i.get('date')}" in decisions and
            decisions[f"{cra}/{i.get('class')}/{i.get('date')}"].get('ignoreForPu'))]
        snapshot['metadata']['revisionId'] = f'{args.date.replace("-", "")}-{REVISION}-{cra.rsplit("-", 1)[1]}'
        snapshot['metadata']['confirmedOperationalReview'] = dict(date='2026-11-09', noCashReprocessing=True, noPortfolioReprocessing=True)
        assert snapshot['caixa'] == original['caixa']
        assert snapshot['ativo'] == original['ativo']
        after[cra] = snapshot
    args.output.mkdir(parents=True, exist_ok=True)
    audit = dict(date=args.date, changes=changes, applied=args.apply)
    (args.output/'funding-confirmations.json').write_text(json.dumps(audit, ensure_ascii=False, indent=2), 'utf-8')
    if args.apply:
        overview_path = ROOT / f'data/cras/cras-carteira-overview/{args.date}.js'
        overview = engine.load_snapshot(overview_path, 'cras-carteira-overview', args.date)
        overview_cash = copy.deepcopy(overview['caixa'])
        runtime_paths = [ROOT/f'data/cras/{cra}/{args.date}.js' for cra in selected] + [overview_path, ROOT/'data/cra-manifest.js', ROOT/'data/funding-pu-latest.js', ROOT/'data/fundings/cras-carteira/2026-10-27.json']
        for path in runtime_paths:
            backup = args.output / (path.parent.name + '-' + path.name)
            if not backup.exists():
                backup.write_bytes(path.read_bytes())
        for cra, snapshot in after.items():
            engine.write_snapshot(ROOT/f'data/cras/{cra}/{args.date}.js', cra, args.date, snapshot)
            for row in overview['portfolioOverview']['rows']:
                if row['craId'] != cra:
                    continue
                cota = next(c for c in snapshot['passivo']['cotas'] if c.get('ifCodigo') == row.get('ifCodigo'))
                row.update(puAtual=cota['pu'], valorAtual=cota['valor'],
                           dataPrimeiraIntegralizacaoIso=cota.get('dataPrimeiraIntegralizacaoIso'))
            next(v for v in overview['fundingCashVehicles'] if v['craId'] == cra)['funding'] = snapshot['passivo']['fundingTotal']
        overview['passivo']['fundingTotal'] = math.fsum(v['funding'] or 0 for v in overview['fundingCashVehicles'])
        overview['fundingCashIssues'] = [i for i in overview.get('fundingCashIssues', []) if not (
            i.get('type') == 'ajuste_generico_sem_detalhamento' and decisions.get(f"{i.get('cra')}/{i.get('class')}/{i.get('date')}", {}).get('ignoreForPu'))]
        overview['metadata']['revisionId'] = f'{args.date.replace("-", "")}-{REVISION}-overview'
        assert overview['caixa'] == overview_cash
        engine.write_snapshot(overview_path, 'cras-carteira-overview', args.date, overview)
        manifest_path = ROOT/'data/cra-manifest.js'
        manifest = engine.load_json_assignment(manifest_path)
        for item in manifest:
            snapshot = overview if item['craId'] == 'cras-carteira-overview' else after.get(item['craId'])
            if snapshot is not None:
                row = next(r for r in item['dates'] if r['dateKey'] == args.date)
                row.update(revisionId=snapshot['metadata']['revisionId'], funding=snapshot['passivo']['fundingTotal'])
        engine.write_manifest(manifest_path, manifest)
        cache = copy.deepcopy(initial_cache)
        old_other_cache = {k:v for k,v in cache['vehicles'].items() if k not in selected}
        rebuilt = funding.build_funding_pu(args.date, engine.parse_di_rates(), set(registry['businessCalendar']['holidays']))
        for cra in selected:
            cache['vehicles'][cra] = rebuilt['vehicles'][cra]
            for series in cache['vehicles'][cra]['series'].values():
                for forecast in series.get('forecasts', {}).values():
                    forecast['rows'] = [{k:r[k] for k in ('data','dataIso','puAtualizado','puJuros','valorReais','taxaDiAnualEquivalente')} for r in forecast['rows']]
        assert all(cache['vehicles'][k] == v for k,v in old_other_cache.items())
        cache_path.write_text('window.LAMINA_FUNDING_PU = '+json.dumps(cache, ensure_ascii=True, separators=(',', ':'))+';\n','utf-8')
        ledger_path = ROOT/'data/fundings/cras-carteira/2026-10-27.json'
        ledger = json.loads(ledger_path.read_text('utf-8'))
        for issue in ledger['issues']:
            key = f"{issue.get('cra')}/{issue.get('class')}/{issue.get('date')}"
            if issue.get('type') == 'ajuste_generico_sem_detalhamento' and decisions.get(key, {}).get('ignoreForPu'):
                issue.update(pending=False, resolution='Pagamento de acerto financeiro sem efeito no PU confirmado por Leonardo em 09/11/2026')
        ledger['operationalConfirmationsReview'] = dict(date='2026-11-09', firstIntegrationDates=dates,
            nonPuPayments=[k for k,v in decisions.items() if v.get('confirmedOn') == '2026-11-09'])
        ledger_path.write_text(json.dumps(ledger, ensure_ascii=False, indent=2), 'utf-8')
    print(json.dumps(audit, ensure_ascii=True))


if __name__ == '__main__':
    main()
