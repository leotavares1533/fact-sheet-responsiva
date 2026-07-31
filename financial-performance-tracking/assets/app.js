const formatCurrency = (value, digits = 0) =>
  Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });

const formatNumber = (value, digits = 0) =>
  Number(value || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });

const formatPercent = (value, digits = 2) =>
  `${Number(value || 0).toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })}%`;

const formatSignedPercent = (value, digits = 2) => {
  const number = Number(value || 0);
  const sign = number > 0 ? "+" : "";
  return `${sign}${number.toLocaleString("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  })}%`;
};

const formatDate = (dateKey) => {
  const [year, month, day] = String(dateKey).split("-");
  return `${day}/${month}/${year}`;
};

const addBusinessDaysBack = (dateKey, daysBack) => {
  const [year, month, day] = dateKey.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  let remaining = daysBack;
  while (remaining > 0) {
    date.setDate(date.getDate() - 1);
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) remaining -= 1;
  }
  return date.toISOString().slice(0, 10);
};

const operations = [
  {
    id: "btg-cpra-50",
    investor: "BTG",
    name: "BTG CPR-F R$ 50MM",
    shortName: "CPRF R$ 50MM",
    account: "98750-9",
    cash: 10009407,
    portfolioVp: 54820000,
    portfolioVn: 55680000,
    fundingBalance: 50184312,
    syntheticSub: 5538051.26,
    previousSyntheticSub: 5532479.59,
    monthStartSyntheticSub: 121714.10,
    fundingRate: 1.62,
    portfolioRate: 2.05,
    duration: 214,
    overdue: 0,
    warning: "ok",
    portfolio: [
      ["Agro Horizonte Ltda", "CPR-F", 11800000, 11690000, 2.08, "12/12/2026", "Em dia"],
      ["Fazenda Santa Luzia", "CPR-F", 8200000, 8070000, 2.02, "20/11/2026", "Em dia"],
      ["Sementes Norte S.A.", "CPR-F", 6900000, 6740000, 2.12, "08/01/2027", "Em dia"],
      ["Cooperativa Vale Verde", "CPR-F", 5100000, 5010000, 1.98, "16/10/2026", "Atencao"]
    ]
  },
  {
    id: "btg-cpra-100",
    investor: "BTG",
    name: "BTG CPR-F R$ 100MM",
    shortName: "CPRF R$ 100MM",
    account: "98749-1",
    cash: 109582042,
    portfolioVp: 96340000,
    portfolioVn: 97870000,
    fundingBalance: 198793617,
    syntheticSub: 7128425.07,
    previousSyntheticSub: 7150469.68,
    monthStartSyntheticSub: 253268.05,
    fundingRate: 1.68,
    portfolioRate: 2.18,
    duration: 261,
    overdue: 810000,
    warning: "warn",
    portfolio: [
      ["Grupo Safra Campo", "CPR-F", 22400000, 21960000, 2.16, "28/02/2027", "Em dia"],
      ["Agropecuaria Serra Azul", "NP", 17300000, 16980000, 2.21, "30/03/2027", "Em dia"],
      ["Fazenda Canaa", "CPR-F", 12600000, 12390000, 2.12, "15/01/2027", "Em dia"],
      ["Cerealista Primavera", "CPR-F", 6800000, 6640000, 2.19, "10/09/2026", "Atraso leve"]
    ]
  },
  {
    id: "btg-cra-50",
    investor: "BTG",
    name: "CRA 50MM",
    shortName: "CRA 50MM",
    account: "98748-3",
    cash: 6509447,
    portfolioVp: 49230000,
    portfolioVn: 50150000,
    fundingBalance: 49635134,
    syntheticSub: 6104312.98,
    previousSyntheticSub: 6101207.70,
    monthStartSyntheticSub: 5792457.71,
    fundingRate: 1.55,
    portfolioRate: 1.95,
    duration: 188,
    overdue: 0,
    warning: "ok",
    portfolio: [
      ["Produtor Modelo I", "CPR-F", 9200000, 9060000, 1.96, "14/11/2026", "Em dia"],
      ["Produtor Modelo II", "NC", 7300000, 7210000, 1.92, "19/12/2026", "Em dia"],
      ["Produtor Modelo III", "CPR-F", 5100000, 5010000, 1.99, "08/10/2026", "Em dia"]
    ]
  },
  {
    id: "artesanal-one",
    investor: "Artesanal",
    name: "CRA ONE R$ 30MM",
    shortName: "CRA ONE R$ 30MM",
    account: "98747-5",
    cash: 25216328,
    portfolioVp: 30780000,
    portfolioVn: 31220000,
    fundingBalance: 50641547,
    syntheticSub: 5354781.12,
    previousSyntheticSub: 5358138.31,
    monthStartSyntheticSub: -224796.72,
    fundingRate: 1.71,
    portfolioRate: 2.08,
    duration: 167,
    overdue: 250000,
    warning: "warn",
    portfolio: [
      ["Boa Colheita Agricola", "CPR-F", 7900000, 7780000, 2.05, "22/12/2026", "Em dia"],
      ["Fazenda Terra Alta", "NP", 6600000, 6480000, 2.10, "05/02/2027", "Em dia"],
      ["Rural Sul Ltda", "CPR-F", 4100000, 4040000, 2.04, "25/09/2026", "Atencao"]
    ]
  },
  {
    id: "artesanal-two",
    investor: "Artesanal",
    name: "CRA TWO R$ 41MM",
    shortName: "CRA TWO R$ 41MM",
    account: "Itau Vinculada",
    cash: 19450042,
    portfolioVp: 20970000,
    portfolioVn: 21340000,
    fundingBalance: 41031548,
    syntheticSub: -611506.10,
    previousSyntheticSub: -601267.48,
    monthStartSyntheticSub: -488782.75,
    fundingRate: 1.86,
    portfolioRate: 1.79,
    duration: 132,
    overdue: 1260000,
    warning: "bad",
    portfolio: [
      ["Vale do Milho Ltda", "CPR-F", 8100000, 7900000, 1.78, "29/08/2026", "Atraso leve"],
      ["Cia Armazens Gerais", "NC", 6300000, 6170000, 1.82, "18/10/2026", "Em dia"],
      ["Agro Sul Comercio", "NP", 4200000, 4130000, 1.74, "02/09/2026", "Atencao"]
    ]
  },
  {
    id: "ceres-carteira-100",
    investor: "Ceres",
    name: "CRA's Carteira R$ 100MM",
    shortName: "CRA's Carteira R$ 100MM",
    account: "98751-7",
    cash: 28615676,
    portfolioVp: 75220000,
    portfolioVn: 76600000,
    fundingBalance: 103595536,
    syntheticSub: 240140.39,
    previousSyntheticSub: 240790.71,
    monthStartSyntheticSub: 317956.37,
    fundingRate: 1.74,
    portfolioRate: 1.77,
    duration: 229,
    overdue: 390000,
    warning: "warn",
    portfolio: [
      ["Produtor Integrado I", "CPR-F", 11400000, 11200000, 1.81, "17/12/2026", "Em dia"],
      ["Produtor Integrado II", "NC", 9800000, 9630000, 1.76, "27/11/2026", "Em dia"],
      ["Produtor Integrado III", "CPR-F", 7600000, 7480000, 1.73, "09/10/2026", "Atencao"]
    ]
  },
  {
    id: "ceres-carteira-50",
    investor: "Ceres",
    name: "CRA's Carteira R$ 50MM",
    shortName: "CRA's Carteira R$ 50MM",
    account: "Itau Vinculada",
    cash: 313728,
    portfolioVp: 49140000,
    portfolioVn: 50300000,
    fundingBalance: 49329767,
    syntheticSub: 124060.98,
    previousSyntheticSub: 122265.57,
    monthStartSyntheticSub: 67313.11,
    fundingRate: 1.74,
    portfolioRate: 1.86,
    duration: 205,
    overdue: 0,
    warning: "ok",
    portfolio: [
      ["Fazenda Modelo IV", "CPR-F", 10200000, 10040000, 1.86, "20/12/2026", "Em dia"],
      ["Sementes Oeste Ltda", "NC", 8400000, 8240000, 1.88, "13/11/2026", "Em dia"],
      ["Produtor Modelo V", "NP", 6200000, 6110000, 1.84, "02/02/2027", "Em dia"]
    ]
  }
];

const initialFundingId = new URLSearchParams(window.location.search).get("funding");
const hasInitialFunding = operations.some((operation) => operation.id === initialFundingId);

const state = {
  dateKey: "2026-07-28",
  selectedId: hasInitialFunding ? initialFundingId : operations[0].id,
  view: hasInitialFunding ? "individual" : "gerencial"
};

const nodes = {
  dateSelector: document.getElementById("date-selector"),
  fundingSelector: document.getElementById("funding-selector"),
  printButton: document.getElementById("print-button"),
  summaryStrip: document.getElementById("summary-strip"),
  managementView: document.getElementById("management-view"),
  detailView: document.getElementById("detail-view"),
  managementDate: document.getElementById("management-date"),
  cashTable: document.getElementById("cash-table"),
  resultTable: document.getElementById("result-table"),
  historyHead: document.getElementById("history-head"),
  historyBody: document.getElementById("history-body"),
  detailTitle: document.getElementById("detail-title"),
  detailStatus: document.getElementById("detail-status"),
  detailInvestor: document.getElementById("detail-investor"),
  detailFundingRate: document.getElementById("detail-funding-rate"),
  detailPortfolioRate: document.getElementById("detail-portfolio-rate"),
  detailSpread: document.getElementById("detail-spread"),
  performanceTable: document.getElementById("performance-table"),
  portfolioKpis: document.getElementById("portfolio-kpis"),
  detailHistoryTable: document.getElementById("detail-history-table"),
  waterfall: document.getElementById("waterfall"),
  alertList: document.getElementById("alert-list"),
  portfolioConcentrationTable: document.getElementById("portfolio-concentration-table"),
  portfolioTable: document.getElementById("portfolio-table")
};

const selectedOperation = () => operations.find((item) => item.id === state.selectedId) || operations[0];

function signedClass(value) {
  if (value > 0) return "positive";
  if (value < 0) return "negative";
  return "neutral";
}

function dailyRateFromMonthly(monthlyRate) {
  return Math.pow(1 + Number(monthlyRate || 0) / 100, 1 / 21) - 1;
}

function returnFromValues(current, previous) {
  const base = Math.abs(Number(previous || 0));
  if (!base) return 0;
  return ((Number(current || 0) - Number(previous || 0)) / base) * 100;
}

function syntheticReturnOnFunding(operation, current, previous) {
  const base = Math.abs(Number(operation.fundingBalance || 0));
  if (!base) return 0;
  return ((Number(current || 0) - Number(previous || 0)) / base) * 100;
}

function syntheticAtDay(operation, dayIndex) {
  const monthlyDelta = operation.syntheticSub - operation.monthStartSyntheticSub;
  const trend = monthlyDelta / 22;
  const dailyVol = Math.sin((dayIndex + operation.name.length) * 0.65) * Math.abs(trend) * 0.14;
  const weekendStep = dayIndex % 5 === 0 ? trend * 0.9 : 0;
  return operation.syntheticSub - trend * (30 - dayIndex) + dailyVol + weekendStep;
}

function fundingAtOffset(operation, offset) {
  const dailyRate = dailyRateFromMonthly(operation.fundingRate);
  return operation.fundingBalance / Math.pow(1 + dailyRate, offset);
}

function syntheticAtOffset(operation, offset) {
  if (offset === 0) return operation.syntheticSub;
  if (offset === 1) return operation.previousSyntheticSub;
  return syntheticAtDay(operation, Math.max(1, 30 - offset));
}

function buildDetailHistory(operation) {
  const monthStartFunding = fundingAtOffset(operation, 21);
  return Array.from({ length: 30 }, (_, offset) => {
    const dateKey = addBusinessDaysBack(state.dateKey, offset);
    const funding = fundingAtOffset(operation, offset);
    const fundingPrevious = fundingAtOffset(operation, offset + 1);
    const synthetic = syntheticAtOffset(operation, offset);
    const syntheticPrevious = syntheticAtOffset(operation, offset + 1);
    const result = operation.portfolioVp + operation.cash - funding;
    return {
      dateKey,
      funding,
      synthetic,
      result,
      fundingDay: returnFromValues(funding, fundingPrevious),
      syntheticDay: syntheticReturnOnFunding(operation, synthetic, syntheticPrevious),
      fundingMonth: returnFromValues(funding, monthStartFunding),
      syntheticMonth: syntheticReturnOnFunding(operation, synthetic, operation.monthStartSyntheticSub)
    };
  });
}

function portfolioTotals(operation) {
  const rows = operation.portfolio;
  const portfolioVp = rows.reduce((sum, row) => sum + row[3], 0);
  const portfolioVn = rows.reduce((sum, row) => sum + row[2], 0);
  const weightedRate = rows.reduce((sum, row) => sum + row[3] * row[4], 0) / (portfolioVp || 1);
  const overdueVp = rows
    .filter((row) => String(row[6]).toLowerCase().includes("atras"))
    .reduce((sum, row) => sum + row[3], 0);
  return {
    count: rows.length,
    portfolioVp,
    portfolioVn,
    weightedRate,
    overdueVp,
    largest: rows.reduce((max, row) => row[3] > max[3] ? row : max, rows[0])
  };
}

function portfolioConcentration(operation) {
  const grouped = new Map();
  operation.portfolio.forEach((row) => {
    const current = grouped.get(row[0]) || {
      producer: row[0],
      type: row[1],
      vn: 0,
      vp: 0,
      weightedRate: 0,
      status: row[6]
    };
    current.vn += row[2];
    current.vp += row[3];
    current.weightedRate += row[3] * row[4];
    current.status = current.status === "Em dia" ? row[6] : current.status;
    grouped.set(row[0], current);
  });
  return Array.from(grouped.values())
    .map((row) => ({ ...row, rate: row.weightedRate / (row.vp || 1) }))
    .sort((a, b) => b.vp - a.vp);
}

function buildHistoryRows() {
  return Array.from({ length: 30 }, (_, index) => {
    const dayIndex = 30 - index;
    const dateKey = addBusinessDaysBack(state.dateKey, index);
    return {
      day: dayIndex,
      dateKey,
      values: operations.map((operation) => syntheticAtDay(operation, dayIndex))
    };
  });
}

function renderSelectors() {
  nodes.fundingSelector.innerHTML = `
    <option value="gerencial">Visao gerencial consolidada</option>
    ${operations.map((operation) =>
      `<option value="${operation.id}">${operation.investor} - ${operation.shortName}</option>`
    ).join("")}
  `;
  nodes.fundingSelector.value = state.view === "gerencial" ? "gerencial" : state.selectedId;
  nodes.dateSelector.value = state.dateKey;
}

function renderSummary() {
  const selected = selectedOperation();
  const source = state.view === "individual" ? [selected] : operations;
  const totalCash = source.reduce((sum, item) => sum + item.cash, 0);
  const totalPortfolio = source.reduce((sum, item) => sum + item.portfolioVp, 0);
  const totalFunding = source.reduce((sum, item) => sum + item.fundingBalance, 0);
  const totalSynthetic = source.reduce((sum, item) => sum + item.syntheticSub, 0);
  const dayResult = source.reduce((sum, item) => sum + item.syntheticSub - item.previousSyntheticSub, 0);
  const monthResult = source.reduce((sum, item) => sum + item.syntheticSub - item.monthStartSyntheticSub, 0);
  const scope = state.view === "individual" ? selected.shortName : "contas";

  const cards = [
    [state.view === "individual" ? "Caixa" : "Caixa total", totalCash, `Valores disponiveis ${state.view === "individual" ? "na operacao" : "nas contas"}`],
    ["Carteira VP", totalPortfolio, "Direitos crediticios ativos"],
    ["Funding", totalFunding, "Saldo devedor dos investidores"],
    ["Resultado sintetico", totalSynthetic, "Carteira + caixa - funding"],
    ["Delta dia", dayResult, `Variacao D-1 - ${scope}`],
    ["Delta mes", monthResult, "Variacao contra fechamento anterior"]
  ];

  nodes.summaryStrip.innerHTML = cards.map(([label, value, note], index) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong class="${index >= 4 ? signedClass(value) : ""}">${formatCurrency(value)}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function renderManagement() {
  nodes.managementDate.textContent = formatDate(state.dateKey);

  const cashTotal = operations.reduce((sum, item) => sum + item.cash, 0);
  nodes.cashTable.innerHTML = operations.map((operation) => `
    <tr>
      <td>${operation.account}</td>
      <td>${operation.name}</td>
      <td class="num">${formatCurrency(operation.cash)}</td>
    </tr>
  `).join("") + `
    <tr class="total-row">
      <td colspan="2">TOTAL em Caixa</td>
      <td class="num">${formatCurrency(cashTotal)}</td>
    </tr>
  `;

  const resultTotal = operations.reduce((sum, item) => sum + item.syntheticSub, 0);
  const dayTotal = operations.reduce((sum, item) => sum + item.syntheticSub - item.previousSyntheticSub, 0);
  const monthTotal = operations.reduce((sum, item) => sum + item.syntheticSub - item.monthStartSyntheticSub, 0);
  nodes.resultTable.innerHTML = operations.map((operation) => {
    const day = operation.syntheticSub - operation.previousSyntheticSub;
    const month = operation.syntheticSub - operation.monthStartSyntheticSub;
    return `
      <tr>
        <td>${operation.investor}</td>
        <td>${operation.shortName}</td>
        <td class="num ${signedClass(operation.syntheticSub)}">${formatCurrency(operation.syntheticSub)}</td>
        <td class="num ${signedClass(day)}">${formatCurrency(day)}</td>
        <td class="num ${signedClass(month)}">${formatCurrency(month)}</td>
      </tr>
    `;
  }).join("") + `
    <tr class="total-row">
      <td colspan="2">TOTAL</td>
      <td class="num ${signedClass(resultTotal)}">${formatCurrency(resultTotal)}</td>
      <td class="num ${signedClass(dayTotal)}">${formatCurrency(dayTotal)}</td>
      <td class="num ${signedClass(monthTotal)}">${formatCurrency(monthTotal)}</td>
    </tr>
  `;

  const headTop = `
    <tr>
      <th rowspan="2">Dias</th>
      <th rowspan="2">Data</th>
      ${operations.map((operation) => `<th>${operation.investor}</th>`).join("")}
    </tr>
    <tr>
      ${operations.map((operation) => `<th>${operation.shortName}</th>`).join("")}
    </tr>
  `;
  nodes.historyHead.innerHTML = headTop;
  nodes.historyBody.innerHTML = buildHistoryRows().map((row) => `
    <tr>
      <td>${row.day}</td>
      <td>${formatDate(row.dateKey)}</td>
      ${row.values.map((value) => `<td class="num ${signedClass(value)}">${formatCurrency(value)}</td>`).join("")}
    </tr>
  `).join("");
}

function renderDetail() {
  const operation = selectedOperation();
  const spread = operation.portfolioRate - operation.fundingRate;
  const result = operation.portfolioVp + operation.cash - operation.fundingBalance;

  nodes.detailTitle.textContent = `${operation.investor} - ${operation.name}`;
  nodes.detailStatus.innerHTML = `<span class="pill ${operation.warning}">${operation.warning === "ok" ? "OK" : operation.warning === "warn" ? "Atencao" : "Critico"}</span>`;
  nodes.detailInvestor.textContent = operation.investor;
  nodes.detailFundingRate.textContent = `${formatPercent(operation.fundingRate)} a.m.`;
  nodes.detailPortfolioRate.textContent = `${formatPercent(operation.portfolioRate)} a.m.`;
  nodes.detailSpread.textContent = `${formatPercent(spread)} a.m.`;

  const fundingCurrent = fundingAtOffset(operation, 0);
  const fundingMonthStart = fundingAtOffset(operation, 21);
  const fundingThirtyStart = fundingAtOffset(operation, 29);
  const syntheticThirtyStart = syntheticAtOffset(operation, 29);
  const portfolio = portfolioTotals(operation);
  const averageTicket = operation.portfolioVp / Math.max(portfolio.count, 1);

  const performanceRows = [
    {
      label: "Funding",
      balance: fundingCurrent,
      day: returnFromValues(fundingCurrent, fundingAtOffset(operation, 1)),
      month: returnFromValues(fundingCurrent, fundingMonthStart),
      thirty: returnFromValues(fundingCurrent, fundingThirtyStart)
    },
    {
      label: "Subordinada sintetica",
      balance: operation.syntheticSub,
      day: syntheticReturnOnFunding(operation, operation.syntheticSub, operation.previousSyntheticSub),
      month: syntheticReturnOnFunding(operation, operation.syntheticSub, operation.monthStartSyntheticSub),
      thirty: syntheticReturnOnFunding(operation, operation.syntheticSub, syntheticThirtyStart)
    }
  ];

  nodes.performanceTable.innerHTML = performanceRows.map((row) => `
    <tr>
      <td>${row.label}</td>
      <td class="num">${formatCurrency(row.balance)}</td>
      <td class="num ${signedClass(row.day)}">${formatSignedPercent(row.day)}</td>
      <td class="num ${signedClass(row.month)}">${formatSignedPercent(row.month)}</td>
      <td class="num ${signedClass(row.thirty)}">${formatSignedPercent(row.thirty)}</td>
    </tr>
  `).join("");

  const portfolioCards = [
    ["Valor nominal", formatCurrency(operation.portfolioVn), "Base total da carteira"],
    ["Valor presente", formatCurrency(operation.portfolioVp), "Carteira marcada na data"],
    ["Taxa media", `${formatPercent(operation.portfolioRate)} a.m.`, "Media ponderada gerencial"],
    ["Spread medio", `${formatSignedPercent(spread)} a.m.`, "Carteira menos funding"],
    ["Prazo medio", `${formatNumber(operation.duration)} dias`, "Prazo ponderado estimado"],
    ["Ticket medio", formatCurrency(averageTicket), "VP por titulo da amostra"],
    ["Vencidos", formatCurrency(operation.overdue), "Exposicao em atraso"],
    ["Amostra", `${portfolio.count} titulos`, "Abertura sintetica da V1"]
  ];
  nodes.portfolioKpis.innerHTML = portfolioCards.map(([label, value, note]) => `
    <article class="portfolio-kpi">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  nodes.detailHistoryTable.innerHTML = buildDetailHistory(operation).map((row) => `
    <tr>
      <td>${formatDate(row.dateKey)}</td>
      <td class="num ${signedClass(row.fundingDay)}">${formatSignedPercent(row.fundingDay)}</td>
      <td class="num ${signedClass(row.syntheticDay)}">${formatSignedPercent(row.syntheticDay)}</td>
      <td class="num ${signedClass(row.fundingMonth)}">${formatSignedPercent(row.fundingMonth)}</td>
      <td class="num ${signedClass(row.syntheticMonth)}">${formatSignedPercent(row.syntheticMonth)}</td>
      <td class="num">${formatCurrency(row.funding)}</td>
      <td class="num ${signedClass(row.synthetic)}">${formatCurrency(row.synthetic)}</td>
      <td class="num ${signedClass(row.result)}">${formatCurrency(row.result)}</td>
    </tr>
  `).join("");

  const maxValue = Math.max(operation.portfolioVp, operation.cash, operation.fundingBalance, Math.abs(result));
  const rows = [
    ["Carteira VP", operation.portfolioVp],
    ["Caixa", operation.cash],
    ["Funding", -operation.fundingBalance],
    ["Resultado", result]
  ];
  nodes.waterfall.innerHTML = rows.map(([label, value]) => `
    <div class="waterfall-row">
      <strong>${label}</strong>
      <div class="bar-track">
        <div class="bar-fill" style="width:${Math.max(2, Math.abs(value) / maxValue * 100)}%"></div>
      </div>
      <span class="num ${signedClass(value)}">${formatCurrency(value)}</span>
    </div>
  `).join("");

  const alerts = [
    {
      title: spread < 0.18 ? "Spread abaixo do alvo" : "Spread dentro do alvo",
      text: spread < 0.18 ? "Avaliar repactuacao ou novas originacoes com taxa maior." : "Carteira gera margem adequada frente ao funding.",
      tone: spread < 0.18 ? "warn" : "ok"
    },
    {
      title: operation.overdue > 0 ? "Exposicao em atraso" : "Sem atraso relevante",
      text: operation.overdue > 0 ? `${formatCurrency(operation.overdue)} em atraso monitorado.` : "Nao ha valor vencido na base ficticia.",
      tone: operation.overdue > 0 ? "warn" : "ok"
    },
    {
      title: result < 0 ? "Resultado negativo" : "Resultado positivo",
      text: result < 0 ? "Operacao consome capital sintetico e exige plano de recuperacao." : "Operacao contribui para o resultado consolidado.",
      tone: result < 0 ? "bad" : "ok"
    }
  ];
  nodes.alertList.innerHTML = alerts.map((alert) => `
    <article class="alert-item">
      <div>
        <strong>${alert.title}</strong>
        <span>${alert.text}</span>
      </div>
      <span class="pill ${alert.tone}">${alert.tone === "ok" ? "OK" : alert.tone === "warn" ? "Atencao" : "Critico"}</span>
    </article>
  `).join("");

  nodes.portfolioConcentrationTable.innerHTML = portfolioConcentration(operation).map((row) => `
    <tr>
      <td>${row.producer}</td>
      <td>${row.type}</td>
      <td class="num">${formatCurrency(row.vn)}</td>
      <td class="num">${formatCurrency(row.vp)}</td>
      <td class="num">${formatPercent(row.vp / operation.portfolioVp * 100)}</td>
      <td class="num">${formatPercent(row.rate)} a.m.</td>
      <td>${row.status}</td>
    </tr>
  `).join("");

  nodes.portfolioTable.innerHTML = operation.portfolio.map((row) => `
    <tr>
      <td>${row[0]}</td>
      <td>${row[1]}</td>
      <td class="num">${formatCurrency(row[2])}</td>
      <td class="num">${formatCurrency(row[3])}</td>
      <td class="num">${formatPercent(row[4])}</td>
      <td class="num ${signedClass(row[4] - operation.fundingRate)}">${formatSignedPercent(row[4] - operation.fundingRate)}</td>
      <td class="num">${formatPercent(row[3] / operation.portfolioVp * 100)}</td>
      <td>${row[5]}</td>
      <td>${row[6]}</td>
    </tr>
  `).join("");
}

function render() {
  renderSelectors();
  renderSummary();
  renderManagement();
  renderDetail();
  nodes.managementView.hidden = state.view !== "gerencial";
  nodes.detailView.hidden = state.view !== "individual";
}

nodes.dateSelector.addEventListener("change", (event) => {
  state.dateKey = event.target.value || state.dateKey;
  render();
});

nodes.fundingSelector.addEventListener("change", (event) => {
  if (event.target.value === "gerencial") {
    state.view = "gerencial";
  } else {
    state.selectedId = event.target.value;
    state.view = "individual";
  }
  render();
});

nodes.printButton.addEventListener("click", () => {
  window.print();
});

render();
