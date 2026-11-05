import copy
import importlib.util
import unittest
from pathlib import Path
from unittest.mock import patch


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

    def test_confirmed_generic_payment_reduces_funding_with_audit_trail(self):
        decision = {"kind": "pagamento", "reduceFunding": True, "amount": 2000,
                    "confirmedBy": "Leonardo", "confirmedOn": "2026-11-05"}
        entry = {"cra": "test", "class": "SR1", "payments": [{
            "date": "2026-09-04", "status": "realizado", "sourceSheet": "Example", "sourceCells": {},
            "fields": {"saldoemconta": 2000, "pueventogenerico": 20}}]}
        issues = []
        event = MODULE.select_payments(entry, issues, {"test/SR1/2026-09-04": decision})[0]
        self.assertFalse(event["pending"])
        cota = {"quantidade": 100, "eventosAplicados": [],
                "historicoPu": [{"puAtualizado": 1010, "valorNominal": 1000}]}
        MODULE.apply_payment(cota, event, entry, issues)
        self.assertEqual(cota["pu"], 990)
        self.assertEqual(cota["eventosAplicados"][0]["humanConfirmation"], decision)
        self.assertIsNone(cota["eventosAplicados"][0]["valorJuros"])
        self.assertEqual(issues, [])

    def test_payment_date_confirmation_does_not_approve_old_amount(self):
        entry = {"cra": "test", "class": "SR1", "payments": [{
            "date": "2026-09-04", "fields": {"saldoemconta": 100}}]}
        issues = []
        selected = MODULE.select_payments(entry, issues, {"test/SR1/2026-09-04": {
            "kind": "pagamento", "reduceFunding": False, "amountConfirmed": False}})
        self.assertTrue(selected[0]["pending"])
        self.assertEqual(issues[0]["type"], "pagamento_confirmado_valor_rateio_pendente")

    def test_past_charges_do_not_reduce_pu_or_remain_pending(self):
        source = payment(1601742.06, interest=0, amortization=1601742.06)
        source["date"] = "2026-09-04"
        entry = {"cra": "test", "class": "SR1", "payments": [source]}
        decision = {"kind": "encargos_passados", "reduceFunding": False, "ignoreForPu": True}
        issues = []
        selected = MODULE.select_payments(entry, issues, {"test/SR1/2026-09-04": decision})
        self.assertEqual(selected[0]["status"], "realizado_sem_efeito_pu")
        self.assertFalse(selected[0]["pending"])
        self.assertEqual(selected[0]["humanConfirmation"], decision)
        self.assertEqual(issues, [])

    def test_principal_only_redemption_keeps_interest_and_period(self):
        decision = {"kind": "amortizacao_extraordinaria", "reduceFunding": True,
                    "amountConfirmed": True, "amount": 10000, "puAmortizacao": "100.00000000"}
        entry = {"cra": "test", "class": "SR1", "payments": [{
            "date": "2026-09-04", "status": "realizado", "sourceSheet": "Example", "sourceCells": {},
            "fields": {"saldoemconta": 10000}}]}
        event = MODULE.select_payments(entry, [], {"test/SR1/2026-09-04": decision})[0]
        cota = {"quantidade": 100, "metodo": "di_spread_252", "spreadAa": .07,
            "percentualIndexador": 1, "eventosAplicados": [],
            "historicoPu": [{"dataIso": "2026-09-04", "puAtualizado": 1010, "valorNominal": 1000,
                             "diasUteis": 10, "diasUteisPeriodo": 10, "fatorDiAcumulado": 1.01}]}
        MODULE.apply_payment(cota, event, entry, [])
        row = cota["historicoPu"][-1]
        self.assertEqual(cota["principalResidual"], 900)
        self.assertEqual(row["puJuros"], 10)
        self.assertEqual(row["puJurosRetidosSemCapitalizacao"], 1)
        self.assertEqual(row["diasUteisPeriodo"], 10)
        self.assertEqual(row["fatorDiAcumulado"], 1.01)
        self.assertEqual(cota["eventosAplicados"][-1]["valorJuros"], 0)
        context = {"metadata": {"businessCalendar": {"holidays": ["2026-09-07"]}}}
        with patch.object(MODULE.ENGINE, "combined_di_spread_daily", return_value=(.001, .28, "2026-09-08")):
            next_cota = MODULE.ENGINE.project_cota_to_date(context, cota, "2026-09-08")
        expected = MODULE.ENGINE.apply_ts_factor(900, MODULE.ENGINE.add_ts_factor(1.01, 1.001)) + 1
        self.assertEqual(next_cota["pu"], expected)
        self.assertAlmostEqual(next_cota["pu"], 910.909, places=7)
        self.assertEqual(next_cota["historicoPu"][-1]["diasUteisPeriodo"], 11)
        self.assertEqual(next_cota["historicoPu"][-1]["puJurosRetidosSemCapitalizacao"], 1)

    def test_interest_payment_does_not_retain_already_paid_interest(self):
        cota = {"quantidade": 100, "eventosAplicados": [],
                "historicoPu": [{"puAtualizado": 910, "valorNominal": 900,
                                  "puJurosRetidosSemCapitalizacao": 1}]}
        MODULE.apply_payment(cota, payment(1000, interest=1000, amortization=0),
                             {"cra": "test", "class": "SR1"}, [])
        self.assertEqual(cota["pu"], 900)
        self.assertEqual(cota["historicoPu"][-1]["puJuros"], 0)
        self.assertNotIn("puJurosRetidosSemCapitalizacao", cota["historicoPu"][-1])


if __name__ == "__main__":
    unittest.main()
