import importlib.util
import unittest
from decimal import Decimal
from datetime import date
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("ger004", ROOT / "scripts/process-cra-ger004.py")
GER = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(GER)
PRICING = GER.load_module("ger004_pricing", ROOT / "financial-performance-tracking/scripts/import-confina-portfolio.py")


def title(**changes):
    row = {"nome cra": "49a - CRA Carteira", "lastro": "416070", "source_line": 2,
           "status do titulo": "EM CARTEIRA", "status do pagamento": "VINCENDO",
           "validacao do titulo": "VALIDO", "data de emissao": "01/09/2026",
           "data de vencimento": "30/12/2026", "data de cessao": "01/09/2026",
           "valor face": "1500", "valor aquisicao": "1000", "valor presente": "1100",
           "taxa desconto": "2", "taxa efetiva": "", "tipo de operacao": "Pre fixado",
           "valor pago": "0", "data do pagamento": "", "tipo de titulo": "NF",
           "base de dias": "252"}
    row.update(changes)
    return row


class Ger004Tests(unittest.TestCase):
    def test_confirmed_sub_quantity_is_current_not_a_backdated_event(self):
        confirmed = {'scope': 'cras_carteira', 'quantity': 100, 'positionFrom': '2026-11-05'}
        self.assertEqual(GER.confirmed_sub_quantity(date(2026, 11, 5), confirmed), 100)
        self.assertEqual(GER.confirmed_sub_quantity(date(2026, 11, 9), confirmed), 100)
        self.assertIsNone(GER.confirmed_sub_quantity(date(2026, 11, 4), confirmed))
        self.assertIsNone(GER.confirmed_sub_quantity(date(2026, 11, 5), None))

    def test_invalid_sub_quantity_is_not_a_plausible_zero(self):
        for quantity in [0, -1, True, 100.5]:
            with self.assertRaises(ValueError):
                GER.confirmed_sub_quantity(date(2026, 11, 5),
                    {'scope': 'cras_carteira', 'quantity': quantity, 'positionFrom': '2026-11-05'})

    def test_confirmation_applies_from_approved_date(self):
        self.assertFalse(GER.holding_confirmed((49, "416070"), date(2026, 10, 26)))
        self.assertTrue(GER.holding_confirmed((49, "416070"), date(2026, 11, 5)))
        self.assertFalse(GER.holding_confirmed((49, "other"), date(2026, 11, 5)))

    def test_confirmed_holding_not_excluded_by_stale_validation(self):
        row = title(**{"validacao do titulo": "INVALIDO"})
        result = GER.classify([row], date(2026, 11, 5), PRICING, (49, "416070"))
        self.assertGreater(result["vp_motor"], 0)
        self.assertTrue(result["validacao_manual_27_10"])

    def test_settlement_still_wins_over_holding_confirmation(self):
        row = title(**{"validacao do titulo": "INVALIDO", "status do titulo": "LIQUIDADO",
                       "data do pagamento": "03/11/2026", "valor pago": "1500"})
        result = GER.classify([row], date(2026, 11, 5), PRICING, (49, "416070"))
        self.assertEqual(result["vp_motor"], 0)

    def test_360_base_uses_calendar_days_and_existing_engine(self):
        row = title(**{"base de dias": "360"})
        end = date(2026, 11, 5)
        result = GER.classify([row], end, PRICING, (49, "416070"))
        expected = PRICING.accrued_value_from_rate(1000, PRICING.daily_rate_from_monthly(.02, 360),
                   "2026-09-01", end.isoformat(), day_count="calendar_exclusive", cap_value=1500)
        self.assertEqual(result["vp_motor"], GER.money(expected))
        self.assertEqual(result["dias_uteis_acumulados"], 65)
        self.assertEqual(result["base_dias"], 360)

    def test_overdue_is_unpaid_face_without_pdd(self):
        row = title(**{"status do titulo": "BAIXA PARCIAL", "data de vencimento": "01/10/2026",
                       "data do pagamento": "03/11/2026", "valor pago": "200"})
        result = GER.classify([row], date(2026, 11, 5), PRICING)
        self.assertEqual(result["vp_motor"], 1300)

    def test_partial_payment_stops_earning_on_its_payment_date(self):
        row = title(**{'status do titulo': 'BAIXA PARCIAL', 'base de dias': '360',
            'data de cessao': '01/09/2026', 'data do pagamento': '01/10/2026', 'valor pago': '200'})
        target = date(2026, 11, 5)
        result = GER.classify([row], target, PRICING)
        daily = PRICING.daily_rate_from_monthly(.02, 360)
        before = PRICING.accrued_value_from_rate(1000, daily, '2026-09-01', '2026-10-01', day_count='calendar_exclusive')
        expected = PRICING.accrued_value_from_rate(before-200, daily, '2026-10-01', '2026-11-05', day_count='calendar_exclusive')
        self.assertEqual(result['vp_motor'], GER.money(expected))
        self.assertLess(result['vp_motor'], GER.money(PRICING.accrued_value_from_rate(1000, daily, '2026-09-01', '2026-11-05', day_count='calendar_exclusive')-200))

    def test_future_and_pre_acquisition_payments_are_not_deducted(self):
        master = title(**{'status do titulo': 'BAIXA PARCIAL', 'data do pagamento': '01/12/2026', 'valor pago': '200'})
        old = title(**{'valor face': '0', 'valor aquisicao': '0', 'valor presente': '0',
            'data do pagamento': '01/08/2026', 'valor pago': '100'})
        result = GER.classify([master, old], date(2026, 11, 5), PRICING)
        unadjusted = GER.classify([title()], date(2026, 11, 5), PRICING)
        self.assertEqual(result['vp_motor'], unadjusted['vp_motor'])
        self.assertEqual(result['pagamentos_parciais'], 0)

    def test_maturity_and_after_maturity_freeze_unpaid_face(self):
        row = title(**{'status do titulo': 'BAIXA PARCIAL', 'data de vencimento': '05/11/2026',
            'data do pagamento': '01/10/2026', 'valor pago': '200'})
        self.assertEqual(GER.classify([row], date(2026, 11, 5), PRICING)['vp_motor'], 1300)
        self.assertEqual(GER.classify([row], date(2026, 12, 1), PRICING)['vp_motor'], 1300)

    def test_payments_on_same_day_are_combined_without_double_accrual(self):
        master = title(**{'status do titulo': 'BAIXA PARCIAL', 'data do pagamento': '01/10/2026', 'valor pago': '150'})
        payment = title(**{'valor face': '0', 'valor aquisicao': '0', 'valor presente': '0',
            'data do pagamento': '01/10/2026', 'valor pago': '50'})
        single = {**master, 'valor pago': '200'}
        target = date(2026, 11, 5)
        self.assertEqual(GER.classify([master, payment], target, PRICING)['vp_motor'], GER.classify([single], target, PRICING)['vp_motor'])

    def test_confirmed_post_fixed_payment_is_dated_too(self):
        row = title(**{'nome cra': '47a - CRA Carteira', 'lastro': '417286',
            'status do titulo': 'BAIXA PARCIAL', 'tipo de operacao': 'Pos fixado', 'taxa desconto': '0,75',
            'data de cessao': '03/11/2026', 'data do pagamento': '04/11/2026', 'valor pago': '200'})
        rates = {d: {'fonte': 'Banco Central do Brasil - SGS 12', 'taxaDia': .001} for d in ['2026-11-04', '2026-11-05']}
        target = date(2026, 11, 5)
        result = GER.classify([row], target, PRICING, (47,'417286'), rates)
        factor = Decimal('1.001') * Decimal('1.0075') ** (Decimal(1)/21)
        expected = (Decimal(1000)*factor-200)*factor
        self.assertEqual(result['vp_motor'], GER.money(expected))

    def test_madeplant_uses_confirmed_cost_and_face_compounded_to_maturity(self):
        row = title(**{'nome cra': '50a - CRA Carteira', 'lastro': '426733', 'valor aquisicao': '4934312,68',
            'valor face': '4930895,61', 'data de cessao': '03/02/2026', 'data de vencimento': '25/03/2027',
            'base de dias': '360', 'taxa desconto': '2,1'})
        result = GER.classify([row], date(2026, 11, 5), PRICING, (50,'426733'))
        face = PRICING.accrued_value_from_rate(4930895.61, PRICING.daily_rate_from_monthly(.021,360),
            '2026-02-03','2027-03-25',day_count='calendar_exclusive')
        self.assertEqual(result['aquisicao'], Decimal('4930895.61'))
        self.assertEqual(result['face'], GER.money(face))
        self.assertEqual(result['face_fonte'], Decimal('4930895.61'))
        self.assertTrue(result['correcao_confirmada'])


if __name__ == "__main__":
    unittest.main()
