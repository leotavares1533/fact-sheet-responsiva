import copy
import importlib.util
import json
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('review56_59', ROOT/'scripts/reconcile-cra56-59-pu.py')
review = importlib.util.module_from_spec(spec)
spec.loader.exec_module(review)
funding = review.continuity.funding


class Funding56And59Corrections(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.holidays = set(json.loads(review.continuity.terms.REGISTRY.read_text('utf-8'))['businessCalendar']['holidays'])
        cls.rates = review.engine.parse_di_rates()

    def source(self, number, code):
        cra = f'cra-carteira-{number}'
        snapshot = review.engine.load_snapshot(ROOT/f'data/cras/{cra}/2026-11-09.js', cra, '2026-11-09')
        return snapshot, next(c for c in snapshot['passivo']['cotas'] if c.get('ifCodigo') == code)

    def test_56_excludes_april_holidays_without_changing_financial_events(self):
        _, cota = self.source(56, 'CRA026000RT')
        saved = copy.deepcopy(cota)
        revised = review.terms56.replay(cota, 'cra-carteira-56', '2026-11-09', self.holidays, self.rates)
        rows = {r['dataIso']:r for r in revised['historicoPu']}
        for holiday, prior in [('2026-04-03', '2026-04-02'), ('2026-04-21', '2026-04-20')]:
            self.assertIn(holiday, self.holidays)
            self.assertFalse(rows[holiday]['diaUtil'])
            self.assertEqual(rows[holiday]['puAtualizado'], rows[prior]['puAtualizado'])
            self.assertEqual(rows[holiday]['diasUteisPeriodo'], rows[prior]['diasUteisPeriodo'])
        self.assertEqual(rows['2026-05-18']['puAntesEvento'], 1036.90409)
        payment = next(e for e in revised['eventosAplicados'] if e['dataIso'] == '2026-08-28')
        self.assertEqual(payment['valorEventoReais'], 405000)
        self.assertEqual(payment['quantidadeRateio'], 19600)
        self.assertEqual(review.ledger(revised), review.ledger(cota))
        self.assertEqual(cota, saved)

    def test_59_preserves_legacy_history_and_continues_the_whole_pu(self):
        _, cota = self.source(59, 'CRA026000S7')
        saved = copy.deepcopy(cota)
        revised = review.continuity.repair_continuity(cota, '2026-11-09', self.holidays, self.rates)
        self.assertEqual([r for r in revised['historicoPu'] if r['dataIso'] <= '2026-10-27'],
                         [r for r in cota['historicoPu'] if r['dataIso'] <= '2026-10-27'])
        rows = {r['dataIso']:r for r in revised['historicoPu']}
        self.assertEqual(rows['2026-10-28']['puBaseCalculo'], 867.82372539)
        self.assertEqual(rows['2026-10-28']['valorNominal'], 850.89581765)
        self.assertEqual(rows['2026-11-09']['puAtualizado'], 873.09977254)
        self.assertEqual(review.ledger(revised), review.ledger(cota))
        self.assertEqual(cota, saved)

    def test_future_import_uses_the_same_corrected_59_basis(self):
        snapshot, cota = self.source(59, 'CRA026000S7')
        expected = funding.extend_series(cota, '2026-11-09', '2026-11-11', self.holidays, self.rates)
        projected = review.engine.project_cota_to_date(snapshot, cota, '2026-11-11')
        self.assertTrue(cota['usarMotorFundingContratual'])
        self.assertEqual(projected['pu'], expected['rows'][-1]['puAtualizado'])
        self.assertEqual(projected['historicoPu'][-1]['puBaseCalculo'], 867.82372539)


if __name__ == '__main__':
    unittest.main()
