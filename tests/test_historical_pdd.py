import importlib.util
import json
import tempfile
import unittest
from datetime import datetime
from pathlib import Path
from unittest.mock import patch


SPEC = importlib.util.spec_from_file_location(
    "normalize_carteira", Path(__file__).resolve().parents[1] / "scripts" / "normalize_carteira.py"
)
normalizer = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(normalizer)


class HistoricalPddTests(unittest.TestCase):
    def setUp(self):
        self.directory = tempfile.TemporaryDirectory()
        self.addCleanup(self.directory.cleanup)
        self.snapshot_path = Path(self.directory.name) / "snapshot.json"

    def snapshot(self, rows, date_key="2026-10-05"):
        self.snapshot_path.write_text(json.dumps({
            "metadata": {"dateKey": date_key},
            "carteira": [{"numeroUnico": key, "pdd": pdd} for key, pdd in rows],
        }), encoding="utf-8")

    def records(self, rows):
        return [normalizer.make_record(numero_unico=key, pdd=pdd, valor_presente_dia=0)
                for key, pdd in rows]

    def preserve(self, records):
        normalizer.preserve_historical_pdd(records, self.snapshot_path, "2026-10-05")

    def test_residual_pdd_survives_zero_vp(self):
        self.snapshot([("401111", 1013648.63)])
        records = self.records([("401111", 0)])
        self.preserve(records)
        self.assertEqual(float(records[0]["pdd"]), 1013648.63)
        self.assertEqual(records[0]["valor_presente_dia"], "0")

    def test_zero_is_an_explicit_historical_value(self):
        self.snapshot([("471368", 0)])
        records = self.records([("471368", 36000)])
        self.preserve(records)
        self.assertEqual(records[0]["pdd"], "0")

    def test_duplicate_zero_pdd_and_new_zero_pdd_are_safe(self):
        self.snapshot([("100", 0), ("100", 0)])
        records = self.records([("100", 0), ("100", 0), ("101", 0)])
        self.preserve(records)
        self.assertEqual(len(records), 3)

    def test_duplicate_nonzero_pdd_is_not_silently_multiplied(self):
        self.snapshot([("100", 10)])
        with self.assertRaisesRegex(ValueError, "Quantidade"):
            self.preserve(self.records([("100", 0), ("100", 0)]))

    def test_ambiguous_duplicate_pdd_is_rejected(self):
        self.snapshot([("100", 10), ("100", 20)])
        with self.assertRaisesRegex(ValueError, "ambiguo"):
            self.preserve(self.records([("100", 0), ("100", 0)]))

    def test_missing_nonzero_pdd_is_rejected(self):
        self.snapshot([("100", 10)])
        with self.assertRaisesRegex(ValueError, "Quantidade"):
            self.preserve([])

    def test_unknown_nonzero_pdd_is_rejected(self):
        self.snapshot([])
        with self.assertRaisesRegex(ValueError, "novo lastro"):
            self.preserve(self.records([("100", 10)]))

    def test_wrong_snapshot_date_is_rejected(self):
        self.snapshot([("100", 0)], date_key="2026-10-02")
        with self.assertRaisesRegex(ValueError, "mesma data"):
            self.preserve(self.records([("100", 0)]))

    def test_latest_column_cannot_use_historical_override(self):
        frame = normalizer.pd.DataFrame([
            ["Lastro", "Cedente", "Sacado", datetime(2026, 10, 6)],
            ["100", "A", "B", 1000],
        ])
        with patch.object(normalizer.pd, "read_excel", return_value=frame):
            with self.assertRaisesRegex(ValueError, "ultima coluna"):
                normalizer.normalize_excel(Path("unused.xlsx"), "2026-10-06", self.snapshot_path)
            records = normalizer.normalize_excel(Path("unused.xlsx"), "2026-10-06")
        self.assertEqual(records[0]["valor_presente_dia"], "1000")


if __name__ == "__main__":
    unittest.main()
