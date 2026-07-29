(function () {
  const craManifest = Array.isArray(window.LAMINA_CRA_MANIFEST) ? window.LAMINA_CRA_MANIFEST : [];

  const state = {
    craId: window.LAMINA_CURRENT_CRA || craManifest[0]?.craId || "",
    dateKey: "",
    snapshot: null,
    baseSnapshot: null,
    cotaIndex: 0,
    holidayDates: new Set()
  };

  const nodes = {
    craSelector: document.getElementById("cra-selector"),
    craChildControl: null,
    craChildSelector: null,
    dateSelector: document.getElementById("date-selector"),
    dateChips: document.getElementById("date-chips"),
    cotaTabs: document.getElementById("cota-tabs"),
    updatePuButton: document.getElementById("update-pu-button"),
    statusPill: document.getElementById("status-pill"),
    summaryStrip: document.getElementById("summary-strip"),
    puRoot: document.getElementById("pu-root"),
    sourceList: document.getElementById("source-list"),
    timeline: document.getElementById("timeline")
  };

  const PUBLIC_HIDDEN_CRA_GROUP_ID = "cras-carteira";

  function isPublicAccess() {
    const role = window.LAMINA_AUTH?.currentUser?.().role || "public";
    return role === "public" || role === "viewer";
  }

  function isCrasCarteiraEntry(cra) {
    const craId = String(cra?.craId || "");
    return String(cra?.groupId || "") === PUBLIC_HIDDEN_CRA_GROUP_ID
      || craId === "cras-carteira-overview"
      || craId.startsWith("cra-carteira-");
  }

  function getAccessibleCraManifest() {
    return isPublicAccess()
      ? craManifest.filter((cra) => !isCrasCarteiraEntry(cra))
      : craManifest;
  }

  function getFirstAccessibleCra() {
    return getAccessibleCraManifest()[0] || craManifest[0] || null;
  }

  function normalizeCraAccess() {
    const current = craManifest.find((cra) => cra.craId === state.craId);
    if (!current || (isPublicAccess() && isCrasCarteiraEntry(current))) {
      const fallback = getFirstAccessibleCra();
      state.craId = fallback?.craId || "";
    }
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function setStatus(text, tone) {
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
    return formatCurrency(number);
  }

  function formatNumber(value, decimals) {
    const number = Number(value || 0);
    return number.toLocaleString("pt-BR", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function formatPercent(value) {
    const number = Number(value || 0);
    return number.toLocaleString("pt-BR", {
      style: "percent",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  function formatDateRange(start, end) {
    if (!start && !end) {
      return "-";
    }
    return `${start || "-"} a ${end || "-"}`;
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

  function normalizeBusinessDateKey(dateKey, step = -1) {
    let cursor = toIsoDate(dateKey);
    let guard = 0;
    while (cursor && !isBusinessDayIso(cursor) && guard < 14) {
      cursor = addCalendarDays(cursor, step);
      guard += 1;
    }
    return cursor;
  }

  function getControlDateKey() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return normalizeBusinessDateKey(addCalendarDays(toDateKey(today), -1), -1);
  }

  function isBusinessDayIso(dateKey) {
    const date = parseIsoDate(dateKey);
    if (!date) {
      return false;
    }

    const day = date.getDay();
    return day !== 0 && day !== 6 && !state.holidayDates.has(dateKey);
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
    const row = rates?.[dateKey] || rates?.[Object.keys(rates).filter((key) => key <= dateKey).sort().pop()];
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

  function applyFixedFactorToPu(principal, factor) {
    const vna = truncateDecimal(principal, 8);
    const interest = truncateDecimal(vna * (Number(factor || 1) - 1), 8);
    return vna + interest;
  }

  function getTsPaymentLabel(dateKey, cotaOrClasse) {
    const date = parseIsoDate(dateKey);
    const cota = typeof cotaOrClasse === "object" && cotaOrClasse !== null ? cotaOrClasse : null;
    const scheduledEvent = (cota?.agendaPagamentos || []).find((event) => {
      const eventDate = toIsoDate(event.dataIso || event.data);
      return eventDate === dateKey;
    });

    if (scheduledEvent) {
      const labels = [];
      if (scheduledEvent.juros) {
        labels.push("Juros TS");
      }
      if (Number(scheduledEvent.amortizacaoPercentual || 0) > 0 || scheduledEvent.amortizacao) {
        labels.push(Number(scheduledEvent.amortizacaoPercentual || 0) >= 1 ? "Amortizacao final TS" : "Amortizacao TS");
      }
      return labels.join(" / ");
    }

    if (cota && Array.isArray(cota.agendaPagamentos)) {
      return "";
    }

    const classe = cota?.classe || cotaOrClasse;
    const normalizedClasse = String(classe || "").toUpperCase();
    const isSenior = ["SR1", "SR2", "SR3"].includes(normalizedClasse);
    if (!date || !isSenior) {
      return "";
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const labels = [];
    if (((month === 1 && day === 15 && year <= 2030) || (month === 7 && day === 15 && year <= 2029))) {
      labels.push("Juros TS");
    }

    if (normalizedClasse === "SR1" && dateKey === "2030-04-15") labels.push("Amortizacao final TS");
    if (normalizedClasse === "SR2" && dateKey === "2030-05-15") labels.push("Amortizacao final TS");
    if (normalizedClasse === "SR3" && dateKey === "2030-06-17") labels.push("Amortizacao final TS");
    return labels.join(" / ");
  }

  function formatRemuneracao(cota) {
    const taxaTexto = String(cota.taxaTexto || cota.taxa || "").trim();
    if (taxaTexto) {
      return taxaTexto;
    }
    if (cota.indexador) {
      return `${formatPercent(cota.percentualIndexador || 1)} ${cota.indexador}`;
    }
    if (cota.taxaAa) {
      return `${formatPercent(cota.taxaAa)} a.a.`;
    }
    if (cota.taxaAm) {
      return `${formatPercent(cota.taxaAm)} a.m.`;
    }
    if (cota.taxaDia) {
      return `${formatPercent(cota.taxaDia)} a.d.`;
    }
    return "-";
  }

  function formatDiStatus(status) {
    if (status === "informada") {
      return "Informada";
    }
    if (status === "ultima_disponivel") {
      return "Ultima disponivel";
    }
    if (status === "projetada") {
      return "Projetada";
    }
    if (status === "prefixada") {
      return "Prefixada";
    }
    return "-";
  }

  function formatClasseDisplay(cota) {
    const classe = String(cota?.classe || "").toUpperCase();
    if (classe === "SR1") {
      return "Senior 1";
    }
    if (classe === "SR2") {
      return "Senior 2";
    }
    if (classe === "SR3") {
      return "Senior 3";
    }
    return cota?.label || cota?.classe || "-";
  }

  function formatTipoDisplay(cota) {
    const tipo = String(cota?.tipo || "").toLowerCase();
    if (tipo === "sr") {
      return "Senior";
    }
    if (tipo === "sub") {
      return "Subordinada";
    }
    return cota?.tipo || "-";
  }

  function getNextPayment(cota) {
    return (cota?.previsaoPu || []).find((row) => row.ehDataPagamentoTs) || null;
  }

  function isSeniorCota(cota) {
    return ["SR1", "SR2", "SR3"].includes(String(cota?.classe || "").toUpperCase());
  }

  function formatNextPayment(cota) {
    const payment = getNextPayment(cota);
    if (!payment) {
      return "-";
    }
    return `${formatCurrency(payment.valorEventoReais || 0)} em ${payment.data}`;
  }

  function getCotaMaturityDateKey(cota) {
    const direct = toIsoDate(cota?.dataVencimentoIso || cota?.maturityDateIso || cota?.vencimentoIso || cota?.dataVencimento || cota?.maturityDate || cota?.vencimento);
    if (direct) {
      return direct;
    }

    const classe = String(cota?.classe || "").toUpperCase();
    const cra = getCurrentCra();
    const manifestSeriesDate = toIsoDate(cra?.vencimentosSeries?.[classe]);
    if (manifestSeriesDate) {
      return manifestSeriesDate;
    }

    const finalEvents = (cota?.agendaPagamentos || [])
      .filter((event) => Number(event.amortizacaoPercentual || 0) >= 1 || event.amortizacaoFinal || event.amortizacao)
      .map((event) => toIsoDate(event.dataIso || event.data))
      .filter(Boolean)
      .sort();

    return finalEvents[finalEvents.length - 1] || "";
  }

  function getSnapshotMaturityDateKey(snapshot) {
    const direct = toIsoDate(snapshot?.cra?.dataVencimentoIso || snapshot?.cra?.maturityDateIso || snapshot?.cra?.vencimentoIso || snapshot?.cra?.dataVencimento || snapshot?.cra?.maturityDate || snapshot?.cra?.vencimento);
    if (direct) {
      return direct;
    }

    const cra = getCurrentCra();
    const manifestDate = toIsoDate(cra?.dataVencimentoIso || cra?.maturityDateIso || cra?.vencimentoIso || cra?.dataVencimento || cra?.maturityDate || cra?.vencimento);
    if (manifestDate) {
      return manifestDate;
    }

    const dates = (snapshot?.passivo?.cotas || [])
      .map(getCotaMaturityDateKey)
      .filter(Boolean)
      .sort();

    return dates[dates.length - 1] || "";
  }

  function getPaymentComponent(event) {
    const raw = `${event?.componente || ""} ${event?.tipo || ""} ${event?.tipoNormalizado || ""} ${event?.tipoEvento || ""} ${event?.efeito || ""}`;
    const normalized = raw
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/gi, "")
      .toLowerCase();

    if (normalized.includes("integralizacao")) {
      return "Integralizacao";
    }
    if (normalized.includes("amex") || normalized.includes("amortizacaoextraordinaria")) {
      return "AMEX";
    }
    if (normalized.includes("juros") || normalized.includes("remuneracao")) {
      return "Juros";
    }
    if (normalized.includes("eventogenerico") || normalized.includes("generico")) {
      return "Evento generico";
    }
    if (normalized.includes("resgate")) {
      return "Resgate";
    }

    return event?.tipoEvento || event?.tipo || event?.tipoNormalizado || "-";
  }

  function formatCotaTabDetail(cota) {
    if (cota.dataHistoricaDisponivel === false) {
      return "Nao integralizada na data-base";
    }

    if (cota.visaoHistoricaPu) {
      return `${formatCurrency(cota.valor || 0)} em ${cota.dataHistoricaSelecionada || "-"}`;
    }

    return formatNextPayment(cota);
  }

  function getAnnualRate(row) {
    if (row.taxaAa != null) {
      return row.taxaAa;
    }
    if (row.taxaPrefixadaAa != null) {
      return row.taxaPrefixadaAa;
    }
    if (row.taxaDiAnualEquivalente != null) {
      return row.taxaDiAnualEquivalente;
    }

    const dailyRate = Number(row.taxaDiUtilizadaDia || row.taxaPrefixadaDia || 0);
    return dailyRate ? Math.pow(1 + dailyRate, 252) - 1 : 0;
  }

  function field(label, value) {
    return `
      <div class="pu-field">
        <span>${escapeHtml(label)}</span>
        <strong>${escapeHtml(value)}</strong>
      </div>
    `;
  }

  function getEventTotalValue(event, cota) {
    const directValues = [
      event.valorEventoReais,
      event.valorReais,
      event.valor,
      event.valorIntegralizadoReais
    ];

    for (const value of directValues) {
      const number = Number(value);
      if (Number.isFinite(number)) {
        return number;
      }
    }

    const puEvento = Number(event.puEvento || 0);
    const quantidade = Number(cota?.quantidade || 0);
    return puEvento * quantidade;
  }

  function getCurrentCra() {
    normalizeCraAccess();
    return craManifest.find((cra) => cra.craId === state.craId) || getFirstAccessibleCra();
  }

  function getGroupedCraOptions() {
    const options = [];
    const seenGroups = new Set();

    for (const cra of getAccessibleCraManifest()) {
      if (cra.groupId) {
        if (!seenGroups.has(cra.groupId)) {
          seenGroups.add(cra.groupId);
          options.push({
            value: `group:${cra.groupId}`,
            label: cra.groupName || cra.groupId,
            type: "group",
            groupId: cra.groupId
          });
        }
        continue;
      }

      options.push({
        value: `cra:${cra.craId}`,
        label: cra.name || cra.craId,
        type: "cra",
        craId: cra.craId
      });
    }

    return options;
  }

  function getGroupChildren(groupId) {
    return getAccessibleCraManifest().filter((cra) => cra.groupId === groupId);
  }

  function getCurrentMainSelection() {
    const cra = getCurrentCra();
    return cra?.groupId ? `group:${cra.groupId}` : `cra:${cra?.craId || state.craId}`;
  }

  function ensureCraChildSelector() {
    if (nodes.craChildSelector || !nodes.craSelector) {
      return;
    }

    const mainControl = nodes.craSelector.closest(".date-control");
    const childControl = document.createElement("label");
    childControl.className = "date-control cra-child-control";
    childControl.hidden = true;
    childControl.innerHTML = `
      <span>Operação</span>
      <select id="cra-child-selector" aria-label="Selecionar operação de CRAs Carteira"></select>
    `;

    mainControl?.after(childControl);
    nodes.craChildControl = childControl;
    nodes.craChildSelector = childControl.querySelector("select");
    nodes.craChildSelector.addEventListener("change", (event) => {
      selectCra(event.target.value);
    });
  }

  function getManifestEntry(dateKey) {
    const cra = getCurrentCra();
    return cra?.dates?.find((item) => item.dateKey === dateKey) || null;
  }

  function getNearestManifestEntry(dateKey) {
    const targetDate = toIsoDate(dateKey);
    const cra = getCurrentCra();
    const dates = (cra?.dates || [])
      .map((item) => ({ ...item, dateKey: toIsoDate(item.dateKey) }))
      .filter((item) => item.dateKey)
      .sort((a, b) => a.dateKey.localeCompare(b.dateKey));

    if (!targetDate || !dates.length) {
      return null;
    }

    return dates.filter((item) => item.dateKey <= targetDate).pop() || dates[0] || null;
  }

  function isPortfolioOverviewCra(cra) {
    return String(cra?.craId || "") === "cras-carteira-overview"
      || String(cra?.childLabel || "").toLowerCase().includes("vis")
      && String(cra?.childLabel || "").toLowerCase().includes("geral");
  }

  function getManifestDateBounds() {
    const cra = getCurrentCra();
    const dates = (cra?.dates || [])
      .map((item) => toIsoDate(item.dateKey))
      .filter(Boolean)
      .sort();
    const controlDate = getControlDateKey();
    const maxCandidates = isPortfolioOverviewCra(cra)
      ? [dates[dates.length - 1], cra?.currentDate].filter(Boolean).sort()
      : [dates[dates.length - 1], cra?.currentDate, controlDate].filter(Boolean).sort();

    return {
      min: dates[0] || "",
      max: maxCandidates[maxCandidates.length - 1] || ""
    };
  }

  function getDefaultDateKey(cra) {
    const controlDate = getControlDateKey();
    const manifestDates = (cra?.dates || [])
      .map((item) => toIsoDate(item.dateKey))
      .filter(Boolean)
      .sort();
    const manifestCurrent = toIsoDate(cra?.currentDate) || manifestDates[manifestDates.length - 1] || "";

    if (isPortfolioOverviewCra(cra)) {
      return manifestCurrent || controlDate;
    }

    if (controlDate && (!manifestCurrent || controlDate > manifestCurrent)) {
      return controlDate;
    }

    return manifestCurrent || controlDate;
  }

  function getHistoricalDateBounds(snapshot) {
    const cotas = snapshot?.passivo?.cotas || [];
    const relevantCotas = cotas.some(isSeniorCota) ? cotas.filter(isSeniorCota) : cotas;
    const dates = relevantCotas
      .flatMap((cota) => (cota.historicoPu || []).map((row) => toIsoDate(row.dataIso || row.data)))
      .filter(Boolean)
      .sort();

    return {
      min: dates[0] || "",
      max: dates[dates.length - 1] || toIsoDate(snapshot?.metadata?.dateKey || snapshot?.metadata?.reportDate)
    };
  }

  function updateDateInputBounds(snapshot) {
    if (!nodes.dateSelector) {
      return;
    }

    const manifestBounds = getManifestDateBounds();
    const historyBounds = getHistoricalDateBounds(snapshot);
    const min = [historyBounds.min, manifestBounds.min].filter(Boolean).sort()[0] || "";
    const maxCandidates = [historyBounds.max, manifestBounds.max].filter(Boolean).sort();
    const max = maxCandidates[maxCandidates.length - 1] || "";

    if (min) {
      nodes.dateSelector.min = min;
    } else {
      nodes.dateSelector.removeAttribute("min");
    }

    if (max) {
      nodes.dateSelector.max = max;
    } else {
      nodes.dateSelector.removeAttribute("max");
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  async function loadSnapshot(craId, dateKey) {
    window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
    window.LAMINA_CRA_DAILY[craId] = window.LAMINA_CRA_DAILY[craId] || {};

    if (window.LAMINA_CRA_DAILY[craId][dateKey]) {
      return window.LAMINA_CRA_DAILY[craId][dateKey];
    }

    const cra = craManifest.find((item) => item.craId === craId);
    const entry = cra?.dates?.find((item) => item.dateKey === dateKey);
    if (!entry) {
      throw new Error(`Snapshot nao encontrado para ${craId} em ${dateKey}.`);
    }

    const version = encodeURIComponent(entry.revisionId || entry.importedAt || Date.now());
    await loadScript(`./${entry.dataScript}?v=${version}`);

    if (!window.LAMINA_CRA_DAILY[craId][dateKey]) {
      throw new Error(`Falha ao carregar ${entry.dataScript}.`);
    }

    return window.LAMINA_CRA_DAILY[craId][dateKey];
  }

  function renderCraSelector() {
    ensureCraChildSelector();

    nodes.craSelector.innerHTML = getGroupedCraOptions().map((option) => `
      <option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>
    `).join("");
    nodes.craSelector.value = getCurrentMainSelection();

    const currentCra = getCurrentCra();
    const groupId = currentCra?.groupId || "";
    const children = groupId ? getGroupChildren(groupId) : [];

    if (nodes.craChildControl && nodes.craChildSelector) {
      nodes.craChildControl.hidden = !children.length;
      nodes.craChildSelector.innerHTML = children.map((cra) => `
        <option value="${escapeHtml(cra.craId)}">${escapeHtml(cra.childLabel || cra.name || cra.craId)}</option>
      `).join("");
      nodes.craChildSelector.value = state.craId;
    }
  }

  function renderDateSelector() {
    const cra = getCurrentCra();
    nodes.dateSelector.value = state.dateKey;
    nodes.dateSelector.disabled = !getDefaultDateKey(cra);
    nodes.dateSelector.title = "Escolha uma data para consultar o snapshot do dia ou o PU historico das cotas.";
    updateDateInputBounds(state.snapshot);
    renderDateChips();
  }

  function renderDateChips() {
    if (!nodes.dateChips) {
      return;
    }

    const cra = getCurrentCra();
    const entry = getManifestEntry(state.dateKey);
    const isHistoricalView = Boolean(state.snapshot?.metadata?.historicalView);
    const isCalculatedView = Boolean(state.snapshot?.metadata?.calculatedView);
    const label = isCalculatedView ? "PU calculado" : isHistoricalView ? "PU historico" : "Snapshot salvo";
    const selectedDate = entry?.reportDate || formatIsoDate(state.dateKey);
    const currentDate = cra?.currentDate || cra?.dates?.[0]?.dateKey || "";
    const currentButton = currentDate && currentDate !== state.dateKey
      ? `<button class="date-chip date-chip-secondary" data-date-key="${escapeHtml(currentDate)}" type="button">Voltar atual</button>`
      : "";

    nodes.dateChips.innerHTML = state.dateKey
      ? `
        <span class="date-chip date-chip-static is-active">${escapeHtml(label)}: ${escapeHtml(selectedDate)}</span>
        ${currentButton}
      `
      : "";

    nodes.dateChips.querySelectorAll("[data-date-key]").forEach((button) => {
      button.addEventListener("click", () => {
        selectDate(button.getAttribute("data-date-key"));
      });
    });
  }

  function cloneData(value) {
    return JSON.parse(JSON.stringify(value));
  }

  function getHistoryRowsToDate(cota, dateKey) {
    return [...(cota.historicoPu || [])]
      .filter((row) => toIsoDate(row.dataIso || row.data) && toIsoDate(row.dataIso || row.data) <= dateKey)
      .sort((a, b) => toIsoDate(a.dataIso || a.data).localeCompare(toIsoDate(b.dataIso || b.data)));
  }

  function getHistoricalRow(cota, dateKey) {
    const rows = getHistoryRowsToDate(cota, dateKey);
    return rows.find((row) => toIsoDate(row.dataIso || row.data) === dateKey) || rows[rows.length - 1] || null;
  }

  function getLastKnownRateInfo(cota, dateKey) {
    const history = [...(cota.historicoPu || [])]
      .filter((row) => toIsoDate(row.dataIso || row.data) && toIsoDate(row.dataIso || row.data) <= dateKey)
      .sort((a, b) => toIsoDate(a.dataIso || a.data).localeCompare(toIsoDate(b.dataIso || b.data)));
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

  function buildProjectedRow(cota, dateKey, context, options = {}) {
    const diaUtil = isBusinessDayIso(dateKey);
    const rateInfo = getRateInfoForDate(cota, dateKey, context.rateInfo);
    const fixedRate = isFixedRateCota(cota);
    let fatorDiario = 1;
    let puAntesEvento = context.pu;

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

      puAntesEvento = context.pu;
    }

    const eventoTs = options.ignoreScheduledEvents ? "" : getTsPaymentLabel(dateKey, cota);
    let puEvento = 0;
    let efeitoEvento = "";
    const principalAntesEvento = context.principal;

    if (eventoTs) {
      if (eventoTs.includes("Juros")) {
        puEvento = Math.max(0, context.pu - context.principal);
        context.pu = Math.max(context.principal, context.pu - puEvento);
        context.basePu = context.pu;
        context.periodFactor = 1;
        context.diasUteisPeriodo = 0;
        efeitoEvento = "paga_remuneracao";
      }

      if (eventoTs.includes("Amortizacao")) {
        puEvento = context.pu;
        context.principal = 0;
        context.pu = 0;
        context.basePu = 0;
        context.periodFactor = 1;
        context.diasUteisPeriodo = 0;
        efeitoEvento = "amortizacao_final";
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
      puJuros: puEvento > 0 ? puEvento : context.pu - context.principal,
      puAntesEvento,
      puEvento,
      puAposEvento: context.pu,
      principalAntesEvento,
      principalAposEvento: context.principal,
      valorReais: context.pu * Number(cota.quantidade || 0),
      valorEventoReais: puEvento * Number(cota.quantidade || 0),
      tdk: fixedRate ? rateInfo.fixedDailyRate : rateInfo.dailyRate,
      fatorDiario,
      produtorioFatorDi: context.totalFactor,
      fatorDiAcumulado: context.periodFactor,
      spread: fixedRate ? 0 : Number(cota.percentualIndexador || 1) - 1,
      spreadAcumulado: fixedRate ? 0 : context.totalFactor - context.pureDiFactor,
      fatorJurosAcumulado: fator,
      evento: eventoTs,
      eventoTs,
      efeitoEvento,
      ehDataPagamentoTs: Boolean(eventoTs)
    };
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
      diasUteisPeriodo: Number(startRow?.diasUteisPeriodo || 0)
    };
  }

  function projectCotaUntilDate(cota, startRow, startDateKey, targetDateKey, options = {}) {
    const projectedRows = [];
    const context = createProjectionContext(cota, startRow, startDateKey);
    let cursor = startDateKey;

    while (cursor && cursor < targetDateKey) {
      cursor = addCalendarDays(cursor, 1);
      projectedRows.push(buildProjectedRow(cota, cursor, context, options));
    }

    return { projectedRows, context };
  }

  function buildForecastRowsForCota(cota, startDateKey, days = 220) {
    const startRow = {
      puAtualizado: cota.pu,
      valorNominal: cota.principalResidual,
      diasUteis: cota.acumulacaoFinal?.diasAcumulacao || 0,
      diasUteisPeriodo: cota.acumulacaoFinal?.diasUteisPeriodo ?? cota.acumulacaoFinal?.diasAcumulacao ?? 0,
      produtorioFatorDi: 1
    };
    const context = createProjectionContext(cota, startRow, startDateKey);
    const rows = [];
    let cursor = startDateKey;
    let hasPayment = false;

    for (let index = 0; index < days; index += 1) {
      cursor = addCalendarDays(cursor, 1);
      const row = buildProjectedRow(cota, cursor, context);
      rows.push(row);
      if (row.ehDataPagamentoTs) {
        hasPayment = true;
      }
      if (hasPayment && rows.length >= 30) {
        break;
      }
    }

    return rows;
  }

  function buildHistoricalCota(cota, dateKey) {
    const next = cloneData(cota);
    const rowsToDate = getHistoryRowsToDate(cota, dateKey);
    const row = rowsToDate.find((item) => toIsoDate(item.dataIso || item.data) === dateKey) || rowsToDate[rowsToDate.length - 1] || null;
    const rowDateKey = toIsoDate(row?.dataIso || row?.data);

    next.visaoHistoricaPu = true;
    next.historicoPu = rowsToDate;
    next.eventosAplicados = (next.eventosAplicados || []).filter((event) => {
      const eventDate = toIsoDate(event.data);
      return eventDate && eventDate <= dateKey;
    });

    if (!row) {
      next.pu = 0;
      next.valor = 0;
      next.dataHistoricaDisponivel = false;
      next.dataHistoricaSelecionada = formatIsoDate(dateKey);
      next.acumulacaoFinal = {
        periodoInicio: next.dataInicio || "",
        periodoFim: formatIsoDate(dateKey),
        diasAcumulacao: 0,
        puAntesAcumulacao: next.valorNominalInicial || 0,
        puFinal: 0
      };
      return next;
    }

    let finalRow = row;
    if (rowDateKey && rowDateKey < dateKey) {
      const projection = projectCotaUntilDate(next, row, rowDateKey, dateKey);
      next.historicoPu = [...rowsToDate, ...projection.projectedRows];
      finalRow = projection.projectedRows[projection.projectedRows.length - 1] || row;
      next.visaoCalculadaPu = true;
    }

    next.pu = Number(finalRow.puAtualizado || 0);
    next.valor = Number(finalRow.valorReais || (next.pu * Number(next.quantidade || 0)));
    next.principalResidual = Number(finalRow.valorNominal ?? next.principalResidual ?? 0);
    next.dataHistoricaDisponivel = true;
    next.dataHistoricaSelecionada = finalRow.data || formatIsoDate(dateKey);
    next.dataHistoricaIso = finalRow.dataIso || dateKey;
    next.acumulacaoFinal = {
      periodoInicio: next.dataInicio || next.acumulacaoFinal?.periodoInicio || "",
      periodoFim: finalRow.data || formatIsoDate(dateKey),
      diasAcumulacao: Number(finalRow.diasUteis || finalRow.diasUteisPeriodo || 0),
      diasUteisPeriodo: Number(finalRow.diasUteisPeriodo || finalRow.diasUteis || 0),
      puAntesAcumulacao: Number(next.valorNominalInicial || finalRow.valorNominal || 0),
      puFinal: next.pu
    };
    next.previsaoPu = buildForecastRowsForCota(next, dateKey);
    return next;
  }

  function buildHistoricalSnapshot(snapshot, dateKey) {
    const hasAnyHistory = (snapshot.passivo?.cotas || []).some((cota) => getHistoricalRow(cota, dateKey));
    if (!hasAnyHistory) {
      throw new Error(`Nao existe historico de PU para ${formatIsoDate(dateKey)}.`);
    }

    const historical = cloneData(snapshot);
    const cotas = (snapshot.passivo?.cotas || []).map((cota) => buildHistoricalCota(cota, dateKey));
    const calculatedView = cotas.some((cota) => cota.visaoCalculadaPu);
    const fundingTotal = cotas
      .filter(isSeniorCota)
      .reduce((total, cota) => total + Number(cota.valor || 0), 0);

    historical.metadata = {
      ...historical.metadata,
      reportDate: formatIsoDate(dateKey),
      dateKey,
      historicalView: !calculatedView,
      calculatedView,
      historicalSourceDateKey: snapshot.metadata?.dateKey || "",
      historicalSourceReportDate: snapshot.metadata?.reportDate || ""
    };
    historical.passivo = {
      ...historical.passivo,
      cotas,
      fundingTotal
    };
    return historical;
  }

  async function getBaseSnapshotForHistoricalDate(dateKey) {
    const cra = getCurrentCra();
    const currentDate = cra?.currentDate || cra?.dates?.[0]?.dateKey || "";
    const baseDateKey = toIsoDate(state.baseSnapshot?.metadata?.dateKey || state.baseSnapshot?.metadata?.reportDate);

    if (state.baseSnapshot && baseDateKey && baseDateKey >= dateKey) {
      return state.baseSnapshot;
    }

    const sourceDate = currentDate || state.dateKey;
    const snapshot = await loadSnapshot(state.craId, sourceDate);
    state.baseSnapshot = snapshot;
    return snapshot;
  }

  function getCotaLabel(cota, index) {
    const classe = formatClasseDisplay(cota) || `Cota ${index + 1}`;
    const codigo = cota.ifCodigo ? ` - ${cota.ifCodigo}` : "";
    const tipo = cota.ehFunding ? "funding" : "sub";
    return `${classe}${codigo} (${tipo})`;
  }

  function renderCotaSelector(snapshot) {
    if (snapshot.metadata?.portfolioOverview) {
      state.cotaIndex = 0;
      if (nodes.cotaTabs) {
        nodes.cotaTabs.innerHTML = "";
      }
      return;
    }

    const cotas = snapshot.passivo?.cotas || [];
    const showAllCrasCarteiraSeries = Boolean(snapshot.metadata?.crasCarteiraBatch);
    const visibleCotas = cotas
      .map((cota, index) => ({ cota, index }))
      .filter((item) => {
        if (showAllCrasCarteiraSeries) {
          return Number(item.cota.quantidade || item.cota.quantidadeEmitida || 0) > 0;
        }
        return ["SR1", "SR2", "SR3"].includes(String(item.cota.classe || "").toUpperCase());
      });

    if (!cotas.length) {
      state.cotaIndex = 0;
      if (nodes.cotaTabs) {
        nodes.cotaTabs.innerHTML = "";
      }
      return;
    }

    if (!visibleCotas.some((item) => item.index === state.cotaIndex)) {
      state.cotaIndex = visibleCotas[0]?.index ?? 0;
    }

    if (!nodes.cotaTabs) {
      return;
    }

    nodes.cotaTabs.innerHTML = visibleCotas.map(({ cota, index }) => `
      <button class="cota-tab ${index === state.cotaIndex ? "is-active" : ""}" data-cota-index="${index}" type="button" title="${escapeHtml(formatCotaTabDetail(cota))}">
        <span>${escapeHtml(formatClasseDisplay(cota))}</span>
      </button>
    `).join("");

    nodes.cotaTabs.querySelectorAll("[data-cota-index]").forEach((button) => {
      button.addEventListener("click", () => {
        state.cotaIndex = Number(button.getAttribute("data-cota-index")) || 0;
        renderCotaSelector(snapshot);
        renderPu(snapshot);
      });
    });
  }

  function renderSummary(snapshot) {
    if (snapshot.metadata?.portfolioOverview) {
      const rows = snapshot.portfolioOverview?.rows || [];
      const finalizedRows = rows.filter((row) => computedOverviewStatus(row) === "Finalizado");
      const activeRows = rows.filter((row) => computedOverviewStatus(row) !== "Finalizado" && Number(row.quantidadeIntegralizada || 0) > 0);
      const pendingRows = rows.filter((row) => !["Integralizada", "Finalizado"].includes(computedOverviewStatus(row)));
      const totalValue = rows.reduce((total, row) => total + Number(row.valorAtual || 0), 0);
      const nextMaturity = rows
        .map((row) => toIsoDate(row.dataVencimento))
        .filter(Boolean)
        .filter((dateKey) => dateKey >= state.dateKey)
        .sort()[0];
      const metrics = [
        ["Valor total SR/MEZ", formatCurrency(totalValue)],
        ["Séries ativas", formatNumber(activeRows.length, 0)],
        ["Finalizadas", formatNumber(finalizedRows.length, 0)],
        ["Pendentes/parciais", formatNumber(pendingRows.length, 0)],
        ["Próx. vencimento", nextMaturity ? formatIsoDate(nextMaturity) : "-"]
      ];
      nodes.summaryStrip.innerHTML = metrics.map(([label, value]) => {
        return `
          <article class="metric-card">
            <div class="metric-label">${escapeHtml(label)}</div>
            <strong>${escapeHtml(value)}</strong>
          </article>
        `;
      }).join("");
      return;
    }

    const passivo = snapshot.passivo || {};
    const cotas = passivo.cotas || [];
    const isHistoricalView = Boolean(snapshot.metadata?.historicalView);
    const seniorCotas = cotas.filter(isSeniorCota);
    const seniorCurrentTotal = seniorCotas
      .reduce((total, cota) => total + Number(cota.valor || 0), 0);
    const nextPaymentTotal = seniorCotas
      .reduce((total, cota) => total + Number(getNextPayment(cota)?.valorEventoReais || 0), 0);
    const maturityDate = getSnapshotMaturityDateKey(snapshot);
    const isCrasCarteiraPu = String(snapshot.cra?.id || "").startsWith("cra-carteira-");

    const metrics = [
      ["Valor total Senior", formatCurrency(seniorCurrentTotal)],
      [isCrasCarteiraPu ? "Séries Senior" : "Cotas", formatNumber(isCrasCarteiraPu ? seniorCotas.length : cotas.length, 0)],
      ["Prox. Pag. Senior", formatCurrency(nextPaymentTotal)],
      ["Vencimento CRA", maturityDate ? formatIsoDate(maturityDate) : "-"]
    ];

    if (!isCrasCarteiraPu) {
      metrics.push(
      ["Sub residual", isHistoricalView ? "Nao recalculado" : formatCurrency(passivo.subordinadaTotal)],
      ["PU SUB residual", isHistoricalView ? "Nao recalculado" : formatNumber(passivo.subordinadaPuResidual, 6)]
      );
    }

    nodes.summaryStrip.innerHTML = metrics.map(([label, value]) => `
      <article class="metric-card">
        <div class="metric-label">${escapeHtml(label)}</div>
        <strong>${escapeHtml(value)}</strong>
      </article>
    `).join("");
  }

  function renderEventRows(cota) {
    const events = cota.eventosAplicados || [];
    if (!events.length) {
      return `
        <tr>
          <td colspan="6">Sem evento aplicado ate a data-base.</td>
        </tr>
      `;
    }

    return events.map((event) => `
      <tr>
        <td>${escapeHtml(event.data)}</td>
        <td>${escapeHtml(getPaymentComponent(event))}</td>
        <td>${escapeHtml(formatNumber(event.puEvento, 8))}</td>
        <td>${escapeHtml(formatCurrency(getEventTotalValue(event, cota)))}</td>
        <td>${escapeHtml(formatNumber(event.puAposEvento, 8))}</td>
        <td>${escapeHtml(event.tipoEvento || event.efeito || event.tipoNormalizado || event.tipo || "-")}</td>
      </tr>
    `).join("");
  }

  function renderFinalAccrual(cota) {
    const final = cota.acumulacaoFinal || {};
    return `
      <div class="pu-field-grid pu-field-grid-tight">
        ${field("Periodo final", formatDateRange(final.periodoInicio, final.periodoFim))}
        ${field("Dias finais", formatNumber(final.diasAcumulacao, 0))}
        ${field("PU antes acumulacao final", formatNumber(final.puAntesAcumulacao, 8))}
        ${field("PU final data-base", formatNumber(final.puFinal ?? cota.pu, 8))}
      </div>
    `;
  }

  function renderDailyHistory(cota) {
    const history = cota.historicoPu || [];
    if (!history.length) {
      return `<p class="muted-line">Historico diario ainda nao gerado para esta cota.</p>`;
    }

    const orderedHistory = [...history].sort((a, b) =>
      String(b.dataIso || "").localeCompare(String(a.dataIso || ""))
    );

    return `
      <div class="table-wrap">
        <table class="compact-table">
          <thead>
            <tr>
              <th>Data</th>
              <th>Taxa a.a.</th>
              <th>Data taxa</th>
              <th>DU periodo</th>
              <th>Fator</th>
              <th>Valor nominal</th>
              <th>PU atualizado</th>
              <th>PU juros</th>
              <th>Valor em reais</th>
              <th>TDK</th>
              <th>Fator diario</th>
              <th>Produtorio fator</th>
              <th>Fator acumulado</th>
              <th>Spread</th>
              <th>Spread acumulado</th>
              <th>Fator juros acumulado</th>
              <th>Evento</th>
              <th>PU evento</th>
              <th>Status taxa</th>
              <th>DU total</th>
            </tr>
          </thead>
          <tbody>
            ${orderedHistory.map((row) => `
              <tr class="${row.dataIso === state.dateKey ? "is-selected-date" : ""}">
                <td><strong>${escapeHtml(row.data)}</strong></td>
                <td>${escapeHtml(formatPercent(getAnnualRate(row)))}</td>
                <td>${escapeHtml(row.dataTaxaDi || "-")}</td>
                <td>${escapeHtml(formatNumber(row.diasUteisPeriodo, 0))}</td>
                <td>${escapeHtml(formatNumber(row.fator, 10))}</td>
                <td>${escapeHtml(formatNumber(row.valorNominal, 8))}</td>
                <td>${escapeHtml(formatNumber(row.puAtualizado, 8))}</td>
                <td>${escapeHtml(formatNumber(row.puJuros, 8))}</td>
                <td>${escapeHtml(formatCurrency(row.valorReais))}</td>
                <td>${escapeHtml(formatNumber(row.tdk, 12))}</td>
                <td>${escapeHtml(formatNumber(row.fatorDiario, 12))}</td>
                <td>${escapeHtml(formatNumber(row.produtorioFatorDi, 12))}</td>
                <td>${escapeHtml(formatNumber(row.fatorDiAcumulado, 12))}</td>
                <td>${escapeHtml(formatPercent(row.spread))}</td>
                <td>${escapeHtml(formatNumber(row.spreadAcumulado, 12))}</td>
                <td>${escapeHtml(formatNumber(row.fatorJurosAcumulado, 12))}</td>
                <td>${escapeHtml(row.evento || "-")}</td>
                <td>${escapeHtml(formatNumber(row.puEvento, 8))}</td>
                <td>${escapeHtml(formatDiStatus(row.taxaDiStatus))}</td>
                <td>${escapeHtml(formatNumber(row.diasUteis, 0))}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function getForecastRows(forecast) {
    const rows = [];
    const seen = new Set();
    const add = (row) => {
      const key = row?.dataIso || row?.data;
      if (!key || seen.has(key)) {
        return;
      }
      seen.add(key);
      rows.push(row);
    };

    forecast.slice(0, 5).forEach(add);
    forecast.filter((row) => row.ehDataPagamentoTs).forEach(add);
    return rows.sort((a, b) => String(a.dataIso || "").localeCompare(String(b.dataIso || "")));
  }

  function renderForecast(cotas) {
    const fundingCotas = (cotas || []).filter(isSeniorCota);

    if (!fundingCotas.length) {
      return `<p class="muted-line">Previsao ainda nao gerada para as series senior.</p>`;
    }

    return fundingCotas.map((cota) => {
      const rows = getForecastRows(cota.previsaoPu || []);
      if (!rows.length) {
        return `
          <section class="forecast-class">
            <div class="forecast-class-head">
              <strong>${escapeHtml(formatClasseDisplay(cota))}</strong>
              <span>${escapeHtml(formatNumber(cota.pu, 6))}</span>
            </div>
            <p class="muted-line">Previsao ainda nao calculada para esta serie.</p>
          </section>
        `;
      }

      return `
        <section class="forecast-class">
          <div class="forecast-class-head">
            <strong>${escapeHtml(formatClasseDisplay(cota))}</strong>
            <span>${escapeHtml(formatNumber(cota.pu, 6))}</span>
          </div>
          <div class="table-wrap">
            <table class="compact-table rail-table">
              <thead>
                <tr>
                  <th>Dia</th>
                  <th>Taxa</th>
                  <th>Juros</th>
                  <th>PU</th>
                  <th>Valor</th>
                </tr>
              </thead>
              <tbody>
                ${rows.map((row) => `
                  <tr class="${row.ehDataPagamentoTs ? "is-payment-row" : ""}">
                    <td><strong>${escapeHtml(row.data)}</strong></td>
                    <td>${escapeHtml(formatPercent(getAnnualRate(row)))}</td>
                    <td>${escapeHtml(formatNumber(row.puJuros, 6))}</td>
                    <td>${escapeHtml(formatNumber(row.puAtualizado, 6))}</td>
                    <td>${escapeHtml(formatCurrencyShort(row.valorReais))}</td>
                  </tr>
                  ${row.ehDataPagamentoTs ? `
                    <tr class="payment-note-row">
                      <td colspan="5">${escapeHtml(row.eventoTs || "Pagamento TS")} - ${escapeHtml(formatNumber(row.puEvento, 6))} PU</td>
                    </tr>
                  ` : ""}
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>
      `;
    }).join("");
  }

  function getDefaultSimulationDate(cota) {
    const startDateKey = toIsoDate(cota?.dataHistoricaIso || state.dateKey) || state.dateKey;
    const agendaDate = (cota?.agendaPagamentos || [])
      .map((event) => toIsoDate(event.dataIso || event.data))
      .filter((dateKey) => dateKey && dateKey > startDateKey)
      .sort()[0];

    return agendaDate || addBusinessDays(startDateKey, 5) || startDateKey;
  }

  function getSimulationBaseRow(cota, targetDateKey) {
    const startDateKey = toIsoDate(cota?.dataHistoricaIso || state.dateKey) || state.dateKey;
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
      return startRow;
    }

    const projection = projectCotaUntilDate(cota, startRow, startDateKey, targetDateKey, { ignoreScheduledEvents: true });
    return projection.projectedRows[projection.projectedRows.length - 1] || startRow;
  }

  function getSimulatorConfig(root) {
    const value = (key) => root.querySelector(`[data-sim="${key}"]`)?.value || "";
    const checked = (key) => Boolean(root.querySelector(`[data-sim="${key}"]`)?.checked);

    return {
      dateKey: toIsoDate(value("date")),
      cash: Math.max(0, parseInputNumber(value("cash"))),
      interest: checked("interest"),
      ordinaryAmortization: checked("ordinaryAmortization"),
      amex: checked("amex"),
      rescue: checked("rescue"),
      premium: checked("premium"),
      interestPayPct: clampNumber(parseInputNumber(value("interestPayPct")), 0, 100),
      ordinaryLimitPct: clampNumber(parseInputNumber(value("ordinaryLimitPct")), 0, 100),
      amexLimitPct: clampNumber(parseInputNumber(value("amexLimitPct")), 0, 100),
      premiumPct: Math.max(0, parseInputNumber(value("premiumPct")))
    };
  }

  function simulateEvent(cota, config) {
    const quantity = Number(cota?.quantidade || 0);
    const targetDateKey = config.dateKey || getDefaultSimulationDate(cota);
    const baseRow = getSimulationBaseRow(cota, targetDateKey);
    const puBefore = Number(baseRow.puAtualizado || 0);
    const principalBefore = Number(baseRow.valorNominal ?? cota?.principalResidual ?? 0);
    const interestPu = Math.max(0, puBefore - principalBefore);
    const hasPrincipalEvent = config.ordinaryAmortization || config.amex || config.rescue;
    const handlesInterest = config.interest || hasPrincipalEvent;
    const components = [];

    let cashRemaining = Number(config.cash || 0);
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

    if (config.ordinaryAmortization && quantity > 0 && principal > 0) {
      const limitPu = principal * (Number(config.ordinaryLimitPct || 0) / 100);
      ordinaryPu = Math.min(limitPu, cashRemaining / quantity, principal);
      const value = ordinaryPu * quantity;
      principal = Math.max(0, principal - ordinaryPu);
      cashRemaining = Math.max(0, cashRemaining - value);
      components.push({
        component: "Amortizacao",
        pu: ordinaryPu,
        value,
        detail: "Prevista TS"
      });
    }

    if (config.amex && quantity > 0 && principal > 0) {
      const limitPu = principal * (Number(config.amexLimitPct || 0) / 100);
      amexPu = Math.min(limitPu, cashRemaining / quantity, principal);
      const value = amexPu * quantity;
      principal = Math.max(0, principal - amexPu);
      cashRemaining = Math.max(0, cashRemaining - value);
      components.push({
        component: "AMEX",
        pu: amexPu,
        value,
        detail: "Extraordinaria"
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
          detail: "PU zera"
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
        detail: `${formatPercent(Number(config.premiumPct || 0) / 100)} sobre evento`
      });
    }

    const afDeadline = addBusinessDays(targetDateKey, -5);
    return {
      dateKey: targetDateKey,
      afDeadline,
      baseRow,
      quantity,
      puBefore,
      principalBefore,
      interestPu,
      interestPaidPu,
      interestIncorporatedPu,
      ordinaryPu,
      amexPu,
      rescuePu,
      rescueShortfall,
      puAfter,
      principalAfter: principal,
      valueAfter: principal * quantity,
      cashRemaining,
      components,
      hasExtraordinary: config.amex || config.rescue
    };
  }

  function renderSimulationResult(simulation) {
    const components = simulation.components.length
      ? simulation.components
      : [{ component: "Sem componente", pu: 0, value: 0, detail: "Selecione um evento" }];

    return `
      <div class="sim-result">
        <div class="pu-field-grid pu-field-grid-tight sim-field-grid">
          ${field("Data evento", formatIsoDate(simulation.dateKey))}
          ${field("Enviar AF ate", simulation.afDeadline ? formatIsoDate(simulation.afDeadline) : "-")}
          ${field("PU antes", formatNumber(simulation.puBefore, 8))}
          ${field("Juros acumulado", formatNumber(simulation.interestPu, 8))}
          ${field("PU apos evento", formatNumber(simulation.puAfter, 8))}
          ${field("Saldo pos-evento", formatCurrency(simulation.cashRemaining))}
        </div>
        <div class="table-wrap">
          <table class="compact-table rail-table sim-table">
            <thead>
              <tr>
                <th>Componente</th>
                <th>PU</th>
                <th>Valor</th>
                <th>Detalhe</th>
              </tr>
            </thead>
            <tbody>
              ${components.map((item) => `
                <tr>
                  <td><strong>${escapeHtml(item.component)}</strong></td>
                  <td>${item.pu == null ? "-" : escapeHtml(formatNumber(item.pu, 8))}</td>
                  <td>${escapeHtml(formatCurrency(item.value))}</td>
                  <td>${escapeHtml(item.detail || "-")}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
        <div class="sim-note ${simulation.cashRemaining < 0 ? "is-warning" : ""}">
          ${escapeHtml(simulation.hasExtraordinary ? "Prazo extraordinario: confirmar fluxo especifico do evento." : "Prazo ordinario: referencia de 5 DU antes do evento.")}
        </div>
      </div>
    `;
  }

  function renderEventSimulator(cota) {
    const defaultDate = getDefaultSimulationDate(cota);
    const defaultConfig = {
      dateKey: defaultDate,
      cash: 0,
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
    const simulation = simulateEvent(cota, defaultConfig);

    return `
      <section class="rail-section event-simulator" data-event-simulator>
        <h3 class="subhead">Simulador de evento</h3>
        <div class="sim-control-grid">
          <label>
            <span>Data evento</span>
            <input data-sim="date" type="date" value="${escapeHtml(defaultDate)}">
          </label>
          <label>
            <span>Valor em conta</span>
            <input data-sim="cash" type="text" inputmode="decimal" placeholder="0,00">
          </label>
          <label>
            <span>Juros em caixa (%)</span>
            <input data-sim="interestPayPct" type="number" min="0" max="100" step="0.01" value="100">
          </label>
          <label>
            <span>Amort. limite (%)</span>
            <input data-sim="ordinaryLimitPct" type="number" min="0" max="100" step="0.01" value="100">
          </label>
          <label>
            <span>AMEX limite (%)</span>
            <input data-sim="amexLimitPct" type="number" min="0" max="100" step="0.01" value="100">
          </label>
          <label>
            <span>Premio (%)</span>
            <input data-sim="premiumPct" type="number" min="0" step="0.01" value="0">
          </label>
        </div>
        <div class="sim-check-grid">
          <label><input data-sim="interest" type="checkbox" checked> Juros</label>
          <label><input data-sim="ordinaryAmortization" type="checkbox"> Amortizacao</label>
          <label><input data-sim="amex" type="checkbox"> AMEX</label>
          <label><input data-sim="rescue" type="checkbox"> Resgate total</label>
          <label><input data-sim="premium" type="checkbox"> Premio</label>
        </div>
        <div data-sim-result>
          ${renderSimulationResult(simulation)}
        </div>
      </section>
    `;
  }

  function bindEventSimulator(cota) {
    const root = nodes.puRoot.querySelector("[data-event-simulator]");
    if (!root) {
      return;
    }

    const result = root.querySelector("[data-sim-result]");
    const update = () => {
      result.innerHTML = renderSimulationResult(simulateEvent(cota, getSimulatorConfig(root)));
    };

    root.querySelectorAll("input").forEach((input) => {
      input.addEventListener("input", update);
      input.addEventListener("change", update);
    });
  }

  function buildChartPath(points) {
    return points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`).join(" ");
  }

  function renderPuChart(cota) {
    const history = [...(cota.historicoPu || [])]
      .sort((a, b) => String(a.dataIso || "").localeCompare(String(b.dataIso || "")))
      .slice(-36)
      .map((row) => ({
        data: row.data,
        dataIso: row.dataIso,
        value: Number(row.puAtualizado || 0),
        type: "history",
        payment: false
      }));

    const forecast = (cota.previsaoPu || [])
      .slice(0, 22)
      .map((row) => ({
        data: row.data,
        dataIso: row.dataIso,
        value: Number(row.puAtualizado || 0),
        type: "forecast",
        payment: Boolean(row.ehDataPagamentoTs)
      }));

    const points = [...history, ...forecast].filter((point) => Number.isFinite(point.value));
    if (points.length < 2) {
      return "";
    }

    const width = 760;
    const height = 178;
    const padLeft = 42;
    const padRight = 16;
    const padTop = 14;
    const padBottom = 28;
    const values = points.map((point) => point.value);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const spread = max - min || 1;
    const paddedMin = min - (spread * 0.08);
    const paddedMax = max + (spread * 0.08);
    const range = paddedMax - paddedMin || 1;
    const plotWidth = width - padLeft - padRight;
    const plotHeight = height - padTop - padBottom;
    const xFor = (index) => padLeft + ((plotWidth * index) / Math.max(points.length - 1, 1));
    const yFor = (value) => padTop + (plotHeight * (1 - ((value - paddedMin) / range)));
    const enriched = points.map((point, index) => ({
      ...point,
      x: xFor(index),
      y: yFor(point.value)
    }));
    const historyPoints = enriched.filter((point) => point.type === "history");
    const forecastPoints = enriched.filter((point) => point.type === "forecast");
    const paymentPoints = forecastPoints.filter((point) => point.payment);
    const first = enriched[0];
    const last = enriched[enriched.length - 1];

    return `
      <section class="pu-chart-block">
        <div class="chart-head">
          <h3 class="subhead">PU historico x projetado</h3>
          <div class="chart-legend">
            <span><i class="legend-history"></i>Historico</span>
            <span><i class="legend-forecast"></i>Projecao</span>
          </div>
        </div>
        <svg class="pu-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Grafico de PU historico e projetado">
          <line class="chart-grid" x1="${padLeft}" y1="${padTop}" x2="${padLeft}" y2="${height - padBottom}"></line>
          <line class="chart-grid" x1="${padLeft}" y1="${height - padBottom}" x2="${width - padRight}" y2="${height - padBottom}"></line>
          <text class="chart-axis-label" x="4" y="${padTop + 4}">${escapeHtml(formatNumber(paddedMax, 2))}</text>
          <text class="chart-axis-label" x="4" y="${height - padBottom}">${escapeHtml(formatNumber(paddedMin, 2))}</text>
          <text class="chart-axis-label" x="${padLeft}" y="${height - 8}">${escapeHtml(first.data)}</text>
          <text class="chart-axis-label chart-axis-end" x="${width - padRight}" y="${height - 8}">${escapeHtml(last.data)}</text>
          <path class="chart-line chart-line-history" d="${escapeHtml(buildChartPath(historyPoints))}"></path>
          <path class="chart-line chart-line-forecast" d="${escapeHtml(buildChartPath(forecastPoints))}"></path>
          ${paymentPoints.map((point) => `
            <circle class="chart-payment-dot" cx="${point.x.toFixed(2)}" cy="${point.y.toFixed(2)}" r="4"></circle>
          `).join("")}
        </svg>
      </section>
    `;
  }

  function renderCota(cota, cotas) {
    return `
      <section class="panel section-panel pu-panel">
        <div class="panel-head">
          <div>
            <h2>Série</h2>
          </div>
        </div>

        <div class="pu-field-grid">
          ${field("Classe", formatClasseDisplay(cota))}
          ${field("IF", cota.ifCodigo || "-")}
          ${field("Tipo", formatTipoDisplay(cota))}
          ${field("Data inicial", cota.dataInicio || "-")}
          ${field("Vencimento", formatIsoDate(getCotaMaturityDateKey(cota)))}
          ${field("VNU inicial", formatNumber(cota.valorNominalInicial, 8))}
          ${field("Quantidade", formatNumber(cota.quantidade, 0))}
          ${field("Principal residual", formatNumber(cota.principalResidual, 8))}
          ${field("PU final", formatNumber(cota.pu, 8))}
          ${field("Valor total", formatCurrency(cota.valor))}
          ${field("Remuneracao", formatRemuneracao(cota))}
          ${field("Valor proximo pagamento", formatNextPayment(cota))}
        </div>

        <div class="pu-scroll-region">
          <div class="pu-layout-grid">
            <section class="pu-history-column">
              ${renderPuChart(cota)}
              <h3 class="subhead">Historico diario desde a integralizacao</h3>
              ${renderDailyHistory(cota)}
            </section>

            <aside class="pu-side-rail">
              <section class="rail-section">
                <h3 class="subhead">Simulador de evento</h3>
                <a class="nav-link sim-open-link" href="./simulador-eventos.html">Abrir simulador</a>
              </section>

              <section class="rail-section">
                <h3 class="subhead">Previsao proximos dias</h3>
                ${renderForecast(cotas)}
              </section>

              <section class="rail-section">
                <h3 class="subhead">Eventos realizados</h3>
                <div class="table-wrap">
                  <table class="compact-table rail-table">
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Componente</th>
                        <th>PU evento</th>
                        <th>Valor evento</th>
                        <th>PU apos</th>
                        <th>Detalhe</th>
                      </tr>
                    </thead>
                    <tbody>${renderEventRows(cota)}</tbody>
                  </table>
                </div>
              </section>

              <section class="rail-section">
                <h3 class="subhead">${cota.visaoHistoricaPu ? "Acumulacao ate data-base" : "Acumulacao D-1"}</h3>
                ${renderFinalAccrual(cota)}
              </section>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  function renderPu(snapshot) {
    if (snapshot.metadata?.portfolioOverview) {
      nodes.puRoot.innerHTML = renderPortfolioOverview(snapshot);
      return;
    }

    const cotas = snapshot.passivo?.cotas || [];
    const cota = cotas[state.cotaIndex] || cotas[0];
    nodes.puRoot.innerHTML = cota
      ? renderCota(cota, cotas)
      : `<section class="panel"><strong>Nenhuma cota encontrada.</strong></section>`;
  }

  function computedOverviewStatus(row) {
    const status = String(row.status || "-");
    const quantity = Number(row.quantidadeIntegralizada || 0);
    const remaining = Number(row.quantidadeAIntegralizar || 0);
    const pu = overviewPu(row);
    if (status === "Integralizada" && quantity > 0 && remaining <= 0.0001 && pu != null && Math.abs(pu) <= 0.000001) {
      return "Finalizado";
    }
    return status;
  }

  function renderOverviewStatus(row) {
    const status = computedOverviewStatus(row);
    const tone = status === "Integralizada" || status === "Finalizado"
      ? "ok"
      : status === "Nao integralizada"
        ? "neutral"
        : "warning";
    return `<span class="overview-status" data-tone="${escapeHtml(tone)}">${escapeHtml(status)}</span>`;
  }

  function renderOverviewMaturityAlert(row) {
    const text = row.alertaVencimentoTexto || "-";
    const tone = row.alertaVencimento ? "danger" : "neutral";
    return `<span class="overview-status" data-tone="${escapeHtml(tone)}">${escapeHtml(text)}</span>`;
  }

  function overviewPu(row) {
    const candidates = [row?.puAtual, row?.pu, row?.puFinal, row?.puAtualizado, row?.valorPu];
    for (const candidate of candidates) {
      const number = Number(candidate);
      if (Number.isFinite(number)) {
        return number;
      }
    }
    return null;
  }

  function overviewSerieLabel(row) {
    const raw = String(row?.serie || row?.classe || "").trim();
    const normalized = raw.toUpperCase().replace(/\s+/g, "");
    const labels = {
      SR1: "Senior",
      SENIOR1: "Senior",
      "SENIOR1A": "Senior",
      SR2: "Mezanino A",
      MEZA: "Mezanino A",
      MEZANINOA: "Mezanino A",
      SR3: "Mezanino B",
      MEZB: "Mezanino B",
      MEZANINOB: "Mezanino B"
    };
    return labels[normalized] || raw || "-";
  }

  function overviewRateText(row) {
    if (row?.taxa) {
      return row.taxa;
    }
    if (row?.taxaAaAtual != null) {
      return formatPercent(row.taxaAaAtual);
    }
    return "-";
  }

  function renderOverviewMaturityCell(row) {
    const maturity = row.dataVencimento || "-";
    const alert = row.alertaVencimentoTexto || "";
    return `
      <div class="overview-cell-stack">
        <strong>${escapeHtml(maturity)}</strong>
        ${row.alertaVencimento && alert ? `<small>${escapeHtml(alert)}</small>` : ""}
      </div>
    `;
  }

  function renderPortfolioOverview(snapshot) {
    const rows = snapshot.portfolioOverview?.rows || [];
    const cprfRows = snapshot.portfolioOverview?.cprfEligibility || [];
    const cprfPanel = renderCprfEligibility(cprfRows);
    const resolvedStatuses = new Set(["Integralizada", "Finalizado"]);
    const pendingRows = rows.filter((row) => !resolvedStatuses.has(computedOverviewStatus(row)));
    const pendingInfo = pendingRows.length
      ? `<span>${escapeHtml(formatNumber(pendingRows.length, 0))} séries com integralização pendente/parcial</span>`
      : `<span>Todas as séries cadastradas estão integralizadas/finalizadas</span>`;

    const tableRows = rows.map((row) => `
      <tr>
        <td><strong>${escapeHtml(row.operacao || "-")}</strong></td>
        <td>${escapeHtml(overviewSerieLabel(row))}</td>
        <td title="${escapeHtml(row.ifCodigo || "-")}">${escapeHtml(row.ifCodigo || "-")}</td>
        <td class="numeric"><strong>${overviewPu(row) == null ? "-" : escapeHtml(formatNumber(overviewPu(row), 6))}</strong></td>
        <td class="numeric"><strong>${escapeHtml(formatCurrencyShort(row.valorAtual || 0))}</strong></td>
        <td title="${escapeHtml(overviewRateText(row))}">${escapeHtml(overviewRateText(row))}</td>
        <td>${renderOverviewMaturityCell(row)}</td>
        <td class="numeric">${escapeHtml(formatNumber(row.quantidadeIntegralizada || 0, 0))}</td>
        <td class="numeric">${escapeHtml(formatNumber(row.quantidadeAIntegralizar || 0, 0))}</td>
        <td>${renderOverviewStatus(row)}</td>
      </tr>
    `).join("");

    return `
      <div class="portfolio-overview-layout ${cprfPanel ? "" : "is-single"}">
      <section class="panel portfolio-overview-panel">
        <div class="panel-head">
          <div>
            <span>CRAs Carteira</span>
            <h2>Visão geral das séries</h2>
          </div>
          <div class="panel-meta">
            ${pendingInfo}
          </div>
        </div>
        <div class="table-wrap overview-table-wrap">
          <table class="compact-table overview-table">
            <colgroup>
              <col class="overview-col-operation">
              <col class="overview-col-series">
              <col class="overview-col-if">
              <col class="overview-col-pu">
              <col class="overview-col-value">
              <col class="overview-col-rate">
              <col class="overview-col-maturity">
              <col class="overview-col-qty">
              <col class="overview-col-qty">
              <col class="overview-col-status">
            </colgroup>
            <thead>
              <tr>
                <th>Operação</th>
                <th>Série</th>
                <th>IF</th>
                <th>PU</th>
                <th>Valor atual</th>
                <th>Remuneração</th>
                <th>Vencimento</th>
                <th>Qtd. int.</th>
                <th>A integralizar</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows || `<tr><td colspan="10">Nenhuma série cadastrada.</td></tr>`}
            </tbody>
          </table>
        </div>
      </section>
      ${cprfPanel}
      </div>
    `;
  }

  function renderCprfEligibility(rows) {
    if (!rows.length) {
      return "";
    }

    const relevantRows = rows.filter((row) =>
      row.ofertaAberta
      && Number(row.quantidadeAIntegralizar || 0) > 0
      && (row.aceitaCprf || row.aceitaCprFisicaCdaWa)
    );
    const listRows = relevantRows.map((row) => {
      const tipo = row.aceitaCprf ? "CPR-F" : row.aceitaCprFisicaCdaWa ? "CPR/CDA-WA" : "-";
      const availableValue = row.aceitaCprf ? Number(row.valorDisponivelCprf || 0) : Number(row.valorNominalAIntegralizar || 0);
      const tone = availableValue > 0 ? "ok" : "warning";
      return `
        <article class="cprf-mini-row">
          <div class="cprf-mini-top">
            <strong>${escapeHtml(row.operacao || "-")}</strong>
            <span class="overview-status" data-tone="${escapeHtml(tone)}">${escapeHtml(row.status || "-")}</span>
          </div>
          <div class="cprf-mini-details">
            <span>${escapeHtml(tipo)}</span>
            <span>Venc. ${escapeHtml(row.dataVencimento || "-")}</span>
          </div>
          <div class="cprf-mini-values">
            <span>Vol. ${escapeHtml(formatCurrencyShort(availableValue))}</span>
            <span>Qtd. ${escapeHtml(formatNumber(row.quantidadeAIntegralizar || 0, 0))}</span>
          </div>
        </article>
      `;
    }).join("");

    return `
      <aside class="panel portfolio-cprf-panel">
        <div class="panel-head">
          <div>
            <span>Ativos</span>
            <h2>Elegibilidade</h2>
          </div>
          <div class="panel-meta">
            <span>novas cotas</span>
          </div>
        </div>
        <div class="cprf-mini-list">
          ${listRows || `<p class="muted-line">Sem opera&ccedil;&otilde;es abertas com cotas a integralizar.</p>`}
        </div>
      </aside>
    `;
  }

  function renderSources(snapshot) {
    if (!nodes.sourceList) {
      return;
    }

    const relevant = (snapshot.sources || []).filter((source) => /cotas|eventos|indices|calendario|anbima|pu/i.test(source.name || ""));
    nodes.sourceList.innerHTML = relevant.map((source) => `
      <article class="source-item">
        <strong>${escapeHtml(source.name || "Fonte")}</strong>
        <span>${escapeHtml(source.date || "")}</span>
        <small>${escapeHtml(source.file || "")}</small>
      </article>
    `).join("");
  }

  function renderTimeline() {
    if (!nodes.timeline) {
      return;
    }

    const cra = getCurrentCra();
    nodes.timeline.innerHTML = (cra?.dates || []).map((item) => `
      <button class="timeline-item ${item.dateKey === state.dateKey ? "is-active" : ""}" data-date-key="${escapeHtml(item.dateKey)}" type="button">
        <strong>${escapeHtml(item.reportDate)}</strong>
        <span>${escapeHtml(formatCurrency(item.funding))}</span>
      </button>
    `).join("");

    nodes.timeline.querySelectorAll("[data-date-key]").forEach((button) => {
      button.addEventListener("click", () => {
        selectDate(button.getAttribute("data-date-key"));
      });
    });
  }

  function prepareSnapshotForPu(snapshot) {
    const prepared = cloneData(snapshot);
    const dateKey = toIsoDate(prepared.metadata?.dateKey || prepared.metadata?.reportDate) || state.dateKey;
    const cotas = prepared.passivo?.cotas || [];

    prepared.passivo = prepared.passivo || {};
    prepared.passivo.cotas = cotas.map((cota) => {
      if (!isSeniorCota(cota)) {
        return cota;
      }

      if ((cota.previsaoPu || []).length && getNextPayment(cota)) {
        return cota;
      }

      return {
        ...cota,
        previsaoPu: buildForecastRowsForCota(cota, dateKey)
      };
    });

    return prepared;
  }

  function getHolidaySet(snapshot) {
    const calendar = snapshot?.metadata?.businessCalendar || snapshot?.businessCalendar || {};
    const holidays = Array.isArray(calendar.holidays) ? calendar.holidays : [];
    return new Set(holidays.map(toIsoDate).filter(Boolean));
  }

  function renderSnapshot(snapshot) {
    state.holidayDates = getHolidaySet(snapshot);
    const prepared = prepareSnapshotForPu(snapshot);
    state.snapshot = prepared;
    updateDateInputBounds(prepared);
    renderSummary(prepared);
    renderCotaSelector(prepared);
    renderPu(prepared);
    renderSources(prepared);
    renderTimeline();
    renderDateChips();
    setStatus(
      prepared.metadata?.calculatedView
        ? `PU calculado em ${prepared.metadata?.reportDate || formatIsoDate(state.dateKey)}`
        : prepared.metadata?.historicalView
          ? `PU historico em ${prepared.metadata?.reportDate || formatIsoDate(state.dateKey)}`
          : `Atualizado em ${prepared.metadata?.reportDate || state.dateKey}`,
      "ok"
    );
  }

  async function selectDate(dateKey) {
    const normalizedDate = toIsoDate(dateKey);
    if (!normalizedDate) {
      setStatus("Sem dados", "error");
      return;
    }

    state.dateKey = normalizedDate;
    nodes.dateSelector.value = normalizedDate;
    renderDateChips();
    setStatus("Carregando", "neutral");

    try {
      const entry = getManifestEntry(state.dateKey);
      if (entry) {
        const snapshot = await loadSnapshot(state.craId, state.dateKey);
        state.snapshot = snapshot;
        state.baseSnapshot = snapshot;
        renderSnapshot(snapshot);
        return;
      }

      const cra = getCurrentCra();
      if (isPortfolioOverviewCra(cra)) {
        const nearestEntry = getNearestManifestEntry(state.dateKey);
        const fallbackDate = toIsoDate(nearestEntry?.dateKey);
        if (fallbackDate) {
          state.dateKey = fallbackDate;
          nodes.dateSelector.value = fallbackDate;
          const snapshot = await loadSnapshot(state.craId, fallbackDate);
          state.snapshot = snapshot;
          state.baseSnapshot = snapshot;
          renderSnapshot(snapshot);
          return;
        }
        throw new Error(`Nao existe snapshot de visao geral para ${formatIsoDate(state.dateKey)}.`);
      }

      const baseSnapshot = await getBaseSnapshotForHistoricalDate(state.dateKey);
      const historicalSnapshot = buildHistoricalSnapshot(baseSnapshot, state.dateKey);
      state.snapshot = historicalSnapshot;
      renderSnapshot(historicalSnapshot);
    } catch (error) {
      setStatus("Erro ao carregar", "error");
      nodes.summaryStrip.innerHTML = "";
      nodes.cotaTabs.innerHTML = "";
      nodes.puRoot.innerHTML = `<section class="panel"><strong>${escapeHtml(error.message)}</strong></section>`;
    }
  }

  function selectCra(craId) {
    state.craId = craId;
    state.cotaIndex = 0;
    const cra = getCurrentCra();
    state.dateKey = getDefaultDateKey(cra);
    renderCraSelector();
    renderDateSelector();
    selectDate(state.dateKey);
  }

  async function updatePuFromLocalService() {
    if (!nodes.updatePuButton) {
      return;
    }

    nodes.updatePuButton.disabled = true;
    nodes.updatePuButton.classList.add("is-loading");
    setStatus("Atualizando PU", "neutral");

    try {
      const response = await fetch("http://127.0.0.1:8765/update-pu", {
        method: "POST",
        cache: "no-store"
      });
      const payload = await response.json().catch(() => ({}));
      if (!response.ok || payload.ok === false) {
        throw new Error(payload.error || payload.message || "Falha ao atualizar PU.");
      }
      setStatus("PU atualizado", "ok");
      window.setTimeout(() => {
        window.location.reload();
      }, 900);
    } catch (error) {
      const offline = /fetch|failed|network|load/i.test(String(error?.message || ""));
      setStatus(offline ? "Servico local offline" : "Erro ao atualizar", "error");
      nodes.puRoot.insertAdjacentHTML("afterbegin", `
        <section class="panel service-warning-panel">
          <strong>${escapeHtml(offline ? "Servico local de atualizacao nao esta rodando." : error.message)}</strong>
          <p>${escapeHtml(offline ? "Abra scripts/Iniciar-Atualizador-PU.cmd uma vez e clique em Atualizar PU novamente." : "Veja a janela/log do atualizador local para detalhes.")}</p>
        </section>
      `);
    } finally {
      nodes.updatePuButton.disabled = false;
      nodes.updatePuButton.classList.remove("is-loading");
    }
  }

  function bindEvents() {
    nodes.craSelector.addEventListener("change", (event) => {
      const value = event.target.value;
      if (value.startsWith("group:")) {
        const firstChild = getGroupChildren(value.slice("group:".length))[0];
        if (firstChild) {
          selectCra(firstChild.craId);
        }
        return;
      }
      selectCra(value.replace(/^cra:/, ""));
    });
    nodes.dateSelector.addEventListener("change", (event) => {
      const normalizedDate = normalizeBusinessDateKey(event.target.value, -1);
      if (normalizedDate && normalizedDate !== event.target.value) {
        event.target.value = normalizedDate;
      }
      selectDate(normalizedDate || event.target.value);
    });
    nodes.dateSelector.addEventListener("click", () => {
      if (typeof nodes.dateSelector.showPicker === "function") {
        try {
          nodes.dateSelector.showPicker();
        } catch (error) {
          // O navegador ja abre o calendario nativo quando showPicker nao esta disponivel.
        }
      }
    });
    if (nodes.updatePuButton) {
      nodes.updatePuButton.addEventListener("click", updatePuFromLocalService);
    }
  }

  function refreshCraVisibilityForAccess() {
    const previousCraId = state.craId;
    const cra = getCurrentCra();

    if (cra?.craId && previousCraId !== cra.craId) {
      selectCra(cra.craId);
      return;
    }

    renderCraSelector();
    renderDateSelector();
  }

  function init() {
    if (!craManifest.length) {
      setStatus("Sem dados", "error");
      nodes.puRoot.innerHTML = `<section class="panel"><strong>Nenhum CRA importado.</strong></section>`;
      return;
    }

    bindEvents();
    window.addEventListener("lamina-auth-ready", refreshCraVisibilityForAccess);
    const cra = getCurrentCra();
    state.craId = cra.craId;
    state.dateKey = getDefaultDateKey(cra);
    renderCraSelector();
    renderDateSelector();
    selectDate(state.dateKey);
  }

  init();
}());
