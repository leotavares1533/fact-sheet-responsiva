(function () {
  {
    const craManifest = Array.isArray(window.LAMINA_CRA_MANIFEST) ? window.LAMINA_CRA_MANIFEST : [];

    if (craManifest.length) {
      const state = {
        craId: window.LAMINA_CURRENT_CRA || craManifest[0]?.craId || "",
        dateKey: "",
        snapshot: null
      };

      const nodes = {
        craSelector: document.getElementById("cra-selector"),
        craChildControl: null,
        craChildSelector: null,
        dateSelector: document.getElementById("date-selector"),
        printButton: document.getElementById("print-button"),
        printMeta: document.getElementById("print-meta"),
        statusPill: document.getElementById("status-pill"),
        summaryStrip: document.getElementById("summary-strip"),
        sectionsRoot: document.getElementById("sections-root"),
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

      function formatAllowedLimit(row) {
        if (row?.percentualPermitido === null || row?.percentualPermitido === undefined) {
          return "100%";
        }
        return formatPercent(row.percentualPermitido);
      }

      function concentrationBaseLabel(value) {
        const text = String(value || "").trim();
        if (text === "Valor Total da Emissao") {
          return "Valor Total da Emissão";
        }
        if (text === "Patrimonio liquido") {
          return "Patrimônio líquido";
        }
        return text || "PL atual da data-base";
      }

      function formatSignedPercent(value) {
        if (value === null || value === undefined || Number.isNaN(Number(value))) {
          return "-";
        }
        const number = Number(value);
        const sign = number > 0 ? "+" : "";
        return `${sign}${formatPercent(number)}`;
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

      function formatCurrencyBrief(value) {
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

      function formatDays(value) {
        return `${formatNumber(value, 0)} dias`;
      }

      function signedClass(value) {
        const number = Number(value || 0);
        if (number > 0) return "is-positive";
        if (number < 0) return "is-negative";
        return "";
      }

      function classLabel(classe) {
        const normalized = String(classe || "").toUpperCase();
        if (normalized === "SR1") return "Senior 1a";
        if (normalized === "SR2") return "Senior 2a";
        if (normalized === "SR3") return "Senior 3a";
        if (normalized === "SUB") return "Subordinada";
        return classe || "-";
      }

      function classOrder(classe) {
        return { SR1: 1, SR2: 2, SR3: 3, SUB: 4 }[String(classe || "").toUpperCase()] || 99;
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

      function formatTaxaCarteira(item) {
        const taxaTexto = String(item.taxaTexto || "").trim();
        if (/[a-zA-Z]/.test(taxaTexto)) {
          return taxaTexto;
        }
        return formatPercent(item.taxa);
      }

      function labelize(value) {
        return String(value)
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (char) => char.toUpperCase());
      }

      function normalizeText(value) {
        return String(value || "")
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase();
      }

      function abbreviateName(value, maxLength = 30) {
        const text = String(value || "-").replace(/\s+/g, " ").trim() || "-";
        if (text.length <= maxLength) {
          return text;
        }

        const withoutSuffix = text
          .replace(/\b(S\/A|S\.A\.|SA|LTDA\.?|EIRELI|SPE|ME|EPP)\b/gi, "")
          .replace(/\s+/g, " ")
          .trim();
        if (withoutSuffix && withoutSuffix.length <= maxLength) {
          return withoutSuffix;
        }

        const words = (withoutSuffix || text).split(" ").filter(Boolean);
        const compact = words.map((word, index) => {
          if (index < 2 || word.length <= 3) {
            return word;
          }
          return `${word[0]}.`;
        }).join(" ");

        if (compact.length <= maxLength) {
          return compact;
        }

        return `${compact.slice(0, Math.max(8, maxLength - 1)).trim()}...`;
      }

      function renderNameCell(value, maxLength = 30) {
        const full = String(value || "-").replace(/\s+/g, " ").trim() || "-";
        return `<span class="name-cell" title="${escapeHtml(full)}">${escapeHtml(abbreviateName(full, maxLength))}</span>`;
      }

      function guaranteeLabel(value) {
        const text = String(value || "");
        if (text === "Notas Promissorias") {
          return "Notas Promiss\u00f3rias";
        }
        if (text === "Outros Direitos Creditorios") {
          return "Outros Direitos Creditórios";
        }
        return text || "-";
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

      function getAllMetrics(snapshot) {
        return (snapshot?.sections || []).flatMap((section) => section.metrics || []);
      }

      function summaryCaption(metric) {
        const sourceName = metric?.source?.name || "";
        return sourceName === "Memoria PU" ? "" : sourceName;
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
          throw new Error(`Snapshot não encontrado para ${craId} em ${dateKey}.`);
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
        const children = groupId ? getGroupChildren(groupId).filter((cra) => getLaminaDates(cra).length) : [];

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
        const dates = getLaminaDates(cra);

        if (nodes.dateSelector.tagName === "INPUT") {
          const dateKeys = dates.map((item) => item.dateKey).filter(Boolean).sort();
          nodes.dateSelector.type = "date";
          nodes.dateSelector.min = dateKeys[0] || "";
          nodes.dateSelector.max = dateKeys[dateKeys.length - 1] || "";
          nodes.dateSelector.value = state.dateKey;
          nodes.dateSelector.disabled = !dateKeys.length;
          nodes.dateSelector.title = "Escolha uma data para consultar a lamina importada.";
          return;
        }

        nodes.dateSelector.innerHTML = dates.map((item) => `
          <option value="${escapeHtml(item.dateKey)}">${escapeHtml(item.reportDate)}</option>
        `).join("");
        nodes.dateSelector.value = state.dateKey;
      }

      function getManifestEntry(dateKey) {
        const cra = getCurrentCra();
        return getLaminaDates(cra).find((item) => item.dateKey === dateKey) || null;
      }

      function getAvailableDateKeys() {
        const cra = getCurrentCra();
        return getLaminaDates(cra)
          .map((item) => item.dateKey)
          .filter(Boolean)
          .sort();
      }

      function getLaminaDates(cra) {
        const dates = (cra?.dates || []).filter((item) => item?.dateKey && item?.dataScript);
        if (cra?.groupId !== "cras-carteira") {
          return dates;
        }

        return dates;
      }

      function resolveAvailableDateKey(dateKey) {
        const dates = getAvailableDateKeys();
        if (!dates.length) {
          return "";
        }
        if (dates.includes(dateKey)) {
          return dateKey;
        }
        const previous = [...dates].reverse().find((item) => item <= dateKey);
        return previous || dates[0];
      }

      function formatIsoDate(dateKey) {
        const match = String(dateKey || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!match) {
          return dateKey || "-";
        }
        return `${match[3]}/${match[2]}/${match[1]}`;
      }

      function isSeniorCota(cota) {
        return ["SR1", "SR2", "SR3"].includes(String(cota?.classe || "").toUpperCase());
      }

      function getNextPayment(cota) {
        return (cota?.previsaoPu || []).find((row) => row.ehDataPagamentoTs) || null;
      }

      function getSeniorNextPayment(snapshot) {
        const payments = (snapshot.passivo?.cotas || [])
          .filter(isSeniorCota)
          .map((cota) => getNextPayment(cota))
          .filter(Boolean);

        if (!payments.length) {
          return { valor: 0, data: "", dataIso: "" };
        }

        const firstDate = payments
          .map((payment) => payment.dataIso || "")
          .filter(Boolean)
          .sort()[0] || payments[0].dataIso || "";
        const sameDatePayments = payments.filter((payment) => !firstDate || payment.dataIso === firstDate);
        const valor = sameDatePayments.reduce((sum, payment) => sum + Number(payment.valorEventoReais || 0), 0);

        return {
          valor,
          dataIso: firstDate,
          data: sameDatePayments[0]?.data || formatIsoDate(firstDate)
        };
      }

      function getPaymentCoverage(snapshot) {
        const payment = getSeniorNextPayment(snapshot);
        const caixa = Number(snapshot.caixa?.total ?? snapshot.ativo?.caixa ?? 0);
        return {
          ...payment,
          caixa,
          cobre: payment.valor > 0 ? caixa >= payment.valor : null,
          cobertura: payment.valor > 0 ? caixa / payment.valor : null
        };
      }

      function renderSummary(snapshot) {
        const highlights = getAllMetrics(snapshot).filter((metric) => metric.isHighlight).slice(0, 6);

        nodes.summaryStrip.innerHTML = highlights.map((metric) => `
          <article class="metric-card">
            <div class="metric-label">${escapeHtml(metric.label)}</div>
            <strong>${escapeHtml(metric.value)}</strong>
            <small>${escapeHtml(summaryCaption(metric))}</small>
          </article>
        `).join("");
      }

      function renderBalance(snapshot) {
        const ativo = snapshot.ativo || {};
        const passivo = snapshot.passivo || {};
        const caixa = snapshot.caixa?.accounts || {};
        const carteiraVpBruto = ativo.carteiraVpBruto ?? ativo.carteiraVp;
        const pddTotal = ativo.pddTotal ?? 0;
        const carteiraVpLiquido = ativo.carteiraVpLiquido ?? ativo.carteiraVp;
        const deducoesTotal = passivo.deducoesTotal ?? passivo.despesasTotal ?? 0;
        const despesasOperacionais = passivo.despesasOperacionaisTotal ?? passivo.despesasTotal ?? 0;
        const provisoesTotal = passivo.provisoesTotal ?? caixa.provisoes ?? 0;

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">estrutura</p>
              <h2>Ativo, funding, provisoes e subordinada</h2>
            </div>
            <div class="balance-grid">
              <article>
                <span>Ativo</span>
                <strong>${escapeHtml(formatCurrency(ativo.total))}</strong>
                <small>VP bruto ${escapeHtml(formatCurrency(carteiraVpBruto))} - PDD ${escapeHtml(formatCurrency(pddTotal))} + caixa ${escapeHtml(formatCurrency(ativo.caixa))}</small>
              </article>
              <article>
                <span>Funding</span>
                <strong>${escapeHtml(formatCurrency(passivo.fundingTotal))}</strong>
                <small>SR/MEZ pela memoria de PU</small>
              </article>
              <article>
                <span>Despesas/provisoes</span>
                <strong>${escapeHtml(formatCurrency(deducoesTotal))}</strong>
                <small>Despesas ${escapeHtml(formatCurrency(despesasOperacionais))} + provisões ${escapeHtml(formatCurrency(provisoesTotal))}</small>
              </article>
              <article>
                <span>Subordinada</span>
                <strong>${escapeHtml(formatCurrency(passivo.subordinadaTotal))}</strong>
                <small>Ativo - funding - despesas/provisões | PU residual ${escapeHtml(formatNumber(passivo.subordinadaPuResidual, 6))}</small>
              </article>
            </div>
            <div class="account-grid">
              ${Object.entries(caixa).map(([key, value]) => `
                <div>
                  <span>${escapeHtml(labelize(key))}</span>
                  <strong>${escapeHtml(formatCurrency(value))}</strong>
                </div>
              `).join("")}
            </div>
          </section>
        `;
      }

      function renderMetricSections(snapshot) {
        return (snapshot.sections || []).map((section) => `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">${escapeHtml(section.id)}</p>
              <h2>${escapeHtml(section.label)}</h2>
            </div>
            <div class="metric-table">
              ${(section.metrics || []).map((metric) => `
                <div class="metric-row">
                  <div>
                    <strong>${escapeHtml(metric.label)}</strong>
                    <small>${escapeHtml(metric.source?.name || "")}</small>
                  </div>
                  <div class="metric-row-value">${escapeHtml(metric.value)}</div>
                  <div class="metric-row-source">${escapeHtml(metric.notes || "")}</div>
                </div>
              `).join("")}
            </div>
          </section>
        `).join("");
      }

      function renderFundingTable(snapshot) {
        const cotas = snapshot.passivo?.cotas || [];
        if (!cotas.length) {
          return "";
        }

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">memoria pu</p>
              <h2>Cotas SR, MEZ e SUB</h2>
            </div>
            <div class="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>Classe</th>
                    <th>IF</th>
                    <th>Tipo</th>
                    <th>Quantidade</th>
                    <th>Remuneracao</th>
                    <th>PU</th>
                    <th>Valor</th>
                    <th>Eventos</th>
                    <th>Metodo</th>
                  </tr>
                </thead>
                <tbody>
                  ${cotas.map((cota) => `
                    <tr>
                      <td><strong>${escapeHtml(cota.classe)}</strong></td>
                      <td>${escapeHtml(cota.ifCodigo || "-")}</td>
                      <td>${escapeHtml(cota.tipo)}</td>
                      <td>${escapeHtml(formatNumber(cota.quantidade, 0))}</td>
                      <td>${escapeHtml(formatRemuneracao(cota))}</td>
                      <td>${escapeHtml(formatNumber(cota.pu, 6))}</td>
                      <td>${escapeHtml(formatCurrency(cota.valor))}</td>
                      <td>${escapeHtml(formatNumber((cota.eventosAplicados || []).length, 0))}</td>
                      <td>${escapeHtml(cota.metodo)}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </section>
        `;
      }

      function isCarteiraAtiva(item) {
        const status = normalizeText(item.status);
        const dataLiquidacao = String(item.dataLiquidacao || "").trim();
        const valor = Number(item.valorPresenteLiquido ?? item.valorPresenteDia ?? 0);
        return valor > 0 && !status.includes("liquid") && !dataLiquidacao;
      }

      function buildExposureRanking(carteira, field) {
        const totals = new Map();

        carteira.filter(isCarteiraAtiva).forEach((item) => {
          const name = String(item[field] || "Não informado").trim() || "Não informado";
          const current = totals.get(name) || {
            name,
            quantidade: 0,
            valorPresenteDia: 0,
            pdd: 0,
            valorPresenteLiquido: 0
          };

          const vpBruto = Number(item.valorPresenteDia || 0);
          const pdd = Number(item.pdd || 0);
          const vpLiquido = Number(item.valorPresenteLiquido ?? vpBruto);

          current.quantidade += 1;
          current.valorPresenteDia += vpBruto;
          current.pdd += pdd;
          current.valorPresenteLiquido += vpLiquido;
          totals.set(name, current);
        });

        const totalAtivo = Array.from(totals.values())
          .reduce((sum, item) => sum + item.valorPresenteLiquido, 0);

        return Array.from(totals.values())
          .sort((a, b) => b.valorPresenteLiquido - a.valorPresenteLiquido)
          .slice(0, 20)
          .map((item, index) => ({
            ...item,
            posicao: index + 1,
            participacao: totalAtivo ? item.valorPresenteLiquido / totalAtivo : 0
          }));
      }

      function renderExposureTable(title, ranking) {
        return `
          <div class="ranking-panel fit-table">
            <div class="ranking-title">
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(formatNumber(ranking.length, 0))} linhas</span>
            </div>
            <div class="table-wrap">
              <table class="compact-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Lastros</th>
                    <th>Part.</th>
                    <th>VP bruto</th>
                    <th>PDD</th>
                    <th>VP liquido</th>
                  </tr>
                </thead>
                <tbody>
                  ${ranking.map((item) => `
                    <tr>
                      <td><strong>${escapeHtml(item.posicao)}</strong></td>
                      <td>${renderNameCell(item.name, 28)}</td>
                      <td>${escapeHtml(formatNumber(item.quantidade, 0))}</td>
                      <td>${escapeHtml(formatPercent(item.participacao))}</td>
                      <td>${escapeHtml(formatCurrencyShort(item.valorPresenteDia))}</td>
                      <td>${escapeHtml(formatCurrencyShort(item.pdd))}</td>
                      <td>${escapeHtml(formatCurrencyShort(item.valorPresenteLiquido))}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      function renderInfoCard(label, value, tone) {
        return `
          <article class="info-card ${tone ? `is-${escapeHtml(tone)}` : ""}">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
          </article>
        `;
      }

      function renderComplementaryInfo(snapshot) {
        const info = snapshot.informacoesComplementares || {};
        if (!Object.keys(info).length) {
          return "";
        }

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">complementares</p>
              <h2>Informacoes complementares</h2>
            </div>
            <div class="info-grid">
              ${renderInfoCard("Saldo caixa", formatCurrency(info.saldoCaixa))}
              ${renderInfoCard("Saldo revolvencia", formatCurrency(info.saldoRevolvencia))}
              ${renderInfoCard("Patrimonio liquido", formatCurrency(info.patrimonioLiquido))}
              ${renderInfoCard("Direitos cred. VN", formatCurrency(info.direitosCreditoriosVn))}
              ${renderInfoCard("Direitos cred. VP", formatCurrency(info.direitosCreditoriosVp))}
              ${renderInfoCard("DC em atraso", formatCurrency(info.direitosCreditoriosAtraso))}
              ${renderInfoCard("% DC x patrimônio", formatPercent(info.percentualDireitosCreditoriosPatrimonio))}
              ${renderInfoCard("PDD", formatCurrency(info.pdd))}
            </div>
          </section>
        `;
      }

      function renderTable(title, columns, rows, emptyLabel) {
        return `
          <div class="ranking-panel">
            <div class="ranking-title">
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(formatNumber(rows.length, 0))} linhas</span>
            </div>
            <div class="table-wrap">
              <table class="compact-table">
                <thead>
                  <tr>${columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}</tr>
                </thead>
                <tbody>
                  ${rows.length ? rows.map((row) => `
                    <tr>
                      ${columns.map((column) => `<td>${column.render(row)}</td>`).join("")}
                    </tr>
                  `).join("") : `
                    <tr><td colspan="${escapeHtml(columns.length)}">${escapeHtml(emptyLabel || "Sem dados")}</td></tr>
                  `}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      function renderPortfolioModel(snapshot) {
        const composition = snapshot.composicaoCarteira || [];
        const aging = snapshot.agingList || [];
        if (!composition.length && !aging.length) {
          return "";
        }

        const compositionColumns = [
          { label: "Composição", render: (row) => escapeHtml(row.label) },
          { label: "Valor nominal", render: (row) => escapeHtml(formatCurrency(row.valorNominal)) },
          { label: "Valor presente", render: (row) => escapeHtml(formatCurrency(row.valorPresente)) },
          { label: "Taxa média", render: (row) => escapeHtml(formatPercent(row.taxaMedia)) }
        ];
        const agingColumns = [
          { label: "Status", render: (row) => escapeHtml(row.status) },
          { label: "Valor nominal", render: (row) => escapeHtml(formatCurrency(row.valorNominal)) },
          { label: "Valor presente", render: (row) => escapeHtml(formatCurrency(row.valorPresente)) },
          { label: "% carteira", render: (row) => escapeHtml(formatPercent(row.percentualCarteira)) }
        ];

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">carteira</p>
              <h2>Informacoes de carteira</h2>
            </div>
            <div class="ranking-grid">
              ${renderTable("Composição da carteira", compositionColumns, composition)}
              ${renderTable("Aging list", agingColumns, aging)}
            </div>
          </section>
        `;
      }

      function renderMovementsAndPdd(snapshot) {
        const pddRows = snapshot.pddComposition || [];
        const movements = snapshot.movimentacoesDia || {};
        const acquisitions = movements.aquisicoes || [];
        const liquidations = movements.liquidacoes || [];

        const pddColumns = [
          { label: "Cedente", render: (row) => escapeHtml(row.cedente) },
          { label: "Valor aberto", render: (row) => escapeHtml(formatCurrency(row.valorAberto)) },
          { label: "PDD", render: (row) => escapeHtml(formatCurrency(row.valorPdd)) },
          { label: "Status", render: (row) => escapeHtml(row.status || "-") }
        ];
        const acquisitionColumns = [
          { label: "Cedente", render: (row) => escapeHtml(row.name) },
          { label: "Valor nominal", render: (row) => escapeHtml(formatCurrency(row.valorFace)) },
          { label: "Valor aquisição", render: (row) => escapeHtml(formatCurrency(row.valorAquisicao)) },
          { label: "% PL", render: (row) => escapeHtml(formatPercent(row.percentualPl)) }
        ];
        const liquidationColumns = [
          { label: "Cedente", render: (row) => escapeHtml(row.name) },
          { label: "Valor nominal", render: (row) => escapeHtml(formatCurrency(row.valorFace)) },
          { label: "Valor liquidação", render: (row) => escapeHtml(formatCurrency(row.valorLiquidacao)) },
          { label: "% PL", render: (row) => escapeHtml(formatPercent(row.percentualPl)) }
        ];

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">movimentacoes</p>
              <h2>PDD, aquisições e liquidações</h2>
            </div>
            <div class="model-grid-three">
              ${renderTable("Composição do PDD", pddColumns, pddRows, "Sem PDD")}
              ${renderTable("Aquisições do dia", acquisitionColumns, acquisitions, "Sem aquisições")}
              ${renderTable("Liquidações do dia", liquidationColumns, liquidations, "Sem liquidações")}
            </div>
          </section>
        `;
      }

      function renderConcentrationLimits(snapshot) {
        const limits = snapshot.concentracaoLimites || {};
        const cedentes = limits.cedentes || [];
        const sacados = limits.sacados || [];
        if (!cedentes.length && !sacados.length) {
          return "";
        }

        const columns = [
          { label: "Regra", render: (row) => escapeHtml(row.label) },
          { label: "Permitido", render: (row) => escapeHtml(formatPercent(row.percentualPermitido)) },
          { label: "Posição atual", render: (row) => escapeHtml(formatPercent(row.posicaoAtual)) },
          { label: "Status", render: (row) => `<span class="status-badge ${row.status === "OK" ? "is-ok" : "is-alert"}">${escapeHtml(row.status)}</span>` }
        ];

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">enquadramento</p>
              <h2>Limites de concentração</h2>
            </div>
            <div class="ranking-grid">
              ${renderTable("Cedentes", columns, cedentes)}
              ${renderTable("Sacados", columns, sacados)}
            </div>
          </section>
        `;
      }

      function renderCarteiraRankings(snapshot) {
        const carteira = snapshot.carteira || [];
        const savedRankings = snapshot.rankingCarteira || {};
        const cedentes = (savedRankings.cedentes || []).length
          ? savedRankings.cedentes
          : buildExposureRanking(carteira, "cedente");
        const sacados = (savedRankings.sacados || []).length
          ? savedRankings.sacados
          : buildExposureRanking(carteira, "sacado");
        const ativosCount = Number(savedRankings.lastrosAtivos ?? carteira.filter(isCarteiraAtiva).length);

        if (!carteira.length && !cedentes.length && !sacados.length) {
          return "";
        }

        return `
          <section class="panel section-panel">
            <div class="panel-head">
              <p class="eyebrow">ativo</p>
              <h2>Concentracao da carteira ativa</h2>
              <span class="panel-meta">${escapeHtml(formatNumber(ativosCount, 0))} lastros ativos</span>
            </div>
            <div class="ranking-grid">
              ${renderExposureTable("Top 20 cedentes ativos", cedentes)}
              ${renderExposureTable("Top 20 sacados ativos", sacados)}
            </div>
          </section>
        `;
      }

      function renderStatTile(label, value, detail, tone, extraClass) {
        return `
          <article class="stat-tile ${tone ? `is-${escapeHtml(tone)}` : ""} ${extraClass ? escapeHtml(extraClass) : ""}">
            <span>${escapeHtml(label)}</span>
            <strong>${escapeHtml(value)}</strong>
            ${detail ? `<small>${escapeHtml(detail)}</small>` : ""}
          </article>
        `;
      }

      function renderGenericTable(title, columns, rows, emptyLabel, extraClass) {
        return `
          <div class="table-panel ${extraClass || ""}">
            <div class="table-panel-head">
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(formatNumber(rows.length, 0))} linhas</span>
            </div>
            <div class="table-wrap">
              <table class="compact-table">
                <thead>
                  <tr>${columns.map((column) => `<th>${escapeHtml(column.label)}</th>`).join("")}</tr>
                </thead>
                <tbody>
                  ${rows.length ? rows.map((row) => `
                    <tr>${columns.map((column) => `<td>${column.render(row)}</td>`).join("")}</tr>
                  `).join("") : `
                    <tr><td colspan="${escapeHtml(columns.length)}">${escapeHtml(emptyLabel || "Sem dados")}</td></tr>
                  `}
                </tbody>
              </table>
            </div>
          </div>
        `;
      }

      function renderPerformanceValue(value) {
        return `<span class="${signedClass(value)}">${escapeHtml(formatSignedPercent(value))}</span>`;
      }

      function getCotaByClasse(snapshot, classe) {
        const target = String(classe || "").toUpperCase();
        return (snapshot.passivo?.cotas || []).find((cota) => String(cota.classe || "").toUpperCase() === target) || null;
      }

      function getEventDateKey(event) {
        return event?.dateKey || event?.dataIso || event?.dataReferenciaIso || event?.data || "";
      }

      function getBenchmarkPuAfterPayment(event) {
        const candidates = [
          event?.puDepois,
          event?.puAposEvento,
          event?.principalAposEvento,
          event?.puAtualizado
        ];
        for (const candidate of candidates) {
          const number = Number(candidate);
          if (Number.isFinite(number) && number > 0) {
            return number;
          }
        }
        return null;
      }

      function isPaymentBenchmarkEvent(event) {
        const descriptor = normalizeText([
          event?.tipoNormalizado,
          event?.tipoOriginal,
          event?.tipoEvento,
          event?.evento,
          event?.eventoTs,
          event?.efeito,
          event?.efeitoEvento,
          event?.observacao
        ].filter(Boolean).join(" "));

        if (descriptor.includes("integraliz")) {
          return false;
        }

        if (event?.ehDataPagamentoTs) {
          return true;
        }

        if (/(pagamento|juros|amort|amex|resgate|premio)/.test(descriptor)) {
          return true;
        }

        return Number(event?.valorEventoReais || event?.valorFluxoEstimado || event?.puEvento || 0) > 0;
      }

      function performanceSinceLastPayment(snapshot, row) {
        const currentPu = Number(row?.pu);
        if (!Number.isFinite(currentPu) || currentPu <= 0) {
          return row?.resultadoInicio;
        }

        const cota = getCotaByClasse(snapshot, row?.classe);
        const baseDateKey = snapshot.metadata?.dateKey || state.dateKey || "";
        const events = [];
        const collect = (event) => {
          const dateKey = getEventDateKey(event);
          if (baseDateKey && dateKey && dateKey > baseDateKey) {
            return;
          }
          if (!isPaymentBenchmarkEvent(event)) {
            return;
          }
          const benchmarkPu = getBenchmarkPuAfterPayment(event);
          if (benchmarkPu) {
            events.push({ dateKey, benchmarkPu });
          }
        };

        (cota?.eventosAplicados || []).forEach(collect);
        (cota?.historicoPu || []).forEach(collect);
        (row?.ajustesFluxoSub || []).forEach(collect);
        Object.values(row?.ajustesFluxoPeriodo || {}).flat().forEach(collect);
        (snapshot.rendimento30Dias || []).forEach((historyRow) => {
          const historyCota = historyRow?.cotas?.[row?.classe];
          if (!historyCota) return;
          (historyCota.ajustesFluxoSub || []).forEach(collect);
          Object.values(historyCota.ajustesFluxoPeriodo || {}).flat().forEach(collect);
        });

        const lastEvent = events
          .filter((event) => event.dateKey)
          .sort((a, b) => String(a.dateKey).localeCompare(String(b.dateKey)))
          .at(-1);

        if (!lastEvent) {
          return row?.resultadoInicio;
        }

        return (currentPu / lastEvent.benchmarkPu) - 1;
      }

      function renderCotaPositionTable(snapshot, compactOnly) {
        const rows = (compactOnly ? (snapshot.passivo?.cotas || []) : (snapshot.performanceCotas || []))
          .slice()
          .sort((a, b) => classOrder(a.classe) - classOrder(b.classe));

        const columns = compactOnly ? [
          { label: "Serie", render: (row) => `<strong>${escapeHtml(classLabel(row.classe))}</strong>` },
          { label: "Quantidade", render: (row) => escapeHtml(formatNumber(row.quantidade, 0)) },
          { label: "Taxa", render: (row) => escapeHtml(formatRemuneracao(row)) },
          { label: "PU", render: (row) => escapeHtml(formatNumber(row.pu, 6)) },
          { label: "Valor total", render: (row) => escapeHtml(formatCurrency(row.valor)) }
        ] : [
          { label: "Serie", render: (row) => `<strong>${escapeHtml(row.label || classLabel(row.classe))}</strong>` },
          { label: "Quantidade", render: (row) => escapeHtml(formatNumber(row.quantidade, 0)) },
          { label: "Taxa", render: (row) => escapeHtml(row.taxa || "-") },
          { label: "PU", render: (row) => escapeHtml(formatNumber(row.pu, 6)) },
          { label: "Valor total", render: (row) => escapeHtml(formatCurrency(row.valor)) },
          { label: "Dia", render: (row) => renderPerformanceValue(row.resultadoDia) },
          { label: "Mes", render: (row) => renderPerformanceValue(row.resultadoMes) },
          { label: "30 dias", render: (row) => renderPerformanceValue(row.resultado30Dias) },
          { label: "Desde o ultimo pagamento", render: (row) => renderPerformanceValue(performanceSinceLastPayment(snapshot, row)) }
        ];

        return renderGenericTable(compactOnly ? "Posicao das cotas" : "Resumo consolidado por serie", columns, rows, "Sem cotas");
      }

      function renderGeneralOverview(snapshot) {
        const ativo = snapshot.ativo || {};
        const resumo = snapshot.carteiraResumo || {};
        const caixa = snapshot.caixa || {};
        const cra = getCurrentCra();
        const coverage = getPaymentCoverage(snapshot);
        const coverageTone = coverage.cobre === true ? "ok" : (coverage.cobre === false ? "alert" : "");
        const coverageText = coverage.cobre === true ? "OK" : (coverage.cobre === false ? "Atencao" : "-");
        const coverageDetail = coverage.valor
          ? `Caixa ${formatCurrency(coverage.caixa)} | cobertura ${formatPercent(coverage.cobertura)}`
          : "Sem evento projetado";

        return `
          <section class="panel section-panel report-block">
            <div class="block-title">
              <div>
                <p class="eyebrow">resumo geral</p>
                <h2>${escapeHtml(cra?.name || snapshot.cra?.name || "CRA")} - posição consolidada</h2>
              </div>
              <span class="panel-meta">${escapeHtml(snapshot.metadata?.reportDate || state.dateKey)}</span>
            </div>
            <div class="two-column-layout overview-layout">
              ${renderCotaPositionTable(snapshot, true)}
              <div class="table-panel">
                <div class="table-panel-head">
                  <strong>Dados complementares da posição</strong>
                  <span>${escapeHtml(formatNumber(ativo.lastrosAtivos || ativo.quantidadeLastros, 0))} lastros ativos</span>
                </div>
                <div class="stat-grid stat-grid-two">
                  ${renderStatTile("Valor nominal", formatCurrency(resumo.valorNominal))}
                  ${renderStatTile("Cedentes", formatNumber(resumo.cedentesUnicos || ativo.cedentesUnicos, 0))}
                  ${renderStatTile("Sacados", formatNumber(resumo.sacadosUnicos || ativo.sacadosUnicos, 0))}
                  ${renderStatTile("Prox. pag. Senior", coverage.valor ? formatCurrency(coverage.valor) : "-", coverage.data || "", "primary", "no-break-value")}
                  ${renderStatTile("Farol pagamento", coverageText, coverageDetail, coverageTone)}
                  ${renderStatTile("Prazo médio", formatDays(resumo.prazoMedioDias))}
                  ${renderStatTile("Taxa média", formatPercent(resumo.taxaMediaPonderada))}
                </div>
              </div>
            </div>
          </section>
        `;
      }

      function renderDailyReturns(snapshot) {
        const rows = (snapshot.rendimento30Dias || [])
          .slice()
          .sort((a, b) => String(b.dateKey || "").localeCompare(String(a.dateKey || "")));
        const cotaColumns = [
          { classe: "SR1", label: "Senior 1a" },
          { classe: "SR2", label: "Senior 2a" },
          { classe: "SR3", label: "Senior 3a" },
          { classe: "SUB", label: "Subordinada" }
        ].filter((item) => rows.some((row) => row.cotas?.[item.classe]) ||
          (snapshot.performanceCotas || []).some((cota) => String(cota.classe || "").toUpperCase() === item.classe));
        const seniorClasses = cotaColumns
          .map((item) => item.classe)
          .filter((classe) => ["SR1", "SR2", "SR3"].includes(classe));
        const primarySeniorClass = seniorClasses[0];
        const hasSubordinada = cotaColumns.some((item) => item.classe === "SUB");
        const columns = [
          { label: "Data", render: (row) => `<strong>${escapeHtml(row.reportDate)}</strong>` },
          ...cotaColumns.map((item) => ({
            label: item.label,
            render: (row) => renderPerformanceValue(row.cotas?.[item.classe]?.resultadoDia)
          })),
          ...(hasSubordinada ? [{ label: "Sub acum. mes", render: (row) => renderPerformanceValue(row.cotas?.SUB?.resultadoMes) }] : []),
          ...(primarySeniorClass ? [{ label: "PU SR", render: (row) => escapeHtml(formatNumber(row.cotas?.[primarySeniorClass]?.pu, 6)) }] : []),
          ...(seniorClasses.length ? [{
            label: "PL senior",
            render: (row) => escapeHtml(formatCurrencyShort(seniorClasses.reduce((total, classe) => total + (row.cotas?.[classe]?.valor || 0), 0)))
          }] : []),
          ...(hasSubordinada ? [
            { label: "PU SUB", render: (row) => escapeHtml(formatNumber(row.cotas?.SUB?.pu, 6)) },
            { label: "PL SUB", render: (row) => escapeHtml(formatCurrencyShort(row.cotas?.SUB?.valor)) }
          ] : [])
        ];
        return renderGenericTable("Rentabilidade diária - últimos 30 registros", columns, rows, "Sem histórico diário", "wide-table daily-returns-table");
      }

      function renderPricingChart(rows) {
        const orderedRows = rows
          .filter((row) => row.dateKey && Number(row.puFechamento || 0) > 0)
          .slice()
          .sort((a, b) => String(a.dateKey).localeCompare(String(b.dateKey)));
        const months = Array.from(new Set(orderedRows.map((row) => row.dateKey))).slice(-18);
        const chartRows = orderedRows.filter((row) => months.includes(row.dateKey));
        const series = [
          { classe: "SR1", label: "Senior 1a", className: "chart-line-sr1" },
          { classe: "SR2", label: "Senior 2a", className: "chart-line-sr2" },
          { classe: "SR3", label: "Senior 3a", className: "chart-line-sr3" },
          { classe: "SUB", label: "Subordinada", className: "chart-line-sub" }
        ].map((item) => ({
          ...item,
          rows: chartRows.filter((row) => row.classe === item.classe)
        })).filter((item) => item.rows.length >= 2);

        if (!series.length || months.length < 2) {
          return "";
        }
        const values = series.flatMap((item) => item.rows.map((row) => Number(row.puFechamento || 0)));
        const min = Math.min(...values);
        const max = Math.max(...values);
        const spread = max - min || 1;
        const width = 720;
        const height = 180;
        const leftPad = 54;
        const rightPad = 18;
        const topPad = 14;
        const bottomPad = 34;
        const xForDate = (dateKey) => {
          const index = months.indexOf(dateKey);
          return leftPad + (index * ((width - leftPad - rightPad) / Math.max(months.length - 1, 1)));
        };
        const yForPu = (pu) => height - bottomPad - (((Number(pu || 0) - min) / spread) * (height - topPad - bottomPad));
        const rangeLabel = `${formatIsoDate(months[0])} a ${formatIsoDate(months[months.length - 1])}`;
        const yTicks = [max, min + spread / 2, min].map((value) => ({
          value,
          y: yForPu(value)
        }));
        const xTickIndexes = Array.from(new Set([0, Math.floor((months.length - 1) / 2), months.length - 1]));
        const xTicks = xTickIndexes.map((index) => ({
          dateKey: months[index],
          x: xForDate(months[index])
        }));
        const polylines = series.map((item) => {
          const points = item.rows.map((row) => `${xForDate(row.dateKey).toFixed(1)},${yForPu(row.puFechamento).toFixed(1)}`).join(" ");
          return `<polyline points="${points}" class="chart-line ${item.className}" data-chart-series="${escapeHtml(item.classe)}"></polyline>`;
        }).join("");
        const dots = series.map((item) => item.rows.map((row) => {
          const x = xForDate(row.dateKey);
          const y = yForPu(row.puFechamento);
          return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.7" class="chart-dot ${item.className}-dot" data-chart-series="${escapeHtml(item.classe)}"><title>${escapeHtml(item.label)} | ${escapeHtml(row.mes)} - ${escapeHtml(formatNumber(row.puFechamento, 6))}</title></circle>`;
        }).join("")).join("");
        const legend = series.map((item) => `
          <button class="chart-toggle" type="button" data-chart-toggle="${escapeHtml(item.classe)}" aria-pressed="true">
            <i class="${item.className}"></i>
            <span>${escapeHtml(item.label)}</span>
          </button>
        `).join("");

        return `
          <div class="line-chart-panel">
            <div class="chart-head">
              <div class="table-panel-head">
                <strong>Evolução do PU das cotas</strong>
                <span>${escapeHtml(rangeLabel)}</span>
              </div>
              <div class="chart-legend multi-cota-legend">${legend}</div>
            </div>
            <svg class="line-chart" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução do PU das cotas">
              <line x1="${leftPad}" y1="${height - bottomPad}" x2="${width - rightPad}" y2="${height - bottomPad}" class="chart-grid"></line>
              <line x1="${leftPad}" y1="${topPad}" x2="${leftPad}" y2="${height - bottomPad}" class="chart-grid"></line>
              ${yTicks.map((tick) => `
                <line x1="${leftPad}" y1="${tick.y.toFixed(1)}" x2="${width - rightPad}" y2="${tick.y.toFixed(1)}" class="chart-grid chart-grid-soft"></line>
                <text x="${leftPad - 8}" y="${(tick.y + 3).toFixed(1)}" class="chart-axis-label chart-axis-y">${escapeHtml(formatNumber(tick.value, 2))}</text>
              `).join("")}
              ${xTicks.map((tick) => `
                <text x="${tick.x.toFixed(1)}" y="${height - 10}" class="chart-axis-label chart-axis-x">${escapeHtml(formatIsoDate(tick.dateKey))}</text>
              `).join("")}
              ${polylines}
              ${dots}
            </svg>
          </div>
        `;
      }

      function renderMonthlyPricing(snapshot) {
        const rows = snapshot.precificacaoMensal || [];
        const subRows = rows.filter((row) => row.classe === "SUB");
        const columns = [
          { label: "Mes", render: (row) => `<strong>${escapeHtml(row.mes)}</strong>` },
          { label: "Resultado mensal", render: (row) => renderPerformanceValue(row.resultadoMensal) },
          { label: "CDI período", render: (row) => row.cdiPeriodo === null || row.cdiPeriodo === undefined ? "-" : escapeHtml(formatPercent(row.cdiPeriodo)) },
          { label: "% CDI", render: (row) => row.percentualCdi === null || row.percentualCdi === undefined ? "-" : escapeHtml(formatPercent(row.percentualCdi)) },
          { label: "PU fechamento", render: (row) => escapeHtml(formatNumber(row.puFechamento, 6)) }
        ];
        return `
          <div class="two-column-layout pricing-layout">
            ${renderGenericTable("Histórico mensal da Subordinada", columns, subRows, "Sem histórico mensal")}
            ${renderPricingChart(rows)}
          </div>
        `;
      }

      function renderQuotaAndPricing(snapshot) {
        return `
          <section class="panel section-panel report-block">
            <div class="block-title">
              <div>
                <p class="eyebrow">posição e rentabilidade</p>
                <h2>Cotas e precificação</h2>
              </div>
            </div>
            ${renderCotaPositionTable(snapshot, false)}
            ${renderDailyReturns(snapshot)}
            ${renderMonthlyPricing(snapshot)}
          </section>
        `;
      }

      function renderBarList(title, rows, valueField, percentField) {
        const max = Math.max(...rows.map((row) => Number(row[valueField] || 0)), 1);
        return `
          <div class="table-panel">
            <div class="table-panel-head">
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(formatNumber(rows.length, 0))} itens</span>
            </div>
            <div class="bar-list">
              ${rows.map((row) => {
                const value = Number(row[valueField] || 0);
                const width = Math.max(3, (value / max) * 100);
                return `
                  <div class="bar-row">
                    <div>
                      <strong>${escapeHtml(row.name || row.status || row.label || "-")}</strong>
                      <span>${escapeHtml(formatCurrencyShort(value))} ${percentField ? `| ${formatPercent(row[percentField])}` : ""}</span>
                    </div>
                    <i style="width:${width.toFixed(2)}%"></i>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }

      function pddStatusClass(label) {
        const normalized = pddStatusKey(label);
        if (normalized.includes("emdia")) return "is-current";
        if (normalized.includes("1a30") || normalized.includes("30dias")) return "is-watch";
        if (normalized.includes("31a60") || normalized.includes("60dias")) return "is-attention";
        if (normalized.includes("61a90") || normalized.includes("90dias")) return "is-alert";
        return "is-critical";
      }

      function pddStatusKey(label) {
        return normalizeText(label || "-").replace(/[^a-z0-9]+/g, "");
      }

      function isCurrentPddStatus(label) {
        return pddStatusKey(label).includes("emdia");
      }

      function pddProvisionRateForStatus(label) {
        const key = pddStatusKey(label);
        if (!key || key === "-" || key.includes("emdia")) return 0;
        if (key.includes("1a30") || key.includes("31a60")) return 0.005;
        if (key.includes("61a90")) return 0.3;
        if (key.includes("91a120")) return 0.6;
        if (key.includes("121a150")) return 0.8;
        if (key.includes("151a180") || key.includes("acimade180")) return 1;
        return 0;
      }

      function pddBaseValue(row) {
        return Number(row.valorPddBase ?? row.valorAberto ?? row.valorPresenteBruto ?? row.valorPresenteDia ?? row.valorPresenteLiquido ?? row.valorPresente ?? 0);
      }

      function estimateProjectedPdd(row) {
        const baseValue = pddBaseValue(row);
        const pddAtual = Math.max(0, Number(row.pddAtual ?? row.pdd ?? 0));
        const taxaAtual = baseValue > 0 ? Math.min(1, pddAtual / baseValue) : pddProvisionRateForStatus(row.faixaAtual);
        const taxaProxima = pddProvisionRateForStatus(row.proximaFaixa);
        const pddProjetado = Math.max(pddAtual, baseValue * taxaProxima);
        return {
          pddAtual,
          taxaPddAtual: taxaAtual,
          taxaPddProxima: taxaProxima,
          pddProjetado,
          incrementoPdd: Math.max(0, pddProjetado - pddAtual)
        };
      }

      function normalizePddStressRows(aging, pddRows) {
        const pddByStatus = new Map();
        pddRows.forEach((row) => {
          const label = row.status || row.faixaAtual || "Sem faixa";
          const key = pddStatusKey(label);
          const current = pddByStatus.get(key) || { label, valorPdd: 0, valorAberto: 0 };
          current.valorPdd += Number(row.valorPdd || row.pdd || 0);
          current.valorAberto += Number(row.valorAberto || row.valorPresente || 0);
          pddByStatus.set(key, current);
        });

        const rows = aging.map((row) => {
          const label = row.status || row.label || "-";
          const pdd = pddByStatus.get(pddStatusKey(label));
          return {
            label,
            valorNominal: Number(row.valorNominal || 0),
            valorPresente: Number(row.valorPresente || 0),
            percentualCarteira: Number(row.percentualCarteira || 0),
            valorPdd: Number(pdd?.valorPdd || 0)
          };
        });

        pddByStatus.forEach((row, key) => {
          if (!rows.some((item) => pddStatusKey(item.label) === key)) {
            rows.push({
              label: row.label,
              valorNominal: row.valorAberto,
              valorPresente: row.valorAberto,
              percentualCarteira: 0,
              valorPdd: row.valorPdd
            });
          }
        });

        return rows;
      }

      function renderPddSummary(snapshot, stressRows, rollRows, pddRows) {
        const totalPdd = Number(snapshot.ativo?.pddTotal || pddRows.reduce((sum, row) => sum + Number(row.valorPdd || 0), 0));
        const carteiraVp = Number(snapshot.ativo?.carteiraVpBruto || snapshot.carteiraResumo?.valorPresente || 0);
        const vencidoVp = stressRows
          .filter((row) => !isCurrentPddStatus(row.label))
          .reduce((sum, row) => sum + Number(row.valorPresente || 0), 0);
        const criticalRows = rollRows.filter((row) => Number(row.diasParaMudanca || 0) <= 7).length;
        const pddCedentes = new Set(pddRows.map((row) => normalizeText(row.cedente || row.name || ""))).size;
        const items = [
          { label: "PDD total", value: formatCurrencyShort(totalPdd), detail: carteiraVp ? `${formatPercent(totalPdd / carteiraVp)} da carteira VP` : "-" },
          { label: "VP vencido", value: formatCurrencyShort(vencidoVp), detail: carteiraVp ? `${formatPercent(vencidoVp / carteiraVp)} da carteira VP` : "-" },
          { label: "Rolagens 30 dias", value: formatNumber(rollRows.length, 0), detail: `${formatNumber(criticalRows, 0)} nos proximos 7 dias` },
          { label: "Cedentes com PDD", value: formatNumber(pddCedentes, 0), detail: `${formatNumber(pddRows.length, 0)} linhas de PDD` }
        ];
        return `
          <div class="pdd-summary-grid">
            ${items.map((item) => `
              <article>
                <span>${escapeHtml(item.label)}</span>
                <strong>${escapeHtml(item.value)}</strong>
                <small>${escapeHtml(item.detail)}</small>
              </article>
            `).join("")}
          </div>
        `;
      }

      function normalizePddDailyRows(snapshot) {
        const dateKey = snapshot.metadata?.dateKey || state.dateKey || "";
        const rowsByDate = new Map();
        const addRow = (row) => {
          const rowDateKey = String(row?.dateKey || row?.dataIso || "").slice(0, 10);
          if (!rowDateKey || (dateKey && rowDateKey > dateKey)) {
            return;
          }

          const rawPdd = row?.pddTotal ?? row?.ativo?.pddTotal ?? row?.carteiraResumo?.pddTotal ?? row?.valorPdd ?? row?.pdd;
          if (rawPdd === undefined || rawPdd === null || rawPdd === "") {
            return;
          }

          const pddTotal = Number(rawPdd);
          if (Number.isNaN(pddTotal)) {
            return;
          }

          rowsByDate.set(rowDateKey, {
            dateKey: rowDateKey,
            reportDate: row.reportDate || row.data || formatIsoDate(rowDateKey),
            pddTotal,
            carteiraVp: Number(row.carteiraVp ?? row.carteiraVpLiquido ?? row.carteiraVpBruto ?? row.ativo?.carteiraVp ?? row.ativo?.carteiraVpLiquido ?? row.ativo?.carteiraVpBruto ?? row.carteiraResumo?.valorPresenteLiquido ?? row.carteiraResumo?.valorPresente ?? 0),
            ativoTotal: Number(row.ativoTotal ?? row.totalAtivo ?? row.ativo?.total ?? 0)
          });
        };

        const pddHistory = window.LAMINA_PDD_HISTORY || {};
        const craId = snapshot?.cra?.id || state.craId || getCurrentCra()?.craId || "";
        (Array.isArray(pddHistory[craId]) ? pddHistory[craId] : []).forEach(addRow);
        (snapshot.pddHistorico30Dias || []).forEach(addRow);
        (getCurrentCra()?.dates || []).forEach(addRow);
        addRow({
          dateKey,
          reportDate: snapshot.metadata?.reportDate || formatIsoDate(dateKey),
          pddTotal: snapshot.ativo?.pddTotal ?? snapshot.carteiraResumo?.pddTotal,
          carteiraVp: snapshot.ativo?.carteiraVp ?? snapshot.carteiraResumo?.valorPresenteLiquido,
          carteiraVpBruto: snapshot.ativo?.carteiraVpBruto ?? snapshot.carteiraResumo?.valorPresente,
          ativoTotal: snapshot.ativo?.total
        });

        const rows = Array.from(rowsByDate.values())
          .sort((a, b) => String(a.dateKey).localeCompare(String(b.dateKey)));
        const baseDate = parseDateKeyToDate(dateKey);
        if (!baseDate) {
          return rows.slice(-30);
        }

        const startDate = new Date(baseDate.getTime());
        startDate.setUTCMonth(startDate.getUTCMonth() - 1);
        const monthRows = rows.filter((row) => {
          const rowDate = parseDateKeyToDate(row.dateKey);
          return rowDate && rowDate >= startDate && rowDate <= baseDate;
        });

        return monthRows.length ? monthRows : rows.slice(-30);
      }

      function renderPddStressChart(snapshot) {
        const rows = normalizePddDailyRows(snapshot).filter((row) => Number(row.pddTotal || 0) || row.pddTotal === 0);
        if (!rows.length) {
          return "";
        }
        const max = Math.max(...rows.map((row) => Number(row.pddTotal || 0)), 1);
        const current = rows.at(-1);
        const previous = rows.at(-2);
        const variation = previous ? Number(current.pddTotal || 0) - Number(previous.pddTotal || 0) : 0;
        const maxRow = rows.reduce((highest, row) => Number(row.pddTotal || 0) > Number(highest.pddTotal || 0) ? row : highest, rows[0]);
        const period = rows.length > 1 ? `${rows[0].reportDate} a ${rows.at(-1).reportDate}` : rows[0].reportDate;
        return `
          <div class="pdd-stress-panel pdd-daily-panel">
            <div class="table-panel-head">
              <strong>Estresse de PDD diário</strong>
              <span>Últimos ${escapeHtml(formatNumber(rows.length, 0))} dias</span>
            </div>
            <div class="pdd-daily-metrics">
              <span>Período <strong>${escapeHtml(period)}</strong></span>
              <span>PDD atual <strong>${escapeHtml(formatCurrencyShort(current.pddTotal))}</strong></span>
              <span>Variação D-1 <strong class="${variation > 0 ? "is-negative" : variation < 0 ? "is-positive" : ""}">${escapeHtml(formatCurrencyBrief(variation))}</strong></span>
              <span>Maior ponto <strong>${escapeHtml(formatCurrencyShort(maxRow.pddTotal))}</strong></span>
            </div>
            <div class="pdd-daily-chart">
              ${rows.map((row) => {
                const value = Number(row.pddTotal || 0);
                const barHeight = Math.max(value ? 3 : 0, (value / max) * 100);
                return `
                  <div class="pdd-daily-column" title="${escapeHtml(`${row.reportDate}: ${formatCurrency(value)}`)}">
                    <span class="pdd-daily-value">${escapeHtml(formatCurrencyBrief(value).replace("R$ ", ""))}</span>
                    <div class="pdd-daily-bar">
                      <i style="height:${barHeight.toFixed(2)}%"></i>
                    </div>
                    <strong>${escapeHtml(String(row.reportDate || "").slice(0, 5))}</strong>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }

      function normalizePddWaterfallRows(snapshot, rollRows) {
        const pddRows = snapshot.pddComposition || [];
        const basePdd = Number(snapshot.ativo?.pddTotal ?? snapshot.carteiraResumo?.pddTotal ?? pddRows.reduce((sum, row) => sum + Number(row.valorPdd || 0), 0));
        const grouped = new Map();

        rollRows.forEach((row) => {
          const projection = estimateProjectedPdd(row);
          if (projection.incrementoPdd <= 0) {
            return;
          }
          const dateKey = row.dataRolagemIso || row.dataMudancaIso || "";
          if (!dateKey) {
            return;
          }
          const current = grouped.get(dateKey) || {
            dateKey,
            reportDate: row.dataRolagem || row.dataMudanca || formatIsoDate(dateKey),
            incrementoPdd: 0,
            valorPresente: 0,
            lastros: 0,
            detalhes: []
          };

          current.incrementoPdd += projection.incrementoPdd;
          current.valorPresente += Number(row.valorPresente || 0);
          current.lastros += Number(row.lastros || row.quantidade || 1);
          current.detalhes.push({
            cedente: row.cedente || row.name || "Nao informado",
            faixaAtual: row.faixaAtual || "-",
            proximaFaixa: row.proximaFaixa || "-",
            incrementoPdd: projection.incrementoPdd,
            valorPresente: Number(row.valorPresente || 0)
          });
          grouped.set(dateKey, current);
        });

        const changes = Array.from(grouped.values())
          .sort((a, b) => String(a.dateKey).localeCompare(String(b.dateKey)));
        let cumulative = basePdd;
        const steps = [{
          type: "start",
          label: "PDD atual",
          dateLabel: "Base",
          value: basePdd,
          delta: 0,
          levelStart: 0,
          levelEnd: basePdd,
          lastros: 0
        }];

        changes.forEach((row) => {
          const levelStart = cumulative;
          cumulative += row.incrementoPdd;
          steps.push({
            ...row,
            type: "increase",
            label: row.reportDate,
            dateLabel: String(row.reportDate || "").slice(0, 5),
            value: cumulative,
            delta: row.incrementoPdd,
            levelStart,
            levelEnd: cumulative
          });
        });

        steps.push({
          type: "final",
          label: "PDD projetado",
          dateLabel: "Proj.",
          value: cumulative,
          delta: cumulative - basePdd,
          levelStart: 0,
          levelEnd: cumulative,
          lastros: changes.reduce((sum, row) => sum + Number(row.lastros || 0), 0)
        });

        const detalhes = changes
          .flatMap((row) => row.detalhes.map((detail) => ({
            ...detail,
            reportDate: row.reportDate
          })))
          .sort((a, b) => b.incrementoPdd - a.incrementoPdd)
          .slice(0, 5);

        return {
          basePdd,
          totalIncrease: cumulative - basePdd,
          projectedPdd: cumulative,
          changes,
          steps,
          detalhes
        };
      }

      function renderPddWaterfallProjection(snapshot, rollRows) {
        const projection = normalizePddWaterfallRows(snapshot, rollRows || []);
        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        const period = baseDate ? `${formatIsoDate(dateToKey(addDays(baseDate, 1)))} a ${formatIsoDate(dateToKey(addDays(baseDate, 30)))}` : "Proximos 30 dias";
        const max = Math.max(...projection.steps.map((step) => Number(step.levelEnd || step.value || 0)), 1);
        const hasChanges = projection.changes.length > 0;
        const stepCount = Math.max(projection.steps.length, 1);
        return `
          <div class="pdd-stress-panel pdd-waterfall-panel ${hasChanges ? "" : "is-empty"}">
            <div class="table-panel-head">
              <strong>Projecao waterfall de PDD</strong>
              <span>${escapeHtml(period)}</span>
            </div>
            <div class="pdd-waterfall-metrics">
              <span>PDD atual <strong>${escapeHtml(formatCurrencyShort(projection.basePdd))}</strong></span>
              <span>Aumento projetado <strong>${escapeHtml(formatCurrencyBrief(projection.totalIncrease))}</strong></span>
              <span>PDD projetado <strong>${escapeHtml(formatCurrencyShort(projection.projectedPdd))}</strong></span>
              <span>Mudancas de faixa <strong>${escapeHtml(formatNumber(projection.changes.length, 0))}</strong></span>
            </div>
            <div class="pdd-waterfall-chart" style="--pdd-waterfall-columns:${stepCount}">
              ${hasChanges ? projection.steps.map((step) => {
                const bottom = Math.max(0, (Number(step.levelStart || 0) / max) * 100);
                const height = Math.max(step.levelEnd ? 2 : 0, ((Number(step.levelEnd || 0) - Number(step.levelStart || 0)) / max) * 100);
                const valueLabel = step.type === "increase" ? `+${formatCurrencyBrief(step.delta)}` : formatCurrencyBrief(step.value);
                return `
                  <div class="pdd-waterfall-step is-${escapeHtml(step.type)}" title="${escapeHtml(`${step.label}: ${formatCurrency(step.type === "increase" ? step.delta : step.value)}`)}">
                    <span class="pdd-waterfall-label">${escapeHtml(valueLabel)}</span>
                    <div class="pdd-waterfall-track">
                      <i style="bottom:${bottom.toFixed(2)}%;height:${height.toFixed(2)}%"></i>
                    </div>
                    <strong>${escapeHtml(step.dateLabel || step.label)}</strong>
                    <small>${escapeHtml(step.type === "increase" ? `${formatNumber(step.lastros || 0, 0)} lastros` : step.label)}</small>
                  </div>
                `;
              }).join("") : `<p>Sem mudancas de faixa com aumento de PDD nos proximos 30 dias.</p>`}
            </div>
          </div>
        `;
      }

      function normalizePddRollRows(snapshot) {
        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        const carteira = (snapshot.carteira || []).filter(isCarteiraAtiva);
        if (!baseDate || !carteira.length) {
          return [];
        }

        return carteira
          .map((row) => {
            const dueDate = parseDateKeyToDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso);
            const transition = pddTransition(baseDate, dueDate);
            if (!transition?.dataMudanca) {
              return null;
            }
            const diasParaMudanca = daysBetween(baseDate, transition.dataMudanca);
            if (diasParaMudanca < 0 || diasParaMudanca > 30) {
              return null;
            }
            const valorPresente = rowPortfolioValue(row);
            const valorPddBase = Number(row.valorPresenteDia || row.valorPresente || valorPresente + Number(row.pdd || 0));
            const projection = estimateProjectedPdd({
              valorPddBase,
              valorPresente,
              pddAtual: Number(row.pdd || 0),
              faixaAtual: transition.faixaAtual,
              proximaFaixa: transition.proximaFaixa
            });
            return {
              dataRolagem: formatIsoDate(dateToKey(transition.dataMudanca)),
              dataRolagemIso: dateToKey(transition.dataMudanca),
              cedente: row.cedente || "Nao informado",
              sacado: row.sacado || row.devedor || "Nao informado",
              devedor: debtorName(row),
              valorPresente,
              valorPddBase,
              pddAtual: Number(row.pdd || 0),
              pddProjetado: projection.pddProjetado,
              incrementoPdd: projection.incrementoPdd,
              taxaPddAtual: projection.taxaPddAtual,
              taxaPddProxima: projection.taxaPddProxima,
              diasParaMudanca,
              atraso: transition.diasVencido,
              faixaAtual: transition.faixaAtual,
              proximaFaixa: transition.proximaFaixa,
              tipo: dueDate && dueDate >= baseDate ? "a-vencer" : "vencidos"
            };
          })
          .filter(Boolean)
          .sort((a, b) => (a.diasParaMudanca - b.diasParaMudanca) || (b.valorPresente - a.valorPresente));
      }

      function renderPddRollWindows(title, rows, baseDate, type) {
        const ranges = [
          [1, 9],
          [10, 20],
          [21, 30]
        ];
        return `
          <div class="pdd-roll-section">
            <h3>${escapeHtml(title)}</h3>
            <div class="pdd-window-grid">
              ${ranges.map(([start, end]) => {
                const startDate = dateToKey(addDays(baseDate, start));
                const endDate = dateToKey(addDays(baseDate, end));
                const windowRows = rows
                  .filter((row) => row.tipo === type && row.diasParaMudanca >= start && row.diasParaMudanca <= end)
                  .slice(0, 6);
                return `
                  <div class="pdd-window">
                    <strong>${escapeHtml(formatIsoDate(startDate))} ate ${escapeHtml(formatIsoDate(endDate))}</strong>
                    <table>
                      <thead>
                        <tr>
                          <th>Rolagem</th>
                          <th>Sacado</th>
                          <th>VP risco</th>
                          <th>Atraso</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${windowRows.length ? windowRows.map((row) => `
                          <tr>
                            <td>${escapeHtml(row.dataRolagem)}</td>
                            <td>${renderNameCell(row.sacado || row.devedor, 28)}</td>
                            <td>${escapeHtml(formatCurrencyBrief(row.valorPresente))}</td>
                            <td>${escapeHtml(formatNumber(row.atraso || 0, 0))}</td>
                          </tr>
                        `).join("") : `<tr><td colspan="4">Sem rolagens</td></tr>`}
                      </tbody>
                    </table>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }

      function aggregatePddBy(snapshot, field, fallbackRows) {
        const groups = new Map();
        (snapshot.carteira || []).filter(isCarteiraAtiva).forEach((row) => {
          const pdd = Number(row.pdd || 0);
          if (pdd <= 0) {
            return;
          }
          const name = String(row[field] || row.cedente || row.sacado || row.devedor || "Nao informado").trim() || "Nao informado";
          const key = normalizeText(name).replace(/[^a-z0-9]+/g, "");
          const current = groups.get(key) || { name, pdd: 0, valorPresente: 0, valorNominal: 0, lastros: 0, atraso: 0 };
          current.pdd += pdd;
          current.valorPresente += rowPortfolioValue(row);
          current.valorNominal += rowNominalValue(row);
          current.lastros += 1;
          const dueDate = parseDateKeyToDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso);
          const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
          current.atraso = Math.max(current.atraso, dueDate && baseDate ? Math.max(daysBetween(dueDate, baseDate), 0) : 0);
          groups.set(key, current);
        });

        if (!groups.size && field === "cedente") {
          fallbackRows.forEach((row) => {
            const name = String(row.cedente || row.name || "Nao informado").trim() || "Nao informado";
            groups.set(normalizeText(name), {
              name,
              pdd: Number(row.valorPdd || 0),
              valorPresente: Number(row.valorAberto || 0),
              valorNominal: Number(row.valorAberto || 0),
              lastros: 1,
              atraso: 0
            });
          });
        }

        return Array.from(groups.values())
          .sort((a, b) => b.pdd - a.pdd)
          .slice(0, 7)
          .map((row, index) => ({ ...row, posicao: index + 1 }));
      }

      function renderPddHorizontalRank(title, rows) {
        if (!rows.length) {
          return `<div class="pdd-rank-panel"><strong>${escapeHtml(title)}</strong><p>Sem PDD</p></div>`;
        }
        const max = Math.max(...rows.flatMap((row) => [Number(row.pdd || 0), Number(row.valorNominal || 0)]), 1);
        return `
          <div class="pdd-rank-panel">
            <div class="table-panel-head">
              <strong>${escapeHtml(title)}</strong>
              <span>${escapeHtml(formatNumber(rows.length, 0))} linhas</span>
            </div>
            <div class="pdd-rank-list">
              ${rows.map((row) => {
                const pddWidth = Math.max(2, (Number(row.pdd || 0) / max) * 100);
                const vnWidth = Math.max(2, (Number(row.valorNominal || 0) / max) * 100);
                return `
                  <div class="pdd-rank-row">
                    <span>${renderNameCell(row.name, 34)}</span>
                    <div>
                      <i class="pdd-rank-pdd" style="width:${pddWidth.toFixed(2)}%"></i>
                      <i class="pdd-rank-vp" style="width:${vnWidth.toFixed(2)}%"></i>
                    </div>
                    <small>PDD ${escapeHtml(formatCurrencyBrief(row.pdd))} | VN ${escapeHtml(formatCurrencyBrief(row.valorNominal))} | ${escapeHtml(formatNumber(row.atraso || 0, 0))} dias</small>
                  </div>
                `;
              }).join("")}
            </div>
          </div>
        `;
      }

      function renderPortfolioStats(snapshot) {
        const resumo = snapshot.carteiraResumo || {};
        return `
          <div class="stat-grid stat-grid-eight">
            ${renderStatTile("Valor nominal", formatCurrency(resumo.valorNominal), "", "", "no-break-value")}
            ${renderStatTile("Valor presente", formatCurrency(resumo.valorPresente), "", "", "no-break-value")}
            ${renderStatTile("Cedentes", formatNumber(resumo.cedentesUnicos, 0))}
            ${renderStatTile("Sacados", formatNumber(resumo.sacadosUnicos, 0))}
            ${renderStatTile("Prazo médio", formatDays(resumo.prazoMedioDias))}
            ${renderStatTile("Taxa média", formatPercent(resumo.taxaMediaPonderada))}
            ${renderStatTile("Pre fixado", formatCurrencyShort(resumo.preFixado?.valorPresente))}
            ${renderStatTile("Pos fixado", formatCurrencyShort(resumo.posFixado?.valorPresente))}
          </div>
        `;
      }

      function renderTop10Concentration(snapshot) {
        const detail = snapshot.concentracaoDetalhada || {};
        const columns = [
          { label: "#", render: (row) => escapeHtml(row.posicao) },
          { label: "Nome", render: (row) => renderNameCell(row.name, 28) },
          { label: "Lastros", render: (row) => escapeHtml(formatNumber(row.quantidade, 0)) },
          { label: "VP liquido", render: (row) => escapeHtml(formatCurrencyShort(row.valorPresenteLiquido)) },
          { label: "% base", render: (row) => escapeHtml(formatPercent(row.participacaoPl)) }
        ];
        return `
          <div class="two-column-layout">
            ${renderGenericTable("Concentração Top 10 cedentes", columns, detail.top10Cedentes || [], "Sem cedentes", "fit-table")}
            ${renderGenericTable("Concentração Top 10 sacados", columns, detail.top10Sacados || [], "Sem sacados", "fit-table")}
          </div>
        `;
      }

      function parseDateKeyToDate(value) {
        const match = String(value || "").slice(0, 10).match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (!match) {
          return null;
        }
        return new Date(Date.UTC(Number(match[1]), Number(match[2]) - 1, Number(match[3])));
      }

      function parseAnyDateToDate(value) {
        const text = String(value || "").trim();
        const isoDate = parseDateKeyToDate(text);
        if (isoDate) {
          return isoDate;
        }

        const brMatch = text.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
        if (!brMatch) {
          return null;
        }
        return new Date(Date.UTC(Number(brMatch[3]), Number(brMatch[2]) - 1, Number(brMatch[1])));
      }

      function normalizeLastro(value) {
        return String(value || "").trim();
      }

      function getPmtHistoryRows(snapshot) {
        const history = window.LAMINA_PMT_HISTORY || {};
        const craId = snapshot?.cra?.id || getCurrentCra()?.craId || state.craId || "";
        return [
          ...(Array.isArray(history[craId]) ? history[craId] : []),
          ...(craId === "cra-modelo" && Array.isArray(history["cra-42"]) ? [] : [])
        ];
      }

      function daysBetween(startDate, endDate) {
        if (!startDate || !endDate) {
          return null;
        }
        const dayMs = 24 * 60 * 60 * 1000;
        return Math.round((endDate.getTime() - startDate.getTime()) / dayMs);
      }

      function maturityBucket(days) {
        if (days === null || days === undefined) return { label: "Sem vencimento", order: 99 };
        if (days < 0) return { label: "Vencidos", order: 0 };
        if (days <= 30) return { label: "0 a 30 dias", order: 1 };
        if (days <= 60) return { label: "31 a 60 dias", order: 2 };
        if (days <= 90) return { label: "61 a 90 dias", order: 3 };
        if (days <= 180) return { label: "91 a 180 dias", order: 4 };
        if (days <= 360) return { label: "181 a 360 dias", order: 5 };
        return { label: "Acima de 360 dias", order: 6 };
      }

      function rowPortfolioValue(row) {
        return Number(row.valorPresenteLiquido ?? row.valorPresenteDia ?? row.valorPresente ?? 0);
      }

      function rowNominalValue(row) {
        return Number(row.valorFace ?? row.valorNominal ?? row.valorAquisicao ?? 0);
      }

      function debtorName(row) {
        return String(row.devedor || row.sacado || row.name || "Não informado").trim() || "Não informado";
      }

      function isOverdueReceivable(row, baseDate) {
        const dueDate = parseDateKeyToDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso);
        const status = normalizeText(row.status || row.faixaAtraso || "");
        if (dueDate && baseDate && dueDate < baseDate) {
          return true;
        }
        return Boolean(status && !["emdia", "liquidado", "liquidada"].includes(status));
      }

      function normalizeUpcomingMaturities(snapshot) {
        const saved = snapshot.proximosVencimentos || snapshot.concentracaoDetalhada?.proximosVencimentos || {};
        if ((saved.aging || []).length || (saved.maiores || []).length) {
          return {
            aging: saved.aging || [],
            maiores: saved.maiores || []
          };
        }

        const carteira = (snapshot.carteira || []).filter(isCarteiraAtiva);
        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        if (!carteira.length || !baseDate) {
          return { aging: [], maiores: [] };
        }

        const denominator = Number(snapshot.carteiraResumo?.valorPresenteLiquido ?? snapshot.ativo?.carteiraVpLiquido ?? snapshot.ativo?.carteiraVp ?? 0);
        const agingMap = new Map();
        const maiores = [];

        carteira.forEach((row) => {
          const dueDate = parseDateKeyToDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso);
          const days = daysBetween(baseDate, dueDate);
          const bucket = maturityBucket(days);
          const value = rowPortfolioValue(row);
          const nominal = rowNominalValue(row);
          const current = agingMap.get(bucket.label) || {
            label: bucket.label,
            order: bucket.order,
            quantidade: 0,
            valorNominal: 0,
            valorPresente: 0,
            percentualCarteira: 0
          };

          current.quantidade += 1;
          current.valorNominal += nominal;
          current.valorPresente += value;
          agingMap.set(bucket.label, current);

          if (dueDate && days >= 0 && days <= 30) {
            maiores.push({
              cedente: row.cedente || "Não informado",
              sacado: row.sacado || row.devedor || "Não informado",
              devedor: debtorName(row),
              dataVencimento: formatIsoDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso),
              dataVencimentoIso: row.dataVencimento || row.vencimento || row.dataVencimentoIso,
              dias: days,
              valorNominal: nominal,
              valorPresente: value,
              tipoTitulo: row.tipoTitulo || row.tipo_titulo || "-"
            });
          }
        });

        const aging = Array.from(agingMap.values())
          .map((row) => ({
            ...row,
            percentualCarteira: denominator ? row.valorPresente / denominator : 0
          }))
          .sort((a, b) => a.order - b.order);

        return {
          aging,
          maiores: maiores
            .sort((a, b) => b.valorPresente - a.valorPresente)
            .slice(0, 5)
            .sort((a, b) => (a.dias - b.dias) || (b.valorPresente - a.valorPresente))
            .map((row, index) => ({ ...row, posicao: index + 1 }))
        };
      }

      function topDebtors(snapshot) {
        const detail = snapshot.concentracaoDetalhada || {};
        const saved = detail.top5DevedoresVencidos || detail.devedoresVencidos || [];
        if (saved.length) {
          return saved
            .slice(0, 5)
            .sort((a, b) => Number(b.diasVencido || 0) - Number(a.diasVencido || 0))
            .map((row, index) => ({
              ...row,
              posicao: index + 1,
              name: row.name || row.cedente || row.devedor || row.sacado || "Não informado"
            }));
        }

        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        const carteira = (snapshot.carteira || []).filter((row) => isCarteiraAtiva(row) && isOverdueReceivable(row, baseDate));
        const totals = new Map();
        carteira.forEach((row) => {
          const name = String(row.cedente || "Não informado").trim() || "Não informado";
          const dueDate = parseDateKeyToDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso);
          const diasVencido = dueDate && baseDate ? Math.max(daysBetween(dueDate, baseDate), 0) : 0;
          const current = totals.get(name) || {
            name,
            quantidade: 0,
            valorPresenteDia: 0,
            pdd: 0,
            valorPresenteLiquido: 0,
            diasVencido: 0
          };
          const vpBruto = Number(row.valorPresenteDia || row.valorPresente || 0);
          const pdd = Number(row.pdd || 0);
          const vpLiquido = Number(row.valorPresenteLiquido ?? (vpBruto - pdd));
          current.quantidade += 1;
          current.valorPresenteDia += vpBruto;
          current.pdd += pdd;
          current.valorPresenteLiquido += vpLiquido;
          current.diasVencido = Math.max(current.diasVencido, diasVencido);
          totals.set(name, current);
        });

        const pl = Number(snapshot.ativo?.total || snapshot.ativo?.patrimonioLiquido || snapshot.carteiraResumo?.valorPresenteLiquido || 0);
        return Array.from(totals.values())
          .sort((a, b) => b.valorPresenteLiquido - a.valorPresenteLiquido)
          .slice(0, 5)
          .sort((a, b) => b.diasVencido - a.diasVencido)
          .map((row, index) => ({
            ...row,
            posicao: index + 1,
              participacaoPl: pl ? row.valorPresenteLiquido / pl : 0
          }));
      }

      function addDays(date, days) {
        if (!date) {
          return null;
        }
        const copy = new Date(date.getTime());
        copy.setUTCDate(copy.getUTCDate() + Number(days || 0));
        return copy;
      }

      function dateToKey(date) {
        if (!date || Number.isNaN(date.getTime())) {
          return "";
        }
        return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
      }

      function pddTransition(baseDate, dueDate) {
        if (!baseDate || !dueDate) {
          return null;
        }
        const overdueDays = Math.max(daysBetween(dueDate, baseDate), 0);
        if (dueDate >= baseDate) {
          return { faixaAtual: "Em dia", proximaFaixa: "1 a 30 dias", dataMudanca: addDays(dueDate, 1), diasVencido: overdueDays };
        }
        const buckets = [
          [30, "1 a 30 dias", "31 a 60 dias"],
          [60, "31 a 60 dias", "61 a 90 dias"],
          [90, "61 a 90 dias", "91 a 120 dias"],
          [120, "91 a 120 dias", "121 a 150 dias"],
          [150, "121 a 150 dias", "151 a 180 dias"],
          [180, "151 a 180 dias", "Acima de 180 dias"]
        ];
        const bucket = buckets.find(([limit]) => overdueDays <= limit);
        if (!bucket) {
          return { faixaAtual: "Acima de 180 dias", proximaFaixa: "-", dataMudanca: null, diasVencido: overdueDays };
        }
        return { faixaAtual: bucket[1], proximaFaixa: bucket[2], dataMudanca: addDays(dueDate, bucket[0] + 1), diasVencido: overdueDays };
      }

      function pddFarolClass(value) {
        const normalized = normalizeText(value);
        if (normalized.includes("critic")) return "is-alert";
        if (normalized.includes("atenc")) return "is-param";
        return "is-ok";
      }

      function groupPddMigrationRows(rows, snapshot) {
        const pl = Number(snapshot.ativo?.total || snapshot.ativo?.patrimonioLiquido || snapshot.carteiraResumo?.valorPresenteLiquido || 0);
        const grouped = new Map();

        rows
          .filter((row) => Number(row.diasParaMudanca ?? 99999) >= 0 && Number(row.diasParaMudanca ?? 99999) <= 7)
          .forEach((row) => {
            const cedente = String(row.cedente || row.name || "Nao informado").trim() || "Nao informado";
            const key = normalizeText(cedente).replace(/[^a-z0-9]+/g, "");
            const days = Number(row.diasParaMudanca ?? 99999);
            const value = Number(row.valorPresente || row.valorPresenteLiquido || row.valorPresenteDia || 0);
            const current = grouped.get(key) || {
              cedente,
              sacado: row.sacado || row.devedor || "Nao informado",
              devedor: row.devedor || row.sacado || "Nao informado",
              dataVencimento: row.dataVencimento || formatIsoDate(row.dataVencimentoIso),
              dataVencimentoIso: row.dataVencimentoIso || "",
              faixaAtual: row.faixaAtual || "-",
              proximaFaixa: row.proximaFaixa || "-",
              dataMudanca: row.dataMudanca || formatIsoDate(row.dataMudancaIso),
              dataMudancaIso: row.dataMudancaIso || "",
              diasParaMudanca: days,
              diasVencido: Number(row.diasVencido || 0),
              valorPresente: 0,
              percentualPl: 0,
              farol: row.farol || "Monitorar",
              lastros: 0
            };

            current.lastros += Number(row.lastros || row.quantidade || 1);
            current.valorPresente += value;
            current.diasVencido = Math.max(Number(current.diasVencido || 0), Number(row.diasVencido || 0));
            if (days < Number(current.diasParaMudanca ?? 99999)) {
              current.dataVencimento = row.dataVencimento || formatIsoDate(row.dataVencimentoIso);
              current.dataVencimentoIso = row.dataVencimentoIso || "";
              current.faixaAtual = row.faixaAtual || "-";
              current.proximaFaixa = row.proximaFaixa || "-";
              current.dataMudanca = row.dataMudanca || formatIsoDate(row.dataMudancaIso);
              current.dataMudancaIso = row.dataMudancaIso || "";
              current.diasParaMudanca = days;
            }
            grouped.set(key, current);
          });

        return Array.from(grouped.values())
          .sort((a, b) => (a.diasParaMudanca - b.diasParaMudanca) || (b.valorPresente - a.valorPresente))
          .slice(0, 20)
          .map((row, index) => ({
            ...row,
            posicao: index + 1,
            percentualPl: pl ? row.valorPresente / pl : 0,
            farol: row.diasParaMudanca <= 3 ? "Critico" : (row.diasParaMudanca <= 7 ? "Atencao" : "Monitorar")
          }));
      }

      function normalizePddMigration(snapshot) {
        const saved = snapshot.pddMigration || snapshot.concentracaoDetalhada?.pddMigration || [];
        if (saved.length) {
          return groupPddMigrationRows(saved, snapshot);
        }

        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        const carteira = (snapshot.carteira || []).filter(isCarteiraAtiva);
        if (!baseDate || !carteira.length) {
          return [];
        }

        const rows = carteira
          .map((row) => {
            const dueDate = parseDateKeyToDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso);
            const transition = pddTransition(baseDate, dueDate);
            if (!transition?.dataMudanca) {
              return null;
            }
            const diasParaMudanca = daysBetween(baseDate, transition.dataMudanca);
            if (diasParaMudanca < 0 || diasParaMudanca > 7) {
              return null;
            }
            const valorPresente = rowPortfolioValue(row);
            const farol = diasParaMudanca <= 3 ? "Critico" : (diasParaMudanca <= 7 ? "Atencao" : "Monitorar");
            return {
              cedente: row.cedente || "Nao informado",
              sacado: row.sacado || row.devedor || "Nao informado",
              devedor: debtorName(row),
              dataVencimento: formatIsoDate(row.dataVencimento || row.vencimento || row.dataVencimentoIso),
              dataVencimentoIso: row.dataVencimento || row.vencimento || row.dataVencimentoIso,
              faixaAtual: transition.faixaAtual,
              proximaFaixa: transition.proximaFaixa,
              dataMudanca: formatIsoDate(dateToKey(transition.dataMudanca)),
              dataMudancaIso: dateToKey(transition.dataMudanca),
              diasParaMudanca,
              diasVencido: transition.diasVencido,
              valorPresente,
              farol
            };
          })
          .filter(Boolean);

        return groupPddMigrationRows(rows, snapshot);
      }

      function normalizeOverduePmts(snapshot) {
        const saved = snapshot.pmtsVencidas || snapshot.concentracaoDetalhada?.pmtsVencidas || [];
        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        const pl = Number(snapshot.ativo?.total || snapshot.ativo?.patrimonioLiquido || snapshot.carteiraResumo?.valorPresenteLiquido || 0);
        if (!baseDate) {
          return [];
        }

        const activeRows = (snapshot.carteira || []).filter(isCarteiraAtiva);
        const activeByLastro = new Map();
        activeRows.forEach((row) => {
          [row.numeroUnico, row.numeroNota, row.lastro].forEach((value) => {
            const key = normalizeLastro(value);
            if (key && !activeByLastro.has(key)) {
              activeByLastro.set(key, row);
            }
          });
        });

        const rows = [];
        const seen = new Set();
        const addPmtRow = (input, carteiraRow, requireActiveCarteira) => {
          const lastro = normalizeLastro(input.lastro || input.numeroUnico || input.numeroNota || carteiraRow?.numeroUnico || carteiraRow?.numeroNota);
          if (!lastro) {
            return;
          }
          if (requireActiveCarteira && !carteiraRow) {
            return;
          }

          const dataPmtSource = input.dataPmtIso || input.dataPmt || input.data_pmt || carteiraRow?.dataPmt || carteiraRow?.data_pmt || "";
          const dataPmt = parseAnyDateToDate(dataPmtSource);
          const valorPmt = Number(input.valorPmt ?? input.valor_pmt ?? carteiraRow?.valorPmt ?? carteiraRow?.valor_pmt ?? 0);
          if (!dataPmt || valorPmt <= 0 || dataPmt >= baseDate) {
            return;
          }

          const dataPmtIso = dateToKey(dataPmt);
          const key = `${lastro}|${dataPmtIso}`;
          if (seen.has(key)) {
            return;
          }
          seen.add(key);

          rows.push({
            lastro,
            cedente: carteiraRow?.cedente || input.cedente || "Nao informado",
            tipoTitulo: carteiraRow?.tipoTitulo || input.tipoTitulo || input.tipo_titulo || "-",
            dataPmt: formatIsoDate(dataPmtIso),
            dataPmtIso,
            valorPmt,
            diasVencido: Math.max(daysBetween(dataPmt, baseDate), 0),
            statusPmt: input.statusPmt || input.status_pmt || carteiraRow?.statusPmt || carteiraRow?.status_pmt || "",
            percentualPl: pl ? valorPmt / pl : 0
          });
        };

        saved.forEach((row) => addPmtRow(row, activeByLastro.get(normalizeLastro(row.lastro)), false));
        activeRows.forEach((row) => addPmtRow(row, row, false));
        getPmtHistoryRows(snapshot).forEach((row) => {
          const carteiraRow = activeByLastro.get(normalizeLastro(row.lastro));
          addPmtRow(row, carteiraRow, true);
        });

        return rows
          .sort((a, b) => (b.diasVencido - a.diasVencido) || (b.valorPmt - a.valorPmt))
          .slice(0, 20)
          .map((row, index) => ({ ...row, posicao: index + 1 }));
      }

      function renderUpcomingAndDebtors(snapshot) {
        const upcoming = normalizeUpcomingMaturities(snapshot);
        const debtors = topDebtors(snapshot);
        const pddMigration = normalizePddMigration(snapshot);
        const overduePmts = normalizeOverduePmts(snapshot);
        if (!upcoming.aging.length && !upcoming.maiores.length && !debtors.length && !pddMigration.length && !overduePmts.length) {
          return "";
        }

        const maturityColumns = [
          { label: "#", render: (row) => escapeHtml(row.posicao) },
          { label: "Devedor", render: (row) => renderNameCell(row.devedor || row.sacado || row.name, 52) },
          { label: "Vencimento", render: (row) => escapeHtml(row.dataVencimento || formatIsoDate(row.dataVencimentoIso)) },
          { label: "Dias", render: (row) => escapeHtml(formatNumber(row.dias, 0)) },
          { label: "VP", render: (row) => escapeHtml(formatCurrencyBrief(row.valorPresente)) }
        ];
        const debtorColumns = [
          { label: "#", render: (row) => escapeHtml(row.posicao) },
          { label: "Cedente", render: (row) => renderNameCell(row.name || row.cedente || row.devedor || row.sacado, 48) },
          { label: "Lastros", render: (row) => escapeHtml(formatNumber(row.quantidade, 0)) },
          { label: "Dias venc.", render: (row) => escapeHtml(formatNumber(row.diasVencido || 0, 0)) },
          { label: "VP", render: (row) => escapeHtml(formatCurrencyBrief(row.valorPresenteLiquido ?? row.valorPresenteDia ?? row.valorPresente)) },
          { label: "% PL", render: (row) => escapeHtml(formatPercent(row.participacaoPl ?? row.participacao)) }
        ];
        const pddColumns = [
          { label: "#", render: (row) => escapeHtml(row.posicao) },
          { label: "Cedente", render: (row) => renderNameCell(row.cedente || row.name, 58) },
          { label: "Lastros", render: (row) => escapeHtml(formatNumber(row.lastros || row.quantidade || 0, 0)) },
          { label: "Vencimento", render: (row) => escapeHtml(row.dataVencimento || formatIsoDate(row.dataVencimentoIso)) },
          { label: "Faixa atual", render: (row) => escapeHtml(row.faixaAtual || "-") },
          { label: "Prox. faixa", render: (row) => escapeHtml(row.proximaFaixa || "-") },
          { label: "Muda em", render: (row) => escapeHtml(`${formatNumber(row.diasParaMudanca, 0)} dias`) },
          { label: "VP", render: (row) => escapeHtml(formatCurrencyBrief(row.valorPresente)) },
          { label: "Farol", render: (row) => `<span class="status-badge ${pddFarolClass(row.farol)}">${escapeHtml(row.farol || "-")}</span>` }
        ];
        const pmtColumns = [
          { label: "#", render: (row) => escapeHtml(row.posicao) },
          { label: "Lastro", render: (row) => escapeHtml(row.lastro || "-") },
          { label: "Cedente", render: (row) => renderNameCell(row.cedente || row.name, 52) },
          { label: "Tipo", render: (row) => escapeHtml(row.tipoTitulo || "-") },
          { label: "Data PMT", render: (row) => escapeHtml(row.dataPmt || formatIsoDate(row.dataPmtIso)) },
          { label: "Dias venc.", render: (row) => escapeHtml(formatNumber(row.diasVencido || 0, 0)) },
          { label: "Valor PMT", render: (row) => escapeHtml(formatCurrencyBrief(row.valorPmt)) }
        ];

        return `
          <div class="upcoming-block">
            ${renderBarList("Aging de próximos vencimentos", upcoming.aging, "valorPresente", "percentualCarteira")}
            <div class="two-column-layout upcoming-table-pair">
              ${renderGenericTable("5 maiores vencimentos em 30 dias", maturityColumns, upcoming.maiores, "Sem vencimentos em 30 dias", "fit-table maturity-table")}
              ${renderGenericTable("5 maiores cedentes vencidos", debtorColumns, debtors, "Sem cedentes vencidos", "fit-table overdue-table")}
            </div>
            ${renderGenericTable("Proximas mudancas de faixa PDD - 7 dias", pddColumns, pddMigration, "Sem mudancas proximas", "fit-table pdd-migration-table")}
            ${renderGenericTable("Titulos com PMTs vencidas", pmtColumns, overduePmts, "Sem PMTs vencidas", "fit-table overdue-pmt-table")}
          </div>
        `;
      }

      function renderAgingAndPdd(snapshot) {
        const aging = snapshot.agingList || [];
        const pddRows = snapshot.pddComposition || [];
        const stressRows = normalizePddStressRows(aging, pddRows);
        const rollRows = normalizePddRollRows(snapshot);
        const baseDate = parseDateKeyToDate(snapshot.metadata?.dateKey || state.dateKey);
        const pddBySacado = aggregatePddBy(snapshot, "sacado", pddRows);
        const pddByCedente = aggregatePddBy(snapshot, "cedente", pddRows);
        const agingColumns = [
          { label: "Faixa", render: (row) => escapeHtml(row.status) },
          { label: "VN", render: (row) => escapeHtml(formatCurrencyShort(row.valorNominal)) },
          { label: "VP", render: (row) => escapeHtml(formatCurrencyShort(row.valorPresente)) },
          { label: "% carteira", render: (row) => escapeHtml(formatPercent(row.percentualCarteira)) }
        ];
        const pddColumns = [
          { label: "Cedente", render: (row) => renderNameCell(row.cedente, 30) },
          { label: "Valor aberto", render: (row) => escapeHtml(formatCurrencyShort(row.valorAberto)) },
          { label: "PDD", render: (row) => escapeHtml(formatCurrencyShort(row.valorPdd)) },
          { label: "Status", render: (row) => escapeHtml(row.status || "-") }
        ];
        return `
          <div class="pdd-visual-block">
            ${renderPddSummary(snapshot, stressRows, rollRows, pddRows)}
            ${renderPddStressChart(snapshot)}
            ${renderPddWaterfallProjection(snapshot, rollRows)}
            ${baseDate ? `
              <div class="pdd-roll-grid">
                ${renderPddRollWindows("Vencidos", rollRows, baseDate, "vencidos")}
                ${renderPddRollWindows("A vencer", rollRows, baseDate, "a-vencer")}
              </div>
            ` : ""}
            <div class="two-column-layout pdd-rank-layout">
              ${renderPddHorizontalRank("Maiores PDDs por sacado", pddBySacado)}
              ${renderPddHorizontalRank("Maiores PDDs por cedente", pddByCedente)}
            </div>
            <div class="two-column-layout">
              ${renderGenericTable("Aging list", agingColumns, aging, "Sem aging", "fit-table pdd-aging-table")}
              ${renderGenericTable("Abertura do PDD", pddColumns, pddRows, "Sem PDD", "fit-table pdd-open-table")}
            </div>
          </div>
        `;
      }

      function renderEnquadramento(snapshot) {
        const detail = snapshot.concentracaoDetalhada || {};
        const limits = snapshot.concentracaoLimites || {};
        const plAtual = snapshot.ativo?.total || 0;
        const typeRows = detail.tipoAtivoTs || [];
        const baseRow = typeRows.find((row) => row.denominador) || (limits.cedentes || [])[0] || (limits.sacados || [])[0] || {};
        const baseLabel = concentrationBaseLabel(baseRow.baseCalculo);
        const baseValue = baseRow.denominador || plAtual;
        const typeColumns = [
          { label: "Tipo de Garantia", render: (row) => escapeHtml(guaranteeLabel(row.label)) },
          { label: "Permitido", render: (row) => escapeHtml(formatAllowedLimit(row)) },
          { label: "Atual", render: (row) => escapeHtml(formatPercent(row.percentualPl)) },
          { label: "VP", render: (row) => escapeHtml(formatCurrencyShort(row.valorPresente)) },
          { label: "Status", render: (row) => `<span class="status-badge ${row.status === "OK" ? "is-ok" : "is-param"}">${escapeHtml(row.status)}</span>` }
        ];
        const limitColumns = [
          { label: "Regra", render: (row) => escapeHtml(row.label) },
          { label: "Permitido", render: (row) => escapeHtml(formatPercent(row.percentualPermitido)) },
          { label: "Atual", render: (row) => escapeHtml(formatPercent(row.posicaoAtual)) },
          { label: "Status", render: (row) => `<span class="status-badge ${row.status === "OK" ? "is-ok" : "is-alert"}">${escapeHtml(row.status)}</span>` }
        ];
        return `
          <div class="section-note">Base do enquadramento: ${escapeHtml(baseLabel)} (${escapeHtml(formatCurrency(baseValue))}).</div>
          <div class="two-column-layout">
            ${renderGenericTable("Concentração por tipo de ativo", typeColumns, typeRows, "Sem tipos", "fit-table")}
            <div>
              ${renderGenericTable("Enquadramento por cedente", limitColumns, limits.cedentes || [], "Sem limites", "fit-table")}
              ${renderGenericTable("Enquadramento por sacado", limitColumns, limits.sacados || [], "Sem limites", "fit-table")}
            </div>
          </div>
        `;
      }

      function renderMovementsDetailed(snapshot) {
        const movements = snapshot.movimentacoesDia || {};
        const acquisitions = movements.aquisicoes || [];
        const liquidations = movements.liquidacoes || [];
        const aquisTotal = acquisitions.reduce((sum, row) => sum + Number(row.valorAquisicao || 0), 0);
        const liqTotal = liquidations.reduce((sum, row) => sum + Number(row.valorLiquidacao || 0), 0);
        const acquisitionColumns = [
          { label: "Cedente", render: (row) => renderNameCell(row.name, 28) },
          { label: "Valor nominal", render: (row) => escapeHtml(formatCurrencyShort(row.valorFace)) },
          { label: "Valor aquisição", render: (row) => escapeHtml(formatCurrencyShort(row.valorAquisicao)) },
          { label: "% PL", render: (row) => escapeHtml(formatPercent(row.percentualPl)) }
        ];
        const liquidationColumns = [
          { label: "Cedente", render: (row) => renderNameCell(row.name, 28) },
          { label: "Valor nominal", render: (row) => escapeHtml(formatCurrencyShort(row.valorFace)) },
          { label: "Valor liquidação", render: (row) => escapeHtml(formatCurrencyShort(row.valorLiquidacao)) },
          { label: "% PL", render: (row) => escapeHtml(formatPercent(row.percentualPl)) }
        ];
        return `
          <div class="stat-grid stat-grid-four">
            ${renderStatTile("Aquisições do dia", formatCurrency(aquisTotal), `${formatNumber(acquisitions.length, 0)} cedentes`)}
            ${renderStatTile("Liquidações do dia", formatCurrency(liqTotal), `${formatNumber(liquidations.length, 0)} cedentes`)}
            ${renderStatTile("Maior aquisição", acquisitions[0]?.name || "-", acquisitions[0] ? formatCurrencyShort(acquisitions[0].valorAquisicao) : "")}
            ${renderStatTile("Maior liquidação", liquidations[0]?.name || "-", liquidations[0] ? formatCurrencyShort(liquidations[0].valorLiquidacao) : "")}
          </div>
          <div class="two-column-layout">
            ${renderGenericTable("Abertura das aquisições", acquisitionColumns, acquisitions, "Sem aquisições", "fit-table")}
            ${renderGenericTable("Abertura das liquidações", liquidationColumns, liquidations, "Sem liquidações", "fit-table")}
          </div>
        `;
      }

      function renderPortfolioDetailed(snapshot) {
        return `
          <section class="panel section-panel report-block">
            <div class="block-title">
              <div>
                <p class="eyebrow">carteira</p>
                <h2>Abertura detalhada da carteira</h2>
              </div>
            </div>
            ${renderPortfolioStats(snapshot)}
            ${renderTop10Concentration(snapshot)}
            ${renderUpcomingAndDebtors(snapshot)}
            ${renderAgingAndPdd(snapshot)}
            ${renderEnquadramento(snapshot)}
            ${renderMovementsDetailed(snapshot)}
          </section>
        `;
      }

      function renderCrasCarteiraOverview(snapshot) {
        const overview = snapshot.portfolioOverview || {};
        const assetRows = overview.assetRows || [];
        const seriesRows = overview.rows || [];
        const historyRows = overview.subHistory || [];
        const totals = snapshot.ativo || {};
        const passivo = snapshot.passivo || {};
        const resumo = snapshot.carteiraResumo || {};
        const assetColumns = [
          { label: "CRA", render: (row) => `<strong>${escapeHtml(row.operacao || row.craId || "-")}</strong>` },
          { label: "Carteira VP", render: (row) => escapeHtml(formatCurrencyShort(row.carteiraVp)) },
          { label: "Caixa", render: (row) => escapeHtml(formatCurrencyShort(row.caixa)) },
          { label: "Cessao rend.", render: (row) => escapeHtml(formatCurrencyShort(row.cessaoRendimentosDia)) },
          { label: "Ativo", render: (row) => escapeHtml(formatCurrencyShort(row.ativoTotal)) },
          { label: "Funding", render: (row) => escapeHtml(formatCurrencyShort(row.funding)) },
          { label: "Sub", render: (row) => escapeHtml(formatCurrencyShort(row.subordinada)) },
          { label: "PU Sub", render: (row) => escapeHtml(formatNumber(row.puSub, 6)) },
          { label: "Dia Sub", render: (row) => renderPerformanceValue(row.rendimentoSubDia) },
          { label: "PDD", render: (row) => escapeHtml(formatCurrencyShort(row.pdd)) },
          { label: "Lastros", render: (row) => escapeHtml(formatNumber(row.lastrosAtivos, 0)) },
          { label: "Taxa media", render: (row) => escapeHtml(formatPercent(row.taxaMedia)) }
        ];
        const seriesColumns = [
          { label: "CRA", render: (row) => `<strong>${escapeHtml(row.operacao || row.craId || "-")}</strong>` },
          { label: "Serie", render: (row) => escapeHtml(row.serie || classLabel(row.classe)) },
          { label: "Codigo IF", render: (row) => escapeHtml(row.ifCodigo || "-") },
          { label: "Quantidade", render: (row) => escapeHtml(formatNumber(row.quantidadeIntegralizada, 0)) },
          { label: "PU", render: (row) => escapeHtml(formatNumber(row.puAtual, 6)) },
          { label: "Valor", render: (row) => escapeHtml(formatCurrencyShort(row.valorAtual)) },
          { label: "Taxa", render: (row) => escapeHtml(row.taxa || "-") },
          { label: "Vencimento", render: (row) => escapeHtml(row.dataVencimento || formatIsoDate(row.dataVencimentoIso)) },
          { label: "Status", render: (row) => escapeHtml(row.status || "-") }
        ];
        const historyColumns = [
          { label: "Data", render: (row) => `<strong>${escapeHtml(row.reportDate || formatIsoDate(row.dateKey))}</strong>` },
          { label: "Caixa total", render: (row) => escapeHtml(formatCurrencyShort(row.caixaTotal)) },
          { label: "Cessao rend.", render: (row) => escapeHtml(formatCurrencyShort(row.cessaoRendimentosDia)) },
          { label: "Subordinadas", render: (row) => escapeHtml(formatCurrencyShort(row.subordinadaTotal)) },
          { label: "Dia Sub", render: (row) => renderPerformanceValue(row.rendimentoSubDia) }
        ];

        return `
          <section class="panel section-panel report-block">
            <div class="block-title">
              <div>
                <p class="eyebrow">cras carteira</p>
                <h2>Visao geral consolidada</h2>
              </div>
              <span class="panel-meta">${escapeHtml(snapshot.metadata?.reportDate || state.dateKey)}</span>
            </div>
            <div class="stat-grid stat-grid-eight">
              ${renderStatTile("Ativo total", formatCurrency(totals.total), "Carteira + caixa", "primary", "no-break-value")}
              ${renderStatTile("Carteira VP liquida", formatCurrency(totals.carteiraVpLiquido), "", "", "no-break-value")}
              ${renderStatTile("Caixa total", formatCurrency(totals.caixa), "", "", "no-break-value")}
              ${renderStatTile("Cessao rend.", formatCurrency(snapshot.caixa?.cessaoRendimentosDia), "Rendimento do dia", "", "no-break-value")}
              ${renderStatTile("Funding SR/MEZ", formatCurrency(passivo.fundingTotal), "", "", "no-break-value")}
              ${renderStatTile("Subordinadas", formatCurrency(passivo.subordinadaTotal), "Residual consolidado", "", "no-break-value")}
              ${renderStatTile("PDD", formatCurrency(totals.pddTotal), "", "", "no-break-value")}
              ${renderStatTile("Valor nominal", formatCurrency(resumo.valorNominal), "", "", "no-break-value")}
              ${renderStatTile("Taxa media", formatPercent(resumo.taxaMediaPonderada))}
            </div>
          </section>
          <section class="panel section-panel report-block">
            <div class="block-title">
              <div>
                <p class="eyebrow">posicao por operacao</p>
                <h2>Carteira, caixa e subordinada por CRA</h2>
              </div>
            </div>
            ${renderGenericTable("Resumo individual dos CRAs Carteira", assetColumns, assetRows, "Sem carteira/caixa importado", "wide-table fit-table")}
            ${renderGenericTable("Series de funding cadastradas", seriesColumns, seriesRows, "Sem series cadastradas", "wide-table fit-table")}
            ${renderGenericTable("Historico consolidado de caixa e subordinada", historyColumns, historyRows, "Sem historico consolidado", "fit-table")}
          </section>
        `;
      }

      function renderSections(snapshot) {
        if (snapshot.metadata?.portfolioOverview) {
          nodes.sectionsRoot.innerHTML = renderCrasCarteiraOverview(snapshot);
          return;
        }

        nodes.sectionsRoot.innerHTML = [
          renderGeneralOverview(snapshot),
          renderQuotaAndPricing(snapshot),
          renderPortfolioDetailed(snapshot)
        ].join("");
        bindChartFilters();
      }

      function bindChartFilters() {
        if (!nodes.sectionsRoot?.querySelectorAll) {
          return;
        }

        nodes.sectionsRoot.querySelectorAll("[data-chart-toggle]").forEach((button) => {
          button.addEventListener("click", () => {
            const chart = button.closest(".line-chart-panel");
            if (!chart) {
              return;
            }

            const series = button.getAttribute("data-chart-toggle");
            const willHide = !button.classList.contains("is-muted");
            const activeButtons = Array.from(chart.querySelectorAll("[data-chart-toggle]"))
              .filter((item) => item !== button && !item.classList.contains("is-muted"));
            if (willHide && !activeButtons.length) {
              return;
            }

            button.classList.toggle("is-muted", willHide);
            button.setAttribute("aria-pressed", willHide ? "false" : "true");
            chart.querySelectorAll(`[data-chart-series="${series}"]`).forEach((item) => {
              item.classList.toggle("is-muted", willHide);
            });
          });
        });
      }

      function renderSources(snapshot) {
        if (!nodes.sourceList) {
          return;
        }

        nodes.sourceList.innerHTML = (snapshot.sources || []).map((source) => `
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
        nodes.timeline.innerHTML = getLaminaDates(cra).map((item) => `
          <button class="timeline-item ${item.dateKey === state.dateKey ? "is-active" : ""}" data-date-key="${escapeHtml(item.dateKey)}" type="button">
            <strong>${escapeHtml(item.reportDate)}</strong>
            <span>${escapeHtml(formatCurrency(item.totalAtivo))}</span>
          </button>
        `).join("");

        nodes.timeline.querySelectorAll("[data-date-key]").forEach((button) => {
          button.addEventListener("click", () => {
            selectDate(button.getAttribute("data-date-key"));
          });
        });
      }

      function renderSnapshot(snapshot) {
        const metadata = snapshot.metadata || {};
        renderSummary(snapshot);
        renderSections(snapshot);
        renderSources(snapshot);
        renderTimeline();
        updatePrintMeta(snapshot);
        setStatus(`Atualizado em ${metadata.reportDate || state.dateKey}`, "ok");
      }

      function updatePrintMeta(snapshot) {
        if (!nodes.printMeta) {
          return;
        }

        const cra = getCurrentCra();
        const metadata = snapshot?.metadata || {};
        const reportDate = metadata.reportDate || formatIsoDate(state.dateKey);
        nodes.printMeta.textContent = `${cra?.name || snapshot?.cra?.name || "CRA"} | Data-base ${reportDate}`;
        document.title = `Lamina ${cra?.name || "CRA"} ${reportDate}`.replace(/[\\/:*?"<>|]+/g, "-");
      }

      function waitForPrintLayout() {
        const fontReady = document.fonts?.ready?.catch?.(() => null) || Promise.resolve();
        return fontReady.then(() => new Promise((resolve) => {
          requestAnimationFrame(() => requestAnimationFrame(resolve));
        }));
      }

      async function selectDate(dateKey) {
        if (!dateKey) {
          renderEmptyState("CRA sem data importada");
          return;
        }

        const resolvedDateKey = resolveAvailableDateKey(dateKey);
        if (resolvedDateKey && resolvedDateKey !== dateKey) {
          dateKey = resolvedDateKey;
          setStatus("Data sem base util", "neutral");
        }

        state.dateKey = dateKey;
        nodes.dateSelector.value = dateKey;

        if (!getManifestEntry(dateKey)) {
          setStatus("Base não importada", "error");
          nodes.summaryStrip.innerHTML = "";
          nodes.sectionsRoot.innerHTML = `
            <section class="panel">
              <div class="panel-head">
                <p class="eyebrow">data-base</p>
                <h2>Sem base importada para ${escapeHtml(formatIsoDate(dateKey))}</h2>
              </div>
            </section>
          `;
          renderTimeline();
          return;
        }

        setStatus("Carregando", "neutral");

        try {
          const snapshot = await loadSnapshot(state.craId, state.dateKey);
          state.snapshot = snapshot;
          renderSnapshot(snapshot);
        } catch (error) {
          setStatus("Erro ao carregar", "error");
          nodes.sectionsRoot.innerHTML = `<section class="panel"><strong>${escapeHtml(error.message)}</strong></section>`;
        }
      }

      function selectCra(craId) {
        state.craId = craId;
        const cra = getCurrentCra();
        const dates = getLaminaDates(cra);
        state.dateKey = dates.find((item) => item.dateKey === cra?.currentDate)?.dateKey || dates[0]?.dateKey || "";
        renderCraSelector();
        renderDateSelector();
        selectDate(state.dateKey);
      }

      function renderEmptyState(message) {
        setStatus("Sem dados", "error");
        nodes.summaryStrip.innerHTML = "";
        if (nodes.printMeta) {
          nodes.printMeta.textContent = "";
        }
        nodes.sectionsRoot.innerHTML = `
          <section class="panel">
            <div class="panel-head">
              <p class="eyebrow">base vazia</p>
              <h2>${escapeHtml(message || "Nenhum CRA importado")}</h2>
            </div>
          </section>
        `;
        if (nodes.sourceList) {
          nodes.sourceList.innerHTML = "";
        }
        if (nodes.timeline) {
          nodes.timeline.innerHTML = "";
        }
      }

      async function printReport() {
        if (!state.snapshot) {
          setStatus("Aguarde carregar", "neutral");
          return;
        }

        updatePrintMeta(state.snapshot);
        document.body.classList.add("is-printing-report");
        await waitForPrintLayout();
        window.setTimeout(() => {
          window.print();
          document.body.classList.remove("is-printing-report");
        }, 80);
      }

      function bindCraEvents() {
        nodes.craSelector.addEventListener("change", (event) => {
          const value = event.target.value;
          if (value.startsWith("group:")) {
            const firstChild = getGroupChildren(value.slice("group:".length)).find((cra) => getLaminaDates(cra).length);
            if (firstChild) {
              selectCra(firstChild.craId);
            }
            return;
          }
          selectCra(value.replace(/^cra:/, ""));
        });

        nodes.dateSelector.addEventListener("change", (event) => {
          selectDate(event.target.value);
        });

        nodes.printButton?.addEventListener("click", printReport);
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

      function initCraApp() {
        bindCraEvents();
        window.addEventListener("lamina-auth-ready", refreshCraVisibilityForAccess);

        const cra = getCurrentCra();
        state.craId = cra.craId;
        const dates = getLaminaDates(cra);
        state.dateKey = dates.find((item) => item.dateKey === cra.currentDate)?.dateKey || dates[0]?.dateKey || "";
        renderCraSelector();
        renderDateSelector();
        selectDate(state.dateKey);
      }

      initCraApp();
      return;
    }
  }

const manifest = Array.isArray(window.LAMINA_HISTORY_MANIFEST)
    ? window.LAMINA_HISTORY_MANIFEST
    : [];

  const state = {
    currentDate: window.LAMINA_CURRENT_DATE || manifest[0]?.dateKey || "",
    snapshot: null
  };

  const nodes = {
    dateSelector: document.getElementById("date-selector"),
    printButton: document.getElementById("print-button"),
    printMeta: document.getElementById("print-meta"),
    statusPill: document.getElementById("status-pill"),
    summaryStrip: document.getElementById("summary-strip"),
    sectionsRoot: document.getElementById("sections-root"),
    sourceList: document.getElementById("source-list"),
    timeline: document.getElementById("timeline")
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function getAllMetrics(snapshot) {
    return (snapshot?.sections || []).flatMap((section) => section.metrics || []);
  }

  function summaryCaption(metric) {
    const sourceName = metric?.source?.name || "";
    return sourceName === "Memoria PU" ? "" : sourceName;
  }

  function metricValue(metric) {
    const value = escapeHtml(metric.value);
    const unit = escapeHtml(metric.unit);

    if (!unit || metric.value.includes(unit) || unit === "BRL") {
      return value;
    }

    return `${value}<span>${unit}</span>`;
  }

  function setStatus(text, tone) {
    nodes.statusPill.textContent = text;
    nodes.statusPill.dataset.tone = tone || "neutral";
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

  async function loadSnapshot(dateKey) {
    window.LAMINA_DAILY = window.LAMINA_DAILY || {};

    if (window.LAMINA_DAILY[dateKey]) {
      return window.LAMINA_DAILY[dateKey];
    }

    const entry = manifest.find((item) => item.dateKey === dateKey);
    if (!entry) {
      throw new Error(`Data não encontrada no manifesto: ${dateKey}`);
    }

    const version = encodeURIComponent(entry.revisionId || entry.importedAt || Date.now());
    await loadScript(`./${entry.dataScript}?v=${version}`);

    if (!window.LAMINA_DAILY[dateKey]) {
      throw new Error(`Snapshot não carregado: ${dateKey}`);
    }

    return window.LAMINA_DAILY[dateKey];
  }

  function renderDateSelector() {
    nodes.dateSelector.innerHTML = manifest.map((item) => `
      <option value="${escapeHtml(item.dateKey)}">${escapeHtml(item.reportDate)}</option>
    `).join("");
    nodes.dateSelector.value = state.currentDate;
  }

  function renderSummary(snapshot) {
    const highlights = getAllMetrics(snapshot).filter((metric) => metric.isHighlight).slice(0, 6);

    nodes.summaryStrip.innerHTML = highlights.map((metric) => `
      <article class="metric-card">
        <div class="metric-label">${escapeHtml(metric.label)}</div>
        <strong>${metricValue(metric)}</strong>
        <small>${escapeHtml(summaryCaption(metric))}</small>
      </article>
    `).join("");
  }

  function renderSections(snapshot) {
    nodes.sectionsRoot.innerHTML = (snapshot.sections || []).map((section) => `
      <section class="panel section-panel">
        <div class="panel-head">
          <p class="eyebrow">${escapeHtml(section.id)}</p>
          <h2>${escapeHtml(section.label)}</h2>
        </div>
        <div class="metric-table">
          ${(section.metrics || []).map((metric) => `
            <div class="metric-row">
              <div>
                <strong>${escapeHtml(metric.label)}</strong>
                <small>${escapeHtml(metric.notes || metric.source?.file || "")}</small>
              </div>
              <div class="metric-row-value">${metricValue(metric)}</div>
              <div class="metric-row-source">${escapeHtml(metric.source?.name || "")}</div>
            </div>
          `).join("")}
        </div>
      </section>
    `).join("");
  }

  function renderSources(snapshot) {
    if (!nodes.sourceList) {
      return;
    }

    nodes.sourceList.innerHTML = (snapshot.sources || []).map((source) => {
      const sourceName = escapeHtml(source.name || "Fonte não informada");
      const title = source.url
        ? `<a href="${escapeHtml(source.url)}" target="_blank" rel="noreferrer">${sourceName}</a>`
        : `<strong>${sourceName}</strong>`;

      return `
        <article class="source-item">
          ${title}
          <span>${escapeHtml(source.owner || "Responsável não informado")}</span>
          <small>${escapeHtml(source.file || "")} ${escapeHtml(source.date || "")}</small>
        </article>
      `;
    }).join("");
  }

  function renderTimeline() {
    if (!nodes.timeline) {
      return;
    }

    nodes.timeline.innerHTML = manifest.map((item) => `
      <button class="timeline-item ${item.dateKey === state.currentDate ? "is-active" : ""}" data-date-key="${escapeHtml(item.dateKey)}" type="button">
        <strong>${escapeHtml(item.reportDate)}</strong>
        <span>${escapeHtml(item.rowCount)} campos</span>
      </button>
    `).join("");

    nodes.timeline.querySelectorAll("[data-date-key]").forEach((button) => {
      button.addEventListener("click", () => {
        selectDate(button.getAttribute("data-date-key"));
      });
    });
  }

  function renderSnapshot(snapshot) {
    const metadata = snapshot.metadata || {};
    renderSummary(snapshot);
    renderSections(snapshot);
    renderSources(snapshot);
    renderTimeline();
    if (nodes.printMeta) {
      nodes.printMeta.textContent = `Lamina ao investidor | Data-base ${metadata.reportDate || state.currentDate}`;
    }
    document.title = `Lamina ${metadata.reportDate || state.currentDate}`.replace(/[\\/:*?"<>|]+/g, "-");
    setStatus(`Atualizado em ${metadata.reportDate || state.currentDate}`, "ok");
  }

  async function selectDate(dateKey) {
    if (!dateKey) {
      return;
    }

    state.currentDate = dateKey;
    nodes.dateSelector.value = dateKey;
    setStatus("Carregando", "neutral");

    try {
      const snapshot = await loadSnapshot(dateKey);
      state.snapshot = snapshot;
      renderSnapshot(snapshot);
    } catch (error) {
      setStatus("Erro ao carregar", "error");
      nodes.sectionsRoot.innerHTML = `<section class="panel"><strong>${escapeHtml(error.message)}</strong></section>`;
    }
  }

  function renderEmptyState() {
    setStatus("Sem dados", "error");
    nodes.summaryStrip.innerHTML = "";
    if (nodes.printMeta) {
      nodes.printMeta.textContent = "";
    }
    nodes.sectionsRoot.innerHTML = `
      <section class="panel">
        <div class="panel-head">
          <p class="eyebrow">Base vazia</p>
          <h2>Nenhuma data importada</h2>
        </div>
      </section>
    `;
    if (nodes.sourceList) {
      nodes.sourceList.innerHTML = "";
    }
    if (nodes.timeline) {
      nodes.timeline.innerHTML = "";
    }
  }

  function bindEvents() {
    nodes.dateSelector.addEventListener("change", (event) => {
      selectDate(event.target.value);
    });

    nodes.printButton?.addEventListener("click", () => {
      if (!state.snapshot) {
        setStatus("Aguarde carregar", "neutral");
        return;
      }
      window.print();
    });
  }

  function init() {
    bindEvents();

    if (!manifest.length || !state.currentDate) {
      renderEmptyState();
      return;
    }

    renderDateSelector();
    selectDate(state.currentDate);
  }

  init();
}());
