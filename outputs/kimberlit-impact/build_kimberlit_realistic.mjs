import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const projectRoot = path.resolve(process.cwd(), "../..");
const dataDir = path.join(projectRoot, "data", "cras", "cra-modelo");
const outputPath = path.join(process.cwd(), "impacto_saida_kimberlit_395392_v7.xlsx");

const COLORS = {
  navy: "#12384A",
  navy2: "#0D3A49",
  teal: "#2F667F",
  orange: "#C76B2A",
  green: "#00844D",
  red: "#C43D32",
  cream: "#F8F3EA",
  pale: "#F3F7F8",
  grid: "#DCE5E8",
  text: "#102033",
};

function num(value) {
  if (typeof value === "number") return Number.isFinite(value) ? value : 0;
  if (value == null || value === "") return 0;
  const text = String(value).replace(/\s/g, "").replace(/[R$]/g, "");
  if (text.includes(",") && text.includes(".")) return Number(text.replace(/\./g, "").replace(",", ".")) || 0;
  if (text.includes(",")) return Number(text.replace(",", ".")) || 0;
  return Number(text) || 0;
}

function dateValue(iso) {
  if (!iso) return null;
  const [y, m, d] = String(iso).slice(0, 10).split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(Date.UTC(y, m - 1, d));
}

function addBusinessDays(iso, days) {
  const d = dateValue(iso);
  let added = 0;
  while (added < days) {
    d.setUTCDate(d.getUTCDate() + 1);
    const day = d.getUTCDay();
    if (day !== 0 && day !== 6) added += 1;
  }
  return d;
}

function brDate(iso) {
  const d = dateValue(iso);
  if (!d) return "";
  return `${String(d.getUTCDate()).padStart(2, "0")}/${String(d.getUTCMonth() + 1).padStart(2, "0")}/${d.getUTCFullYear()}`;
}

function percentile(values, p) {
  const sorted = values.filter((v) => Number.isFinite(v)).sort((a, b) => a - b);
  if (!sorted.length) return 0;
  const idx = (sorted.length - 1) * p;
  const lo = Math.floor(idx);
  const hi = Math.ceil(idx);
  if (lo === hi) return sorted[lo];
  return sorted[lo] + (sorted[hi] - sorted[lo]) * (idx - lo);
}

function avg(values) {
  const valid = values.filter((v) => Number.isFinite(v));
  return valid.length ? valid.reduce((a, b) => a + b, 0) / valid.length : 0;
}

async function loadSnapshot(file) {
  const text = await fs.readFile(file, "utf8");
  const match = text.match(/=\s*(\{[\s\S]*\});?\s*$/);
  if (!match) throw new Error(`Nao foi possivel ler snapshot: ${file}`);
  return JSON.parse(match[1]);
}

async function loadLatestSnapshot() {
  const files = (await fs.readdir(dataDir)).filter((f) => /^\d{4}-\d{2}-\d{2}\.js$/.test(f)).sort();
  const latestFile = files.at(-1);
  if (!latestFile) throw new Error("Nao encontrei snapshots do CRA 42.");
  const snapshot = await loadSnapshot(path.join(dataDir, latestFile));
  return { dateKey: latestFile.replace(".js", ""), snapshot };
}

function buildMonthlyHistory(rows, latestDateKey) {
  const map = new Map();
  for (const row of rows) {
    const acquisitionDate = String(row.dataAquisicao || row.dataAquisicaoIso || "").slice(0, 10);
    const liquidationDate = String(row.dataLiquidacao || row.dataLiquidacaoIso || "").slice(0, 10);
    const acquisitionMonth = /^\d{4}-\d{2}-\d{2}$/.test(acquisitionDate) ? acquisitionDate.slice(0, 7) : "";
    const liquidationMonth = /^\d{4}-\d{2}-\d{2}$/.test(liquidationDate) ? liquidationDate.slice(0, 7) : "";
    const acquisitionValue = num(row.valorAquisicao ?? row.valorDeAquisicao ?? row.valorPresenteDia ?? row.valorFace);
    const liquidationValue = num(row.valorLiquidacao);

    if (acquisitionMonth) {
      if (!map.has(acquisitionMonth)) {
        map.set(acquisitionMonth, { month: acquisitionMonth, purchases: 0, liquidations: 0, purchaseCount: 0, liquidationCount: 0 });
      }
      const m = map.get(acquisitionMonth);
      m.purchases += acquisitionValue;
      m.purchaseCount += 1;
    }
    if (liquidationMonth && liquidationValue > 0) {
      if (!map.has(liquidationMonth)) {
        map.set(liquidationMonth, { month: liquidationMonth, purchases: 0, liquidations: 0, purchaseCount: 0, liquidationCount: 0 });
      }
      const m = map.get(liquidationMonth);
      m.liquidations += liquidationValue;
      m.liquidationCount += 1;
    }
  }

  const currentMonth = latestDateKey.slice(0, 7);
  const months = [...map.values()].sort((a, b) => a.month.localeCompare(b.month)).map((m) => ({
    ...m,
    net: m.purchases - m.liquidations,
  }));
  const firstMonth = months[0]?.month || "";
  const fullMonthsForStats = months.filter((m) => m.month < currentMonth && m.month !== firstMonth);
  const netQ1 = percentile(fullMonthsForStats.map((m) => m.net), 0.25);
  const netQ3 = percentile(fullMonthsForStats.map((m) => m.net), 0.75);
  const netIqr = netQ3 - netQ1;
  const buyQ1 = percentile(fullMonthsForStats.map((m) => m.purchases), 0.25);
  const buyQ3 = percentile(fullMonthsForStats.map((m) => m.purchases), 0.75);
  const buyIqr = buyQ3 - buyQ1;
  const liqQ1 = percentile(fullMonthsForStats.map((m) => m.liquidations), 0.25);
  const liqQ3 = percentile(fullMonthsForStats.map((m) => m.liquidations), 0.75);
  const liqIqr = liqQ3 - liqQ1;

  const rowsWithFlags = months.map((m) => {
    const reasons = [];
    if (m.month === currentMonth) reasons.push("Mes parcial");
    if (m.month === firstMonth) reasons.push("Formacao inicial");
    if (fullMonthsForStats.length >= 6) {
      if (m.net < netQ1 - 1.5 * netIqr || m.net > netQ3 + 1.5 * netIqr) reasons.push("Compra liquida fora da curva");
      if (m.purchases < buyQ1 - 1.5 * buyIqr || m.purchases > buyQ3 + 1.5 * buyIqr) reasons.push("Compras fora da curva");
      if (m.liquidations < liqQ1 - 1.5 * liqIqr || m.liquidations > liqQ3 + 1.5 * liqIqr) reasons.push("Liquidacoes fora da curva");
    }
    const used = reasons.length === 0;
    return { ...m, used, reason: used ? "Usado na media" : reasons.join("; ") };
  });

  return {
    rows: rowsWithFlags,
    averageNet: avg(rowsWithFlags.filter((m) => m.used).map((m) => m.net)),
    averageNetForCash: Math.max(0, avg(rowsWithFlags.filter((m) => m.used).map((m) => m.net))),
    thresholds: {
      netLow: netQ1 - 1.5 * netIqr,
      netHigh: netQ3 + 1.5 * netIqr,
      buyLow: buyQ1 - 1.5 * buyIqr,
      buyHigh: buyQ3 + 1.5 * buyIqr,
      liqLow: liqQ1 - 1.5 * liqIqr,
      liqHigh: liqQ3 + 1.5 * liqIqr,
    },
  };
}

function applyTitle(sheet, range, title, subtitle = "") {
  const r = sheet.getRange(range);
  r.merge();
  r.values = [[subtitle ? `${title}\n${subtitle}` : title]];
  r.format = {
    fill: COLORS.navy,
    font: { bold: true, color: "#FFFFFF", size: 16 },
    horizontalAlignment: "left",
    verticalAlignment: "center",
    wrapText: true,
  };
  r.format.rowHeight = 44;
}

function header(range) {
  range.format = {
    fill: COLORS.navy2,
    font: { bold: true, color: "#FFFFFF" },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: "#C9D6DC" },
  };
}

function section(range) {
  range.format = {
    fill: COLORS.pale,
    font: { bold: true, color: COLORS.navy },
    borders: { preset: "outside", style: "thin", color: "#C8D5DA" },
  };
}

function tableBody(range) {
  range.format = {
    borders: {
      insideHorizontal: { style: "thin", color: COLORS.grid },
      insideVertical: { style: "thin", color: COLORS.grid },
      top: { style: "thin", color: COLORS.grid },
      bottom: { style: "thin", color: COLORS.grid },
      left: { style: "thin", color: COLORS.grid },
      right: { style: "thin", color: COLORS.grid },
    },
  };
}

function money(range) {
  range.format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
}

function pct(range, decimals = 2) {
  range.format.numberFormat = decimals === 4 ? "0.0000%;[Red](0.0000%);-" : "0.00%;[Red](0.00%);-";
}

function intFmt(range) {
  range.format.numberFormat = "#,##0;[Red](#,##0);-";
}

function formatColumns(sheet, widths) {
  widths.forEach((width, idx) => {
    const letter = columnLetter(idx + 1);
    sheet.getRange(`${letter}:${letter}`).format.columnWidth = width;
  });
}

function columnLetter(n) {
  let s = "";
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - 1) / 26);
  }
  return s;
}

function addScenarioSheet(sheet, kind, horizonRows) {
  const name = kind === "linear" ? "Cenario linear" : kind === "semReducao" ? "Caixa sem reducao" : "Reducao de caixa";
  const subtitle = kind === "linear"
    ? "Alocacao diaria conforme media historica normalizada de compras liquidas"
    : kind === "semReducao"
      ? "Saida da Kimberlit sem reduzir caixa para novas compras"
      : "Alocacao em blocos editaveis, como na versao anterior";
  const premise = kind === "linear" ? "Saida linear historica" : kind === "semReducao" ? "Caixa sem reducao" : "Reducao por blocos";
  applyTitle(
    sheet,
    "A1:V2",
    kind === "linear" ? "Cenario linear - DRE e Curva J" : kind === "semReducao" ? "Caixa sem reducao - DRE e Curva J" : "Reducao de caixa - DRE e Curva J",
    subtitle,
  );
  sheet.getRange("A4:H7").values = [
    ["Resumo do cenario", "", "", "", "", "", "", ""],
    ["Premissa principal", premise, "Valor recebido Kimberlit", "='Inputs'!$B$31", "Caixa maximo alocavel", "='Inputs'!$B$36", "Recuperacao curva J DU", `=IFERROR(INDEX($A$10:$A$${9 + horizonRows},MATCH("Recuperado",$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`],
    ["Media compra liquida mes", "='Inputs'!$B$26", "Saida diaria", "='Inputs'!$B$27", "Taxa carteira dia", "='Inputs'!$B$20", "Taxa caixa dia", "='Inputs'!$B$22"],
    ["Bloco", "='Inputs'!$B$29", "Intervalo DU", "='Inputs'!$B$30", "Retorno 400MM DU", `=IFERROR(INDEX($A$10:$A$${9 + horizonRows},MATCH("Retorno 400MM",$V$10:$V$${9 + horizonRows},0)),"Nao volta")`, "Horizon DU", "='Inputs'!$B$28"],
  ];
  section(sheet.getRange("A4:H4"));
  tableBody(sheet.getRange("A5:H7"));
  money(sheet.getRange("B6:D6"));
  money(sheet.getRange("D5:F5"));
  pct(sheet.getRange("F6:H6"), 4);
  intFmt(sheet.getRange("B7:H7"));

  const headers = [
    "DU",
    "Data",
    "Carteira VP bruto",
    "PDD",
    "Carteira VP liquida",
    "Receita carteira",
    "Caixa",
    "Receita caixa",
    "Funding",
    "Custo funding",
    "Despesas/provisoes",
    "Despesa dia",
    "Resultado estimado dia",
    "Sub liquida",
    "PU Sub",
    "Sub cenario atual",
    "Delta acumulado vs atual",
    "Rend. sub dia",
    "Carteira realocada",
    "Caixa pos-saida",
    "Status curva J",
    "Status 400MM",
  ];
  sheet.getRange("A9:V9").values = [headers];
  header(sheet.getRange("A9:V9"));

  const rows = [];
  const formulas = [];
  for (let i = 0; i < horizonRows; i += 1) {
    const excelRow = 10 + i;
    const du = i;
    rows.push([du, addBusinessDays(base.dateKey, du), ...Array(headers.length - 2).fill(null)]);
    const allocFormula =
      kind === "linear"
        ? `=MIN('Inputs'!$B$36,'Inputs'!$B$27*A${excelRow})`
        : kind === "semReducao"
          ? "=0"
          : `=MIN('Inputs'!$B$36,'Inputs'!$B$37+QUOTIENT(A${excelRow},'Inputs'!$B$30)*'Inputs'!$B$29)`;
    formulas.push([
      null,
      null,
      i === 0
        ? `='Inputs'!$B$10`
        : `=(C${excelRow - 1}-IF(A${excelRow}=1,'Inputs'!$B$32,0))*(1+'Inputs'!$B$20)+(S${excelRow}-S${excelRow - 1})`,
      i === 0
        ? `='Inputs'!$B$11`
        : `=MAX(0,D${excelRow - 1}-IF(A${excelRow}=1,'Inputs'!$B$33,0)+(S${excelRow}-S${excelRow - 1})*'Inputs'!$B$25)`,
      `=C${excelRow}-D${excelRow}`,
      `=E${excelRow}*'Inputs'!$B$20`,
      i === 0
        ? `='Inputs'!$B$13`
        : `=(G${excelRow - 1}+IF(A${excelRow}=1,'Inputs'!$B$31,0)-(S${excelRow}-S${excelRow - 1}))*(1+'Inputs'!$B$22)`,
      `=G${excelRow}*'Inputs'!$B$22`,
      i === 0 ? `='Inputs'!$B$14` : `=I${excelRow - 1}*(1+'Inputs'!$B$23)`,
      i === 0 ? `=I${excelRow}*'Inputs'!$B$23` : `=I${excelRow - 1}*'Inputs'!$B$23`,
      i === 0 ? `='Inputs'!$B$15` : `=K${excelRow - 1}+L${excelRow}`,
      `='Inputs'!$B$24`,
      i === 0 ? "=0" : `=N${excelRow}-N${excelRow - 1}`,
      `=E${excelRow}+G${excelRow}-I${excelRow}-K${excelRow}`,
      `=N${excelRow}/'Inputs'!$B$18`,
      i === 0
        ? `=N${excelRow}`
        : `='Inputs'!$B$10*(1+'Inputs'!$B$20)^A${excelRow}-'Inputs'!$B$11+'Inputs'!$B$13*(1+'Inputs'!$B$22)^A${excelRow}-I${excelRow}-K${excelRow}`,
      `=N${excelRow}-P${excelRow}`,
      i === 0 ? "=0" : `=IFERROR(N${excelRow}/N${excelRow - 1}-1,0)`,
      allocFormula,
      `=G${excelRow}`,
      i === 0 ? '=""' : `=IF(AND(Q${excelRow}>=0,MIN($Q$11:Q${excelRow})<0),"Recuperado","")`,
      i === 0 ? '=""' : `=IF(AND(N${excelRow}>=400000000,COUNTIF($V$10:V${excelRow - 1},"Retorno 400MM")=0),"Retorno 400MM","")`,
    ]);
  }
  sheet.getRange(`A10:V${9 + horizonRows}`).values = rows;
  sheet.getRange(`A10:V${9 + horizonRows}`).formulas = formulas;
  tableBody(sheet.getRange(`A10:V${9 + horizonRows}`));
  sheet.getRange(`B10:B${9 + horizonRows}`).format.numberFormat = "dd/mm/yyyy";
  money(sheet.getRange(`C10:N${9 + horizonRows}`));
  money(sheet.getRange(`P10:Q${9 + horizonRows}`));
  money(sheet.getRange(`S10:T${9 + horizonRows}`));
  sheet.getRange(`O10:O${9 + horizonRows}`).format.numberFormat = "#,##0.000000";
  pct(sheet.getRange(`R10:R${9 + horizonRows}`), 4);
  sheet.getRange(`A10:A${9 + horizonRows}`).format.numberFormat = "#,##0";

  const helperStart = 23;
  const helperEnd = helperStart + horizonRows - 1;
  sheet.getRange(`W${helperStart}:X${helperStart}`).values = [["DU", "Delta acumulado"]];
  header(sheet.getRange(`W${helperStart}:X${helperStart}`));
  const helperFormulas = [];
  for (let i = 0; i < horizonRows; i += 1) {
    const srcRow = 10 + i;
    helperFormulas.push([`=A${srcRow}`, `=Q${srcRow}`]);
  }
  sheet.getRange(`W${helperStart + 1}:X${helperEnd + 1}`).formulas = helperFormulas;
  money(sheet.getRange(`X${helperStart + 1}:X${helperEnd + 1}`));
  const chart = sheet.charts.add("line", sheet.getRange(`W${helperStart}:X${helperEnd + 1}`));
  chart.title = kind === "linear" ? "Curva J - recuperacao linear" : kind === "semReducao" ? "Curva J - caixa sem reducao" : "Curva J - reducao de caixa";
  chart.hasLegend = false;
  chart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
  chart.yAxis = { numberFormatCode: '"R$"#,##0' };
  chart.setPosition("W3", "AD18");
  sheet.freezePanes.freezeRows(9);
  formatColumns(sheet, [8, 13, 16, 14, 16, 15, 15, 13, 15, 13, 17, 12, 17, 16, 12, 16, 16, 12, 16, 15, 14, 16, 8, 16]);
}

const { dateKey, snapshot } = await loadLatestSnapshot();
const rows = snapshot.carteira || [];
const title = rows.find((row) => String(row.numeroUnico || row.numeroNota || "").trim() === "395392")
  || rows.find((row) => String(row.cedente || "").toUpperCase().includes("KIMBERLIT"));
if (!title) throw new Error("Nao encontrei o titulo Kimberlit na carteira do CRA 42.");

const monthly = buildMonthlyHistory(rows, dateKey);
const latestR30 = snapshot.rendimento30Dias?.[0] || {};
const subQuantity = num(snapshot.passivo?.subordinadaQuantidade) || 400000;
const base = {
  dateKey,
  reportDate: brDate(dateKey),
  carteiraVpBruto: num(snapshot.ativo?.carteiraVpBruto ?? snapshot.carteiraResumo?.valorPresente),
  carteiraVpLiquido: num(snapshot.ativo?.carteiraVpLiquido ?? snapshot.ativo?.carteiraVp ?? snapshot.carteiraResumo?.valorPresenteLiquido),
  pdd: num(snapshot.ativo?.pddTotal ?? snapshot.carteiraResumo?.pddTotal),
  caixa: num(snapshot.ativo?.caixa ?? snapshot.informacoesComplementares?.saldoCaixa),
  funding: num(snapshot.passivo?.fundingTotal),
  despesas: num(snapshot.passivo?.deducoesSubordinadaTotal ?? snapshot.passivo?.deducoesTotal ?? snapshot.passivo?.despesasTotal),
  subValor: num(snapshot.passivo?.subordinadaTotal),
  subPu: num(snapshot.passivo?.subordinadaPuResidual),
  subQuantidade: subQuantity,
  taxaMediaCarteiraAm: num(snapshot.carteiraResumo?.taxaMediaPonderada) || 0.018807089189763638,
  fundingDailyRate: num(latestR30.cotas?.SR1?.resultadoDia) || 0.000568259992184128,
  latestDiDaily: 0.00055131,
  despesasDailyIncrease: num(snapshot.passivo?.provisoesImportadasTotal) > 0 ? 128000.660954 : 128000.660954,
};

const kimberlit = {
  numeroUnico: String(title.numeroUnico || title.numeroNota || ""),
  numeroNota: String(title.numeroNota || title.numeroUnico || ""),
  cedente: String(title.cedente || ""),
  sacado: String(title.sacado || ""),
  tipoTitulo: String(title.tipoTitulo || ""),
  tipoRemuneracao: String(title.tipoRemuneracao || ""),
  dataAquisicao: String(title.dataAquisicao || ""),
  dataVencimento: String(title.dataVencimento || ""),
  taxa: num(title.taxa),
  valorFace: num(title.valorFace ?? title.valorPresenteDia),
  valorPresenteDia: num(title.valorPresenteDia ?? title.valorFace),
  pdd: num(title.pdd),
  valorPresenteLiquido: num(title.valorPresenteLiquido ?? (num(title.valorPresenteDia) - num(title.pdd))),
  status: String(title.status || ""),
  arquivoOrigem: String(title.arquivoOrigem || ""),
};

const horizonRows = 366;
const wb = Workbook.create();
const resumo = wb.worksheets.add("Resumo");
const inputs = wb.worksheets.add("Inputs");
const historico = wb.worksheets.add("Historico CRA");
const linear = wb.worksheets.add("Cenario linear");
const reducao = wb.worksheets.add("Reducao de caixa");
const semReducao = wb.worksheets.add("Caixa sem reducao");
const checks = wb.worksheets.add("Checks");

for (const ws of [resumo, inputs, historico, linear, reducao, semReducao, checks]) {
  ws.showGridLines = false;
}

// Inputs
applyTitle(inputs, "A1:D2", "Inputs e premissas", `CRA 42 | data-base ${base.reportDate} | titulo Kimberlit ${kimberlit.numeroUnico}`);
inputs.getRange("A4:B4").values = [["Base atual", "Valor"]];
header(inputs.getRange("A4:B4"));
inputs.getRange("A5:B37").values = [
  ["Data-base", dateValue(base.dateKey)],
  ["CRA", "CRA 42"],
  ["Lastro analisado", kimberlit.numeroUnico],
  ["Cedente", kimberlit.cedente],
  ["Sacado", kimberlit.sacado],
  ["Carteira VP bruto", base.carteiraVpBruto],
  ["PDD atual", base.pdd],
  ["Carteira VP liquida", base.carteiraVpLiquido],
  ["Caixa atual", base.caixa],
  ["Funding", base.funding],
  ["Despesas/provisoes", base.despesas],
  ["Subordinada atual", base.subValor],
  ["PU Sub atual", base.subPu],
  ["Quantidade Sub", base.subQuantidade],
  ["Taxa media carteira a.m.", base.taxaMediaCarteiraAm],
  ["Taxa diaria carteira", null],
  ["DU medio mes", 21],
  ["Taxa diaria caixa", base.latestDiDaily],
  ["Taxa diaria funding", base.fundingDailyRate],
  ["Despesa diaria", base.despesasDailyIncrease],
  ["PDD / carteira bruto", null],
  ["Media compra liquida mes", null],
  ["Saida caixa diaria linear", null],
  ["Horizonte da curva J (DU)", horizonRows - 1],
  ["Bloco reducao caixa", 100000000],
  ["Intervalo entre blocos (DU)", 63],
  ["Valor recebido na saida", kimberlit.valorPresenteLiquido],
  ["Kimberlit VP bruto", kimberlit.valorPresenteDia],
  ["Kimberlit PDD", kimberlit.pdd],
  ["Kimberlit VP liquido", kimberlit.valorPresenteLiquido],
  ["Caixa pos-saida", null],
  ["Caixa maximo alocavel", null],
  ["Alocacao inicial", 0],
];
inputs.getRange("B5").format.numberFormat = "dd/mm/yyyy";
money(inputs.getRange("B10:B17"));
inputs.getRange("B17").format.numberFormat = "#,##0.000000";
intFmt(inputs.getRange("B18"));
pct(inputs.getRange("B19:B20"), 4);
intFmt(inputs.getRange("B21"));
pct(inputs.getRange("B22:B23"), 4);
money(inputs.getRange("B24:B24"));
pct(inputs.getRange("B25:B25"), 4);
money(inputs.getRange("B26:B27"));
intFmt(inputs.getRange("B28"));
money(inputs.getRange("B29:B29"));
intFmt(inputs.getRange("B30"));
money(inputs.getRange("B31:B37"));
inputs.getRange("B20").formulas = [["=(1+B19)^(1/B21)-1"]];
inputs.getRange("B25").formulas = [["=B11/B10"]];
inputs.getRange("B26").formulas = [["='Historico CRA'!$B$5"]];
inputs.getRange("B27").formulas = [["=B26/B21"]];
inputs.getRange("B35").formulas = [["=B13+B31"]];
inputs.getRange("B36").formulas = [["=B35"]];
tableBody(inputs.getRange("A5:B37"));
inputs.getRange("B20:B21").format.font = { color: "#0000FF" };
inputs.getRange("B22").format.font = { color: "#0000FF" };
inputs.getRange("B23:B25").format.font = { color: "#0000FF" };
inputs.getRange("B29:B31").format.font = { color: "#0000FF" };
inputs.getRange("B36:B37").format.font = { color: "#0000FF" };

inputs.getRange("D4:E4").values = [["Auditoria do titulo", "Valor"]];
header(inputs.getRange("D4:E4"));
inputs.getRange("D5:E16").values = [
  ["Numero unico", kimberlit.numeroUnico],
  ["Numero nota", kimberlit.numeroNota],
  ["Tipo titulo", kimberlit.tipoTitulo],
  ["Tipo remuneracao", kimberlit.tipoRemuneracao],
  ["Data aquisicao", dateValue(kimberlit.dataAquisicao)],
  ["Data vencimento", dateValue(kimberlit.dataVencimento)],
  ["Status", kimberlit.status],
  ["Taxa titulo a.m.", kimberlit.taxa],
  ["Valor aquisicao", num(title.valorAquisicao)],
  ["Valor face", kimberlit.valorFace],
  ["Arquivo origem", kimberlit.arquivoOrigem],
  ["Fonte", "Snapshot diario da lamina CRA 42"],
];
inputs.getRange("E9:E10").format.numberFormat = "dd/mm/yyyy";
pct(inputs.getRange("E12"), 4);
money(inputs.getRange("E13:E14"));
tableBody(inputs.getRange("D5:E16"));
inputs.getRange("D:D").format.columnWidth = 30;
inputs.getRange("E:E").format.columnWidth = 38;
formatColumns(inputs, [32, 28, 4, 30, 38]);
inputs.freezePanes.freezeRows(4);

// Historico CRA
applyTitle(historico, "A1:J2", "Historico de compras e liquidacoes", "Media mensal normalizada: compras de titulos menos titulos liquidados, excluindo extremos");
historico.getRange("A4:B7").values = [
  ["Resumo historico", "Valor"],
  ["Media liquida usada", null],
  ["Meses usados", null],
  ["Metodo", "IQR 1,5x + exclusao de formacao inicial e mes parcial"],
];
section(historico.getRange("A4:B4"));
historico.getRange("B5").formulas = [[`=AVERAGEIF(I11:I${10 + monthly.rows.length},"Sim",D11:D${10 + monthly.rows.length})`]];
historico.getRange("B6").formulas = [[`=COUNTIF(I11:I${10 + monthly.rows.length},"Sim")`]];
money(historico.getRange("B5"));
intFmt(historico.getRange("B6"));
tableBody(historico.getRange("A5:B7"));

historico.getRange("D4:J7").values = [
  ["Limites estatisticos", "Min", "Max", "", "", "", ""],
  ["Compra liquida", monthly.thresholds.netLow, monthly.thresholds.netHigh, "", "", "", ""],
  ["Compras", monthly.thresholds.buyLow, monthly.thresholds.buyHigh, "", "", "", ""],
  ["Liquidacoes", monthly.thresholds.liqLow, monthly.thresholds.liqHigh, "", "", "", ""],
];
section(historico.getRange("D4:J4"));
money(historico.getRange("E5:F7"));
tableBody(historico.getRange("D5:F7"));

const histHeader = [["Mes", "Compras", "Liquidacoes", "Compra liquida", "Qtd compras", "Qtd liquidacoes", "Excluido?", "Motivo", "Usado na media", "% carteira atual"]];
historico.getRange("A10:J10").values = histHeader;
header(historico.getRange("A10:J10"));
const histRows = monthly.rows.map((m) => [
  m.month,
  m.purchases,
  m.liquidations,
  null,
  m.purchaseCount,
  m.liquidationCount,
  m.used ? "Nao" : "Sim",
  m.reason,
  m.used ? "Sim" : "Nao",
  null,
]);
historico.getRange(`A11:J${10 + histRows.length}`).values = histRows;
const histFormulas = monthly.rows.map((_, idx) => {
  const row = 11 + idx;
  return [null, null, null, `=B${row}-C${row}`, null, null, null, null, null, `=D${row}/'Inputs'!$B$10`];
});
historico.getRange(`A11:J${10 + histRows.length}`).formulas = histFormulas;
tableBody(historico.getRange(`A11:J${10 + histRows.length}`));
money(historico.getRange(`B11:D${10 + histRows.length}`));
intFmt(historico.getRange(`E11:F${10 + histRows.length}`));
pct(historico.getRange(`J11:J${10 + histRows.length}`), 2);
historico.freezePanes.freezeRows(10);
formatColumns(historico, [12, 16, 16, 16, 12, 15, 12, 34, 14, 14]);

const histChart = historico.charts.add("line", historico.getRange(`A10:D${10 + histRows.length}`));
histChart.title = "Compra liquida mensal do CRA 42";
histChart.hasLegend = true;
histChart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
histChart.yAxis = { numberFormatCode: '"R$"#,##0' };
histChart.setPosition("L4", "S19");

// Scenario sheets
addScenarioSheet(linear, "linear", horizonRows);
addScenarioSheet(reducao, "reducao", horizonRows);
addScenarioSheet(semReducao, "semReducao", horizonRows);

// Checks
applyTitle(checks, "A1:F2", "Checks e reconciliacao", "Controles simples para validar premissas e totais");
checks.getRange("A4:F4").values = [["Check", "Atual", "Esperado", "Diferenca", "Tolerancia", "Status"]];
header(checks.getRange("A4:F4"));
checks.getRange("A5:F10").values = [
  ["Kimberlit localizado", 1, 1, null, 0, null],
  ["Sub atual confere", null, null, null, 1, null],
  ["Media normalizada nao negativa para saida de caixa", null, 0, null, 0, null],
  ["Valor recebido <= VP bruto", null, null, null, 1, null],
  ["Cenario linear recupera no horizonte", null, "Recuperado", null, 0, null],
  ["Reducao de caixa recupera no horizonte", null, "Recuperado", null, 0, null],
];
checks.getRange("B6").formulas = [["='Inputs'!$B$12+'Inputs'!$B$13-'Inputs'!$B$14-'Inputs'!$B$15"]];
checks.getRange("C6").formulas = [["='Inputs'!$B$16"]];
checks.getRange("D5:D10").formulas = [
  ["=B5-C5"],
  ["=B6-C6"],
  ["=B7-C7"],
  ["=B8-C8"],
  ["=IF(B9=C9,0,1)"],
  ["=IF(B10=C10,0,1)"],
];
checks.getRange("B7").formulas = [["='Inputs'!$B$27"]];
checks.getRange("B8").formulas = [["='Inputs'!$B$31"]];
checks.getRange("C8").formulas = [["='Inputs'!$B$32"]];
checks.getRange("B9").formulas = [[`=IFERROR(INDEX('Cenario linear'!$U$10:$U$${9 + horizonRows},MATCH("Recuperado",'Cenario linear'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`]];
checks.getRange("B10").formulas = [[`=IFERROR(INDEX('Reducao de caixa'!$U$10:$U$${9 + horizonRows},MATCH("Recuperado",'Reducao de caixa'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`]];
checks.getRange("F5:F10").formulas = [
  ["=IF(ABS(D5)<=E5,\"OK\",\"Revisar\")"],
  ["=IF(ABS(D6)<=E6,\"OK\",\"Revisar\")"],
  ["=IF(B7>=C7,\"OK\",\"Revisar\")"],
  ["=IF(B8<=C8+E8,\"OK\",\"Revisar\")"],
  ["=IF(B9=C9,\"OK\",\"Revisar\")"],
  ["=IF(B10=C10,\"OK\",\"Revisar\")"],
];
money(checks.getRange("B6:D8"));
tableBody(checks.getRange("A5:F10"));
formatColumns(checks, [42, 22, 22, 16, 12, 14]);

// Resumo
applyTitle(resumo, "A1:L2", "Impacto Kimberlit - CRA 42", "Analise baseada no historico real de compras/liquidacoes e curva J de recuperacao");
resumo.getRange("A4:L7").values = [
  ["Data-base", "='Inputs'!$B$5", "Sub atual", "='Inputs'!$B$16", "PU Sub", "='Inputs'!$B$17", "Kimberlit VP liquido", "='Inputs'!$B$34", "Media liquida mes", "='Inputs'!$B$26", "Status", "='Checks'!$F$5"],
  ["Caixa atual", "='Inputs'!$B$13", "Carteira VP liquida", "='Inputs'!$B$12", "PDD atual", "='Inputs'!$B$11", "Valor recebido", "='Inputs'!$B$31", "Saida diaria linear", "='Inputs'!$B$27", "Checks", "=COUNTIF('Checks'!$F$5:$F$10,\"OK\")&\"/6 OK\""],
  ["Recuperacao linear (DU)", `=IFERROR(INDEX('Cenario linear'!$A$10:$A$${9 + horizonRows},MATCH("Recuperado",'Cenario linear'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`, "Recuperacao blocos (DU)", `=IFERROR(INDEX('Reducao de caixa'!$A$10:$A$${9 + horizonRows},MATCH("Recuperado",'Reducao de caixa'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`, "Caixa sem reducao (DU)", `=IFERROR(INDEX('Caixa sem reducao'!$A$10:$A$${9 + horizonRows},MATCH("Recuperado",'Caixa sem reducao'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`, "Bloco", "='Inputs'!$B$29", "Intervalo bloco", "='Inputs'!$B$30", "Ponto de partida", "Atual"],
  ["Observacao", "A curva J mede o delta acumulado contra o cenario atual; o retorno 400MM marca quando a sub liquida volta a pelo menos R$ 400 mi.", "", "", "", "", "", "", "", "", "", ""],
];
section(resumo.getRange("A4:L4"));
tableBody(resumo.getRange("A5:L7"));
resumo.getRange("A4:L7").format.wrapText = true;
resumo.getRange("A4:L7").format.verticalAlignment = "center";
resumo.getRange("A4:L7").format.rowHeight = 30;
money(resumo.getRange("B5:J6"));
money(resumo.getRange("H6:J6"));
money(resumo.getRange("H6:H6"));
money(resumo.getRange("H5:H5"));
money(resumo.getRange("J5:J6"));
resumo.getRange("B4").format.numberFormat = "dd/mm/yyyy";
money(resumo.getRange("D4"));
resumo.getRange("F4").format.numberFormat = "#,##0.000000";
money(resumo.getRange("H4:J4"));
intFmt(resumo.getRange("B6:F6"));
intFmt(resumo.getRange("J6"));
money(resumo.getRange("H6"));

resumo.getRange("A10:I10").values = [["Cenario", "Descricao", "Recuperacao curva J DU", "Retorno 400MM DU", "Delta D+1", "Pior ponto", "PU no pior ponto", "Sub no fim", "Comentario"]];
header(resumo.getRange("A10:I10"));
resumo.getRange("A11:I13").values = [
  ["Linear", "Compras liquidas historicas normalizadas", null, null, null, null, null, null, "Projetado pela media mensal ajustada"],
  ["Reducao caixa", "Alocacao em blocos editaveis", null, null, null, null, null, null, "Edita bloco e intervalo na aba Inputs"],
  ["Caixa sem reducao", "Saida da Kimberlit sem reduzir caixa", null, null, null, null, null, null, "Mantem caixa sem realocar em carteira"],
];
resumo.getRange("C11:H13").formulas = [
  [
    `=IFERROR(INDEX('Cenario linear'!$A$10:$A$${9 + horizonRows},MATCH("Recuperado",'Cenario linear'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`,
    `=IFERROR(INDEX('Cenario linear'!$A$10:$A$${9 + horizonRows},MATCH("Retorno 400MM",'Cenario linear'!$V$10:$V$${9 + horizonRows},0)),"Nao volta")`,
    "='Cenario linear'!Q11",
    `=MIN('Cenario linear'!Q10:Q${9 + horizonRows})`,
    `=INDEX('Cenario linear'!O10:O${9 + horizonRows},MATCH(MIN('Cenario linear'!Q10:Q${9 + horizonRows}),'Cenario linear'!Q10:Q${9 + horizonRows},0))`,
    `=INDEX('Cenario linear'!N10:N${9 + horizonRows},${horizonRows})`,
  ],
  [
    `=IFERROR(INDEX('Reducao de caixa'!$A$10:$A$${9 + horizonRows},MATCH("Recuperado",'Reducao de caixa'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`,
    `=IFERROR(INDEX('Reducao de caixa'!$A$10:$A$${9 + horizonRows},MATCH("Retorno 400MM",'Reducao de caixa'!$V$10:$V$${9 + horizonRows},0)),"Nao volta")`,
    "='Reducao de caixa'!Q11",
    `=MIN('Reducao de caixa'!Q10:Q${9 + horizonRows})`,
    `=INDEX('Reducao de caixa'!O10:O${9 + horizonRows},MATCH(MIN('Reducao de caixa'!Q10:Q${9 + horizonRows}),'Reducao de caixa'!Q10:Q${9 + horizonRows},0))`,
    `=INDEX('Reducao de caixa'!N10:N${9 + horizonRows},${horizonRows})`,
  ],
  [
    `=IFERROR(INDEX('Caixa sem reducao'!$A$10:$A$${9 + horizonRows},MATCH("Recuperado",'Caixa sem reducao'!$U$10:$U$${9 + horizonRows},0)),"Nao recupera")`,
    `=IFERROR(INDEX('Caixa sem reducao'!$A$10:$A$${9 + horizonRows},MATCH("Retorno 400MM",'Caixa sem reducao'!$V$10:$V$${9 + horizonRows},0)),"Nao volta")`,
    "='Caixa sem reducao'!Q11",
    `=MIN('Caixa sem reducao'!Q10:Q${9 + horizonRows})`,
    `=INDEX('Caixa sem reducao'!O10:O${9 + horizonRows},MATCH(MIN('Caixa sem reducao'!Q10:Q${9 + horizonRows}),'Caixa sem reducao'!Q10:Q${9 + horizonRows},0))`,
    `=INDEX('Caixa sem reducao'!N10:N${9 + horizonRows},${horizonRows})`,
  ],
];
tableBody(resumo.getRange("A11:I13"));
intFmt(resumo.getRange("C11:D13"));
money(resumo.getRange("E11:F13"));
resumo.getRange("G11:G13").format.numberFormat = "#,##0.000000";
money(resumo.getRange("H11:H13"));
formatColumns(resumo, [18, 34, 22, 19, 17, 19, 18, 22, 28, 20, 15, 18]);

const recoveryChartRows = Math.min(121, horizonRows);
resumo.getRange("K16:O16").values = [["DU", "Linear", "Reducao caixa", "Caixa sem reducao", "Marco 400MM"]];
header(resumo.getRange("K16:O16"));
const recoveryFormulas = [];
for (let i = 0; i < recoveryChartRows; i += 1) {
  const srcRow = 10 + i;
  recoveryFormulas.push([
    `='Cenario linear'!A${srcRow}`,
    `='Cenario linear'!N${srcRow}`,
    `='Reducao de caixa'!N${srcRow}`,
    `='Caixa sem reducao'!N${srcRow}`,
    "=400000000",
  ]);
}
resumo.getRange(`K17:O${16 + recoveryChartRows}`).formulas = recoveryFormulas;
money(resumo.getRange(`L17:O${16 + recoveryChartRows}`));
intFmt(resumo.getRange(`K17:K${16 + recoveryChartRows}`));
const recoveryChart = resumo.charts.add("line", resumo.getRange(`K16:O${16 + recoveryChartRows}`));
recoveryChart.title = "Recuperacao da sub liquida ate R$ 400MM";
recoveryChart.hasLegend = true;
recoveryChart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
recoveryChart.yAxis = { numberFormatCode: '"R$"#,##0' };
recoveryChart.setPosition("A16", "I32");

resumo.freezePanes.freezeRows(10);

await fs.mkdir(path.dirname(outputPath), { recursive: true });
const output = await SpreadsheetFile.exportXlsx(wb);
await output.save(outputPath);

const inspectSummary = await wb.inspect({
  kind: "table",
  sheetId: "Resumo",
  range: "A1:I14",
  include: "values,formulas",
  tableMaxRows: 14,
  tableMaxCols: 9,
  maxChars: 4000,
});
console.log(JSON.stringify({ summaryInspectChars: inspectSummary.ndjson.length }));

const formulaErrors = await wb.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(formulaErrors.ndjson);

const preview = await wb.render({ sheetName: "Resumo", range: "A1:I32", scale: 1, format: "png" });
await fs.writeFile(path.join(process.cwd(), "preview_resumo_v7.png"), new Uint8Array(await preview.arrayBuffer()));

console.log(JSON.stringify({
  outputPath,
  dateKey: base.dateKey,
  kimberlit,
  averageNetMonthly: monthly.averageNet,
  averageNetForCash: monthly.averageNetForCash,
  monthsUsed: monthly.rows.filter((m) => m.used).map((m) => m.month),
  monthsExcluded: monthly.rows.filter((m) => !m.used).map((m) => ({ month: m.month, reason: m.reason })),
}, null, 2));

process.exit(0);
