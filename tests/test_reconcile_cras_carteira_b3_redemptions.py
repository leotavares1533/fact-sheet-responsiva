import importlib.util
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "b3_redemptions", ROOT / "scripts/reconcile-cras-carteira-b3-redemptions.py")
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class B3RedemptionTests(unittest.TestCase):
    def source(self, interest=False, incorporates="N"):
        header = ["Data Original", "Data da Efetivação", "Data de Liquidação", "Título", "Situação Título",
                  "Nome Evento", "PU Evento", "Incorpora", "Status de Liquidação"]
        row = ["04/09/2026", "04/09/2026", "04/09/2026", "CRA026000B7", "CONFIRMADO",
               "AMORTIZACAO EXTRAORDINARIA", "40,14391130", incorporates, "Liquidado através da Cetip"]
        future = ["31/03/2027", "31/03/2027", "31/03/2027", "CRA026000B7", "CONFIRMADO",
                  "VENCIMENTO (RESGATE)", "----", "N", "-"]
        text = "B3\nConsulta: 04/11/2026\n\n" + "\t".join(header) + "\n" + "\t".join(row) + "\n" + "\t".join(future)
        if interest:
            row[5] = "JUROS EXTRAORDINARIO"
            text += "\n" + "\t".join(row)
        return text.encode("cp1252")

    def test_reads_exact_unit_amount_and_ignores_future_schedule(self):
        with patch.object(Path, "read_bytes", return_value=self.source()):
            result = MODULE.read_redemption(Path("CRA026000B7.tsv"), "CRA026000B7", 39900)
        self.assertEqual(result["puAmortizacao"], "40.14391130")
        self.assertEqual(result["amount"], 1601742.06)
        self.assertEqual(result["puJuros"], "0.00000000")
        self.assertFalse(result["incorpora"])

    def test_rejects_unexpected_interest_or_incorporation(self):
        for raw in (self.source(interest=True), self.source(incorporates="S")):
            with patch.object(Path, "read_bytes", return_value=raw), self.assertRaises(ValueError):
                MODULE.read_redemption(Path("CRA026000B7.tsv"), "CRA026000B7", 39900)

    def test_other_pending_events_are_not_resolved(self):
        issue = {"cra": "cra-carteira-53", "date": "2026-09-04", "type": "pagamento_confirmado_valor_rateio_pendente"}
        self.assertTrue(MODULE.resolved_issue(issue))
        self.assertFalse(MODULE.resolved_issue({**issue, "cra": "cra-carteira-46"}))
        self.assertFalse(MODULE.resolved_issue({**issue, "date": "2026-10-07"}))

    def test_confirmed_past_charges_take_priority_over_b3_event_label(self):
        decision = {"kind": "encargos_passados", "reduceFunding": False, "ignoreForPu": True}
        with patch.object(Path, "read_bytes", side_effect=AssertionError("Nao reler B3 para sobrepor confirmacao")):
            result = MODULE.resolve_confirmation(decision, Path("CRA026000B7.tsv"), "CRA026000B7", 39900)
        self.assertEqual(result, decision)
        self.assertIsNot(result, decision)


if __name__ == "__main__":
    unittest.main()
