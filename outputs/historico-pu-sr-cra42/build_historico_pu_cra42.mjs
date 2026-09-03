import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = process.cwd();
const projectRoot = path.resolve(outputDir, "../..");
const dataDir = path.join(projectRoot, "data", "cras", "cra-modelo");
const outputPath = path.join(outputDir, "historico_pu_sr_cra42.xlsx");
const seriesStartDates = {
  SR1: "2025-05-09",
  SR2: "2025-05-29",
  SR3: "2025-06-18",
  SUB: "2025-04-15",
};

function extractJsonArray(text, key) {
  const keyIndex = text.indexOf(`"${key}"`);
  if (keyIndex < 0) return null;
  const colonIndex = text.indexOf(":", keyIndex);
  const start = text.indexOf("[", colonIndex);
  if (start < 0) return null;

  let depth = 0;
  let inString = false;
  let escaped = false;
  for (let index = start; index < text.length; index += 1) {
    const char = text[index];
    if (inString) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === "\"") {
        inString = false;
      }
      continue;
    }
    if (char === "\"") {
      inString = true;
    } else if (char === "[") {
      depth += 1;
    } else if (char === "]") {
      depth -= 1;
      if (depth === 0) return text.slice(start, index + 1);
    }
  }
  return null;
}

function parseDateKey(dateKey) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
}

function formatDateBr(dateKey) {
  const [year, month, day] = dateKey.split("-");
  return `${day}/${month}/${year}`;
}

function shouldShowPu(item, dateKey) {
  if (!item) return false;
  const startDate = seriesStartDates[item.classe];
  if (startDate && dateKey < startDate) return false;
  if (item.dataInicioIso && dateKey < item.dataInicioIso) return false;
  if (item.dataHistoricaDisponivel === false && Number(item.pu || 0) === 0) return false;
  return Number.isFinite(Number(item.pu));
}

async function loadRows() {
  const files = (await fs.readdir(dataDir))
    .filter((file) => /^\d{4}-\d{2}-\d{2}\.js$/.test(file))
    .sort();

  const rows = [];
  const detailed = [];
  const notes = [];

  for (const file of files) {
    const dateKey = file.slice(0, 10);
    const filePath = path.join(dataDir, file);
    const text = await fs.readFile(filePath, "utf8");
    const payload = extractJsonArray(text, "performanceCotas");
    if (!payload) {
      notes.push([dateKey, file, "Bloco performanceCotas nao localizado"]);
      continue;
    }
    const performance = JSON.parse(payload);
    const srItems = Object.fromEntries(
      performance
        .filter((item) => item && (item.tipo === "sr" || item.classe === "SUB"))
        .map((item) => [item.classe, item]),
    );
    const sr1 = srItems.SR1;
    const sr2 = srItems.SR2;
    const sr3 = srItems.SR3;
    const sub = srItems.SUB;
    rows.push([
      parseDateKey(dateKey),
      dateKey,
      shouldShowPu(sr1, dateKey) ? Number(sr1.pu) : null,
      shouldShowPu(sr2, dateKey) ? Number(sr2.pu) : null,
      shouldShowPu(sr3, dateKey) ? Number(sr3.pu) : null,
      shouldShowPu(sub, dateKey) ? Number(sub.pu) : null,
    ]);
    for (const item of [sr1, sr2, sr3, sub].filter(Boolean)) {
      detailed.push([
        parseDateKey(dateKey),
        dateKey,
        item.classe || "",
        item.label || "",
        item.ifCodigo || "",
        item.taxa || "",
        item.quantidade ?? null,
        shouldShowPu(item, dateKey) ? Number(item.pu) : null,
        item.valor ?? null,
      ]);
    }
  }

  return { rows, detailed, notes };
}

function setHeader(range) {
  range.format = {
    fill: "#0B3A46",
    font: { bold: true, color: "#FFFFFF" },
  };
}

function setSubHeader(range) {
  range.format = {
    fill: "#E8EFF2",
    font: { bold: true, color: "#0F2433" },
  };
}

const { rows, detailed, notes } = await loadRows();
if (!rows.length) throw new Error("Nenhum PU SR do CRA 42 foi encontrado.");

const workbook = Workbook.create();
const summary = workbook.worksheets.add("Resumo");
const history = workbook.worksheets.add("Historico PU SR");
const detail = workbook.worksheets.add("Base Detalhada");
const audit = workbook.worksheets.add("Auditoria");

for (const sheet of [summary, history, detail, audit]) {
  sheet.showGridLines = false;
}

const lastRow = rows[rows.length - 1];
const previousRow = rows.length > 1 ? rows[rows.length - 2] : null;

summary.getRange("A1:F1").merge();
summary.getRange("A1").values = [["Historico de PU das cotas - CRA 42"]];
summary.getRange("A1").format = {
  fill: "#0B3A46",
  font: { bold: true, color: "#FFFFFF", size: 16 },
};
summary.getRange("A3:B7").values = [
  ["CRA", "CRA 42"],
  ["Periodo", `${formatDateBr(rows[0][1])} a ${formatDateBr(lastRow[1])}`],
  ["Quantidade de datas", rows.length],
  ["Fonte", "data/cras/cra-modelo/*.js"],
  ["Gerado em", new Date()],
];
summary.getRange("A3:A7").format = {
  fill: "#E8EFF2",
  font: { bold: true, color: "#0F2433" },
};
summary.getRange("B7").format.numberFormat = "dd/mm/yyyy";

summary.getRange("A10:F10").values = [["Serie", "Ultima data", "PU atual", "PU D-1", "Variacao", "Taxa"]];
setHeader(summary.getRange("A10:F10"));
const latestItems = detailed.filter((row) => row[1] === lastRow[1]);
const previousByClass = new Map(
  previousRow
    ? [
        ["SR1", previousRow[2]],
        ["SR2", previousRow[3]],
        ["SR3", previousRow[4]],
        ["SUB", previousRow[5]],
      ]
    : [],
);
const summaryRows = ["SR1", "SR2", "SR3", "SUB"].map((classe) => {
  const item = latestItems.find((row) => row[2] === classe);
  const puAtual = item?.[7] ?? null;
  const puAnterior = previousByClass.get(classe) ?? null;
  const variacao = puAtual != null && puAnterior ? puAtual / puAnterior - 1 : null;
  return [classe, lastRow[0], puAtual, puAnterior, variacao, item?.[5] ?? ""];
});
summary.getRange("A11:F14").values = summaryRows;
summary.getRange("B11:B14").format.numberFormat = "dd/mm/yyyy";
summary.getRange("C11:D14").format.numberFormat = "0.000000";
summary.getRange("E11:E14").format.numberFormat = "0.0000%";
summary.getRange("A10:F14").format.borders = { preset: "all", style: "thin", color: "#D9E2E7" };
summary.getRange("A:F").format.autofitColumns();
summary.getRange("A1").format.rowHeight = 28;

history.getRange("A1:F1").values = [["Data", "DateKey", "PU Senior 1a", "PU Senior 2a", "PU Senior 3a", "PU Subordinada"]];
setHeader(history.getRange("A1:F1"));
history.getRangeByIndexes(1, 0, rows.length, 6).values = rows;
history.getRange(`A2:A${rows.length + 1}`).format.numberFormat = "dd/mm/yyyy";
history.getRange(`C2:F${rows.length + 1}`).format.numberFormat = "0.000000";
history.getRange(`A1:F${rows.length + 1}`).format.borders = { preset: "all", style: "thin", color: "#D9E2E7" };
history.tables.add(`A1:F${rows.length + 1}`, true, "HistoricoPuSrCra42");
history.freezePanes.freezeRows(1);
history.getRange("A:F").format.autofitColumns();

detail.getRange("A1:I1").values = [["Data", "DateKey", "Classe", "Serie", "Codigo IF", "Taxa", "Quantidade", "PU", "Valor"]];
setHeader(detail.getRange("A1:I1"));
detail.getRangeByIndexes(1, 0, detailed.length, 9).values = detailed;
detail.getRange(`A2:A${detailed.length + 1}`).format.numberFormat = "dd/mm/yyyy";
detail.getRange(`G2:G${detailed.length + 1}`).format.numberFormat = "#,##0";
detail.getRange(`H2:H${detailed.length + 1}`).format.numberFormat = "0.000000";
detail.getRange(`I2:I${detailed.length + 1}`).format.numberFormat = "$#,##0.00";
detail.getRange(`A1:I${detailed.length + 1}`).format.borders = { preset: "all", style: "thin", color: "#D9E2E7" };
detail.tables.add(`A1:I${detailed.length + 1}`, true, "BaseDetalhadaPuSrCra42");
detail.freezePanes.freezeRows(1);
detail.getRange("A:I").format.autofitColumns();

audit.getRange("A1:D1").values = [["Item", "Resultado", "Detalhe", "Observacao"]];
setHeader(audit.getRange("A1:D1"));
audit.getRange("A2:D6").values = [
  ["CRA identificado", "OK", "cra-modelo / CRA 42", ""],
  ["Datas processadas", rows.length, `${formatDateBr(rows[0][1])} a ${formatDateBr(lastRow[1])}`, ""],
  ["Cotas", "OK", "SR1, SR2, SR3, SUB", "PU em branco antes da integralizacao/disponibilidade historica."],
  ["Arquivos sem bloco de PU", notes.length, notes.length ? "Ver linhas abaixo" : "Nenhum", ""],
  ["Fonte", "OK", "data/cras/cra-modelo/*.js", "Dados extraidos do bloco performanceCotas."],
];
setSubHeader(audit.getRange("A8:C8"));
audit.getRange("A8:C8").values = [["DateKey", "Arquivo", "Nota"]];
if (notes.length) {
  audit.getRangeByIndexes(8, 0, notes.length, 3).values = notes;
}
audit.getRange("A:D").format.autofitColumns();

const checks = await workbook.inspect({
  kind: "table",
  sheetId: "Historico PU SR",
  range: `A1:F${Math.min(rows.length + 1, 12)}`,
  include: "values,formulas",
  tableMaxRows: 12,
  tableMaxCols: 7,
});
console.log(checks.ndjson);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 300 },
  summary: "final formula error scan",
});
console.log(errors.ndjson);

const previewSummary = await workbook.render({ sheetName: "Resumo", autoCrop: "all", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "preview_resumo.png"), new Uint8Array(await previewSummary.arrayBuffer()));
const previewHistory = await workbook.render({ sheetName: "Historico PU SR", range: "A1:F25", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "preview_historico.png"), new Uint8Array(await previewHistory.arrayBuffer()));
const previewDetail = await workbook.render({ sheetName: "Base Detalhada", range: "A1:I25", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "preview_base_detalhada.png"), new Uint8Array(await previewDetail.arrayBuffer()));
const previewAudit = await workbook.render({ sheetName: "Auditoria", autoCrop: "all", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "preview_auditoria.png"), new Uint8Array(await previewAudit.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);
console.log(JSON.stringify({ outputPath, rows: rows.length, detailRows: detailed.length, notes: notes.length }));
