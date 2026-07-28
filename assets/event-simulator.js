(function () {
  const craManifest = Array.isArray(window.LAMINA_CRA_MANIFEST) ? window.LAMINA_CRA_MANIFEST : [];
  const loadedScripts = new Set();

  const state = {
    rows: [],
    rowState: new Map(),
    visibleRows: [],
    holidayDates: new Set()
  };

  const nodes = {
    statusPill: document.getElementById("status-pill"),
    globalEventDate: document.getElementById("global-event-date"),
    applyGlobalDate: document.getElementById("apply-global-date"),
    suggestCash: document.getElementById("suggest-cash"),
    filter: document.getElementById("series-filter"),
    selectVisible: document.getElementById("select-visible"),
    clearSelection: document.getElementById("clear-selection"),
    exportExcel: document.getElementById("export-af-excel"),
    summary: document.getElementById("sim-summary"),
    rows: document.getElementById("event-rows"),
    details: document.getElementById("event-details")
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setStatus(text, tone) {
    if (!nodes.statusPill) {
      return;
    }
    nodes.statusPill.textContent = text;
    nodes.statusPill.dataset.tone = tone || "neutral";
  }

  function formatCurrency(value) {
    const number = Number(value || 0);
    return number.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  function formatCurrencyShort(value) {
    const number = Number(value || 0);
    const abs = Math.abs(number);
    if (abs >= 1000000000) {
      return `R$ ${(number / 1000000000).toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} bi`;
    }
    if (abs >= 1000000) {
      return `R$ ${(number / 1000000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mi`;
    }
    if (abs >= 1000) {
      return `R$ ${(number / 1000).toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mil`;
    }
    return formatCurrency(number);
  }

  function formatMoneyInput(value) {
    const text = String(value || "").trim();
    if (!text) {
      return "";
    }
    const number = parseInputNumber(value);
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function formatNumber(value, decimals) {
    const number = Number(value || 0);
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function formatQuantity(value) {
    return Number(value || 0).toLocaleString("pt-BR", { maximumFractionDigits: 0 });
  }

  function getIfCode(row) {
    return row?.cota?.ifCodigo || row?.cota?.codigoIf || row?.cota?.codigoAtivo || row?.childLabel || "-";
  }

  function formatPercent(value) {
    const number = Number(value || 0);
    return number.toLocaleString("pt-BR", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function toIsoDate(value) {
    const text = String(value || "").trim();
    if (/^\d{4}-\d{2}-\d{2}$/.test(text)) {
      return text;
    }

    const match = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (match) {
      return `${match[3]}-${match[2]}-${match[1]}`;
    }

    return "";
  }

  function formatIsoDate(value) {
    const iso = toIsoDate(value);
    if (!iso) {
      return "-";
    }

    const [year, month, day] = iso.split("-");
    return `${day}/${month}/${year}`;
  }

  function parseIsoDate(value) {
    const iso = toIsoDate(value);
    if (!iso) {
      return null;
    }

    const [year, month, day] = iso.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  function toDateKey(date) {
    if (!(date instanceof Date) || Number.isNaN(date.getTime())) {
      return "";
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function addCalendarDays(dateKey, days) {
    const date = parseIsoDate(dateKey);
    if (!date) {
      return "";
    }

    date.setDate(date.getDate() + days);
    return toDateKey(date);
  }

  function isBusinessDayIso(dateKey) {
    const date = parseIsoDate(dateKey);
    if (!date) {
      return false;
    }

    const day = date.getDay();
    return day !== 0 && day !== 6 && !state.holidayDates.has(dateKey);
  }

  function addBusinessDays(dateKey, days) {
    let cursor = dateKey;
    let remaining = Math.abs(Number(days || 0));
    const step = Number(days || 0) < 0 ? -1 : 1;

    while (cursor && remaining > 0) {
      cursor = addCalendarDays(cursor, step);
      if (isBusinessDayIso(cursor)) {
        remaining -= 1;
      }
    }

    return cursor;
  }

  function normalizeBusinessDate(dateKey) {
    let cursor = toIsoDate(dateKey);
    let guard = 0;
    while (cursor && !isBusinessDayIso(cursor) && guard < 14) {
      cursor = addCalendarDays(cursor, 1);
      guard += 1;
    }
    return cursor;
  }

  function roundDecimal(value, decimals) {
    const factor = 10 ** decimals;
    return Math.round((Number(value || 0) + Number.EPSILON) * factor) / factor;
  }

  function truncateDecimal(value, decimals) {
    const factor = 10 ** decimals;
    return Math.trunc(Number(value || 0) * factor) / factor;
  }

  function clampNumber(value, min, max) {
    const number = Number(value || 0);
    return Math.min(Math.max(number, min), max);
  }

  function parseInputNumber(value) {
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : 0;
    }

    let text = String(value || "").trim();
    if (!text) {
      return 0;
    }

    text = text.replace(/R\$/gi, "").replace(/%/g, "").replace(/\s+/g, "");
    if (text.includes(",")) {
      text = text.replace(/\./g, "").replace(",", ".");
    }

    const number = Number(text);
    return Number.isFinite(number) ? number : 0;
  }

  function getTsDailyFactor(dailyRate, percentualIndexador) {
    const tdk = roundDecimal(dailyRate, 8);
    return truncateDecimal(1 + (tdk * Number(percentualIndexador || 1)), 16);
  }

  function addTsFactor(product, dailyFactor) {
    return truncateDecimal(Number(product || 1) * Number(dailyFactor || 1), 16);
  }

  function getTsFinalFactor(product) {
    return roundDecimal(product, 8);
  }

  function applyTsFactorToPu(basePu, product) {
    const vne = truncateDecimal(basePu, 8);
    const factorDi = getTsFinalFactor(product);
    const interest = truncateDecimal(vne * (factorDi - 1), 8);
    return vne + interest;
  }

  function isFixedRateCota(cota) {
    const metodo = String(cota?.metodo || "").toLowerCase();
    return metodo.includes("prefixado") || (!cota?.indexador && (Number(cota?.taxaAa || 0) || Number(cota?.taxaDia || 0)));
  }

  function getFixedDailyRate(cota) {
    if (Number(cota?.taxaDia || 0)) {
      return Number(cota.taxaDia);
    }

    const annualRate = Number(cota?.taxaAa || 0);
    return annualRate ? Math.pow(1 + annualRate, 1 / 252) - 1 : 0;
  }

  function getFixedDailyFactor(cota) {
    return getFixedDailyRate(cota) + 1;
  }

  function getFixedPeriodFactor(cota, businessDays) {
    const annualRate = Number(cota?.taxaAa || 0);
    return annualRate ? roundDecimal(Math.pow(1 + annualRate, Number(businessDays || 0) / 252), 9) : 1;
  }

  function getDiRateForDate(dateKey) {
    const rates = window.LAMINA_DI_RATES || {};
    const keys = Object.keys(rates).filter((key) => key <= dateKey).sort();
    const row = rates?.[dateKey] || rates?.[keys[keys.length - 1]];
    if (!row) {
      return null;
    }

    const dailyRate = Number(row.taxaDia || row.dailyRate || row.taxaDiUtilizadaDia || 0);
    if (!Number.isFinite(dailyRate) || dailyRate <= 0) {
      return null;
    }

    return {
      dailyRate,
      annualRate: Math.pow(1 + dailyRate, 252) - 1,
      dataTaxaDi: row.data ? formatIsoDate(row.data) : formatIsoDate(dateKey),
      dataTaxaDiIso: row.data || dateKey,
      dataReferenciaTaxaDi: row.data ? formatIsoDate(row.data) : formatIsoDate(dateKey),
      dataReferenciaTaxaDiIso: row.data || dateKey,
      taxaDiStatus: "informada"
    };
  }

  function getHistoryRowsToDate(cota, dateKey) {
    return [...(cota.historicoPu || [])]
      .filter((row) => toIsoDate(row.dataIso || row.data) && toIsoDate(row.dataIso || row.data) <= dateKey)
      .sort((a, b) => toIsoDate(a.dataIso || a.data).localeCompare(toIsoDate(b.dataIso || b.data)));
  }

  function getLastKnownRateInfo(cota, dateKey) {
    const history = getHistoryRowsToDate(cota, dateKey);
    const row = history[history.length - 1]
      || (cota.historicoPu || []).find((item) => Number(item.taxaDiUtilizadaDia))
      || (cota.previsaoPu || []).find((item) => Number(item.taxaDiUtilizadaDia))
      || {};

    const dailyRate = Number(row.taxaDiUtilizadaDia || row.tdk || 0);
    return {
      dailyRate,
      annualRate: Number(row.taxaDiAnualEquivalente || (dailyRate ? Math.pow(1 + dailyRate, 252) - 1 : 0)),
      dataTaxaDi: row.dataTaxaDi || "",
      dataTaxaDiIso: row.dataTaxaDiIso || "",
      dataReferenciaTaxaDi: row.dataReferenciaTaxaDi || "",
      dataReferenciaTaxaDiIso: row.dataReferenciaTaxaDiIso || "",
      fixedAnnualRate: Number(row.taxaAa || row.taxaPrefixadaAa || cota.taxaAa || 0),
      fixedDailyRate: Number(row.taxaPrefixadaDia || cota.taxaDia || 0) || getFixedDailyRate(cota)
    };
  }

  function getRateInfoForDate(cota, dateKey, fallback) {
    if (isFixedRateCota(cota)) {
      return fallback;
    }
    const diRate = getDiRateForDate(dateKey);
    return diRate ? { ...fallback, ...diRate } : fallback;
  }

  function buildProjectedRow(cota, dateKey, context) {
    const diaUtil = isBusinessDayIso(dateKey);
    const rateInfo = getRateInfoForDate(cota, dateKey, context.rateInfo);
    const fixedRate = isFixedRateCota(cota);
    let fatorDiario = 1;

    if (diaUtil && context.principal > 0) {
      context.diasUteis += 1;
      context.diasUteisPeriodo += 1;

      if (fixedRate) {
        fatorDiario = getFixedDailyFactor(cota);
        context.periodFactor = getFixedPeriodFactor(cota, context.diasUteisPeriodo);
        context.totalFactor = getFixedPeriodFactor(cota, context.diasUteis);
        context.pureDiFactor = context.totalFactor;
        context.pu = applyFixedFactorToPu(context.principal, context.periodFactor);
      } else {
        const dailyFactor = getTsDailyFactor(rateInfo.dailyRate, cota.percentualIndexador || 1);
        context.periodFactor = addTsFactor(context.periodFactor, dailyFactor);
        context.totalFactor = addTsFactor(context.totalFactor, dailyFactor);
        context.pureDiFactor = addTsFactor(context.pureDiFactor, getTsDailyFactor(rateInfo.dailyRate, 1));
        context.pu = applyTsFactorToPu(context.basePu, context.periodFactor);
        fatorDiario = dailyFactor;
      }
    }

    const fator = context.principal > 0 ? context.pu / context.principal : 0;
    return {
      data: formatIsoDate(dateKey),
      dataIso: dateKey,
      diaUtil,
      taxaDiUtilizadaDia: fixedRate ? rateInfo.fixedDailyRate : rateInfo.dailyRate,
      taxaDiAnualEquivalente: fixedRate ? rateInfo.fixedAnnualRate : rateInfo.annualRate,
      taxaAa: fixedRate ? rateInfo.fixedAnnualRate : undefined,
      taxaPrefixadaDia: fixedRate ? rateInfo.fixedDailyRate : undefined,
      taxaPrefixadaAa: fixedRate ? rateInfo.fixedAnnualRate : undefined,
      dataTaxaDi: rateInfo.dataTaxaDi,
      dataTaxaDiIso: rateInfo.dataTaxaDiIso,
      taxaDiStatus: fixedRate ? "prefixada" : "projetada",
      dataReferenciaTaxaDi: rateInfo.dataReferenciaTaxaDi,
      dataReferenciaTaxaDiIso: rateInfo.dataReferenciaTaxaDiIso,
      diasUteis: context.diasUteis,
      diasUteisPeriodo: context.diasUteisPeriodo,
      fator,
      valorNominal: context.principal,
      puAtualizado: context.pu,
      puJuros: context.pu - context.principal,
      valorReais: context.pu * Number(cota.quantidade || 0),
      tdk: fixedRate ? rateInfo.fixedDailyRate : rateInfo.dailyRate,
      fatorDiario,
      produtorioFatorDi: context.totalFactor,
      fatorDiAcumulado: context.periodFactor,
      spread: fixedRate ? 0 : Number(cota.percentualIndexador || 1) - 1,
      spreadAcumulado: fixedRate ? 0 : context.totalFactor - context.pureDiFactor,
      fatorJurosAcumulado: fator,
      evento: "",
      puEvento: 0
    };
  }

  function applyFixedFactorToPu(principal, factor) {
    const vna = truncateDecimal(principal, 8);
    const interest = truncateDecimal(vna * (Number(factor || 1) - 1), 8);
    return vna + interest;
  }

  function createProjectionContext(cota, startRow, startDateKey) {
    const principal = Number(startRow?.valorNominal ?? cota.principalResidual ?? cota.valorNominalInicial ?? 0);
    const pu = Number(startRow?.puAtualizado ?? cota.pu ?? principal);
    return {
      startDateKey,
      rateInfo: getLastKnownRateInfo(cota, startDateKey),
      principal,
      pu,
      basePu: pu,
      periodFactor: 1,
      totalFactor: Number(startRow?.produtorioFatorDi || 1),
      pureDiFactor: 1,
      diasUteis: Number(startRow?.diasUteis || 0),
      diasUteisPeriodo: Number(startRow?.diasUteisPeriodo || startRow?.diasUteis || 0)
    };
  }

  function projectCotaUntilDate(cota, startRow, startDateKey, targetDateKey) {
    const projectedRows = [];
    const context = createProjectionContext(cota, startRow, startDateKey);
    let cursor = startDateKey;

    while (cursor && cursor < targetDateKey) {
      cursor = addCalendarDays(cursor, 1);
      projectedRows.push(buildProjectedRow(cota, cursor, context));
    }

    return { projectedRows, context };
  }

  function getSimulationBaseRow(row, targetDateKey) {
    const cota = row.cota;
    const startDateKey = row.dateKey;
    const startRow = {
      data: formatIsoDate(startDateKey),
      dataIso: startDateKey,
      puAtualizado: Number(cota?.pu || 0),
      valorNominal: Number(cota?.principalResidual ?? cota?.valorNominalInicial ?? 0),
      diasUteis: Number(cota?.acumulacaoFinal?.diasAcumulacao || 0),
      diasUteisPeriodo: Number(cota?.acumulacaoFinal?.diasUteisPeriodo ?? cota?.acumulacaoFinal?.diasAcumulacao ?? 0),
      produtorioFatorDi: 1
    };

    if (!targetDateKey || targetDateKey <= startDateKey) {
      const history = getHistoryRowsToDate(cota, targetDateKey || startDateKey);
      return history.find((item) => toIsoDate(item.dataIso || item.data) === targetDateKey)
        || history[history.length - 1]
        || startRow;
    }

    const projection = projectCotaUntilDate(cota, startRow, startDateKey, targetDateKey);
    return projection.projectedRows[projection.projectedRows.length - 1] || startRow;
  }

  function getDefaultEventConfig() {
    return {
      dateKey: "",
      afLeadDays: 5,
      interest: true,
      ordinaryAmortization: false,
      amex: false,
      rescue: false,
      premium: false,
      interestPayPct: 100,
      ordinaryLimitPct: 100,
      amexLimitPct: 100,
      premiumPct: 0
    };
  }

  function getDefaultEventDateForRow(row) {
    return normalizeBusinessDate(addBusinessDays(row?.dateKey || toDateKey(new Date()), 5));
  }

  function getRowState(rowId) {
    if (!state.rowState.has(rowId)) {
      const defaults = getDefaultEventConfig();
      const row = state.rows.find((item) => item.id === rowId);
      state.rowState.set(rowId, {
        selected: false,
        dateKey: getDefaultEventDateForRow(row),
        afLeadDays: defaults.afLeadDays,
        cash: "",
        interest: defaults.interest,
        ordinaryAmortization: defaults.ordinaryAmortization,
        amex: defaults.amex,
        rescue: defaults.rescue,
        premium: defaults.premium,
        interestPayPct: defaults.interestPayPct,
        ordinaryLimitPct: defaults.ordinaryLimitPct,
        amexLimitPct: defaults.amexLimitPct,
        premiumPct: defaults.premiumPct
      });
    }
    return state.rowState.get(rowId);
  }

  function getRowEventConfig(row) {
    const defaults = getDefaultEventConfig();
    const rowState = getRowState(row.id);
    return {
      ...defaults,
      dateKey: normalizeBusinessDate(rowState.dateKey || defaults.dateKey || getDefaultEventDateForRow(row)),
      afLeadDays: clampNumber(parseInputNumber(rowState.afLeadDays), 0, 30),
      interest: Boolean(rowState.interest),
      ordinaryAmortization: Boolean(rowState.ordinaryAmortization),
      amex: Boolean(rowState.amex),
      rescue: Boolean(rowState.rescue),
      premium: Boolean(rowState.premium),
      interestPayPct: 100,
      ordinaryLimitPct: 100,
      amexLimitPct: 100,
      premiumPct: 0
    };
  }

  function simulateEvent(row, config, cashAvailable = 0, cashOriginal = cashAvailable) {
    const cota = row.cota;
    const quantity = Number(cota?.quantidade || 0);
    const targetDateKey = config.dateKey || row.dateKey;
    const baseRow = getSimulationBaseRow(row, targetDateKey);
    const puBefore = Number(baseRow.puAtualizado || 0);
    const principalBefore = Number(baseRow.valorNominal ?? cota?.principalResidual ?? 0);
    const interestPu = Math.max(0, puBefore - principalBefore);
    const hasPrincipalEvent = config.ordinaryAmortization || config.amex || config.rescue;
    const handlesInterest = config.interest || hasPrincipalEvent;
    const components = [];

    let cashRemaining = Math.max(0, parseInputNumber(cashAvailable));
    const originalCash = Math.max(0, parseInputNumber(cashOriginal));
    let principalAfterInterest = principalBefore;
    let puAfterInterest = puBefore;
    let interestPaidPu = 0;
    let interestIncorporatedPu = 0;

    if (handlesInterest) {
      const desiredInterestPu = interestPu * (Number(config.interestPayPct || 0) / 100);
      interestPaidPu = quantity > 0 ? Math.min(desiredInterestPu, cashRemaining / quantity) : 0;
      const interestPaidValue = interestPaidPu * quantity;
      cashRemaining = Math.max(0, cashRemaining - interestPaidValue);
      interestIncorporatedPu = Math.max(0, interestPu - interestPaidPu);
      principalAfterInterest = principalBefore + interestIncorporatedPu;
      puAfterInterest = principalAfterInterest;

      components.push({
        component: "Juros",
        pu: interestPaidPu,
        value: interestPaidValue,
        detail: interestIncorporatedPu > 0
          ? `Incorpora ${formatNumber(interestIncorporatedPu, 8)} PU`
          : "Pago em caixa"
      });
    }

    let principal = principalAfterInterest;
    let puAfter = puAfterInterest;
    let ordinaryPu = 0;
    let amexPu = 0;
    let rescuePu = 0;
    let rescueShortfall = 0;

    if (config.ordinaryAmortization && quantity > 0 && principal > 0 && cashRemaining > 0) {
      const limitPu = principal * (Number(config.ordinaryLimitPct || 0) / 100);
      ordinaryPu = Math.min(limitPu, cashRemaining / quantity, principal);
      const value = ordinaryPu * quantity;
      principal = Math.max(0, principal - ordinaryPu);
      cashRemaining = Math.max(0, cashRemaining - value);
      components.push({
        component: "Amortizacao",
        pu: ordinaryPu,
        value,
        detail: "Prevista no TS"
      });
    }

    if (config.amex && quantity > 0 && principal > 0 && cashRemaining > 0) {
      const limitPu = principal * (Number(config.amexLimitPct || 0) / 100);
      amexPu = Math.min(limitPu, cashRemaining / quantity, principal);
      const value = amexPu * quantity;
      principal = Math.max(0, principal - amexPu);
      cashRemaining = Math.max(0, cashRemaining - value);
      components.push({
        component: "AMEX",
        pu: amexPu,
        value,
        detail: "Amortizacao extraordinaria"
      });
    }

    if (config.rescue && quantity > 0 && principal > 0) {
      const neededValue = principal * quantity;
      if (cashRemaining >= neededValue) {
        rescuePu = principal;
        principal = 0;
        cashRemaining = Math.max(0, cashRemaining - neededValue);
        components.push({
          component: "Resgate total",
          pu: rescuePu,
          value: neededValue,
          detail: "PU zera apos evento"
        });
      } else {
        rescueShortfall = neededValue - cashRemaining;
        components.push({
          component: "Resgate total",
          pu: 0,
          value: 0,
          detail: `Saldo insuficiente: faltam ${formatCurrency(rescueShortfall)}`
        });
      }
    }

    if (handlesInterest || hasPrincipalEvent) {
      puAfter = principal;
    }

    const paidBeforePremium = components.reduce((total, item) => total + Number(item.value || 0), 0);
    const premiumValue = config.premium ? paidBeforePremium * (Number(config.premiumPct || 0) / 100) : 0;
    if (config.premium) {
      cashRemaining -= premiumValue;
      components.push({
        component: "Premio",
        pu: null,
        value: premiumValue,
        detail: `${formatPercent(Number(config.premiumPct || 0) / 100)} sobre o valor do evento`
      });
    }

    const principalEventPu = ordinaryPu + amexPu + rescuePu;
    const eventPu = interestPaidPu + principalEventPu;
    const eventValue = paidBeforePremium + premiumValue;
    const afDeadline = addBusinessDays(targetDateKey, -Math.round(Number(config.afLeadDays || 0)));
    const warning = rescueShortfall > 0 || cashRemaining < -0.0001
      ? "insuficiente"
      : eventValue <= 0 && cashOriginal <= 0
        ? "sem-caixa"
        : "ok";

    return {
      row,
      dateKey: targetDateKey,
      afDeadline,
      baseRow,
      quantity,
      cashOriginal: originalCash,
      cashBefore: Math.max(0, parseInputNumber(cashAvailable)),
      puBefore,
      principalBefore,
      interestPu,
      interestPaidPu,
      interestIncorporatedPu,
      ordinaryPu,
      amexPu,
      rescuePu,
      rescueShortfall,
      eventPu,
      eventValue,
      puAfter,
      principalAfter: principal,
      valueAfter: principal * quantity,
      cashRemaining,
      components,
      warning
    };
  }

  function loadScript(src) {
    if (loadedScripts.has(src)) {
      return Promise.resolve();
    }

    loadedScripts.add(src);
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Falha ao carregar ${src}.`));
      document.head.appendChild(script);
    });
  }

  function getLatestManifestEntry(cra) {
    return [...(cra?.dates || [])]
      .filter((item) => item.dataScript && toIsoDate(item.dateKey))
      .sort((a, b) => toIsoDate(b.dateKey).localeCompare(toIsoDate(a.dateKey)))[0] || null;
  }

  function shouldLoadCra(cra) {
    const craId = String(cra?.craId || "");
    if (!craId || craId === "cras-carteira-overview") {
      return false;
    }
    return Boolean(getLatestManifestEntry(cra));
  }

  async function loadSnapshot(cra) {
    const entry = getLatestManifestEntry(cra);
    if (!entry) {
      return null;
    }

    window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
    window.LAMINA_CRA_DAILY[cra.craId] = window.LAMINA_CRA_DAILY[cra.craId] || {};

    if (!window.LAMINA_CRA_DAILY[cra.craId][entry.dateKey]) {
      const version = encodeURIComponent(entry.revisionId || entry.importedAt || Date.now());
      await loadScript(`./${entry.dataScript}?v=${version}`);
    }

    return window.LAMINA_CRA_DAILY[cra.craId][entry.dateKey] || null;
  }

  function collectHolidays(snapshot) {
    const calendar = snapshot?.metadata?.businessCalendar || snapshot?.businessCalendar || {};
    const holidays = Array.isArray(calendar.holidays) ? calendar.holidays : [];
    holidays.map(toIsoDate).filter(Boolean).forEach((dateKey) => state.holidayDates.add(dateKey));
  }

  function getSnapshotCash(snapshot) {
    return Number(snapshot?.caixa?.total ?? snapshot?.ativo?.caixa ?? 0) || 0;
  }

  function isFundingSeries(cota) {
    const classe = String(cota?.classe || "").toUpperCase();
    const tipo = String(cota?.tipo || "").toLowerCase();

    if (cota?.ehFunding === false || tipo.includes("sub") || classe.includes("SUB")) {
      return false;
    }

    return true;
  }

  function isFundingCota(cota) {
    const quantity = Number(cota?.quantidade || 0);
    const pu = Number(cota?.pu || cota?.principalResidual || 0);

    if (!isFundingSeries(cota)) {
      return false;
    }

    return quantity > 0 && pu > 0;
  }

  function isResolvedFundingCota(cota) {
    if (!isFundingSeries(cota)) {
      return false;
    }

    const quantity = Number(cota?.quantidade || 0);
    const pu = Number(cota?.pu || 0);
    const principal = Number(cota?.principalResidual ?? cota?.pu ?? 0);
    const status = String(cota?.statusIntegralizacao || cota?.status || "").toLowerCase();

    if (quantity <= 0) {
      return false;
    }
    if (status.includes("finaliz") || status.includes("liquid")) {
      return true;
    }
    return Math.abs(pu) <= 0.000001 && Math.abs(principal) <= 0.000001;
  }

  function getSubordinadaSimulatorMetas(snapshot) {
    const fromMetadata = snapshot?.metadata?.subordinadasSimulador;
    const fromPassivo = snapshot?.passivo?.subordinadasSimulador;
    return (Array.isArray(fromMetadata) ? fromMetadata : Array.isArray(fromPassivo) ? fromPassivo : [])
      .filter((item) => Number(item?.quantidade || item?.quantidadeEmitida || 0) > 0);
  }

  function shouldShowSubordinadas(snapshot, cotas) {
    const fundingSeries = cotas.filter(isFundingSeries).filter((cota) => Number(cota?.quantidade || 0) > 0);
    if (!fundingSeries.length || !getSubordinadaSimulatorMetas(snapshot).length) {
      return false;
    }
    return fundingSeries.every(isResolvedFundingCota);
  }

  function buildSyntheticSubCota(meta, snapshot, dateKey) {
    const quantity = Number(meta?.quantidade || meta?.quantidadeEmitida || 0);
    const principal = Number(meta?.principalResidual ?? meta?.valorNominalInicial ?? meta?.pu ?? 1000) || 1000;
    const pu = Number(meta?.pu ?? principal) || principal;
    const maturityIso = meta?.dataVencimentoIso || snapshot?.cra?.dataVencimentoIso || "";
    const startIso = meta?.dataInicioIso || dateKey;

    return {
      classe: "SUB",
      tipo: "sub",
      label: meta?.label || "Subordinada",
      ifCodigo: meta?.ifCodigo || "",
      quantidade: quantity,
      quantidadeEmitida: quantity,
      quantidadeAIntegralizar: 0,
      statusIntegralizacao: "Subordinada residual",
      dataInicio: meta?.dataInicio || formatIsoDate(startIso),
      dataInicioIso: startIso,
      dataVencimento: meta?.dataVencimento || formatIsoDate(maturityIso),
      dataVencimentoIso: maturityIso,
      valorNominalInicial: principal,
      principalResidual: principal,
      pu,
      valor: pu * quantity,
      taxaAa: 0,
      taxaAm: 0,
      taxaDia: 0,
      taxaTexto: meta?.taxaTexto || "Subordinada residual",
      indexador: "",
      percentualIndexador: 0,
      metodo: "subordinada_residual",
      ehFunding: false,
      ordem: 90,
      eventosAplicados: [],
      agendaPagamentos: maturityIso ? [{ dataIso: maturityIso, juros: false, amortizacaoPercentual: 1 }] : [],
      acumulacaoFinal: {
        periodoInicio: formatIsoDate(dateKey),
        periodoFim: formatIsoDate(dateKey),
        diasAcumulacao: 0,
        diasUteisPeriodo: 0,
        puAntesAcumulacao: principal,
        puFinal: pu
      },
      historicoPu: [{
        data: formatIsoDate(dateKey),
        dataIso: dateKey,
        diaUtil: isBusinessDayIso(dateKey),
        puAtualizado: pu,
        valorNominal: principal,
        principalResidual: principal,
        puJuros: Math.max(0, pu - principal),
        valorReais: pu * quantity,
        quantidade: quantity,
        taxaDiStatus: "subordinada",
        evento: "Subordinada residual",
        produtorioFatorDi: 1,
        fatorDiAcumulado: 1,
        fatorJurosAcumulado: 1
      }]
    };
  }

  function formatSerie(cra, cota) {
    const classe = String(cota?.classe || "").toUpperCase();
    const tipo = String(cota?.tipo || "").toLowerCase();
    if (classe.includes("SUB") || tipo.includes("sub")) {
      return "Subordinada";
    }
    const isCarteira = String(cra?.craId || "").includes("carteira");
    if (isCarteira) {
      if (classe === "SR1") return "Senior";
      if (classe === "SR2") return "Mezanino A";
      if (classe === "SR3") return "Mezanino B";
    }
    if (classe === "SR1") return "Senior 1";
    if (classe === "SR2") return "Senior 2";
    if (classe === "SR3") return "Senior 3";
    return cota?.nome || cota?.tipo || cota?.classe || "Serie";
  }

  function formatRemuneracao(cota) {
    const taxaTexto = String(cota?.taxaTexto || cota?.taxa || "").trim();
    if (taxaTexto) {
      return taxaTexto;
    }
    if (cota?.indexador) {
      return `${formatPercent(cota.percentualIndexador || 1)} ${cota.indexador}`;
    }
    if (cota?.taxaAa) {
      return `${formatPercent(cota.taxaAa)} a.a.`;
    }
    if (cota?.taxaAm) {
      return `${formatPercent(cota.taxaAm)} a.m.`;
    }
    if (cota?.taxaDia) {
      return `${formatPercent(cota.taxaDia)} a.d.`;
    }
    return "-";
  }

  function buildRowsFromSnapshot(cra, snapshot) {
    const dateKey = toIsoDate(snapshot?.metadata?.dateKey || snapshot?.metadata?.reportDate || cra?.currentDate);
    const cash = getSnapshotCash(snapshot);
    const craName = snapshot?.cra?.name || cra?.name || cra?.childLabel || cra?.craId;
    const cotas = snapshot?.passivo?.cotas || [];
    const visibleCotas = [
      ...cotas.filter(isFundingCota),
      ...(shouldShowSubordinadas(snapshot, cotas)
        ? getSubordinadaSimulatorMetas(snapshot).map((meta) => buildSyntheticSubCota(meta, snapshot, dateKey))
        : [])
    ];

    return visibleCotas
      .map((cota, index) => {
        const id = `${cra.craId}::${cota.classe || cota.tipo || index}::${cota.ifCodigo || index}`;
        return {
          id,
          craId: cra.craId,
          craName,
          childLabel: cra?.childLabel || "",
          dateKey,
          baseCash: cash,
          cota,
          serie: formatSerie(cra, cota),
          remuneration: formatRemuneracao(cota),
          search: `${craName} ${cra?.childLabel || ""} ${cota.classe || ""} ${cota.ifCodigo || ""} ${formatSerie(cra, cota)}`.toLowerCase()
        };
      });
  }

  function renderSummary() {
    const simulations = getSelectedSimulations();
    const selectedRows = simulations.length;
    const selectedCraIds = [...new Set(simulations.map((item) => item.row.craId))];
    const totalCash = simulations.reduce((total, item) => total + item.cashOriginal, 0);
    const totalEvent = simulations.reduce((total, item) => total + item.eventValue, 0);
    const totalInterest = simulations.reduce((total, item) => total + item.interestPaidPu * item.quantity, 0);
    const totalPrincipal = simulations.reduce((total, item) => total + (item.ordinaryPu + item.amexPu + item.rescuePu) * item.quantity, 0);
    const totalPremium = simulations.reduce((total, item) => {
      const premium = item.components.find((component) => component.component === "Premio");
      return total + Number(premium?.value || 0);
    }, 0);
    const remaining = simulations.reduce((total, item) => total + Number(item.cashRemaining || 0), 0);
    const warnings = simulations.filter((item) => item.warning === "insuficiente").length;

    nodes.summary.innerHTML = `
      <article class="metric-card">
        <span class="metric-label">Series selecionadas</span>
        <strong>${escapeHtml(formatQuantity(selectedRows))}</strong>
        <small>${escapeHtml(formatQuantity(selectedCraIds.length))} CRAs distintos</small>
      </article>
      <article class="metric-card">
        <span class="metric-label">Caixa informado</span>
        <strong>${escapeHtml(formatCurrencyShort(totalCash))}</strong>
        <small>Digitado por serie</small>
      </article>
      <article class="metric-card">
        <span class="metric-label">Valor do evento</span>
        <strong>${escapeHtml(formatCurrencyShort(totalEvent))}</strong>
        <small>Juros + principal + premio</small>
      </article>
      <article class="metric-card">
        <span class="metric-label">Juros pagos</span>
        <strong>${escapeHtml(formatCurrencyShort(totalInterest))}</strong>
        <small>Conforme parametro por serie</small>
      </article>
      <article class="metric-card">
        <span class="metric-label">Principal amortizado</span>
        <strong>${escapeHtml(formatCurrencyShort(totalPrincipal))}</strong>
        <small>Amort. + AMEX + resgate</small>
      </article>
      <article class="metric-card ${warnings ? "metric-card-alert" : ""}">
        <span class="metric-label">Saldo pos-evento</span>
        <strong>${escapeHtml(formatCurrencyShort(remaining))}</strong>
        <small>${warnings ? `${warnings} alerta(s)` : `Premio: ${formatCurrencyShort(totalPremium)}`}</small>
      </article>
    `;
  }

  function getSelectedSimulations() {
    return state.rows
      .filter((row) => getRowState(row.id).selected)
      .map((row) => {
        const rowState = getRowState(row.id);
        const cash = Math.max(0, parseInputNumber(rowState.cash));
        return simulateEvent(row, getRowEventConfig(row), cash, cash);
      });
  }

  function getSimulationMap() {
    return getSelectedSimulations().reduce((map, simulation) => {
      map.set(simulation.row.id, simulation);
      return map;
    }, new Map());
  }

  function simulatePreviewRow(row) {
    const rowState = getRowState(row.id);
    const config = getRowEventConfig(row);
    const cash = Math.max(0, parseInputNumber(rowState.cash));
    const simulation = simulateEvent(row, config, cash, cash);
    if (rowState.selected) {
      return simulation;
    }

    return {
      ...simulation,
      components: [],
      eventPu: 0,
      eventValue: 0,
      puAfter: simulation.puBefore,
      principalAfter: simulation.principalBefore,
      valueAfter: simulation.puBefore * simulation.quantity,
      cashRemaining: cash,
      warning: cash > 0 ? "sem-evento" : "sem-caixa"
    };
  }

  function getVisibleRows() {
    const filter = String(nodes.filter?.value || "").trim().toLowerCase();
    if (!filter) {
      return state.rows;
    }
    return state.rows.filter((row) => row.search.includes(filter));
  }

  function renderRowEventChecks(row) {
    const rowState = getRowState(row.id);
    const options = [
      ["interest", "Juros"],
      ["ordinaryAmortization", "Amort."],
      ["amex", "AMEX"],
      ["rescue", "Resgate"],
      ["premium", "Premio"]
    ];

    return `
      <div class="cra-event-checks">
        ${options.map(([key, label]) => `
          <label>
            <input type="checkbox" data-row-type="${escapeHtml(key)}" data-row-id="${escapeHtml(row.id)}" ${rowState[key] ? "checked" : ""}>
            ${escapeHtml(label)}
          </label>
        `).join("")}
      </div>
    `;
  }

  function renderRows() {
    state.visibleRows = getVisibleRows();
    if (!state.visibleRows.length) {
      nodes.rows.innerHTML = `<tr><td colspan="18">Nenhuma serie encontrada para o filtro.</td></tr>`;
      return;
    }

    const simulationMap = getSimulationMap();
    nodes.rows.innerHTML = state.visibleRows.map((row) => {
      const rowState = getRowState(row.id);
      const simulation = simulationMap.get(row.id) || simulatePreviewRow(row);
      return `
        <tr data-row-id="${escapeHtml(row.id)}">
          <td>
            <input class="sim-row-check" type="checkbox" data-row-select="${escapeHtml(row.id)}" ${rowState.selected ? "checked" : ""} aria-label="Selecionar ${escapeHtml(row.craName)} ${escapeHtml(row.serie)}">
          </td>
          <td>
            <strong>${escapeHtml(row.craName)}</strong>
            <small>${escapeHtml(row.cota.ifCodigo || row.childLabel || row.craId)}</small>
          </td>
          <td>${escapeHtml(row.serie)}</td>
          <td>${escapeHtml(formatIsoDate(row.dateKey))}</td>
          <td>${escapeHtml(formatQuantity(row.cota.quantidade))}</td>
          <td>${escapeHtml(row.remuneration)}</td>
          <td>
            <input class="sim-date-input" type="date" data-row-date="${escapeHtml(row.id)}" value="${escapeHtml(rowState.dateKey || getDefaultEventDateForRow(row))}">
          </td>
          <td>
            <input class="sim-af-input" type="number" min="0" max="30" step="1" data-row-af="${escapeHtml(row.id)}" value="${escapeHtml(rowState.afLeadDays)}">
          </td>
          <td>
            <input class="sim-cash-input cra-cash-input" type="text" inputmode="decimal" data-row-cash="${escapeHtml(row.id)}" value="${escapeHtml(rowState.cash)}" placeholder="0,00">
          </td>
          <td>${renderRowEventChecks(row)}</td>
          <td data-cell="puBefore">${escapeHtml(formatNumber(simulation.puBefore, 8))}</td>
          <td data-cell="interestPu">${escapeHtml(formatNumber(simulation.interestPu, 8))}</td>
          <td data-cell="eventPu">${escapeHtml(formatNumber(simulation.eventPu, 8))}</td>
          <td data-cell="eventValue">${escapeHtml(formatCurrencyShort(simulation.eventValue))}</td>
          <td data-cell="puAfter">${escapeHtml(formatNumber(simulation.puAfter, 8))}</td>
          <td data-cell="cashRemaining">${escapeHtml(formatCurrencyShort(simulation.cashRemaining))}</td>
          <td data-cell="afDeadline">${escapeHtml(formatIsoDate(simulation.afDeadline))}</td>
          <td data-cell="warning">${renderWarning(simulation.warning)}</td>
        </tr>
      `;
    }).join("");
  }

  function renderWarning(warning) {
    if (warning === "insuficiente") {
      return `<span class="sim-badge is-danger">Insuf.</span>`;
    }
    if (warning === "sem-caixa") {
      return `<span class="sim-badge is-muted">Sem caixa</span>`;
    }
    if (warning === "sem-evento") {
      return `<span class="sim-badge is-muted">Nao sel.</span>`;
    }
    return `<span class="sim-badge is-ok">OK</span>`;
  }

  function getWarningLabel(warning) {
    if (warning === "insuficiente") {
      return "Saldo insuficiente";
    }
    if (warning === "sem-caixa") {
      return "Sem caixa";
    }
    if (warning === "sem-evento") {
      return "Nao selecionado";
    }
    return "OK";
  }

  function updateComputedCells() {
    renderRows();
    renderSummary();
    renderDetails();
  }

  function renderDetails() {
    const simulations = getSelectedSimulations();
    if (!simulations.length) {
      nodes.details.innerHTML = `
        <div class="empty-state">
          Selecione uma ou mais series, informe o caixa disponivel e escolha os tipos de evento para gerar a memoria por serie.
        </div>
      `;
      return;
    }

    nodes.details.innerHTML = simulations.map((simulation) => {
      const row = simulation.row;
      const components = simulation.components.length
        ? simulation.components
        : [{ component: "Sem componente", pu: 0, value: 0, detail: "Selecione um evento" }];
      return `
        <article class="sim-detail-card">
          <div class="sim-detail-card-head">
            <div>
              <p class="eyebrow">${escapeHtml(row.craName)}</p>
              <h3>${escapeHtml(row.serie)}</h3>
            </div>
            <span>${escapeHtml(formatIsoDate(simulation.dateKey))}</span>
          </div>
          <div class="sim-detail-metrics">
            <span>Codigo IF <strong>${escapeHtml(getIfCode(row))}</strong></span>
            <span>PU antes <strong>${escapeHtml(formatNumber(simulation.puBefore, 8))}</strong></span>
            <span>Juros PU <strong>${escapeHtml(formatNumber(simulation.interestPu, 8))}</strong></span>
            <span>PU pos <strong>${escapeHtml(formatNumber(simulation.puAfter, 8))}</strong></span>
            <span>Saldo <strong>${escapeHtml(formatCurrencyShort(simulation.cashRemaining))}</strong></span>
          </div>
          <div class="table-wrap">
            <table class="compact-table sim-table">
              <thead>
                <tr>
                  <th>Componente</th>
                  <th>PU</th>
                  <th>Valor</th>
                  <th>Detalhe</th>
                </tr>
              </thead>
              <tbody>
                ${components.map((component) => `
                  <tr>
                    <td><strong>${escapeHtml(component.component)}</strong></td>
                    <td>${component.pu == null ? "-" : escapeHtml(formatNumber(component.pu, 8))}</td>
                    <td>${escapeHtml(formatCurrency(component.value))}</td>
                    <td>${escapeHtml(component.detail || "-")}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </article>
      `;
    }).join("");
  }

  function getExcelTimestamp() {
    const now = new Date();
    const date = toDateKey(now).replace(/-/g, "");
    const time = `${String(now.getHours()).padStart(2, "0")}${String(now.getMinutes()).padStart(2, "0")}`;
    return `${date}-${time}`;
  }

  function escapeXml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&apos;");
  }

  function toColumnName(index) {
    let column = "";
    let current = index + 1;
    while (current > 0) {
      const remainder = (current - 1) % 26;
      column = String.fromCharCode(65 + remainder) + column;
      current = Math.floor((current - 1) / 26);
    }
    return column;
  }

  function cleanSheetName(name) {
    return String(name || "Planilha")
      .replace(/[\\/*?:[\]]/g, " ")
      .slice(0, 31)
      .trim() || "Planilha";
  }

  function buildSheetXml(headers, rows, options = {}) {
    const allRows = [headers, ...rows];
    const rowStyles = options.rowStyles || {};
    const rowHeights = options.rowHeights || {};
    const maxColumns = Math.max(...allRows.map((row) => row.length));
    const columnWidths = Array.from({ length: maxColumns }, (_, columnIndex) => {
      const maxLength = allRows.reduce((max, row) => {
        const length = String(row[columnIndex] ?? "").length;
        return Math.max(max, length);
      }, 0);
      return Math.min(Math.max(maxLength + 3, 10), 30);
    });
    const colsXml = columnWidths
      .map((width, index) => `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`)
      .join("");

    const rowsXml = allRows.map((row, rowIndex) => {
      const rowNumber = rowIndex + 1;
      const rowStyle = rowStyles[rowNumber] ?? 0;
      const isBlank = row.every((value) => !String(value ?? "").trim());
      const height = rowHeights[rowNumber] ? ` ht="${rowHeights[rowNumber]}" customHeight="1"` : "";
      if (isBlank) {
        return `<row r="${rowNumber}"${height || ` ht="8" customHeight="1"`}/>`;
      }

      const cellsXml = row.map((value, columnIndex) => {
        const cellRef = `${toColumnName(columnIndex)}${rowNumber}`;
        const text = String(value ?? "");
        if (!text) {
          return "";
        }
        const style = ` s="${rowStyle}"`;
        return `<c r="${cellRef}" t="inlineStr"${style}><is><t xml:space="preserve">${escapeXml(text)}</t></is></c>`;
      }).join("");
      return `<row r="${rowNumber}"${height}>${cellsXml}</row>`;
    }).join("");
    const mergeCells = Array.isArray(options.merges) && options.merges.length
      ? `<mergeCells count="${options.merges.length}">${options.merges.map((ref) => `<mergeCell ref="${escapeXml(ref)}"/>`).join("")}</mergeCells>`
      : "";

    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <sheetViews><sheetView workbookViewId="0" showGridLines="0"/></sheetViews>
        <sheetFormatPr defaultRowHeight="15"/>
        <cols>${colsXml}</cols>
        <sheetData>${rowsXml}</sheetData>
        ${mergeCells}
      </worksheet>`;
  }

  function buildStylesXml() {
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <fonts count="5">
          <font><sz val="11"/><color theme="1"/><name val="Calibri"/></font>
          <font><b/><sz val="11"/><color rgb="FF000000"/><name val="Calibri"/></font>
          <font><b/><sz val="16"/><color rgb="FF11495A"/><name val="Calibri"/></font>
          <font><sz val="11"/><color rgb="FF4F5F6A"/><name val="Calibri"/></font>
          <font><b/><sz val="11"/><color rgb="FF000000"/><name val="Calibri"/></font>
        </fonts>
        <fills count="2">
          <fill><patternFill patternType="none"/></fill>
          <fill><patternFill patternType="gray125"/></fill>
        </fills>
        <borders count="2">
          <border><left/><right/><top/><bottom/><diagonal/></border>
          <border>
            <left style="thin"><color rgb="FFC9D0D5"/></left>
            <right style="thin"><color rgb="FFC9D0D5"/></right>
            <top style="thin"><color rgb="FFC9D0D5"/></top>
            <bottom style="thin"><color rgb="FFC9D0D5"/></bottom>
            <diagonal/>
          </border>
        </borders>
        <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
        <cellXfs count="6">
          <xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1"/>
          <xf numFmtId="0" fontId="1" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center"/></xf>
          <xf numFmtId="0" fontId="2" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
          <xf numFmtId="0" fontId="3" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
          <xf numFmtId="0" fontId="4" fillId="0" borderId="1" xfId="0" applyFont="1" applyBorder="1"/>
          <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
        </cellXfs>
        <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
      </styleSheet>`;
  }

  function makeCrcTable() {
    const table = [];
    for (let i = 0; i < 256; i += 1) {
      let crc = i;
      for (let bit = 0; bit < 8; bit += 1) {
        crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
      }
      table[i] = crc >>> 0;
    }
    return table;
  }

  const crcTable = makeCrcTable();

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (let i = 0; i < bytes.length; i += 1) {
      crc = crcTable[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  function dosDateTime(date = new Date()) {
    const year = Math.max(1980, date.getFullYear());
    const dosTime = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
    const dosDate = ((year - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
    return { dosDate, dosTime };
  }

  function writeUint16(view, offset, value) {
    view.setUint16(offset, value, true);
  }

  function writeUint32(view, offset, value) {
    view.setUint32(offset, value >>> 0, true);
  }

  function createZipBlob(files) {
    const encoder = new TextEncoder();
    const now = dosDateTime();
    const localParts = [];
    const centralParts = [];
    let offset = 0;

    files.forEach((file) => {
      const nameBytes = encoder.encode(file.name);
      const dataBytes = typeof file.content === "string" ? encoder.encode(file.content) : file.content;
      const crc = crc32(dataBytes);

      const localHeader = new Uint8Array(30 + nameBytes.length);
      const localView = new DataView(localHeader.buffer);
      writeUint32(localView, 0, 0x04034b50);
      writeUint16(localView, 4, 20);
      writeUint16(localView, 6, 0);
      writeUint16(localView, 8, 0);
      writeUint16(localView, 10, now.dosTime);
      writeUint16(localView, 12, now.dosDate);
      writeUint32(localView, 14, crc);
      writeUint32(localView, 18, dataBytes.length);
      writeUint32(localView, 22, dataBytes.length);
      writeUint16(localView, 26, nameBytes.length);
      writeUint16(localView, 28, 0);
      localHeader.set(nameBytes, 30);
      localParts.push(localHeader, dataBytes);

      const centralHeader = new Uint8Array(46 + nameBytes.length);
      const centralView = new DataView(centralHeader.buffer);
      writeUint32(centralView, 0, 0x02014b50);
      writeUint16(centralView, 4, 20);
      writeUint16(centralView, 6, 20);
      writeUint16(centralView, 8, 0);
      writeUint16(centralView, 10, 0);
      writeUint16(centralView, 12, now.dosTime);
      writeUint16(centralView, 14, now.dosDate);
      writeUint32(centralView, 16, crc);
      writeUint32(centralView, 20, dataBytes.length);
      writeUint32(centralView, 24, dataBytes.length);
      writeUint16(centralView, 28, nameBytes.length);
      writeUint16(centralView, 30, 0);
      writeUint16(centralView, 32, 0);
      writeUint16(centralView, 34, 0);
      writeUint16(centralView, 36, 0);
      writeUint32(centralView, 38, 0);
      writeUint32(centralView, 42, offset);
      centralHeader.set(nameBytes, 46);
      centralParts.push(centralHeader);

      offset += localHeader.length + dataBytes.length;
    });

    const centralOffset = offset;
    const centralSize = centralParts.reduce((total, part) => total + part.length, 0);
    const endHeader = new Uint8Array(22);
    const endView = new DataView(endHeader.buffer);
    writeUint32(endView, 0, 0x06054b50);
    writeUint16(endView, 4, 0);
    writeUint16(endView, 6, 0);
    writeUint16(endView, 8, files.length);
    writeUint16(endView, 10, files.length);
    writeUint32(endView, 12, centralSize);
    writeUint32(endView, 16, centralOffset);
    writeUint16(endView, 20, 0);

    return new Blob([...localParts, ...centralParts, endHeader], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    });
  }

  function createXlsxBlob(sheets) {
    const createdAt = new Date().toISOString();
    const worksheetFiles = sheets.map((sheet, index) => ({
      name: `xl/worksheets/sheet${index + 1}.xml`,
      content: buildSheetXml(sheet.headers, sheet.rows, sheet.options || {})
    }));

    const sheetOverrides = sheets
      .map((_, index) => `<Override PartName="/xl/worksheets/sheet${index + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`)
      .join("");
    const sheetEntries = sheets
      .map((sheet, index) => `<sheet name="${escapeXml(cleanSheetName(sheet.name))}" sheetId="${index + 1}" r:id="rId${index + 1}"/>`)
      .join("");
    const sheetRels = sheets
      .map((_, index) => `<Relationship Id="rId${index + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${index + 1}.xml"/>`)
      .join("");
    const stylesRelId = `rId${sheets.length + 1}`;

    return createZipBlob([
      {
        name: "[Content_Types].xml",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
            <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
            <Default Extension="xml" ContentType="application/xml"/>
            <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
            <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
            <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
            <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
            ${sheetOverrides}
          </Types>`
      },
      {
        name: "_rels/.rels",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
            <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
            <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
            <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
          </Relationships>`
      },
      {
        name: "xl/workbook.xml",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
            <sheets>${sheetEntries}</sheets>
          </workbook>`
      },
      {
        name: "xl/_rels/workbook.xml.rels",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
            ${sheetRels}
            <Relationship Id="${stylesRelId}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
          </Relationships>`
      },
      { name: "xl/styles.xml", content: buildStylesXml() },
      {
        name: "docProps/core.xml",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <dc:creator>Ceres</dc:creator>
            <cp:lastModifiedBy>Ceres</cp:lastModifiedBy>
            <dcterms:created xsi:type="dcterms:W3CDTF">${createdAt}</dcterms:created>
            <dcterms:modified xsi:type="dcterms:W3CDTF">${createdAt}</dcterms:modified>
          </cp:coreProperties>`
      },
      {
        name: "docProps/app.xml",
        content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
          <Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
            <Application>Ceres Lamina</Application>
          </Properties>`
      },
      ...worksheetFiles
    ]);
  }

  function exportAfExcel() {
    const simulations = getSelectedSimulations();
    if (!simulations.length) {
      window.alert("Selecione uma ou mais series antes de gerar a memoria para o AF.");
      return;
    }

    const summaryHeaders = [
      "CRA",
      "Serie",
      "Codigo IF",
      "Data-base",
      "Data do evento",
      "Quantidade",
      "Remuneracao",
      "Caixa informado",
      "PU antes",
      "Principal antes",
      "Juros PU",
      "PU do evento",
      "Valor do evento",
      "PU pos-evento",
      "Valor pos-evento"
    ];

    const summaryRows = [];
    let previousSummaryCraId = "";
    simulations.forEach((simulation, index) => {
      const row = simulation.row;
      if (index > 0 && row.craId !== previousSummaryCraId) {
        summaryRows.push(Array(summaryHeaders.length).fill(""));
      }
      summaryRows.push([
        row.craName,
        row.serie,
        getIfCode(row),
        formatIsoDate(row.dateKey),
        formatIsoDate(simulation.dateKey),
        formatQuantity(simulation.quantity),
        row.remuneration,
        formatCurrency(simulation.cashOriginal),
        formatNumber(simulation.puBefore, 8),
        formatNumber(simulation.principalBefore, 8),
        formatNumber(simulation.interestPu, 8),
        formatNumber(simulation.eventPu, 8),
        formatCurrency(simulation.eventValue),
        formatNumber(simulation.puAfter, 8),
        formatCurrency(simulation.valueAfter)
      ]);
      previousSummaryCraId = row.craId;
    });

    const componentHeaders = [
      "CRA",
      "Serie",
      "Codigo IF",
      "Data do evento",
      "Componente",
      "PU",
      "Valor",
      "PU residual pos-evento",
      "Detalhe"
    ];

    const componentRows = [];
    let previousComponentCraId = "";
    simulations.forEach((simulation, index) => {
      const row = simulation.row;
      if (index > 0 && row.craId !== previousComponentCraId) {
        componentRows.push(Array(componentHeaders.length).fill(""));
      }
      const components = simulation.components.length
        ? simulation.components
        : [{ component: "Sem componente", pu: 0, value: 0, detail: "Selecione um evento" }];
      components.forEach((component) => {
        componentRows.push([
          row.craName,
          row.serie,
          getIfCode(row),
          formatIsoDate(simulation.dateKey),
          component.component,
          component.pu == null ? "-" : formatNumber(component.pu, 8),
          formatCurrency(component.value),
          formatNumber(simulation.puAfter, 8),
          component.detail || "-"
        ]);
      });
      previousComponentCraId = row.craId;
    });

    const maxColumns = Math.max(summaryHeaders.length, componentHeaders.length);
    const blankRow = Array(maxColumns).fill("");
    const padRow = (row) => [
      ...row,
      ...Array(Math.max(0, maxColumns - row.length)).fill("")
    ];
    const generatedAt = new Date().toLocaleString("pt-BR");
    const unifiedRows = [
      padRow([`Gerado em ${generatedAt} | ${formatQuantity(simulations.length)} series selecionadas`]),
      blankRow,
      padRow(summaryHeaders),
      ...summaryRows.map(padRow),
      blankRow,
      padRow(["Componentes por evento"]),
      padRow(componentHeaders),
      ...componentRows.map(padRow)
    ];
    const summaryHeaderRow = 4;
    const componentSectionRow = 5 + summaryRows.length;
    const componentHeaderRow = componentSectionRow + 1;

    const blob = createXlsxBlob([
      {
        name: "Memoria AF",
        headers: padRow(["Resumo por serie"]),
        rows: unifiedRows,
        options: {
          rowStyles: {
            1: 2,
            2: 3,
            [summaryHeaderRow]: 1,
            [componentSectionRow]: 4,
            [componentHeaderRow]: 1
          },
          rowHeights: {
            1: 24,
            2: 18,
            3: 8
          },
          merges: []
        }
      }
    ]);
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `memoria-af-${getExcelTimestamp()}.xlsx`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  function bindEvents() {
    nodes.filter?.addEventListener("input", () => {
      updateComputedCells();
    });

    nodes.applyGlobalDate?.addEventListener("click", () => {
      const normalized = normalizeBusinessDate(nodes.globalEventDate?.value || "");
      const eventDate = normalized || nodes.globalEventDate?.value || "";
      if (nodes.globalEventDate && normalized && normalized !== nodes.globalEventDate.value) {
        nodes.globalEventDate.value = normalized;
      }

      state.rows.forEach((row) => {
        getRowState(row.id).dateKey = eventDate || getDefaultEventDateForRow(row);
      });
      updateComputedCells();
    });

    nodes.selectVisible?.addEventListener("click", () => {
      getVisibleRows().forEach((row) => {
        getRowState(row.id).selected = true;
      });
      updateComputedCells();
    });

    nodes.clearSelection?.addEventListener("click", () => {
      state.rowState.forEach((item) => {
        item.selected = false;
      });
      updateComputedCells();
    });

    nodes.suggestCash?.addEventListener("click", () => {
      getVisibleRows().forEach((row) => {
        getRowState(row.id).cash = formatMoneyInput(row.baseCash);
      });
      updateComputedCells();
    });

    nodes.exportExcel?.addEventListener("click", exportAfExcel);

    nodes.rows?.addEventListener("input", (event) => {
      const cashId = event.target?.getAttribute("data-row-cash");
      if (cashId) {
        getRowState(cashId).cash = event.target.value;
        return;
      }

      const dateId = event.target?.getAttribute("data-row-date");
      if (dateId) {
        getRowState(dateId).dateKey = event.target.value;
        return;
      }

      const afId = event.target?.getAttribute("data-row-af");
      if (afId) {
        getRowState(afId).afLeadDays = event.target.value;
      }
    });

    nodes.rows?.addEventListener("change", (event) => {
      const selectId = event.target?.getAttribute("data-row-select");
      if (selectId) {
        getRowState(selectId).selected = Boolean(event.target.checked);
        updateComputedCells();
        return;
      }

      const dateId = event.target?.getAttribute("data-row-date");
      if (dateId) {
        const normalized = normalizeBusinessDate(event.target.value);
        getRowState(dateId).dateKey = normalized || event.target.value;
        if (normalized && normalized !== event.target.value) {
          event.target.value = normalized;
        }
        updateComputedCells();
        return;
      }

      const afId = event.target?.getAttribute("data-row-af");
      if (afId) {
        getRowState(afId).afLeadDays = event.target.value;
        updateComputedCells();
        return;
      }

      const cashId = event.target?.getAttribute("data-row-cash");
      if (cashId) {
        const formatted = formatMoneyInput(event.target.value);
        getRowState(cashId).cash = formatted;
        event.target.value = formatted;
        updateComputedCells();
        return;
      }

      const type = event.target?.getAttribute("data-row-type");
      const rowId = event.target?.getAttribute("data-row-id");
      if (rowId && type) {
        getRowState(rowId)[type] = Boolean(event.target.checked);
        updateComputedCells();
      }
    });
  }

  async function init() {
    try {
      setStatus("Carregando", "neutral");
      const craEntries = craManifest.filter(shouldLoadCra);
      const snapshots = await Promise.all(craEntries.map(async (cra) => {
        try {
          const snapshot = await loadSnapshot(cra);
          return { cra, snapshot };
        } catch (error) {
          console.warn(error);
          return { cra, snapshot: null, error };
        }
      }));

      snapshots.forEach(({ snapshot }) => {
        if (snapshot) {
          collectHolidays(snapshot);
        }
      });

      state.rows = snapshots
        .flatMap(({ cra, snapshot }) => snapshot ? buildRowsFromSnapshot(cra, snapshot) : [])
        .sort((a, b) => `${a.craName} ${a.serie}`.localeCompare(`${b.craName} ${b.serie}`, "pt-BR", { numeric: true }));

      const latestBaseDate = state.rows
        .map((row) => row.dateKey)
        .filter(Boolean)
        .sort()
        .pop();
      const defaultEventDate = normalizeBusinessDate(addBusinessDays(latestBaseDate || toDateKey(new Date()), 5));
      if (nodes.globalEventDate && defaultEventDate) {
        nodes.globalEventDate.value = defaultEventDate;
        state.rows.forEach((row) => {
          getRowState(row.id).dateKey = defaultEventDate;
        });
      }

      renderRows();
      renderSummary();
      renderDetails();
      bindEvents();

      const failed = snapshots.filter((item) => item.error).length;
      setStatus(failed ? `${state.rows.length} series / ${failed} falha(s)` : `${state.rows.length} series carregadas`, failed ? "warning" : "ok");
    } catch (error) {
      console.error(error);
      setStatus("Erro ao carregar", "error");
      nodes.rows.innerHTML = `<tr><td colspan="18">${escapeHtml(error.message || "Erro ao carregar simulador.")}</td></tr>`;
    }
  }

  init();
})();
