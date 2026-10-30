import copy
import importlib.util
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("funding_import", ROOT / "scripts/import-cras-fundings-cash.py")
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


def payment(total, interest=10, amortization=None):
    return {"date": "2026-08-07", "status": "realizado", "sourceSheet": "Example", "sourceCells": {},
        "fields": {"saldoemconta": total, "valorjuros": interest,
            "valoramortizacao": total - interest if amortization is None else amortization}}


class FundingImportTests(unittest.TestCase):
    def test_duplicate_payment_applied_once(self):
        event = payment(100)
        entry = {"cra": "test", "class": "SR1", "payments": [event, copy.deepcopy(event)]}
        selected = MODULE.select_payments(entry, [], {})
        self.assertEqual(len(selected), 1)
        self.assertFalse(selected[0]["pending"])

    def test_conflicting_payment_requires_confirmation(self):
        entry = {"cra": "test", "class": "SR1", "payments": [payment(100), payment(110)]}
        selected = MODULE.select_payments(entry, [], {})
        self.assertTrue(selected[0]["pending"])
        selected = MODULE.select_payments(entry, [], {"test/SR1/2026-08-07": {"amount": 110}})
        self.assertFalse(selected[0]["pending"])
        self.assertEqual(MODULE.payment_amount(selected[0]), 110)

    def test_generic_cash_not_automatically_distributed(self):
        event = {"date": "2026-09-04", "fields": {"saldoemconta": 100, "pueventogenerico": 1}}
        entry = {"cra": "test", "class": "SR1", "payments": [event]}
        self.assertTrue(MODULE.select_payments(entry, [], {})[0]["pending"])

    def test_distribution_reduces_pu_and_resets_period(self):
        cota = {"quantidade": 100, "eventosAplicados": [],
            "historicoPu": [{"puAtualizado": 1010, "valorNominal": 1000, "diasUteisPeriodo": 10}]}
        event = payment(2000, 1000, 1000)
        MODULE.apply_payment(cota, event, {"cra": "test", "class": "SR1"}, [])
        self.assertEqual(cota["pu"], 990)
        self.assertEqual(cota["valor"], 99000)
        self.assertEqual(cota["historicoPu"][-1]["diasUteisPeriodo"], 0)
        self.assertEqual(cota["historicoPu"][-1]["principalAntesEvento"], 1000)

    def test_document_quantity_preserved_and_missing_event_added(self):
        cota = {"quantidade": 201, "eventosAplicados": [{"tipo": "integralizacao", "dataIso": "2026-06-05", "quantidade": 201, "valor": 200822.53}],
            "historicoPu": [{"dataIso": "2026-07-27", "puAtualizado": 1010, "valorReais": 203010}]}
        entry = {"cra": "test", "class": "MEZA", "integrations": [
            {"date": "2026-06-05", "status": "realizado", "quantity": 200.82253, "amount": 200822.53},
            {"date": "2026-07-10", "status": "realizado", "quantity": 3353, "amount": 3421774.99, "sourceSheet": "Example", "sourceRow": 6}]}
        issues = []
        MODULE.merge_integrations(entry, cota, "2026-10-27", "2026-07-27", issues)
        self.assertEqual(cota["quantidade"], 3554)
        self.assertEqual(len(cota["eventosAplicados"]), 2)
        self.assertEqual(cota["eventosAplicados"][0]["quantidade"], 201)
        self.assertEqual(len(issues), 1)

    def test_full_payment_keeps_difference_separate(self):
        cota = {"quantidade": 100, "eventosAplicados": [],
            "historicoPu": [{"puAtualizado": 10, "valorNominal": 10}]}
        issues = []
        MODULE.apply_payment(cota, payment(1010), {"cra": "test", "class": "SR1"}, issues)
        self.assertEqual(cota["valor"], 0)
        self.assertEqual(cota["eventosAplicados"][0]["valorEventoReais"], 1010)
        self.assertEqual(cota["eventosAplicados"][0]["differencePendingReconciliationReais"], 10)
        self.assertTrue(issues[0]["pending"])

    def test_other_adjustment_does_not_reduce_funding(self):
        entry = {"cra": "test", "class": "SR1", "payments": [{"date": "2026-09-04", "fields": {"saldoemconta": 100}}]}
        issues = []
        selected = MODULE.select_payments(entry, issues, {"test/SR1/2026-09-04": {"kind": "outro_ajuste", "reduceFunding": False}})
        self.assertTrue(selected[0]["pending"])
        self.assertEqual(issues[0]["type"], "ajuste_generico_sem_detalhamento")


if __name__ == "__main__":
    unittest.main()
