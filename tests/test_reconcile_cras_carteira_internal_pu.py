import copy
import importlib.util
import json
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('internal_pu', ROOT / 'scripts/reconcile-cras-carteira-internal-pu.py')
revision = importlib.util.module_from_spec(spec)
spec.loader.exec_module(revision)


class InternalPuReviewTests(unittest.TestCase):
    def setUp(self):
        self.holidays = set(json.loads(revision.review.REGISTRY.read_text(encoding='utf-8'))['businessCalendar']['holidays'])

    def get_series(self, code):
        cra = f'cra-carteira-{revision.RULES[code][0]}'
        date = revision.CUTOFF
        snapshot = revision.engine.load_snapshot(ROOT / f'data/cras/{cra}/{date}.js', cra, date)
        return next(c for c in snapshot['passivo']['cotas'] if c['ifCodigo'] == code)

    def test_reconciliation_preserves_quantities_and_payment_amounts(self):
        expected = {'CRA026000MH': 731.84759952, 'CRA026000MI': 1149.64827260,
                    'CRA026000S8': 1076.54153800, 'CRA0260020F': 973.14967579,
                    'CRA0260020G': 1083.93434800, 'CRA02600590': 1030.77020894}
        for code, target in expected.items():
            with self.subTest(code=code):
                series = self.get_series(code)
                quantities = [r['quantidade'] for r in series['historicoPu']]
                events = [e['valorEventoReais'] for e in series['eventosAplicados']]
                revision.replay(series, code, self.holidays, revision.engine.DI_RATES)
                self.assertAlmostEqual(series['pu'], target, places=8)
                self.assertEqual([r['quantidade'] for r in series['historicoPu']], quantities)
                self.assertEqual([e['valorEventoReais'] for e in series['eventosAplicados']], events)
                self.assertAlmostEqual(series['valor'], series['pu'] * series['quantidade'], places=6)
                once = copy.deepcopy(series)
                revision.replay(series, code, self.holidays, revision.engine.DI_RATES)
                self.assertEqual(series, once)

    def test_rate_change_uses_d_minus_two_and_skips_holidays(self):
        code = 'CRA0260020F'
        cota = self.get_series(code)
        revision.replay(cota, code, self.holidays, revision.engine.DI_RATES)
        history = {row['dataIso']: row for row in cota['historicoPu']}
        self.assertEqual(history['2026-08-07']['dataTaxaDiIso'], '2026-08-05')
        self.assertEqual(history['2026-09-18']['dataTaxaDiIso'], '2026-09-16')
        self.assertAlmostEqual(history['2026-09-18']['taxaDiUtilizadaDia'], .0005166)
        self.assertEqual(history['2026-10-12']['fatorDiario'], 1)
        self.assertEqual(history['2026-10-12']['puAtualizado'], history['2026-10-09']['puAtualizado'])

    def test_missing_rate_stops_recalculation(self):
        code = 'CRA026000S8'
        rates = dict(revision.engine.DI_RATES)
        del rates['2026-06-10']
        with self.assertRaisesRegex(ValueError, 'DI historico indisponivel'):
            revision.replay(self.get_series(code), code, self.holidays, rates)

    def test_confirmed_62_date_is_not_pending(self):
        code = 'CRA0260020G'
        cota = self.get_series(code)
        result = revision.replay(cota, code, self.holidays, revision.engine.DI_RATES)
        self.assertEqual(cota['revisaoInternaPu']['inicio'], '2026-06-05')
        self.assertIsNone(result['pendencia'])
        self.assertAlmostEqual(result['puRevisado'], 1083.93434800, places=8)

    def test_51_payment_matches_documented_rateio(self):
        code = 'CRA026000MH'
        cota = self.get_series(code)
        revision.replay(cota, code, self.holidays, revision.engine.DI_RATES)
        event = next(e for e in cota['eventosAplicados'] if e['dataIso'] == '2026-08-17')
        self.assertAlmostEqual(event['puJuros'] * event['quantidadeNoEvento'], 110661.44, places=2)
        self.assertAlmostEqual(event['puAmortizacao'] * event['quantidadeNoEvento'], 1844338.56, places=2)
        self.assertAlmostEqual(event['puAposEvento'], 704.39281942, places=8)

    def test_73_unpaid_interest_changes_principal_without_a_second_payment(self):
        code = revision.INCORPORATION_CODE
        cota = self.get_series(code)
        revision.replay(cota, code, self.holidays, revision.engine.DI_RATES)
        events = [e for e in cota['eventosAplicados'] if e['dataIso'] == revision.INCORPORATION_DATE]
        self.assertEqual(len(events), 1)
        event = events[0]
        self.assertEqual(event['valorEventoReais'], 263000)
        self.assertEqual(event['valorAmortizacao'], 0)
        self.assertAlmostEqual(event['puAntesEvento'], 1017.01566800, places=8)
        self.assertAlmostEqual(event['puAposEvento'], 1009.68976270, places=8)
        self.assertAlmostEqual(event['valorJurosIncorporados'], 347862.48, places=2)
        history = {row['dataIso']: row for row in cota['historicoPu']}
        paid = history[revision.INCORPORATION_DATE]
        following = history['2026-09-21']
        self.assertEqual(paid['diasUteisAntesEvento'], 21)
        self.assertEqual(paid['diasUteisPeriodo'], 0)
        self.assertEqual(paid['dataReferenciaTaxaDiIso'], '2026-09-16')
        self.assertEqual(following['diasUteisPeriodo'], 1)
        self.assertEqual(following['diasUteis'], paid['diasUteis'] + 1)
        self.assertEqual(following['puBaseCalculo'], event['puAposEvento'])
        self.assertEqual(following['valorEventoReais'], 0)


if __name__ == '__main__':
    unittest.main()
