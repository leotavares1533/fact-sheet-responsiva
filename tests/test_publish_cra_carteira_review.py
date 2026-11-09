import copy
import importlib.util
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def load(name, path):
    spec = importlib.util.spec_from_file_location(name, path)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


review = load('review_publication', ROOT/'scripts/publish-cra-carteira-review.py')
funding = load('review_funding', ROOT/'scripts/refresh-funding-pu.py')


class SubscriptionTests(unittest.TestCase):
    def setUp(self):
        self.cota = dict(ifCodigo='CODE', quantidade=10, pu=1001, valor=10010,
            eventosAplicados=[], historicoPu=[
                dict(dataIso='2026-11-03', quantidade=10, puAtualizado=1000, valorReais=10000),
                dict(dataIso='2026-11-04', quantidade=10, puAtualizado=1000.5, valorReais=10005),
                dict(dataIso='2026-11-05', quantidade=10, puAtualizado=1001, valorReais=10010)])
        self.entry = dict(date='2026-11-04', quantity=2, unitPrice='1000.49000000',
                          amount='2000.98', source='Confirmed', ifCodigo='CODE')

    def test_quantity_changes_only_on_and_after_subscription(self):
        old = copy.deepcopy(self.cota)
        new = review.book_subscription(self.cota, self.entry, funding)
        self.assertEqual(self.cota, old)
        self.assertEqual([r['quantidade'] for r in new['historicoPu']], [10,12,12])
        self.assertEqual([r['puAtualizado'] for r in new['historicoPu']], [1000,1000.5,1001])
        self.assertEqual(new['valor'], 12012)
        self.assertEqual(new['eventosAplicados'][0]['valorEventoReais'], 2000.98)
        self.assertAlmostEqual(new['eventosAplicados'][0]['diferencaPuIntegralizacaoControle'], -.01)

    def test_idempotent(self):
        new = review.book_subscription(self.cota, self.entry, funding)
        self.assertEqual(review.book_subscription(new, self.entry, funding), new)

    def test_missing_date_is_not_silently_skipped(self):
        self.entry['date'] = '2026-11-02'
        with self.assertRaises(ValueError):
            review.book_subscription(self.cota, self.entry, funding)

    def test_second_subscription_does_not_rewrite_earlier_quantities(self):
        first = review.book_subscription(self.cota, self.entry, funding)
        second = {**self.entry, 'date':'2026-11-05', 'quantity':3, 'amount':'3003.00', 'unitPrice':'1001'}
        new = review.book_subscription(first, second, funding)
        self.assertEqual([r['quantidade'] for r in new['historicoPu']], [10,12,15])
        self.assertEqual(new['quantidade'], 15)


if __name__ == '__main__':
    unittest.main()
