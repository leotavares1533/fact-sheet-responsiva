(function () {
  "use strict";
  const manifest = (window.LAMINA_CRA_MANIFEST || []).filter(x => x.craId.startsWith("cra-carteira-"));
  const pages = document.getElementById("report-pages"), status = document.getElementById("report-status");
  const dates = document.getElementById("report-date"), print = document.getElementById("print-button");
  let model, revision = 0;
  const br = x => x ? x.split("-").reverse().join("/") : "n/d";
  function render() {
    if (!model) return;
    const mode = document.querySelector('[name="report-mode"]:checked').value;
    pages.innerHTML = window.LAMINA_CARTEIRA_REPORT_VIEW.render(model, mode);
    const count = pages.querySelectorAll(".report-page").length;
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
