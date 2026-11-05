from __future__ import annotations

import argparse
import copy
import csv
import hashlib
import importlib.util
import io
import json
from datetime import datetime
from decimal import Decimal, ROUND_HALF_UP
from math import fsum
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("funding_import", ROOT / "scripts/import-cras-fundings-cash.py")
IMPORT = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(IMPORT)
ENGINE = IMPORT.ENGINE
POSITION = "2026-10-27"
EVENT_DATE = "2026-09-04"
REVISION = "20261105-encargos-passados-53-54"
TARGETS = {"cra-carteira-53": "CRA026000B7", "cra-carteira-54": "CRA026000B9"}
DECISIONS = ROOT / "data/fundings/cras-carteira/confirmacoes-2026-10-29.json"
PREVIEW = ROOT / "output/cra-carteira-ger004-2026-10-27-ajustado/subordinadas-por-cra.csv"
AUDIT = ROOT / "output/relatorios/amortizacoes-b3-53-54-2026-11-05.json"


def read_redemption(path, code, quantity):
    raw = path.read_bytes()
    lines = raw.decode("cp1252").splitlines()
    start = next(i for i, line in enumerate(lines) if line.startswith("Data Original\t"))
    rows = list(csv.DictReader(io.StringIO("\n".join(lines[start:])), delimiter="\t"))
    key = datetime.fromisoformat(EVENT_DATE).strftime("%d/%m/%Y")
    events = [row for row in rows if row["Data da Efetivação"] == key]
    if len(events) != 1:
        raise ValueError(f"{code}: esperado um unico evento de amortizacao sem juros na data")
    event = events[0]
    if (quantity <= 0 or event["Título"] != code or event["Situação Título"] != "CONFIRMADO"
            or event["Nome Evento"] != "AMORTIZACAO EXTRAORDINARIA"
            or event["Incorpora"] != "N" or event["Data de Liquidação"] != key
            or not IMPORT.norm(event["Status de Liquidação"]).startswith("liquidado")):
        raise ValueError(f"{code}: evento nao confirmado como amortizacao liquidada sem incorporacao")
    pu = Decimal(event["PU Evento"].replace(".", "").replace(",", "."))
    if pu <= 0 or pu != pu.quantize(Decimal(".00000001")):
        raise ValueError(f"{code}: PU de amortizacao invalido")
    amount = (pu * Decimal(str(quantity))).quantize(Decimal(".01"), rounding=ROUND_HALF_UP)
    return {"reduceFunding": True, "kind": "amortizacao_extraordinaria", "amountConfirmed": True,
            "amount": float(amount), "puAmortizacao": str(pu), "puJuros": "0.00000000",
            "quantityAtEvent": quantity, "incorpora": False, "confirmedBy": "Leonardo / extrato B3",
            "confirmedOn": "2026-11-05", "source": path.name,
            "sourceSha256": hashlib.sha256(raw).hexdigest(),
            "sourceEvent": event, "note": "Somente amortizacao; juros e periodo preservados. Sem novo desconto no caixa."}


def resolved_issue(issue):
    return (issue.get("cra") in TARGETS and issue.get("date") == EVENT_DATE and issue.get("type") in {
        "ajuste_generico_sem_detalhamento", "evento_generico_sem_natureza_confirmada",
        "pagamento_confirmado_valor_rateio_pendente"})


def resolve_confirmation(existing, source, code, quantity):
    if existing.get("kind") == "encargos_passados" and existing.get("ignoreForPu"):
        if existing.get("reduceFunding"):
            raise ValueError("Encargos passados nao podem reduzir o funding")
        return copy.deepcopy(existing)
    return read_redemption(source, code, quantity)


def reconcile(sources, apply=False):
    report_path = ROOT / f"data/fundings/cras-carteira/{POSITION}.json"
    report = json.loads(report_path.read_text("utf-8"))
    decisions = json.loads(DECISIONS.read_text("utf-8"))
    registry = json.loads((ROOT / "data/fundings/cras-carteira/documented-terms.json").read_text("utf-8"))
    manifest_path = ROOT / "data/cra-manifest.js"
    manifest = ENGINE.load_json_assignment(manifest_path)
    snapshots, changes = {}, {}
    runtime_decisions = copy.deepcopy(decisions)
    for decision in registry["eventDecisions"]:
        if decision.get("status") == "nao_efetivado":
            for scope in decision["scope"]:
                runtime_decisions[f'{scope}/{decision["date"]}'] = {"notExecuted": True,
                    "confirmedBy": decision["confirmedBy"], "confirmationDate": decision["confirmationDate"]}
    for cra, code in TARGETS.items():
        prior = ENGINE.load_snapshot(ROOT / f"data/cras/{cra}/{POSITION}.js", cra, POSITION)
        current = next(cota for cota in prior["passivo"]["cotas"] if cota.get("ifCodigo") == code)
        row = next(row for row in current["historicoPu"] if row["dataIso"] == EVENT_DATE)
        identity = f"{cra}/SR1/{EVENT_DATE}"
        confirmation = resolve_confirmation(decisions.get(identity, {}), sources[code], code, row["quantidade"])
        decisions[identity] = runtime_decisions[identity] = confirmation
        entry = next(row for row in report["series"] if row["cra"] == cra and row["class"] == "SR1")
        opening_date = entry["previous"]["historicoPu"][-1]["dataIso"]
        opening = ENGINE.load_snapshot(ROOT / f"data/cras/{cra}/{opening_date}.js", cra, opening_date)
        model = {"date": opening_date, "metadata": opening["metadata"]}
        if prior["metadata"].get("revisionId") != REVISION:
            baseline_decisions = copy.deepcopy(runtime_decisions)
            prior_event = next((event for event in current.get("eventosAplicados", []) if event["dataIso"] == EVENT_DATE), {})
            baseline_decisions[identity] = prior_event.get("humanConfirmation") or {
                "reduceFunding": False, "kind": "pagamento", "amountConfirmed": False}
            baseline = IMPORT.build_cota(copy.deepcopy(entry), model, POSITION, [], baseline_decisions)
            assert abs(baseline["pu"] - current["pu"]) < 1e-8, f"Saldo inicial alterado: {cra}"
        revised = IMPORT.build_cota(copy.deepcopy(entry), model, POSITION, [], runtime_decisions)
        assert [row for row in revised["historicoPu"] if row["dataIso"] < EVENT_DATE] == [
            row for row in current["historicoPu"] if row["dataIso"] < EVENT_DATE]
        assert not any(event["dataIso"] == "2026-10-07" for event in revised["eventosAplicados"])
        events = [event for event in revised["eventosAplicados"] if event["dataIso"] == EVENT_DATE]
        ignored = bool(confirmation.get("ignoreForPu"))
        if ignored:
            assert not events and len(revised["eventosSemEfeitoPu"]) == 1
        else:
            assert len(events) == 1 and events[0]["puAmortizacao"] == float(confirmation["puAmortizacao"])
        revised["financialEventConfirmation"] = {"date": EVENT_DATE,
            "status": "encargos_passados_sem_efeito_pu" if ignored else "amortizacao_liquidada_b3",
            "amount": confirmation["amount"], "source": confirmation["source"], "confirmationDate": "2026-11-05",
            "interestPaid": 0, "reducesFunding": not ignored,
            "remainingIssue": None if ignored else "Memoria publica AF de 05/11 ainda sem este evento; fonte do registro e o extrato B3."}
        result = copy.deepcopy(prior)
        result["passivo"]["cotas"] = [revised if cota.get("ifCodigo") == code else cota for cota in result["passivo"]["cotas"]]
        result["passivo"]["fundingTotal"] = fsum(cota["valor"] for cota in result["passivo"]["cotas"] if cota.get("ehFunding"))
        result["metadata"]["revisionId"] = REVISION
        result["fundingCashIssues"] = [issue for issue in result.get("fundingCashIssues", []) if not resolved_issue(issue)]
        assert result["caixa"] == prior["caixa"] and result["ativo"] == prior["ativo"]
        snapshots[cra] = result
        changes[cra] = {"ifCodigo": code, "confirmation": confirmation,
            "puBefore": current["pu"], "puAfter": revised["pu"],
            "fundingBefore": prior["passivo"]["fundingTotal"], "fundingAfter": result["passivo"]["fundingTotal"],
            "cashPreserved": result["caixa"]["total"]}
    overview_id = "cras-carteira-overview"
    overview = ENGINE.load_snapshot(ROOT / f"data/cras/{overview_id}/{POSITION}.js", overview_id, POSITION)
    for row in overview["portfolioOverview"]["rows"]:
        if row.get("craId") in changes and row.get("ifCodigo") == TARGETS[row["craId"]]:
            change = changes[row["craId"]]
            status = "04/09: encargos passados, sem efeito no PU" if change["confirmation"].get("ignoreForPu") else "Amortizacao de 04/09 liquidada na B3"
            row.update(puAtual=change["puAfter"], valorAtual=change["fundingAfter"], status=status)
    for row in overview["fundingCashVehicles"]:
        if row["craId"] in changes:
            row["funding"] = changes[row["craId"]]["fundingAfter"]
    overview["passivo"]["fundingTotal"] = fsum(row["funding"] or 0 for row in overview["fundingCashVehicles"])
    overview["fundingCashIssues"] = [issue for issue in overview.get("fundingCashIssues", []) if not resolved_issue(issue)]
    overview["metadata"]["revisionId"] = REVISION
    snapshots[overview_id] = overview
    for item in manifest:
        if item["craId"] in snapshots:
            row = next(row for row in item["dates"] if row["dateKey"] == POSITION)
            row.update(revisionId=REVISION, funding=snapshots[item["craId"]]["passivo"]["fundingTotal"])
    report["issues"] = [issue for issue in report["issues"] if not resolved_issue(issue)]
    report["currentPositions"] = overview["fundingCashVehicles"]
    report["summary"]["fundingTotal"] = overview["passivo"]["fundingTotal"]
    cotas = []
    for item in manifest:
        cra = item["craId"]
        if cra.startswith("cra-carteira-"):
            snapshot = snapshots.get(cra) or ENGINE.load_snapshot(ROOT / f'data/cras/{cra}/{item["currentDate"]}.js', cra, item["currentDate"])
            cotas.extend(snapshot["passivo"]["cotas"])
    report["summary"].update(pendingPayments=sum(len(cota.get("eventosPendentes", [])) for cota in cotas),
                              eventsApplied=sum(len(cota.get("eventosAplicados", [])) for cota in cotas))
    report["confirmedPaymentReview"] = {"revision": REVISION, "changes": changes}
    with PREVIEW.open(encoding="utf-8-sig", newline="") as stream:
        reader = csv.DictReader(stream, delimiter=";")
        columns, preview = reader.fieldnames, list(reader)
    for row in preview:
        cra = f'cra-carteira-{row["cra"]}'
        if cra not in changes:
            continue
        def number(field):
            return Decimal(row[field].replace(".", "").replace(",", "."))
        def formatted(value, places=2):
            return f"{value:.{places}f}".replace(".", ",")
        funding = Decimal(str(changes[cra]["fundingAfter"]))
        residual = number("vp_apurado_sem_pdd") + number("caixa_usado_no_calculo") - funding
        note = ("04/09: encargos passados sem efeito no PU; carteira e caixa preservados. Previa sem fechamento."
                if changes[cra]["confirmation"].get("ignoreForPu") else
                "Amortizacao de 04/09 conforme B3; sem juros pagos ou incorporacao. Caixa preservado. Previa sem fechamento.")
        row.update(funding_sr_mez=formatted(funding),
            vp_menos_funding_sem_caixa=formatted(number("vp_apurado_sem_pdd")-funding),
            valor_sub_indicativo=formatted(residual), pu_sub_indicativo=formatted(residual/number("quantidade_sub"), 8),
            observacoes=note)
    result = {"applied": apply, "positionDate": POSITION, "changes": changes,
              "subPreview": [row for row in preview if f'cra-carteira-{row["cra"]}' in TARGETS]}
    if apply:
        DECISIONS.write_text(json.dumps(decisions, ensure_ascii=False, indent=2)+"\n", encoding="utf-8")
        for cra, snapshot in snapshots.items():
            ENGINE.write_snapshot(ROOT / f"data/cras/{cra}/{POSITION}.js", cra, POSITION, snapshot)
        ENGINE.write_manifest(manifest_path, manifest)
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
        with PREVIEW.open("w", encoding="utf-8-sig", newline="") as stream:
            writer = csv.DictWriter(stream, fieldnames=columns, delimiter=";")
            writer.writeheader()
            writer.writerows(preview)
        AUDIT.parent.mkdir(parents=True, exist_ok=True)
        AUDIT.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    return result


def main():
    parser = argparse.ArgumentParser(description="Confere e registra as amortizacoes B3 de 04/09 dos CRAs 53 e 54.")
    parser.add_argument("--apply", action="store_true")
    args = parser.parse_args()
    sources = {code: Path.home() / "Downloads" / f"{code}.tsv" for code in TARGETS.values()}
    print(json.dumps(reconcile(sources, args.apply), ensure_ascii=True, indent=2))


if __name__ == "__main__":
    main()
