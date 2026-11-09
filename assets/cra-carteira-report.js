(function () {
  "use strict";
  const manifest = (window.LAMINA_CRA_MANIFEST || []).filter(x => x.craId.startsWith("cra-carteira-"));
  const pages = document.getElementById("report-pages"), status = document.getElementById("report-status");
  const dates = document.getElementById("report-date"), print = document.getElementById("print-button");
  let model, revision = 0;
  const esc = x => String(x ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = (x, n = 2) => x == null || !Number.isFinite(Number(x)) ? "n/d" : Number(x).toLocaleString("pt-BR", { minimumFractionDigits: n, maximumFractionDigits: n });
  const pct = x => x == null ? "n/d" : `${fmt(x * 100)}%`;
  const br = x => x ? x.split("-").reverse().join("/") : "n/d";
  const amount = (x, n = 2) => `<span class="${x < 0 ? "negative" : ""}">${fmt(x, n)}</span>`;
  const section = (name, head, body, css = "", foot = "") => `<section class="report-section ${css}"><h3>${esc(name)}</h3><table><thead><tr>${head.map(h => `<th>${h}</th>`).join("")}</tr></thead><tbody>${body || `<tr><td class="empty" colspan="${head.length}">Sem saldo ativo</td></tr>`}</tbody>${foot}</table></section>`;
  function rank(name, rows) {
    return section(name, ['<span class="name-cell">Nome</span>', "Nominal (R$)", "VP (R$)"], rows.map(r => `<tr><td title="${esc(r.name)}">${esc(r.name)}</td><td>${fmt(r.nominal)}</td><td>${fmt(r.vp)}</td></tr>`).join(""));
  }
  function aging(rows, total, compact = false) {
    return section("Aging por vencimento", ["Faixa", "VP (R$)", "% VP"], rows.filter(r => !compact || r.vp > 0).map(r => `<tr><td>${esc(r.name)}</td><td>${fmt(r.vp)}</td><td>${pct(total ? r.vp / total : 0)}</td></tr>`).join(""), compact ? "compact-aging" : "aging-summary", `<tfoot><tr><td>Total</td><td>${fmt(total)}</td><td>${pct(total ? 1 : 0)}</td></tr></tfoot>`);
  }
  function heading(label) {
    return `<header class="page-heading"><div><h2>CRAs Carteira Ceres</h2><p>${esc(label)}</p></div><img src="./assets/monthly-report/ceres-securitizadora-logo.png" alt="Ceres Securitizadora"><div class="base-date">Data-base <strong>${br(model.cutoff)}</strong><br><span class="preview-label">PREVIA GERENCIAL - V1</span></div></header>`;
  }
  function footer() {
    return `<footer class="report-foot"><p>Sem PDD. Vencidos pelo saldo de face nao pago. Caixa liquido de despesas, sem segunda deducao. Taxa media ponderada pelo VP dos vincendos com taxa apurada. Rendimentos da sub ainda sem historico comparavel.</p><span class="page-count"></span></footer>`;
  }
  function consolidated() {
    const kpis = [["Valor nominal em aberto", model.nominal], ["Carteira VP", model.vp], ["Caixa liquido", model.cash], ["Funding SR/MEZ", model.funding], ["Subordinadas", model.sub], ["Taxa media a.m. dos vincendos", model.rate]];
    const subs = section("Posicoes das subordinadas - 100 cotas", ["CRA", "Valor (R$)", "PU (R$)"], model.vehicles.map(v => `<tr><td>${v.number}ª</td><td>${amount(v.sub)}</td><td>${amount(v.pu, 8)}</td></tr>`).join(""), "sub-summary", `<tfoot><tr><td>Total</td><td>${amount(model.sub)}</td><td>-</td></tr></tfoot>`);
    return `<article class="report-page">${heading(`Visao consolidada - ${model.vehicles.length} veiculos`)}<section class="kpis">${kpis.map(([label, value], i) => `<div class="kpi"><span>${esc(label)}</span><strong>${i === 5 ? pct(value) : amount(value)}</strong></div>`).join("")}</section><div class="consolidated-grid"><div class="left-summary">${rank("Top 10 cedentes", model.cedentes)}${rank("Top 10 sacados", model.sacados)}${aging(model.aging, model.vp)}</div>${subs}</div>${footer()}</article>`;
  }
  function vehicle(v) {
    const rows = v.series.map(c => `<tr><td title="${esc(c.label || c.classe)}">${esc(c.classe)}</td><td>${fmt(c.pu, 8)}</td><td>${fmt(c.valor)}</td><td>${pct(c.dailyReturn)}</td><td>${pct(c.monthlyReturn)}</td></tr>`).join("");
    return `<section class="vehicle-block"><header class="vehicle-title"><h3>CRA ${v.number}ª</h3><span>${v.rows.length} lastros ativos</span></header><div class="vehicle-metrics"><div><span>Nominal em aberto (R$)</span><strong>${fmt(v.nominal)}</strong></div><div><span>Carteira VP (R$)</span><strong>${fmt(v.vp)}</strong></div><div><span>Taxa a.m. dos vincendos</span><strong>${pct(v.rate)}</strong></div><div><span>Ultimo vencimento do ativo</span><strong>${br(v.due)}</strong></div></div>${rank("Top 5 cedentes", v.cedentes)}${rank("Top 5 sacados", v.sacados)}${aging(v.aging, v.vp, true)}${section("Funding na data-base", ["Serie", "PU (R$)", "Valor (R$)", "Dia", "Mes"], rows, "series-table")}<div class="sub-result"><div><span>Caixa liquido (R$)</span><strong>${fmt(v.cash)}</strong></div><div><span>Valor subordinada (R$)</span><strong>${amount(v.sub)}</strong></div><div><span>PU subordinada (R$)</span><strong>${amount(v.pu, 8)}</strong></div></div>${v.number === 46 ? '<p class="small-note">Funding mantido em 27/10. Vencimento pendente de conciliacao.</p>' : ""}</section>`;
  }
  function render() {
    if (!model) return;
    const mode = document.querySelector('[name="report-mode"]:checked').value;
    let html = mode !== "detail" ? consolidated() : "";
    if (mode !== "summary") {
      for (let i = 0; i < model.vehicles.length; i += 3) html += `<article class="report-page">${heading("Informacoes individuais das carteiras")}<div class="vehicle-grid">${model.vehicles.slice(i, i + 3).map(vehicle).join("")}</div>${footer()}</article>`;
    }
    pages.innerHTML = html;
    const count = pages.querySelectorAll(".report-page").length;
    pages.querySelectorAll(".page-count").forEach((node, i) => node.textContent = `${i + 1} / ${count}`);
    status.textContent = `${model.vehicles.length} CRAs - base unica ${br(model.cutoff)} - ${count} ${count === 1 ? "pagina" : "paginas"}`;
    print.disabled = false;
    document.title = `CRAs Carteira - ${br(model.cutoff).replaceAll("/", "-")} - ${mode === "summary" ? "Consolidado" : mode === "detail" ? "Por CRA" : "Completo"}`;
  }
  function load(entry) {
    const known = window.LAMINA_CRA_DAILY?.[entry.craId]?.[dates.value];
    if (known) return Promise.resolve(known);
    const record = entry.dates.find(d => d.dateKey === dates.value);
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = `./${record.dataScript}?revision=${encodeURIComponent(record.revisionId || "")}`;
      script.onload = () => { script.remove(); const snap = window.LAMINA_CRA_DAILY?.[entry.craId]?.[record.dateKey]; snap ? resolve(snap) : reject(new Error("Posicao indisponivel.")); };
      script.onerror = () => { script.remove(); reject(new Error(`Erro ao carregar CRA ${entry.craId.split("-").at(-1)}.`)); };
      document.head.append(script);
    });
  }
  async function update() {
    const sequence = ++revision;
    model = null; pages.innerHTML = ""; print.disabled = true;
    const role = window.LAMINA_AUTH?.currentUser().role;
    if (!["admin", "operator"].includes(role)) { status.textContent = "Relatorio disponivel apenas no acesso interno autorizado."; return; }
    status.textContent = "Carregando posicoes...";
    try {
      const snapshots = [];
      for (const entry of manifest) { snapshots.push(await load(entry)); if (sequence !== revision) return; }
      model = window.LAMINA_CARTEIRA_REPORT.build(snapshots, dates.value);
      render();
    } catch (error) { if (sequence === revision) status.textContent = error.message; }
  }
  const available = manifest.length ? manifest[0].dates.filter(d => d.assetImported && !d.fundingCashOnly)
    .map(d => d.dateKey).filter(key => manifest.every(c => c.dates.some(d => d.dateKey === key && d.assetImported && !d.fundingCashOnly))).sort() : [];
  dates.innerHTML = available.map(key => `<option value="${key}">${br(key)}</option>`).join("");
  const wanted = new URLSearchParams(location.search).get("date");
  dates.value = available.includes(wanted) ? wanted : available.at(-1) || "";
  dates.addEventListener("change", update);
  document.querySelectorAll('[name="report-mode"]').forEach(node => node.addEventListener("change", render));
  print.addEventListener("click", () => { if (model && window.LAMINA_AUTH.can("generatePdf")) window.print(); });
  window.addEventListener("lamina-auth-ready", update);
  if (window.LAMINA_AUTH) update();
})();
