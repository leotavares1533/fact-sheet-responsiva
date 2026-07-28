import argparse
import csv
import io
import json
import math
import re
import shutil
import sys
import unicodedata
from collections import defaultdict
from datetime import date, datetime, timedelta
from pathlib import Path

import pandas as pd


CANONICAL_COLUMNS = [
    "data_base",
    "numero_unico",
    "cedente",
    "sacado",
    "numero_nota",
    "data_aquisicao",
    "data_vencimento",
    "data_liquidacao",
    "valor_liquidacao",
    "taxa",
    "valor_presente_dia",
    "pdd",
    "fonte",
    "arquivo_origem",
    "observacao",
    "taxa_texto",
    "sistema_origem",
    "status",
    "tipo_titulo",
    "tipo_remuneracao",
    "valor_aquisicao",
    "valor_face",
    "data_pmt",
    "valor_pmt",
    "status_pmt",
]


def normalize_name(value) -> str:
    text = "" if value is None else str(value)
    text = unicodedata.normalize("NFKD", text)
    text = "".join(char for char in text if not unicodedata.combining(char))
    return re.sub(r"[^a-z0-9]+", "", text.lower())


def clean_text(value) -> str:
    if value is None or (isinstance(value, float) and math.isnan(value)) or pd.isna(value):
        return ""
    if isinstance(value, float) and value.is_integer():
        return str(int(value))
    return str(value).strip()


def parse_date(value, fallback: str = "") -> str:
    if value is None or (isinstance(value, float) and math.isnan(value)) or pd.isna(value):
        return fallback
    if isinstance(value, (datetime, date, pd.Timestamp)):
        return pd.Timestamp(value).strftime("%Y-%m-%d")
    if isinstance(value, (int, float)) and value > 20000:
        return (datetime(1899, 12, 30) + timedelta(days=int(value))).strftime("%Y-%m-%d")
    text = clean_text(value)
    if not text:
        return fallback
    parsed = pd.to_datetime(text, dayfirst=True, errors="coerce")
    if pd.isna(parsed):
        return fallback
    return parsed.strftime("%Y-%m-%d")


def parse_number(value) -> float:
    if value is None or (isinstance(value, float) and math.isnan(value)) or pd.isna(value):
        return 0.0
    if isinstance(value, (int, float)):
        return float(value)
    text = clean_text(value)
    if not text:
        return 0.0
    text = text.replace("R$", "").replace("%", "").replace(" ", "")
    text = re.sub(r"[^0-9,.\-]", "", text)
    if not text or text in ("-", ".", ","):
        return 0.0
    if "," in text:
        text = text.replace(".", "").replace(",", ".")
    try:
        return float(text)
    except ValueError:
        return 0.0


def format_decimal(value) -> str:
    number = parse_number(value)
    return f"{number:.10f}".rstrip("0").rstrip(".")


def parse_tax(value, source: str) -> float:
    if value is None or (isinstance(value, float) and math.isnan(value)) or pd.isna(value):
        return 0.0
    if isinstance(value, (int, float)):
        return float(value)

    text = clean_text(value)
    if not text:
        return 0.0

    number = parse_number(text)
    normalized_source = normalize_name(source)
    has_percent_sign = "%" in text
    has_indexer = any(marker in normalize_name(text) for marker in ("cdi", "di", "ipca"))

    if has_percent_sign or normalized_source == "minerva" or has_indexer:
        return number / 100.0
    if abs(number) > 1:
        return number / 100.0
    return number


def format_rate(value, source: str) -> str:
    return f"{parse_tax(value, source):.12f}".rstrip("0").rstrip(".")


def detect_encoding(path: Path) -> str:
    raw = path.read_bytes()
    for encoding in ("utf-8-sig", "utf-8", "cp1252", "latin1"):
        try:
            raw.decode(encoding)
            return encoding
        except UnicodeDecodeError:
            continue
    return "latin1"


def detect_delimiter(path: Path, encoding: str) -> str:
    text = path.read_text(encoding=encoding, errors="replace")[:20000]
    try:
        return csv.Sniffer().sniff(text, delimiters=";,|\t").delimiter
    except csv.Error:
        first_line = text.splitlines()[0] if text.splitlines() else ""
        return ";" if first_line.count(";") >= first_line.count(",") else ","


def make_record(**values) -> dict:
    return {column: clean_text(values.get(column, "")) for column in CANONICAL_COLUMNS}


def find_excel_header(df: pd.DataFrame) -> int:
    for index, row in df.iterrows():
        normalized = {normalize_name(value) for value in row.tolist()}
        if {"lastro", "cedente", "sacado"}.issubset(normalized):
            return int(index)
    raise ValueError("Nao encontrei cabecalho de carteira no Excel: esperado Lastro/Cedente/Sacado.")


def get_by_header(row, headers: list, names: list):
    wanted = {normalize_name(name) for name in names}
    for idx, header in enumerate(headers):
        if normalize_name(header) in wanted:
            return row.iloc[idx]
    return ""


def first_by_header(row, headers: list, names: list):
    for name in names:
        value = get_by_header(row, headers, [name])
        if clean_text(value):
            return value
    return ""


def get_by_names(row, names: list):
    wanted = {normalize_name(name) for name in names}
    for key, value in row.items():
        if normalize_name(key) in wanted:
            return value
    return ""


def find_report_date_column(headers: list, explicit_report_date: str):
    candidates = []
    for idx, header in enumerate(headers):
        parsed = parse_date(header)
        if parsed:
            candidates.append((idx, parsed))
    if explicit_report_date and candidates:
        for idx, parsed in candidates:
            if parsed == explicit_report_date:
                return idx, explicit_report_date
        available = ", ".join(date_value for _, date_value in candidates[:5])
        raise ValueError(
            f"Nao encontrei coluna de VP para a data {explicit_report_date}. "
            f"Primeiras datas disponiveis: {available}"
        )
    if explicit_report_date:
        return None, explicit_report_date
    if not candidates:
        raise ValueError("Nao encontrei coluna de VP com data no Excel. Informe --report-date.")
    return candidates[-1]


def normalize_excel(path: Path, report_date: str) -> list:
    df = pd.read_excel(path, sheet_name=0, header=None, dtype=object)
    header_index = find_excel_header(df)
    headers = df.iloc[header_index].tolist()
    vp_col_idx, derived_date = find_report_date_column(headers, report_date)
    rows = df.iloc[header_index + 1 :].dropna(how="all")
    records = []

    for _, row in rows.iterrows():
        lastro = clean_text(get_by_header(row, headers, ["Lastro"]))
        if not lastro:
            continue
        vp_value = row.iloc[vp_col_idx] if vp_col_idx is not None else get_by_header(row, headers, ["valor_presente_dia"])
        taxa_raw = first_by_header(row, headers, ["Tx Cessao Mes", "Tx Cessão Mês", "Tx Op", "Taxa"])
        records.append(
            make_record(
                data_base=derived_date,
                numero_unico=lastro,
                cedente=get_by_header(row, headers, ["Cedente"]),
                sacado=get_by_header(row, headers, ["Sacado"]),
                numero_nota=lastro,
                data_aquisicao=parse_date(get_by_header(row, headers, ["Data de aquisicao", "Data de aquisição", "DT Aquisicao", "DT Aquisição"])),
                data_vencimento=parse_date(get_by_header(row, headers, ["Data de Vencimento", "DT Vencimento"])),
                data_liquidacao=parse_date(get_by_header(row, headers, ["Data de liquidacao", "Data de liquidação", "Dt Liquidacao", "Dt Liquidação"])),
                valor_liquidacao=format_decimal(get_by_header(row, headers, ["Vlr Liquidacao", "Vlr Liquidação"])),
                taxa=format_rate(taxa_raw, "excel"),
                valor_presente_dia=format_decimal(vp_value),
                pdd=format_decimal(get_by_header(row, headers, ["PDD", "Valor PDD", "Provisao PDD", "Provisão PDD"])),
                fonte="Sistema Excel",
                arquivo_origem=path.name,
                observacao="Normalizado do layout sistema excel",
                taxa_texto=clean_text(taxa_raw),
                sistema_origem="excel",
                status=first_by_header(row, headers, ["faixa atraso", "Faixa Venc", "Status de Pagamento", "Status"]),
                tipo_titulo=get_by_header(row, headers, ["Tipo titulo", "Tipo título"]),
                tipo_remuneracao=get_by_header(row, headers, ["Tipo"]),
                valor_aquisicao=format_decimal(get_by_header(row, headers, ["Valor de aquisicao", "Valor de aquisição", "Vlr Aquisicao", "Vlr Aquisição"])),
                valor_face=format_decimal(get_by_header(row, headers, ["Valor Face", "Vlr Face"])),
                data_pmt=parse_date(get_by_header(row, headers, ["Data PMT", "Dt PMT", "Data da PMT"])),
                valor_pmt=format_decimal(get_by_header(row, headers, ["Valor PMT", "Vlr PMT", "Valor da PMT"])),
                status_pmt=get_by_header(row, headers, ["Status PMT", "Status da PMT"]),
            )
        )
    return records


def normalize_minerva(path: Path, report_date: str) -> list:
    encoding = detect_encoding(path)
    delimiter = detect_delimiter(path, encoding)
    df = pd.read_csv(path, sep=delimiter, encoding=encoding, dtype=object)
    records = []
    for _, row in df.dropna(how="all").iterrows():
        lastro = clean_text(row.get("lastro"))
        if not lastro:
            continue
        taxa_raw = row.get("taxa_cessao")
        records.append(
            make_record(
                data_base=report_date,
                numero_unico=lastro,
                cedente=row.get("nome_cedente"),
                sacado=row.get("nome_sacado"),
                numero_nota=row.get("numero_titulo") or lastro,
                data_aquisicao=parse_date(row.get("dt_aquisicao")),
                data_vencimento=parse_date(row.get("dt_vencimento")),
                data_liquidacao=parse_date(row.get("dt_liquidacao")),
                valor_liquidacao=format_decimal(row.get("vlr_liquidacao")),
                taxa=format_rate(taxa_raw, "minerva"),
                valor_presente_dia=format_decimal(row.get("vlr_presente")),
                pdd=format_decimal(get_by_names(row, ["pdd", "valor_pdd", "vlr_pdd", "provisao_pdd", "provisao", "vlr_provisao"])),
                fonte="Sistema Minerva",
                arquivo_origem=path.name,
                observacao="Normalizado do layout sistema minerva",
                taxa_texto=clean_text(taxa_raw),
                sistema_origem="minerva",
                status=row.get("status"),
                tipo_titulo=row.get("tipo_titulo"),
                tipo_remuneracao=get_by_names(row, ["tipo_remuneracao", "tipo_rentabilidade", "tipo_taxa", "tipo"]),
                valor_aquisicao=format_decimal(row.get("vlr_aquisicao")),
                valor_face=format_decimal(row.get("vlr_face")),
                data_pmt=parse_date(get_by_names(row, ["data_pmt", "dt_pmt", "data_parcela", "dt_parcela"])),
                valor_pmt=format_decimal(get_by_names(row, ["valor_pmt", "vlr_pmt", "valor_parcela", "vlr_parcela"])),
                status_pmt=get_by_names(row, ["status_pmt", "status_parcela", "situacao_pmt"]),
            )
        )
    return records


def summarize(records: list) -> dict:
    return {
        "linhas": len(records),
        "vp_total": sum(parse_number(row["valor_presente_dia"]) for row in records),
        "pdd_total": sum(parse_number(row["pdd"]) for row in records),
        "liquidacao_total": sum(parse_number(row["valor_liquidacao"]) for row in records),
        "cedentes": len({row["cedente"] for row in records if row["cedente"]}),
        "sacados": len({row["sacado"] for row in records if row["sacado"]}),
        "lastros": len({row["numero_unico"] for row in records if row["numero_unico"]}),
        "data_base": sorted({row["data_base"] for row in records if row["data_base"]}),
    }


def index_records(records: list) -> dict:
    indexed = defaultdict(list)
    for row in records:
        indexed[row["numero_unico"]].append(row)
    return indexed


def close_enough(a, b, tolerance=0.01) -> bool:
    return abs(parse_number(a) - parse_number(b)) <= tolerance


def validate_sources(excel_records: list, minerva_records: list) -> dict:
    excel_index = index_records(excel_records)
    minerva_index = index_records(minerva_records)
    excel_keys = set(excel_index)
    minerva_keys = set(minerva_index)
    common = sorted(excel_keys & minerva_keys)
    differences = []

    for key in common[:200000]:
        excel_row = excel_index[key][0]
        minerva_row = minerva_index[key][0]
        field_diffs = []
        for field in ("cedente", "sacado", "data_aquisicao", "data_vencimento", "data_liquidacao", "status", "tipo_titulo", "tipo_remuneracao", "data_pmt", "status_pmt"):
            if clean_text(excel_row[field]).upper() != clean_text(minerva_row[field]).upper():
                field_diffs.append({"campo": field, "excel": excel_row[field], "minerva": minerva_row[field]})
        for field in ("valor_liquidacao", "valor_presente_dia", "pdd", "valor_aquisicao", "valor_face", "valor_pmt"):
            if not close_enough(excel_row[field], minerva_row[field]):
                field_diffs.append({"campo": field, "excel": excel_row[field], "minerva": minerva_row[field]})
        if field_diffs:
            differences.append({"numero_unico": key, "diferencas": field_diffs})
            if len(differences) >= 100:
                break

    return {
        "comparacao_disponivel": bool(excel_records and minerva_records),
        "lastros_em_ambos": len(common),
        "somente_excel": {
            "quantidade": len(excel_keys - minerva_keys),
            "amostra": sorted(excel_keys - minerva_keys)[:20],
        },
        "somente_minerva": {
            "quantidade": len(minerva_keys - excel_keys),
            "amostra": sorted(minerva_keys - excel_keys)[:20],
        },
        "diferencas_amostra": differences,
    }


def choose_primary(args, sources: dict) -> str:
    if args.primary != "auto":
        if not sources.get(args.primary):
            raise ValueError(f"Fonte principal '{args.primary}' nao foi informada.")
        return args.primary
    if sources.get("excel"):
        return "excel"
    if sources.get("minerva"):
        return "minerva"
    raise ValueError("Informe ao menos uma fonte: --excel ou --minerva.")


def write_csv(path: Path, records: list):
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8-sig", newline="") as handle:
        writer = csv.DictWriter(handle, fieldnames=CANONICAL_COLUMNS, delimiter=";")
        writer.writeheader()
        writer.writerows(records)


def write_json(path: Path, payload: dict):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")


def copy_source_files(args, output_path: Path) -> dict:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    copied = {}
    if args.excel:
        source = Path(args.excel)
        destination = output_path.parent / f"fonte-excel{source.suffix.lower()}"
        if source.resolve() != destination.resolve():
            shutil.copy2(source, destination)
        copied["excel"] = str(destination)
    if args.minerva:
        source = Path(args.minerva)
        destination = output_path.parent / f"fonte-minerva{source.suffix.lower()}"
        if source.resolve() != destination.resolve():
            shutil.copy2(source, destination)
        copied["minerva"] = str(destination)
    return copied


def parse_args():
    parser = argparse.ArgumentParser(description="Normaliza carteira Excel/Minerva para o CSV canonico da lamina.")
    parser.add_argument("--excel", default="", help="Arquivo .xlsx do sistema Excel.")
    parser.add_argument("--minerva", default="", help="Arquivo .csv do sistema Minerva.")
    parser.add_argument("--output", required=True, help="CSV canonico de saida.")
    parser.add_argument("--validation", required=True, help="JSON de validacao/comparacao.")
    parser.add_argument("--report-date", default="", help="Data-base yyyy-mm-dd. Obrigatoria para Minerva.")
    parser.add_argument("--primary", choices=("auto", "excel", "minerva"), default="auto", help="Fonte usada no CSV final.")
    return parser.parse_args()


def main():
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding="utf-8", errors="replace")
    args = parse_args()
    sources = {"excel": [], "minerva": []}

    if args.excel:
        sources["excel"] = normalize_excel(Path(args.excel), args.report_date)
    if args.minerva:
        if not args.report_date:
            raise ValueError("Informe --report-date para arquivo Minerva, pois o CSV nao traz data-base da posicao.")
        sources["minerva"] = normalize_minerva(Path(args.minerva), args.report_date)

    primary = choose_primary(args, sources)
    selected = sources[primary]
    output_path = Path(args.output)
    write_csv(output_path, selected)
    copied_sources = copy_source_files(args, output_path)

    validation = {
        "fonte_principal": primary,
        "arquivo_saida": str(output_path),
        "fontes_copiadas": copied_sources,
        "excel": summarize(sources["excel"]) if sources["excel"] else None,
        "minerva": summarize(sources["minerva"]) if sources["minerva"] else None,
        "comparacao": validate_sources(sources["excel"], sources["minerva"]),
    }
    write_json(Path(args.validation), validation)

    print(json.dumps(validation, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
