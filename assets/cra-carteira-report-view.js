(function (root) {
  "use strict";
  function render(model, mode = "all") {
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
      return `<article class="report-page consolidated-page">${heading(`Visao consolidada - ${model.vehicles.length} veiculos`)}<section class="kpis">${kpis.map(([label, value], i) => `<div class="kpi"><span>${esc(label)}</span><strong>${i === 5 ? pct(value) : amount(value)}</strong></div>`).join("")}</section><div class="consolidated-grid"><div class="left-summary">${rank("Top 10 cedentes", model.cedentes)}${rank("Top 10 sacados", model.sacados)}${aging(model.aging, model.vp)}</div>${subs}</div>${footer()}</article>`;
    }
    function vehicle(v) {
      const rows = v.series.map(c => `<tr><td title="${esc(c.label || c.classe)}">${esc(c.classe)}</td><td>${fmt(c.pu, 8)}</td><td>${fmt(c.valor)}</td><td>${pct(c.dailyReturn)}</td><td>${pct(c.monthlyReturn)}</td></tr>`).join("");
      return `<section class="vehicle-block" data-cra-id="${esc(v.id)}"><header class="vehicle-title"><h3>CRA ${v.number}ª</h3><span>${v.rows.length} lastros ativos</span></header><div class="vehicle-metrics"><div><span>Nominal em aberto (R$)</span><strong>${fmt(v.nominal)}</strong></div><div><span>Carteira VP (R$)</span><strong>${fmt(v.vp)}</strong></div><div><span>Taxa a.m. dos vincendos</span><strong>${pct(v.rate)}</strong></div><div><span>Ultimo vencimento do ativo</span><strong>${br(v.due)}</strong></div></div>${rank("Top 5 cedentes", v.cedentes)}${rank("Top 5 sacados", v.sacados)}${aging(v.aging, v.vp, true)}${section("Funding na data-base", ["Serie", "PU (R$)", "Valor (R$)", "Dia", "Mes"], rows, "series-table")}<div class="sub-result"><div><span>Caixa liquido (R$)</span><strong>${fmt(v.cash)}</strong></div><div><span>Fundo de despesas reservado (R$)</span><strong>${fmt(v.reserve)}</strong></div><div><span>Valor subordinada (R$)</span><strong>${amount(v.sub)}</strong></div><div><span>PU subordinada (R$)</span><strong>${amount(v.pu, 8)}</strong></div></div>${v.number === 46 ? '<p class="small-note">Funding mantido em 27/10. Vencimento pendente de conciliacao.</p>' : ""}</section>`;
    }
    const pages = mode !== "detail" ? [consolidated()] : [];
    if (mode !== "summary") {
      for (let i = 0; i < model.vehicles.length; i += 3) pages.push(`<article class="report-page individual-page">${heading("Informacoes individuais das carteiras")}<div class="vehicle-grid">${model.vehicles.slice(i, i + 3).map(vehicle).join("")}</div>${footer()}</article>`);
    }
    return pages.map((page, i) => page.replace('<span class="page-count"></span>', `<span class="page-count">${i + 1} / ${pages.length}</span>`)).join("");
  }
  root.LAMINA_CARTEIRA_REPORT_VIEW = { render };
})(globalThis);
