import importlib.util
import sys
import unittest
from decimal import Decimal
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parents[1] / 'scripts'))
import cra_ger004_v2 as v2


class NewExportTests(unittest.TestCase):
    def test_currency_and_fractional_quote(self):
        self.assertEqual(v2.decimal_br('R$ 1.234.567,89'), Decimal('1234567.89'))
        raw = {key: '' for key in v2.REQUIRED}
        raw.update({'Veículo': '47ª - CRA Carteira', 'Lastro': '\t417286',
            'Base de Dias': '252 dias úteis', 'Taxa Cessão': '0,007500', 'Taxa Efetiva': '0,10'})
        key, row = v2.canonical(raw, 2)
        self.assertEqual(key, (47, '417286'))
        self.assertEqual(Decimal(row['taxa desconto']), Decimal('.75'))
        self.assertEqual(row['base de dias'], '252')

    def test_preserve_dated_payments_not_aggregate_on_last_date(self):
        old = [{'data do pagamento': '01/07/2026', 'valor pago': '10'},
               {'data do pagamento': '01/08/2026', 'valor pago': '20'}]
        master = {'data do pagamento': '01/08/2026', 'valor pago': '30'}
        rows = v2.payment_rows(master, old, [], (1, '123'))
        self.assertEqual([r['data do pagamento'] for r in rows[1:]], ['01/07/2026', '01/08/2026'])
        self.assertEqual(sum(Decimal(r['valor pago']) for r in rows), 30)
        self.assertEqual(rows[1]['valor aquisicao'], '0')

    def test_append_only_increment_for_new_payment(self):
        rows = v2.payment_rows({'data do pagamento': '01/09/2026', 'valor pago': '45'},
                              [{'data do pagamento': '01/08/2026', 'valor pago': '30'}], [], (1, '123'))
        self.assertEqual([r['valor pago'] for r in rows], ['0', '30', '15'])

    def test_conflicting_total_does_not_rewrite_history(self):
        issues = []
        rows = v2.payment_rows({'data do pagamento': '01/08/2026', 'valor pago': '25'},
                              [{'data do pagamento': '01/08/2026', 'valor pago': '30'}], issues, (1, '123'))
        self.assertEqual(rows[-1]['valor pago'], '30')
        self.assertEqual(len(issues), 1)

    def test_missing_active_requires_previous_memory(self):
        with self.assertRaises(ValueError):
            v2.preserve_missing({}, {}, {(47, '417286'): {'lastro': '417286'}})
        groups = {}
        result = v2.preserve_missing(groups, {(47, '417286'): [{'vp': '100'}]},
                                     {(47, '417286'): {'lastro': '417286', 'valorPresenteDia': 100}})
        self.assertEqual(len(result), 1)
        self.assertEqual(groups[(47, '417286')][0]['vp'], '100')

    def test_replacement_parcels_do_not_duplicate_old_contract(self):
        old = {'valor aquisicao': '100', 'valor face': '120', 'numero nf': 'BMG-1',
               'parcela': '1', 'nome da cedente': 'BMG', 'nome de cessao': 'BMG OP', 'tipo de titulo': 'NC'}
        raw = {'Nome Cedente': 'BMG', 'Nome Sacado': 'BMG', 'Número do Ativo': 'BMG',
               'Nome Cessão': 'BMG OP', 'Tipo do Ativo': 'NC', 'Parcela do Ativo': '2',
               'Data Cessão': '01/01/2026', 'Data Vencimento': '01/12/2026',
               'Valor Aquisição': '50', 'Valor Nominal': '60', 'Valor Aberto': '60'}
        groups = {(47, '1000001'): [{'data de cessao': '01/01/2026'}]}
        links = v2.preserve_migrated_contracts(groups, {(47, '1000001'): raw},
                    {(47, '417286'): [old]}, {(47, '417286'): {'dataAquisicaoIso': '2026-01-01'}})
        self.assertNotIn((47, '1000001'), groups)
        self.assertEqual(groups[(47, '417286')], [old])
        self.assertEqual(links[0]['lastroAnterior'], '417286')

    def test_same_party_new_purchase_is_not_suppressed(self):
        old = {'valor aquisicao': '100', 'valor face': '120', 'numero nf': 'OLD-1',
               'parcela': '1', 'nome da cedente': 'BMG', 'nome de cessao': 'OLD OP', 'tipo de titulo': 'NC'}
        raw = {'Nome Cedente': 'BMG', 'Nome Sacado': 'BMG', 'Número do Ativo': 'NEW',
               'Nome Cessão': 'NEW OP', 'Tipo do Ativo': 'NC'}
        groups = {(47, '1000001'): [{'data de cessao': '01/11/2026'}]}
        links = v2.preserve_migrated_contracts(groups, {(47, '1000001'): raw},
                    {(47, '417286'): [old]}, {(47, '417286'): {'dataAquisicaoIso': '2026-01-01'}})
        self.assertIn((47, '1000001'), groups)
        self.assertEqual(links, [])


if __name__ == '__main__':
    unittest.main()
