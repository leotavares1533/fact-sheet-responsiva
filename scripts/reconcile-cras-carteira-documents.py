from __future__ import annotations

import argparse
import copy
import hashlib
import importlib.util
import json
from datetime import date, timedelta
from decimal import Decimal, ROUND_DOWN, ROUND_HALF_UP, localcontext
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('cra_carteira_engine', ROOT / 'scripts/import-cras-carteira-consolidated.py')
ENGINE = importlib.util.module_from_spec(spec)
spec.loader.exec_module(ENGINE)
REGISTRY = ROOT / 'data/fundings/cras-carteira/documented-terms.json'


def quantize(value, places, rounding=ROUND_HALF_UP):
    return value.quantize(Decimal(1).scaleb(-places), rounding=rounding)


def prior_business_day(key, count, holidays):
    current = date.fromisoformat(key)
    for _ in range(count):
        current -= timedelta(days=1)
        while current.weekday() > 4 or current.isoformat() in holidays:
            current -= timedelta(days=1)
    return current.isoformat()


def documented_pu(principal, di_product, spread, days):
    with localcontext() as ctx:
        ctx.prec = 45
        nominal = quantize(Decimal(str(principal)), 8, ROUND_DOWN)
        di = quantize(di_product, 8)
        fixed = quantize((Decimal(1) + Decimal(str(spread))) ** (Decimal(days) / 252), 9)
        combined = quantize(di * fixed, 9)
        interest = quantize(nominal * (combined - 1), 8, ROUND_DOWN)
        return {'pu': float(nominal + interest), 'interest': float(interest), 'di': float(di),
                'spread': float(fixed), 'factor': float(combined)}


def quantity_on_date(integrations, key):
    return sum(float(e['quantity']) for e in integrations if e.get('status') == 'realizado' and e['date'] <= key)


def history_without_payments(entry, terms, cutoff, holidays, rates):
    """Apply the documented separate DI/spread factors, retaining both first-period conventions."""
    start = entry['sourceTerms']['firstIntegration']
    assert start <= cutoff
    product = Decimal(1)
    product_no_extra = Decimal(1)
    days = 0
    extra = terms['firstPeriodAdditionalBusinessDays']
    control_extra = terms.get('controlFirstPeriodAdditionalBusinessDays', extra)
    if control_extra not in [0, extra]:
        raise ValueError('Unsupported first-period convention')
    rows = []
    current = date.fromisoformat(start)
    target = date.fromisoformat(cutoff)
    while current <= target:
        key = current.isoformat()
        business = current.weekday() < 5 and key not in holidays
        accrue = business and (key != start or extra > 0)
        rate_date, daily = '', Decimal(0)
        if accrue:
            rate_date = prior_business_day(key, terms['lagBusinessDays'], holidays)
            if rate_date not in rates:
                raise ValueError(f'Missing official DI for {rate_date}; no silent rate fallback')
            daily = quantize(Decimal(str(rates[rate_date]['taxaDia'])), 8)
            product = quantize(product * (1 + daily), 16, ROUND_DOWN)
            if key != start:
                product_no_extra = quantize(product_no_extra * (1 + daily), 16, ROUND_DOWN)
                days += 1
        contractual = documented_pu(1000, product, terms['spreadAa'], days + extra)
        alternate = documented_pu(1000, product_no_extra, terms['spreadAa'], days)
        primary = contractual if control_extra else alternate
        primary_product = product if control_extra else product_no_extra
        primary_accrue = business and (key != start or control_extra > 0)
        primary_daily = daily if primary_accrue else Decimal(0)
        primary_rate_date = rate_date if primary_accrue else ''
        quantity = quantity_on_date(entry['integrations'], key)
        rows.append({'data': ENGINE.date_key_to_br(key), 'dataIso': key, 'diaUtil': business,
            'diasUteis': days, 'diasUteisPeriodo': days + control_extra, 'diasAdicionaisPrimeiroPeriodo': control_extra,
            'diasAdicionaisPrimeiroPeriodoTs': extra,
            'quantidade': quantity, 'valorNominal': 1000, 'puAtualizado': primary['pu'], 'puJuros': primary['interest'],
            'puSemDiaAdicionalPrimeiroPeriodo': alternate['pu'], 'puContratualComDiaAdicional': contractual['pu'],
            'fatorDiAcumulado': float(primary_product),
            'produtorioFatorDi': float(primary_product), 'fatorDiArredondado': primary['di'], 'fatorSpread': primary['spread'],
            'fator': primary['factor'], 'spread': terms['spreadAa'], 'spreadAcumulado': primary['spread'] - 1,
            'fatorJurosAcumulado': primary['factor'], 'dataTaxaDiIso': primary_rate_date, 'taxaDiUtilizadaDia': float(primary_daily),
            'dataTaxaDi': ENGINE.date_key_to_br(primary_rate_date) if primary_rate_date else '',
            'dataReferenciaTaxaDi': ENGINE.date_key_to_br(primary_rate_date) if primary_rate_date else '',
            'taxaDiStatus': 'historica_documentada', 'puEvento': 0, 'valorEventoReais': 0,
            'valorReais': primary['pu'] * quantity, 'evento': 'Integralizacao' if any(e['date'] == key for e in entry['integrations']) else '',
            'tdk': float(primary_daily), 'fatorDiario': float(1 + primary_daily), 'puAntesEvento': primary['pu'], 'puAposEvento': primary['pu'],
            'principalAntesEvento': 1000, 'principalAposEvento': 1000,
            'dataReferenciaTaxaDiIso': primary_rate_date,
            'lagBusinessDays': terms['lagBusinessDays'], 'metodoMemoria': 'DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8'})
        current += timedelta(days=1)
    return rows


def observed_history(entry, cutoff):
    rows = []
    for item in entry['historyObserved']:
        key = item['date']
        if not entry['sourceTerms']['firstIntegration'] <= key <= cutoff:
            continue
        quantity = quantity_on_date(entry['integrations'], key)
        rows.append({'data': ENGINE.date_key_to_br(key), 'dataIso': key, 'diaUtil': True, 'quantidade': quantity,
            'valorNominal': item['principalPu'], 'puAtualizado': item['pu'], 'puJuros': item['pu'] - item['principalPu'],
            'valorReais': item['pu'] * quantity, 'sourceRow': item['sourceRow'], 'puEvento': 0, 'valorEventoReais': 0,
            'taxaDiStatus': 'historico_fonte_conciliado'})
    assert rows and rows[-1]['dataIso'] == cutoff
    return rows


def history_after_confirmed_payment(entry, terms, event, cutoff, holidays, rates):
    key = event['date']
    quantity = quantity_on_date(entry['integrations'], key)
    if quantity != event['quantityAtEvent'] or quantity <= 0:
        raise ValueError('Confirmed event quantity differs from the historical subscription ledger')
    principal_before = Decimal(str(event['principalBefore']))
    interest_pu = Decimal(str(event['interestPuApproved']))
    amount = Decimal(str(event['amount']))
    interest_total = interest_pu * Decimal(str(quantity))
    amortization = amount - interest_total
    if amortization < 0:
        raise ValueError('Partial interest payment requires a separate treatment; do not silently capitalize it')
    principal_after = quantize(principal_before - amortization / Decimal(str(quantity)), 8, ROUND_DOWN)
    history = [r for r in observed_history(entry, key) if r['dataIso'] < key]
    product, days = Decimal(1), 0
    current = date.fromisoformat(key)
    while current <= date.fromisoformat(cutoff):
        iso = current.isoformat()
        business = current.weekday() < 5 and iso not in holidays
        daily, reference = Decimal(0), ''
        if iso > key and business:
            reference = prior_business_day(iso, terms['lagBusinessDays'], holidays)
            if reference not in rates:
                raise ValueError(f'Missing official DI for {reference}; no silent rate fallback')
            daily = quantize(Decimal(str(rates[reference]['taxaDia'])), 8)
            product = quantize(product * (1 + daily), 16, ROUND_DOWN)
            days += 1
        calculated = documented_pu(principal_after, product, terms['spreadAa'], days)
        stock = quantity_on_date(entry['integrations'], iso)
        history.append({'data': ENGINE.date_key_to_br(iso), 'dataIso': iso, 'diaUtil': business,
            'diasUteis': days, 'diasUteisPeriodo': days, 'quantidade': stock, 'valorNominal': float(principal_after),
            'puAtualizado': calculated['pu'], 'puJuros': calculated['interest'], 'valorReais': calculated['pu'] * stock,
            'fator': calculated['factor'], 'fatorJurosAcumulado': calculated['factor'], 'fatorDiario': float(1 + daily),
            'produtorioFatorDi': float(product), 'fatorDiAcumulado': calculated['di'], 'fatorSpread': calculated['spread'],
            'spread': terms['spreadAa'], 'spreadAcumulado': calculated['spread'] - 1,
            'tdk': float(daily), 'taxaDiUtilizadaDia': float(daily), 'dataTaxaDiIso': reference,
            'dataTaxaDi': ENGINE.date_key_to_br(reference) if reference else '', 'dataReferenciaTaxaDiIso': reference,
            'dataReferenciaTaxaDi': ENGINE.date_key_to_br(reference) if reference else '',
            'taxaDiStatus': 'historica_documentada', 'lagBusinessDays': terms['lagBusinessDays'],
            'puAntesEvento': float(principal_before + interest_pu) if iso == key else calculated['pu'],
            'puEvento': float(amount / Decimal(str(quantity))) if iso == key else 0,
            'puAposEvento': calculated['pu'], 'valorEventoReais': float(amount) if iso == key else 0,
            'evento': 'Juros / amortizacao' if iso == key else 'Integralizacao' if any(e['date'] == iso for e in entry['integrations']) else '',
            'eventQuantity': quantity if iso == key else None})
        current += timedelta(days=1)
    journal = {'data': ENGINE.date_key_to_br(key), 'dataIso': key, 'tipo': 'juros_amortizacao',
        'valorEventoReais': float(amount), 'valorJuros': float(interest_total), 'valorAmortizacao': float(amortization),
        'puAntesEvento': float(principal_before + interest_pu), 'puEvento': float(amount / Decimal(str(quantity))),
        'puAposEvento': float(principal_after), 'quantidadeNoEvento': quantity,
        'sourceSheet': entry.get('sheet', ''), 'humanConfirmation': copy.deepcopy(event),
        'observacao': 'Quantidade historica no evento. Juros unitarios aprovados; memoria posterior DI D-2. Caixa nao deduzido novamente.'}
    return history, journal


def safe_registry(registry):
    result = copy.deepcopy(registry)
    def clean(value):
        if isinstance(value, dict):
            for key, child in value.items():
                if key == 'file' and isinstance(child, str):
                    value[key] = Path(child).name
                else:
                    clean(child)
        elif isinstance(value, list):
            for child in value:
                clean(child)
    clean(result)
    return result


def apply_document_review(snapshots, source, registry):
    snapshots = copy.deepcopy(snapshots)
    cutoff = source['positionDate']
    terms_by_key = {(r['cra'], r['sourceClass']): r for r in registry['series']}
    cancelled_decisions = {scope: decision for decision in registry['eventDecisions'] if decision.get('status') == 'nao_efetivado'
                           for scope in decision.get('scope', [])}
    cancelled = set(cancelled_decisions)
    approved_events = {(e['cra'], e['sourceClass']): e for e in registry.get('confirmedPaymentReplays', [])}
    registry_hash = hashlib.sha256(json.dumps(safe_registry(registry), sort_keys=True, ensure_ascii=False).encode('utf-8')).hexdigest()
    changes = []
    for cra, snapshot in snapshots.items():
        holidays = set(registry['businessCalendar']['holidays'])
        entries = {r['class']: r for r in source['series'] if r['cra'] == cra}
        for cota in snapshot['passivo']['cotas']:
            source_class = cota.get('sourceClass') or cota['classe']
            entry = entries.get(source_class)
            if not entry:
                continue
            before = {'class': cota['classe'], 'pu': cota['pu'], 'value': cota['valor'], 'rate': cota.get('taxaTexto'),
                      'maturity': cota.get('dataVencimentoIso'), 'ifCodigo': cota.get('ifCodigo')}
            if f'{cra}/{source_class}' in cancelled:
                decisions = cancelled_decisions[f'{cra}/{source_class}']
                bad = [e for e in cota.get('eventosAplicados', []) if e.get('dataIso') == decisions['date'] and e.get('tipo') != 'integralizacao']
                if bad:
                    cota['historicoPu'] = observed_history(entry, cutoff)
                cota['eventosAplicados'] = [e for e in cota.get('eventosAplicados', []) if not (e.get('dataIso') == decisions['date'] and e.get('tipo') != 'integralizacao')]
                cota['eventosPendentes'] = [e for e in cota.get('eventosPendentes', []) if e.get('date', e.get('dataIso')) != decisions['date']]
                cota['eventosNaoEfetivados'] = [{**decisions, 'scope': [f'{cra}/{source_class}']}]
                cota['afEventReconciliation'] = f'AF considera evento {decisions["date"]} nao realizado; nao reduzir funding nem caixa.'
            if cra == 'cra-carteira-59' and source_class == 'MEZA':
                # The source and the independently downloaded AF memory agree; the old import did not.
                cota['historicoPu'] = observed_history(entry, cutoff)
                cota['importacaoFundingCaixa']['calculation'] = 'reancorado_na_fonte_conciliada_com_memoria_AF'
                cota['historyCorrection'] = {'reviewDate': registry['reviewDate'], 'reason': 'Ancora antiga do importador divergente da fonte e do AF; historico da fonte restabelecido.'}
            terms = terms_by_key.get((cra, source_class))
            if terms:
                cota.update({'sourceClass': source_class, 'classe': terms['class'], 'tipo': terms['kind'], 'label': terms['label'],
                    'ifCodigo': terms['ifCodigo'], 'serieJuridica': terms['legalSeries'], 'spreadAa': terms['spreadAa'],
                    'taxaTexto': f'CDI + {terms["spreadAa"]*100:.2f}% a.a.', 'metodo': 'di_spread_ts_252',
                    'indexador': 'DI', 'percentualIndexador': 1, 'dataVencimentoIso': terms['maturity'],
                    'dataVencimento': ENGINE.date_key_to_br(terms['maturity']), 'revolvencia': terms['revolvencia'],
                    'revolvenciaRegra': terms['revolvenciaRegra'], 'lagBusinessDays': terms['lagBusinessDays'],
                    'diasAdicionaisPrimeiroPeriodo': terms.get('controlFirstPeriodAdditionalBusinessDays', terms['firstPeriodAdditionalBusinessDays']),
                    'diasAdicionaisPrimeiroPeriodoTs': terms['firstPeriodAdditionalBusinessDays'],
                    'firstPeriodControlDecision': copy.deepcopy(registry.get('firstPeriodControlDecision'))})
                cota['documentValidation'] = {'status': 'cadastro_documentado_conciliacao_financeira_pendente',
                    'reviewDate': registry['reviewDate'], 'fieldsValidated': ['codigo_if','classe_juridica','taxa','vencimento','metodo','defasagem_di'],
                    'fields': copy.deepcopy(terms['pending']), 'sources': copy.deepcopy([terms['rateSource'], terms['maturitySource']]),
                    'calculationStatus': terms['calculationStatus']}
                approved = approved_events.get((cra, source_class))
                if approved:
                    cota['historicoPu'], journal = history_after_confirmed_payment(entry, terms, approved, cutoff, holidays, ENGINE.DI_RATES)
                    cota['eventosAplicados'] = [e for e in cota.get('eventosAplicados', []) if e.get('dataIso') != approved['date'] or e.get('tipo') == 'integralizacao'] + [journal]
                    cota['documentValidation']['calculationStatus'] = 'recalculo_evento_confirmado'
                    cota['documentValidation']['approvedPayment'] = copy.deepcopy(approved)
                    cota['eventosPendentes'] = [e for e in cota.get('eventosPendentes', []) if e.get('date', e.get('dataIso')) != approved['date']]
                elif terms['calculationStatus'] == 'recalculo_documentado' and not any(e['status'] == 'realizado' and e['date'] <= cutoff for e in entry['payments']):
                    cota['historicoPu'] = history_without_payments(entry, terms, cutoff, holidays, ENGINE.DI_RATES)
                    cota['puComparacaoSemDiaAdicional'] = cota['historicoPu'][-1]['puSemDiaAdicionalPrimeiroPeriodo']
                    cota['puContratualComDiaAdicional'] = cota['historicoPu'][-1]['puContratualComDiaAdicional']
                    cota['documentValidation']['firstPeriodControlDecision'] = copy.deepcopy(registry.get('firstPeriodControlDecision'))
                    cota['documentValidation']['contractualReservation'] = 'PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica.'
                elif terms['calculationStatus'] == 'recalculo_documentado':
                    cota['documentValidation']['calculationStatus'] = 'preservado_pendente_evento_financeiro'
                    cota['documentValidation']['fields'].append('Novo pagamento na fonte exige conciliacao antes de refazer a memoria contratual.')
                cota['forecastBlockedReason'] = 'Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.'
            confirmation = next((e for e in registry.get('eventConfirmations', []) if e['cra'] == cra and e['sourceClass'] == source_class), None)
            if confirmation:
                cota['financialEventConfirmation'] = copy.deepcopy(confirmation)
            if any(e['cra'] == cra and e['sourceClass'] == source_class for e in registry.get('acceptedResiduals', [])):
                cota['reconciliationStatus'] = 'conciliado_por_orientacao_residual_de_precisao'
            row = cota['historicoPu'][-1]
            cota.update({'pu': row['puAtualizado'], 'quantidade': row['quantidade'], 'principalResidual': row['valorNominal'], 'valor': row['valorReais']})
            cota['acumulacaoFinal'] = {**cota.get('acumulacaoFinal', {}), 'puFinal': cota['pu'], 'periodoFim': ENGINE.date_key_to_br(cutoff)}
            if f'{cra}/{source_class}' in cancelled:
                date_not_paid = cancelled_decisions[f'{cra}/{source_class}']['date']
                assert all(e.get('dataIso') != date_not_paid or e.get('tipo') == 'integralizacao' for e in cota.get('eventosAplicados', []))
            changes.append({'cra': cra, 'sourceClass': source_class, 'class': cota['classe'], 'before': before,
                            'after': {'pu': cota['pu'], 'value': cota['valor'], 'rate': cota.get('taxaTexto'), 'maturity': cota.get('dataVencimentoIso'), 'ifCodigo': cota.get('ifCodigo')},
                            'documented': bool(terms), 'calculationStatus': terms['calculationStatus'] if terms else 'cadastro_anterior_preservado'})
        funded_cotas = [c for c in snapshot['passivo']['cotas'] if c.get('ehFunding')]
        snapshot['passivo']['fundingTotal'] = sum(c['valor'] for c in funded_cotas) if funded_cotas else None
        snapshot['cadastroSeriesDocumentadas'] = [r for r in registry['series'] if r['cra'] == cra]
        snapshot['metadata']['documentReview'] = {'date': registry['reviewDate'], 'registry': 'data/fundings/cras-carteira/documented-terms.json',
            'cancelledPaymentDate': '2026-10-07', 'sourcePositionDate': cutoff, 'noPortfolioOrCashReprocessing': True, 'registryHash': registry_hash}
        snapshot['metadata']['revisionId'] = f'{cutoff.replace("-", "")}-documentos-{registry["reviewDate"].replace("-", "")}-{registry_hash[:8]}'
        snapshot['metadata']['businessCalendar'] = {**copy.deepcopy(registry['businessCalendar']), 'documentedSeriesLagBusinessDays': 2}
        snapshot['fundingCashIssues'] = [e for e in snapshot.get('fundingCashIssues', []) if not (e.get('date') == '2026-10-07' and f'{cra}/{e.get("class")}' in cancelled)]
    return snapshots, changes


def build_overview(old, snapshots, review_date):
    overview = copy.deepcopy(old)
    rows, vehicles = [], []
    for cra, s in sorted(snapshots.items(), key=lambda t: int(t[0].rsplit('-', 1)[1])):
        for c in s['passivo']['cotas']:
            rows.append({'operacao': s['cra']['name'], 'craId': cra, 'serie': c.get('label') or c['classe'], 'classe': c['classe'],
                'sourceClass': c.get('sourceClass', c['classe']), 'ifCodigo': c.get('ifCodigo'), 'quantidadeIntegralizada': c['quantidade'],
                'puAtual': c['pu'], 'valorAtual': c['valor'], 'taxa': c.get('taxaTexto'), 'dataVencimento': c.get('dataVencimento'),
                'dataVencimentoIso': c.get('dataVencimentoIso'), 'status': 'Conciliacao pendente' if c.get('documentValidation', {}).get('fields') else 'Cadastro anterior',
                'documentValidation': c.get('documentValidation')})
        vehicles.append({'craId': cra, 'name': s['cra']['name'], 'funding': s['passivo']['fundingTotal'], 'cash': s['caixa']['total']})
    overview['portfolioOverview']['rows'] = rows
    overview['fundingCashVehicles'] = vehicles
    overview['passivo']['fundingTotal'] = sum(s['passivo']['fundingTotal'] or 0 for s in snapshots.values())
    overview['metadata']['documentReview'] = {'date': review_date, 'cancelledPaymentDate': '2026-10-07'}
    overview['metadata']['revisionId'] = next(iter(snapshots.values()))['metadata']['revisionId'] + '-overview'
    return overview


def run(source, registry, work, apply=False):
    cutoff = source['positionDate']
    work.mkdir(parents=True, exist_ok=True)
    protected_path = work / 'protected-before.json'
    if not protected_path.exists():
        paths = [p for p in (ROOT / 'data/cras').glob('*/*.js')
                 if not (p.stem == cutoff and (p.parent.name.startswith('cra-carteira-') or p.parent.name == 'cras-carteira-overview'))]
        paths += [Path(source['source']), ROOT / 'data/indices/di.js']
        paths += [Path(d['file']) for d in registry['documents']]
        protected_path.write_text(json.dumps({str(p): hashlib.sha256(p.read_bytes()).hexdigest() for p in paths}, indent=2), encoding='utf-8')
        (work / 'manifest-before.js').write_bytes((ROOT / 'data/cra-manifest.js').read_bytes())
    current = {folder.name: ENGINE.load_snapshot(folder / f'{cutoff}.js', folder.name, cutoff)
               for folder in (ROOT / 'data/cras').glob('cra-carteira-*') if (folder / f'{cutoff}.js').exists()}
    overview_path = ROOT / f'data/cras/cras-carteira-overview/{cutoff}.js'
    old_overview = ENGINE.load_snapshot(overview_path, 'cras-carteira-overview', cutoff)
    baseline = work / 'before-snapshots.json'
    if not baseline.exists():
        baseline.write_text(json.dumps({'snapshots': current, 'overview': old_overview}, ensure_ascii=False), encoding='utf-8')
    original = json.loads(baseline.read_text(encoding='utf-8'))
    if apply:
        unrelated_changes = [cra for cra in current if current[cra] != original['snapshots'][cra]
                             and current[cra].get('metadata', {}).get('documentReview', {}).get('date') != registry['reviewDate']]
        if unrelated_changes:
            raise ValueError(f'Funding snapshots changed outside this review; inspect before replacing: {unrelated_changes}')
    revised, changes = apply_document_review(original['snapshots'], source, registry)
    overview = build_overview(original['overview'], revised, registry['reviewDate'])
    for cra in revised:
        assert revised[cra]['caixa'] == original['snapshots'][cra]['caixa'], 'Cash must not change in a document review'
        assert revised[cra]['ativo'] == original['snapshots'][cra]['ativo'], 'No portfolio or PDD reprocessing authorized here'
    result = {'reviewDate': registry['reviewDate'], 'positionDate': cutoff, 'changes': changes, 'snapshots': revised, 'overview': overview,
              'series': len(changes), 'documents': len(registry['documents']), 'cashUnchanged': True,
              'cancelledPaymentDate': '2026-10-07', 'newFundingTotal': overview['passivo']['fundingTotal'],
              'oldFundingTotal': original['overview']['passivo']['fundingTotal'], 'registry': registry}
    (work / 'reconciled.json').write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding='utf-8')
    if apply:
        REGISTRY.parent.mkdir(parents=True, exist_ok=True)
        safe = safe_registry(registry)
        REGISTRY.write_text(json.dumps(safe, ensure_ascii=False, indent=2), encoding='utf-8')
        for cra, snapshot in {**revised, 'cras-carteira-overview': overview}.items():
            ENGINE.write_snapshot(ROOT / f'data/cras/{cra}/{cutoff}.js', cra, cutoff, safe_registry(snapshot))
        manifest_path = ROOT / 'data/cra-manifest.js'
        manifest = ENGINE.load_json_assignment(manifest_path)
        for item in manifest:
            cra = item['craId']
            if cra not in revised and cra != 'cras-carteira-overview':
                continue
            snap = revised.get(cra, overview)
            for row in item.get('dates', []):
                if row['dateKey'] == cutoff:
                    row['funding'] = snap['passivo']['fundingTotal']
                    if 'fundingTotal' in row:
                        row['fundingTotal'] = snap['passivo']['fundingTotal']
                    row['documentReviewDate'] = registry['reviewDate']
                    row['fundingCashOnly'] = True
        ENGINE.write_manifest(manifest_path, manifest)
        position_path = ROOT / f'data/fundings/cras-carteira/{cutoff}.json'
        report = json.loads(position_path.read_text(encoding='utf-8'))
        report['documentReview'] = {'date': registry['reviewDate'], 'registry': str(REGISTRY.relative_to(ROOT)).replace('\\','/'),
                                  'cancelledPaymentDate': '2026-10-07',
                                  'financialEventsPending': ['73/SR1 tratamento dos juros remanescentes'] if registry.get('confirmedPaymentReplays') else ['63/SR1 07/08', '72/SR1 18/09', '73/SR1 18/09', '74/SR1 18/09'],
                                  'confirmedPaymentReplays': copy.deepcopy(registry.get('confirmedPaymentReplays', [])),
                                  'eventConfirmations': copy.deepcopy(registry.get('eventConfirmations', []))}
        report['currentPositions'] = overview['fundingCashVehicles']
        report['summary']['fundingTotal'] = overview['passivo']['fundingTotal']
        report['summary']['documentedSeries'] = len(registry['series'])
        position_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding='utf-8')
        protected = json.loads(protected_path.read_text(encoding='utf-8'))
        assert all(hashlib.sha256(Path(p).read_bytes()).hexdigest() == digest for p, digest in protected.items()), 'Unexpected change outside reviewed funding snapshots'
    return result


def main():
    parser = argparse.ArgumentParser(description='Revisa os cadastros e a memoria dos fundings CRA Carteira com documentos, sem alterar carteira/caixa.')
    parser.add_argument('--registry', type=Path, default=REGISTRY)
    parser.add_argument('--source-report', type=Path, default=ROOT / 'data/fundings/cras-carteira/2026-10-27.json')
    parser.add_argument('--work', type=Path, default=ROOT / 'tmp/revisao-docs-cras-carteira-20261030')
    parser.add_argument('--apply', action='store_true')
    args = parser.parse_args()
    result = run(json.loads(args.source_report.read_text(encoding='utf-8')), json.loads(args.registry.read_text(encoding='utf-8')), args.work, args.apply)
    print(json.dumps({'series': result['series'], 'documents': result['documents'], 'oldFunding': result['oldFundingTotal'],
        'newFunding': result['newFundingTotal'], 'applied': args.apply,
        'changed': [{'cra': r['cra'], 'class': r['class'], 'oldPu': r['before']['pu'], 'newPu': r['after']['pu'], 'status': r['calculationStatus']}
                    for r in result['changes'] if r['documented'] or abs(r['before']['pu'] - r['after']['pu']) > .00001]}, ensure_ascii=False, indent=2))


if __name__ == '__main__':
    main()
