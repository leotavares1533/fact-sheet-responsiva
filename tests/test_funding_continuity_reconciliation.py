import copy
import importlib.util
import json
from pathlib import Path
import unittest
from decimal import Decimal

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('continuity_reconciliation', ROOT/'scripts/reconcile-funding-continuity.py')
review = importlib.util.module_from_spec(spec)
spec.loader.exec_module(review)


class FundingContinuityReconciliationTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.holidays = set(json.loads(review.terms.REGISTRY.read_text('utf-8'))['businessCalendar']['holidays'])
        cls.rates = review.engine.parse_di_rates()

    def series(self, code):
        rule = review.RULES[code]
        cra = f'cra-carteira-{rule["cra"]}'
        snapshot = review.engine.load_snapshot(ROOT/f'data/cras/{cra}/2026-11-09.js', cra, '2026-11-09')
        return next(c for c in snapshot['passivo']['cotas'] if c.get('ifCodigo') == code)

    def revised(self, code):
        return review.replay(self.series(code), review.RULES[code], '2026-11-09', self.holidays, self.rates)

    def test_payment_totals_and_input_are_preserved(self):
        for code, rule in review.RULES.items():
            with self.subTest(code=code):
                original = self.series(code)
                saved = copy.deepcopy(original)
                revised = review.replay(original, rule, '2026-11-09', self.holidays, self.rates)
                self.assertEqual(original, saved)
                before = [(e['dataIso'], e.get('valorEventoReais')) for e in original['eventosAplicados']]
                after = [(e['dataIso'], e.get('valorEventoReais')) for e in revised['eventosAplicados']]
                self.assertEqual(before, after)
                self.assertFalse(any(e['dataIso'] > '2026-11-09' for e in revised['eventosAplicados']))

    def test_47_uses_d1_and_keeps_the_approved_july_closing_balance(self):
        revised = self.revised('CRA02500B49')
        rows = {r['dataIso']: r for r in revised['historicoPu']}
        self.assertEqual(rows['2026-07-30']['puAtualizado'], 387.37573334)
        self.assertEqual(rows['2026-08-06']['dataTaxaDiIso'], '2026-08-05')
        self.assertEqual(rows['2026-08-07']['dataTaxaDiIso'], '2026-08-06')

    def test_changed_regimes_use_d2_and_preserve_the_switch_opening_pu(self):
        for code in ('CRA02500B9X', 'CRA026000B7', 'CRA026000B9', 'CRA026000MB'):
            with self.subTest(code=code):
                original = self.series(code)
                prior = next(r for r in original['historicoPu'] if r['dataIso'] == '2026-07-23')
                revised = self.revised(code)
                rows = {r['dataIso']: r for r in revised['historicoPu']}
                self.assertEqual(rows['2026-07-23']['puAtualizado'], prior['puAtualizado'])
                self.assertEqual(rows['2026-07-24']['dataTaxaDiIso'], '2026-07-22')
                self.assertEqual(rows['2026-09-21']['dataTaxaDiIso'], '2026-09-17')
                self.assertEqual(rows['2026-09-07']['puAtualizado'], rows['2026-09-06']['puAtualizado'])

    def test_september_financial_only_payments_do_not_reduce_the_pu_or_reset_interest(self):
        for code in ('CRA026000B7', 'CRA026000B9'):
            revised = self.revised(code)
            rows = {r['dataIso']: r for r in revised['historicoPu']}
            self.assertEqual(rows['2026-09-04']['valorEventoReais'], 0)
            self.assertEqual(rows['2026-09-04']['valorNominal'], rows['2026-09-03']['valorNominal'])
            self.assertEqual(rows['2026-09-04']['diasUteisPeriodo'], rows['2026-09-03']['diasUteisPeriodo']+1)

    def test_55_august_payment_closes_to_the_confirmed_amount(self):
        revised = self.revised('CRA026000MB')
        event = next(e for e in revised['eventosAplicados'] if e['dataIso'] == '2026-08-17')
        self.assertEqual(event['quantidadeRateio'], 13300)
        self.assertEqual(event['valorEventoReais'], 4920000)
        self.assertAlmostEqual(event['valorJuros']+event['valorAmortizacao'], 4920000, places=6)
        self.assertLess(abs(Decimal(str(event['puJuros']))+Decimal(str(event['puAmortizacao']))
                            -Decimal(4920000)/13300), Decimal('.00000002'))

    def test_corrected_histories_remain_stable_when_projection_is_split(self):
        for code in review.RULES:
            with self.subTest(code=code):
                cota = self.revised(code)
                one = review.funding.extend_series(cota, '2026-11-09', '2026-11-13', self.holidays,
                                                    self.rates, forecast_days=10)
                staged = copy.deepcopy(cota)
                start = '2026-11-09'
                for target in ('2026-11-10', '2026-11-11', '2026-11-12', '2026-11-13'):
                    new = review.funding.extend_series(staged, start, target, self.holidays,
                                                      self.rates, forecast_days=10)
                    staged['historicoPu'].extend(new['rows'])
                    staged['pu'] = new['rows'][-1]['puAtualizado']
                    start = target
                self.assertAlmostEqual(staged['pu'], one['rows'][-1]['puAtualizado'], places=8)


if __name__ == '__main__':
    unittest.main()
