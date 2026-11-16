from __future__ import annotations

import argparse
import importlib.util
import json
from datetime import date, timedelta
from decimal import Decimal
from functools import lru_cache
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("funding_terms", ROOT / "scripts/reconcile-cras-carteira-documents.py")
terms = importlib.util.module_from_spec(spec)
spec.loader.exec_module(terms)
engine = terms.ENGINE
ONE = Decimal(1)
INTEGRATIONS = ROOT / "data/fundings/cras-carteira/confirmed-integrations.json"
PAYMENTS = ROOT / "data/fundings/cras-carteira/confirmed-payments.json"
PENDING_FUNDINGS = ROOT / "data/fundings/cras-carteira/pending-funding-registrations.json"


def dec(value):
    return Decimal(str(value))


def validated_late_terms(cota):
    rules = cota.get("encargosMora") or {}
    if rules.get("status") != "validado" or rules.get("dataInadimplementoIso") != cota.get("dataVencimentoIso"):
        return None
    if rules.get("baseAnual") != 252 or rules.get("capitalizacao") != "composta":
        raise ValueError("Convencao de mora nao suportada")
    return rules


def apply_late_charges(cota, row, holidays):
    rules = validated_late_terms(cota)
    if not rules:
        return row
    due = date.fromisoformat(rules["dataInadimplementoIso"])
    target = date.fromisoformat(row["dataIso"])
    days = 0
    cursor = due
    while cursor < target:
        cursor += timedelta(days=1)
        days += engine.is_business_day(cursor, holidays)
    ordinary = dec(row.get("puSemEncargos", row["puAtualizado"]))
    # Recompute from the unpaid ordinary balance, never from yesterday's fine or late interest.
    factor = (ONE + dec(rules["taxaMoraMensal"])) ** (dec(days) * 12 / 252)
    fine = terms.quantize(ordinary * dec(rules["multaPercentual"]), 8, terms.ROUND_DOWN) if target > due else dec(0)
    interest = terms.quantize(ordinary * (factor - ONE), 8, terms.ROUND_DOWN)
    pu = terms.quantize(ordinary + fine + interest, 8)
    return {**row, "puSemEncargos": float(ordinary), "puJurosRemuneratorios": float(ordinary - dec(row["valorNominal"])),
            "puMulta": float(fine), "puMora": float(interest), "puEncargosMoratorios": float(fine + interest),
            "diasUteisMora": days, "fatorMora": float(factor), "baseAnualMora": 252,
            "puAtualizado": float(pu), "puAntesEvento": float(pu), "puAposEvento": float(pu),
            "puJuros": float(pu - dec(row["valorNominal"])), "valorReais": float(pu * dec(row["quantidade"]))}


def event_date(event):
    return engine.iso(engine.as_date(event.get("dataIso") or event.get("date") or event.get("data")))


def integration_event(cota, integration, pu):
    key = integration["date"]
    return {
        "data": engine.date_key_to_br(key), "dataIso": key, "tipo": "integralizacao",
        "status": "realizado", "quantidade": integration["quantity"],
        "puIntegralizacao": float(integration["unitPrice"]), "puEvento": float(integration["unitPrice"]),
        "puAposEvento": float(pu), "valorEventoReais": float(integration["amount"]),
        "ifCodigo": cota["ifCodigo"], "fonte": integration["source"], "observacao": integration.get("note", ""),
        "puControleNaIntegralizacao": float(pu),
        "diferencaPuIntegralizacaoControle": float(dec(integration["unitPrice"]) - dec(pu)),
    }


def already_booked(cota, integration):
    return any(event_date(event) == integration["date"]
               and event.get("tipo") == "integralizacao" and event.get("status", "realizado") == "realizado"
               and event.get("quantidade") == integration["quantity"]
               and dec(event.get("valorEventoReais") or event.get("valor") or 0) == dec(integration["amount"])
               for event in cota.get("eventosAplicados") or [])


@lru_cache(maxsize=4)
def read_payments(path, modification):
    entries = json.loads(Path(path).read_text(encoding="utf-8"))
    seen = set()
    ids = set()
    for entry in entries:
        identity = (entry["cra"], entry["ifCodigo"], entry["date"])
        if identity in seen or entry["id"] in ids or not entry.get("confirmed"):
            raise ValueError(f"Pagamento duplicado ou nao confirmado: {identity}")
        interest, amort = dec(entry["interestPu"]), dec(entry["amortizationPu"])
        if interest < 0 or amort < 0 or interest + amort <= 0:
            raise ValueError(f"PU de pagamento invalido: {identity}")
        if entry.get("unpaidInterestTreatment", "retain") not in {"capitalize", "retain", "pending"}:
            raise ValueError(f"Tratamento dos juros pendente de correcao: {identity}")
        seen.add(identity)
        ids.add(entry["id"])
    return entries


def confirmed_payments(cota):
    if not PAYMENTS.exists() or not cota.get("ifCodigo"):
        return []
    return [entry for entry in read_payments(str(PAYMENTS), PAYMENTS.stat().st_mtime_ns)
            if entry["ifCodigo"] == cota["ifCodigo"]]


def payment_booked(cota, payment):
    return any(event.get("confirmationId") == payment["id"]
               and event.get("unpaidInterestTreatment") == payment.get("unpaidInterestTreatment", "retain")
               and dec(event.get("interestPuSource", -1)) == dec(payment["interestPu"])
               and dec(event.get("amortizationPuSource", -1)) == dec(payment["amortizationPu"])
               for event in cota.get("eventosAplicados") or [])


def apply_confirmed_payment(cota, row, payment):
    if validated_late_terms(cota):
        raise ValueError("Pagamento com encargos de mora exige rateio confirmado dos encargos")
    nominal, before = dec(row["valorNominal"]), dec(row["puAtualizado"])
    interest, amort = dec(payment["interestPu"]), dec(payment["amortizationPu"])
    quantity = dec(row["quantidade"])
    if amort > nominal or before - interest - amort < 0:
        raise ValueError(f"Pagamento excede o saldo: {payment['id']}")
    remaining = terms.quantize(before - nominal - interest, 8)
    # The screenshot can show fewer than eight decimal places; retain its rounding residual.
    shown_unit = Decimal(1).scaleb(dec(payment["interestPu"]).as_tuple().exponent)
    if remaining < -max(shown_unit / 2, Decimal("0.00000001")):
        raise ValueError(f"Juros pagos excedem os juros calculados: {payment['id']}")
    treatment = payment.get("unpaidInterestTreatment", "retain")
    incorporated = remaining if treatment == "capitalize" and remaining > 0 else dec(0)
    after = terms.quantize(before - interest - amort, 8)
    principal = terms.quantize(nominal - amort + incorporated, 8)
    retained = terms.quantize(after - principal, 8)
    pending = treatment == "pending" and retained * quantity > Decimal("0.01")
    paid = terms.quantize((interest + amort) * quantity, 2)
    interest_value = terms.quantize(interest * quantity, 2)
    amort_value = terms.quantize(amort * quantity, 2)
    fields = dict(puAntesEvento=float(before), puAposEvento=float(after), puAtualizado=float(after),
        puEvento=float(interest + amort), principalAntesEvento=float(nominal), principalAposEvento=float(principal),
        valorNominal=float(principal), puJurosAntesEvento=float(before - nominal),
        puJurosPagos=float(interest), puAmortizacao=float(amort), puJurosIncorporados=float(incorporated),
        puJuros=float(retained), puJurosRetidosSemCapitalizacao=float(retained),
        valorEventoReais=float(paid), valorJuros=float(interest_value), valorAmortizacao=float(amort_value),
        ajusteArredondamentoComponentes=float(paid - interest_value - amort_value),
        valorReais=float(after * quantity), diasUteisAntesEvento=row["diasUteisPeriodo"],
        fatorAntesEvento=row["fator"], produtorioFatorDiAntesEvento=row["produtorioFatorDi"],
        diasUteisPeriodo=0, puBaseCalculo=float(principal), fator=1, fatorJurosAcumulado=1,
        produtorioFatorDi=1, fatorDiAcumulado=1, fatorAcumuladoDecimal="1", capitalizacaoPendente=pending)
    label = "Juros / amortizacao extraordinarios" if amort and interest else "Amortizacao extraordinaria" if amort else "Juros extraordinarios"
    row.update(fields, evento=label, confirmationId=payment["id"])
    journal = {**fields, "data": row["data"], "dataIso": row["dataIso"],
        "tipo": "juros_amortizacao" if amort and interest else "amortizacao" if amort else "juros",
        "tipoEvento": label, "status": "realizado", "quantidadeNoEvento": float(quantity),
        "ifCodigo": cota["ifCodigo"], "confirmationId": payment["id"], "fonte": payment["source"],
        "confirmedOn": payment["confirmedOn"], "interestPuSource": payment["interestPu"],
        "amortizationPuSource": payment["amortizationPu"], "unpaidInterestTreatment": treatment,
        "cashNotReprocessed": True}
    return journal


def extend_series(cota, source, target, holidays, rates, extra_events=(), integrations=(), *, forecast_days=0):
    history = cota.get("historicoPu") or []
    last = history[-1] if history else {}
    rows = []
    result = {"rows": rows, "through": last.get("dataIso") or source}

    def stop(reason):
        return {**result, "reason": reason}

    payments = [entry for entry in confirmed_payments(cota) if not payment_booked(cota, entry)]
    if any(entry["date"] <= source for entry in payments):
        return stop("Pagamento confirmado nao conciliado com a posicao importada")
    pending_payments = {entry["date"]: entry for entry in payments}
    if any(not engine.is_business_day(date.fromisoformat(key), holidays) for key in pending_payments):
        raise ValueError("Pagamento confirmado fora do calendario util")
    if pending_payments:
        result["events"] = []
    if target > source and last.get("capitalizacaoPendente"):
        return stop("Confirmar tratamento dos juros nao pagos antes de projetar")

    unbooked = [integration for integration in integrations if not already_booked(cota, integration)]
    if any(integration["date"] <= source for integration in unbooked):
        return stop("Integralizacao confirmada nao conciliada com a posicao importada")
    pending_integrations = {integration["date"]: integration for integration in unbooked}
    if pending_integrations:
        result.setdefault("events", [])

    if not cota.get("quantidade") or not cota.get("pu"):
        if forecast_days:
            return stop("Sem saldo ativo para projetar")
        return result
    if source >= target:
        return result
    if last.get("dataIso") != source:
        return stop("Memoria de PU nao chega a ultima posicao")
    if cota.get("documentValidation", {}).get("status") == "pendente_documentos":
        return stop("Cadastro pendente de documentacao")
    late_terms = validated_late_terms(cota)
    if not cota.get("dataVencimentoIso") or (cota["dataVencimentoIso"] <= source and not late_terms):
        return stop("Vencimento pendente de conciliacao")
    if cota.get("revisaoInternaPu", {}).get("pendencia"):
        return stop("Memoria de PU pendente de conciliacao")

    method = cota.get("metodo")
    lag = cota.get("lagBusinessDays")
    if method == "percentual_di_252" and lag is None:
        lag = last.get("defasagemDiDiasUteis", 2)
    if method == "di_spread_252" and lag is None:
        lag = 0  # Existing legacy control uses DI on the valuation date.
    if method not in {"prefixado_252_ts", "percentual_di_252", "di_spread_252", "di_spread_ts_252"}:
        return stop("Metodo de remuneracao nao suportado")
    if method != "prefixado_252_ts" and lag not in (0, 1, 2):
        return stop("Defasagem do CDI nao confirmada")

    events = set(extra_events)
    if forecast_days:
        events.update(pending_payments)
    if not late_terms:
        events.add(cota["dataVencimentoIso"])
    for field in ("agendaPagamentos", "eventosPendentes", "eventosPrevistos", "eventosAplicados"):
        events.update(key for e in cota.get(field) or [] if (key := event_date(e))
                      and not (late_terms and field == "agendaPagamentos" and key == cota["dataVencimentoIso"])
                      and (forecast_days or key not in pending_payments))
    next_event = min((key for key in events if key > source), default="")

    base = dec(last.get("puBaseCalculo") or last.get("valorNominal") or cota["principalResidual"])
    nominal = dec(last.get("valorNominal") or base)
    quantity = dec(cota["quantidade"])
    observed = dec(last.get("puSemEncargos", cota["pu"]))
    days = period_days = int(last.get("diasUteisPeriodo") or 0)
    has_product = any(last.get(key) is not None for key in
                      ("fatorAcumuladoDecimal", "produtorioFatorDi", "fatorDiAcumulado"))
    if method == "di_spread_252" and not has_product:
        # A legacy closing PU already includes accrued interest; carry the whole balance forward.
        base = observed - dec(last.get("puJurosRetidosSemCapitalizacao") or 0)
        days = period_days = 0
    if last.get("fatorAcumuladoDecimal"):
        product = dec(last["fatorAcumuladoDecimal"])
    elif method == "di_spread_ts_252":
        product = dec(last.get("produtorioFatorDi") or last.get("fatorDiAcumulado") or 1)
    else:
        product = dec(last.get("fatorDiAcumulado") or last.get("produtorioFatorDi") or 1)
    spread = dec(cota.get("spreadAa") or 0)
    pct = dec(cota.get("percentualIndexador") or 1)
    fixed = dec(cota.get("taxaAa") or 0)
    if method == "di_spread_ts_252" and not last.get("produtorioFatorDi"):
        return stop("Produto do CDI ausente na memoria")
    if method == "prefixado_252_ts" and not fixed:
        return stop("Taxa prefixada nao confirmada")
    if method == "di_spread_252" and cota.get("spreadAa") is None:
        return stop("Spread nao confirmado")

    def theoretical(factor, du):
        if method == "di_spread_ts_252":
            detail = terms.documented_pu(base, factor, spread, du)
            return dec(detail["pu"]), detail["factor"]
        if method == "prefixado_252_ts":
            factor = terms.quantize((ONE + fixed) ** (dec(du) / 252), 9)
        applied = terms.quantize(factor, 8)
        return base + terms.quantize(base * (applied - ONE), 8, terms.ROUND_DOWN), float(applied)

    initial, _ = theoretical(product, days)
    elapsed_days = 0
    retained = dec(last.get("puJurosRetidosSemCapitalizacao") or 0)
    known_rates = sorted(key for key, rate in rates.items() if key <= source
                         and rate.get("fonte") == "Banco Central do Brasil - SGS 12"
                         and rate.get("taxaDia") is not None) if forecast_days else []
    cursor = date.fromisoformat(source)
    end = date.fromisoformat(target)
    while cursor < end:
        cursor += timedelta(days=1)
        key = cursor.isoformat()
        if next_event and key >= next_event:
            return stop(f"Evento em {engine.date_key_to_br(next_event)} requer nova confirmacao")
        if not engine.is_business_day(cursor, holidays):
            continue
        reference = terms.prior_business_day(key, lag, holidays) if lag is not None else ""
        rate_key = reference
        daily = Decimal(0)
        if method != "prefixado_252_ts":
            if forecast_days:
                rate_key = next((d for d in reversed(known_rates) if d <= reference), "")
            rate = rates.get(rate_key, {})
            if rate.get("fonte") != "Banco Central do Brasil - SGS 12" or rate.get("taxaDia") is None:
                return stop(f"CDI oficial de {engine.date_key_to_br(reference)} indisponivel")
            daily = terms.quantize(dec(rate["taxaDia"]), 8)
        factor = ONE + daily * pct
        if method == "di_spread_252":
            factor = terms.quantize(factor * (ONE + spread) ** (ONE / 252), 8)
        if method == "prefixado_252_ts":
            factor = (ONE + fixed) ** (ONE / 252)
        product = terms.quantize(product * factor, 16, terms.ROUND_DOWN)
        days += 1
        elapsed_days += 1
        calculated, combined = theoretical(product, days)
        # Preserve the imported PU, including any historical residual, as the opening balance.
        pu = terms.quantize(observed + calculated - initial, 8)
        integration = pending_integrations.get(key)
        if integration:
            quantity += dec(integration["quantity"])
            result["events"].append(integration_event(cota, integration, pu))
        rows.append({
            "data": engine.date_key_to_br(key), "dataIso": key, "diaUtil": True,
            "diasUteis": int(last.get("diasUteis") or 0) + elapsed_days, "diasUteisPeriodo": days,
            "quantidade": float(quantity), "valorNominal": float(nominal), "puAtualizado": float(pu),
            "puAntesEvento": float(pu), "puAposEvento": float(pu), "puEvento": 0,
            "valorEventoReais": float(integration["amount"]) if integration else 0,
            "principalAntesEvento": float(nominal), "principalAposEvento": float(nominal),
            "puJuros": float(pu - nominal), "valorReais": float(pu * quantity),
            "evento": "Integralizacao" if integration else "",
            "taxaDiUtilizadaDia": float(daily), "tdk": float(daily), "fatorDiario": float(factor),
            "taxaDiAnualEquivalente": float((ONE + daily) ** 252 - ONE) if reference else float(fixed),
            "fator": combined, "fatorJurosAcumulado": combined, "produtorioFatorDi": float(product),
            "fatorDiAcumulado": float(product),
            "fatorAcumuladoDecimal": str(product),
            "dataTaxaDiIso": rate_key, "dataReferenciaTaxaDiIso": reference,
            "dataTaxaDi": engine.date_key_to_br(rate_key) if rate_key else "",
            "dataReferenciaTaxaDi": engine.date_key_to_br(reference) if reference else "",
            "taxaDiStatus": ("projetada" if forecast_days else "BCB_SGS_12") if reference else "prefixada",
            "lagBusinessDays": lag, "puBaseCalculo": float(base),
        })
        if retained:
            rows[-1]["puJurosRetidosSemCapitalizacao"] = float(retained)
        rows[-1] = apply_late_charges(cota, rows[-1], holidays)
        payment = pending_payments.get(key)
        if payment:
            if integration:
                raise ValueError("Integralizacao e pagamento na mesma data exigem confirmar a ordem de alocacao")
            journal = apply_confirmed_payment(cota, rows[-1], payment)
            result["events"].append(journal)
            nominal = base = dec(rows[-1]["valorNominal"])
            observed = dec(rows[-1]["puAtualizado"])
            retained = dec(rows[-1]["puJurosRetidosSemCapitalizacao"])
            product, days = ONE, 0
            initial, _ = theoretical(product, days)
        result["through"] = key
        if payment and rows[-1].get("capitalizacaoPendente") and key < target:
            return stop("Confirmar tratamento dos juros nao pagos antes de projetar")
        if forecast_days and len(rows) >= forecast_days:
            break
    return result


def build_series_forecasts(cota, source, actual, holidays, rates, integrations):
    forecasts = {}
    opening = cota
    for key, row in [(source, None), *((row["dataIso"], row) for row in actual["rows"])]:
        if row is not None:
            opening = {
                **cota, "pu": row["puAtualizado"], "quantidade": row["quantidade"],
                "historicoPu": [row],
                "eventosAplicados": [*(cota.get("eventosAplicados") or []),
                                    *(event for event in actual.get("events", []) if event["dataIso"] <= key)],
            }
        # Stop before future changes in quantity or cash flow; none are presumed in the forecast.
        next_integrations = [entry["date"] for entry in integrations if entry["date"] > key]
        end = (date.fromisoformat(key) + timedelta(days=21)).isoformat()
        forecasts[key] = extend_series(
            opening, key, end, holidays, rates, extra_events=next_integrations, integrations=integrations,
            forecast_days=5,
        )
    return forecasts


def build_funding_pu(target, rates, holidays):
    manifest = engine.load_json_assignment(ROOT / "data/cra-manifest.js")
    integrations = {}
    seen = set()
    for entry in json.loads(INTEGRATIONS.read_text(encoding="utf-8")):
        key = (entry["cra"], entry["ifCodigo"])
        identity = (*key, entry["date"])
        if (identity in seen or entry["quantity"] <= 0 or dec(entry["unitPrice"]) <= 0
                or terms.quantize(dec(entry["unitPrice"]) * entry["quantity"], 2) != dec(entry["amount"])
                or not engine.is_business_day(date.fromisoformat(entry["date"]), holidays)):
            raise ValueError(f"Integralizacao confirmada invalida: {identity}")
        seen.add(identity)
        integrations.setdefault(key, []).append(entry)
    matched = set()
    payment_keys = {(entry["cra"], entry["ifCodigo"]) for entry in read_payments(str(PAYMENTS), PAYMENTS.stat().st_mtime_ns)} if PAYMENTS.exists() else set()
    matched_payment_keys = set()
    vehicles = {}
    for item in manifest:
        cra = item["craId"]
        if cra not in {"cra-modelo", "cra-65"} and not cra.startswith("cra-carteira-"):
            continue
        source = item["currentDate"]
        snapshot = engine.load_snapshot(ROOT / f"data/cras/{cra}/{source}.js", cra, source)
        revision = next(row for row in item["dates"] if row["dateKey"] == source).get("revisionId", "")
        # CRA 42 has a semiannual schedule in the validator, not in its imported series.
        payments = ({f"{year}-{month}-15" for year in range(date.fromisoformat(source).year, 2031)
                     for month in ("01", "07") if (year, month) <= (2030, "01")}
                    if cra == "cra-modelo" else ())
        series = {}
        for cota in snapshot["passivo"]["cotas"]:
            if cota.get("ehFunding") or cota.get("tipo") in {"sr", "mez"}:
                key = cota.get("ifCodigo") or cota["classe"]
                if (cra, key) in payment_keys:
                    matched_payment_keys.add((cra, key))
                if (cra, key) in integrations:
                    matched.add((cra, key))
                confirmed = integrations.get((cra, key), ())
                funding_source = cota.get("fundingSourceDateKey") or source
                series[key] = extend_series(cota, funding_source, target, holidays, rates, payments, confirmed)
                if cra.startswith("cra-carteira-"):
                    series[key]["forecasts"] = build_series_forecasts(
                        cota, funding_source, series[key], holidays, rates, confirmed,
                    )
        vehicles[cra] = {"sourceDate": source, "sourceRevision": revision, "series": series}
    if missing := integrations.keys() - matched:
        raise ValueError(f"Codigos de integralizacao sem serie no controle: {sorted(missing)}")
    if missing := payment_keys - matched_payment_keys:
        raise ValueError(f"Codigos de pagamento sem serie no controle: {sorted(missing)}")
    result = {"target": target, "vehicles": vehicles}
    if PENDING_FUNDINGS.exists():
        pending = json.loads(PENDING_FUNDINGS.read_text(encoding="utf-8"))
        for cra, registration in pending.items():
            funding = subordinated = dec(0)
            for cota in registration["series"]:
                amount = dec(cota["amount"])
                if (cota["quantity"] <= 0 or dec(cota["unitPrice"]) <= 0
                        or terms.quantize(dec(cota["unitPrice"]) * cota["quantity"], 2) != amount):
                    raise ValueError(f"Integralizacao pendente invalida: {cra}")
                if cota["kind"] == "sub":
                    subordinated += amount
                else:
                    funding += amount
            if (funding != dec(registration["fundingConfirmed"])
                    or subordinated != dec(registration["subordinatedSubscribed"])
                    or funding + subordinated != dec(registration["totalSubscribed"])):
                raise ValueError(f"Totais da nova emissao nao conciliam: {cra}")
            if any(registration[field] is not None for field in ["cashDate", "assetDate", "residualSubValue", "residualSubPu"]):
                raise ValueError(f"Ativar a emissao no cadastro principal antes de apurar posicoes: {cra}")
        result["pendingRegistrations"] = pending
    return result


def main():
    parser = argparse.ArgumentParser(description="Atualiza todos os PUs de funding sem reabrir carteira ou caixa.")
    parser.add_argument("--through", type=date.fromisoformat)
    args = parser.parse_args()
    holidays = set(json.loads(terms.REGISTRY.read_text(encoding="utf-8"))["businessCalendar"]["holidays"])
    today = date.today()
    target = args.through or date.fromisoformat(terms.prior_business_day(today.isoformat(), 1, holidays))
    if target >= today or not engine.is_business_day(target, holidays):
        parser.error("O corte deve ser um dia util encerrado.")
    result = build_funding_pu(target.isoformat(), engine.parse_di_rates(), holidays)
    path = ROOT / "data/funding-pu-latest.js"
    preview_columns = ("data", "dataIso", "puAtualizado", "puJuros", "valorReais", "taxaDiAnualEquivalente")
    for vehicle in result["vehicles"].values():
        for series in vehicle["series"].values():
            for forecast in series.get("forecasts", {}).values():
                forecast["rows"] = [{column: row[column] for column in (*preview_columns,
                                    "puSemEncargos", "puJurosRemuneratorios", "puMulta", "puMora",
                                    "puEncargosMoratorios", "diasUteisMora") if column in row}
                                    for row in forecast["rows"]]
    payload = "window.LAMINA_FUNDING_PU = " + json.dumps(result, ensure_ascii=True, separators=(",", ":")) + ";\n"
    if not path.exists() or path.read_text(encoding="utf-8") != payload:
        path.write_text(payload, encoding="utf-8")
    series = [s for vehicle in result["vehicles"].values() for s in vehicle["series"].values()]
    print(json.dumps({"fundingPuThrough": result["target"], "vehicles": len(result["vehicles"]),
                      "advanced": sum(bool(s["rows"]) for s in series), "held": sum("reason" in s for s in series)}))


if __name__ == "__main__":
    main()
