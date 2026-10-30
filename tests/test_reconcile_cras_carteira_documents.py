import copy
import importlib.util
from decimal import Decimal
from pathlib import Path
import unittest

ROOT = Path(__file__).resolve().parents[1]


def load(name, filename):
    spec = importlib.util.spec_from_file_location(name, ROOT / 'scripts' / filename)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module


review = load('document_review_test', 'reconcile-cras-carteira-documents.py')
funding = load('funding_import_test', 'import-cras-fundings-cash.py')


class DocumentReviewTests(unittest.TestCase):
    def test_business_lag_skips_national_holiday(self):
        self.assertEqual(review.prior_business_day('2026-10-13', 2, {'2026-10-12'}), '2026-10-08')

    def test_quantity_is_not_final_quantity_before_later_subscriptions(self):
        rows = [{'date': '2026-08-10', 'quantity': 7780, 'status': 'realizado'},
                {'date': '2026-08-14', 'quantity': 3580, 'status': 'realizado'},
                {'date': '2026-10-26', 'quantity': 2850, 'status': 'realizado'}]
        self.assertEqual(review.quantity_on_date(rows, '2026-09-18'), 11360)
        self.assertEqual(review.quantity_on_date(rows, '2026-10-27'), 14210)

    def test_di_rounding_at_eight_decimal_places(self):
        below = review.documented_pu(1000, Decimal('1.0000000049'), 0, 0)
        above = review.documented_pu(1000, Decimal('1.0000000051'), 0, 0)
        self.assertEqual(below['pu'], 1000)
        self.assertEqual(above['pu'], 1000.00001)

    def test_explicit_additional_first_period_day_and_counterfactual(self):
        entry = {'sourceTerms': {'firstIntegration': '2026-10-05'}, 'integrations': [
            {'date': '2026-10-05', 'quantity': 10, 'status': 'realizado'},
            {'date': '2026-10-07', 'quantity': 5, 'status': 'realizado'}]}
        terms = {'firstPeriodAdditionalBusinessDays': 1, 'lagBusinessDays': 2, 'spreadAa': 0}
        rates = {'2026-10-01': {'taxaDia': .0005}, '2026-10-02': {'taxaDia': .0005}}
        result = review.history_without_payments(entry, terms, '2026-10-06', set(), rates)
        self.assertEqual(result[-1]['puAtualizado'], 1001.00025)
        self.assertEqual(result[-1]['puSemDiaAdicionalPrimeiroPeriodo'], 1000.5)
        self.assertEqual(result[-1]['quantidade'], 10)
        self.assertEqual(result[-1]['diasUteisPeriodo'], 2)

    def test_missing_di_is_not_silently_filled(self):
        with self.assertRaisesRegex(ValueError, 'Missing official DI'):
            review.history_without_payments({'sourceTerms': {'firstIntegration': '2026-10-05'}, 'integrations': []},
                {'firstPeriodAdditionalBusinessDays': 1, 'lagBusinessDays': 2, 'spreadAa': .075}, '2026-10-05', set(), {})

    def test_control_without_additional_day_keeps_contractual_comparison_separate(self):
        entry = {'sourceTerms': {'firstIntegration': '2026-10-05'}, 'integrations': [
            {'date': '2026-10-05', 'quantity': 10, 'status': 'realizado'}]}
        terms = {'firstPeriodAdditionalBusinessDays': 1, 'controlFirstPeriodAdditionalBusinessDays': 0,
                 'lagBusinessDays': 2, 'spreadAa': 0}
        rates = {'2026-10-01': {'taxaDia': .0005}, '2026-10-02': {'taxaDia': .0005}}
        result = review.history_without_payments(entry, terms, '2026-10-06', set(), rates)
        self.assertEqual(result[0]['puAtualizado'], 1000)
        self.assertEqual(result[0]['fatorDiario'], 1)
        self.assertEqual(result[-1]['puAtualizado'], 1000.5)
        self.assertEqual(result[-1]['puContratualComDiaAdicional'], 1001.00025)
        self.assertEqual(result[-1]['diasUteisPeriodo'], 1)
        self.assertEqual(result[-1]['fator'], 1.0005)
        self.assertEqual(result[-1]['dataTaxaDi'], '02/10/2026')
        self.assertEqual(result[-1]['spreadAcumulado'], 0)

    def test_human_nonpayment_overrides_previous_event_metadata(self):
        entry = {'cra': 'cra-carteira-46', 'class': 'SR1', 'previous': {'quantidade': 1, 'eventosAplicados': [
            {'dataIso': '2026-10-07', 'tipo': 'juros_amortizacao'}]}, 'payments': [
            {'date': '2026-10-07', 'status': 'realizado', 'fields': {'valorjuros': 10, 'valoramortizacao': 20}}]}
        selected = funding.select_payments(entry, [], {'cra-carteira-46/SR1/2026-10-07': {'notExecuted': True}})
        self.assertEqual(selected[0]['status'], 'nao_efetivado')
        self.assertFalse(selected[0]['pending'])

    def test_reanchoring_59_preserves_cash_and_inputs(self):
        cota = {'classe': 'MEZA', 'ehFunding': True, 'pu': 850, 'quantidade': 10, 'valor': 8500,
                'historicoPu': [{'dataIso': '2026-10-27', 'puAtualizado': 850, 'valorNominal': 830, 'valorReais': 8500, 'quantidade': 10}],
                'importacaoFundingCaixa': {}, 'eventosAplicados': []}
        snapshots = {'cra-carteira-59': {'passivo': {'cotas': [cota]}, 'metadata': {}, 'caixa': {'total': 321}, 'ativo': {'total': None}}}
        source = {'positionDate': '2026-10-27', 'series': [{'cra': 'cra-carteira-59', 'class': 'MEZA',
            'sourceTerms': {'firstIntegration': '2026-10-27'}, 'integrations': [{'date': '2026-10-27', 'quantity': 10, 'status': 'realizado'}],
            'historyObserved': [{'date': '2026-10-27', 'pu': 867.82372539, 'principalPu': 850.89581765, 'sourceRow': 10}]}]}
        registry = {'series': [], 'eventDecisions': [{'scope': [], 'date': '2026-10-07'}], 'reviewDate': '2026-10-30', 'businessCalendar': {'holidays': []}}
        protected = copy.deepcopy((snapshots, source, registry))
        revised, _ = review.apply_document_review(snapshots, source, registry)
        self.assertEqual(revised['cra-carteira-59']['passivo']['cotas'][0]['pu'], 867.82372539)
        self.assertEqual(revised['cra-carteira-59']['caixa'], {'total': 321})
        self.assertEqual((snapshots, source, registry), protected)

    def test_missing_funding_stays_unavailable_not_zero(self):
        snapshots = {'cra-carteira-56': {'passivo': {'cotas': [], 'fundingTotal': None}, 'metadata': {}, 'caixa': {'total': 123}, 'ativo': {'total': None}}}
        source = {'positionDate': '2026-10-27', 'series': []}
        registry = {'series': [], 'eventDecisions': [{'scope': [], 'date': '2026-10-07'}], 'reviewDate': '2026-10-30', 'businessCalendar': {'holidays': []}}
        revised, _ = review.apply_document_review(snapshots, source, registry)
        self.assertIsNone(revised['cra-carteira-56']['passivo']['fundingTotal'])

    def test_payment_uses_historic_stock_and_does_not_deduct_cash_twice(self):
        entry = {'sheet':'74 PU SR', 'sourceTerms':{'firstIntegration':'2026-09-18'},
            'integrations':[{'date':'2026-09-18','quantity':11360,'status':'realizado'}, {'date':'2026-10-26','quantity':2850,'status':'realizado'}],
            'historyObserved':[{'date':'2026-09-18','pu':1018.997252,'principalPu':1000,'sourceRow':1}]}
        event = {'date':'2026-09-18','quantityAtEvent':11360,'principalBefore':1000,'interestPuApproved':18.997252,'amount':750000}
        rows, journal = review.history_after_confirmed_payment(entry, {'lagBusinessDays':2,'spreadAa':.04}, event, '2026-09-18', set(), {})
        self.assertEqual(rows[-1]['puAtualizado'], 952.97612523)
        self.assertAlmostEqual(journal['valorJuros'], 215808.78272, places=6)
        self.assertAlmostEqual(journal['valorAmortizacao'], 534191.21728, places=6)
        self.assertEqual(journal['quantidadeNoEvento'], 11360)
        wrong = {**event,'quantityAtEvent':14210}
        with self.assertRaisesRegex(ValueError, 'historical subscription'):
            review.history_after_confirmed_payment(entry, {'lagBusinessDays':2,'spreadAa':.04}, wrong, '2026-09-18', set(), {})

    def test_newly_confirmed_nonpayment_date_is_not_hardcoded_to_october(self):
        snapshots = {'cra-carteira-63': {'passivo':{'cotas':[{'classe':'SR1','ehFunding':True,'eventosAplicados':[
            {'dataIso':'2026-08-07','tipo':'juros_amortizacao'}],'pu':500,'valor':500,'quantidade':1,'historicoPu':[]} ]},
            'caixa':{'total':123},'ativo':{'total':None},'metadata':{}}}
        entry = {'cra':'cra-carteira-63','class':'SR1','sourceTerms':{'firstIntegration':'2026-10-27'},
            'integrations':[],'historyObserved':[{'date':'2026-10-27','pu':1048,'principalPu':1000,'sourceRow':1}]}
        registry = {'series':[], 'eventDecisions':[{'date':'2026-08-07','status':'nao_efetivado','scope':['cra-carteira-63/SR1']}],
            'reviewDate':'2026-10-30','businessCalendar':{'holidays':[]}}
        revised, _ = review.apply_document_review(snapshots, {'positionDate':'2026-10-27','series':[entry]}, registry)
        self.assertEqual(revised['cra-carteira-63']['passivo']['cotas'][0]['eventosAplicados'], [])
        self.assertEqual(revised['cra-carteira-63']['caixa']['total'], 123)


if __name__ == '__main__':
    unittest.main()
