from __future__ import annotations

import argparse
import csv
import importlib.util
import json
import re
import unicodedata
from collections import defaultdict
from datetime import date, datetime, timedelta
from decimal import Decimal, ROUND_HALF_UP
from functools import lru_cache
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
ZERO = Decimal(0)
CENT = Decimal(".01")
OPEN = {"em carteira", "baixa parcial"}
CLOSED = {"liquidado", "baixa manual", "baixa por exclusao"}
CONFIRMED_D0_SPREADS = {
    (47, "417286"): (Decimal("0.75"), 21),
    (48, "417287"): (Decimal("0.75"), 21),
    (62, "475240"): (Decimal("10.7"), 252),
    (71, "549865"): (Decimal("10"), 252),
}
CONFIRMED_IN_PORTFOLIO = {
    date(2026, 10, 27): {(49, "416070"), (53, "426962"), (53, "426993"), (54, "425509")},
}
CONFIRMED_SETTLEMENTS = {
    (52, lastro): date(2026, 6, 3)
    for lastro in ("422306", "549851", "549852", "549853", "549854", "549855")
}
AWAITING_PORTFOLIOS = {68, 69}
TEMPORARY_ZERO_CASH = {(80, date(2026, 10, 27))}
MEMORY_CRAS = {50, 51, 62}
SUB_QUANTITIES = ROOT / 'data/fundings/cras-carteira/confirmed-subordinated-quantities.json'
ASSET_TERMS = ROOT / 'data/fundings/cras-carteira/confirmed-asset-terms.json'


def load_module(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


def normalized(text):
    return unicodedata.normalize("NFKD", text or "").encode("ascii", "ignore").decode().strip().lower()


def number(value):
    text = str(value or "0").strip()
    if "," in text:
        text = text.replace(".", "").replace(",", ".")
    return Decimal(text)


def br_day(value):
    return datetime.strptime(value, "%d/%m/%Y").date() if value else None


def money(value):
    return Decimal(str(value)).quantize(CENT, rounding=ROUND_HALF_UP)


def holding_confirmed(title_key, cutoff):
    return any(day <= cutoff and title_key in keys for day, keys in CONFIRMED_IN_PORTFOLIO.items())


def confirmed_sub_quantity(target, confirmation):
    if not confirmation or target.isoformat() < confirmation['positionFrom']:
        return None
    quantity = confirmation['quantity']
    if confirmation['scope'] != 'cras_carteira' or isinstance(quantity, bool) or not isinstance(quantity, int) or quantity <= 0:
        raise ValueError('Confirmacao de quantidade da Sub invalida')
    return quantity


@lru_cache(maxsize=1)
def asset_terms():
    return json.loads(ASSET_TERMS.read_text(encoding='utf-8')) if ASSET_TERMS.exists() else {}


def value_with_dated_payments(cost, face, acquisition, cutoff, payments, accrue, *, cap_face):
    balance, cursor, paid = cost, acquisition, ZERO
    timeline = defaultdict(lambda: ZERO)
    for day, value in payments:
        if acquisition <= day <= cutoff:
            timeline[day] += value
    memory = []
    for day, payment in sorted(timeline.items()):
        before = accrue(balance, cursor, day) if balance else ZERO
        if cap_face:
            before = min(before, max(ZERO, face - paid))
        balance = max(ZERO, before - payment)
        paid += payment
        memory.append({'data': day.isoformat(), 'saldo_antes': str(money(before)),
                       'pagamento': str(payment), 'saldo_apos': str(money(balance))})
        cursor = day
    balance = accrue(balance, cursor, cutoff) if balance else ZERO
    if cap_face:
        balance = min(balance, max(ZERO, face - paid))
    return max(ZERO, balance), memory


def read_titles(path):
    groups = defaultdict(list)
    with path.open(encoding="cp1252", newline="") as stream:
        reader = csv.reader(stream, delimiter=";")
        headers = [normalized(col) for col in next(reader)]
        required = {"nome cra", "lastro", "valor face", "valor aquisicao", "valor presente", "data de cessao",
                    "status do titulo", "status do pagamento", "tipo de operacao", "valor pago"}
        if not required.issubset(headers):
            raise ValueError(f"Colunas ausentes: {required - set(headers)}")
        for line, values in enumerate(reader, 2):
            if len(values) > len(headers) and not any(values[len(headers):]):
                values = values[:len(headers)]
            if len(values) != len(headers):
                raise ValueError(f"Linha {line}: numero de colunas inesperado")
            row = dict(zip(headers, values))
            match = re.match(r"^(\d+)\D+CRA\s+Carteira\s*$", row["nome cra"], re.I)
            if not match or not row["lastro"]:
                raise ValueError(f"Linha {line}: CRA/lastro invalido")
            row["source_line"] = line
            groups[(int(match.group(1)), row["lastro"])].append(row)
    return groups


def post_fixed_gross(cost, acquisition, cutoff, quote, periods, rates, holidays):
    spread_factor = (1 + quote / 100) ** (Decimal(1) / periods)
    di_factor, total_factor, days = Decimal(1), Decimal(1), 0
    for day in range((cutoff - acquisition).days):
        current = acquisition + timedelta(days=day + 1)
        key = current.isoformat()
        if current.weekday() >= 5:
            continue
        row = rates.get(key, {})
        if row.get("fonte") == "Banco Central do Brasil - SGS 12" and row.get("taxaDia") is not None:
            daily = 1 + Decimal(str(row["taxaDia"]))
            di_factor *= daily
            total_factor *= daily * spread_factor
            days += 1
        elif key not in holidays:
            raise ValueError(f"CDI D0 oficial ausente para {key}")
    return cost * total_factor, days, di_factor, spread_factor ** days, total_factor


def classify(group, cutoff, pricing, title_key=None, rates=None, holidays=()):
    def master_score(row):
        return (number(row["valor face"]) > 0 or number(row["valor aquisicao"]) > 0,
                number(row["valor presente"]) > 0, number(row["valor face"]), number(row["valor aquisicao"]))

    master = max(group, key=master_score)
    eligible_rows = [row for row in group if normalized(row["status do titulo"]) in OPEN
                     and number(row["valor presente"]) > 0 and number(row["valor aquisicao"]) > 0]
    if len(eligible_rows) > 1:
        raise ValueError(f"Mais de um saldo ativo para {master['nome cra']} / {master['lastro']}")
    if eligible_rows:
        master = eligible_rows[0]
    status = normalized(master["status do titulo"])
    validation = normalized(master.get("validacao do titulo"))
    issue = br_day(master.get("data de emissao"))
    due = br_day(master.get("data de vencimento"))
    acquisition = br_day(master["data de cessao"])
    approval = br_day(master.get("data de aprovacao de cessao"))
    included_on = max((day for day in (acquisition, approval) if day), default=None)
    face = number(master["valor face"])
    cost = number(master["valor aquisicao"])
    source_vp = money(number(master["valor presente"]))
    raw_rate = number(master.get("taxa desconto"))
    source_cost, source_face = cost, face
    correction = asset_terms().get(f'{title_key[0]}/{title_key[1]}') if title_key else None
    if correction:
        if correction['faceRule'] != 'acquisition_compounded_to_maturity' or not acquisition or not due:
            raise ValueError(f'Correcao do lastro sem dados para calcular face: {title_key}')
        cost = Decimal(correction['acquisitionValue'])
        raw_rate = Decimal(correction['monthlyRate']) * 100
        base_override = int(correction['baseDays'])
        daily_override = pricing.daily_rate_from_monthly(float(correction['monthlyRate']), base_override)
        count_override = 'calendar_exclusive' if base_override == 360 else 'business_exclusive'
        face = money(pricing.accrued_value_from_rate(float(cost), daily_override,
            acquisition.isoformat(), due.isoformat(), day_count=count_override))
    effective = number(master.get("taxa efetiva"))
    kind = normalized(master["tipo de operacao"])
    origin_day = (due - timedelta(days=int(master["dias ate o vencimento"]))) if due and master.get("dias ate o vencimento") else None
    payments = [(br_day(row.get("data do pagamento")), number(row["valor pago"])) for row in group]
    positive_payments = [(day, amount) for day, amount in payments if day and amount > 0 and acquisition and day >= acquisition]
    closing_day = br_day(master.get("data do pagamento")) if status in CLOSED else None
    if status in CLOSED and not closing_day:
        closing_day = max((day for day, _ in positive_payments), default=None)
    if status == "baixa parcial" and source_vp <= 0 and number(master.get("residuo")) <= 0:
        closing_day = max((day for day, _ in positive_payments), default=None)
    confirmed_settlement = CONFIRMED_SETTLEMENTS.get(title_key)
    if confirmed_settlement:
        closing_day = confirmed_settlement
    after_cutoff = closing_day is not None and closing_day > cutoff
    partial = ZERO
    rate_monthly = None
    model_vp = ZERO
    gross = None
    base_days = accrual_days = factor_cdi = factor_spread = factor_total = None
    formula = ""
    note = ""
    dated_value, payment_memory = None, []

    if confirmed_settlement and confirmed_settlement <= cutoff:
        method = "Liquidado em 03/06/2026; baixa confirmada no controle"
        note = "Novo Horizonte: sem novo lancamento no caixa"
    elif not cost or not face:
        method = "Sem linha de aquisicao do titulo"
    elif included_on and included_on > cutoff:
        method = "Cessao ou aprovacao posterior a data-base"
    elif status in CLOSED and not closing_day:
        method = "Baixa sem data: conciliar posicao historica"
    elif status not in OPEN and not (status in CLOSED and after_cutoff):
        method = "Fora da carteira: status do titulo"
    elif not after_cutoff and source_vp <= 0 and number(master.get("residuo")) <= 0:
        method = "Sem saldo aberto no export"
    elif validation == "invalido" and not holding_confirmed(title_key, cutoff):
        method = "Conflito: titulo em carteira mas invalido"
    elif not acquisition or not cost or not due:
        method = "Saldo sem dados suficientes para precificar"
    else:
        partial = sum((amount for day, amount in positive_payments if day <= cutoff), ZERO)
        if due <= cutoff:
            # Past-due receivables retain the unpaid face amount; these CRAs have no PDD.
            method = "Valor de face no vencimento e apos, sem PDD"
            gross = face
            formula = "max(0; face - pagamentos ate a data-base)"
        elif kind == "pos fixado":
            confirmed = CONFIRMED_D0_SPREADS.get(title_key)
            if confirmed and raw_rate == confirmed[0]:
                quote, periods = confirmed
                gross, accrual_days, factor_cdi, factor_spread, factor_total = post_fixed_gross(
                    cost, acquisition, cutoff, quote, periods, rates, holidays)
                base_days = 252
                method = f"Motor pos; CDI D0 + {quote}% {'a.m.' if periods == 21 else 'a.a.'}"
                formula = "max(0; aquisicao x fator CDI D0 x fator spread - pagamentos ate a data-base)"
                dated_value, payment_memory = value_with_dated_payments(
                    cost, face, acquisition, cutoff, positive_payments,
                    lambda balance, start, end: post_fixed_gross(balance, start, end, quote, periods, rates, holidays)[0],
                    cap_face=False)
                formula = "Saldo corrigido pelo CDI D0 e spread entre pagamentos; baixa na data de cada pagamento"
            else:
                method = "Pos-fixado sem indexador/regra conciliada; VP na data-base pendente"
        elif kind != "pre fixado" or (raw_rate <= 0 and effective <= 0):
            method = "Saldo sem taxa/regime; VP na data-base pendente"
        else:
            # Use only the engine's rate and accrual conventions, not the Confina-specific overrides.
            quote = raw_rate / 100
            if quote > Decimal(str(pricing.ANNUAL_RATE_THRESHOLD)):
                rate_monthly = (1 + float(quote)) ** (1 / 12) - 1
                method = "Motor pre; taxa anual convertida"
            elif quote > 0:
                rate_monthly = float(quote)
                method = "Motor pre; taxa mensal"
            else:
                rate_monthly = (1 + float(effective / 100)) ** (1 / 12) - 1
                method = "Motor pre; taxa efetiva anual"
            base_days = int(correction['baseDays'] if correction else master.get("base de dias") or 252)
            if base_days not in (252, 360):
                raise ValueError(f"Base de dias nao suportada: {title_key} / {base_days}")
            day_count = "calendar_exclusive" if base_days == 360 else "business_exclusive"
            accrual_days = pricing.accrual_periods(acquisition.isoformat(), cutoff.isoformat(), day_count)
            daily = pricing.daily_rate_from_monthly(rate_monthly, base_days)
            factor_total = (1 + daily) ** accrual_days
            gross = Decimal(str(pricing.accrued_value_from_rate(
                float(cost), daily, acquisition.isoformat(), cutoff.isoformat(),
                day_count=day_count, cap_value=float(face))))
            method += f"; base {base_days}"
            formula = "max(0; min(face; aquisicao x fator total) - pagamentos ate a data-base)"
            dated_value, payment_memory = value_with_dated_payments(
                cost, face, acquisition, cutoff, positive_payments,
                lambda balance, start, end: Decimal(str(pricing.accrued_value_from_rate(
                    float(balance), daily, start.isoformat(), end.isoformat(), day_count=day_count))),
                cap_face=True)
            formula = "Saldo remunerado entre pagamentos; baixa na data; teto de face menos baixas"
        if gross is not None:
            model_vp = money(dated_value if dated_value is not None else max(ZERO, gross - partial))
            if status == "baixa parcial" and not partial and source_vp > 0:
                note = "Baixa parcial sem fluxo posterior a cessao no CSV; conciliar saldo"
            if status == "baixa parcial" and model_vp == 0 and source_vp > 0:
                note = "Motor zerou saldo mas o CSV informa VP positivo; conciliar pagamentos"
    if correction:
        note = (note + '; ' if note else '') + 'Aquisicao e face corrigidos por Leonardo em 09/11/2026; face calculado pela taxa e prazo'
    return {
        "linha_csv": master["source_line"], "tipo_titulo": master.get("tipo de titulo"),
        "cedente": master.get("nome da cedente", ""), "sacado": master.get("nome sacado", ""),
        "linhas_grupo_csv": len(group), "base_dias_csv": master.get("base de dias", ""),
        "status_titulo": master["status do titulo"], "status_pagamento": master["status do pagamento"],
        "validacao": master.get("validacao do titulo"), "data_referencia_dias_csv": origin_day,
        "data_emissao": issue, "data_cessao": acquisition, "data_aprovacao": approval,
        "data_vencimento": due, "data_baixa": closing_day, "tipo_taxa": kind,
        "taxa_desconto_csv_pct": raw_rate, "taxa_motor_mensal_pct": rate_monthly * 100 if rate_monthly is not None else None,
        "face": face, "aquisicao": cost, "pagamentos_parciais": partial, "vp_csv": source_vp,
        "face_fonte": source_face, "aquisicao_fonte": source_cost,
        "correcao_confirmada": bool(correction),
        "baixas_na_data": json.dumps(payment_memory, ensure_ascii=True, separators=(',', ':')),
        "base_dias": base_days, "dias_uteis_acumulados": accrual_days,
        "fator_cdi_d0": factor_cdi, "fator_spread": factor_spread, "fator_total_sem_teto": factor_total,
        "vp_antes_das_baixas": money(gross) if gross is not None else None, "formula_vp": formula,
        "vp_motor": model_vp,
        "metodo_ou_motivo_exclusao": method, "observacao": note,
        "validacao_manual_27_10": validation == "invalido" and holding_confirmed(title_key, cutoff),
        "pendencia_material": ("VP na data-base pendente" in method or method.startswith(("Baixa sem data", "Conflito:", "Saldo sem"))),
    }


def compute_summary(target, details, funding):
    registry = json.loads(funding.terms.REGISTRY.read_text(encoding="utf-8"))
    sub_confirmation = json.loads(SUB_QUANTITIES.read_text(encoding='utf-8')) if SUB_QUANTITIES.exists() else None
    holidays = set(registry["businessCalendar"]["holidays"])
    terms_qty = {row["number"]: row.get("b3", {}).get("issuedQuantity") for row in registry["series"] if row["kind"] == "sub"}
    engine = funding.engine
    controls = funding.build_funding_pu(target.isoformat(), engine.parse_di_rates(), holidays)
    manifest = engine.load_json_assignment(ROOT / "data/cra-manifest.js")
    for item in manifest:
        cra = item["craId"]
        if not cra.startswith("cra-carteira-"):
            continue
        number_cra = int(cra.rsplit("-", 1)[1])
        source = item["currentDate"]
        if source > target.isoformat():
            raise ValueError(f"{cra}: data-base anterior a fonte atual; selecione uma posicao historica de caixa e funding.")
        snapshot = engine.load_snapshot(ROOT / f"data/cras/{cra}/{source}.js", cra, source)
        rows = details.get(number_cra)
        method_sum = lambda field: sum((row[field] for row in rows), ZERO) if rows is not None else None
        cash = snapshot["caixa"]["total"]
        cash = money(cash) if cash is not None else None
        cash_assumption = cash is None and (number_cra, target) in TEMPORARY_ZERO_CASH
        if cash_assumption:
            cash = money(ZERO)
        vp = method_sum("vp_motor")
        holdings = snapshot["passivo"]
        active = [cota for cota in holdings["cotas"] if cota.get("ehFunding") and cota.get("valor")]
        funding_total = ZERO if holdings["fundingTotal"] is not None else None
        through = []
        funding_notes = []
        for cota in active:
            series = controls["vehicles"][cra]["series"][cota.get("ifCodigo") or cota["classe"]]
            last_row = series["rows"][-1] if series["rows"] else None
            through.append(series["through"])
            if funding_total is not None:
                funding_total += Decimal(str(last_row["valorReais"] if last_row else cota["valor"]))
            if series.get("reason"):
                funding_notes.append(f"{cota.get('ifCodigo') or cota['classe']}: {series['reason']}")
            elif cota.get("dataVencimentoIso") and cota["dataVencimentoIso"] < target.isoformat():
                funding_notes.append(f"{cota.get('ifCodigo') or cota['classe']}: saldo apos vencimento cadastrado")
        # Keep PU x quantity precision through the residual and round only its display.
        sub_qty = confirmed_sub_quantity(target, sub_confirmation)
        qty_basis = (f"Quantidade integralizada confirmada por Leonardo em {sub_confirmation['confirmedOn']}"
                     if sub_qty is not None else '')
        if sub_qty is None:
            sub_qty = holdings.get("subordinadaQuantidade") or None
            qty_basis = "Posicao do controle" if sub_qty else ""
        for entry in sorted(item["dates"], key=lambda record: record["dateKey"], reverse=True):
            if sub_qty:
                break
            if entry["dateKey"] >= source:
                continue
            key = entry["dateKey"]
            old = engine.load_snapshot(ROOT / f"data/cras/{cra}/{key}.js", cra, key)
            sub_qty = old["passivo"].get("subordinadaQuantidade") or None
            if sub_qty:
                qty_basis = f"Quantidade da ultima posicao com Sub em {key}"
        if not sub_qty and terms_qty.get(number_cra):
            sub_qty = int(terms_qty[number_cra].replace(".", ""))
            qty_basis = "Quantidade emitida na B3; integralizacao da Sub nao confirmada"
        if not sub_qty:
            sub_qty = 100
            qty_basis = "Premissa gerencial do motor; quantidade da Sub nao confirmada"
        asset_total = vp + cash if vp is not None and cash is not None else None
        sub_total = asset_total - funding_total if asset_total is not None and funding_total is not None else None
        flags = []
        if rows is None and number_cra in AWAITING_PORTFOLIOS:
            flags.append("Sem titulos lancados; aguardando a relacao. Sub ainda nao apurada")
        elif rows is None:
            flags.append("CRA ausente no CSV; carteira nao presumida zero")
        if cash_assumption:
            flags.append("Caixa zero por premissa temporaria; saldo nao informado")
        elif cash is None:
            flags.append("Caixa nao informado")
        elif source != target.isoformat():
            flags.append(f"Previa: caixa de {source} reutilizado sem projetar movimentacoes")
        if "nao confirmada" in qty_basis:
            flags.append("PU indicativo: quantidade integralizada da Sub pendente")
        if funding_total is None:
            flags.append("Funding nao informado")
        if vp and funding_total == 0:
            flags.append("Carteira ativa com funding zerado no controle; conciliar")
        if sub_total is not None and sub_total < 0:
            flags.append("Residual negativo; nao e fechamento")
        pending = sum(row["pendencia_material"] for row in rows or [])
        if pending:
            flags.append(f"{pending} lastros com pendencia; residual parcial")
        flags.extend(funding_notes)
        yield {
            "cra": number_cra, "data_base_vp": target,
            "lastros": len(rows) if rows is not None else 0 if number_cra in AWAITING_PORTFOLIOS else None,
            "titulos_com_vp": sum(row["vp_motor"] > 0 for row in rows) if rows is not None else None,
            "vp_apurado_sem_pdd": vp, "pdd": ZERO,
            "caixa_ultimo_informado": cash if not cash_assumption else None,
            "caixa_usado_no_calculo": cash, "data_caixa": source if cash is not None and not cash_assumption else None,
            "ativo_indicativo": asset_total, "funding_sr_mez": funding_total,
            "datas_funding": ", ".join(sorted(set(through))) or (source if funding_total is not None else ""),
            "vp_menos_funding_sem_caixa": vp - funding_total if vp is not None and funding_total is not None else None,
            "valor_sub_indicativo": sub_total if not pending else None, "quantidade_sub": sub_qty, "base_quantidade_sub": qty_basis,
            "pu_sub_indicativo": (sub_total / Decimal(str(sub_qty))).quantize(Decimal(".00000001"), rounding=ROUND_HALF_UP)
            if sub_total is not None and not pending else None,
            "residual_parcial_antes_dos_lastros_pendentes": sub_total if pending else None,
            "observacoes": "; ".join(flags),
        }


def write_csv(path, rows):
    def cell(value):
        if isinstance(value, (float, Decimal)):
            return str(value).replace(".", ",")
        if isinstance(value, date):
            return value.strftime("%d/%m/%Y")
        if isinstance(value, str) and value.startswith(("=", "+", "-", "@")):
            return "'" + value
        return value
    with path.open("w", encoding="utf-8-sig", newline="") as stream:
        writer = csv.DictWriter(stream, rows[0].keys(), delimiter=";")
        writer.writeheader()
        for row in rows:
            writer.writerow({key: cell(value) for key, value in row.items()})


def main():
    parser = argparse.ArgumentParser(description="Precifica o GER004 e concilia o residual indicativo dos CRAs Carteira.")
    parser.add_argument("csv", type=Path)
    parser.add_argument("--date", required=True, type=date.fromisoformat)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    pricing = load_module("asset_pricing", ROOT / "financial-performance-tracking/scripts/import-confina-portfolio.py")
    funding = load_module("funding_pu", ROOT / "scripts/refresh-funding-pu.py")
    rates = funding.engine.parse_di_rates()
    holidays = pricing.BRAZIL_MARKET_HOLIDAYS | set(json.loads(
        funding.terms.REGISTRY.read_text(encoding="utf-8"))["businessCalendar"]["holidays"])
    groups = read_titles(args.csv)
    details = defaultdict(list)
    for (cra, lastro), group in sorted(groups.items()):
        details[cra].append({"cra": cra, "lastro": lastro,
                             **classify(group, args.date, pricing, (cra, lastro), rates, holidays)})
    summary = list(compute_summary(args.date, details, funding))
    args.output.mkdir(parents=True, exist_ok=True)
    write_csv(args.output / "subordinadas-por-cra.csv", summary)
    write_csv(args.output / "vp-por-lastro.csv", [row for group in details.values() for row in group])
    for cra in sorted(MEMORY_CRAS & details.keys()):
        write_csv(args.output / f"memoria-vp-cra-{cra}.csv", details[cra])
    print(json.dumps({"linhas": sum(map(len, groups.values())), "lastros": len(groups), "cras_csv": len(details),
                      "vp_motor": sum(row["vp_apurado_sem_pdd"] or ZERO for row in summary),
                      "sub_com_previa": sum(row["valor_sub_indicativo"] is not None for row in summary)},
                     default=str))


if __name__ == "__main__":
    main()
