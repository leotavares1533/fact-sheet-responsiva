import copy
import importlib.util
import unittest
from pathlib import Path

spec = importlib.util.spec_from_file_location('snapshot_factor', Path(__file__).resolve().parents[1]/'scripts/refresh_cra_snapshot_from_imports.py')
snapshot = importlib.util.module_from_spec(spec)
spec.loader.exec_module(snapshot)


class FundingFactorMemoryTests(unittest.TestCase):
    def cota(self):
        return dict(ehFunding=True, quantidade=400000, principalResidual=1000,
            dataInicioIso='2026-11-05', pu=1008.02903,
            historicoPu=[dict(dataIso='2026-11-06',puAtualizado=1008.02903,
                produtorioFatorDi=1.008029029150817,fatorDiAcumulado=1.008029029150817)])

    def test_preserves_full_precision_product(self):
        cota=self.cota()
        snapshot.normalize_funding_history_memory([cota],set())
        row=cota['historicoPu'][0]
        self.assertEqual(row['produtorioFatorDi'],1.008029029150817)
        self.assertEqual(row['fatorDiAcumulado'],1.008029029150817)
        self.assertEqual(row['puAtualizado'],1008.02903)

    def test_next_business_day_does_not_recompound_rounded_pu(self):
        cota=self.cota()
        snapshot.normalize_funding_history_memory([cota],set())
        row=cota['historicoPu'][0]
        product=snapshot.add_ts_factor(row['fatorDiAcumulado'],snapshot.get_ts_daily_factor(.00050788,1.05))
        self.assertAlmostEqual(snapshot.apply_ts_factor_to_pu(1000,product),1008.56658,8)

    def test_missing_products_keep_legacy_fallback(self):
        cota=self.cota()
        cota['historicoPu'][0].pop('produtorioFatorDi')
        cota['historicoPu'][0].pop('fatorDiAcumulado')
        snapshot.normalize_funding_history_memory([cota],set())
        self.assertEqual(cota['historicoPu'][0]['fatorDiAcumulado'],1008.02903/1000)


if __name__=='__main__':unittest.main()
