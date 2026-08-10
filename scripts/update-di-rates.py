from __future__ import annotations

import argparse
import json
import sys
import urllib.parse
import urllib.request
from datetime import date, datetime, timedelta
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DI_PATH = PROJECT_ROOT / "data" / "indices" / "di.js"
BCB_SGS_12_URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.12/dados"


def parse_iso(value: str | None) -> date | None:
    if not value:
        return None
    try:
        return datetime.strptime(str(value)[:10], "%Y-%m-%d").date()
    except ValueError:
        return None


def parse_br(value: str) -> date:
    return datetime.strptime(str(value)[:10], "%d/%m/%Y").date()


def format_br(value: date) -> str:
    return value.strftime("%d/%m/%Y")


def load_existing_rates(path: Path) -> dict[str, dict]:
    if not path.exists():
        return {}
    text = path.read_text(encoding="utf-8-sig")
    start = text.find("{")
    end = text.rfind("}")
    if start < 0 or end < 0:
        return {}
    return json.loads(text[start : end + 1])


def write_rates(path: Path, rates: dict[str, dict]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    ordered = {key: rates[key] for key in sorted(rates)}
    payload = json.dumps(ordered, ensure_ascii=False, indent=2)
    path.write_text(f"window.LAMINA_DI_RATES = {payload};\n", encoding="utf-8")


def fetch_bcb_sgs_12(start: date, end: date) -> list[dict]:
    params = urllib.parse.urlencode(
        {
            "formato": "json",
            "dataInicial": format_br(start),
            "dataFinal": format_br(end),
        }
    )
    request = urllib.request.Request(
        f"{BCB_SGS_12_URL}?{params}",
        headers={"User-Agent": "lamina-investidor/1.0"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        text = response.read().decode(charset)
    if not text.strip():
        return []
    return json.loads(text)


def upsert_rates(existing: dict[str, dict], rows: list[dict]) -> tuple[dict[str, dict], int]:
    updated = dict(existing)
    changed = 0
    for row in rows:
        row_date = parse_br(row["data"])
        key = row_date.isoformat()
        percentual = float(str(row["valor"]).replace(",", "."))
        daily_rate = percentual / 100
        new_row = {
            "arquivoOrigem": BCB_SGS_12_URL,
            "data": key,
            "fonte": "Banco Central do Brasil - SGS 12",
            "indexador": "DI",
            "taxaDia": daily_rate,
            "taxaPercentualDia": percentual,
        }
        if updated.get(key) != new_row:
            updated[key] = new_row
            changed += 1
    return updated, changed


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Atualiza a taxa DI/CDI diária pela série SGS 12 do Banco Central.")
    parser.add_argument("--project-root", default=str(PROJECT_ROOT), help="Raiz do projeto.")
    parser.add_argument("--start-date", help="Data inicial yyyy-mm-dd. Se omitida, usa a ultima data local menos o lookback.")
    parser.add_argument("--end-date", help="Data final yyyy-mm-dd. Se omitida, usa hoje.")
    parser.add_argument("--target-date", help="Data-base do processamento yyyy-mm-dd; usada como data final quando maior que hoje.")
    parser.add_argument("--lookback-days", type=int, default=45, help="Dias para recarregar antes da ultima taxa local.")
    parser.add_argument("--soft-fail", action="store_true", help="Nao interrompe o processamento se a consulta falhar.")
    return parser.parse_args()


def main() -> None:
    args = parse_args()
    project_root = Path(args.project_root).resolve()
    di_path = project_root / "data" / "indices" / "di.js"
    existing = load_existing_rates(di_path)

    latest_local = max((parse_iso(key) for key in existing), default=None)
    start = parse_iso(args.start_date)
    end = parse_iso(args.end_date) or parse_iso(args.target_date) or date.today()

    if start is None:
        if latest_local:
            start = latest_local - timedelta(days=max(args.lookback_days, 1))
        else:
            start = end - timedelta(days=max(args.lookback_days, 1))

    if start > end:
        start = end

    try:
        rows = fetch_bcb_sgs_12(start, end)
    except Exception as error:
        message = f"Nao foi possivel atualizar DI/CDI no BCB SGS 12: {error}"
        if args.soft_fail:
            print({"ok": False, "warning": message, "latestLocal": latest_local.isoformat() if latest_local else ""})
            return
        raise RuntimeError(message) from error

    updated, changed = upsert_rates(existing, rows)
    write_rates(di_path, updated)
    latest_after = max(updated) if updated else ""
    print(
        json.dumps(
            {
                "ok": True,
                "source": "Banco Central do Brasil - SGS 12",
                "rowsFetched": len(rows),
                "rowsChanged": changed,
                "latestLocal": latest_after,
                "period": {"start": start.isoformat(), "end": end.isoformat()},
            },
            ensure_ascii=False,
        )
    )


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(str(exc), file=sys.stderr)
        raise
