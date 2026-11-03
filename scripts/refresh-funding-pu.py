from __future__ import annotations

import argparse
import importlib.util
import json
from datetime import date, timedelta
from decimal import Decimal
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location("funding_terms", ROOT / "scripts/reconcile-cras-carteira-documents.py")
terms = importlib.util.module_from_spec(spec)
spec.loader.exec_module(terms)
engine = terms.ENGINE
ONE = Decimal(1)


def dec(value):
    return Decimal(str(value))


def event_date(event):
    return engine.iso(engine.as_date(event.get("dataIso") or event.get("date") or event.get("data")))


def extend_series(cota, source, target, holidays, rates, extra_events=()):
    history = cota.get("historicoPu") or []
    last = history[-1] if history else {}
    rows = []
    result = {"rows": rows, "through": last.get("dataIso") or source}

    def stop(reason):
        return {**result, "reason": reason}

    if not cota.get("quantidade") or not cota.get("pu") or source >= target:
        return result
    if last.get("dataIso") != source:
        return stop("Memoria de PU nao chega a ultima posicao")
    if cota.get("documentValidation", {}).get("status") == "pendente_documentos":
        return stop("Cadastro pendente de documentacao")
    if not cota.get("dataVencimentoIso") or cota["dataVencimentoIso"] <= source:
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

    events = {cota["dataVencimentoIso"], *extra_events}
    for field in ("agendaPagamentos", "eventosPendentes", "eventosPrevistos", "eventosAplicados"):
        events.update(filter(None, (event_date(e) for e in cota.get(field) or [])))
    next_event = min((key for key in events if key > source), default="")

    base = dec(last.get("puBaseCalculo") or last.get("valorNominal") or cota["principalResidual"])
    nominal = dec(last.get("valorNominal") or base)
    quantity = dec(cota["quantidade"])
    observed = dec(cota["pu"])
    days = period_days = int(last.get("diasUteisPeriodo") or 0)
    product = dec(last.get("produtorioFatorDi") or 1) if method == "di_spread_ts_252" else dec(last.get("fatorDiAcumulado") or 1)
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
        daily = Decimal(0)
        if method != "prefixado_252_ts":
            rate = rates.get(reference, {})
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
        calculated, combined = theoretical(product, days)
        # Preserve the imported PU, including any historical residual, as the opening balance.
        pu = terms.quantize(observed + calculated - initial, 8)
        rows.append({
            "data": engine.date_key_to_br(key), "dataIso": key, "diaUtil": True,
            "diasUteis": int(last.get("diasUteis") or 0) + days - period_days, "diasUteisPeriodo": days,
            "quantidade": float(quantity), "valorNominal": float(nominal), "puAtualizado": float(pu),
            "puAntesEvento": float(pu), "puAposEvento": float(pu), "puEvento": 0, "valorEventoReais": 0,
            "principalAntesEvento": float(nominal), "principalAposEvento": float(nominal),
            "puJuros": float(pu - nominal), "valorReais": float(pu * quantity), "evento": "",
            "taxaDiUtilizadaDia": float(daily), "tdk": float(daily), "fatorDiario": float(factor),
            "taxaDiAnualEquivalente": float((ONE + daily) ** 252 - ONE) if reference else float(fixed),
            "fator": combined, "fatorJurosAcumulado": combined, "produtorioFatorDi": float(product),
            "dataTaxaDiIso": reference, "dataReferenciaTaxaDiIso": reference,
            "dataTaxaDi": engine.date_key_to_br(reference) if reference else "",
            "dataReferenciaTaxaDi": engine.date_key_to_br(reference) if reference else "",
            "taxaDiStatus": "BCB_SGS_12" if reference else "prefixada",
            "lagBusinessDays": lag, "puBaseCalculo": float(base),
        })
        result["through"] = key
    return result


def build_funding_pu(target, rates, holidays):
    manifest = engine.load_json_assignment(ROOT / "data/cra-manifest.js")
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
                series[key] = extend_series(cota, source, target, holidays, rates, payments)
        vehicles[cra] = {"sourceDate": source, "sourceRevision": revision, "series": series}
    return {"target": target, "vehicles": vehicles}


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
    payload = "window.LAMINA_FUNDING_PU = " + json.dumps(result, ensure_ascii=True, separators=(",", ":")) + ";\n"
    if not path.exists() or path.read_text(encoding="utf-8") != payload:
        path.write_text(payload, encoding="utf-8")
    series = [s for vehicle in result["vehicles"].values() for s in vehicle["series"].values()]
    print(json.dumps({"fundingPuThrough": result["target"], "vehicles": len(result["vehicles"]),
                      "advanced": sum(bool(s["rows"]) for s in series), "held": sum("reason" in s for s in series)}))


if __name__ == "__main__":
    main()
