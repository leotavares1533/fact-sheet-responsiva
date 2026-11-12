import importlib.util
import json
import unittest
import copy
from datetime import date, timedelta
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

    def test_repeated_updates_preserve_accrued_factors_for_every_method(self):
        rates = {}
        cursor = date(2026, 10, 20)
        while cursor <= date(2026, 11, 10):
            if cursor.weekday() < 5:
                rates[cursor.isoformat()] = dict(taxaDia=.0005 if cursor.day % 2 else .00051,
                                                fonte="Banco Central do Brasil - SGS 12")
            cursor += timedelta(days=1)
        for method in ("percentual_di_252", "di_spread_252", "di_spread_ts_252", "prefixado_252_ts"):
            with self.subTest(method=method):
                opening = copy.deepcopy(self.series)
                opening.update(metodo=method, spreadAa=.07, taxaAa=.225, lagBusinessDays=2)
                opening['historicoPu'][0].update(produtorioFatorDi=1.01, fatorDiAcumulado=1.01,
                    diasUteisPeriodo=20, puAtualizado=1050, puBaseCalculo=1000)
                opening['pu'] = 1050
                one = funding.extend_series(opening, self.source, "2026-11-06", {"2026-11-02"}, rates)
                staged = copy.deepcopy(opening)
                source = self.source
                for target in ("2026-10-30", "2026-11-03", "2026-11-04", "2026-11-05", "2026-11-06"):
                    result = funding.extend_series(staged, source, target, {"2026-11-02"}, rates)
                    self.assertEqual(result['through'], target)
                    row = result['rows'][-1]
                    self.assertIn('fatorDiAcumulado', row)
                    staged['historicoPu'].extend(result['rows'])
                    staged['pu'] = row['puAtualizado']
                    source = target
                self.assertAlmostEqual(staged['pu'], one['rows'][-1]['puAtualizado'], places=8)
                self.assertEqual(staged['historicoPu'][-1]['diasUteisPeriodo'], one['rows'][-1]['diasUteisPeriodo'])
                self.assertEqual(staged['historicoPu'][-1]['produtorioFatorDi'], one['rows'][-1]['produtorioFatorDi'])

    def test_old_generated_row_recovers_product_without_resetting_to_one(self):
        opening = copy.deepcopy(self.series)
        opening.update(metodo='di_spread_252', spreadAa=.07, lagBusinessDays=2, pu=1050)
        row = opening['historicoPu'][0]
        row.pop('fatorDiAcumulado')
        row.update(produtorioFatorDi=1.05, puAtualizado=1050, diasUteisPeriodo=20)
        result = funding.extend_series(opening, self.source, '2026-10-30', set(), self.rates)
        self.assertGreater(result['rows'][0]['produtorioFatorDi'], 1.05)

    def test_legacy_closing_pu_without_factors_keeps_accrued_interest_in_the_growth_basis(self):
        opening = copy.deepcopy(self.series)
        opening.update(metodo='di_spread_252', spreadAa=.065, lagBusinessDays=0, pu=1050,
                       percentualIndexador=1)
        opening['historicoPu'] = [dict(dataIso=self.source, puAtualizado=1050, valorNominal=1000,
                                      puJuros=50, diasUteis=20)]
        rates = {'2026-10-30': dict(taxaDia=.0005, fonte='Banco Central do Brasil - SGS 12')}
        result = funding.extend_series(opening, self.source, '2026-10-30', set(), rates)
        row = result['rows'][0]
        self.assertEqual(row['valorNominal'], 1000)
        self.assertEqual(row['puBaseCalculo'], 1050)
        factor = funding.terms.quantize((funding.ONE + funding.dec('.0005')) *
                                       funding.dec('1.065') ** (funding.ONE/252), 8)
        expected = 1050 + funding.terms.quantize(funding.dec(1050)*(factor-1), 8, funding.terms.ROUND_DOWN)
        self.assertEqual(row['puAtualizado'], float(expected))
        self.assertEqual(row['diasUteis'], 21)
        self.assertEqual(row['valorEventoReais'], 0)
        self.assertEqual(opening['pu'], 1050)

    def test_legacy_rebase_keeps_explicit_noncapitalizing_interest_outside_the_growth_basis(self):
        opening = copy.deepcopy(self.series)
        opening.update(metodo='di_spread_252', spreadAa=.065, lagBusinessDays=0, pu=1050,
                       percentualIndexador=1)
        opening['historicoPu'] = [dict(dataIso=self.source, puAtualizado=1050, valorNominal=1000,
                                      puJurosRetidosSemCapitalizacao=10)]
        rates = {'2026-10-30': dict(taxaDia=.0005, fonte='Banco Central do Brasil - SGS 12')}
        result = funding.extend_series(opening, self.source, '2026-10-30', set(), rates)
        self.assertEqual(result['rows'][0]['puBaseCalculo'], 1040)

    def test_forecast_respects_lag_holidays_and_does_not_use_future_cdi(self):
        self.rates["2026-10-29"] = {**self.rates["2026-10-28"], "taxaDia": .0006}
        self.rates["2026-10-30"] = {**self.rates["2026-10-28"], "taxaDia": .01}
        actual = funding.extend_series(self.series, self.source, "2026-10-30", set(), self.rates)
        forecast = funding.build_series_forecasts(
            self.series, self.source, actual, {"2026-11-02"}, self.rates, (),
        )
        first, second, third, *_ = forecast[self.source]["rows"]
        self.assertEqual(len(forecast[self.source]["rows"]), 5)
        self.assertEqual(first["puAtualizado"], actual["rows"][0]["puAtualizado"])
        self.assertEqual((second["dataIso"], second["dataTaxaDiIso"]), ("2026-11-03", "2026-10-29"))
        self.assertEqual(third["dataReferenciaTaxaDiIso"], "2026-10-30")
        self.assertEqual(third["taxaDiUtilizadaDia"], .0006)
        self.assertEqual(third["taxaDiStatus"], "projetada")
        self.assertEqual(forecast["2026-10-30"]["rows"][0]["dataIso"], "2026-11-03")
        self.assertEqual(self.series["pu"], 1000)

    def test_forecast_does_not_cross_a_payment_or_book_an_integration(self):
        self.series["agendaPagamentos"] = [{"dataIso": "2026-11-04", "juros": True}]
        self.series["ifCodigo"] = "CRA-TEST"
        integration = {"date": "2026-11-03", "quantity": 5, "unitPrice": "1000", "amount": "5000", "source": "Test"}
        actual = funding.extend_series(
            self.series, self.source, "2026-10-30", {"2026-11-02"}, self.rates, integrations=[integration],
        )
        forecast = funding.build_series_forecasts(
            self.series, self.source, actual, {"2026-11-02"}, self.rates, [integration],
        )
        self.assertEqual([row["dataIso"] for row in forecast[self.source]["rows"]], ["2026-10-30"])
        self.assertIn("03/11/2026", forecast["2026-10-30"]["reason"])
        self.assertFalse(forecast["2026-10-30"]["rows"])
        self.assertTrue(all(row["quantidade"] == 400000 for row in forecast[self.source]["rows"]))

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
        forecast = funding.build_series_forecasts(senior, source, result, set(), funding.engine.parse_di_rates(), ())
        self.assertEqual([row["puAtualizado"] for row in forecast[source]["rows"][:3]],
                         [row["puAtualizado"] for row in result["rows"]])

    def test_confirmed_integrations_change_only_quantity_from_event_date(self):
        source = "2026-10-27"
        integrations = json.loads(funding.INTEGRATIONS.read_text(encoding="utf-8"))
        for number, code, day, old_quantity, new_quantity, value in (
            (71, "CRA026004HI", "2026-10-29", 280, 485, 208118.99),
            (74, "CRA02600592", "2026-10-30", 14210, 19850, 5479187.91),
        ):
            with self.subTest(code=code):
                cra = f"cra-carteira-{number}"
                snapshot = funding.engine.load_snapshot(funding.ROOT / f"data/cras/{cra}/{source}.js", cra, source)
                cota = next(c for c in snapshot["passivo"]["cotas"] if c["ifCodigo"] == code)
                series = funding.extend_series(cota, source, "2026-10-30", set(), funding.engine.parse_di_rates(),
                    integrations=[event for event in integrations if event["cra"] == cra and event["ifCodigo"] == code])
                event, = series["events"]
                self.assertEqual(event["dataIso"], day)
                self.assertEqual(event["quantidade"], new_quantity - old_quantity)
                self.assertEqual(event["valorEventoReais"], value)
                self.assertEqual(event["status"], "realizado")
                self.assertTrue(all(row["quantidade"] == (old_quantity if row["dataIso"] < day else new_quantity)
                                    for row in series["rows"]))
                self.assertTrue(all(row["valorEventoReais"] == (value if row["dataIso"] == day else 0)
                                    for row in series["rows"]))

    def test_covered_integration_is_not_added_again(self):
        integration = {"date": self.source, "quantity": 205, "amount": "208118.99"}
        result = funding.extend_series(self.series, self.source, "2026-10-30", set(), self.rates,
                                       integrations=[integration])
        self.assertIn("nao conciliada", result["reason"])
        self.series["eventosAplicados"] = [{"dataIso": self.source, "tipo": "integralizacao",
                                            "quantidade": 205, "valorEventoReais": 208118.99}]
        result = funding.extend_series(self.series, self.source, "2026-10-30", set(), self.rates,
                                       integrations=[integration])
        self.assertEqual(result["rows"][-1]["quantidade"], 400000)
        self.assertNotIn("events", result)


if __name__ == "__main__":
    unittest.main()
