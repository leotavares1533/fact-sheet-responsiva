import importlib.util
import unittest
from pathlib import Path


spec = importlib.util.spec_from_file_location(
    "funding_pu", Path(__file__).resolve().parents[1] / "scripts/refresh-funding-pu.py")
funding = importlib.util.module_from_spec(spec)
spec.loader.exec_module(funding)


class FundingPuTests(unittest.TestCase):
    def setUp(self):
        self.source = "2026-10-29"
        self.series = {
            "quantidade": 400000, "pu": 1000, "principalResidual": 1000,
            "metodo": "percentual_di_252", "percentualIndexador": 1.05,
            "dataVencimentoIso": "2032-07-15",
            "historicoPu": [{"dataIso": self.source, "puAtualizado": 1000, "valorNominal": 1000,
                            "fatorDiAcumulado": 1, "diasUteis": 20, "diasUteisPeriodo": 0}],
        }
        self.rates = {"2026-10-28": {"taxaDia": .0005, "fonte": "Banco Central do Brasil - SGS 12"}}

    def test_extends_one_business_day_with_official_d2_and_no_cash_movement(self):
        result = funding.extend_series(self.series, self.source, "2026-11-02", {"2026-11-02"}, self.rates)
        self.assertEqual(result["through"], "2026-10-30")
        self.assertEqual(len(result["rows"]), 1)
        row = result["rows"][0]
        self.assertEqual(row["dataReferenciaTaxaDiIso"], "2026-10-28")
        self.assertEqual(row["puAtualizado"], 1000.525)
        self.assertEqual(row["valorReais"], 400210000)
        self.assertEqual(row["valorEventoReais"], 0)
        self.assertEqual(self.series["pu"], 1000)

    def test_missing_exact_di_does_not_repeat_old_rate(self):
        result = funding.extend_series(self.series, self.source, "2026-11-03", {"2026-11-02"}, self.rates)
        self.assertEqual(result["through"], "2026-10-30")
        self.assertIn("29/10/2026", result["reason"])

    def test_event_and_maturity_hold_the_series(self):
        self.series["agendaPagamentos"] = [{"dataIso": "2026-10-30", "juros": True}]
        result = funding.extend_series(self.series, self.source, "2026-10-30", set(), self.rates)
        self.assertFalse(result["rows"])
        self.assertIn("Evento", result["reason"])
        self.series["dataVencimentoIso"] = "2026-10-28"
        result = funding.extend_series(self.series, self.source, "2026-10-30", set(), self.rates)
        self.assertIn("Vencimento", result["reason"])

    def test_73_uses_incorporated_principal_and_documented_factors(self):
        source = "2026-10-27"
        cra = "cra-carteira-73"
        snapshot = funding.engine.load_snapshot(funding.ROOT / f"data/cras/{cra}/{source}.js", cra, source)
        senior = next(c for c in snapshot["passivo"]["cotas"] if c["ifCodigo"] == "CRA02600590")
        result = funding.extend_series(senior, source, "2026-10-30", set(), funding.engine.parse_di_rates())
        self.assertEqual(len(result["rows"]), 3)
        self.assertEqual(result["rows"][-1]["valorNominal"], 1009.68976270)
        self.assertEqual(result["rows"][-1]["dataTaxaDiIso"], "2026-10-28")
        self.assertEqual(result["rows"][-1]["diasUteisPeriodo"], 29)


if __name__ == "__main__":
    unittest.main()
