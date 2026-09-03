import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const input = JSON.parse(await fs.readFile("input.json", "utf8"));
const outDir = ".";
const outPath = "impacto_saida_kimberlit_395392_v3.xlsx";

function brDate(iso) {
  if (!iso) return null;
  const [y, m, d] = String(iso).slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d));
}

function setTitle(sheet, range, text) {
  const r = sheet.getRange(range);
  r.merge();
  r.values = [[text]];
  r.format = {
    fill: "#12384A",
    font: { bold: true, color: "#FFFFFF", size: 16 },
    horizontalAlignment: "left",
    verticalAlignment: "center",
  };
}

function header(range) {
  range.format = {
    fill: "#12384A",
    font: { bold: true, color: "#FFFFFF" },
    horizontalAlignment: "center",
    verticalAlignment: "center",
    borders: { preset: "all", style: "thin", color: "#D9E2E7" },
  };
}

function section(range) {
  range.format = {
    fill: "#EAF0F3",
    font: { bold: true, color: "#12384A" },
    borders: { preset: "outside", style: "thin", color: "#BFD0D8" },
  };
}

function body(range) {
  range.format = {
    borders: {
      insideHorizontal: { style: "thin", color: "#E1E7EA" },
      insideVertical: { style: "thin", color: "#E1E7EA" },
      top: { style: "thin", color: "#CCD9DF" },
      bottom: { style: "thin", color: "#CCD9DF" },
      left: { style: "thin", color: "#CCD9DF" },
      right: { style: "thin", color: "#CCD9DF" },
    },
  };
}

const title = input.foundRows[0];
const wb = Workbook.create();
const resumo = wb.worksheets.add("Resumo");
const inputs = wb.worksheets.add("Inputs");
const cenarios = wb.worksheets.add("Cenarios");
const curva = wb.worksheets.add("Curva_J");
const audit = wb.worksheets.add("Auditoria");

for (const ws of [resumo, inputs, cenarios, curva, audit]) {
  ws.showGridLines = false;
}

// Inputs
setTitle(inputs, "A1:D1", "Inputs e premissas - saida Kimberlit");
inputs.getRange("A3:B3").values = [["Base", "Valor"]];
header(inputs.getRange("A3:B3"));
inputs.getRange("A4:B25").values = [
  ["Data-base", brDate(input.dateKey)],
  ["CRA", input.cra],
  ["Lastro solicitado", "355392"],
  ["Lastro localizado", title.numeroUnico],
  ["Cedente", title.cedente],
  ["Sacado", title.sacado],
  ["Carteira VP bruto", input.base.carteiraVpBruto],
  ["Carteira VP liquido", input.base.carteiraVpLiquido],
  ["Caixa atual", input.base.caixa],
  ["Funding", input.base.funding],
  ["Despesas/provisoes", input.base.despesas],
  ["Subordinada atual", input.base.subValor],
  ["PU Sub atual", input.base.subPu],
  ["Quantidade Sub", input.base.subQuantidade],
  ["PDD total", input.base.pdd],
  ["Taxa media carteira a.m.", input.base.taxaMediaCarteiraAm],
  ["DU medio mes", 21],
  ["Taxa diaria carteira", null],
  ["Taxa diaria caixa", input.base.latestDiDaily],
  ["Taxa diaria funding", input.base.fundingDailyRate],
  ["Despesa diaria projetada", input.base.despesasDailyIncrease],
  ["Rendimento medio sub dia", input.base.avgSubReturn],
];
inputs.getRange("B4").format.numberFormat = "dd/mm/yyyy";
inputs.getRange("B10:B16").format.numberFormat = '"R$"#,##0.00;[Red]("R$"#,##0.00);-';
inputs.getRange("B17").format.numberFormat = "#,##0.000000";
inputs.getRange("B18").format.numberFormat = "#,##0";
inputs.getRange("B19:B22").format.numberFormat = "0.0000%;[Red](0.0000%);-";
inputs.getRange("B21").formulas = [["=(1+B19)^(1/B20)-1"]];
body(inputs.getRange("A4:B25"));

inputs.getRange("A27:B27").values = [["Titulo Kimberlit", "Valor"]];
header(inputs.getRange("A27:B27"));
inputs.getRange("A28:B39").values = [
  ["Numero unico", title.numeroUnico],
  ["Numero nota", title.numeroNota],
  ["Tipo titulo", title.tipoTitulo],
  ["Tipo remuneracao", title.tipoRemuneracao],
  ["Data aquisicao", brDate(title.dataAquisicao)],
  ["Data vencimento", brDate(title.dataVencimento)],
  ["Status", title.status],
  ["Taxa a.m.", title.taxa],
  ["Taxa diaria titulo", null],
  ["Valor face / VP bruto", title.valorPresenteDia],
  ["PDD titulo", title.pdd],
  ["VP liquido titulo", title.valorPresenteLiquido],
];
inputs.getRange("B32:B33").format.numberFormat = "dd/mm/yyyy";
inputs.getRange("B35:B36").format.numberFormat = "0.0000%;[Red](0.0000%);-";
inputs.getRange("B36").formulas = [["=(1+B35)^(1/$B$20)-1"]];
inputs.getRange("B37:B39").format.numberFormat = '"R$"#,##0.00;[Red]("R$"#,##0.00);-';
body(inputs.getRange("A28:B39"));

inputs.getRange("D3:E3").values = [["Premissas editaveis", "Valor"]];
header(inputs.getRange("D3:E3"));
inputs.getRange("D4:E12").values = [
  ["Valor recebido na saida", title.valorPresenteDia],
  ["Alvo conservador a recuperar", title.valorPresenteLiquido],
  ["Horizonte da curva J (DU)", 365],
  ["Bloco de alocacao gradual", 100000000],
  ["Intervalo entre blocos (DU)", 63],
  ["Alocacao inicial no D0", 0],
  ["Caixa total alocavel", null],
  ["Observacao lastro", input.exactRequestedLastroFound ? "Lastro solicitado localizado" : "Nao encontrei 355392; usei Kimberlit localizada como 395392"],
  ["Convencao", "Curva J em dias uteis; compara alocacao total imediata com alocacao gradual do caixa em carteira"],
];
inputs.getRange("E10").formulas = [["=$B$12"]];
inputs.getRange("E4:E5").format.numberFormat = '"R$"#,##0.00;[Red]("R$"#,##0.00);-';
inputs.getRange("E6:E10").format.numberFormat = "#,##0";
body(inputs.getRange("D4:E12"));

inputs.getRange("A42:E47").values = [
  ["Legenda", "", "", "", ""],
  ["Azul", "Inputs editaveis ou premissas", "", "", ""],
  ["Preto", "Formulas/calculos", "", "", ""],
  ["Verde", "Referencias internas", "", "", ""],
  ["Vermelho", "Alertas/valores negativos", "", "", ""],
  ["Fonte", "Snapshot da lamina CRA 42 em 14/08/2026", "", "", ""],
];
section(inputs.getRange("A42:E42"));
body(inputs.getRange("A43:E47"));
inputs.getRange("B4:B25").format.font = { color: "#008000" };
inputs.getRange("B28:B39").format.font = { color: "#008000" };
inputs.getRange("E4:E10").format.font = { color: "#0000FF" };
inputs.getRange("E11:E12").format.font = { color: "#C00000" };
inputs.getRange("A:A").format.columnWidth = 28;
inputs.getRange("B:B").format.columnWidth = 24;
inputs.getRange("D:D").format.columnWidth = 32;
inputs.getRange("E:E").format.columnWidth = 36;
inputs.freezePanes.freezeRows(3);

// Cenarios
setTitle(cenarios, "A1:N1", "Cenarios de caixa, alocacao e recuperacao");
cenarios.getRange("A3:N3").values = [[
  "Cenario",
  "Tipo",
  "Alocacao total",
  "Bloco",
  "Intervalo DU",
  "Caixa inicial",
  "Carteira inicial",
  "Resultado dia inicial",
  "Resultado dia final",
  "Alvo a recuperar",
  "Dias uteis recuperacao",
  "Impacto VP bruto",
  "Impacto VP liquido",
  "Observacao",
]];
header(cenarios.getRange("A3:N3"));
cenarios.getRange("A4:N6").values = [
  ["Sem nova alocacao", "Estatico", 0, 0, 0, null, null, null, null, null, null, null, null, "Mantem caixa atual e carteira sem Kimberlit"],
  ["Alocacao total imediata", "Total", null, null, 0, null, null, null, null, null, null, null, null, "Todo o caixa disponivel vira carteira no D0"],
  ["Alocacao gradual 100mm", "Gradual", null, null, null, null, null, null, null, null, null, null, null, "Caixa sai em blocos de R$ 100mm no intervalo definido"],
];
cenarios.getRange("C5").formulas = [["='Inputs'!$E$10"]];
cenarios.getRange("D5").formulas = [["='Inputs'!$E$10"]];
cenarios.getRange("C6").formulas = [["='Inputs'!$E$10"]];
cenarios.getRange("D6").formulas = [["='Inputs'!$E$7"]];
cenarios.getRange("E6").formulas = [["='Inputs'!$E$8"]];
cenarios.getRange("F4:N6").formulas = [
  [
    "='Inputs'!$B$12",
    "='Inputs'!$B$10-'Inputs'!$B$37",
    "=G4*'Inputs'!$B$21+F4*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24",
    "=H4",
    "='Inputs'!$E$5",
    "=IFERROR(MATCH(1,Curva_J!$O$4:$O$369,0)-1,\"Nao recupera\")",
    "='Inputs'!$E$4-'Inputs'!$B$39",
    "=0",
    null,
  ],
  [
    "=MAX(0,'Inputs'!$B$12-C5)",
    "='Inputs'!$B$10-'Inputs'!$B$37+C5",
    "=G5*'Inputs'!$B$21+F5*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24",
    "=H5",
    "='Inputs'!$E$5",
    "=IFERROR(MATCH(1,Curva_J!$M$4:$M$369,0)-1,\"Nao recupera\")",
    "='Inputs'!$E$4-'Inputs'!$B$39",
    "=0",
    null,
  ],
  [
    "=MAX(0,'Inputs'!$B$12-'Inputs'!$E$9)",
    "='Inputs'!$B$10-'Inputs'!$B$37+'Inputs'!$E$9",
    "=G6*'Inputs'!$B$21+F6*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24",
    "=(('Inputs'!$B$10-'Inputs'!$B$37+C6)*'Inputs'!$B$21+MAX(0,'Inputs'!$B$12-C6)*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24)",
    "='Inputs'!$E$5",
    "=IFERROR(MATCH(1,Curva_J!$N$4:$N$369,0)-1,\"Nao recupera\")",
    "='Inputs'!$E$4-'Inputs'!$B$39",
    "=0",
    null,
  ],
];
cenarios.getRange("C4:D6").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
cenarios.getRange("E4:E6").format.numberFormat = "#,##0";
cenarios.getRange("F4:J6").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
cenarios.getRange("K4:K6").format.numberFormat = "#,##0";
cenarios.getRange("L4:M6").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
body(cenarios.getRange("A4:N6"));
cenarios.getRange("A:A").format.columnWidth = 24;
cenarios.getRange("B:B").format.columnWidth = 14;
cenarios.getRange("C:N").format.columnWidth = 18;
cenarios.freezePanes.freezeRows(3);

// Curva J
setTitle(curva, "A1:O1", "Curva J - alocacao total versus gradual");
curva.getRange("A3:O3").values = [[
  "Dia util",
  "Aloc. total imediata",
  "Caixa total imediata",
  "Saldo recup. total",
  "Aloc. gradual",
  "Caixa gradual",
  "Saldo recup. gradual",
  "Aloc. sem adicional",
  "Caixa sem adicional",
  "Saldo recup. sem adicional",
  "Resultado total/dia",
  "Resultado gradual/dia",
  "Flag total",
  "Flag gradual",
  "Flag sem adicional",
]];
header(curva.getRange("A3:O3"));
const curveRows = [];
for (let i = 0; i <= 365; i++) curveRows.push([i, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
curva.getRange(`A4:O${4 + curveRows.length - 1}`).values = curveRows;
const curveFormulas = [];
for (let i = 0; i <= 365; i++) {
  const row = 4 + i;
  const gradualAllocation = `=MIN('Inputs'!$E$10,'Inputs'!$E$9+'Inputs'!$E$7*QUOTIENT(A${row},'Inputs'!$E$8))`;
  if (i === 0) {
    curveFormulas.push([
      null,
      "='Inputs'!$E$10",
      "=MAX(0,'Inputs'!$B$12-B4)",
      "=-'Inputs'!$E$5",
      gradualAllocation,
      "=MAX(0,'Inputs'!$B$12-E4)",
      "=-'Inputs'!$E$5",
      "=0",
      "='Inputs'!$B$12",
      "=-'Inputs'!$E$5",
      "=(('Inputs'!$B$10-'Inputs'!$B$37+B4)*'Inputs'!$B$21+C4*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24)",
      "=(('Inputs'!$B$10-'Inputs'!$B$37+E4)*'Inputs'!$B$21+F4*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24)",
      "=--(D4>=0)",
      "=--(G4>=0)",
      "=--(J4>=0)",
    ]);
  } else {
    curveFormulas.push([
      null,
      "='Inputs'!$E$10",
      `=MAX(0,'Inputs'!$B$12-B${row})`,
      `=D${row - 1}+K${row}`,
      gradualAllocation,
      `=MAX(0,'Inputs'!$B$12-E${row})`,
      `=G${row - 1}+L${row}`,
      "=0",
      "='Inputs'!$B$12",
      `=J${row - 1}+((('Inputs'!$B$10-'Inputs'!$B$37+H${row})*'Inputs'!$B$21+I${row}*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24))`,
      `=(('Inputs'!$B$10-'Inputs'!$B$37+B${row})*'Inputs'!$B$21+C${row}*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24)`,
      `=(('Inputs'!$B$10-'Inputs'!$B$37+E${row})*'Inputs'!$B$21+F${row}*'Inputs'!$B$22-'Inputs'!$B$13*'Inputs'!$B$23-'Inputs'!$B$24)`,
      `=--(D${row}>=0)`,
      `=--(G${row}>=0)`,
      `=--(J${row}>=0)`,
    ]);
  }
}
curva.getRange(`A4:O${4 + curveRows.length - 1}`).formulas = curveFormulas;
curva.getRange(`B4:L${4 + curveRows.length - 1}`).format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
curva.getRange(`M4:O${4 + curveRows.length - 1}`).format.numberFormat = "#,##0";
body(curva.getRange(`A4:O${4 + curveRows.length - 1}`));
curva.getRange("Q3:U3").values = [["Dia util", "Saldo recup. total", "Saldo recup. gradual", "Caixa gradual", "Alocado gradual"]];
header(curva.getRange("Q3:U3"));
const chartHelper = [];
for (let i = 0; i <= 360; i += 15) chartHelper.push([null, null, null, null, null]);
curva.getRange(`Q4:U${3 + chartHelper.length}`).values = chartHelper;
const helperFormulas = chartHelper.map((_, idx) => {
  const sourceRow = 4 + idx * 15;
  return [
    `=A${sourceRow}`,
    `=D${sourceRow}`,
    `=G${sourceRow}`,
    `=F${sourceRow}`,
    `=E${sourceRow}`,
  ];
});
curva.getRange(`Q4:U${3 + chartHelper.length}`).formulas = helperFormulas;
curva.getRange(`R4:U${3 + chartHelper.length}`).format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
body(curva.getRange(`Q4:U${3 + chartHelper.length}`));
curva.getRange("W3:Y3").values = [["Dia util", "Caixa gradual", "Alocado gradual"]];
header(curva.getRange("W3:Y3"));
curva.getRange(`W4:Y${3 + chartHelper.length}`).values = chartHelper.map(() => [null, null, null]);
const cashHelperFormulas = chartHelper.map((_, idx) => {
  const sourceRow = 4 + idx * 15;
  return [
    `=A${sourceRow}`,
    `=F${sourceRow}`,
    `=E${sourceRow}`,
  ];
});
curva.getRange(`W4:Y${3 + chartHelper.length}`).formulas = cashHelperFormulas;
curva.getRange(`X4:Y${3 + chartHelper.length}`).format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
body(curva.getRange(`W4:Y${3 + chartHelper.length}`));
curva.getRange("A:A").format.columnWidth = 12;
curva.getRange("B:O").format.columnWidth = 18;
curva.getRange("Q:U").format.columnWidth = 18;
curva.getRange("W:Y").format.columnWidth = 18;
curva.freezePanes.freezeRows(3);

// Summary
setTitle(resumo, "A1:K1", "Impacto da saida - Kimberlit");
resumo.getRange("A2:K2").values = [[`Data-base ${input.dateKey} | CRA 42 | lastro localizado ${title.numeroUnico}`]];
resumo.getRange("A2:K2").merge();
resumo.getRange("A2:K2").format = { fill: "#EAF0F3", font: { italic: true, color: "#38596A" } };
resumo.getRange("A4:K4").values = [["Resumo executivo", "", "", "", "", "", "", "", "", "", ""]];
section(resumo.getRange("A4:K4"));
resumo.getRange("A5:K11").values = [
  ["Lastro solicitado", "355392", "Lastro localizado", title.numeroUnico, "Cedente", title.cedente, "Status", title.status, "", "", ""],
  ["VP bruto titulo", title.valorPresenteDia, "PDD", title.pdd, "VP liquido", title.valorPresenteLiquido, "Taxa a.m.", title.taxa, "", "", ""],
  ["Sub atual", input.base.subValor, "PU Sub atual", input.base.subPu, "Caixa atual", input.base.caixa, "Funding", input.base.funding, "", "", ""],
  ["Impacto se recebido pelo VP bruto", null, "Impacto se recebido pelo VP liquido", null, "Impacto sem recebimento", null, "Alvo curva J", null, "", "", ""],
  ["Leitura", "Com recebimento pelo VP bruto, o efeito imediato e positivo pela liberacao do PDD. A curva J abaixo e conservadora: mede a recomposicao do VP liquido como se houvesse perda temporaria.", "", "", "", "", "", "", "", "", ""],
  ["Observacao", input.exactRequestedLastroFound ? "Lastro solicitado encontrado." : "Nao encontrei 355392 na base; foi usado o titulo Kimberlit localizado como 395392.", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", ""],
];
resumo.getRange("B8").formulas = [["='Inputs'!$E$4-'Inputs'!$B$39"]];
resumo.getRange("D8").formulas = [["=0"]];
resumo.getRange("F8").formulas = [["=-'Inputs'!$B$39"]];
resumo.getRange("H8").formulas = [["='Inputs'!$E$5"]];
resumo.getRange("A5:K11").format.wrapText = true;
resumo.getRange("B9:K9").merge();
resumo.getRange("B10:K10").merge();
resumo.getRange("B9:K10").format = { wrapText: true, verticalAlignment: "top" };
resumo.getRange("A9:A10").format = { verticalAlignment: "top" };
resumo.getRange("A9:K10").format.rowHeight = 42;
resumo.getRange("B6:H8").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
resumo.getRange("H6").format.numberFormat = "0.00%";
resumo.getRange("B7:F7").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
resumo.getRange("D7").format.numberFormat = "#,##0.000000";
body(resumo.getRange("A5:K11"));

resumo.getRange("A13:K13").values = [["Impacto na subordinada", "", "", "", "", "", "", "", "", "", ""]];
section(resumo.getRange("A13:K13"));
resumo.getRange("A14:K14").values = [["Cenario", "Valor recebido", "Delta Sub R$", "Delta Sub %", "Delta PU", "Sub pos", "PU pos", "Leitura", "", "", ""]];
header(resumo.getRange("A14:K14"));
resumo.getRange("A15:H18").values = [
  ["Recebe VP bruto", null, null, null, null, null, null, "Efeito positivo pelo PDD liberado"],
  ["Recebe VP liquido", null, null, null, null, null, null, "Efeito neutro na Sub"],
  ["Sem recebimento", null, null, null, null, null, null, "Cenario conservador da curva J"],
  ["Recuperacao da curva", null, null, null, null, null, null, "Quando saldo acumulado volta a zero"],
];
resumo.getRange("B15:G18").formulas = [
  [
    "='Inputs'!$B$37",
    "=B15-'Inputs'!$B$39",
    "=C15/'Inputs'!$B$15",
    "=C15/'Inputs'!$B$17",
    "='Inputs'!$B$15+C15",
    "=F15/'Inputs'!$B$17",
  ],
  [
    "='Inputs'!$B$39",
    "=B16-'Inputs'!$B$39",
    "=C16/'Inputs'!$B$15",
    "=C16/'Inputs'!$B$17",
    "='Inputs'!$B$15+C16",
    "=F16/'Inputs'!$B$17",
  ],
  [
    "=0",
    "=B17-'Inputs'!$B$39",
    "=C17/'Inputs'!$B$15",
    "=C17/'Inputs'!$B$17",
    "='Inputs'!$B$15+C17",
    "=F17/'Inputs'!$B$17",
  ],
  [
    "=\"-\"",
    "=0",
    "=0",
    "=0",
    "='Inputs'!$B$15",
    "='Inputs'!$B$16",
  ],
];
resumo.getRange("B15:C18").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
resumo.getRange("D15:D18").format.numberFormat = "0.0000%;[Red](0.0000%);-";
resumo.getRange("E15:E18").format.numberFormat = "#,##0.000000;[Red](#,##0.000000);-";
resumo.getRange("F15:F18").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
resumo.getRange("G15:G18").format.numberFormat = "#,##0.000000";
resumo.getRange("H15:H18").format.wrapText = true;
body(resumo.getRange("A15:H18"));

resumo.getRange("A21:K21").values = [["Cenarios de recuperacao", "", "", "", "", "", "", "", "", "", ""]];
section(resumo.getRange("A21:K21"));
resumo.getRange("A22:K22").values = [["Cenario", "Tipo", "Alocacao total", "Bloco", "Intervalo DU", "Caixa inicial", "Carteira inicial", "Resultado inicial", "Resultado final", "Dias uteis", "Alvo"]];
header(resumo.getRange("A22:K22"));
const sumFormulas = [];
for (let r = 23; r <= 25; r++) {
  const source = r - 19;
  sumFormulas.push([
    `=Cenarios!A${source}`,
    `=Cenarios!B${source}`,
    `=Cenarios!C${source}`,
    `=Cenarios!D${source}`,
    `=Cenarios!E${source}`,
    `=Cenarios!F${source}`,
    `=Cenarios!G${source}`,
    `=Cenarios!H${source}`,
    `=Cenarios!I${source}`,
    `=Cenarios!K${source}`,
    `=Cenarios!J${source}`,
  ]);
}
resumo.getRange("A23:K25").formulas = sumFormulas;
resumo.getRange("C23:D25").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
resumo.getRange("E23:E25").format.numberFormat = "#,##0";
resumo.getRange("F23:I25").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
resumo.getRange("J23:J25").format.numberFormat = "#,##0";
resumo.getRange("K23:K25").format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
body(resumo.getRange("A23:K25"));

resumo.getRange("A29:K29").values = [["Curva J - saldo acumulado a recuperar", "", "", "", "", "", "", "", "", "", ""]];
section(resumo.getRange("A29:K29"));
resumo.getRange("A30:K30").values = [["O primeiro grafico compara a recuperacao com alocacao total imediata versus a alocacao gradual em blocos. O segundo grafico mostra o caixa saindo no tempo e o valor acumulado alocado.", "", "", "", "", "", "", "", "", "", ""]];
resumo.getRange("A30:K30").merge();
resumo.getRange("A30:K30").format = { fill: "#FFFFFF", font: { italic: true, color: "#38596A" }, wrapText: true };

const chart = resumo.charts.add("line", curva.getRange(`Q3:S${3 + chartHelper.length}`));
chart.title = "Curva J - alocacao total x gradual (R$)";
chart.hasLegend = true;
chart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
chart.yAxis = { numberFormatCode: '"R$"#,##0;[Red]("R$"#,##0);-' };
chart.setPosition("A32", "K50");

const cashChart = resumo.charts.add("line", curva.getRange(`W3:Y${3 + chartHelper.length}`));
cashChart.title = "Caixa saindo no tempo x carteira alocada (R$)";
cashChart.hasLegend = true;
cashChart.xAxis = { axisType: "textAxis", textStyle: { fontSize: 9 } };
cashChart.yAxis = { numberFormatCode: '"R$"#,##0;[Red]("R$"#,##0);-' };
cashChart.setPosition("A51", "K69");

resumo.getRange("A72:K72").values = [["Notas de leitura", "", "", "", "", "", "", "", "", "", ""]];
section(resumo.getRange("A72:K72"));
resumo.getRange("A73:K77").values = [
  ["1", "Se o vencimento antecipado gerar recebimento pelo VP bruto, o impacto imediato na subordinada e positivo em aproximadamente o PDD do titulo.", "", "", "", "", "", "", "", "", ""],
  ["2", "A curva J e conservadora e usa o VP liquido do titulo como valor a recompor; a curva gradual usa blocos de R$ 100mm saindo do caixa no intervalo definido na aba Inputs.", "", "", "", "", "", "", "", "", ""],
  ["3", "Taxas, funding diario, despesa diaria, bloco de alocacao e intervalo de alocacao sao inputs editaveis.", "", "", "", "", "", "", "", "", ""],
  ["4", "Como o numero solicitado 355392 nao apareceu na base, a analise usa o titulo Kimberlit localizado como 395392.", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "", ""],
];
for (let r = 73; r <= 76; r++) resumo.getRange(`B${r}:K${r}`).merge();
resumo.getRange("A73:K77").format.wrapText = true;
resumo.getRange("B73:K76").format = { wrapText: true, verticalAlignment: "top" };
resumo.getRange("A73:K76").format.rowHeight = 34;
body(resumo.getRange("A73:K77"));

resumo.getRange("A:A").format.columnWidth = 20;
resumo.getRange("B:K").format.columnWidth = 16;
resumo.freezePanes.freezeRows(3);

// Audit
setTitle(audit, "A1:J1", "Auditoria - historico usado");
audit.getRange("A3:J3").values = [["Data", "Sub valor", "PU Sub", "Rendimento dia", "Carteira VP bruto", "Carteira VP liquido", "PDD", "Caixa", "Funding", "Despesas"]];
header(audit.getRange("A3:J3"));
const histRows = input.history.map(h => [
  brDate(h.dateKey),
  h.subValue,
  h.subPu,
  h.subReturn,
  h.carteiraVpBruto,
  h.carteiraVpLiquido,
  h.pdd,
  h.caixa,
  h.funding,
  h.despesas,
]);
audit.getRange(`A4:J${3 + histRows.length}`).values = histRows;
audit.getRange(`A4:A${3 + histRows.length}`).format.numberFormat = "dd/mm/yyyy";
audit.getRange(`B4:B${3 + histRows.length}`).format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
audit.getRange(`C4:C${3 + histRows.length}`).format.numberFormat = "#,##0.000000";
audit.getRange(`D4:D${3 + histRows.length}`).format.numberFormat = "0.000%;[Red](0.000%);-";
audit.getRange(`E4:J${3 + histRows.length}`).format.numberFormat = '"R$"#,##0;[Red]("R$"#,##0);-';
body(audit.getRange(`A4:J${3 + histRows.length}`));
audit.getRange("A:J").format.columnWidth = 18;
audit.freezePanes.freezeRows(3);

// General touch-ups
for (const ws of [resumo, inputs, cenarios, curva, audit]) {
  const used = ws.getUsedRange();
  used.format.font = { name: "Aptos", size: 10 };
}

const inspect = await wb.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "formula error scan",
});
console.log(inspect.ndjson);

const preview = await wb.render({ sheetName: "Resumo", autoCrop: "all", scale: 1, format: "png" });
await fs.writeFile("preview_resumo.png", new Uint8Array(await preview.arrayBuffer()));

const xlsx = await SpreadsheetFile.exportXlsx(wb);
await xlsx.save(outPath);
console.log(JSON.stringify({ output: outPath, preview: "preview_resumo.png" }));
