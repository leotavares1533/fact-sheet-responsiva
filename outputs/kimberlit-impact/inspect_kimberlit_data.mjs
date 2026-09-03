import fs from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(process.cwd(), "../..");
const dataDir = path.join(projectRoot, "data", "cras", "cra-modelo");

function number(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (value == null || value === "") return 0;
  const text = String(value).replace(/\s/g, "").replace(/[R$]/g, "");
  if (text.includes(",") && text.includes(".")) return Number(text.replace(/\./g, "").replace(",", ".")) || 0;
  if (text.includes(",")) return Number(text.replace(",", ".")) || 0;
  return Number(text) || 0;
}

async function loadSnapshot(file) {
  const text = await fs.readFile(file, "utf8");
  const match = text.match(/=\s*(\{[\s\S]*\});?\s*$/);
  if (!match) throw new Error(`Nao foi possivel ler JSON em ${file}`);
  return JSON.parse(match[1]);
}

const files = (await fs.readdir(dataDir)).filter((f) => /^\d{4}-\d{2}-\d{2}\.js$/.test(f)).sort();
const latestFile = files.at(-1);
const snap = await loadSnapshot(path.join(dataDir, latestFile));
const rows = snap.carteira || [];
const kimberlit = rows.find((row) => String(row.numeroUnico || row.numeroNota || "").trim() === "395392")
  || rows.find((row) => String(row.cedente || "").toUpperCase().includes("KIMBERLIT"));

const keySample = rows[0] ? Object.keys(rows[0]) : [];
const rootKeys = Object.keys(snap);
const ativoKeys = Object.keys(snap.ativo || {});
const passivoKeys = Object.keys(snap.passivo || {});
const metrics = {
  latestFile,
  rootKeys,
  ativoKeys,
  passivoKeys,
  carteiraRows: rows.length,
  sampleKeys: keySample,
  kimberlit,
  snapshotMetrics: {
    carteiraVp: snap.ativo?.carteiraVp ?? snap.ativo?.carteiraVpLiquida ?? snap.carteiraVpLiquida,
    caixaTotal: snap.ativo?.caixaTotal ?? snap.caixaTotal,
    funding: snap.passivo?.fundingSrMez ?? snap.fundingSrMez,
    subResidual: snap.passivo?.subordinadaResidual ?? snap.subordinadaResidual,
    pdd: snap.ativo?.pddTotal ?? snap.pddTotal,
  },
};

const byMonth = new Map();
for (const row of rows) {
  const acqDate = String(row.dataAquisicao || row.dataAquisicaoIso || "").slice(0, 10);
  const liqDate = String(row.dataLiquidacao || row.dataLiquidacaoIso || "").slice(0, 10);
  const acqMonth = /^\d{4}-\d{2}-\d{2}$/.test(acqDate) ? acqDate.slice(0, 7) : "";
  const liqMonth = /^\d{4}-\d{2}-\d{2}$/.test(liqDate) ? liqDate.slice(0, 7) : "";
  const acqValue = number(row.valorAquisicao ?? row.valorDeAquisicao ?? row.valorNominal ?? row.valorFace ?? row.valorPresente);
  const liqValue = number(row.valorLiquidacao);
  if (acqMonth) {
    if (!byMonth.has(acqMonth)) byMonth.set(acqMonth, { month: acqMonth, compras: 0, liquidacoes: 0, linhasCompra: 0, linhasLiquidacao: 0 });
    const entry = byMonth.get(acqMonth);
    entry.compras += acqValue;
    entry.linhasCompra += 1;
  }
  if (liqMonth && liqValue > 0) {
    if (!byMonth.has(liqMonth)) byMonth.set(liqMonth, { month: liqMonth, compras: 0, liquidacoes: 0, linhasCompra: 0, linhasLiquidacao: 0 });
    const entry = byMonth.get(liqMonth);
    entry.liquidacoes += liqValue;
    entry.linhasLiquidacao += 1;
  }
}

metrics.months = [...byMonth.values()].sort((a, b) => a.month.localeCompare(b.month)).map((m) => ({
  ...m,
  liquido: m.compras - m.liquidacoes,
}));

console.log(JSON.stringify(metrics, null, 2));
