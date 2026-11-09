import importlib.util
import io
import unittest
from datetime import datetime
from pathlib import Path
from types import SimpleNamespace
from unittest.mock import MagicMock, patch

ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location('cra56_pu', ROOT / 'scripts/import-cra56-pu.py')
IMPORT = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(IMPORT)


def memory():
    sheet = MagicMock()
    sheet.title = '56 PU SR'
    cells = {'I1': 'CRA026000RT', 'E10': 19600, 'E2': 20000, 'D4': 20000000,
             'C4': datetime(2026, 2, 5), 'C3': datetime(2027, 6, 30), 'D13': .225}
    sheet.__getitem__.side_effect = lambda key: SimpleNamespace(value=cells[key])
    first = [None, datetime(2026, 2, 5), 1000, 0, 1000, 4, 0, 20000000, None, None]
    last = [None, datetime(2026, 11, 5), 55.53980245142861, 2.0960427, 57.63584515142861, 4, 46, 1152716.9030285722, None, None]
    sheet.iter_rows.return_value = [first, last]
    book = MagicMock(worksheets=[sheet])
    source = MagicMock(name='source')
    source.name = 'pu 56.xlsx'
    source.open.return_value.__enter__.return_value = io.BytesIO(b'memory fixture')
    return source, book


class ImportCra56Tests(unittest.TestCase):
    def test_current_quantity_corrects_balance_not_unit_price_or_past_events(self):
        source, book = memory()
        with patch.object(IMPORT, 'load_workbook', return_value=book):
            cota, confirmation, _ = IMPORT.read_memory(source, '2026-11-05', 19600)
        self.assertEqual(cota['quantidade'], 19600)
        self.assertEqual(cota['pu'], 57.63584515)
        self.assertAlmostEqual(cota['valor'], 1129662.56494, places=5)
        self.assertEqual(cota['historicoPu'][0]['quantidade'], 20000)
        self.assertFalse(cota['historicoPu'][0]['quantidadeHistoricaConfirmada'])
        self.assertEqual(cota['historicoPu'][-1]['quantidade'], 19600)
        self.assertTrue(cota['historicoPu'][-1]['quantidadeHistoricaConfirmada'])
        self.assertEqual(cota['eventosAplicados'][0]['quantidade'], 20000)
        self.assertEqual(confirmation['quantity'], 19600)
        self.assertEqual(len(cota['eventosAplicados']), 1)
        self.assertEqual(cota['documentValidation']['status'], 'pendente_documentos')

    def test_wrong_quantity_is_not_silently_accepted(self):
        source, book = memory()
        with patch.object(IMPORT, 'load_workbook', return_value=book), self.assertRaises(ValueError):
            IMPORT.read_memory(source, '2026-11-05', 20000)


if __name__ == '__main__':
    unittest.main()
