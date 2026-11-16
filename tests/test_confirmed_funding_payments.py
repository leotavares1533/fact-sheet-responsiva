import copy
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest
from unittest import mock


spec = importlib.util.spec_from_file_location('confirmed_funding',Path(__file__).resolve().parents[1]/'scripts/refresh-funding-pu.py')
funding = importlib.util.module_from_spec(spec)
spec.loader.exec_module(funding)


class ConfirmedFundingPaymentTests(unittest.TestCase):
    def setUp(self):
        self.payment=dict(id='test-payment',cra='cra-carteira-test',ifCodigo='CRA-TEST',date='2026-10-30',
            interestPu='9',amortizationPu='100',unpaidInterestTreatment='retain',confirmed=True,
            confirmedOn='2026-11-16',source='Confirmed test')
        self.series=dict(ifCodigo='CRA-TEST',quantidade=10,pu=1010,principalResidual=1000,
            metodo='percentual_di_252',percentualIndexador=1,lagBusinessDays=0,dataVencimentoIso='2030-01-01',
            historicoPu=[dict(dataIso='2026-10-29',puAtualizado=1010,valorNominal=1000,puBaseCalculo=1000,
                diasUteis=20,diasUteisPeriodo=20,fatorDiAcumulado=1.01,quantidade=10,valorReais=10100)])
        self.rates={k:dict(taxaDia=.001,fonte='Banco Central do Brasil - SGS 12')
                    for k in ['2026-10-30','2026-11-02','2026-11-03']}

    def extend(self,target='2026-10-30',source='2026-10-29',series=None):
        with mock.patch.object(funding,'confirmed_payments',return_value=[self.payment]):
            return funding.extend_series(series or self.series,source,target,set(),self.rates)

    def test_interest_and_amortization_reduce_pu_and_principal_not_quantity(self):
        result=self.extend()
        row=result['rows'][-1]
        self.assertEqual(row['puAntesEvento'],1011.01)
        self.assertEqual(row['puAtualizado'],902.01)
        self.assertEqual(row['valorNominal'],900)
        self.assertEqual(row['quantidade'],10)
        self.assertEqual(row['puJuros'],2.01)
        self.assertEqual(row['diasUteisPeriodo'],0)
        self.assertEqual(row['valorEventoReais'],1090)
        self.assertEqual(result['events'][0]['confirmationId'],'test-payment')
        self.assertEqual(self.series['pu'],1010)

    def test_retained_interest_does_not_silently_capitalize(self):
        row=self.extend('2026-11-02')['rows'][-1]
        self.assertEqual(row['puAtualizado'],902.91)
        self.assertEqual(row['valorNominal'],900)
        self.assertEqual(row['diasUteisPeriodo'],1)
        self.assertEqual(row['diasUteis'],22)

    def test_confirmed_capitalization_resets_the_base(self):
        self.payment['unpaidInterestTreatment']='capitalize'
        rows=self.extend('2026-11-02')['rows']
        self.assertEqual(rows[0]['puJurosIncorporados'],2.01)
        self.assertEqual(rows[0]['valorNominal'],902.01)
        self.assertEqual(rows[0]['puJuros'],0)
        self.assertEqual(rows[-1]['puAtualizado'],902.91201)

    def test_pending_treatment_stops_only_after_the_confirmed_payment(self):
        self.payment['unpaidInterestTreatment']='pending'
        result=self.extend('2026-11-03')
        self.assertEqual(result['through'],'2026-10-30')
        self.assertEqual(result['rows'][-1]['puAtualizado'],902.01)
        self.assertTrue(result['rows'][-1]['capitalizacaoPendente'])
        self.assertIn('juros nao pagos',result['reason'])

    def test_booked_payment_is_not_deducted_twice(self):
        actual=self.extend()
        c=copy.deepcopy(self.series)
        c.update(pu=actual['rows'][-1]['puAtualizado'],principalResidual=900,
            historicoPu=[actual['rows'][-1]],eventosAplicados=actual['events'])
        result=self.extend('2026-11-02','2026-10-30',c)
        self.assertEqual(result['rows'][-1]['puAtualizado'],902.91)
        self.assertNotIn('events',result)

    def test_past_confirmation_missing_from_snapshot_is_held(self):
        result=self.extend('2026-11-02','2026-10-30')
        self.assertIn('nao conciliado',result['reason'])
        self.assertFalse(result['rows'])

    def test_forecast_stops_before_future_confirmed_payment(self):
        with mock.patch.object(funding,'confirmed_payments',return_value=[self.payment]):
            result=funding.extend_series(self.series,'2026-10-29','2026-11-03',set(),self.rates,forecast_days=5)
        self.assertFalse(result['rows'])
        self.assertIn('Evento',result['reason'])

    def test_invalid_payment_does_not_produce_a_negative_balance(self):
        self.payment['amortizationPu']='1001'
        with self.assertRaisesRegex(ValueError,'excede o saldo'):
            self.extend()

    def test_rounding_residual_is_preserved_and_explained(self):
        self.series['pu']=1009.9999998
        self.series['historicoPu'][0]['puAtualizado']=1009.9999998
        self.payment.update(interestPu='11.010000',amortizationPu='0')
        row=self.extend()['rows'][-1]
        self.assertEqual(row['valorNominal'],1000)
        self.assertEqual(row['puAtualizado'],999.9999998)
        self.assertEqual(row['puJuros'],-.0000002)

    def test_changed_confirmation_holds_an_already_materialized_series(self):
        actual=self.extend()
        c=copy.deepcopy(self.series)
        c.update(pu=actual['rows'][-1]['puAtualizado'],principalResidual=900,
            historicoPu=[actual['rows'][-1]],eventosAplicados=actual['events'])
        self.payment['unpaidInterestTreatment']='capitalize'
        self.assertIn('nao conciliado',self.extend('2026-11-02','2026-10-30',c)['reason'])

    def test_component_rounding_reconciles_to_the_payment_total(self):
        self.payment.update(interestPu='.334',amortizationPu='.334')
        self.series['quantidade']=1
        row=self.extend()['rows'][-1]
        self.assertEqual(row['valorEventoReais'],.67)
        self.assertEqual(row['valorJuros'],.33)
        self.assertEqual(row['valorAmortizacao'],.33)
        self.assertEqual(row['ajusteArredondamentoComponentes'],.01)

    def test_duplicate_registry_is_rejected(self):
        with tempfile.TemporaryDirectory() as folder:
            path=Path(folder)/'payments.json'
            path.write_text(json.dumps([self.payment,self.payment]),encoding='utf-8')
            with self.assertRaisesRegex(ValueError,'duplicado'):
                funding.read_payments(str(path),path.stat().st_mtime_ns)


if __name__=='__main__':
    unittest.main()
