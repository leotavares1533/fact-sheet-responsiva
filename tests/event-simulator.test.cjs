const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");

const root = path.resolve(__dirname, "..");
function loadSimulator() {
  const nodes = new Map();
  const document = { getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, { innerHTML: "", value: "", handlers: {}, addEventListener(type, handler) { this.handlers[type] = handler; } });
    return nodes.get(id);
  } };
  const context = vm.createContext({ window: {}, document, Date, Set, Map, console });
  const source = fs.readFileSync(path.join(root, "assets/event-simulator.js"), "utf8");
  vm.runInContext(source.replace("  init();", `  window.testEvents = { state, getRowState, getAllocations,
    getSelectedSimulations, setAllocationCash, commitAllocations, redistributeCraCash,
    getSimulationBaseRow, buildRowsFromSnapshot, collectHolidays, renderRows, renderSummary, bindEvents };`), context);
  const api = context.window.testEvents;
  return { ...api, nodes, context };
}

function addRow(api, id, order = 10, pu = 1010, quantity = 100, craId = "cra-test") {
  const row = { id, craId, craName: craId, dateKey: "2026-11-05", baseCash: 150000,
    serie: order === 10 ? "Senior" : order === 11 ? "Mezanino A" : "Mezanino B", search: id.toLowerCase(),
    cota: { classe: id, tipo: order === 10 ? "sr" : "mez", ordem: order, quantidade: quantity,
      pu, principalResidual: 1000, taxaAa: 0, metodo: "prefixado" } };
  api.state.rows.push(row);
  api.getRowState(id).dateKey = row.dateKey;
  return row;
}

function selectSeries(api, id, flags = ["interest", "rescue"]) {
  const rowState = api.getRowState(id);
  rowState.selected = true;
  for (const flag of flags) rowState[flag] = true;
}

function change(api, attributes, value, checked) {
  api.nodes.get("event-rows").handlers.change({ target: {
    value, checked, getAttribute: (name) => attributes[name] || null
  } });
}

test("junior cash, selection and event controls are blocked until senior payoff", () => {
  const api = loadSimulator();
  addRow(api, "SR");
  const mez = addRow(api, "MEZA", 11);
  api.getRowState("MEZA").cash = "80.000,00";
  api.getRowState("MEZA").selected = true;
  let result = api.getAllocations().byId.get("MEZA");
  assert.equal(result.cash, 0);
  assert.equal(result.selected, false);
  assert.equal(result.simulation.eventValue, 0);
  assert.equal(result.simulation.warning, "prioridade");
  api.setAllocationCash(mez, 90000);
  assert.equal(api.getAllocations().byId.get("MEZA").cash, 0);
  api.renderRows();
  const html = api.nodes.get("event-rows").innerHTML;
  assert.match(html, /data-row-cash="MEZA"[^>]*disabled/);
  assert.match(html, /data-row-select="MEZA"[^>]*disabled/);
  assert.match(html, /data-row-type="amex" data-row-id="MEZA"[^>]*disabled/);
  assert.equal(api.getSelectedSimulations().length, 0);
});

test("payoff caps senior cash and sends only the excess to mezzanine", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  addRow(api, "MEZB", 12);
  selectSeries(api, "SR");
  api.setAllocationCash(sr, 150000);
  const { byId } = api.getAllocations();
  const senior = byId.get("SR");
  assert.equal(senior.cash, 101000);
  assert.equal(senior.simulation.eventValue, 101000);
  assert.equal(senior.simulation.principalAfter, 0);
  assert.equal(senior.config.ordinaryAmortization, false);
  assert.equal(senior.config.interest, true);
  assert.equal(senior.config.rescue, true);
  assert.equal(senior.simulation.rescuePu, 1000);
  for (const key of ["amex", "premium"]) assert.equal(senior.config[key], false);
  assert.equal(byId.get("MEZA").cash, 49000);
  assert.equal(byId.get("MEZA").selected, false);
  assert.equal(byId.get("MEZA").simulation.eventValue, 0);
  assert.equal(byId.get("MEZB").cash, 0);
  assert.ok(byId.get("MEZB").blocker);
  api.renderRows();
  assert.match(api.nodes.get("event-rows").innerHTML, /data-row-type="ordinaryAmortization" data-row-id="SR"\s+disabled/);
  assert.match(api.nodes.get("event-rows").innerHTML, /data-row-type="rescue" data-row-id="SR" checked\s*>/);
  assert.match(api.nodes.get("event-rows").innerHTML, /data-row-type="premium" data-row-id="SR"\s*>/);
  assert.match(api.nodes.get("event-rows").innerHTML, /data-row-type="amex" data-row-id="SR"\s+disabled/);
});

test("interest-only and partial principal events do not unlock the next series", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR", ["interest"]);
  api.setAllocationCash(sr, 100000);
  let results = api.getAllocations().byId;
  assert.equal(results.get("SR").simulation.principalAfter, 1000);
  assert.ok(results.get("MEZA").blocker);
  api.getRowState("SR").amex = true;
  results = api.getAllocations().byId;
  assert.equal(results.get("SR").simulation.principalAfter, 10);
  assert.ok(results.get("MEZA").blocker);
});

test("full payoff flags are effective only while cash covers the series", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  selectSeries(api, "SR", ["interest"]);
  api.getRowState("SR").amex = true;
  api.setAllocationCash(sr, 101000);
  assert.equal(api.getAllocations().byId.get("SR").config.amex, false);
  api.setAllocationCash(sr, 50000);
  const result = api.getAllocations().byId.get("SR");
  assert.equal(result.fullPayoff, false);
  assert.equal(result.config.amex, true);
  assert.equal(result.config.ordinaryAmortization, false);
});

test("single-series CRA caps payoff, locks AMEX and preserves unallocated cash", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  selectSeries(api, "SR");
  api.setAllocationCash(sr, 150000);
  let result = api.getAllocations();
  assert.equal(result.byId.get("SR").cash, 101000);
  assert.equal(result.byId.get("SR").config.amex, false);
  assert.equal(result.unallocated.get("cra-test"), 150000 - result.byId.get("SR").cash);
  api.commitAllocations();
  result = api.getAllocations();
  assert.equal(result.unallocated.get("cra-test"), 49000);
  assert.equal(result.byId.get("SR").cash, 101000);
  api.renderSummary();
  assert.match(api.nodes.get("sim-summary").innerHTML, /Nao alocado/);
});

test("waterfall is scoped by CRA and cannot be bypassed by the filter", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  const other = addRow(api, "OTHER", 10, 1010, 100, "other-cra");
  api.setAllocationCash(other, 50000);
  api.nodes.get("series-filter").value = "MEZA";
  api.renderRows();
  assert.match(api.nodes.get("event-rows").innerHTML, /data-row-cash="MEZA"[^>]*disabled/);
  api.setAllocationCash(sr, 101000);
  assert.equal(api.getAllocations().byId.get("MEZA").blocker, undefined);
  assert.equal(api.getAllocations().byId.get("OTHER").cash, 50000);
});

test("a junior event cannot precede the senior payoff date", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  api.getRowState("SR").dateKey = "2026-11-06";
  api.setAllocationCash(sr, 150000);
  const result = api.getAllocations();
  assert.ok(result.byId.get("MEZA").blocker);
  assert.equal(result.byId.get("MEZA").cash, 0);
  assert.equal(result.unallocated.get("cra-test"), 150000 - result.byId.get("SR").cash);
});

test("all series are capped, with no cash created or duplicated after committing", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  addRow(api, "MEZB", 12);
  for (const id of ["SR", "MEZA", "MEZB"]) selectSeries(api, id);
  api.setAllocationCash(sr, 350000);
  for (let i = 0; i < 3; i++) {
    const result = api.getAllocations();
    assert.equal([...result.byId.values()].reduce((total, item) => total + item.cash, 0), 303000);
    assert.equal(result.unallocated.get("cra-test"), 47000);
    assert.ok([...result.byId.values()].every((item) => item.fullPayoff && item.simulation.principalAfter === 0));
    api.commitAllocations();
  }
});

test("editing an earlier allocation clears obsolete downstream amounts", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  const mez = addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  api.setAllocationCash(sr, 150000);
  api.setAllocationCash(mez, 40000);
  assert.equal(api.getAllocations().byId.get("MEZA").cash, 40000);
  api.setAllocationCash(sr, 80000);
  assert.equal(api.getAllocations().byId.get("MEZA").cash, 0);
  assert.equal(api.getRowState("MEZA").cash, "");
  api.setAllocationCash(sr, 101000);
  assert.equal(api.getAllocations().byId.get("MEZA").cash, 0);
});

test("payoff rounded to cents does not leave microscopic principal blocking juniors", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR", 10, 1001.12345678, 19850);
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  const payoff = Math.round(1001.12345678 * 19850 * 100) / 100;
  api.setAllocationCash(sr, payoff + 100);
  const result = api.getAllocations().byId;
  assert.equal(result.get("SR").simulation.principalAfter, 0);
  assert.equal(result.get("MEZA").cash, 100);
  assert.equal(result.get("MEZA").blocker, undefined);
});

test("suggestion and cash input never select series or event flags automatically", () => {
  const api = loadSimulator();
  addRow(api, "SR");
  addRow(api, "MEZA", 11);
  api.bindEvents();
  api.nodes.get("series-filter").value = "MEZA";
  api.nodes.get("suggest-cash").handlers.click();
  const result = api.getAllocations().byId;
  assert.equal(result.get("SR").cash, 101000);
  assert.equal(result.get("MEZA").cash, 0);
  assert.equal(result.get("SR").selected, false);
  assert.equal(api.getSelectedSimulations().length, 0);
  for (const key of ["interest", "rescue", "premium", "ordinaryAmortization", "amex"]) {
    assert.equal(result.get("SR").config[key], false);
  }
  selectSeries(api, "SR");
  assert.equal(api.getAllocations().byId.get("MEZA").cash, 49000);
  assert.equal(api.getAllocations().byId.get("MEZA").selected, false);
  api.setAllocationCash(api.state.rows[0], 160000);
  assert.equal(api.getRowState("MEZA").selected, false);
});

test("real CRA51 labels identify mezzanine and real single-series CRA74 settles at 8-place PU", () => {
  const api = loadSimulator();
  for (const id of ["cra-carteira-51", "cra-carteira-74"]) {
    const file = `data/cras/${id}/2026-11-04.js`;
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), api.context);
    const snapshot = api.context.window.LAMINA_CRA_DAILY[id]["2026-11-04"];
    api.collectHolidays(snapshot);
    const rows = api.buildRowsFromSnapshot({ craId: id }, snapshot);
    api.state.rows.push(...rows);
    for (const row of rows) api.getRowState(row.id).dateKey = row.dateKey;
    if (id.endsWith("51")) {
      assert.deepEqual(Array.from(rows, (row) => row.serie), ["Mezanino A", "Mezanino B"]);
      assert.equal(api.getAllocations().byId.get(rows[0].id).blocker, undefined, "Settled senior must not block remaining mezzanine");
    } else {
      assert.equal(rows.length, 1);
      selectSeries(api, rows[0].id);
      api.setAllocationCash(rows[0], 50000000);
      const result = api.getAllocations().byId.get(rows[0].id);
      assert.equal(result.fullPayoff, true);
      assert.equal(result.simulation.principalAfter, 0);
      assert.equal(result.config.amex, false);
    }
  }
});

test("payoff leaves interest, redemption and premium editable; only amortization and AMEX lock", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  selectSeries(api, "SR");
  api.bindEvents();
  api.setAllocationCash(sr, 150000);
  change(api, { "data-row-id": "SR", "data-row-type": "premium" }, "", true);
  assert.equal(api.getAllocations().byId.get("SR").config.premium, true);
  change(api, { "data-row-id": "SR", "data-row-type": "rescue" }, "", false);
  let result = api.getAllocations().byId.get("SR");
  assert.equal(result.config.rescue, false);
  assert.equal(result.simulation.principalAfter, 1000);
  change(api, { "data-row-id": "SR", "data-row-type": "amex" }, "", true);
  assert.equal(api.getRowState("SR").amex, false);
  change(api, { "data-row-id": "SR", "data-row-type": "rescue" }, "", true);
  result = api.getAllocations().byId.get("SR");
  assert.equal(result.simulation.principalAfter, 0);
  assert.deepEqual(Array.from(result.simulation.components, (item) => item.component), ["Juros", "Resgate total", "Premio"]);
});

test("premium in reais reserves cash before releasing the surplus to unselected mezzanine", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  api.bindEvents();
  api.setAllocationCash(sr, 150000);
  change(api, { "data-row-id": "SR", "data-row-type": "premium" }, "", true);
  change(api, { "data-row-premium-value": "SR" }, "2.000,00");
  const result = api.getAllocations().byId;
  assert.equal(result.get("SR").cash, 103000);
  assert.equal(result.get("SR").simulation.premiumValue, 2000);
  assert.equal(result.get("SR").simulation.eventValue, 103000);
  assert.equal(result.get("SR").simulation.eventPu, 1030);
  assert.equal(result.get("SR").simulation.puAfter, 0);
  assert.equal(result.get("MEZA").cash, 47000);
  assert.equal(result.get("MEZA").selected, false);
  assert.equal(result.get("MEZA").simulation.eventValue, 0);
  api.renderRows();
  assert.match(api.nodes.get("event-rows").innerHTML, /data-row-premium-value="SR"/);
});

test("percent premium uses current principal, not PU with interest or amount of payment", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  sr.cota.principalResidual = 800;
  selectSeries(api, "SR");
  api.bindEvents();
  api.setAllocationCash(sr, 150000);
  change(api, { "data-row-id": "SR", "data-row-type": "premium" }, "", true);
  change(api, { "data-row-premium-mode": "SR" }, "percent");
  change(api, { "data-row-premium-value": "SR" }, "2,5");
  const result = api.getAllocations().byId.get("SR");
  assert.equal(result.simulation.premiumRequested, 2000);
  assert.equal(result.simulation.premiumValue, 2000);
  assert.equal(result.simulation.interestPaidPu, 210);
  assert.equal(result.simulation.rescuePu, 800);
  assert.equal(result.simulation.eventValue, 103000);
  assert.match(result.simulation.components.at(-1).detail, /principal atual/);
});

test("premium cannot create cash and insufficient budget cannot unlock mezzanine", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  Object.assign(api.getRowState("SR"), { premium: true, premiumAmount: "200.000,00" });
  api.setAllocationCash(sr, 100000);
  const result = api.getAllocations().byId;
  assert.equal(result.get("SR").simulation.eventValue, 100000);
  assert.equal(result.get("SR").simulation.premiumShortfall, 100000);
  assert.equal(result.get("SR").simulation.warning, "insuficiente");
  assert.equal(result.get("SR").simulation.cashRemaining, 0);
  assert.ok(result.get("MEZA").blocker);
});

test("premium alone does not amortize the principal or remove accrued interest from the balance", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  selectSeries(api, "SR", ["premium"]);
  api.getRowState("SR").premiumAmount = "1.000,00";
  api.setAllocationCash(sr, 1000);
  const result = api.getAllocations().byId.get("SR").simulation;
  assert.equal(result.principalAfter, 1000);
  assert.equal(result.puAfter, 1010);
  assert.equal(result.valueAfter, 101000);
  assert.equal(result.eventValue, 1000);
});

test("deselecting or changing dates preserves manual choices and total cash without paying blocked series", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  addRow(api, "MEZA", 11);
  selectSeries(api, "SR");
  api.setAllocationCash(sr, 150000);
  api.commitAllocations();
  api.bindEvents();
  change(api, { "data-row-select": "SR" }, "", false);
  const result = api.getAllocations();
  assert.equal(api.getSelectedSimulations().length, 0);
  assert.equal([...result.byId.values()].reduce((sum, item) => sum + item.cash, 0) + result.unallocated.get("cra-test"), 150000);
  api.nodes.get("global-event-date").value = "2026-11-06";
  api.nodes.get("apply-global-date").handlers.click();
  assert.equal(api.getSelectedSimulations().length, 0);
  assert.equal(api.getRowState("SR").selected, false);
  assert.equal(api.getRowState("MEZA").selected, false);
});

test("summary does not mix draft cash from unselected CRAs into the selected CRA", () => {
  const api = loadSimulator();
  const sr = addRow(api, "SR");
  const other = addRow(api, "OTHER", 10, 1010, 100, "other-cra");
  api.setAllocationCash(sr, 150000);
  api.setAllocationCash(other, 50000);
  selectSeries(api, "OTHER", ["interest"]);
  api.renderSummary();
  assert.match(api.nodes.get("sim-summary").innerHTML, /R\$ 50,0 mil/);
  assert.doesNotMatch(api.nodes.get("sim-summary").innerHTML, /R\$ 200,0 mil/);
});

test("CRA47 projection preserves accrued interest and matches the control curve with CDI plus spread", () => {
  const api = loadSimulator();
  for (const file of ["data/indices/di.js", "data/funding-pu-latest.js", "data/cras/cra-carteira-47/2026-11-05.js"]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), api.context);
  }
  const snapshot = api.context.window.LAMINA_CRA_DAILY["cra-carteira-47"]["2026-11-05"];
  api.collectHolidays(snapshot);
  const row = api.buildRowsFromSnapshot({ craId: "cra-carteira-47" }, snapshot)
    .find((item) => item.cota.ifCodigo === "CRA02500B49");
  api.state.rows.push(row);
  const control = api.context.window.LAMINA_FUNDING_PU.vehicles["cra-carteira-47"].series["CRA02500B49"];
  for (const expected of control.forecasts["2026-11-05"].rows) {
    const actual = api.getSimulationBaseRow(row, expected.dataIso);
    assert.equal(actual.puAtualizado, expected.puAtualizado, `PU on ${expected.dataIso}`);
    assert.ok(Math.abs(actual.puJuros - expected.puJuros) < 1e-10, `Accrued interest on ${expected.dataIso}`);
    assert.ok(actual.puAtualizado >= row.cota.pu, "Projection cannot discard accrued interest");
  }
  for (const dateKey of ["2026-11-07", "2026-11-08"]) {
    assert.equal(api.getSimulationBaseRow(row, dateKey).puAtualizado, control.rows[0].puAtualizado);
  }
  Object.assign(api.getRowState(row.id), { selected: true, interest: true, dateKey: "2026-11-11" });
  api.setAllocationCash(row, row.baseCash);
  const simulation = api.getAllocations().byId.get(row.id).simulation;
  assert.equal(simulation.puBefore, 409.90999954);
  assert.ok(Math.abs(simulation.interestPu - 22.53426619355883) < 1e-10);
  assert.equal(simulation.puAfter, row.cota.principalResidual);
  assert.ok(Math.abs(simulation.eventValue - simulation.interestPu * row.cota.quantidade) < 1e-8);
});

test("all supported funding methods match the control for CRAs 42, 65 and Carteira", () => {
  const api = loadSimulator();
  for (const file of ["data/indices/di.js", "data/funding-pu-latest.js"]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), api.context);
  }
  let checked = 0;
  const checkedSeries = new Set();
  for (const [craId, update] of Object.entries(api.context.window.LAMINA_FUNDING_PU.vehicles)) {
    vm.runInContext(fs.readFileSync(path.join(root, `data/cras/${craId}/${update.sourceDate}.js`), "utf8"), api.context);
    const snapshot = api.context.window.LAMINA_CRA_DAILY[craId][update.sourceDate];
    api.collectHolidays(snapshot);
    for (const row of api.buildRowsFromSnapshot({ craId }, snapshot)) {
      const series = update.series[row.cota.ifCodigo];
      const expectedRows = [...(series?.rows || []), ...(series?.forecasts?.[update.sourceDate]?.rows || [])]
        .filter((item) => item.dataIso > row.dateKey);
      for (const expected of expectedRows) {
        const actual = api.getSimulationBaseRow(row, expected.dataIso);
        assert.ok(Math.abs(actual.puAtualizado - expected.puAtualizado) < 0.00000002,
          `${craId}/${row.cota.ifCodigo}/${expected.dataIso}: ${actual.puAtualizado} vs ${expected.puAtualizado}`);
        checked += 1;
        checkedSeries.add(row.id);
      }
    }
  }
  assert.ok(checked >= 200, "Regression covers daily PUs across all supported methods");
  assert.ok(checkedSeries.size >= 40, "Every active series with a control curve is compared");
});

test("CDI projections respect each series' D0, D1 and D2 rate reference", () => {
  for (const [lag, expectedDate, expectedPu] of [[0, "2026-11-06", 1041.0296], [1, "2026-11-05", 1040.6864], [2, "2026-11-04", 1040.2288]]) {
    const api = loadSimulator();
    api.context.window.LAMINA_DI_RATES = {
      "2026-11-04": { data: "2026-11-04", taxaDia: 0.0002 },
      "2026-11-05": { data: "2026-11-05", taxaDia: 0.0006 },
      "2026-11-06": { data: "2026-11-06", taxaDia: 0.0009 }
    };
    const row = addRow(api, "SR", 10, 1040);
    Object.assign(row.cota, { metodo: "percentual_di_252", indexador: "DI", percentualIndexador: 1.1, lagBusinessDays: lag,
      historicoPu: [{ dataIso: row.dateKey, puAtualizado: 1040, valorNominal: 1000, fatorDiAcumulado: 1.04,
        diasUteis: 20, diasUteisPeriodo: 20, taxaDiUtilizadaDia: 0.0002 }] });
    const result = api.getSimulationBaseRow(row, "2026-11-06");
    assert.equal(result.dataReferenciaTaxaDiIso, expectedDate);
    assert.ok(Math.abs(result.puAtualizado - expectedPu) < 0.00000002);
  }
});

test("pending documentation and overdue funding block future events without consuming or releasing cash", () => {
  for (const id of ["cra-carteira-46", "cra-carteira-56"]) {
    const api = loadSimulator();
    vm.runInContext(fs.readFileSync(path.join(root, `data/cras/${id}/2026-11-05.js`), "utf8"), api.context);
    const snapshot = api.context.window.LAMINA_CRA_DAILY[id]["2026-11-05"];
    api.collectHolidays(snapshot);
    const row = api.buildRowsFromSnapshot({ craId: id }, snapshot)[0];
    api.state.rows.push(row);
    Object.assign(api.getRowState(row.id), { selected: true, interest: true, rescue: true,
      cash: "150.000,00", dateKey: "2026-11-11" });
    addRow(api, "MEZA", 11, 1010, 100, id);
    const allocation = api.getAllocations();
    const result = allocation.byId.get(row.id);
    assert.ok(result.projectionBlockedReason);
    assert.equal(result.selected, false);
    assert.equal(result.cash, 0);
    assert.equal(result.simulation.eventValue, 0);
    assert.equal(result.simulation.warning, "calculo-pendente");
    assert.ok(allocation.byId.get("MEZA").blocker);
    assert.equal(allocation.unallocated.get(id), 150000);
    assert.equal(api.getSelectedSimulations().length, 0);
    api.setAllocationCash(row, 999999);
    assert.equal(api.getAllocations().byId.get(row.id).cash, 0);
    api.bindEvents();
    api.nodes.get("select-visible").handlers.click();
    assert.equal(api.getSelectedSimulations().length, 0);
    api.renderRows();
    const html = api.nodes.get("event-rows").innerHTML;
    assert.match(html, /PU pendente/);
    assert.ok(html.includes(`data-row-select="${row.id}"  disabled`));
    assert.match(html, /data-cell="puBefore">-<\/td>/);
  }
});

test("residual subordinated units never accrue assumed CDI", () => {
  const api = loadSimulator();
  api.context.window.LAMINA_DI_RATES = { "2026-11-06": { data:"2026-11-06", taxaDia:0.001 } };
  const row = addRow(api, "SUB", 90, 1050);
  Object.assign(row.cota, { tipo:"sub", metodo:"subordinada_residual" });
  assert.equal(api.getSimulationBaseRow(row, "2026-11-11").puAtualizado, 1050);
});
