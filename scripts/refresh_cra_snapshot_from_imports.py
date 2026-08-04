import argparse
import csv
import json
import math
import re
import shutil
import unicodedata
from datetime import datetime, timedelta
from pathlib import Path


CRA65_PAYMENT_DATES = [
    "2026-08-17", "2026-09-15", "2026-10-15", "2026-11-16", "2026-12-15", "2027-01-15",
    "2027-02-15", "2027-03-15", "2027-04-15", "2027-05-17", "2027-06-15", "2027-07-15",
    "2027-08-16", "2027-09-15", "2027-10-15", "2027-11-16", "2027-12-15", "2028-01-17",
    "2028-02-15", "2028-03-15", "2028-04-17", "2028-05-15", "2028-06-16", "2028-07-17",
    "2028-08-15", "2028-09-15", "2028-10-16", "2028-11-16", "2028-12-15", "2029-01-15",
    "2029-02-15", "2029-03-15", "2029-04-16", "2029-05-15", "2029-06-15", "2029-07-16",
    "2029-08-15", "2029-09-17", "2029-10-15", "2029-11-16", "2029-12-17", "2030-01-15",
    "2030-02-15", "2030-03-15", "2030-04-15", "2030-05-15", "2030-06-17", "2030-07-15",
    "2030-08-15", "2030-09-16", "2030-10-15", "2030-11-18", "2030-12-16", "2031-01-15",
    "2031-02-17", "2031-03-17", "2031-04-15", "2031-05-15", "2031-06-16", "2031-07-15",
    "2031-08-15", "2031-09-15", "2031-10-15", "2031-11-17", "2031-12-15", "2032-01-15",
    "2032-02-16", "2032-03-15", "2032-04-15", "2032-05-17", "2032-06-15", "2032-07-15",
]


SUB_PAYMENT_RESET_EVENTS = {
    "cra-modelo": {
        "2026-07-31": {
            "benchmarkPu": 1000.0,
            "descricao": "Pagamento de premio da Subordinada",
        },
    },
}


PDD_RENEGOTIATION_OVERRIDES = {
    "cra-modelo": [
        {
            "id": "cra42-tecplante-pdd-renegociado-2026-07-31",
            "fromDate": "2026-07-31",
            "numeroUnico": "471368",
            "nameContains": "tecplante",
            "cedente": "TEC PLANTE PRODUTOS AGRICOLAS LTDA",
            "descricao": "PDD zerado por renegociacao do titulo.",
        },
    ],
}


CRA_STATIC_INFO = {
    "cra-modelo": {
        "dataVencimentoIso": "2030-06-17",
        "dataVencimento": "17/06/2030",
        "vencimentosSeries": {
            "SR1": "2030-04-15",
            "SR2": "2030-05-15",
            "SR3": "2030-06-17",
            "SUB": "2030-06-17",
        },
    },
    "cra-65": {
        "dataVencimentoIso": "2032-07-15",
        "dataVencimento": "15/07/2032",
        "vencimentosSeries": {
            "SR1": "2032-07-15",
            "SR2": "2032-07-15",
            "SUB": "2032-07-15",
        },
        "agendaPagamentosByClasse": {
            "SR1": [
                {"dataIso": item, "juros": True, "amortizacaoPercentual": 1 if item == "2032-07-15" else 0}
                for item in CRA65_PAYMENT_DATES
            ],
            "SR2": [
                {"dataIso": item, "juros": True, "amortizacaoPercentual": 1 if item == "2032-07-15" else 0}
                for item in CRA65_PAYMENT_DATES
            ],
        },
        "series": [
            {
                "classe": "SR2",
                "ifCodigo": "CRA0260040Q",
                "tipo": "sr",
                "quantidade": 400000,
                "dataInicio": "30/07/2026",
                "dataInicioIso": "2026-07-30",
                "valorNominalInicial": 1000,
                "principalResidual": 1000,
                "indexador": "DI",
                "percentualIndexador": 1.05,
                "metodo": "percentual_di_252",
                "ehFunding": True,
                "ordem": 20,
            },
        ],
        "quantityEvents": [
            {
                "classe": "SUB",
                "fromDate": "2026-07-30",
                "quantidade": 200000,
                "quantidadeEvento": 100000,
                "valorIntegralizado": 100000000,
                "puIntegralizacao": 1000,
                "descricao": "Integralizacao adicional na Subordinada existente.",
            },
        ],
    }
}


def load_json(path):
    return json.loads(Path(path).read_text(encoding="utf-8-sig"))


def load_js_snapshot(path):
    text = Path(path).read_text(encoding="utf-8-sig")
    match = re.search(r"\]\s*=\s*(\{[\s\S]*\});\s*$", text)
    if not match:
        raise ValueError(f"Snapshot JS invalido: {path}")
    return json.loads(match.group(1))


def normalize_name(value):
    text = unicodedata.normalize("NFKD", str(value or "").lower())
    text = "".join(char for char in text if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", "", text)


def normalize_text(value):
    text = unicodedata.normalize("NFKD", str(value or "").strip())
    return "".join(char for char in text if not unicodedata.combining(char))


def parse_number(value):
    text = str(value or "").strip().replace("R$", "").replace("%", "").replace(" ", "")
    text = re.sub(r"[^0-9,.\-]", "", text)
    if not text or text in {"-", ".", ","}:
        return 0.0
    if "," in text:
        text = text.replace(".", "").replace(",", ".")
    try:
        return float(text)
    except ValueError:
        return 0.0


def add_manual_adjustment(snapshot, adjustment):
    metadata = snapshot.setdefault("metadata", {})
    adjustments = [
        item for item in metadata.get("manualAdjustments", []) or []
        if item.get("id") != adjustment.get("id")
    ]
    adjustments.append(adjustment)
    metadata["manualAdjustments"] = adjustments


def apply_pdd_renegotiation_overrides(cra_id, date_key, carteira, snapshot):
    rules = PDD_RENEGOTIATION_OVERRIDES.get(cra_id, [])
    for rule in rules:
        from_date = str(rule.get("fromDate") or "")
        if from_date and date_key < from_date:
            continue

        total_adjusted = 0.0
        adjusted_rows = 0
        target_lastro = str(rule.get("numeroUnico") or "").strip()
        target_name = normalize_name(rule.get("nameContains"))

        for row in carteira:
            row_lastro = str(row.get("numeroUnico") or "").strip()
            row_name = normalize_name(f"{row.get('cedente') or ''} {row.get('sacado') or ''}")
            matches_lastro = bool(target_lastro and row_lastro == target_lastro)
            matches_name = bool(target_name and target_name in row_name)
            if not matches_lastro and not matches_name:
                continue

            original_pdd = float(row.get("pdd", 0.0) or 0.0)
            if original_pdd <= 0:
                continue

            row["pddOriginal"] = original_pdd
            row["pddAjusteManual"] = -original_pdd
            row["pdd"] = 0.0
            row["valorPresenteLiquido"] = float(row.get("valorPresenteDia", 0.0) or 0.0)
            row["statusPdd"] = "Renegociado"
            observation = str(row.get("observacao") or "").strip()
            note = rule.get("descricao") or "PDD zerado por ajuste manual."
            row["observacao"] = f"{observation}; {note}".strip("; ")
            total_adjusted += original_pdd
            adjusted_rows += 1

        if adjusted_rows:
            add_manual_adjustment(
                snapshot,
                {
                    "id": rule.get("id"),
                    "tipo": "pdd_renegociado",
                    "dataInicio": from_date or date_key,
                    "dataBase": date_key,
                    "lastro": target_lastro,
                    "cedente": rule.get("cedente") or "",
                    "linhasAjustadas": adjusted_rows,
                    "valorPddZerado": total_adjusted,
                    "observacao": rule.get("descricao") or "",
                },
            )


def format_currency_br(value):
    text = f"{float(value):,.2f}"
    return "R$ " + text.replace(",", "X").replace(".", ",").replace("X", ".")


def format_number_br(value, decimals=6):
    text = f"{float(value):,.{decimals}f}"
    return text.replace(",", "X").replace(".", ",").replace("X", ".")


def format_percent_br(value, decimals=2):
    return format_number_br(float(value) * 100, decimals) + "%"


def read_csv(path):
    raw = path.read_text(encoding="utf-8-sig")
    first = raw.splitlines()[0] if raw.splitlines() else ""
    delimiter = ";" if first.count(";") >= first.count(",") else ","
    with path.open("r", encoding="utf-8-sig", newline="") as handle:
        return list(csv.DictReader(handle, delimiter=delimiter))


def web_path(project_root, path):
    return Path(path).resolve().relative_to(project_root.resolve()).as_posix()


def copy_raw(project_root, cra_root, source_path, import_type, date_key, revision_id):
    source = Path(source_path)
    if not source.exists():
        return ""
    target_dir = cra_root / "archive" / "raw" / import_type / date_key
    target_dir.mkdir(parents=True, exist_ok=True)
    target = target_dir / f"{import_type}-{date_key}-{revision_id}{source.suffix.lower()}"
    shutil.copy2(source, target)
    return web_path(project_root, target)


def top_exposure(rows, field):
    totals = {}
    for row in rows:
        key = row.get(field, "") or ""
        if not key:
            continue
        totals[key] = totals.get(key, 0.0) + row["valorPresenteDia"]
    if not totals:
        return {"name": "", "valorPresenteDia": 0.0}
    name, value = max(totals.items(), key=lambda item: item[1])
    return {"name": name, "valorPresenteDia": value}


def is_active_receivable(row):
    status = normalize_name(row.get("status"))
    value = float(row.get("valorPresenteLiquido", row.get("valorPresenteDia", 0.0)) or 0.0)
    liquidation_date = str(row.get("dataLiquidacao", "") or "").strip()
    return value > 0 and "liquid" not in status and not liquidation_date


def nominal_net_pdd(row):
    return max(0.0, float(row.get("valorFace", 0.0) or 0.0) - float(row.get("pdd", 0.0) or 0.0))


def classify_remuneration(row):
    value = normalize_name(row.get("tipoRemuneracao") or row.get("tipo_remuneracao"))
    taxa_texto = normalize_name(row.get("taxaTexto") or "")
    if "pos" in value or "cdi" in value or "di" == value or "cdi" in taxa_texto:
        return "Pós fixado"
    if "pre" in value or "prefix" in value:
        return "Pré fixado"
    return "Não informado"


def weighted_average(rows, value_field, weight_field):
    weight = sum(float(row.get(weight_field, 0.0) or 0.0) for row in rows)
    if not weight:
        return 0.0
    return sum(float(row.get(value_field, 0.0) or 0.0) * float(row.get(weight_field, 0.0) or 0.0) for row in rows) / weight


def aggregate_rows(rows, key_field, value_fields):
    grouped = {}
    for row in rows:
        key = str(row.get(key_field, "") or "Não informado").strip() or "Não informado"
        current = grouped.setdefault(key, {"name": key, "quantidade": 0})
        current["quantidade"] += 1
        for field in value_fields:
            current[field] = current.get(field, 0.0) + float(row.get(field, 0.0) or 0.0)
    return sorted(grouped.values(), key=lambda item: item.get(value_fields[0], 0.0), reverse=True)


def build_composicao_carteira(active_rows):
    order = {"Pré fixado": 0, "Pós fixado": 1, "Não informado": 2}
    groups = {}
    for row in active_rows:
        label = classify_remuneration(row)
        groups.setdefault(label, []).append(row)

    rows = []
    for label, items in sorted(groups.items(), key=lambda item: order.get(item[0], 99)):
        valor_nominal = sum(nominal_net_pdd(row) for row in items)
        valor_presente = sum(float(row.get("valorPresenteLiquido", 0.0) or 0.0) for row in items)
        rows.append(
            {
                "label": label,
                "valorNominal": valor_nominal,
                "valorPresente": valor_presente,
                "taxaMedia": weighted_average(items, "taxa", "valorPresenteLiquido"),
            }
        )

    total_nominal = sum(row["valorNominal"] for row in rows)
    total_presente = sum(row["valorPresente"] for row in rows)
    rows.append(
        {
            "label": "Total carteira alocada",
            "valorNominal": total_nominal,
            "valorPresente": total_presente,
            "taxaMedia": weighted_average(active_rows, "taxa", "valorPresenteLiquido"),
        }
    )
    return rows


def build_aging(active_rows, carteira_vp):
    labels = [
        "Em dia",
        "Entre 1 e 30 dias",
        "Entre 31 e 60 dias",
        "Entre 61 e 90 dias",
        "Entre 91 e 120 dias",
        "Entre 121 e 150 dias",
        "Entre 151 e 180 dias",
        "Acima de 180 dias",
    ]
    grouped = {label: {"status": label, "valorNominal": 0.0, "valorPresente": 0.0, "percentualCarteira": 0.0} for label in labels}
    lookup = {normalize_name(label): label for label in labels}
    for row in active_rows:
        key = lookup.get(normalize_name(row.get("status")), str(row.get("status") or "Não informado"))
        if key not in grouped:
            grouped[key] = {"status": key, "valorNominal": 0.0, "valorPresente": 0.0, "percentualCarteira": 0.0}
        grouped[key]["valorNominal"] += nominal_net_pdd(row)
        grouped[key]["valorPresente"] += float(row.get("valorPresenteLiquido", 0.0) or 0.0)
    for item in grouped.values():
        item["percentualCarteira"] = item["valorPresente"] / carteira_vp if carteira_vp else 0.0
    return [grouped[label] for label in labels if label in grouped]


def build_pdd_composition(active_rows):
    rows = [row for row in active_rows if float(row.get("pdd", 0.0) or 0.0) > 0]
    grouped = {}
    for row in rows:
        key = str(row.get("cedente", "") or "Não informado").strip() or "Não informado"
        current = grouped.setdefault(key, {"cedente": key, "valorAberto": 0.0, "valorPdd": 0.0, "status": str(row.get("status") or "")})
        current["valorAberto"] += float(row.get("valorFace", 0.0) or row.get("valorPresenteDia", 0.0) or 0.0)
        current["valorPdd"] += float(row.get("pdd", 0.0) or 0.0)
    return sorted(grouped.values(), key=lambda item: item["valorPdd"], reverse=True)[:20]


def build_day_movements(carteira, date_key, patrimonio_liquido):
    acquisitions = [row for row in carteira if row.get("dataAquisicao") == date_key]
    liquidations = [row for row in carteira if row.get("dataLiquidacao") == date_key]
    acquired = aggregate_rows(acquisitions, "cedente", ["valorFace", "valorAquisicao"])[:20]
    liquidated = aggregate_rows(liquidations, "cedente", ["valorLiquidacao", "valorFace"])[:20]
    for row in acquired:
        row["percentualPl"] = row.get("valorFace", 0.0) / patrimonio_liquido if patrimonio_liquido else 0.0
    for row in liquidated:
        row["percentualPl"] = row.get("valorLiquidacao", 0.0) / patrimonio_liquido if patrimonio_liquido else 0.0
    return {"aquisicoes": acquired, "liquidacoes": liquidated}


def parse_date_key(value):
    text = str(value or "").strip()[:10]
    if not text:
        return None
    try:
        return datetime.strptime(text, "%Y-%m-%d").date()
    except ValueError:
        return None


def format_date_br(value):
    parsed = parse_date_key(value)
    return parsed.strftime("%d/%m/%Y") if parsed else ""


def is_business_day_key(date_key, holiday_dates=None):
    parsed = parse_date_key(date_key)
    if not parsed:
        return False
    return parsed.weekday() < 5 and str(date_key) not in (holiday_dates or set())


def round_decimal_js(value, decimals):
    factor = 10 ** decimals
    return math.floor((float(value or 0.0) + sys_float_epsilon()) * factor + 0.5) / factor


def sys_float_epsilon():
    return 2.220446049250313e-16


def truncate_decimal(value, decimals):
    factor = 10 ** decimals
    return math.trunc(float(value or 0.0) * factor) / factor


def get_ts_daily_factor(daily_rate, percentual_indexador):
    tdk = round_decimal_js(daily_rate, 8)
    return truncate_decimal(1 + (tdk * float(percentual_indexador or 1.0)), 16)


def add_ts_factor(product, daily_factor):
    return truncate_decimal(float(product or 1.0) * float(daily_factor or 1.0), 16)


def apply_ts_factor_to_pu(base_pu, product):
    vne = truncate_decimal(base_pu, 8)
    factor_di = round_decimal_js(product, 8)
    interest = truncate_decimal(vne * (factor_di - 1), 8)
    return vne + interest


def get_static_payment_label(cota, date_key):
    scheduled_event = next(
        (
            event for event in cota.get("agendaPagamentos", []) or []
            if str(event.get("dataIso") or event.get("data") or "")[:10] == date_key
        ),
        None,
    )
    if not scheduled_event:
        return ""
    labels = []
    if scheduled_event.get("juros"):
        labels.append("Juros TS")
    amortization = parse_number(scheduled_event.get("amortizacaoPercentual")) or (1 if scheduled_event.get("amortizacao") else 0)
    if amortization:
        labels.append("Amortizacao final TS" if amortization >= 1 else "Amortizacao TS")
    return " / ".join(labels)


def last_known_rate_info(cota, date_key):
    rows = []
    for source in (cota.get("historicoPu", []) or [], cota.get("previsaoPu", []) or []):
        for row in source:
            row_date = str(row.get("dataIso") or row.get("data") or "")[:10]
            if row_date and row_date <= date_key:
                rows.append((row_date, row))
    if rows:
        row = sorted(rows, key=lambda item: item[0])[-1][1]
    else:
        row = next((item for item in cota.get("historicoPu", []) or [] if parse_number(item.get("taxaDiUtilizadaDia") or item.get("tdk"))), {})
    daily_rate = parse_number(row.get("taxaDiUtilizadaDia") or row.get("tdk"))
    annual_rate = parse_number(row.get("taxaDiAnualEquivalente"))
    if not annual_rate and daily_rate:
        annual_rate = (1 + daily_rate) ** 252 - 1
    return {
        "dailyRate": daily_rate,
        "annualRate": annual_rate,
        "dataTaxaDi": row.get("dataTaxaDi") or format_date_br(date_key),
        "dataTaxaDiIso": row.get("dataTaxaDiIso") or row.get("dataReferenciaTaxaDiIso") or date_key,
        "dataReferenciaTaxaDi": row.get("dataReferenciaTaxaDi") or row.get("dataTaxaDi") or format_date_br(date_key),
        "dataReferenciaTaxaDiIso": row.get("dataReferenciaTaxaDiIso") or row.get("dataTaxaDiIso") or date_key,
    }


def snapshot_holidays(snapshot):
    calendar = snapshot.get("metadata", {}).get("businessCalendar") or snapshot.get("businessCalendar") or {}
    values = calendar.get("holidays") or calendar.get("feriados") or []
    dates = set()
    for value in values:
        text = str(value or "")[:10]
        if parse_date_key(text):
            dates.add(text)
    return dates


def rate_info_from_row(row, fallback_date_key):
    row = row or {}
    daily_rate = parse_number(row.get("taxaDiUtilizadaDia") or row.get("tdk"))
    annual_rate = parse_number(row.get("taxaDiAnualEquivalente"))
    if not annual_rate and daily_rate:
        annual_rate = (1 + daily_rate) ** 252 - 1
    return {
        "dailyRate": daily_rate,
        "annualRate": annual_rate,
        "dataTaxaDi": row.get("dataTaxaDi") or row.get("dataReferenciaTaxaDi") or format_date_br(fallback_date_key),
        "dataTaxaDiIso": row.get("dataTaxaDiIso") or row.get("dataReferenciaTaxaDiIso") or fallback_date_key,
        "taxaDiStatus": row.get("taxaDiStatus") or "BCB_SGS_12_D-2",
        "defasagemDiDiasUteis": row.get("defasagemDiDiasUteis") if row.get("defasagemDiDiasUteis") is not None else 2,
        "dataReferenciaTaxaDi": row.get("dataReferenciaTaxaDi") or row.get("dataTaxaDi") or format_date_br(fallback_date_key),
        "dataReferenciaTaxaDiIso": row.get("dataReferenciaTaxaDiIso") or row.get("dataTaxaDiIso") or fallback_date_key,
    }


def funding_rate_info_for_date(cotas, date_key):
    exact_rows = []
    previous_rows = []
    for cota in cotas or []:
        if not cota.get("ehFunding"):
            continue
        for source_name in ("historicoPu", "previsaoPu"):
            for row in cota.get(source_name, []) or []:
                row_key = str(row.get("dataIso") or row.get("data") or "")[:10]
                if not row_key:
                    continue
                if row_key == date_key:
                    exact_rows.append(row)
                elif row_key < date_key:
                    previous_rows.append((row_key, row))
    if exact_rows:
        return rate_info_from_row(exact_rows[0], date_key)
    if previous_rows:
        return rate_info_from_row(sorted(previous_rows, key=lambda item: item[0])[-1][1], date_key)
    reference = next((cota for cota in cotas or [] if cota.get("ehFunding")), {})
    return last_known_rate_info(reference, date_key)


def build_integralized_funding_cota(series, date_key, reference_cotas, holiday_dates):
    start_key = str(series.get("dataInicioIso") or "")
    start_date = parse_date_key(start_key)
    end_date = parse_date_key(date_key)
    if not start_date or not end_date or date_key < start_key:
        return None

    quantity = float(series.get("quantidade") or 0.0)
    principal = float(series.get("principalResidual") or series.get("valorNominalInicial") or 1000.0)
    pu = principal
    base_pu = principal
    period_factor = 1.0
    total_factor = 1.0
    pure_di_factor = 1.0
    dias_uteis = 0
    percentual_indexador = float(series.get("percentualIndexador") or 1.0)
    history = []

    def build_row(row_key, rate_info, dia_util, fator_diario, evento=""):
        fator = pu / principal if principal > 0 else 0.0
        return {
            "data": format_date_br(row_key),
            "dataIso": row_key,
            "diaUtil": dia_util,
            "taxaDiUtilizadaDia": rate_info["dailyRate"],
            "taxaDiAnualEquivalente": rate_info["annualRate"],
            "dataTaxaDi": rate_info["dataTaxaDi"],
            "dataTaxaDiIso": rate_info["dataTaxaDiIso"],
            "taxaDiStatus": rate_info["taxaDiStatus"],
            "defasagemDiDiasUteis": rate_info["defasagemDiDiasUteis"],
            "dataReferenciaTaxaDi": rate_info["dataReferenciaTaxaDi"],
            "dataReferenciaTaxaDiIso": rate_info["dataReferenciaTaxaDiIso"],
            "diasUteis": dias_uteis,
            "diasUteisPeriodo": dias_uteis,
            "fator": fator,
            "valorNominal": principal,
            "puAtualizado": pu,
            "puJuros": max(0.0, pu - principal),
            "valorReais": pu * quantity,
            "tdk": rate_info["dailyRate"],
            "fatorDiario": fator_diario,
            "produtorioFatorDi": total_factor,
            "fatorDiAcumulado": period_factor,
            "spread": percentual_indexador - 1.0 if evento != "Integralizacao" else 0.0,
            "spreadAcumulado": total_factor - pure_di_factor if evento != "Integralizacao" else 0.0,
            "fatorJurosAcumulado": fator,
            "evento": evento,
            "puEvento": 0,
        }

    rate_info = funding_rate_info_for_date(reference_cotas, start_key)
    history.append(build_row(start_key, rate_info, is_business_day_key(start_key, holiday_dates), 1.0, "Integralizacao"))

    cursor = start_date
    while cursor < end_date:
        cursor += timedelta(days=1)
        row_key = cursor.isoformat()
        rate_info = funding_rate_info_for_date(reference_cotas, row_key)
        dia_util = is_business_day_key(row_key, holiday_dates)
        fator_diario = 1.0
        if dia_util:
            dias_uteis += 1
            fator_diario = get_ts_daily_factor(rate_info["dailyRate"], percentual_indexador)
            period_factor = add_ts_factor(period_factor, fator_diario)
            total_factor = add_ts_factor(total_factor, fator_diario)
            pure_di_factor = add_ts_factor(pure_di_factor, get_ts_daily_factor(rate_info["dailyRate"], 1.0))
            pu = apply_ts_factor_to_pu(base_pu, period_factor)
        history.append(build_row(row_key, rate_info, dia_util, fator_diario))

    cota = {
        "classe": series.get("classe"),
        "ifCodigo": series.get("ifCodigo"),
        "tipo": series.get("tipo") or "sr",
        "quantidade": quantity,
        "dataInicio": series.get("dataInicio") or format_date_br(start_key),
        "dataInicioIso": start_key,
        "valorNominalInicial": float(series.get("valorNominalInicial") or principal),
        "principalResidual": principal,
        "pu": pu,
        "valor": pu * quantity,
        "taxaAa": 0,
        "taxaAm": 0,
        "taxaDia": 0,
        "indexador": series.get("indexador") or "DI",
        "percentualIndexador": percentual_indexador,
        "metodo": series.get("metodo") or "percentual_di_252",
        "ehFunding": bool(series.get("ehFunding", True)),
        "ordem": series.get("ordem") or 99,
        "eventosAplicados": [],
        "historicoPu": history,
        "previsaoPu": [],
        "acumulacaoFinal": {
            "periodoInicio": series.get("dataInicio") or format_date_br(start_key),
            "periodoFim": format_date_br(date_key),
            "diasAcumulacao": dias_uteis,
            "diasUteisPeriodo": dias_uteis,
            "puAntesAcumulacao": principal,
            "puFinal": pu,
        },
        "dataHistoricaDisponivel": True,
        "dataHistoricaSelecionada": format_date_br(date_key),
        "dataHistoricaIso": date_key,
    }
    return cota


def ensure_static_cotas(snapshot, cra_id, date_key):
    info = CRA_STATIC_INFO.get(cra_id) or {}
    series_list = info.get("series") or []
    if not series_list:
        return

    passivo = snapshot.setdefault("passivo", {})
    cotas = passivo.setdefault("cotas", [])
    holiday_dates = snapshot_holidays(snapshot)
    existing_keys = {
        str(cota.get("ifCodigo") or cota.get("classe") or "").upper()
        for cota in cotas
    }

    for series in series_list:
        start_key = str(series.get("dataInicioIso") or "")
        if start_key and date_key < start_key:
            continue
        key = str(series.get("ifCodigo") or series.get("classe") or "").upper()
        if key in existing_keys:
            continue
        cota = build_integralized_funding_cota(series, date_key, cotas, holiday_dates)
        if not cota:
            continue
        cotas.append(cota)
        existing_keys.add(key)
        add_manual_adjustment(
            snapshot,
            {
                "id": f"{cra_id}-{str(series.get('classe') or '').lower()}-integralizacao-{start_key}",
                "tipo": "integralizacao",
                "dataInicio": start_key,
                "dataBase": date_key,
                "classe": series.get("classe"),
                "ifCodigo": series.get("ifCodigo"),
                "quantidade": float(series.get("quantidade") or 0.0),
                "valorIntegralizado": float(series.get("quantidade") or 0.0) * float(series.get("valorNominalInicial") or 1000.0),
                "remuneracao": f"{format_number_br(float(series.get('percentualIndexador') or 0.0) * 100, 2)}% {series.get('indexador') or 'DI'}",
                "observacao": "Serie incluida por integralizacao informada pelo usuario.",
            },
        )


def quantity_events_for_class(cra_id, classe):
    info = CRA_STATIC_INFO.get(cra_id) or {}
    normalized_class = str(classe or "").upper()
    return [
        event for event in info.get("quantityEvents", []) or []
        if str(event.get("classe") or "").upper() == normalized_class
    ]


def quantity_event_for_period(cra_id, classe, previous_key, date_key):
    candidates = []
    for event in quantity_events_for_class(cra_id, classe):
        event_date = str(event.get("fromDate") or "")
        if event_date and (not previous_key or event_date > previous_key) and event_date <= date_key:
            candidates.append(event)
    return sorted(candidates, key=lambda event: str(event.get("fromDate") or ""))[-1] if candidates else None


def apply_static_quantity_events(snapshot, cra_id, date_key):
    info = CRA_STATIC_INFO.get(cra_id) or {}
    events = info.get("quantityEvents") or []
    if not events:
        return

    cotas = snapshot.get("passivo", {}).get("cotas", []) or []
    for event in events:
        event_date = str(event.get("fromDate") or "")
        if event_date and date_key < event_date:
            continue
        classe = str(event.get("classe") or "").upper()
        cota = next((item for item in cotas if str(item.get("classe") or "").upper() == classe), None)
        if not cota:
            continue
        previous_quantity = float(cota.get("quantidade") or 0.0)
        target_quantity = float(event.get("quantidade") or previous_quantity)
        if not target_quantity or abs(previous_quantity - target_quantity) <= 0.0001:
            continue
        cota["quantidade"] = target_quantity
        if cota.get("ehFunding"):
            cota["valor"] = float(cota.get("pu") or 0.0) * target_quantity
        add_manual_adjustment(
            snapshot,
            {
                "id": f"{cra_id}-{classe.lower()}-quantidade-{event_date}",
                "tipo": "integralizacao_quantidade",
                "dataInicio": event_date,
                "dataBase": date_key,
                "classe": classe,
                "quantidadeAnterior": previous_quantity,
                "quantidadeAtual": target_quantity,
                "quantidadeEvento": float(event.get("quantidadeEvento") or max(target_quantity - previous_quantity, 0.0)),
                "valorIntegralizado": float(event.get("valorIntegralizado") or 0.0),
                "puIntegralizacao": float(event.get("puIntegralizacao") or 0.0),
                "observacao": event.get("descricao") or "Ajuste de quantidade por integralizacao.",
            },
        )


def build_funding_forecast_rows(cota, date_key, holiday_dates=None, days=220):
    parsed = parse_date_key(date_key)
    if not parsed:
        return []

    rate_info = last_known_rate_info(cota, date_key)
    principal = float(cota.get("principalResidual") or cota.get("valorNominalInicial") or 0.0)
    pu = float(cota.get("pu") or principal or 0.0)
    base_pu = pu
    period_factor = 1.0
    total_factor = 1.0
    pure_di_factor = 1.0
    accum = cota.get("acumulacaoFinal") or {}
    dias_uteis = int(parse_number(accum.get("diasAcumulacao")))
    dias_uteis_periodo = int(parse_number(accum.get("diasUteisPeriodo") if accum.get("diasUteisPeriodo") is not None else accum.get("diasAcumulacao")))
    rows = []
    cursor = parsed
    has_payment = False

    for _ in range(days):
        cursor = cursor + timedelta(days=1)
        row_key = cursor.isoformat()
        dia_util = is_business_day_key(row_key, holiday_dates)
        fator_diario = 1.0
        pu_antes_evento = pu

        if dia_util and principal > 0:
            dias_uteis += 1
            dias_uteis_periodo += 1
            fator_diario = get_ts_daily_factor(rate_info["dailyRate"], cota.get("percentualIndexador") or 1)
            period_factor = add_ts_factor(period_factor, fator_diario)
            total_factor = add_ts_factor(total_factor, fator_diario)
            pure_di_factor = add_ts_factor(pure_di_factor, get_ts_daily_factor(rate_info["dailyRate"], 1))
            pu = apply_ts_factor_to_pu(base_pu, period_factor)
            pu_antes_evento = pu

        evento_ts = get_static_payment_label(cota, row_key)
        pu_evento = 0.0
        efeito_evento = ""
        principal_antes_evento = principal

        if evento_ts:
            if "Juros" in evento_ts:
                pu_evento = max(0.0, pu - principal)
                pu = max(principal, pu - pu_evento)
                base_pu = pu
                period_factor = 1.0
                dias_uteis_periodo = 0
                efeito_evento = "paga_remuneracao"
            if "Amortizacao" in evento_ts:
                pu_evento = pu
                principal = 0.0
                pu = 0.0
                base_pu = 0.0
                period_factor = 1.0
                dias_uteis_periodo = 0
                efeito_evento = "amortizacao_final"

        fator = pu / principal if principal > 0 else 0.0
        row = {
            "data": format_date_br(row_key),
            "dataIso": row_key,
            "diaUtil": dia_util,
            "taxaDiUtilizadaDia": rate_info["dailyRate"],
            "taxaDiAnualEquivalente": rate_info["annualRate"],
            "dataTaxaDi": rate_info["dataTaxaDi"],
            "dataTaxaDiIso": rate_info["dataTaxaDiIso"],
            "taxaDiStatus": "projetada",
            "dataReferenciaTaxaDi": rate_info["dataReferenciaTaxaDi"],
            "dataReferenciaTaxaDiIso": rate_info["dataReferenciaTaxaDiIso"],
            "diasUteis": dias_uteis,
            "diasUteisPeriodo": dias_uteis_periodo,
            "fator": fator,
            "valorNominal": principal,
            "puAtualizado": pu,
            "puJuros": pu_evento if pu_evento > 0 else pu - principal,
            "puAntesEvento": pu_antes_evento,
            "puEvento": pu_evento,
            "puAposEvento": pu,
            "principalAntesEvento": principal_antes_evento,
            "principalAposEvento": principal,
            "valorReais": pu * float(cota.get("quantidade") or 0.0),
            "valorEventoReais": pu_evento * float(cota.get("quantidade") or 0.0),
            "tdk": rate_info["dailyRate"],
            "fatorDiario": fator_diario,
            "produtorioFatorDi": total_factor,
            "fatorDiAcumulado": period_factor,
            "spread": float(cota.get("percentualIndexador") or 1.0) - 1.0,
            "spreadAcumulado": total_factor - pure_di_factor,
            "fatorJurosAcumulado": fator,
            "evento": evento_ts,
            "eventoTs": evento_ts,
            "efeitoEvento": efeito_evento,
            "ehDataPagamentoTs": bool(evento_ts),
        }
        rows.append(row)
        if row["ehDataPagamentoTs"]:
            has_payment = True
        if has_payment and len(rows) >= 30:
            break

    return rows


def rebuild_static_funding_forecasts(snapshot, cra_id, date_key):
    info = CRA_STATIC_INFO.get(cra_id)
    if not info or not info.get("agendaPagamentosByClasse"):
        return
    holiday_dates = snapshot_holidays(snapshot)
    for cota in snapshot.get("passivo", {}).get("cotas", []) or []:
        if not cota.get("ehFunding"):
            continue
        if not cota.get("agendaPagamentos"):
            continue
        cota["previsaoPu"] = build_funding_forecast_rows(cota, date_key, holiday_dates)


def maturity_bucket(days):
    if days is None:
        return 99, "Sem vencimento"
    if days < 0:
        return 0, "Vencidos"
    if days <= 30:
        return 1, "0 a 30 dias"
    if days <= 60:
        return 2, "31 a 60 dias"
    if days <= 90:
        return 3, "61 a 90 dias"
    if days <= 180:
        return 4, "91 a 180 dias"
    if days <= 360:
        return 5, "181 a 360 dias"
    return 6, "Acima de 360 dias"


def build_upcoming_maturities(active_rows, date_key, denominator):
    base_date = parse_date_key(date_key)
    aging = {}
    maiores = []

    for row in active_rows:
        due_date = parse_date_key(row.get("dataVencimento"))
        days = (due_date - base_date).days if due_date and base_date else None
        order, label = maturity_bucket(days)
        current = aging.setdefault(label, {
            "label": label,
            "order": order,
            "quantidade": 0,
            "valorNominal": 0.0,
            "valorPresente": 0.0,
            "percentualCarteira": 0.0,
        })
        value = float(row.get("valorPresenteLiquido", row.get("valorPresenteDia", 0.0)) or 0.0)
        nominal = nominal_net_pdd(row)
        current["quantidade"] += 1
        current["valorNominal"] += nominal
        current["valorPresente"] += value

        if due_date and days is not None and 0 <= days <= 30:
            maiores.append({
                "cedente": row.get("cedente") or "Nao informado",
                "sacado": row.get("sacado") or "Nao informado",
                "devedor": row.get("devedor") or row.get("sacado") or "Nao informado",
                "dataVencimento": format_date_br(row.get("dataVencimento")),
                "dataVencimentoIso": row.get("dataVencimento") or "",
                "dias": days,
                "valorNominal": nominal,
                "valorPresente": value,
                "tipoTitulo": row.get("tipoTitulo") or "-",
            })

    aging_rows = []
    for row in aging.values():
        row["percentualCarteira"] = row["valorPresente"] / denominator if denominator else 0.0
        aging_rows.append(row)

    maiores = sorted(maiores, key=lambda row: row["valorPresente"], reverse=True)[:5]
    maiores = sorted(maiores, key=lambda row: (int(row.get("dias") or 0), -float(row.get("valorPresente") or 0)))
    for index, row in enumerate(maiores, start=1):
        row["posicao"] = index
        row["percentualCarteira"] = row["valorPresente"] / denominator if denominator else 0.0

    return {
        "aging": sorted(aging_rows, key=lambda row: row["order"]),
        "maiores": maiores,
    }


def tipo_ativo_ts_label(tipo_titulo):
    normalized = normalize_name(tipo_titulo)
    if any(token in normalized for token in ("duplicata", "duplicatas", "cprf", "cpr_f", "nf", "notafiscal")):
        return "Duplicatas e CPR-F", 1.0
    if any(token in normalized for token in ("ccb", "cdca", "nc", "notacomercial", "notascomerciais")):
        return "CCB, CDCA, Notas Comerciais", 0.30
    return "Outros Direitos Creditorios", 0.05


def build_tipo_ativo_ts(active_rows, patrimonio_liquido):
    grouped = {}
    for row in active_rows:
        label, limit = tipo_ativo_ts_label(row.get("tipoTitulo"))
        current = grouped.setdefault(
            label,
            {
                "label": label,
                "percentualPermitido": limit,
                "quantidade": 0,
                "valorNominal": 0.0,
                "valorPresente": 0.0,
                "percentualPl": 0.0,
                "status": "OK",
            },
        )
        current["quantidade"] += 1
        current["valorNominal"] += nominal_net_pdd(row)
        current["valorPresente"] += float(row.get("valorPresenteLiquido", row.get("valorPresenteDia", 0.0)) or 0.0)

    rows = []
    preferred_order = ["Duplicatas e CPR-F", "CCB, CDCA, Notas Comerciais", "Outros Direitos Creditorios"]
    for label in preferred_order:
        if label not in grouped:
            grouped[label] = {
                "label": label,
                "percentualPermitido": 1.0 if label == "Duplicatas e CPR-F" else (0.30 if label.startswith("CCB") else 0.05),
                "quantidade": 0,
                "valorNominal": 0.0,
                "valorPresente": 0.0,
                "percentualPl": 0.0,
                "status": "OK",
            }
        row = grouped[label]
        row["percentualPl"] = row["valorPresente"] / patrimonio_liquido if patrimonio_liquido else 0.0
        row["status"] = "OK" if row["percentualPl"] <= row["percentualPermitido"] else "Atencao"
        rows.append(row)
    return rows


def pdd_bucket_transition(base_date, due_date):
    if not base_date or not due_date:
        return None

    overdue_days = max((base_date - due_date).days, 0)
    if due_date >= base_date:
        change_date = due_date + timedelta(days=1)
        return "Em dia", "1 a 30 dias", change_date, overdue_days

    buckets = [
        (30, "1 a 30 dias", "31 a 60 dias"),
        (60, "31 a 60 dias", "61 a 90 dias"),
        (90, "61 a 90 dias", "91 a 120 dias"),
        (120, "91 a 120 dias", "121 a 150 dias"),
        (150, "121 a 150 dias", "151 a 180 dias"),
        (180, "151 a 180 dias", "Acima de 180 dias"),
    ]
    for limit, current_label, next_label in buckets:
        if overdue_days <= limit:
            change_date = due_date + timedelta(days=limit + 1)
            return current_label, next_label, change_date, overdue_days

    return "Acima de 180 dias", "-", None, overdue_days


def build_pdd_migration(active_rows, date_key, patrimonio_liquido, limit=20, window_days=7):
    base_date = parse_date_key(date_key)
    if not base_date:
        return []

    grouped = {}
    for row in active_rows:
        due_date = parse_date_key(row.get("dataVencimento"))
        transition = pdd_bucket_transition(base_date, due_date)
        if not transition:
            continue

        faixa_atual, proxima_faixa, change_date, overdue_days = transition
        if not change_date:
            continue

        days_to_change = (change_date - base_date).days
        if days_to_change < 0:
            continue
        if days_to_change > window_days:
            continue

        value = float(row.get("valorPresenteLiquido", row.get("valorPresenteDia", 0.0)) or 0.0)
        cedente = str(row.get("cedente") or "Nao informado").strip() or "Nao informado"
        key = normalize_name(cedente)
        current = grouped.setdefault(key, {
            "cedente": cedente,
            "sacado": row.get("sacado") or row.get("devedor") or "Nao informado",
            "devedor": row.get("devedor") or row.get("sacado") or "Nao informado",
            "dataVencimento": format_date_br(row.get("dataVencimento")),
            "dataVencimentoIso": row.get("dataVencimento") or "",
            "faixaAtual": faixa_atual,
            "proximaFaixa": proxima_faixa,
            "dataMudanca": format_date_br(change_date.isoformat()),
            "dataMudancaIso": change_date.isoformat(),
            "diasParaMudanca": days_to_change,
            "diasVencido": overdue_days,
            "valorPresente": 0.0,
            "percentualPl": 0.0,
            "farol": "Monitorar",
            "lastros": 0,
        })
        current["lastros"] += 1
        current["valorPresente"] += value
        current["diasVencido"] = max(int(current.get("diasVencido") or 0), overdue_days)
        if days_to_change < int(current.get("diasParaMudanca") or 99999):
            current["dataVencimento"] = format_date_br(row.get("dataVencimento"))
            current["dataVencimentoIso"] = row.get("dataVencimento") or ""
            current["faixaAtual"] = faixa_atual
            current["proximaFaixa"] = proxima_faixa
            current["dataMudanca"] = format_date_br(change_date.isoformat())
            current["dataMudancaIso"] = change_date.isoformat()
            current["diasParaMudanca"] = days_to_change

    selected = sorted(grouped.values(), key=lambda row: (row["diasParaMudanca"], -row["valorPresente"]))[:limit]
    for index, row in enumerate(selected, start=1):
        row["posicao"] = index
        row["percentualPl"] = row["valorPresente"] / patrimonio_liquido if patrimonio_liquido else 0.0
        if row["diasParaMudanca"] <= 3:
            row["farol"] = "Critico"
        elif row["diasParaMudanca"] <= 7:
            row["farol"] = "Atencao"
        else:
            row["farol"] = "Monitorar"
    return selected


def build_overdue_pmts(active_rows, date_key, patrimonio_liquido, limit=20):
    base_date = parse_date_key(date_key)
    if not base_date:
        return []

    rows = []
    for row in active_rows:
        data_pmt = parse_date_key(row.get("dataPmt"))
        valor_pmt = float(row.get("valorPmt", 0.0) or 0.0)
        if not data_pmt or valor_pmt <= 0 or data_pmt >= base_date:
            continue
        dias_vencido = (base_date - data_pmt).days
        rows.append({
            "lastro": row.get("numeroUnico") or row.get("numeroNota") or "",
            "cedente": row.get("cedente") or "Nao informado",
            "tipoTitulo": row.get("tipoTitulo") or "-",
            "dataPmt": format_date_br(data_pmt.isoformat()),
            "dataPmtIso": data_pmt.isoformat(),
            "valorPmt": valor_pmt,
            "diasVencido": dias_vencido,
            "statusPmt": row.get("statusPmt") or "",
            "percentualPl": valor_pmt / patrimonio_liquido if patrimonio_liquido else 0.0,
        })

    selected = sorted(rows, key=lambda row: (row["diasVencido"], row["valorPmt"]), reverse=True)[:limit]
    for index, row in enumerate(selected, start=1):
        row["posicao"] = index
    return selected


def build_rankings(active_rows, field, denominator, patrimonio_liquido, limit=20):
    ranking = aggregate_rows(active_rows, field, ["valorPresenteLiquido"])[:limit]
    for index, row in enumerate(ranking, start=1):
        value = float(row.get("valorPresenteLiquido") or 0.0)
        row["posicao"] = index
        row["valorPresenteDia"] = value
        row["pdd"] = 0.0
        row["participacao"] = value / denominator if denominator else 0.0
        row["participacaoPl"] = value / patrimonio_liquido if patrimonio_liquido else 0.0
    return ranking


def is_overdue_receivable(row, date_key):
    base_date = parse_date_key(date_key)
    due_date = parse_date_key(row.get("dataVencimento"))
    status = normalize_name(row.get("status"))
    if due_date and base_date and due_date < base_date:
        return True
    return bool(status and status not in {"emdia", "liquidado", "liquidada"})


def build_overdue_rankings(active_rows, date_key, denominator, patrimonio_liquido, limit=5):
    base_date = parse_date_key(date_key)
    grouped = {}
    for row in active_rows:
        key = str(row.get("cedente", "") or "Nao informado").strip() or "Nao informado"
        current = grouped.setdefault(key, {
            "name": key,
            "cedente": key,
            "quantidade": 0,
            "valorPresenteDia": 0.0,
            "pdd": 0.0,
            "valorPresenteLiquido": 0.0,
            "diasVencido": 0,
        })
        due_date = parse_date_key(row.get("dataVencimento"))
        dias_vencido = max((base_date - due_date).days, 0) if base_date and due_date else 0
        value = float(row.get("valorPresenteLiquido", row.get("valorPresenteDia", 0.0)) or 0.0)
        pdd = float(row.get("pdd", 0.0) or 0.0)
        current["quantidade"] += 1
        current["valorPresenteDia"] += value
        current["pdd"] += pdd
        current["valorPresenteLiquido"] += value
        current["diasVencido"] = max(current["diasVencido"], dias_vencido)

    ranking = sorted(grouped.values(), key=lambda row: row["valorPresenteLiquido"], reverse=True)[:limit]
    ranking = sorted(ranking, key=lambda row: row["diasVencido"], reverse=True)
    for index, row in enumerate(ranking, start=1):
        value = float(row.get("valorPresenteLiquido") or 0.0)
        row["posicao"] = index
        row["participacao"] = value / denominator if denominator else 0.0
        row["participacaoPl"] = value / patrimonio_liquido if patrimonio_liquido else 0.0
    return ranking


def build_concentration(active_rows, patrimonio_liquido):
    def rows_for(field, limits):
        ranking = aggregate_rows(active_rows, field, ["valorPresenteLiquido"])
        values = [item["valorPresenteLiquido"] for item in ranking]
        checks = [
            ("Concentração Máxima Individual", limits["individual"], values[0] if values else 0.0),
            ("Top 5", limits["top5"], sum(values[:5])),
            ("Top 10", limits["top10"], sum(values[:10])),
        ]
        return [
            {
                "label": label,
                "percentualPermitido": limit,
                "posicaoAtual": value / patrimonio_liquido if patrimonio_liquido else 0.0,
                "status": "OK" if (value / patrimonio_liquido if patrimonio_liquido else 0.0) <= limit else "Atenção",
            }
            for label, limit, value in checks
        ]

    return {
        "cedentes": rows_for("cedente", {"individual": 0.10, "top5": 0.40, "top10": 0.50}),
        "sacados": rows_for("sacado", {"individual": 0.05, "top5": 0.25, "top10": 0.40}),
    }


def update_metric(sections, metric_id, label, value, numeric_value, source, notes=""):
    for section in sections:
        for metric in section.get("metrics", []):
            if metric.get("id") == metric_id:
                metric["label"] = label
                metric["value"] = value
                metric["numericValue"] = numeric_value
                metric["source"] = {"name": source, "owner": "", "url": ""}
                metric["notes"] = notes
                return


def load_manifest(path):
    text = path.read_text(encoding="utf-8-sig")
    match = re.search(r"=\s*(\[.*\])\s*;?\s*$", text, re.S)
    if not match:
        return []
    return json.loads(match.group(1))


def write_js_snapshot(path, cra_id, date_key, snapshot):
    payload = json.dumps(snapshot, ensure_ascii=False, indent=2)
    text = (
        "window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};\n"
        f"window.LAMINA_CRA_DAILY[{json.dumps(cra_id)}] = window.LAMINA_CRA_DAILY[{json.dumps(cra_id)}] || {{}};\n"
        f"window.LAMINA_CRA_DAILY[{json.dumps(cra_id)}][{json.dumps(date_key)}] = {payload};\n"
    )
    path.write_text(text, encoding="utf-8")


def load_snapshot_for_date(project_root, cra_root, cra_id, date_key):
    js_path = project_root / "data" / "cras" / cra_id / f"{date_key}.js"
    if js_path.exists():
        return load_js_snapshot(js_path)

    canonical_path = cra_root / "archive" / "canonical" / f"{date_key}.json"
    if canonical_path.exists():
        return load_json(canonical_path)

    raise FileNotFoundError(f"Snapshot nao encontrado para {date_key}.")


def load_or_bootstrap_snapshot(project_root, cra_root, cra_id, date_key):
    canonical_path = cra_root / "archive" / "canonical" / f"{date_key}.json"
    if canonical_path.exists():
        return load_snapshot_for_date(project_root, cra_root, cra_id, date_key), canonical_path

    canonical_dir = cra_root / "archive" / "canonical"
    data_dir = project_root / "data" / "cras" / cra_id
    candidate_keys = {
        path.stem for path in canonical_dir.glob("*.json")
        if path.stem < date_key
    }
    candidate_keys.update(
        path.stem for path in data_dir.glob("*.js")
        if path.stem < date_key
    )
    if not candidate_keys:
        raise FileNotFoundError(f"Snapshot canonico nao encontrado para {date_key} e nao ha base anterior.")

    return load_snapshot_for_date(project_root, cra_root, cra_id, sorted(candidate_keys)[-1]), canonical_path


def apply_forecast_to_funding_cotas(cotas, date_key, holiday_dates=None):
    for cota in cotas:
        if not cota.get("ehFunding"):
            continue

        forecast_rows = list(cota.get("previsaoPu") or [])
        forecast = next((row for row in forecast_rows if str(row.get("dataIso") or "") == date_key), None)
        if not forecast:
            history = [
                row for row in (cota.get("historicoPu") or [])
                if str(row.get("dataIso") or row.get("data") or "")[:10] < date_key
            ]
            history = sorted(history, key=lambda row: str(row.get("dataIso") or row.get("data") or "")[:10])
            start_key = str(
                (history[-1].get("dataIso") if history else "")
                or cota.get("dataHistoricaIso")
                or cota.get("dataInicioIso")
                or ""
            )[:10]
            start_date = parse_date_key(start_key)
            target_date = parse_date_key(date_key)
            if start_date and target_date and start_key < date_key:
                days = max((target_date - start_date).days + 5, 10)
                generated_rows = build_funding_forecast_rows(cota, start_key, holiday_dates, days)
                merged_rows = {
                    str(row.get("dataIso") or ""): row
                    for row in forecast_rows
                    if str(row.get("dataIso") or "")
                }
                for row in generated_rows:
                    row_key = str(row.get("dataIso") or "")
                    if row_key:
                        merged_rows[row_key] = row
                forecast_rows = sorted(merged_rows.values(), key=lambda row: str(row.get("dataIso") or ""))
                forecast = next((row for row in forecast_rows if str(row.get("dataIso") or "") == date_key), None)
        if not forecast:
            continue

        pu = float(forecast.get("puAtualizado") or cota.get("pu") or 0.0)
        value = float(forecast.get("valorReais") or (pu * float(cota.get("quantidade") or 0.0)))
        cota["pu"] = pu
        cota["valor"] = value

        history = list(cota.get("historicoPu") or [])
        if not any(str(row.get("dataIso") or "") == date_key for row in history):
            history.append(forecast)
        cota["historicoPu"] = history
        cota["previsaoPu"] = [row for row in forecast_rows if str(row.get("dataIso") or "") > date_key]

        if isinstance(cota.get("acumulacaoFinal"), dict):
            cota["acumulacaoFinal"]["periodoFim"] = format_date_br(date_key)
            cota["acumulacaoFinal"]["puFinal"] = pu


def apply_static_cra_info(snapshot, cra_id):
    info = CRA_STATIC_INFO.get(cra_id)
    if not info:
        return

    cra = dict(snapshot.get("cra") or {})
    for key in ("dataVencimento", "dataVencimentoIso"):
        if info.get(key):
            cra[key] = info[key]
    snapshot["cra"] = cra

    series_maturities = info.get("vencimentosSeries") or {}
    agenda_by_class = info.get("agendaPagamentosByClasse") or {}
    for cota in snapshot.get("passivo", {}).get("cotas", []):
        classe = str(cota.get("classe") or "").upper()
        maturity_iso = series_maturities.get(classe) or info.get("dataVencimentoIso")
        if not maturity_iso:
            continue
        cota["dataVencimentoIso"] = maturity_iso
        cota["dataVencimento"] = format_date_br(maturity_iso)
        agenda = agenda_by_class.get(classe)
        if agenda:
            cota["agendaPagamentos"] = [dict(event) for event in agenda]


def enrich_current_performance(project_root, cra_root, cra_id, date_key, snapshot):
    try:
        from build_historical_light_snapshots import SUB_CASHFLOW_EVENT_DATES, enrich_cota_performance
    except Exception:
        return

    canonical_dir = cra_root / "archive" / "canonical"
    data_dir = project_root / "data" / "cras" / cra_id
    records = []
    record_keys = {
        path.stem for path in canonical_dir.glob("*.json")
        if path.stem < date_key
    }
    record_keys.update(
        path.stem for path in data_dir.glob("*.js")
        if path.stem < date_key
    )

    sorted_keys = sorted(record_keys)
    if sorted_keys:
        monthly_keys = {}
        for key in sorted_keys:
            monthly_keys[key[:7]] = key
        selected_keys = set(sorted_keys[-45:])
        selected_keys.update(monthly_keys.values())
        selected_keys.add(sorted_keys[0])
        for event_key in SUB_CASHFLOW_EVENT_DATES:
            if event_key in record_keys and event_key < date_key:
                selected_keys.add(event_key)
                previous_key = next((key for key in reversed(sorted_keys) if key < event_key), "")
                if previous_key:
                    selected_keys.add(previous_key)
        pu_cashflow_keys = set()
        for cota in snapshot.get("passivo", {}).get("cotas", []):
            for row in cota.get("historicoPu", []) or []:
                event_key = str(row.get("dataIso") or "")
                if not event_key or event_key >= date_key:
                    continue
                has_cashflow = (
                    bool(row.get("ehDataPagamentoTs"))
                    or parse_number(row.get("puEvento")) > 0
                    or parse_number(row.get("valorEventoReais")) > 0
                )
                if has_cashflow:
                    pu_cashflow_keys.add(event_key)
        for event_key in sorted(pu_cashflow_keys):
            if event_key in record_keys:
                selected_keys.add(event_key)
                previous_key = next((key for key in reversed(sorted_keys) if key < event_key), "")
                if previous_key:
                    selected_keys.add(previous_key)
    else:
        selected_keys = set()

    for record_key in sorted(selected_keys):
        if record_key > date_key:
            continue
        item = load_snapshot_for_date(project_root, cra_root, cra_id, record_key)
        key = str(item.get("metadata", {}).get("dateKey") or record_key)
        if key <= date_key:
            records.append({"dateKey": key, "snapshot": item})

    records.append({"dateKey": date_key, "snapshot": snapshot})
    enrich_cota_performance(records)


def cota_label(classe, cota):
    labels = {
        "SR1": "Senior 1a",
        "SR2": "Senior 2a",
        "SR3": "Senior 3a",
        "SUB": "Subordinada",
    }
    return cota.get("label") or labels.get(str(classe or "").upper(), classe or "-")


def cota_performance_type(cota):
    return "sr" if cota.get("ehFunding") else "sub"


def cota_tax_label(cota, fallback="-"):
    text = str(cota.get("taxaTexto") or cota.get("taxa") or "").strip()
    if text:
        return text
    indexador = str(cota.get("indexador") or "").strip()
    percentual = cota.get("percentualIndexador")
    if indexador and percentual:
        return f"{format_number_br(float(percentual) * 100, 2)}% {indexador}"
    taxa_aa = float(cota.get("taxaAa") or 0.0)
    if taxa_aa:
        return f"{format_percent_br(taxa_aa)} a.a."
    taxa_am = float(cota.get("taxaAm") or 0.0)
    if taxa_am:
        return f"{format_percent_br(taxa_am)} a.m."
    return fallback or "-"


def performance_rows_by_class(snapshot):
    return {
        str(row.get("classe") or "").upper(): row
        for row in snapshot.get("performanceCotas", []) or []
        if str(row.get("classe") or "").strip()
    }


def cotas_by_class(snapshot):
    return {
        str(row.get("classe") or "").upper(): row
        for row in snapshot.get("passivo", {}).get("cotas", []) or []
        if str(row.get("classe") or "").strip()
    }


def compound_return(values):
    factor = 1.0
    has_value = False
    for value in values:
        if value is None:
            continue
        try:
            number = float(value)
        except (TypeError, ValueError):
            continue
        factor *= 1.0 + number
        has_value = True
    return factor - 1.0 if has_value else None


def performance_needs_fallback(snapshot, date_key):
    history = snapshot.get("rendimento30Dias") or []
    if not history or str(history[0].get("dateKey") or "") != date_key:
        return True

    perf_by_class = performance_rows_by_class(snapshot)
    for classe, cota in cotas_by_class(snapshot).items():
        perf = perf_by_class.get(classe)
        if not perf:
            return True
        if abs(float(perf.get("pu") or 0.0) - float(cota.get("pu") or 0.0)) > 0.000001:
            return True
    return False


def build_performance_fallback(project_root, cra_root, cra_id, date_key, snapshot):
    sub_payment_event = SUB_PAYMENT_RESET_EVENTS.get(cra_id, {}).get(date_key)
    if not sub_payment_event and not performance_needs_fallback(snapshot, date_key):
        return

    canonical_dir = cra_root / "archive" / "canonical"
    data_dir = project_root / "data" / "cras" / cra_id
    record_keys = {
        path.stem for path in canonical_dir.glob("*.json")
        if path.stem < date_key
    }
    record_keys.update(
        path.stem for path in data_dir.glob("*.js")
        if path.stem < date_key
    )
    previous_key = max(record_keys) if record_keys else ""
    previous_snapshot = load_snapshot_for_date(project_root, cra_root, cra_id, previous_key) if previous_key else {}
    previous_perf = performance_rows_by_class(previous_snapshot)
    previous_cotas = cotas_by_class(previous_snapshot)

    current_perf = []
    current_history_cotas = {}
    for classe, cota in cotas_by_class(snapshot).items():
        base_perf = dict(performance_rows_by_class(snapshot).get(classe) or {})
        prev_cota = previous_cotas.get(classe) or {}
        prev_perf = previous_perf.get(classe) or {}
        pu = float(cota.get("pu") or 0.0)
        prev_pu = float(prev_cota.get("pu") or prev_perf.get("pu") or 0.0)
        resultado_dia = (pu / prev_pu - 1.0) if pu > 0 and prev_pu > 0 else None
        ajustes_fluxo_sub = []
        ajustes_fluxo_periodo = {}
        quantity_event = quantity_event_for_period(cra_id, classe, previous_key, date_key)
        if classe == "SUB" and quantity_event and previous_key and previous_key < date_key:
            previous_value = float(prev_cota.get("valor") or (prev_pu * float(prev_cota.get("quantidade") or 0.0)) or 0.0)
            current_value = float(cota.get("valor") or (pu * float(cota.get("quantidade") or 0.0)) or 0.0)
            contribution_value = float(quantity_event.get("valorIntegralizado") or 0.0)
            contribution_quantity = float(quantity_event.get("quantidadeEvento") or 0.0)
            if not contribution_value and contribution_quantity:
                contribution_value = contribution_quantity * float(quantity_event.get("puIntegralizacao") or cota.get("valorNominalInicial") or 1000.0)
            if previous_value > 0 and current_value >= contribution_value:
                resultado_dia = (current_value - contribution_value) / previous_value - 1.0
                quantity_adjustment = {
                    "dateKey": quantity_event.get("fromDate") or date_key,
                    "dataIso": quantity_event.get("fromDate") or date_key,
                    "data": format_date_br(quantity_event.get("fromDate") or date_key),
                    "tipoEvento": "integralizacao_subordinada",
                    "tipoNormalizado": "integralizacao subordinada",
                    "evento": quantity_event.get("descricao") or "Integralizacao da Subordinada",
                    "observacao": "Fluxo de integralizacao tratado fora da rentabilidade diaria.",
                    "quantidadeEvento": contribution_quantity,
                    "puIntegralizacao": float(quantity_event.get("puIntegralizacao") or 0.0),
                    "valorFluxoEstimado": contribution_value,
                    "ehDataPagamentoTs": False,
                }
                ajustes_fluxo_sub.append(quantity_adjustment)
                ajustes_fluxo_periodo.setdefault(date_key, []).append(quantity_adjustment)
        if classe == "SUB" and sub_payment_event and pu > 0 and prev_pu > 0:
            benchmark_pu = float(sub_payment_event.get("benchmarkPu") or 1000.0)
            paid_pu = max(0.0, prev_pu - benchmark_pu)
            quantidade = float(cota.get("quantidade") or 0.0)
            if paid_pu > 0:
                resultado_dia = (pu + paid_pu) / prev_pu - 1.0
                payment_adjustment = {
                    "dateKey": date_key,
                    "dataIso": date_key,
                    "data": format_date_br(date_key),
                    "tipoEvento": "pagamento_subordinada",
                    "tipoNormalizado": "pagamento premio subordinada",
                    "evento": sub_payment_event.get("descricao") or "Pagamento da Subordinada",
                    "observacao": "Fluxo tratado como pagamento para nao contaminar a rentabilidade diaria.",
                    "puEvento": paid_pu,
                    "puAntesEvento": prev_pu,
                    "puDepois": benchmark_pu,
                    "puAposEvento": benchmark_pu,
                    "principalAposEvento": benchmark_pu,
                    "valorFluxoEstimado": paid_pu * quantidade,
                    "ehDataPagamentoTs": True,
                }
                ajustes_fluxo_sub.append(payment_adjustment)
                ajustes_fluxo_periodo.setdefault(date_key, []).append(payment_adjustment)
        resultado_inicio = None
        if resultado_dia is not None and prev_perf.get("resultadoInicio") is not None:
            resultado_inicio = (1.0 + float(prev_perf.get("resultadoInicio") or 0.0)) * (1.0 + resultado_dia) - 1.0
        elif pu > 0:
            initial_pu = float(cota.get("valorNominalInicial") or 1000.0)
            resultado_inicio = pu / initial_pu - 1.0 if initial_pu else None

        row = {
            **base_perf,
            "classe": classe,
            "label": cota_label(classe, cota),
            "tipo": base_perf.get("tipo") or cota_performance_type(cota),
            "quantidade": float(cota.get("quantidade") or 0.0),
            "taxa": cota_tax_label(cota, base_perf.get("taxa") or "-"),
            "pu": pu,
            "valor": float(cota.get("valor") or 0.0),
            "resultadoDia": resultado_dia,
            "resultadoMes": None,
            "resultado30Dias": None,
            "resultadoInicio": resultado_inicio,
            "ajustesFluxoSub": ajustes_fluxo_sub,
            "ajustesFluxoPeriodo": ajustes_fluxo_periodo,
        }
        current_perf.append(row)
        current_history_cotas[classe] = {
            "pu": row["pu"],
            "valor": row["valor"],
            "resultadoDia": row["resultadoDia"],
            "resultadoMes": row["resultadoMes"],
            "ajustesFluxoSub": ajustes_fluxo_sub,
            "ajustesFluxoMes": [],
            "ajustesFluxoPeriodo": ajustes_fluxo_periodo,
        }

    previous_history = []
    if previous_snapshot:
        previous_history = [
            row for row in previous_snapshot.get("rendimento30Dias", []) or []
            if str(row.get("dateKey") or "") < date_key
        ]

    history = [
        {
            "dateKey": date_key,
            "reportDate": snapshot.get("metadata", {}).get("reportDate") or format_date_br(date_key),
            "cotas": current_history_cotas,
        }
    ]
    seen = {date_key}
    for row in previous_history:
        row_date = str(row.get("dateKey") or "")
        if not row_date or row_date in seen:
            continue
        seen.add(row_date)
        history.append(row)
        if len(history) >= 30:
            break

    for perf in current_perf:
        classe = str(perf.get("classe") or "").upper()
        monthly_values = [
            row.get("cotas", {}).get(classe, {}).get("resultadoDia")
            for row in history
            if str(row.get("dateKey") or "")[:7] == date_key[:7]
        ]
        thirty_day_values = [
            row.get("cotas", {}).get(classe, {}).get("resultadoDia")
            for row in history[:30]
        ]
        perf["resultadoMes"] = compound_return(monthly_values)
        perf["resultado30Dias"] = compound_return(thirty_day_values)
        history[0]["cotas"][classe]["resultadoMes"] = perf["resultadoMes"]

    snapshot["performanceCotas"] = sorted(current_perf, key=lambda row: {"SR1": 1, "SR2": 2, "SR3": 3, "SUB": 4}.get(str(row.get("classe") or "").upper(), 99))
    snapshot["rendimento30Dias"] = history[:30]


def parse_indexer_percent_from_tax(tax_text):
    text = str(tax_text or "").strip()
    if not text:
        return None
    normalized = normalize_name(text)
    if "di" not in normalized and "cdi" not in normalized:
        return None
    match = re.search(r"(\d+(?:[.,]\d+)?)\s*%", text)
    if not match:
        return None
    return parse_number(match.group(1)) / 100.0


def infer_month_cdi_period(snapshot, month_key, date_key):
    for row in snapshot.get("performanceCotas", []) or []:
        if str(row.get("classe") or "").upper() == "SUB":
            continue
        result = row.get("resultadoMes")
        indexer_percent = parse_indexer_percent_from_tax(row.get("taxa"))
        if result is None or not indexer_percent:
            continue
        return float(result) / indexer_percent

    for row in snapshot.get("precificacaoMensal", []) or []:
        row_date = str(row.get("dateKey") or "")
        if row_date[:7] == month_key and row.get("cdiPeriodo") is not None:
            return float(row.get("cdiPeriodo") or 0.0)

    return None


def rebuild_current_month_pricing(snapshot, date_key):
    monthly_rows = list(snapshot.get("precificacaoMensal") or [])
    performance_rows = list(snapshot.get("performanceCotas") or [])
    if not performance_rows:
        return

    month_key = date_key[:7]
    month_label = datetime.strptime(date_key, "%Y-%m-%d").strftime("%m/%y")
    cdi_period = infer_month_cdi_period(snapshot, month_key, date_key)
    order = {"SR1": 1, "SR2": 2, "SR3": 3, "SUB": 4}
    rebuilt = []

    for row in sorted(performance_rows, key=lambda item: order.get(str(item.get("classe") or "").upper(), 99)):
        result = row.get("resultadoMes")
        percent_cdi = None
        classe = str(row.get("classe") or "").upper()
        indexer_percent = parse_indexer_percent_from_tax(row.get("taxa"))
        if result is not None and cdi_period:
            percent_cdi = float(result) / cdi_period
        elif indexer_percent and result is not None:
            percent_cdi = indexer_percent

        rebuilt_row = {
            "mes": month_label,
            "dateKey": date_key,
            "reportDate": snapshot.get("metadata", {}).get("reportDate") or format_date_br(date_key),
            "classe": classe,
            "label": row.get("label") or cota_label(classe, {}),
            "resultadoMensal": result,
            "cdiPeriodo": cdi_period,
            "percentualCdi": percent_cdi,
            "puFechamento": row.get("pu"),
        }
        if row.get("resultadoInicio") is not None:
            rebuilt_row["resultadoInicio"] = row.get("resultadoInicio")
        if row.get("ajustesFluxoSub"):
            rebuilt_row["ajustesFluxoSub"] = row.get("ajustesFluxoSub")
        if row.get("ajustesFluxoPeriodo"):
            rebuilt_row["ajustesFluxoPeriodo"] = row.get("ajustesFluxoPeriodo")
        rebuilt.append(rebuilt_row)

    preserved = [
        row for row in monthly_rows
        if str(row.get("dateKey") or "")[:7] != month_key and str(row.get("mes") or "") != month_label
    ]
    snapshot["precificacaoMensal"] = rebuilt + preserved


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--project-root", required=True)
    parser.add_argument("--cra-id", required=True)
    parser.add_argument("--date-key", required=True)
    args = parser.parse_args()

    project_root = Path(args.project_root)
    cra_root = project_root / "cras" / args.cra_id
    date_key = args.date_key
    report_date = datetime.strptime(date_key, "%Y-%m-%d").strftime("%d/%m/%Y")
    revision_id = datetime.now().strftime("%Y%m%d-%H%M%S")

    snapshot, canonical_path = load_or_bootstrap_snapshot(project_root, cra_root, args.cra_id, date_key)

    carteira_path = cra_root / "imports" / "carteira" / "carteira.csv"
    caixa_path = cra_root / "imports" / "caixa" / "caixa.csv"
    despesas_path = cra_root / "imports" / "despesas" / "despesas.csv"
    cotas_path = cra_root / "imports" / "cotas" / "cotas.csv"

    carteira = []
    for row in read_csv(carteira_path):
        vp = parse_number(row.get("valor_presente_dia"))
        pdd = parse_number(row.get("pdd"))
        carteira.append(
            {
                "numeroUnico": str(row.get("numero_unico", "")).strip(),
                "cedente": str(row.get("cedente", "")).strip(),
                "sacado": str(row.get("sacado", "")).strip(),
                "numeroNota": str(row.get("numero_nota", "")).strip(),
                "dataAquisicao": str(row.get("data_aquisicao", "")).strip(),
                "dataVencimento": str(row.get("data_vencimento", "")).strip(),
                "dataLiquidacao": str(row.get("data_liquidacao", "")).strip(),
                "valorLiquidacao": parse_number(row.get("valor_liquidacao")),
                "taxa": parse_number(row.get("taxa")),
                "taxaTexto": str(row.get("taxa_texto") or row.get("taxa") or "").strip(),
                "valorPresenteDia": vp,
                "pdd": pdd,
                "valorPresenteLiquido": vp - pdd,
                "fonte": str(row.get("fonte", "")).strip(),
                "arquivoOrigem": str(row.get("arquivo_origem", "")).strip(),
                "observacao": str(row.get("observacao", "")).strip(),
                "sistemaOrigem": str(row.get("sistema_origem", "")).strip(),
                "status": str(row.get("status", "")).strip(),
                "tipoTitulo": str(row.get("tipo_titulo", "")).strip(),
                "tipoRemuneracao": str(row.get("tipo_remuneracao", "")).strip(),
                "valorAquisicao": parse_number(row.get("valor_aquisicao")),
                "valorFace": parse_number(row.get("valor_face")),
                "dataPmt": str(row.get("data_pmt", "")).strip(),
                "valorPmt": parse_number(row.get("valor_pmt")),
                "statusPmt": str(row.get("status_pmt", "")).strip(),
            }
        )
    apply_pdd_renegotiation_overrides(args.cra_id, date_key, carteira, snapshot)

    caixa_row = read_csv(caixa_path)[-1]
    accounts = {
        "cc": parse_number(caixa_row.get("cc")),
        "contaAplicacao": parse_number(caixa_row.get("conta_aplicacao")),
        "fundoZeragem": parse_number(caixa_row.get("fundo_zeragem")),
        "contaLiquidacao": parse_number(caixa_row.get("conta_liquidacao")),
        "fundoDespesas": parse_number(caixa_row.get("fundo_despesas")),
        "provisoes": parse_number(caixa_row.get("provisoes")),
    }
    caixa_total = sum(accounts.values())
    caixa = {
        "accounts": accounts,
        "total": caixa_total,
        "fonte": str(caixa_row.get("fonte", "")).strip(),
        "arquivoOrigem": str(caixa_row.get("arquivo_origem", "")).strip(),
        "observacao": str(caixa_row.get("observacao", "")).strip(),
    }

    despesas = []
    for row in read_csv(despesas_path):
        if not any(str(value or "").strip() for value in row.values()):
            continue
        despesas.append(
            {
                "tipo": str(row.get("tipo", "")).strip(),
                "descricao": str(row.get("descricao", "")).strip(),
                "valor": parse_number(row.get("valor")),
                "fonte": str(row.get("fonte", "")).strip(),
                "arquivoOrigem": str(row.get("arquivo_origem", "")).strip(),
                "observacao": str(row.get("observacao", "")).strip(),
            }
        )

    carteira_vp_bruto = sum(row["valorPresenteDia"] for row in carteira)
    pdd_total = sum(row["pdd"] for row in carteira)
    carteira_vp = carteira_vp_bruto - pdd_total
    ativo_total = carteira_vp + caixa_total
    despesas_importadas = sum(row["valor"] for row in despesas)
    provisoes_importadas = sum(
        row["valor"]
        for row in despesas
        if "provis" in normalize_name(row["tipo"]) or "provis" in normalize_name(row["descricao"])
    )
    despesas_operacionais = despesas_importadas - provisoes_importadas
    provisoes_caixa = accounts["provisoes"]
    provisoes_total = provisoes_caixa + provisoes_importadas
    deducoes_total = despesas_operacionais + provisoes_total
    caixa_liquido = caixa_total - deducoes_total
    patrimonio_liquido = carteira_vp + caixa_liquido

    active_carteira = [row for row in carteira if is_active_receivable(row)]
    direitos_creditorios_vn = sum(nominal_net_pdd(row) for row in active_carteira)
    direitos_creditorios_atraso = sum(
        nominal_net_pdd(row)
        for row in active_carteira
        if normalize_name(row.get("status")) not in {"", "emdia"}
    )
    liquidacoes_dia = sum(row["valorLiquidacao"] for row in carteira if row["dataLiquidacao"] == date_key)
    aquisicoes_dia = sum(row["valorAquisicao"] for row in carteira if row["dataAquisicao"] == date_key)
    top_cedentes = build_rankings(active_carteira, "cedente", carteira_vp, patrimonio_liquido, 20)
    top_sacados = build_rankings(active_carteira, "sacado", carteira_vp, patrimonio_liquido, 20)
    top_devedores_vencidos = build_overdue_rankings(
        [row for row in active_carteira if is_overdue_receivable(row, date_key)],
        date_key,
        carteira_vp,
        patrimonio_liquido,
        5,
    )
    proximos_vencimentos = build_upcoming_maturities(active_carteira, date_key, carteira_vp)
    tipo_ativo_ts = build_tipo_ativo_ts(active_carteira, patrimonio_liquido)
    pdd_migration = build_pdd_migration(active_carteira, date_key, patrimonio_liquido)
    pmts_vencidas = build_overdue_pmts(active_carteira, date_key, patrimonio_liquido)
    portfolio_composition = build_composicao_carteira(active_carteira)
    pre_row = next((row for row in portfolio_composition if normalize_name(row.get("label")) == "prefixado"), None) or {"valorNominal": 0.0, "valorPresente": 0.0}
    pos_row = next((row for row in portfolio_composition if normalize_name(row.get("label")) == "posfixado"), None) or {"valorNominal": 0.0, "valorPresente": 0.0}

    ensure_static_cotas(snapshot, args.cra_id, date_key)
    cotas = snapshot["passivo"]["cotas"]
    cota_quantities = {
        str(row.get("classe", "")).strip(): parse_number(row.get("quantidade"))
        for row in read_csv(cotas_path)
        if str(row.get("classe", "")).strip()
    }
    for cota in cotas:
        classe = str(cota.get("classe", "")).strip()
        if classe in cota_quantities:
            cota["quantidade"] = cota_quantities[classe]
            cota["valor"] = float(cota.get("pu") or 0.0) * float(cota.get("quantidade") or 0.0)
    apply_static_quantity_events(snapshot, args.cra_id, date_key)
    apply_forecast_to_funding_cotas(cotas, date_key, snapshot_holidays(snapshot))
    cotas.sort(key=lambda cota: (0 if cota.get("ehFunding") else 1, int(parse_number(cota.get("ordem"))) or {"SR1": 10, "SR2": 20, "SR3": 30, "SUB": 90}.get(str(cota.get("classe") or "").upper(), 99)))

    funding_total = sum(float(cota.get("valor", 0.0)) for cota in cotas if cota.get("ehFunding"))
    sub_quantity = sum(float(cota.get("quantidade", 0.0)) for cota in cotas if not cota.get("ehFunding"))
    subordinada_total = ativo_total - funding_total - deducoes_total
    sub_pu = subordinada_total / sub_quantity if sub_quantity else 0.0
    for cota in cotas:
        if not cota.get("ehFunding"):
            cota["pu"] = sub_pu
            cota["valor"] = subordinada_total

    apply_static_cra_info(snapshot, args.cra_id)
    rebuild_static_funding_forecasts(snapshot, args.cra_id, date_key)

    snapshot["metadata"]["reportDate"] = report_date
    snapshot["metadata"]["dateKey"] = date_key
    snapshot["metadata"]["importedAt"] = datetime.now().astimezone().isoformat()
    snapshot["metadata"]["revisionId"] = revision_id
    snapshot["ativo"] = {
        "carteiraVpBruto": carteira_vp_bruto,
        "pddTotal": pdd_total,
        "carteiraVp": carteira_vp,
        "carteiraVpLiquido": carteira_vp,
        "caixa": caixa_total,
        "total": ativo_total,
        "liquidacoesDia": liquidacoes_dia,
        "aquisicoesDia": aquisicoes_dia,
        "caixaLiquido": caixa_liquido,
        "patrimonioLiquido": patrimonio_liquido,
        "direitosCreditoriosVn": direitos_creditorios_vn,
        "direitosCreditoriosVp": carteira_vp,
        "direitosCreditoriosAtraso": direitos_creditorios_atraso,
        "percentualDireitosCreditoriosPatrimonio": carteira_vp / patrimonio_liquido if patrimonio_liquido else 0.0,
        "quantidadeLastros": len(carteira),
        "quantidadeLastrosAtivos": len(active_carteira),
        "cedentesUnicos": len({row["cedente"] for row in carteira if row["cedente"]}),
        "sacadosUnicos": len({row["sacado"] for row in carteira if row["sacado"]}),
        "maiorCedente": top_exposure(carteira, "cedente"),
        "maiorSacado": top_exposure(carteira, "sacado"),
    }
    snapshot["caixa"] = caixa
    snapshot["passivo"]["fundingTotal"] = funding_total
    snapshot["passivo"]["despesasTotal"] = deducoes_total
    snapshot["passivo"]["despesasOperacionaisTotal"] = despesas_operacionais
    snapshot["passivo"]["provisoesTotal"] = provisoes_total
    snapshot["passivo"]["provisoesCaixa"] = provisoes_caixa
    snapshot["passivo"]["provisoesImportadasTotal"] = provisoes_importadas
    snapshot["passivo"]["deducoesTotal"] = deducoes_total
    snapshot["passivo"]["subordinadaTotal"] = subordinada_total
    snapshot["passivo"]["subordinadaQuantidade"] = sub_quantity
    snapshot["passivo"]["subordinadaPuResidual"] = sub_pu
    snapshot["carteira"] = carteira
    snapshot["carteiraResumo"] = {
        "valorNominal": direitos_creditorios_vn,
        "valorPresente": carteira_vp_bruto,
        "valorPresenteLiquido": carteira_vp,
        "pddTotal": pdd_total,
        "montanteAtraso": direitos_creditorios_atraso,
        "cedentesUnicos": len({row["cedente"] for row in active_carteira if row["cedente"]}),
        "sacadosUnicos": len({row["sacado"] for row in active_carteira if row["sacado"]}),
        "prazoMedioDias": weighted_average(
            [
                {
                    **row,
                    "prazoDias": max((parse_date_key(row.get("dataVencimento")) - parse_date_key(date_key)).days, 0)
                    if parse_date_key(row.get("dataVencimento")) and parse_date_key(date_key) else 0,
                }
                for row in active_carteira
            ],
            "prazoDias",
            "valorPresenteLiquido",
        ),
        "taxaMediaPonderada": weighted_average(active_carteira, "taxa", "valorPresenteLiquido"),
        "preFixado": {
            "valorNominal": float(pre_row.get("valorNominal") or 0),
            "valorPresente": float(pre_row.get("valorPresente") or 0),
        },
        "posFixado": {
            "valorNominal": float(pos_row.get("valorNominal") or 0),
            "valorPresente": float(pos_row.get("valorPresente") or 0),
        },
    }
    snapshot["despesas"] = despesas
    snapshot["informacoesComplementares"] = {
        "saldoCaixa": caixa_liquido,
        "saldoRevolvencia": caixa_liquido,
        "patrimonioLiquido": patrimonio_liquido,
        "direitosCreditoriosVn": direitos_creditorios_vn,
        "direitosCreditoriosVp": carteira_vp,
        "direitosCreditoriosAtraso": direitos_creditorios_atraso,
        "percentualDireitosCreditoriosPatrimonio": carteira_vp / patrimonio_liquido if patrimonio_liquido else 0.0,
        "pdd": pdd_total,
    }
    snapshot["composicaoCarteira"] = portfolio_composition
    snapshot["agingList"] = build_aging(active_carteira, carteira_vp)
    snapshot["pddComposition"] = build_pdd_composition(active_carteira)
    snapshot["movimentacoesDia"] = build_day_movements(carteira, date_key, patrimonio_liquido)
    snapshot["proximosVencimentos"] = proximos_vencimentos
    snapshot["pddMigration"] = pdd_migration
    snapshot["pmtsVencidas"] = pmts_vencidas
    snapshot["concentracaoLimites"] = build_concentration(active_carteira, patrimonio_liquido)
    detail = dict(snapshot.get("concentracaoDetalhada", {}))
    detail["top10Cedentes"] = top_cedentes[:10]
    detail["top10Sacados"] = top_sacados[:10]
    detail["top5DevedoresVencidos"] = top_devedores_vencidos
    detail["proximosVencimentos"] = proximos_vencimentos
    detail["tipoAtivoTs"] = tipo_ativo_ts
    detail["pddMigration"] = pdd_migration
    detail["pmtsVencidas"] = pmts_vencidas
    snapshot["concentracaoDetalhada"] = detail

    sections = snapshot.get("sections", [])
    update_metric(sections, "ativo_total", "Ativo total", format_currency_br(ativo_total), ativo_total, "Carteira liquida + caixa")
    update_metric(sections, "carteira_vp", "Carteira VP liquida", format_currency_br(carteira_vp), carteira_vp, "Import carteira")
    update_metric(sections, "carteira_vp_bruto", "Carteira VP bruto", format_currency_br(carteira_vp_bruto), carteira_vp_bruto, "Import carteira")
    update_metric(sections, "pdd_total", "PDD", format_currency_br(pdd_total), pdd_total, "Import carteira")
    update_metric(sections, "caixa_total", "Caixa total", format_currency_br(caixa_total), caixa_total, "Import caixa")
    update_metric(sections, "patrimonio_liquido", "Patrimonio liquido", format_currency_br(patrimonio_liquido), patrimonio_liquido, "Carteira + caixa liquido")
    update_metric(sections, "lastros", "Quantidade de lastros", str(len(carteira)), len(carteira), "Import carteira")
    update_metric(sections, "cedentes_unicos", "Cedentes unicos", str(snapshot["ativo"]["cedentesUnicos"]), snapshot["ativo"]["cedentesUnicos"], "Import carteira")
    update_metric(sections, "sacados_unicos", "Sacados unicos", str(snapshot["ativo"]["sacadosUnicos"]), snapshot["ativo"]["sacadosUnicos"], "Import carteira")
    update_metric(sections, "maior_cedente", "Maior cedente", f'{snapshot["ativo"]["maiorCedente"]["name"]} - {format_currency_br(snapshot["ativo"]["maiorCedente"]["valorPresenteDia"])}', snapshot["ativo"]["maiorCedente"]["valorPresenteDia"], "Import carteira")
    update_metric(sections, "maior_sacado", "Maior sacado", f'{snapshot["ativo"]["maiorSacado"]["name"]} - {format_currency_br(snapshot["ativo"]["maiorSacado"]["valorPresenteDia"])}', snapshot["ativo"]["maiorSacado"]["valorPresenteDia"], "Import carteira")
    update_metric(sections, "liquidacoes_dia", "Liquidacoes do dia", format_currency_br(liquidacoes_dia), liquidacoes_dia, "Import carteira")
    update_metric(sections, "funding_total", "Funding SR/MEZ", format_currency_br(funding_total), funding_total, "Memoria PU")
    update_metric(sections, "despesas_total", "Despesas operacionais", format_currency_br(despesas_operacionais), despesas_operacionais, "Import despesas")
    update_metric(sections, "provisoes_total", "Provisoes", format_currency_br(provisoes_total), provisoes_total, "Caixa + import despesas")
    update_metric(sections, "deducoes_passivo", "Despesas e provisoes", format_currency_br(deducoes_total), deducoes_total, "Despesas + provisoes")
    update_metric(sections, "subordinada_total", "Subordinada residual", format_currency_br(subordinada_total), subordinada_total, "Ativo - funding - despesas/provisoes")
    update_metric(sections, "subordinada_pu", "PU SUB residual", "R$ " + format_number_br(sub_pu, 6), sub_pu, "Subordinada residual / quantidade")

    raw_imports = dict(snapshot.get("rawImports", {}))
    raw_imports["carteira"] = copy_raw(project_root, cra_root, carteira_path, "carteira", date_key, revision_id)
    raw_imports["carteiraFonteExcel"] = copy_raw(project_root, cra_root, cra_root / "imports" / "carteira" / "fonte-excel.xlsx", "carteira-fonte-excel", date_key, revision_id)
    raw_imports["carteiraValidacao"] = copy_raw(project_root, cra_root, cra_root / "imports" / "carteira" / "validacao-carteira.json", "carteira-validacao", date_key, revision_id)
    raw_imports["caixa"] = copy_raw(project_root, cra_root, caixa_path, "caixa", date_key, revision_id)
    raw_imports["caixaFonteExcel"] = copy_raw(project_root, cra_root, cra_root / "imports" / "caixa" / "fonte-caixa.xlsx", "caixa-fonte-excel", date_key, revision_id)
    raw_imports["cotas"] = copy_raw(project_root, cra_root, cotas_path, "cotas", date_key, revision_id)
    raw_imports["despesas"] = copy_raw(project_root, cra_root, despesas_path, "despesas", date_key, revision_id)
    snapshot["rawImports"] = raw_imports

    snapshot["sources"] = [
        {"name": "Carteira em VP", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("carteira", "")},
        {"name": "Carteira fonte Excel", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("carteiraFonteExcel", "")},
        {"name": "Validacao carteira", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("carteiraValidacao", "")},
        {"name": "Caixa", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("caixa", "")},
        {"name": "Caixa fonte Excel", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("caixaFonteExcel", "")},
        {"name": "Cotas e memoria de PU", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("cotas", "")},
        {"name": "Eventos de PU", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("eventosPu", "")},
        {"name": "Indices de remuneracao", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("indices", "")},
        {"name": "Despesas e provisoes", "owner": "", "url": "", "date": report_date, "file": raw_imports.get("despesas", "")},
        {"name": "Calendario ANBIMA", "owner": "ANBIMA", "url": "https://www.anbima.com.br/feriados/arqs/feriados_nacionais.xls", "date": report_date, "file": raw_imports.get("calendario", "")},
    ]

    enrich_current_performance(project_root, cra_root, args.cra_id, date_key, snapshot)
    build_performance_fallback(project_root, cra_root, args.cra_id, date_key, snapshot)
    rebuild_current_month_pricing(snapshot, date_key)

    revision_path = cra_root / "archive" / "revisions" / date_key / f"{revision_id}.json"
    revision_path.parent.mkdir(parents=True, exist_ok=True)
    canonical_path.parent.mkdir(parents=True, exist_ok=True)
    snapshot["metadata"]["canonicalPath"] = web_path(project_root, canonical_path)
    snapshot["metadata"]["revisionPath"] = web_path(project_root, revision_path)
    snapshot["metadata"]["dataScript"] = f"data/cras/{args.cra_id}/{date_key}.js"
    text = json.dumps(snapshot, ensure_ascii=False, indent=2)
    canonical_path.write_text(text, encoding="utf-8")
    revision_path.write_text(text, encoding="utf-8")

    cra_daily = cra_root / "data" / "daily" / f"{date_key}.js"
    root_daily = project_root / "data" / "cras" / args.cra_id / f"{date_key}.js"
    cra_daily.parent.mkdir(parents=True, exist_ok=True)
    root_daily.parent.mkdir(parents=True, exist_ok=True)
    write_js_snapshot(cra_daily, args.cra_id, date_key, snapshot)
    write_js_snapshot(root_daily, args.cra_id, date_key, snapshot)

    manifest_path = project_root / "data" / "cra-manifest.js"
    manifest = load_manifest(manifest_path)
    for cra in manifest:
        if cra.get("craId") != args.cra_id:
            continue
        static_info = CRA_STATIC_INFO.get(args.cra_id, {})
        if static_info.get("dataVencimentoIso"):
            cra["dataVencimentoIso"] = static_info["dataVencimentoIso"]
            cra["dataVencimento"] = static_info.get("dataVencimento") or format_date_br(static_info["dataVencimentoIso"])
            cra["vencimentosSeries"] = static_info.get("vencimentosSeries", {})
        cra["currentDate"] = date_key
        dates = [item for item in cra.get("dates", []) if item.get("dateKey") != date_key]
        dates.insert(
            0,
            {
                "dateKey": date_key,
                "reportDate": report_date,
                "importedAt": snapshot["metadata"]["importedAt"],
                "revisionId": revision_id,
                "totalAtivo": ativo_total,
                "funding": funding_total,
                "subordinada": subordinada_total,
                "dataScript": f"data/cras/{args.cra_id}/{date_key}.js",
            },
        )
        cra["dates"] = dates
    manifest_path.write_text("window.LAMINA_CRA_MANIFEST = " + json.dumps(manifest, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")

    print(json.dumps({
        "dateKey": date_key,
        "revisionId": revision_id,
        "linhasCarteira": len(carteira),
        "vpBruto": carteira_vp_bruto,
        "pdd": pdd_total,
        "caixa": caixa_total,
        "provisoes": provisoes_total,
        "ativo": ativo_total,
        "funding": funding_total,
        "subordinada": subordinada_total,
        "canonicalPath": str(canonical_path),
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
