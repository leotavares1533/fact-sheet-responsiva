import argparse
import csv
import json
import re
import shutil
import unicodedata
from datetime import datetime, timedelta
from pathlib import Path


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


def apply_forecast_to_funding_cotas(cotas, date_key):
    for cota in cotas:
        if not cota.get("ehFunding"):
            continue

        forecast_rows = list(cota.get("previsaoPu") or [])
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
    for cota in snapshot.get("passivo", {}).get("cotas", []):
        classe = str(cota.get("classe") or "").upper()
        maturity_iso = series_maturities.get(classe) or info.get("dataVencimentoIso")
        if not maturity_iso:
            continue
        cota["dataVencimentoIso"] = maturity_iso
        cota["dataVencimento"] = format_date_br(maturity_iso)


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
    apply_forecast_to_funding_cotas(cotas, date_key)

    funding_total = sum(float(cota.get("valor", 0.0)) for cota in cotas if cota.get("ehFunding"))
    sub_quantity = sum(float(cota.get("quantidade", 0.0)) for cota in cotas if not cota.get("ehFunding"))
    subordinada_total = ativo_total - funding_total - deducoes_total
    sub_pu = subordinada_total / sub_quantity if sub_quantity else 0.0
    for cota in cotas:
        if not cota.get("ehFunding"):
            cota["pu"] = sub_pu
            cota["valor"] = subordinada_total

    apply_static_cra_info(snapshot, args.cra_id)

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
