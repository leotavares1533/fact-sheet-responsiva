import copy
import importlib.util
import unittest
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def module(name, filename):
    spec = importlib.util.spec_from_file_location(name, ROOT / 'scripts' / filename)
    result = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(result)
    return result


REVIEW = module('confirmation_review', 'reconcile-cra-carteira-confirmations.py')
FUNDING = module('confirmation_funding', 'refresh-funding-pu.py')


class ConfirmationTests(unittest.TestCase):
    def test_60_replays_from_confirmed_date_and_is_idempotent(self):
        cota = dict(ifCodigo='CRA0260020A', classe='MEZA', metodo='prefixado_252_ts', taxaAa=.225,
            valorNominalInicial=1000, quantidade=6050, pu=1000, principalResidual=1000,
            historicoPu=[dict(dataIso='2026-04-14', valorNominal=1000, puAtualizado=1000)],
            eventosAplicados=[dict(dataIso='2026-04-14', tipo='integralizacao', quantidade=6050, valorEventoReais=6050000)],
            eventosPendentes=[dict(date='2026-05-20', pending=True, valorEventoReais=9116000)])
        snapshot = {'metadata': {'businessCalendar': {'holidays': []}}}
        result = REVIEW.apply_first_date_confirmation(cota, snapshot, '2026-11-05', FUNDING.engine)
        self.assertEqual(result['historicoPu'][0]['dataIso'], '2026-04-08')
        self.assertAlmostEqual(result['pu'], 1124.76804999, places=8)
        self.assertEqual(result['quantidade'], 6050)
        self.assertEqual(result['eventosAplicados'][0]['dataIso'], '2026-04-08')
        self.assertEqual(result['eventosPendentes'], cota['eventosPendentes'])
        self.assertEqual(snapshot['metadata']['businessCalendar']['holidays'], [])
        again = REVIEW.apply_first_date_confirmation(result, snapshot, '2026-11-05', FUNDING.engine)
        self.assertEqual(again, result)

    def test_58_corrects_header_without_changing_existing_pu(self):
        cota = dict(ifCodigo='CRA026000S3', dataInicioIso='2026-04-22',
            historicoPu=[{'dataIso': '2026-08-05'}], pu=1052.04428999)
        result = REVIEW.apply_first_date_confirmation(cota, {}, '2026-11-05', FUNDING.engine)
        self.assertEqual(result['dataInicioIso'], '2026-08-05')
        self.assertEqual(result['pu'], cota['pu'])
        self.assertEqual(cota['dataInicioIso'], '2026-04-22')

    def test_old_financial_payment_never_reduces_pu_twice(self):
        cota = dict(classe='SR1', pu=3.15384102, valor=125838.256698,
            historicoPu=[{'dataIso': '2026-11-05', 'puAtualizado': 3.15384102}],
            eventosPendentes=[{'date':'2026-09-04','pending':True,'pendingReason':'generico'}])
        confirmation = dict(kind='encargos_passados', ignoreForPu=True, amount=591442.99, note='Ja deduzido no passado')
        result = REVIEW.apply_non_pu_decisions(cota, 'cra-carteira-46', {'cra-carteira-46/SR1/2026-09-04':confirmation})
        self.assertEqual(result['pu'], cota['pu'])
        self.assertEqual(result['valor'], cota['valor'])
        self.assertEqual(result['historicoPu'], cota['historicoPu'])
        self.assertEqual(result['eventosPendentes'], [])
        self.assertEqual(result['eventosSemEfeitoPu'][0]['status'], 'realizado_sem_efeito_pu')
        self.assertEqual(REVIEW.apply_non_pu_decisions(result, 'cra-carteira-46', {}), result)


if __name__ == '__main__':
    unittest.main()
