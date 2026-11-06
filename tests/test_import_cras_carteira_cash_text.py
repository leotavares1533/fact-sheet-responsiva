import copy
import importlib.util
import unittest
from pathlib import Path
from unittest.mock import patch


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("cash_text", ROOT / "scripts/import-cras-carteira-cash-text.py")
MODULE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(MODULE)


class CashTextTests(unittest.TestCase):
    def source(self, number=80, cc="4.909,95", application="R$ -", reserve="110.000,00", total="R$ -"):
        rows = [["", "", "R$ 999,00", "", "", "", "28/10/2026"],
                ["", f"{number}\u00aa", "", "", "", "Saldo em Conta Corrente", cc],
                ["", "33010-6 (ITAU)", "", "", "", "Saldo em Aplica\u00e7\u00e3o", application],
                ["", "", "", "", "", "Fundo de despesa", reserve],
                ["", "", "", "", "", "Total", total],
                ["", "", "", "", "", "", "-R$ 105.090,05"]]
        return ("\n".join("\t".join(row) for row in rows)).encode("utf-8")

    def test_explicit_zero_and_shortfall_are_preserved_without_double_reserve(self):
        with patch.object(Path, "read_bytes", return_value=self.source()):
            parsed = MODULE.parse_source(Path("cash.txt"))
        row = parsed["records"]["2026-10-28"]["cra-carteira-80"]
        self.assertEqual(row["total"], 0)
        self.assertEqual(row["totalCalculado"], -105090.05)
        self.assertEqual(row["reserveShortfall"], 105090.05)
        self.assertEqual(parsed["totals"]["2026-10-28"], 0)
        self.assertEqual(len(parsed["issues"]), 1)
        self.assertEqual(row["bankAccount"], "33010-6 (ITAU)")

    def test_reported_total_default_and_explicit_components_override(self):
        raw = self.source(60, "29.369,19", "180.401,61", "-", "209.270,80")
        with patch.object(Path, "read_bytes", return_value=raw):
            reported = MODULE.parse_source(Path("cash.txt"))
            components = MODULE.parse_source(Path("cash.txt"), "components")
        self.assertEqual(reported["totals"]["2026-10-28"], 209270.8)
        self.assertEqual(components["totals"]["2026-10-28"], 209770.8)
        self.assertEqual(reported["issues"][0]["difference"], -500)

    def test_compact_layout_without_heading_and_unicode_dashes(self):
        rows = [["", "", "", "", "", "05/11/2026"],
                ["44\u00aa", "", "", "", "Saldo em Conta Corrente", "R$ 29.549,63"],
                ["26556-0 (ITAU)", "", "", "", "Saldo em Aplica\u00e7\u00e3o", "\u2013"],
                ["21371-9", "", "", "", "Fundo de despesa", "R$ 21.714,08"],
                ["", "", "", "", "Total", "R$ 7.835,55"]]
        raw = "\n".join("\t".join(row) for row in rows).encode("utf-8")
        with patch.object(Path, "read_bytes", return_value=raw):
            parsed = MODULE.parse_source(Path("cash.txt"))
        self.assertIsNone(parsed["headingTotal"])
        self.assertIsNone(parsed["headingDifference"])
        self.assertEqual(parsed["vehicles"], ["cra-carteira-44"])
        record = parsed["records"]["2026-11-05"]["cra-carteira-44"]
        self.assertEqual(record["total"], 7835.55)
        self.assertEqual(record["totalCalculado"], 7835.55)
        self.assertEqual(record["bankAccount"], "26556-0 (ITAU)")
        self.assertEqual(parsed["issues"], [])

    def test_old_layout_retains_real_heading_total(self):
        with patch.object(Path, "read_bytes", return_value=self.source()):
            parsed = MODULE.parse_source(Path("cash.txt"))
        self.assertEqual(parsed["headingTotal"], 999)

    def test_projection_does_not_bring_future_integrations_into_earlier_cash_date(self):
        cota = {"pu": 1000, "quantidade": 100, "principalResidual": 1000, "valor": 100000,
                "historicoPu": [{"dataIso": "2026-10-27", "puAtualizado": 1000, "valorNominal": 1000,
                                 "quantidade": 100, "valorReais": 100000}], "eventosAplicados": []}
        original = copy.deepcopy(cota)
        projection = {"rows": [{"dataIso": "2026-10-28", "puAtualizado": 1001, "valorNominal": 1000,
                                "quantidade": 100, "valorReais": 100100},
                               {"dataIso": "2026-10-29", "puAtualizado": 1002, "valorNominal": 1000,
                                "quantidade": 105, "valorReais": 105210}],
                      "events": [{"dataIso": "2026-10-29", "tipo": "integralizacao", "quantidade": 5}]}
        before = MODULE.materialize_series(cota, projection, "2026-10-28")
        after = MODULE.materialize_series(cota, projection, "2026-10-29")
        self.assertEqual(before["quantidade"], 100)
        self.assertEqual(before["eventosAplicados"], [])
        self.assertEqual(after["quantidade"], 105)
        self.assertEqual(len(after["eventosAplicados"]), 1)
        self.assertEqual(after["fundingSourceDateKey"], "2026-10-29")
        self.assertEqual(cota, original)

    def test_held_funding_keeps_actual_pu_date(self):
        cota = {"pu": 3, "quantidade": 100, "principalResidual": 3, "valor": 300,
                "historicoPu": [{"dataIso": "2026-10-27", "puAtualizado": 3, "valorNominal": 3,
                                 "quantidade": 100, "valorReais": 300}]}
        result = MODULE.materialize_series(cota, {"rows": [], "reason": "Vencimento pendente"}, "2026-11-04")
        self.assertEqual(result["fundingSourceDateKey"], "2026-10-27")
        self.assertFalse(result["visaoCalculadaPu"])
        self.assertEqual(result["pu"], 3)
        self.assertEqual(result["fundingPositionHeldReason"], "Vencimento pendente")


if __name__ == "__main__":
    unittest.main()
