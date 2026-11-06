from __future__ import annotations

import argparse
import copy
import csv
import hashlib
import importlib.util
import io
import json
import re
from datetime import datetime, timedelta, timezone
from decimal import Decimal
from math import fsum
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("funding_refresh", ROOT / "scripts/refresh-funding-pu.py")
REFRESH = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(REFRESH)
ENGINE = REFRESH.engine
FIELDS = {"saldoemcontacorrente": "cc", "saldoemaplicacao": "aplicacao",
          "fundodedespesa": "reserva", "total": "reported"}
OVERVIEW = "cras-carteira-overview"


def money(value):
    value = value.strip().replace("R$", "").replace(" ", "").replace("\u00a0", "")
    value = value.replace("\u2013", "-").replace("\u2014", "-").replace("\u2212", "-")
    if value in {"", "-"}:
        return Decimal(0)
    return Decimal(value.replace(".", "").replace(",", "."))


def parse_source(source, cra60_policy="reported"):
    raw = source.read_bytes()
    rows = csv.reader(io.StringIO(raw.decode("utf-8-sig")), delimiter="\t")
    dates, columns, blocks, current, heading = [], {}, {}, None, None
    for line, row in enumerate(rows, 1):
        header = {i: datetime.strptime(value.strip(), "%d/%m/%Y").date().isoformat()
                  for i, value in enumerate(row) if re.fullmatch(r"\d{2}/\d{2}/\d{4}", value.strip())}
        if header:
            if columns and columns != header:
                raise ValueError(f"Cabecalho de datas mudou na linha {line}")
            columns, dates = header, sorted(header.values())
            if heading is None:
                candidates = [value.strip() for value in row[:min(header)]
                              if re.fullmatch(r"(?:R\$\s*)?-?\d[\d.]*,\d{2}", value.strip())]
                if candidates:
                    heading = money(candidates[0])
            continue
        fields = [(index, FIELDS[ENGINE.normalize_key(value)]) for index, value in enumerate(row)
                  if ENGINE.normalize_key(value) in FIELDS]
        if not fields:
            continue
        if len(fields) != 1:
            raise ValueError(f"Mais de um componente de caixa na linha {line}")
        label_index, field = fields[0]
        prefix = [value.strip() for value in row[:label_index] if value.strip()]
        match = next((match for value in prefix if (match := re.fullmatch(r"(\d+)\u00aa", value))), None)
        if match:
            current = f"cra-carteira-{match[1]}"
            if current in blocks:
                raise ValueError(f"Bloco duplicado: {current}")
            blocks[current] = {}
        if field:
            if current is None or not columns or min(columns) <= label_index or field in blocks[current]:
                raise ValueError(f"Linha de caixa fora do bloco ou repetida: {line}")
            padded = row + [""] * (max(columns) + 1 - len(row))
            blocks[current][field] = {key: money(padded[index]) for index, key in columns.items()}
            blocks[current][f"{field}Line"] = line
            if field == "aplicacao":
                blocks[current]["bankAccount"] = " ".join(prefix)
    if not dates or not blocks:
        raise ValueError("Nenhum caixa identificado no texto")
    records, issues = {}, []
    for cra, block in blocks.items():
        if not set(FIELDS.values()).issubset(block):
            raise ValueError(f"Componentes de caixa incompletos: {cra}")
        for key in dates:
            cc, application, reserve, reported = (block[field][key] for field in ("cc", "aplicacao", "reserva", "reported"))
            calculated = cc + application - reserve
            selected = reported
            if cra == "cra-carteira-60" and key == "2026-10-28" and cra60_policy == "components":
                selected = calculated
            entry = {"cc": float(cc), "aplicacao": float(application), "reserva": float(reserve),
                     "totalInformado": float(reported), "totalCalculado": float(calculated), "total": float(selected),
                     "difference": float(reported-calculated), "bankAccount": block["bankAccount"],
                     "sourceLine": block["reportedLine"],
                     "totalPolicy": "soma_contas" if selected != reported else "total_informado"}
            if reported == 0 and calculated < 0:
                entry["reserveShortfall"] = float(-calculated)
                issues.append({"cra": cra, "date": key, "type": "reserva_superior_aos_saldos",
                               "amount": float(-calculated), "reportedTotalPreserved": True})
            elif abs(reported-calculated) > Decimal(".02"):
                issues.append({"cra": cra, "date": key, "type": "caixa_nao_concilia",
                               "reported": float(reported), "calculated": float(calculated),
                               "difference": float(reported-calculated), "totalPolicy": entry["totalPolicy"]})
            records.setdefault(key, {})[cra] = entry
    totals = {key: fsum(row["total"] for row in entries.values()) for key, entries in records.items()}
    return {"source": source.name, "sourceSha256": hashlib.sha256(raw).hexdigest(), "dates": dates,
            "vehicles": sorted(blocks, key=lambda cra: int(cra.rsplit("-", 1)[1])),
            "headingTotal": float(heading) if heading is not None else None,
            "headingDifference": float(heading)-totals[dates[-1]] if heading is not None else None,
            "totals": totals, "records": records, "issues": issues, "cra60Policy": cra60_policy}


def materialize_series(cota, projection, date_key):
    result = copy.deepcopy(cota)
    rows = [copy.deepcopy(row) for row in projection["rows"] if row["dataIso"] <= date_key]
    result["historicoPu"] = [*result.get("historicoPu", []), *rows]
    for event in projection.get("events", []):
        if event["dataIso"] <= date_key:
            result.setdefault("eventosAplicados", []).append(copy.deepcopy(event))
    last = result["historicoPu"][-1] if result.get("historicoPu") else None
    if last:
        result.update(pu=last["puAtualizado"], principalResidual=last["valorNominal"],
                      quantidade=last.get("quantidade", result.get("quantidade", 0)), valor=last["valorReais"],
                      fundingSourceDateKey=last["dataIso"], dataHistoricaIso=last["dataIso"],
                      dataHistoricaSelecionada=last.get("data") or ENGINE.date_key_to_br(last["dataIso"]),
                      visaoCalculadaPu=last["dataIso"] == date_key)
        result.setdefault("acumulacaoFinal", {}).update(periodoFim=ENGINE.date_key_to_br(last["dataIso"]),
            puFinal=result["pu"], diasAcumulacao=last.get("diasUteis", 0), diasUteisPeriodo=last.get("diasUteisPeriodo", 0))
    if projection.get("reason"):
        result["fundingPositionHeldReason"] = projection["reason"]
    return result


def apply_import(parsed, apply=False, accept_detail_totals=False):
    if apply and abs(parsed.get("headingDifference") or 0) > .02 and not accept_detail_totals:
        raise ValueError("Confirmar os totais detalhados antes de substituir o total do cabecalho")
    manifest_path = ROOT / "data/cra-manifest.js"
    manifest = ENGINE.load_json_assignment(manifest_path)
    by_id = {item["craId"]: item for item in manifest}
    earliest, latest = parsed["dates"][0], parsed["dates"][-1]
    rates = ENGINE.parse_di_rates()
    holidays = set(json.loads(REFRESH.terms.REGISTRY.read_text("utf-8"))["businessCalendar"]["holidays"])
    if any(not ENGINE.is_business_day(ENGINE.as_date(key), holidays) for key in parsed["dates"]):
        raise ValueError("Data de caixa nao e dia util")
    if rates.get(latest, {}).get("fonte") != "Banco Central do Brasil - SGS 12":
        raise ValueError("Atualizar o CDI oficial antes de atualizar os fundings")
    integrations = json.loads(REFRESH.INTEGRATIONS.read_text("utf-8"))
    opening, projected = {}, {}
    for cra in parsed["vehicles"]:
        source_key = max(row["dateKey"] for row in by_id[cra]["dates"] if row["dateKey"] < earliest)
        source = ENGINE.load_snapshot(ROOT / f"data/cras/{cra}/{source_key}.js", cra, source_key)
        if not source["metadata"].get("fundingCashOnly"):
            raise ValueError(f"{cra}: preservar importacao completa de carteira; exige rotina especifica")
        opening[cra] = source
        projected[cra] = {}
        for cota in source["passivo"]["cotas"]:
            code = cota.get("ifCodigo") or cota["classe"]
            confirmed = [event for event in integrations if event["cra"] == cra and event["ifCodigo"] == code]
            projected[cra][code] = REFRESH.extend_series(cota, source_key, latest, holidays, rates, integrations=confirmed)
    prefix = f'caixa-texto-{parsed["sourceSha256"][:12]}-{parsed["cra60Policy"]}'
    imported_at = datetime.now(timezone(timedelta(hours=-3))).isoformat()
    snapshots, histories, summary_rows = {}, {}, []
    for key in parsed["dates"]:
        day_snapshots = {}
        for cra in parsed["vehicles"]:
            record = parsed["records"][key][cra]
            snapshot = copy.deepcopy(opening[cra])
            revision = f"{key.replace('-', '')}-{prefix}-{record['totalPolicy']}"
            path = ROOT / f"data/cras/{cra}/{key}.js"
            timestamp = imported_at
            if path.exists():
                existing = ENGINE.load_snapshot(path, cra, key)
                if existing["metadata"].get("assetImport"):
                    raise ValueError(f"{cra}/{key}: nao substituir carteira ja importada")
                if existing["metadata"].get("revisionId") == revision:
                    timestamp = existing["metadata"]["importedAt"]
            snapshot["metadata"].update(dateKey=key, reportDate=ENGINE.date_key_to_br(key), revisionId=revision,
                importedAt=timestamp, fundingCashOnly=True, cashDateKey=key,
                cashOnlyTextImport={"source": parsed["source"], "sha256": parsed["sourceSha256"], "noPortfolioReprocessing": True})
            snapshot["cra"].update(dateKey=key, dataBase=ENGINE.date_key_to_br(key))
            accounts = {"cc": record["cc"], "contaAplicacao": record["aplicacao"], "fundoDespesas": record["reserva"]}
            snapshot["caixa"] = {"accounts": accounts, "total": record["total"], "totalInformado": record["totalInformado"],
                "totalCalculado": record["totalCalculado"], "fonte": "Texto de saldos informado por Leonardo",
                "arquivoOrigem": parsed["source"], "contaCorrenteIdentificacao": record["bankAccount"],
                "totalPolicy": record["totalPolicy"], "reservaInsuficiente": record.get("reserveShortfall", 0),
                "observacao": "Reserva de despesas deduzida uma unica vez. Total da fonte preservado, salvo ajuste explicitamente confirmado."}
            history = histories.setdefault(cra, copy.deepcopy(snapshot.get("caixaHistorico", {})))
            history[key] = {"total": record["total"], "totalCalculado": record["totalCalculado"], "accounts": accounts}
            snapshot["caixaHistorico"] = copy.deepcopy(history)
            snapshot["ativo"]["caixa"] = record["total"]
            assert snapshot["ativo"].get("total") is None
            snapshot["passivo"]["cotas"] = [materialize_series(cota, projected[cra][cota.get("ifCodigo") or cota["classe"]], key)
                                              for cota in opening[cra]["passivo"]["cotas"]]
            cotas = snapshot["passivo"]["cotas"]
            snapshot["passivo"]["fundingTotal"] = fsum(cota["valor"] for cota in cotas if cota.get("ehFunding")) if cotas else None
            assert snapshot["passivo"].get("subordinadaTotal") is None
            snapshot["fundingCashIssues"] = [issue for issue in snapshot.get("fundingCashIssues", [])
                if issue.get("type") not in {"caixa_nao_informado", "caixa_nao_concilia", "reserva_superior_aos_saldos"}]
            snapshot["fundingCashIssues"].extend(issue for issue in parsed["issues"] if issue["cra"] == cra and issue["date"] == key)
            snapshot["sources"].append({"name": "Atualizacao de caixa", "date": ENGINE.date_key_to_br(key), "file": parsed["source"]})
            day_snapshots[cra] = snapshot
            summary_rows.append({"cra": cra, "date": key, "cash": record["total"], "funding": snapshot["passivo"]["fundingTotal"]})
        base_overview_key = max(row["dateKey"] for row in by_id[OVERVIEW]["dates"] if row["dateKey"] < earliest)
        overview = ENGINE.load_snapshot(ROOT / f"data/cras/{OVERVIEW}/{base_overview_key}.js", OVERVIEW, base_overview_key)
        overview_revision = f"{key.replace('-', '')}-{prefix}-overview"
        overview_timestamp = imported_at
        overview_path = ROOT / f"data/cras/{OVERVIEW}/{key}.js"
        if overview_path.exists():
            existing_overview = ENGINE.load_snapshot(overview_path, OVERVIEW, key)
            if existing_overview["metadata"].get("revisionId") == overview_revision:
                overview_timestamp = existing_overview["metadata"]["importedAt"]
        overview["metadata"].update(dateKey=key, reportDate=ENGINE.date_key_to_br(key), importedAt=imported_at,
                                    revisionId=overview_revision, cashDateKey=key)
        overview["metadata"]["importedAt"] = overview_timestamp
        overview["cra"].update(dateKey=key, dataBase=ENGINE.date_key_to_br(key))
        overview["caixa"]["total"] = overview["ativo"]["caixa"] = parsed["totals"][key]
        overview["fundingCashVehicles"] = [{"craId": cra, "name": snap["cra"]["name"],
            "funding": snap["passivo"]["fundingTotal"], "cash": snap["caixa"]["total"]} for cra, snap in day_snapshots.items()]
        overview["passivo"]["fundingTotal"] = fsum(row["funding"] or 0 for row in overview["fundingCashVehicles"])
        positions = {(cra, cota.get("ifCodigo")): cota for cra, snap in day_snapshots.items() for cota in snap["passivo"]["cotas"]}
        for row in overview["portfolioOverview"]["rows"]:
            cota = positions.get((row.get("craId"), row.get("ifCodigo")))
            if cota:
                row.update(quantidadeIntegralizada=cota["quantidade"], puAtual=cota["pu"], valorAtual=cota["valor"],
                           dataFunding=cota.get("fundingSourceDateKey"))
        overview["fundingCashIssues"] = [issue for snap in day_snapshots.values() for issue in snap["fundingCashIssues"]]
        day_snapshots[OVERVIEW] = overview
        snapshots[key] = day_snapshots
        for cra, snap in day_snapshots.items():
            entry = {"dateKey": key, "reportDate": ENGINE.date_key_to_br(key), "importedAt": snap["metadata"]["importedAt"],
                "revisionId": snap["metadata"]["revisionId"], "totalAtivo": None, "funding": snap["passivo"]["fundingTotal"],
                "subordinada": None, "dataScript": f"data/cras/{cra}/{key}.js", "assetImported": False,
                "portfolioAssetImport": False, "fundingCashOnly": True, "cash": snap["caixa"]["total"]}
            item = by_id[cra]
            item["dates"] = sorted([row for row in item["dates"] if row["dateKey"] != key] + [entry], key=lambda row: row["dateKey"], reverse=True)
            item["currentDate"] = item["dates"][0]["dateKey"]
    if apply:
        for key, day_snapshots in snapshots.items():
            for cra, snap in day_snapshots.items():
                ENGINE.write_snapshot(ROOT / f"data/cras/{cra}/{key}.js", cra, key, snap)
        ENGINE.write_manifest(manifest_path, manifest)
        report_path = ROOT / f'data/fundings/cras-carteira/cash-text-{latest}.json'
        report_path.write_text(json.dumps({**parsed, "detailTotalsAccepted": accept_detail_totals}, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
    return {"applied": apply, "dates": parsed["dates"], "vehicles": len(opening), "cashPositions": len(summary_rows),
            "dailyTotals": parsed["totals"], "sourceHeading": parsed["headingTotal"], "issues": parsed["issues"],
            "latestCash": {row["cra"]: row["cash"] for row in summary_rows if row["date"] == latest}}


def main():
    parser = argparse.ArgumentParser(description="Atualiza somente caixas dos CRAs Carteira a partir de texto tabulado.")
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--apply", action="store_true")
    parser.add_argument("--accept-detail-totals", action="store_true")
    parser.add_argument("--cra60-28-policy", choices=["reported", "components"], default="reported")
    args = parser.parse_args()
    parsed = parse_source(args.source, args.cra60_28_policy)
    print(json.dumps(apply_import(parsed, args.apply, args.accept_detail_totals), ensure_ascii=True, indent=2))


if __name__ == "__main__":
    main()
