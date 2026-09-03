const formatCurrency = (value, digits = 0) =>
  Number(value || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  });

const formatCurrencyShort = (value) => {
  const number = Number(value || 0);
  const abs = Math.abs(number);
  if (abs >= 1000000000) return `${number < 0 ? "-" : ""}R$ ${formatNumber(abs / 1000000000, 2)} bi`;
  if (abs >= 1000000) return `${number < 0 ? "-" : ""}R$ ${formatNumber(abs / 1000000, 1)} mi`;
  return formatCurrency(number);
};

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

const roundMoney = (value) => Math.round(Number(value || 0) * 100) / 100;

const parseDateKey = (dateKey) => {
  const [year, month, day] = String(dateKey || "").split("-").map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
};

const dateKeyFromLocalDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const addCalendarDays = (dateKey, days) => {
  const date = parseDateKey(dateKey);
  if (!date) return dateKey;
  date.setDate(date.getDate() + days);
  return dateKeyFromLocalDate(date);
};

const isBusinessDayKey = (dateKey) => {
  const date = parseDateKey(dateKey);
  if (!date) return false;
  const dayOfWeek = date.getDay();
  return dayOfWeek !== 0 && dayOfWeek !== 6;
};

const firstDayOfMonthKey = (dateKey) => {
  const date = parseDateKey(dateKey);
  if (!date) return dateKey;
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-01`;
};

const dateDiffDays = (startKey, endKey) => {
  const start = parseDateKey(startKey);
  const end = parseDateKey(endKey);
  if (!start || !end) return 0;
  return Math.round((end.getTime() - start.getTime()) / 86400000);
};

const formatDateTime = (isoDate) => {
  if (!isoDate) return "-";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return "-";
  return date.toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

const ARROBA_KG = 15;
const quoteSnapshot = window.ceresCattleQuotes || { rows: [], historyRows: [] };
const REGION_ORDER = ["BA", "GO", "MT", "MS", "MG", "PA", "RO", "SP", "TO"];
const QUOTE_CATEGORY_LABELS = {
  boi: "Boi",
  vaca: "Vaca",
  novilha: "Novilha",
  boi_mt: "Boi MT",
  vaca_mt: "Vaca MT",
  novilha_mt: "Novilha MT",
  nelore: "Nelore",
  anelorado: "Anelorado",
  cruzamento_industrial: "Cruz. industrial"
};
const REPLACEMENT_UFS_BY_CATEGORY = {
  nelore: ["SP", "MG", "MS", "MT", "GO", "TO", "PA", "PR", "RS", "RO"],
  anelorado: ["SP", "MG", "MS", "MT", "GO", "PR", "RS"],
  cruzamento_industrial: ["SP", "MG", "MS", "MT", "GO", "PR", "RS"]
};
const REPLACEMENT_TYPE_BY_COLUMN = {
  1: "Macho / Desmama",
  2: "Macho / Bezerro",
  3: "Macho / Garrote",
  4: "Macho / Boi magro",
  5: "Femea / Desmama",
  6: "Femea / Bezerra",
  7: "Femea / Novilha",
  8: "Femea / Vaca magra"
};
const ALL_FILTER_VALUE = "all";

const addBusinessDaysBack = (dateKey, daysBack) => {
  const date = parseDateKey(dateKey);
  if (!date) return dateKey;
  let remaining = daysBack;
  while (remaining > 0) {
    date.setDate(date.getDate() - 1);
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) remaining -= 1;
  }
  return dateKeyFromLocalDate(date);
};

const fallbackOperations = [
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

const fundingData = window.ceresFundingData || { positionDate: "2026-09-03", operations: [] };
const manualFundingEvents = window.ceresFundingManualEvents || { events: [] };
const operations = (
  Array.isArray(fundingData.operations) && fundingData.operations.length
    ? fundingData.operations
    : fallbackOperations
).map((operation) => ({
  cash: 0,
  portfolioVp: 0,
  portfolioVn: 0,
  portfolioRate: 0,
  duration: 0,
  overdue: 0,
  warning: "ok",
  portfolio: [],
  fundingHistory: [],
  fundingComponents: [],
  ...operation
}));

const biologicalAssets = {
  "btg-cpra-50": {
    quotePerArroba: 318,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Confinamento Primavera", "Boi gordo", 2400, 505, "Goias"],
      ["Fazenda Santa Luzia", "Novilho confinado", 1850, 492, "Mato Grosso"],
      ["Retiro Horizonte", "Boi gordo", 1470, 520, "Sao Paulo"]
    ]
  },
  "btg-cpra-100": {
    quotePerArroba: 316,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Unidade Campo Alto", "Boi gordo", 8200, 498, "Mato Grosso"],
      ["Unidade Serra Azul", "Novilho confinado", 7600, 512, "Goias"],
      ["Unidade Primavera", "Boi gordo", 6100, 486, "Mato Grosso do Sul"]
    ]
  },
  "btg-cra-50": {
    quotePerArroba: 320,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Fazenda Modelo I", "Boi gordo", 2350, 506, "Sao Paulo"],
      ["Fazenda Modelo II", "Novilho confinado", 2050, 515, "Minas Gerais"],
      ["Fazenda Modelo III", "Boi magro", 1050, 492, "Goias"]
    ]
  },
  "artesanal-one": {
    quotePerArroba: 315,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Boa Colheita", "Boi gordo", 2550, 500, "Goias"],
      ["Terra Alta", "Novilho confinado", 2300, 488, "Mato Grosso"],
      ["Rural Sul", "Boi magro", 950, 510, "Parana"]
    ]
  },
  "artesanal-two": {
    quotePerArroba: 312,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Vale do Milho", "Boi gordo", 1850, 480, "Mato Grosso"],
      ["Armazens Gerais", "Novilho confinado", 1700, 472, "Goias"],
      ["Agro Sul", "Boi magro", 820, 465, "Parana"]
    ]
  },
  "ceres-carteira-100": {
    quotePerArroba: 319,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Integrado I", "Boi gordo", 4400, 505, "Mato Grosso"],
      ["Integrado II", "Novilho confinado", 3900, 522, "Goias"],
      ["Integrado III", "Boi gordo", 2650, 500, "Mato Grosso do Sul"]
    ]
  },
  "ceres-carteira-50": {
    quotePerArroba: 317,
    quoteSource: "Cotacao boi gordo - data-base",
    lots: [
      ["Modelo IV", "Boi gordo", 2150, 508, "Sao Paulo"],
      ["Oeste Ltda", "Novilho confinado", 1950, 496, "Goias"],
      ["Modelo V", "Boi magro", 980, 512, "Minas Gerais"]
    ]
  }
};

operations.forEach((operation) => {
  operation.biologicalAsset = biologicalAssets[operation.id];
  applyManualFundingEvents(operation);
  prepareFundingInputs(operation);
});

const initialParams = new URLSearchParams(window.location.search);
const initialFundingId = initialParams.get("funding");
const initialView = initialParams.get("view");
const hasInitialFunding = operations.some((operation) => operation.id === initialFundingId);

const state = {
  dateKey: fundingData.positionDate || "2026-09-03",
  selectedId: hasInitialFunding ? initialFundingId : operations[0].id,
  evolutionId: hasInitialFunding ? initialFundingId : "gerencial",
  view: initialView === "cotacoes" ? "cotacoes" : initialView === "evolucao" ? "evolucao" : hasInitialFunding ? "individual" : "gerencial",
  quoteFilters: {
    mtCategory: ALL_FILTER_VALUE,
    mtRegion: ALL_FILTER_VALUE,
    replacementCategory: ALL_FILTER_VALUE,
    replacementUf: ALL_FILTER_VALUE,
    replacementType: ALL_FILTER_VALUE
  }
};

const nodes = {
  dateSelector: document.getElementById("date-selector"),
  operationControl: document.getElementById("operation-control"),
  fundingSelector: document.getElementById("funding-selector"),
  managementButton: document.getElementById("management-button"),
  fundingEvolutionButton: document.getElementById("funding-evolution-button"),
  quotesButton: document.getElementById("quotes-button"),
  printButton: document.getElementById("print-button"),
  summaryStrip: document.getElementById("summary-strip"),
  managementView: document.getElementById("management-view"),
  fundingEvolutionView: document.getElementById("funding-evolution-view"),
  quotesView: document.getElementById("quotes-view"),
  detailView: document.getElementById("detail-view"),
  managementDate: document.getElementById("management-date"),
  cashTable: document.getElementById("cash-table"),
  resultTable: document.getElementById("result-table"),
  guaranteeManagementTable: document.getElementById("guarantee-management-table"),
  historyHead: document.getElementById("history-head"),
  historyBody: document.getElementById("history-body"),
  fundingEvolutionDate: document.getElementById("funding-evolution-date"),
  fundingEvolutionKpis: document.getElementById("funding-evolution-kpis"),
  fundingEvolutionInvestorTable: document.getElementById("funding-evolution-investor-table"),
  fundingEvolutionChart: document.getElementById("funding-evolution-chart"),
  fundingEvolutionDailyTable: document.getElementById("funding-evolution-daily-table"),
  quotesDate: document.getElementById("quotes-date"),
  quoteKpis: document.getElementById("quote-kpis"),
  quotesRegionalHead: document.getElementById("quotes-regional-head"),
  quotesRegionalMatrix: document.getElementById("quotes-regional-matrix"),
  quotesMtCategoryFilter: document.getElementById("quotes-mt-category-filter"),
  quotesMtRegionFilter: document.getElementById("quotes-mt-region-filter"),
  quotesMtTable: document.getElementById("quotes-mt-table"),
  quotesReplacementCategoryFilter: document.getElementById("quotes-replacement-category-filter"),
  quotesReplacementUfFilter: document.getElementById("quotes-replacement-uf-filter"),
  quotesReplacementTypeFilter: document.getElementById("quotes-replacement-type-filter"),
  quotesReplacementTable: document.getElementById("quotes-replacement-table"),
  quotesRegionalDetailTable: document.getElementById("quotes-regional-detail-table"),
  detailTitle: document.getElementById("detail-title"),
  detailStatus: document.getElementById("detail-status"),
  detailInvestor: document.getElementById("detail-investor"),
  detailFundingRate: document.getElementById("detail-funding-rate"),
  detailPortfolioRate: document.getElementById("detail-portfolio-rate"),
  detailSpread: document.getElementById("detail-spread"),
  performanceTable: document.getElementById("performance-table"),
  portfolioKpis: document.getElementById("portfolio-kpis"),
  fundingComponentsTable: document.getElementById("funding-components-table"),
  fundingEventsTable: document.getElementById("funding-events-table"),
  guaranteeOverview: document.getElementById("guarantee-overview"),
  guaranteeLotsTable: document.getElementById("guarantee-lots-table"),
  detailHistoryTable: document.getElementById("detail-history-table"),
  waterfall: document.getElementById("waterfall"),
  alertList: document.getElementById("alert-list"),
  portfolioConcentrationTable: document.getElementById("portfolio-concentration-table"),
  portfolioTable: document.getElementById("portfolio-table")
};

const selectedOperation = () => operations.find((item) => item.id === state.selectedId) || operations[0];

function quoteRows() {
  return Array.isArray(quoteSnapshot.rows) ? quoteSnapshot.rows : [];
}

function quoteHistoryRows() {
  return Array.isArray(quoteSnapshot.historyRows) ? quoteSnapshot.historyRows : [];
}

function quoteCategoryLabel(category) {
  return QUOTE_CATEGORY_LABELS[category] || String(category || "-");
}

function replacementUfLabel(row) {
  const labels = REPLACEMENT_UFS_BY_CATEGORY[row.category] || [];
  return labels[Number(row.row_index) - 1] || "-";
}

function replacementTypeLabel(row) {
  return REPLACEMENT_TYPE_BY_COLUMN[Number(row.column_index)] || "-";
}

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  }[char]));
}

function uniqueSelectOptions(rows, valueGetter, labelGetter = valueGetter) {
  const options = new Map();
  rows.forEach((row) => {
    const value = valueGetter(row);
    const label = labelGetter(row);
    if (!value || value === "-") return;
    if (!options.has(String(value))) options.set(String(value), String(label));
  });
  return Array.from(options, ([value, label]) => ({ value, label }))
    .sort((a, b) => a.label.localeCompare(b.label, "pt-BR"));
}

function replacementTypeOptions(rows) {
  return uniqueSelectOptions(
    rows,
    (row) => row.column_index,
    (row) => replacementTypeLabel(row)
  ).sort((a, b) => Number(a.value) - Number(b.value));
}

function validFilterValue(value, options) {
  return options.some((option) => option.value === value) ? value : ALL_FILTER_VALUE;
}

function renderSelectOptions(options, selectedValue, allLabel) {
  return `
    <option value="${ALL_FILTER_VALUE}">${escapeHtml(allLabel)}</option>
    ${options.map((option) => `
      <option value="${escapeHtml(option.value)}"${option.value === selectedValue ? " selected" : ""}>${escapeHtml(option.label)}</option>
    `).join("")}
  `;
}

function latestQuoteDate(rows = quoteRows()) {
  return rows.reduce((latest, row) => {
    if (!row.quote_date) return latest;
    return !latest || row.quote_date > latest ? row.quote_date : latest;
  }, "");
}

function latestCollectedAt(rows = quoteRows()) {
  return rows.reduce((latest, row) => {
    if (!row.collected_at) return latest;
    return !latest || row.collected_at > latest ? row.collected_at : latest;
  }, quoteSnapshot.exportedAt || "");
}

function quoteRowsByMap(mapType) {
  return quoteRows().filter((row) => row.map_type === mapType);
}

function selectedQuoteRows() {
  const currentRows = quoteRows();
  const currentDate = latestQuoteDate(currentRows);
  if (!state.dateKey || state.dateKey === currentDate) return currentRows;
  const selectedRows = quoteHistoryRows().filter((row) => row.quote_date === state.dateKey);
  const bulletinRows = selectedRows.filter((row) => row.map_type !== "historical_series");
  return bulletinRows.length ? bulletinRows : selectedRows;
}

function selectedQuoteRowsByMap(mapType) {
  return selectedQuoteRows().filter((row) => row.map_type === mapType);
}

function quoteModeLabel(selectedRows = selectedQuoteRows()) {
  const currentDate = latestQuoteDate();
  if (state.dateKey === currentDate) return "Boletim atual";
  if (selectedRows.some((row) => row.map_type !== "historical_series")) return "Historico boletim";
  if (selectedRows.some((row) => row.map_type === "historical_series")) return "Historico Boi SP";
  return "Sem dados";
}

function regionalQuote(category, region, rows = quoteRows()) {
  return rows.find((row) =>
    row.product === "boi_gordo" &&
    (row.map_type === "regional_map" || row.map_type === "historical_series") &&
    row.category === category &&
    row.region === region
  );
}

function formatQuotePrice(row, digits = 2) {
  return row && row.price !== null && row.price !== undefined ? formatCurrency(row.price, digits) : "-";
}

function guaranteeLots(operation) {
  const asset = operation.biologicalAsset || { quotePerArroba: 0, lots: [] };
  return asset.lots.map((row) => {
    const heads = Number(row[2] || 0);
    const averageWeightKg = Number(row[3] || 0);
    const totalWeightKg = heads * averageWeightKg;
    const arrobas = totalWeightKg / ARROBA_KG;
    const quotePerArroba = Number(row[5] || asset.quotePerArroba || 0);
    const value = arrobas * quotePerArroba;

    return {
      location: row[0],
      category: row[1],
      heads,
      averageWeightKg,
      totalWeightKg,
      arrobas,
      quotePerArroba,
      value
    };
  });
}

function guaranteeSummary(operation) {
  const lots = guaranteeLots(operation);
  const totalHeads = lots.reduce((sum, lot) => sum + lot.heads, 0);
  const totalWeightKg = lots.reduce((sum, lot) => sum + lot.totalWeightKg, 0);
  const totalArrobas = lots.reduce((sum, lot) => sum + lot.arrobas, 0);
  const value = lots.reduce((sum, lot) => sum + lot.value, 0);
  const coverage = operation.fundingBalance ? value / operation.fundingBalance : 0;

  return {
    lots,
    totalHeads,
    totalWeightKg,
    totalArrobas,
    averageWeightKg: totalHeads ? totalWeightKg / totalHeads : 0,
    quotePerArroba: operation.biologicalAsset?.quotePerArroba || 0,
    quoteSource: operation.biologicalAsset?.quoteSource || "Cotacao nao informada",
    value,
    coverage,
    surplus: value - operation.fundingBalance
  };
}

function guaranteeTone(coverage, lotCount = 1) {
  if (!lotCount) return "pending";
  if (coverage >= 1.2) return "ok";
  if (coverage >= 1.05) return "warn";
  return "bad";
}

function guaranteeLabel(tone) {
  if (tone === "pending") return "Pendente";
  if (tone === "ok") return "OK";
  if (tone === "warn") return "Atencao";
  return "Critico";
}

function guaranteeValueClass(tone) {
  if (tone === "bad") return "negative";
  if (tone === "warn" || tone === "pending") return "neutral";
  return "positive";
}

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

function manualEventTargetComponent(operation, event) {
  const components = Array.isArray(operation.fundingComponents) ? operation.fundingComponents : [];
  const target = event.component || event.componentSheet || event.sheet;
  if (target) {
    return components.find((component) =>
      String(component.sheet || "") === String(target) ||
      String(component.operationLabel || "") === String(target)
    );
  }
  return components.length === 1 ? components[0] : null;
}

function applyManualFundingEvents(operation) {
  const events = Array.isArray(manualFundingEvents.events) ? manualFundingEvents.events : [];
  events
    .filter((event) => event.operationId === operation.id || event.fundingId === operation.id)
    .forEach((event) => {
      const component = manualEventTargetComponent(operation, event);
      if (!component) return;
      component.events = Array.isArray(component.events) ? component.events : [];
      const interestPaid = Number(event.interestPaid || 0);
      const amortization = Number(event.amortization || 0);
      component.events.push({
        date: event.date,
        amount: Number(event.amount ?? (interestPaid + amortization)) || 0,
        interestPaid,
        amortization,
        note: event.note || "",
        manual: true
      });
    });
}

function prepareFundingComponent(component) {
  if (!component || component._preparedForCalculation) return;
  component.events = Array.isArray(component.events) ? component.events : [];
  component.rateSchedule = Array.isArray(component.rateSchedule) ? component.rateSchedule : [];
  component._eventAmountByDate = new Map();
  component.events.forEach((event) => {
    if (!event.date) return;
    const amount = Number(event.amount ?? (Number(event.interestPaid || 0) + Number(event.amortization || 0))) || 0;
    component._eventAmountByDate.set(
      event.date,
      (component._eventAmountByDate.get(event.date) || 0) + amount
    );
  });
  component._rateByDate = new Map();
  component.rateSchedule.forEach((row) => {
    if (!row.date) return;
    component._rateByDate.set(row.date, Number(row.dailyRate || 0));
  });
  component._lastRateDate = component.rateSchedule.reduce((latest, row) =>
    row.date && (!latest || row.date > latest) ? row.date : latest
  , "");
  component._preparedForCalculation = true;
}

function prepareFundingInputs(operation) {
  operation.fundingComponents = Array.isArray(operation.fundingComponents)
    ? operation.fundingComponents
    : [];
  operation.fundingComponents.forEach(prepareFundingComponent);
}

function formulaDailyRate(component) {
  const baseDays = Number(component.baseDays || 360);
  if (component.fundingRateType === "cdi_spread") {
    const cdiRate = Number(component.cdiRate || 0);
    const spreadRate = Number(component.spreadRate || 0);
    return Math.pow((1 + cdiRate) * (1 + spreadRate), 1 / baseDays) - 1;
  }
  const monthlyRate = Number(component.fundingRate || 0) / 100;
  return Math.pow(1 + monthlyRate, 12 / baseDays) - 1;
}

function componentDailyRate(component, dateKey) {
  prepareFundingComponent(component);
  if (component._rateByDate.has(dateKey)) return component._rateByDate.get(dateKey);
  if (component._lastRateDate && dateKey <= component._lastRateDate) return null;
  return formulaDailyRate(component);
}

function shouldAccrueFunding(component, dateKey, isStartDate) {
  if (isStartDate && !component.accrueOnStartDate) return false;
  const baseDays = Number(component.baseDays || 360);
  if (baseDays === 252 && component._lastRateDate && dateKey <= component._lastRateDate) {
    return component._rateByDate.has(dateKey);
  }
  if (baseDays === 252 && !isBusinessDayKey(dateKey)) return false;
  return true;
}

function calculateComponentBalance(component, dateKey) {
  prepareFundingComponent(component);
  const startKey = component.startDate || component.issueDate;
  if (!startKey || !dateKey || dateKey < startKey) return 0;
  component._balanceCache = component._balanceCache || new Map();
  if (component._balanceCache.has(dateKey)) return component._balanceCache.get(dateKey);

  let balance = Number(component.principal || 0);
  let currentKey = startKey;
  let guard = 0;
  while (currentKey <= dateKey && guard < 5000) {
    const isStartDate = currentKey === startKey;
    const rate = componentDailyRate(component, currentKey);
    if (rate !== null && shouldAccrueFunding(component, currentKey, isStartDate)) {
      balance += balance * rate;
    }
    balance -= component._eventAmountByDate.get(currentKey) || 0;
    if (Math.abs(balance) < 1) balance = 0;
    currentKey = addCalendarDays(currentKey, 1);
    guard += 1;
  }
  const rounded = roundMoney(balance);
  component._balanceCache.set(dateKey, rounded);
  return rounded;
}

function fundingHistoryBalanceAtDate(operation, dateKey) {
  const history = Array.isArray(operation.fundingHistory) ? operation.fundingHistory : [];
  let selected = null;
  for (const row of history) {
    if (!row.date || row.date > dateKey) break;
    selected = row;
  }
  return selected ? Number(selected.balance || 0) : null;
}

function fundingBalanceAtDate(operation, dateKey) {
  prepareFundingInputs(operation);
  if (operation.fundingComponents.length) {
    return roundMoney(operation.fundingComponents.reduce(
      (sum, component) => sum + calculateComponentBalance(component, dateKey),
      0
    ));
  }
  return fundingHistoryBalanceAtDate(operation, dateKey);
}

function weightedFundingRateAtDate(operation, dateKey) {
  prepareFundingInputs(operation);
  if (!operation.fundingComponents.length) return null;
  const weighted = operation.fundingComponents.reduce((acc, component) => {
    const balance = Math.abs(calculateComponentBalance(component, dateKey));
    return {
      balance: acc.balance + balance,
      rate: acc.rate + balance * Number(component.fundingRate || 0),
      principal: acc.principal + Number(component.principal || 0),
      principalRate: acc.principalRate + Number(component.principal || 0) * Number(component.fundingRate || 0)
    };
  }, { balance: 0, rate: 0, principal: 0, principalRate: 0 });
  if (weighted.balance) return weighted.rate / weighted.balance;
  return weighted.principal ? weighted.principalRate / weighted.principal : 0;
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
  const dateKey = addBusinessDaysBack(state.dateKey, offset);
  const calculatedBalance = fundingBalanceAtDate(operation, dateKey);
  if (calculatedBalance !== null) return calculatedBalance;

  const dailyRate = dailyRateFromMonthly(operation.fundingRate);
  return operation.fundingBalance / Math.pow(1 + dailyRate, offset);
}

function syntheticAtDate(operation, dateKey) {
  const funding = fundingBalanceAtDate(operation, dateKey);
  if (funding === null) return null;
  return roundMoney(Number(operation.portfolioVp || 0) + Number(operation.cash || 0) - funding);
}

function syntheticAtOffset(operation, offset) {
  const dateKey = addBusinessDaysBack(state.dateKey, offset);
  const calculatedSynthetic = syntheticAtDate(operation, dateKey);
  if (calculatedSynthetic !== null) return calculatedSynthetic;
  if (offset === 0) return operation.syntheticSub;
  if (offset === 1) return operation.previousSyntheticSub;
  return syntheticAtDay(operation, Math.max(1, 30 - offset));
}

function buildDetailHistory(operation) {
  const monthStartKey = firstDayOfMonthKey(state.dateKey);
  const monthStartFunding = fundingBalanceAtDate(operation, monthStartKey) ?? fundingAtOffset(operation, 21);
  const syntheticMonthStart = syntheticAtDate(operation, monthStartKey) ?? operation.monthStartSyntheticSub;
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
      syntheticMonth: syntheticReturnOnFunding(operation, synthetic, syntheticMonthStart)
    };
  });
}

function fundingComponentRows(operation) {
  prepareFundingInputs(operation);
  return operation.fundingComponents.map((component) => ({
    name: component.sheet || component.operationLabel || operation.shortName,
    principal: Number(component.principal || 0),
    startDate: component.startDate || component.issueDate,
    maturityDate: component.maturityDate,
    rateLabel: component.fundingRateLabel || `${formatPercent(component.fundingRate)} a.m.`,
    balance: calculateComponentBalance(component, state.dateKey),
    validationDelta: Number(component.validationDelta || 0),
    events: Array.isArray(component.events) ? component.events.length : 0
  }));
}

function fundingEvents(operation) {
  prepareFundingInputs(operation);
  return operation.fundingComponents.flatMap((component) =>
    component.events.map((event) => ({
      component: component.sheet || component.operationLabel || operation.shortName,
      date: event.date,
      amount: Number(event.amount || 0),
      interestPaid: Number(event.interestPaid || 0),
      amortization: Number(event.amortization || 0)
    }))
  ).sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
}

function selectedEvolutionOperations() {
  if (state.evolutionId === "gerencial") return operations;
  const selected = operations.find((operation) => operation.id === state.evolutionId);
  return selected ? [selected] : operations;
}

function selectedEvolutionLabel() {
  if (state.evolutionId === "gerencial") return "Todos os fundings";
  const selected = operations.find((operation) => operation.id === state.evolutionId);
  return selected ? selected.shortName : "Todos os fundings";
}

function operationStartDate(operation) {
  prepareFundingInputs(operation);
  return operation.fundingComponents
    .map((component) => component.startDate || component.issueDate)
    .filter(Boolean)
    .sort()[0] || operation.issueDate || "";
}

function operationFundingEventsCount(operation) {
  return fundingEvents(operation).length;
}

function operationFundingPrincipal(operation) {
  prepareFundingInputs(operation);
  return Number(operation.fundingPrincipal || 0) || operation.fundingComponents.reduce(
    (sum, component) => sum + Number(component.principal || 0),
    0
  );
}

function componentEventActivity(component, dateKey) {
  prepareFundingComponent(component);
  return component.events.reduce((total, event) => {
    if (event.date !== dateKey) return total;
    const interestPaid = Number(event.interestPaid || 0);
    const amortization = Number(event.amortization || 0);
    const amount = Number(event.amount ?? (interestPaid + amortization)) || 0;
    return {
      count: total.count + 1,
      payment: total.payment + amount,
      interestPaid: total.interestPaid + interestPaid,
      amortization: total.amortization + amortization
    };
  }, { count: 0, payment: 0, interestPaid: 0, amortization: 0 });
}

function operationFundingActivity(operation, dateKey) {
  prepareFundingInputs(operation);
  const previousKey = addBusinessDaysBack(dateKey, 1);
  const previousBalance = fundingBalanceAtDate(operation, previousKey) ?? 0;
  const currentBalance = fundingBalanceAtDate(operation, dateKey) ?? 0;
  const componentTotals = operation.fundingComponents.reduce((total, component) => {
    const startKey = component.startDate || component.issueDate;
    const eventActivity = componentEventActivity(component, dateKey);
    const drawdown = startKey === dateKey ? Number(component.principal || 0) : 0;
    return {
      drawdown: total.drawdown + drawdown,
      payment: total.payment + eventActivity.payment,
      interestPaid: total.interestPaid + eventActivity.interestPaid,
      amortization: total.amortization + eventActivity.amortization,
      events: total.events + eventActivity.count
    };
  }, { drawdown: 0, payment: 0, interestPaid: 0, amortization: 0, events: 0 });
  const interestAccrued = roundMoney(currentBalance - previousBalance - componentTotals.drawdown + componentTotals.payment);
  return {
    dateKey,
    previousBalance: roundMoney(previousBalance),
    currentBalance: roundMoney(currentBalance),
    drawdown: roundMoney(componentTotals.drawdown),
    interestAccrued,
    payment: roundMoney(componentTotals.payment),
    interestPaid: roundMoney(componentTotals.interestPaid),
    amortization: roundMoney(componentTotals.amortization),
    monthChange: roundMoney(currentBalance - (fundingBalanceAtDate(operation, firstDayOfMonthKey(dateKey)) ?? currentBalance)),
    events: componentTotals.events
  };
}

function aggregateFundingActivity(scopeOperations, dateKey) {
  return scopeOperations.reduce((total, operation) => {
    const row = operationFundingActivity(operation, dateKey);
    return {
      dateKey,
      previousBalance: total.previousBalance + row.previousBalance,
      currentBalance: total.currentBalance + row.currentBalance,
      drawdown: total.drawdown + row.drawdown,
      interestAccrued: total.interestAccrued + row.interestAccrued,
      payment: total.payment + row.payment,
      interestPaid: total.interestPaid + row.interestPaid,
      amortization: total.amortization + row.amortization,
      monthChange: total.monthChange + row.monthChange,
      events: total.events + row.events
    };
  }, {
    dateKey,
    previousBalance: 0,
    currentBalance: 0,
    drawdown: 0,
    interestAccrued: 0,
    payment: 0,
    interestPaid: 0,
    amortization: 0,
    monthChange: 0,
    events: 0
  });
}

function fundingEvolutionDates(count = 30) {
  return Array.from({ length: count }, (_, offset) => addBusinessDaysBack(state.dateKey, offset)).reverse();
}

function fundingEvolutionDailyRows() {
  const scopeOperations = selectedEvolutionOperations();
  return fundingEvolutionDates().map((dateKey) => aggregateFundingActivity(scopeOperations, dateKey));
}

function fundingEvolutionRate(scopeOperations) {
  const weighted = scopeOperations.reduce((total, operation) => ({
    balance: total.balance + Math.abs(Number(operation.fundingBalance || 0)),
    rate: total.rate + Math.abs(Number(operation.fundingBalance || 0)) * Number(operation.fundingRate || 0)
  }), { balance: 0, rate: 0 });
  return weighted.balance ? weighted.rate / weighted.balance : 0;
}

function fundingEvolutionChart(rows) {
  if (!rows.length) return `<p class="formula-line">Sem dados de funding para o periodo.</p>`;
  const width = 760;
  const height = 260;
  const left = 84;
  const right = 22;
  const top = 24;
  const bottom = 42;
  const values = rows.map((row) => Number(row.currentBalance || 0));
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const spread = maxValue - minValue || Math.max(maxValue * 0.05, 1);
  const yMin = minValue - spread * 0.08;
  const yMax = maxValue + spread * 0.08;
  const ySpread = yMax - yMin || 1;
  const xForIndex = (index) => left + (index / Math.max(rows.length - 1, 1)) * (width - left - right);
  const yForValue = (value) => top + ((yMax - value) / ySpread) * (height - top - bottom);
  const points = rows.map((row, index) =>
    `${xForIndex(index).toFixed(1)},${yForValue(row.currentBalance).toFixed(1)}`
  ).join(" ");
  const yTicks = [0, 0.5, 1].map((step) => yMin + (ySpread * step));
  const xTicks = [0, Math.floor((rows.length - 1) / 2), rows.length - 1]
    .filter((index, position, list) => list.indexOf(index) === position);

  return `
    <svg class="funding-line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolucao do saldo de funding">
      ${yTicks.map((value) => {
        const y = yForValue(value);
        return `
          <line class="chart-grid" x1="${left}" y1="${y.toFixed(1)}" x2="${width - right}" y2="${y.toFixed(1)}"></line>
          <text class="chart-label" x="${left - 10}" y="${(y + 4).toFixed(1)}" text-anchor="end">${escapeHtml(formatCurrencyShort(value))}</text>
        `;
      }).join("")}
      <polyline class="funding-chart-line" points="${points}"></polyline>
      ${rows.map((row, index) => `
        <circle class="funding-chart-dot" cx="${xForIndex(index).toFixed(1)}" cy="${yForValue(row.currentBalance).toFixed(1)}" r="3.4">
          <title>${escapeHtml(formatDate(row.dateKey))} - ${escapeHtml(formatCurrency(row.currentBalance))}</title>
        </circle>
      `).join("")}
      ${xTicks.map((index) => `
        <text class="chart-label" x="${xForIndex(index).toFixed(1)}" y="${height - 14}" text-anchor="middle">${escapeHtml(formatDate(rows[index].dateKey).slice(0, 5))}</text>
      `).join("")}
    </svg>
  `;
}

function recalculateFundingPositions() {
  const dateKey = state.dateKey || fundingData.positionDate || "2026-09-03";
  const previousKey = addBusinessDaysBack(dateKey, 1);
  const monthStartKey = firstDayOfMonthKey(dateKey);

  operations.forEach((operation) => {
    const fundingBalance = fundingBalanceAtDate(operation, dateKey);
    if (fundingBalance === null) return;
    const fundingPrevious = fundingBalanceAtDate(operation, previousKey) ?? fundingBalance;
    const fundingMonthStart = fundingBalanceAtDate(operation, monthStartKey) ?? fundingBalance;
    const fundingRate = weightedFundingRateAtDate(operation, dateKey);
    operation.fundingBalance = roundMoney(fundingBalance);
    operation.fundingPrevious = roundMoney(fundingPrevious);
    operation.fundingMonthStart = roundMoney(fundingMonthStart);
    if (fundingRate !== null) operation.fundingRate = Number(fundingRate.toFixed(4));
    operation.syntheticSub = roundMoney(Number(operation.portfolioVp || 0) + Number(operation.cash || 0) - operation.fundingBalance);
    operation.previousSyntheticSub = roundMoney(Number(operation.portfolioVp || 0) + Number(operation.cash || 0) - operation.fundingPrevious);
    operation.monthStartSyntheticSub = roundMoney(Number(operation.portfolioVp || 0) + Number(operation.cash || 0) - operation.fundingMonthStart);
    if (operation.maturityDate) {
      operation.duration = Math.max(0, dateDiffDays(dateKey, operation.maturityDate));
    }
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
      values: operations.map((operation) => syntheticAtDate(operation, dateKey) ?? syntheticAtDay(operation, dayIndex))
    };
  });
}

function renderSelectors() {
  nodes.fundingSelector.innerHTML = `
    <option value="gerencial">Todos os fundings</option>
    ${operations.map((operation) =>
      `<option value="${operation.id}">${operation.investor} - ${operation.shortName}</option>`
    ).join("")}
  `;
  nodes.fundingSelector.value = state.view === "individual"
    ? state.selectedId
    : state.view === "evolucao"
      ? state.evolutionId
      : "gerencial";
  if (!nodes.fundingSelector.value) nodes.fundingSelector.value = "gerencial";
  nodes.operationControl.hidden = state.view === "cotacoes";
  nodes.operationControl.classList.toggle("is-hidden", state.view === "cotacoes");
  nodes.dateSelector.value = state.dateKey;
  const managementActive = state.view === "gerencial" || state.view === "individual";
  nodes.managementButton.classList.toggle("is-active", managementActive);
  nodes.managementButton.setAttribute("aria-pressed", managementActive ? "true" : "false");
  nodes.fundingEvolutionButton.classList.toggle("is-active", state.view === "evolucao");
  nodes.fundingEvolutionButton.setAttribute("aria-pressed", state.view === "evolucao" ? "true" : "false");
  nodes.quotesButton.classList.toggle("is-active", state.view === "cotacoes");
  nodes.quotesButton.setAttribute("aria-pressed", state.view === "cotacoes" ? "true" : "false");
}

function renderQuoteSummary() {
  const currentRows = quoteRows();
  const selectedRows = selectedQuoteRows();
  const regionalRows = selectedRows.filter((row) =>
    row.map_type === "regional_map" || row.map_type === "historical_series"
  );
  const replacementRows = selectedRows.filter((row) => row.map_type === "replacement_grid");
  const mtRows = selectedRows.filter((row) => row.map_type === "mt_bulletin");
  const spBoi = regionalQuote("boi", "SP", selectedRows);
  const quoteDate = state.dateKey || latestQuoteDate(currentRows);

  const cards = [
    ["Data selecionada", quoteDate ? formatDate(quoteDate) : "-", quoteModeLabel(selectedRows)],
    ["Registros", formatNumber(selectedRows.length), "Linhas exibidas na validacao"],
    ["Regional", formatNumber(regionalRows.length), "Boi, vaca e novilha por UF"],
    ["Reposicao", formatNumber(replacementRows.length), "Grades em R$/kg"],
    ["MT", formatNumber(mtRows.length), "Macro-regioes do estado"],
    ["Boi SP", formatQuotePrice(spBoi, 2), "Historico publico quando data passada"]
  ];

  nodes.summaryStrip.innerHTML = cards.map(([label, value, note]) => `
    <article class="metric-card">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");
}

function renderFundingEvolutionSummary() {
  const scopeOperations = selectedEvolutionOperations();
  const activity = aggregateFundingActivity(scopeOperations, state.dateKey);
  const rate = fundingEvolutionRate(scopeOperations);
  const scopeLabel = selectedEvolutionLabel();

  const cards = [
    {
      label: "Visao",
      value: scopeLabel,
      note: `${formatNumber(scopeOperations.length)} funding${scopeOperations.length === 1 ? "" : "s"} no filtro`,
      className: ""
    },
    {
      label: "Saldo funding",
      value: formatCurrency(activity.currentBalance),
      note: "Divida atualizada na data-base",
      className: ""
    },
    {
      label: "Juros dia",
      value: formatCurrency(activity.interestAccrued),
      note: "Custo apropriado contra D-1",
      className: signedClass(-activity.interestAccrued)
    },
    {
      label: "Pagamento dia",
      value: formatCurrency(activity.payment),
      note: "Devolucoes registradas na data",
      className: signedClass(activity.payment)
    },
    {
      label: "Amortizacao dia",
      value: formatCurrency(activity.amortization),
      note: "Reducao de principal no dia",
      className: signedClass(activity.amortization)
    },
    {
      label: "Taxa media",
      value: `${formatPercent(rate)} a.m.`,
      note: "Media ponderada pelo saldo",
      className: ""
    }
  ];

  nodes.summaryStrip.innerHTML = cards.map((card) => `
    <article class="metric-card">
      <span>${card.label}</span>
      <strong class="${card.className}">${card.value}</strong>
      <small>${card.note}</small>
    </article>
  `).join("");
}

function renderSummary() {
  if (state.view === "cotacoes") {
    renderQuoteSummary();
    return;
  }
  if (state.view === "evolucao") {
    renderFundingEvolutionSummary();
    return;
  }

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
        <td class="action-cell">
          <button class="table-action" type="button" data-open-funding="${operation.id}">Abrir</button>
        </td>
      </tr>
    `;
  }).join("") + `
    <tr class="total-row">
      <td colspan="2">TOTAL</td>
      <td class="num ${signedClass(resultTotal)}">${formatCurrency(resultTotal)}</td>
      <td class="num ${signedClass(dayTotal)}">${formatCurrency(dayTotal)}</td>
      <td class="num ${signedClass(monthTotal)}">${formatCurrency(monthTotal)}</td>
      <td></td>
    </tr>
  `;

  const guaranteeTotal = operations.reduce((sum, item) => sum + guaranteeSummary(item).value, 0);
  const fundingTotal = operations.reduce((sum, item) => sum + item.fundingBalance, 0);
  const surplusTotal = guaranteeTotal - fundingTotal;
  nodes.guaranteeManagementTable.innerHTML = operations.map((operation) => {
    const guarantee = guaranteeSummary(operation);
    const tone = guaranteeTone(guarantee.coverage, guarantee.lots.length);
    const hasGuarantee = guarantee.lots.length > 0;
    return `
      <tr>
        <td>${operation.investor}</td>
        <td>${operation.shortName}</td>
        <td class="num">${formatNumber(guarantee.totalHeads)}</td>
        <td class="num">${formatNumber(guarantee.totalWeightKg / 1000, 1)} t</td>
        <td class="num">${formatCurrency(guarantee.quotePerArroba, 2)}</td>
        <td class="num">${formatCurrency(guarantee.value)}</td>
        <td class="num ${guaranteeValueClass(tone)}">${hasGuarantee ? formatPercent(guarantee.coverage * 100, 1) : "-"}</td>
        <td class="num ${hasGuarantee ? signedClass(guarantee.surplus) : "neutral"}">${hasGuarantee ? formatCurrency(guarantee.surplus) : "-"}</td>
        <td><span class="pill ${tone}">${guaranteeLabel(tone)}</span></td>
      </tr>
    `;
  }).join("") + `
    <tr class="total-row">
      <td colspan="5">TOTAL garantia biologica</td>
      <td class="num">${formatCurrency(guaranteeTotal)}</td>
      <td class="num ${guaranteeTotal >= fundingTotal ? "positive" : "negative"}">${formatPercent((guaranteeTotal / fundingTotal) * 100, 1)}</td>
      <td class="num ${signedClass(surplusTotal)}">${formatCurrency(surplusTotal)}</td>
      <td></td>
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

function renderFundingEvolution() {
  const scopeOperations = selectedEvolutionOperations();
  const activity = aggregateFundingActivity(scopeOperations, state.dateKey);
  const dailyRows = fundingEvolutionDailyRows();
  const componentCount = scopeOperations.reduce((sum, operation) => {
    prepareFundingInputs(operation);
    return sum + operation.fundingComponents.length;
  }, 0);
  const eventCount = scopeOperations.reduce((sum, operation) => sum + operationFundingEventsCount(operation), 0);
  const totalPrincipal = scopeOperations.reduce((sum, operation) => sum + operationFundingPrincipal(operation), 0);
  const startDates = scopeOperations.map(operationStartDate).filter(Boolean).sort();
  const firstStart = startDates[0];

  nodes.fundingEvolutionDate.textContent = `Data-base ${formatDate(state.dateKey)}`;

  const kpis = [
    ["Filtro", selectedEvolutionLabel(), `${formatNumber(scopeOperations.length)} funding${scopeOperations.length === 1 ? "" : "s"}`],
    ["Principal original", formatCurrency(totalPrincipal), "Montante carregado"],
    ["Componentes", formatNumber(componentCount), "Series e cessoes"],
    ["Eventos", formatNumber(eventCount), "Pagamentos/amortizacoes"],
    ["Inicio", firstStart ? formatDate(firstStart) : "-", "Primeira data do filtro"],
    ["Saldo atual", formatCurrency(activity.currentBalance), "Saldo calculado"]
  ];

  nodes.fundingEvolutionKpis.innerHTML = kpis.map(([label, value, note], index) => `
    <article class="evolution-kpi ${index === kpis.length - 1 ? "primary" : ""}">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  const tableRows = scopeOperations.map((operation) => {
    const row = operationFundingActivity(operation, state.dateKey);
    const rateLabel = operation.fundingRateLabel || `${formatPercent(operation.fundingRate)} a.m.`;
    return `
      <tr>
        <td>${escapeHtml(operation.investor)}</td>
        <td>${escapeHtml(operation.shortName)}</td>
        <td title="${escapeHtml(rateLabel)}">${escapeHtml(rateLabel)}</td>
        <td>${operationStartDate(operation) ? formatDate(operationStartDate(operation)) : "-"}</td>
        <td class="num">${formatCurrency(operationFundingPrincipal(operation), 2)}</td>
        <td class="num">${formatCurrency(row.previousBalance, 2)}</td>
        <td class="num ${signedClass(-row.interestAccrued)}">${formatCurrency(row.interestAccrued, 2)}</td>
        <td class="num ${signedClass(row.payment)}">${formatCurrency(row.payment, 2)}</td>
        <td class="num ${signedClass(row.amortization)}">${formatCurrency(row.amortization, 2)}</td>
        <td class="num">${formatCurrency(row.currentBalance, 2)}</td>
        <td class="num ${signedClass(-row.monthChange)}">${formatCurrency(row.monthChange, 2)}</td>
        <td class="num">${formatNumber(operationFundingEventsCount(operation))}</td>
        <td class="action-cell">
          <button class="table-action" type="button" data-open-funding="${operation.id}">Abrir</button>
        </td>
      </tr>
    `;
  });

  const totalRow = scopeOperations.length > 1 ? `
    <tr class="total-row">
      <td colspan="4">TOTAL</td>
      <td class="num">${formatCurrency(totalPrincipal, 2)}</td>
      <td class="num">${formatCurrency(activity.previousBalance, 2)}</td>
      <td class="num ${signedClass(-activity.interestAccrued)}">${formatCurrency(activity.interestAccrued, 2)}</td>
      <td class="num ${signedClass(activity.payment)}">${formatCurrency(activity.payment, 2)}</td>
      <td class="num ${signedClass(activity.amortization)}">${formatCurrency(activity.amortization, 2)}</td>
      <td class="num">${formatCurrency(activity.currentBalance, 2)}</td>
      <td class="num ${signedClass(-activity.monthChange)}">${formatCurrency(activity.monthChange, 2)}</td>
      <td class="num">${formatNumber(eventCount)}</td>
      <td></td>
    </tr>
  ` : "";

  nodes.fundingEvolutionInvestorTable.innerHTML = tableRows.join("") + totalRow;
  nodes.fundingEvolutionChart.innerHTML = fundingEvolutionChart(dailyRows);
  nodes.fundingEvolutionDailyTable.innerHTML = dailyRows.slice().reverse().map((row) => `
    <tr>
      <td>${formatDate(row.dateKey)}</td>
      <td class="num">${formatCurrency(row.previousBalance, 2)}</td>
      <td class="num ${signedClass(row.drawdown)}">${formatCurrency(row.drawdown, 2)}</td>
      <td class="num ${signedClass(-row.interestAccrued)}">${formatCurrency(row.interestAccrued, 2)}</td>
      <td class="num ${signedClass(row.payment)}">${formatCurrency(row.payment, 2)}</td>
      <td class="num ${signedClass(row.amortization)}">${formatCurrency(row.amortization, 2)}</td>
      <td class="num">${formatCurrency(row.currentBalance, 2)}</td>
    </tr>
  `).join("");
}

function renderQuotesValidation() {
  const currentRows = quoteRows();
  const selectedRows = selectedQuoteRows();
  const quoteDate = state.dateKey || latestQuoteDate(currentRows);
  const collectedAt = latestCollectedAt(currentRows);
  const regionalRows = selectedRows.filter((row) =>
    row.map_type === "regional_map" || row.map_type === "historical_series"
  );
  const mtRows = selectedQuoteRowsByMap("mt_bulletin");
  const replacementRows = selectedQuoteRowsByMap("replacement_grid");
  const modeLabel = quoteModeLabel(selectedRows);

  nodes.quotesDate.textContent = quoteDate
    ? `Data selecionada ${formatDate(quoteDate)} - ${modeLabel}`
    : "Sem cotacao carregada";

  const kpis = [
    ["Ultima coleta", formatDateTime(collectedAt), "Horario local"],
    ["Regional", formatNumber(regionalRows.length), "Registros em R$/@"],
    ["Modo", modeLabel, "Conforme data selecionada"],
    ["Reposicao", formatNumber(replacementRows.length), `MT: ${formatNumber(mtRows.length)} linhas`]
  ];
  nodes.quoteKpis.innerHTML = kpis.map(([label, value, note]) => `
    <article class="quote-kpi">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  nodes.quotesRegionalHead.innerHTML = `
    <tr>
      <th>Categoria</th>
      ${REGION_ORDER.map((region) => `<th class="num">${region}</th>`).join("")}
    </tr>
  `;
  nodes.quotesRegionalMatrix.innerHTML = ["boi", "vaca", "novilha"].map((category) => `
    <tr>
      <td>${quoteCategoryLabel(category)}</td>
      ${REGION_ORDER.map((region) => {
        const row = regionalQuote(category, region, selectedRows);
        return `<td class="num">${formatQuotePrice(row, 2)}</td>`;
      }).join("")}
    </tr>
  `).join("");

  const sortedRegionalRows = [...regionalRows].sort((a, b) =>
    `${a.category}-${a.region}`.localeCompare(`${b.category}-${b.region}`)
  );
  nodes.quotesRegionalDetailTable.innerHTML = sortedRegionalRows.length ? sortedRegionalRows.map((row) => `
    <tr>
      <td>${formatDate(row.quote_date)}</td>
      <td>${quoteCategoryLabel(row.category)}</td>
      <td>${row.region || "-"}</td>
      <td class="num">${formatQuotePrice(row, 2)}</td>
      <td class="num ${signedClass(row.variation_percent)}">${row.variation_percent === null || row.variation_percent === undefined ? "-" : formatSignedPercent(row.variation_percent)}</td>
      <td class="num">${row.reference_value === null || row.reference_value === undefined ? "-" : formatNumber(row.reference_value, 2)}</td>
    </tr>
  `).join("") : `
    <tr>
      <td colspan="6">Sem registros regionais para a data selecionada</td>
    </tr>
  `;

  const sortedMtRows = [...mtRows].sort((a, b) =>
    `${a.category}-${String(a.row_index).padStart(2, "0")}`.localeCompare(`${b.category}-${String(b.row_index).padStart(2, "0")}`)
  );
  const mtCategoryOptions = uniqueSelectOptions(mtRows, (row) => row.category, (row) => quoteCategoryLabel(row.category));
  const mtRegionOptions = uniqueSelectOptions(mtRows, (row) => row.subregion);
  state.quoteFilters.mtCategory = validFilterValue(state.quoteFilters.mtCategory, mtCategoryOptions);
  state.quoteFilters.mtRegion = validFilterValue(state.quoteFilters.mtRegion, mtRegionOptions);
  nodes.quotesMtCategoryFilter.innerHTML = renderSelectOptions(mtCategoryOptions, state.quoteFilters.mtCategory, "Todas");
  nodes.quotesMtRegionFilter.innerHTML = renderSelectOptions(mtRegionOptions, state.quoteFilters.mtRegion, "Todas");

  const filteredMtRows = sortedMtRows.filter((row) =>
    (state.quoteFilters.mtCategory === ALL_FILTER_VALUE || row.category === state.quoteFilters.mtCategory) &&
    (state.quoteFilters.mtRegion === ALL_FILTER_VALUE || row.subregion === state.quoteFilters.mtRegion)
  );
  nodes.quotesMtTable.innerHTML = filteredMtRows.length ? filteredMtRows.map((row) => `
    <tr>
      <td>${quoteCategoryLabel(row.category)}</td>
      <td>${row.subregion || "-"}</td>
      <td class="num">${formatQuotePrice(row, 2)}</td>
    </tr>
  `).join("") : `
    <tr>
      <td colspan="3">${mtRows.length ? "Sem boletim MT para os filtros selecionados" : "Sem boletim MT para a data selecionada"}</td>
    </tr>
  `;

  const sortedReplacementRows = [...replacementRows].sort((a, b) =>
    `${a.category}-${String(a.row_index).padStart(2, "0")}-${String(a.column_index).padStart(2, "0")}`
      .localeCompare(`${b.category}-${String(b.row_index).padStart(2, "0")}-${String(b.column_index).padStart(2, "0")}`)
  );
  const replacementCategoryOptions = uniqueSelectOptions(
    replacementRows,
    (row) => row.category,
    (row) => quoteCategoryLabel(row.category)
  );
  const replacementUfOptions = uniqueSelectOptions(replacementRows, (row) => replacementUfLabel(row));
  const replacementTypeFilterOptions = replacementTypeOptions(replacementRows);
  state.quoteFilters.replacementCategory = validFilterValue(state.quoteFilters.replacementCategory, replacementCategoryOptions);
  state.quoteFilters.replacementUf = validFilterValue(state.quoteFilters.replacementUf, replacementUfOptions);
  state.quoteFilters.replacementType = validFilterValue(state.quoteFilters.replacementType, replacementTypeFilterOptions);
  nodes.quotesReplacementCategoryFilter.innerHTML = renderSelectOptions(replacementCategoryOptions, state.quoteFilters.replacementCategory, "Todas");
  nodes.quotesReplacementUfFilter.innerHTML = renderSelectOptions(replacementUfOptions, state.quoteFilters.replacementUf, "Todas");
  nodes.quotesReplacementTypeFilter.innerHTML = renderSelectOptions(replacementTypeFilterOptions, state.quoteFilters.replacementType, "Todos");

  const filteredReplacementRows = sortedReplacementRows.filter((row) =>
    (state.quoteFilters.replacementCategory === ALL_FILTER_VALUE || row.category === state.quoteFilters.replacementCategory) &&
    (state.quoteFilters.replacementUf === ALL_FILTER_VALUE || replacementUfLabel(row) === state.quoteFilters.replacementUf) &&
    (state.quoteFilters.replacementType === ALL_FILTER_VALUE || String(row.column_index) === state.quoteFilters.replacementType)
  );
  nodes.quotesReplacementTable.innerHTML = filteredReplacementRows.length ? filteredReplacementRows.map((row) => `
    <tr>
      <td>${quoteCategoryLabel(row.category)}</td>
      <td>${replacementUfLabel(row)}</td>
      <td>${replacementTypeLabel(row)}</td>
      <td class="num">${row.price === null || row.price === undefined ? "-" : formatNumber(row.price, 2)}</td>
    </tr>
  `).join("") : `
    <tr>
      <td colspan="4">${replacementRows.length ? "Sem grade de reposicao para os filtros selecionados" : "Sem grade de reposicao para a data selecionada"}</td>
    </tr>
  `;
}

function renderDetail() {
  const operation = selectedOperation();
  const spread = operation.portfolioRate - operation.fundingRate;
  const result = operation.portfolioVp + operation.cash - operation.fundingBalance;

  nodes.detailTitle.textContent = `${operation.investor} - ${operation.name}`;
  nodes.detailStatus.innerHTML = `<span class="pill ${operation.warning}">${operation.warning === "ok" ? "OK" : operation.warning === "warn" ? "Atencao" : "Critico"}</span>`;
  nodes.detailInvestor.textContent = operation.investor;
  nodes.detailFundingRate.textContent = `${formatPercent(operation.fundingRate)} a.m.`;
  nodes.detailFundingRate.title = operation.fundingRateLabel || "";
  nodes.detailPortfolioRate.textContent = `${formatPercent(operation.portfolioRate)} a.m.`;
  nodes.detailSpread.textContent = `${formatPercent(spread)} a.m.`;

  const fundingCurrent = fundingAtOffset(operation, 0);
  const monthStartKey = firstDayOfMonthKey(state.dateKey);
  const fundingMonthStart = fundingBalanceAtDate(operation, monthStartKey) ?? fundingAtOffset(operation, 21);
  const fundingThirtyStart = fundingAtOffset(operation, 29);
  const syntheticThirtyStart = syntheticAtOffset(operation, 29);
  const portfolio = portfolioTotals(operation);
  const averageTicket = operation.portfolioVp / Math.max(portfolio.count, 1);
  const guarantee = guaranteeSummary(operation);
  const guaranteeStatus = guaranteeTone(guarantee.coverage, guarantee.lots.length);
  const hasGuarantee = guarantee.lots.length > 0;

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

  const componentRows = fundingComponentRows(operation);
  if (nodes.fundingComponentsTable) {
    nodes.fundingComponentsTable.innerHTML = componentRows.length ? componentRows.map((row) => {
      const deltaTone = Math.abs(row.validationDelta) <= 1 ? "ok" : "warn";
      const deltaLabel = Math.abs(row.validationDelta) <= 1 ? "OK" : formatCurrency(row.validationDelta, 2);
      return `
        <tr>
          <td>${escapeHtml(row.name)}</td>
          <td>${row.startDate ? formatDate(row.startDate) : "-"}</td>
          <td>${row.maturityDate ? formatDate(row.maturityDate) : "-"}</td>
          <td>${escapeHtml(row.rateLabel)}</td>
          <td class="num">${formatCurrency(row.principal)}</td>
          <td class="num">${formatCurrency(row.balance)}</td>
          <td class="num">${formatNumber(row.events)}</td>
          <td><span class="pill ${deltaTone}">${deltaLabel}</span></td>
        </tr>
      `;
    }).join("") : `
      <tr>
        <td colspan="8">Sem componentes de funding cadastrados</td>
      </tr>
    `;
  }

  const eventRows = fundingEvents(operation).slice(0, 12);
  if (nodes.fundingEventsTable) {
    nodes.fundingEventsTable.innerHTML = eventRows.length ? eventRows.map((row) => `
      <tr>
        <td>${row.date ? formatDate(row.date) : "-"}</td>
        <td>${escapeHtml(row.component)}</td>
        <td class="num">${formatCurrency(row.amount, 2)}</td>
        <td class="num">${formatCurrency(row.interestPaid, 2)}</td>
        <td class="num">${formatCurrency(row.amortization, 2)}</td>
      </tr>
    `).join("") : `
      <tr>
        <td colspan="5">Sem amortizacao informada para este funding</td>
      </tr>
    `;
  }

  const guaranteeCards = [
    ["Valor garantia", formatCurrency(guarantee.value), `${formatNumber(guarantee.totalArrobas)} arrobas`, true],
    ["Cobertura", hasGuarantee ? formatPercent(guarantee.coverage * 100, 1) : "-", "Garantia / funding", false],
    ["Sobra / deficit", hasGuarantee ? formatCurrency(guarantee.surplus) : "-", "Valor gado - funding", false],
    ["Peso total", `${formatNumber(guarantee.totalWeightKg / 1000, 1)} t`, `${formatNumber(guarantee.totalHeads)} cabecas`, false],
    ["Cotacao @", formatCurrency(guarantee.quotePerArroba, 2), guarantee.quoteSource, false]
  ];
  nodes.guaranteeOverview.innerHTML = guaranteeCards.map(([label, value, note, primary]) => `
    <article class="guarantee-kpi ${primary ? "primary" : ""}">
      <span>${label}</span>
      <strong class="${label === "Sobra / deficit" ? signedClass(guarantee.surplus) : ""}">${value}</strong>
      <small>${note}</small>
    </article>
  `).join("");

  nodes.guaranteeLotsTable.innerHTML = guarantee.lots.map((lot) => `
    <tr>
      <td>${lot.location}</td>
      <td>${lot.category}</td>
      <td class="num">${formatNumber(lot.heads)}</td>
      <td class="num">${formatNumber(lot.averageWeightKg, 0)} kg</td>
      <td class="num">${formatNumber(lot.arrobas, 0)}</td>
      <td class="num">${formatCurrency(lot.quotePerArroba, 2)}</td>
      <td class="num">${formatCurrency(lot.value)}</td>
    </tr>
  `).join("") + `
    <tr class="total-row">
      <td colspan="2">TOTAL ativo biologico</td>
      <td class="num">${formatNumber(guarantee.totalHeads)}</td>
      <td class="num">${formatNumber(guarantee.averageWeightKg, 0)} kg</td>
      <td class="num">${formatNumber(guarantee.totalArrobas, 0)}</td>
      <td class="num">${formatCurrency(guarantee.quotePerArroba, 2)}</td>
      <td class="num">${formatCurrency(guarantee.value)}</td>
    </tr>
  `;

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

  const equationItems = [
    { label: "Carteira VP", value: operation.portfolioVp, sign: "+" },
    { label: "Caixa", value: operation.cash, sign: "+" },
    { label: "Funding", value: operation.fundingBalance, sign: "-" },
    { label: "Resultado", value: result, sign: "=" }
  ];
  nodes.waterfall.innerHTML = `
    <div class="position-equation">
      ${equationItems.map((item, index) => `
        <article class="equation-row ${index === equationItems.length - 1 ? "result" : ""}">
          <span class="equation-sign">${item.sign}</span>
          <span class="equation-label">${item.label}</span>
          <strong class="${item.sign === "-" ? "negative" : signedClass(item.value)}">${formatCurrency(item.value)}</strong>
        </article>
      `).join("")}
    </div>
    <div class="formula-line">
      Resultado sintetico = Carteira VP + Caixa - Funding
    </div>
  `;

  const alerts = [
    {
      title: "Margem",
      text: `Spread ${formatSignedPercent(spread)} a.m.`,
      tone: spread < 0.18 ? "warn" : "ok"
    },
    {
      title: "Atraso",
      text: operation.overdue > 0 ? formatCurrency(operation.overdue) : "Sem atraso",
      tone: operation.overdue > 0 ? "warn" : "ok"
    },
    {
      title: "Garantia",
      text: `Cobertura ${formatPercent(guarantee.coverage * 100, 1)}`,
      tone: guaranteeStatus
    },
    {
      title: "Resultado",
      text: formatCurrency(result),
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

  nodes.portfolioTable.innerHTML = operation.portfolio.length ? operation.portfolio.map((row) => `
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
  `).join("") : `
    <tr>
      <td colspan="9">Carteira por titulo ainda nao carregada</td>
    </tr>
  `;
}

function render() {
  recalculateFundingPositions();
  renderSelectors();
  renderSummary();
  renderManagement();
  renderFundingEvolution();
  renderQuotesValidation();
  renderDetail();
  nodes.managementView.hidden = state.view !== "gerencial";
  nodes.fundingEvolutionView.hidden = state.view !== "evolucao";
  nodes.quotesView.hidden = state.view !== "cotacoes";
  nodes.detailView.hidden = state.view !== "individual";
}

nodes.dateSelector.addEventListener("change", (event) => {
  state.dateKey = event.target.value || state.dateKey;
  render();
});

nodes.fundingSelector.addEventListener("change", (event) => {
  if (state.view === "evolucao") {
    state.evolutionId = event.target.value || "gerencial";
    render();
    return;
  }
  if (event.target.value === "gerencial") {
    state.view = "gerencial";
  } else {
    state.selectedId = event.target.value;
    state.view = "individual";
  }
  render();
});

nodes.resultTable.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-funding]");
  if (!button) return;
  state.selectedId = button.dataset.openFunding;
  state.view = "individual";
  render();
});

nodes.fundingEvolutionInvestorTable.addEventListener("click", (event) => {
  const button = event.target.closest("[data-open-funding]");
  if (!button) return;
  state.selectedId = button.dataset.openFunding;
  state.view = "individual";
  render();
});

nodes.managementButton.addEventListener("click", () => {
  state.view = "gerencial";
  render();
});

nodes.fundingEvolutionButton.addEventListener("click", () => {
  if (state.view === "individual") state.evolutionId = state.selectedId;
  state.view = "evolucao";
  render();
});

nodes.quotesButton.addEventListener("click", () => {
  state.view = "cotacoes";
  state.dateKey = latestQuoteDate() || state.dateKey;
  render();
});

[
  [nodes.quotesMtCategoryFilter, "mtCategory"],
  [nodes.quotesMtRegionFilter, "mtRegion"],
  [nodes.quotesReplacementCategoryFilter, "replacementCategory"],
  [nodes.quotesReplacementUfFilter, "replacementUf"],
  [nodes.quotesReplacementTypeFilter, "replacementType"]
].forEach(([node, filterKey]) => {
  node.addEventListener("change", (event) => {
    state.quoteFilters[filterKey] = event.target.value;
    render();
  });
});

nodes.printButton.addEventListener("click", () => {
  window.print();
});

render();
