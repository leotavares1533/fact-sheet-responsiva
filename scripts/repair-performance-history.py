from __future__ import annotations

import argparse
import json
import re
from datetime import datetime
from pathlib import Path
from typing import Any


CLASS_ORDER = {
    "SR1": 1,
    "SENIOR": 1,
    "SR2": 2,
    "MEZA": 2,
    "MEZ A": 2,
    "SR3": 3,
    "MEZB": 3,
    "MEZ B": 3,
    "SUB": 9,
}


CLASS_LABELS = {
    "SR1": "Senior 1a",
    "SR2": "Senior 2a",
    "SR3": "Senior 3a",
    "MEZA": "Mezanino A",
    "MEZB": "Mezanino B",
    "SUB": "Subordinada",
}


def load_manifest(path: Path) -> list[dict[str, Any]]:
    text = path.read_text(encoding="utf-8-sig")
    match = re.search(r"=\s*(\[[\s\S]*\])\s*;?\s*$", text)
    if not match:
        raise ValueError(f"Manifesto invalido: {path}")
    return json.loads(match.group(1))


def write_manifest(path: Path, manifest: list[dict[str, Any]]) -> None:
    path.write_text("window.LAMINA_CRA_MANIFEST = " + json.dumps(manifest, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")


def load_js_snapshot(path: Path) -> dict[str, Any]:
    text = path.read_text(encoding="utf-8-sig")
    match = re.search(r"=\s*(\{[\s\S]*\});?\s*$", text)
    if not match:
        raise ValueError(f"Snapshot invalido: {path}")
    return json.loads(match.group(1))


def write_js_snapshot(path: Path, cra_id: str, date_key: str, snapshot: dict[str, Any]) -> None:
    payload = json.dumps(snapshot, ensure_ascii=False, indent=2)
    path.write_text(
        "window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};\n"
        f"window.LAMINA_CRA_DAILY[{json.dumps(cra_id)}] = window.LAMINA_CRA_DAILY[{json.dumps(cra_id)}] || {{}};\n"
        f"window.LAMINA_CRA_DAILY[{json.dumps(cra_id)}][{json.dumps(date_key)}] = {payload};\n",
        encoding="utf-8",
    )


def to_number(value: Any) -> float:
    if value is None:
        return 0.0
    if isinstance(value, (int, float)):
        return float(value)
    text = str(value).replace("R$", "").replace("%", "").strip()
    text = re.sub(r"[^0-9,.\-]", "", text)
    if not text or text in {"-", ".", ","}:
        return 0.0
    if "," in text:
        text = text.replace(".", "").replace(",", ".")
    try:
        return float(text)
    except ValueError:
        return 0.0


def format_number_br(value: float, decimals: int = 2) -> str:
    return f"{float(value):,.{decimals}f}".replace(",", "X").replace(".", ",").replace("X", ".")


def format_percent_br(value: float) -> str:
    return format_number_br(value * 100, 2) + "%"


def normalize_class(value: Any) -> str:
    return str(value or "").strip().upper().replace(" ", "")


def cota_key(row: dict[str, Any]) -> str:
    return str(row.get("ifCodigo") or "").strip() or normalize_class(row.get("classe"))


def class_key(row: dict[str, Any]) -> str:
    return normalize_class(row.get("classe"))


def is_subordinate(row: dict[str, Any]) -> bool:
    classe = normalize_class(row.get("classe"))
    tipo = str(row.get("tipo") or "").strip().lower()
    return classe == "SUB" or tipo == "sub" or "subordinad" in tipo


def cota_label(cota: dict[str, Any]) -> str:
    classe = normalize_class(cota.get("classe"))
    return str(cota.get("label") or CLASS_LABELS.get(classe) or cota.get("classe") or "-")


def cota_tipo(cota: dict[str, Any]) -> str:
    if cota.get("tipo"):
        return str(cota.get("tipo"))
    return "sub" if is_subordinate(cota) else "sr"


def cota_tax_label(cota: dict[str, Any], fallback: str = "-") -> str:
    text = str(cota.get("taxaTexto") or cota.get("taxa") or cota.get("remuneracao") or "").strip()
    if text:
        return text
    indexador = str(cota.get("indexador") or "").strip()
    percentual = to_number(cota.get("percentualIndexador"))
    if indexador and percentual:
        return f"{format_number_br(percentual * 100, 2)}% {indexador}"
    taxa_aa = to_number(cota.get("taxaAa"))
    if taxa_aa:
        return f"{format_percent_br(taxa_aa)} a.a."
    taxa_am = to_number(cota.get("taxaAm"))
    if taxa_am:
        return f"{format_percent_br(taxa_am)} a.m."
    return fallback or "-"


def compound_return(values: list[Any]) -> float | None:
    factor = 1.0
    has_value = False
    for value in values:
        if value is None:
            continue
        number = to_number(value)
        factor *= 1.0 + number
        has_value = True
    return factor - 1.0 if has_value else None


def all_snapshot_paths(project_root: Path, cra_id: str) -> dict[str, Path]:
    data_dir = project_root / "data" / "cras" / cra_id
    if not data_dir.exists():
        return {}
    return {
        path.stem: path
        for path in data_dir.glob("*.js")
        if re.fullmatch(r"\d{4}-\d{2}-\d{2}", path.stem)
    }


def previous_date(date_keys: list[str], date_key: str) -> str:
    previous = [key for key in date_keys if key < date_key]
    return previous[-1] if previous else ""


def performance_by_key(snapshot: dict[str, Any]) -> dict[str, dict[str, Any]]:
    rows = {}
    for row in snapshot.get("performanceCotas") or []:
        key = cota_key(row)
        if key:
            rows[key] = row
        cls = class_key(row)
        if cls:
            rows.setdefault(cls, row)
    return rows


def cotas_by_key(snapshot: dict[str, Any]) -> dict[str, dict[str, Any]]:
    rows = {}
    for row in snapshot.get("passivo", {}).get("cotas") or []:
        key = cota_key(row)
        if key:
            rows[key] = row
        cls = class_key(row)
        if cls:
            rows.setdefault(cls, row)
    return rows


def needs_repair(snapshot: dict[str, Any], date_key: str) -> bool:
    cotas = snapshot.get("passivo", {}).get("cotas") or []
    perf = snapshot.get("performanceCotas") or []
    history = snapshot.get("rendimento30Dias") or []
    if perf and not any(row.get("dateKey") == date_key for row in history):
        return True
    perf_rows = performance_by_key(snapshot)
    for cota in cotas:
        perf_row = perf_rows.get(cota_key(cota)) or perf_rows.get(class_key(cota))
        if not perf_row:
            continue
        if abs(to_number(perf_row.get("pu")) - to_number(cota.get("pu"))) > 0.000001:
            return True
        if abs(to_number(perf_row.get("valor")) - to_number(cota.get("valor"))) > 0.01:
            return True
    return False


def build_performance(snapshot: dict[str, Any], previous_snapshot: dict[str, Any] | None, date_key: str) -> tuple[list[dict[str, Any]], dict[str, Any]]:
    previous_cotas = cotas_by_key(previous_snapshot or {})
    previous_perf = performance_by_key(previous_snapshot or {})
    previous_has_asset = to_number((previous_snapshot or {}).get("ativo", {}).get("carteiraVpBruto")) > 0
    base_perf = performance_by_key(snapshot)
    current_history_cotas: dict[str, Any] = {}
    rows: list[dict[str, Any]] = []

    for cota in snapshot.get("passivo", {}).get("cotas") or []:
        key = cota_key(cota)
        classe = class_key(cota)
        existing = dict(base_perf.get(key) or base_perf.get(classe) or {})
        previous = previous_cotas.get(key) or previous_cotas.get(classe) or {}
        previous_row = previous_perf.get(key) or previous_perf.get(classe) or {}

        pu = to_number(cota.get("pu"))
        valor = to_number(cota.get("valor"))
        previous_pu = to_number(previous.get("pu") or previous_row.get("pu"))
        subordinate = is_subordinate(cota)
        result_day = (pu / previous_pu - 1.0) if pu > 0 and previous_pu > 0 and (previous_has_asset or not subordinate) else None

        if result_day is not None and previous_row.get("resultadoInicio") is not None:
            result_start = (1.0 + to_number(previous_row.get("resultadoInicio"))) * (1.0 + result_day) - 1.0
        elif pu > 0:
            initial_pu = to_number(cota.get("valorNominalInicial")) or 1000.0
            result_start = pu / initial_pu - 1.0 if initial_pu else None
        else:
            result_start = None

        row = {
            **existing,
            "classe": cota.get("classe"),
            "label": cota_label(cota),
            "tipo": cota_tipo(cota),
            "ifCodigo": cota.get("ifCodigo") or existing.get("ifCodigo"),
            "quantidade": to_number(cota.get("quantidade")),
            "taxa": cota_tax_label(cota, existing.get("taxa") or "-"),
            "pu": pu,
            "valor": valor,
            "resultadoDia": result_day,
            "resultadoMes": None,
            "resultado30Dias": None,
            "resultadoInicio": result_start,
        }
        rows.append(row)
        current_history_cotas[classe] = {
            "pu": pu,
            "valor": valor,
            "resultadoDia": result_day,
            "resultadoMes": None,
        }

    rows.sort(key=lambda row: CLASS_ORDER.get(normalize_class(row.get("classe")), 50))
    return rows, current_history_cotas


def build_history(date_key: str, snapshot: dict[str, Any], previous_snapshot: dict[str, Any] | None, current_history_cotas: dict[str, Any]) -> list[dict[str, Any]]:
    current_row = {
        "dateKey": date_key,
        "reportDate": snapshot.get("metadata", {}).get("reportDate") or date_key,
        "cotas": current_history_cotas,
    }
    previous_history = []
    if previous_snapshot:
        previous_history = [
            row for row in previous_snapshot.get("rendimento30Dias") or []
            if str(row.get("dateKey") or "") < date_key
        ]

    # Keep the same visual order used by most snapshots: newest first.
    rows = [current_row]
    seen = {date_key}
    for row in sorted(previous_history, key=lambda item: str(item.get("dateKey") or ""), reverse=True):
        row_date = str(row.get("dateKey") or "")
        if not row_date or row_date in seen:
            continue
        seen.add(row_date)
        rows.append(row)
        if len(rows) >= 30:
            break
    return rows


def apply_aggregates(snapshot: dict[str, Any], date_key: str) -> None:
    history = snapshot.get("rendimento30Dias") or []
    for perf in snapshot.get("performanceCotas") or []:
        classe = normalize_class(perf.get("classe"))
        month_values = [
            row.get("cotas", {}).get(classe, {}).get("resultadoDia")
            for row in history
            if str(row.get("dateKey") or "")[:7] == date_key[:7]
        ]
        thirty_values = [
            row.get("cotas", {}).get(classe, {}).get("resultadoDia")
            for row in history[:30]
        ]
        perf["resultadoMes"] = compound_return(month_values)
        perf["resultado30Dias"] = compound_return(thirty_values)
        if history and classe in (history[0].get("cotas") or {}):
            history[0]["cotas"][classe]["resultadoMes"] = perf["resultadoMes"]


def repair_cra(project_root: Path, cra: dict[str, Any], current_only: bool, stamp: str, dry_run: bool) -> list[str]:
    cra_id = str(cra.get("craId") or "")
    if cra_id == "cras-carteira-overview":
        return []
    paths = all_snapshot_paths(project_root, cra_id)
    if not paths:
        return []

    wanted_dates = [cra.get("currentDate")] if current_only else [entry.get("dateKey") for entry in cra.get("dates") or []]
    wanted_dates = sorted({str(key) for key in wanted_dates if key in paths})
    if not wanted_dates:
        return []

    loaded: dict[str, dict[str, Any]] = {}
    all_dates = sorted(paths)
    changed: list[str] = []

    for date_key in wanted_dates:
        snapshot = load_js_snapshot(paths[date_key])
        if not needs_repair(snapshot, date_key):
            loaded[date_key] = snapshot
            continue

        prev_key = previous_date(all_dates, date_key)
        previous_snapshot = loaded.get(prev_key)
        if not previous_snapshot and prev_key:
            previous_snapshot = load_js_snapshot(paths[prev_key])

        performance, current_history_cotas = build_performance(snapshot, previous_snapshot, date_key)
        snapshot["performanceCotas"] = performance
        snapshot["rendimento30Dias"] = build_history(date_key, snapshot, previous_snapshot, current_history_cotas)
        apply_aggregates(snapshot, date_key)

        snapshot.setdefault("metadata", {})["revisionId"] = stamp
        snapshot["metadata"]["performanceHistoryValidatedAt"] = datetime.now().astimezone().isoformat()

        for entry in cra.get("dates") or []:
            if entry.get("dateKey") == date_key:
                entry["revisionId"] = stamp
                entry["importedAt"] = snapshot["metadata"].get("importedAt") or entry.get("importedAt") or snapshot["metadata"]["performanceHistoryValidatedAt"]

        if not dry_run:
            write_js_snapshot(paths[date_key], cra_id, date_key, snapshot)
            canonical = project_root / "cras" / cra_id / "archive" / "canonical" / f"{date_key}.json"
            if canonical.exists():
                canonical.write_text(json.dumps(snapshot, ensure_ascii=False, indent=2), encoding="utf-8")
        loaded[date_key] = snapshot
        changed.append(f"{cra.get('name') or cra_id} {date_key}")

    return changed


def main() -> None:
    parser = argparse.ArgumentParser(description="Valida e corrige performanceCotas/rendimento30Dias dos snapshots publicados.")
    parser.add_argument("--project-root", default=".", help="Raiz do projeto.")
    parser.add_argument("--all-dates", action="store_true", help="Varre todas as datas do manifesto; por padrao valida somente a data atual de cada CRA.")
    parser.add_argument("--dry-run", action="store_true", help="Apenas reporta as correcoes necessarias.")
    args = parser.parse_args()

    project_root = Path(args.project_root).resolve()
    manifest_path = project_root / "data" / "cra-manifest.js"
    manifest = load_manifest(manifest_path)
    stamp = datetime.now().strftime("%Y%m%d-%H%M%S-performance")
    changed: list[str] = []

    for cra in manifest:
        changed.extend(repair_cra(project_root, cra, current_only=not args.all_dates, stamp=stamp, dry_run=args.dry_run))

    if changed and not args.dry_run:
        write_manifest(manifest_path, manifest)

    print(json.dumps({"changed": changed, "count": len(changed), "dryRun": args.dry_run}, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
