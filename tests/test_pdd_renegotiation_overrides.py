import importlib.util
import unittest
from pathlib import Path


spec = importlib.util.spec_from_file_location(
    "snapshot_refresh", Path(__file__).resolve().parents[1] / "scripts/refresh_cra_snapshot_from_imports.py"
)
refresh = importlib.util.module_from_spec(spec)
spec.loader.exec_module(refresh)


class RenegotiationOverrideTests(unittest.TestCase):
    def asset(self, lastro, pdd):
        return {
            "numeroUnico": lastro, "cedente": "TEC PLANTE PRODUTOS AGRICOLAS LTDA",
            "sacado": "TEC PLANTE PRODUTOS AGRICOLAS LTDA", "pdd": pdd,
            "valorPresenteDia": 7796602.89, "valorPresenteLiquido": 7796602.89 - pdd,
        }

    def test_exception_only_applies_to_the_renegotiated_title(self):
        old_title = self.asset("471368", 100)
        new_title = self.asset("499804", 38983.01445)
        snapshot = {}
        refresh.apply_pdd_renegotiation_overrides("cra-modelo", "2026-10-15", [old_title, new_title], snapshot)
        self.assertEqual(old_title["pdd"], 0)
        self.assertEqual(new_title["pdd"], 38983.01445)
        self.assertEqual(new_title["valorPresenteLiquido"], 7796602.89 - 38983.01445)
        self.assertNotIn("pddAjusteManual", new_title)
        self.assertEqual(snapshot["metadata"]["manualAdjustments"][0]["valorPddZerado"], 100)

    def test_reprocessing_removes_obsolete_adjustment_and_is_idempotent(self):
        rule = refresh.PDD_RENEGOTIATION_OVERRIDES["cra-modelo"][0]
        snapshot = {"metadata": {"manualAdjustments": [
            {"id": rule["id"], "valorPddZerado": 38983.01445}, {"id": "unrelated-event"},
        ]}}
        new_title = self.asset("499804", 38983.01445)
        for _ in range(2):
            refresh.apply_pdd_renegotiation_overrides("cra-modelo", "2026-10-15", [new_title], snapshot)
        self.assertEqual(new_title["pdd"], 38983.01445)
        self.assertEqual(snapshot["metadata"]["manualAdjustments"], [{"id": "unrelated-event"}])


if __name__ == "__main__":
    unittest.main()
