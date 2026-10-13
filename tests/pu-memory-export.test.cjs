const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const { test } = require("node:test");

const root = path.resolve(__dirname, "..");
function loadValidator(craId = "cra-65", dateKey = "2026-10-07") {
  const context = vm.createContext({ window: {}, document: { getElementById: () => null }, Date, Set, console });
  for (const file of ["data/cra-manifest.js", "data/indices/di.js", "assets/pu-memory.js", `data/cras/${craId}/${dateKey}.js`]) {
    vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context);
  }
  const source = fs.readFileSync(path.join(root, "assets/pu.js"), "utf8");
  vm.runInContext(source.replace("  init();", "  window.testPu = { state, buildPuMemorySheets, getHolidaySet, buildHistoricalSnapshot, prepareSnapshotForPu };"), context);
  const api = context.window.testPu;
  const snapshot = context.window.LAMINA_CRA_DAILY[craId][dateKey];
  api.state.craId = craId;
  api.state.dateKey = dateKey;
  api.state.loading = false;
  api.state.holidayDates = api.getHolidaySet(snapshot);
  api.state.snapshot = api.prepareSnapshotForPu(snapshot);
  return { ...api, exporter: context.window.LAMINA_PU_MEMORY, window: context.window };
}

const value = (cell) => cell && typeof cell === "object" ? cell.value : cell;
const summaryValue = (memory, label) => value(memory.sheets[0].rows.find((row) => row[0] === label)[1]);

test("Copom horizon follows selected date, including decision-day and year rollover", () => {
  const { exporter } = loadValidator();
  assert.equal(exporter.nextCopom("2026-10-07").dateKey, "2026-11-04");
  assert.equal(exporter.nextCopom("2026-08-03").dateKey, "2026-08-05");
  assert.equal(exporter.nextCopom("2026-11-04").dateKey, "2026-11-04");
  assert.equal(exporter.nextCopom("2026-11-05").dateKey, "2026-12-09");
  assert.equal(exporter.nextCopom("2026-12-10").dateKey, "2027-01-27");
  assert.equal(exporter.nextCopom("2027-12-09"), null);
  assert.equal(exporter.nextCopom("2028-01-03"), null);
});

test("CRA 65 exports exact selected PU, all history, calendar, payments and constant rate", () => {
  const api = loadValidator();
  const before = JSON.stringify(api.state.snapshot);
  const memory = api.buildPuMemorySheets();
  const cota = api.state.snapshot.passivo.cotas[0];
  assert.equal(summaryValue(memory, "PU na data-base"), cota.pu);
  assert.equal(memory.sheets[1].rows.length, cota.historicoPu.length + 1);
  assert.equal(value(memory.sheets[1].rows.at(-1)[11]), cota.pu);
  const projection = memory.sheets[2].rows.slice(1);
  const dateValue = (key) => api.exporter.dateCell(key).value;
  assert.equal(value(projection[0][0]), dateValue("2026-10-08"));
  assert.equal(value(projection.at(-1)[0]), dateValue("2026-11-04"));
  for (const key of ["2026-10-10", "2026-10-12", "2026-11-02"]) {
    const row = projection.find((r) => value(r[0]) === dateValue(key));
    assert.equal(row[2], "Nao");
    assert.equal(value(row[15]), 1);
  }
  const payment = projection.find((r) => value(r[0]) === dateValue("2026-10-15"));
  assert.match(payment[21], /Juros/);
  assert.equal(value(payment[8]), 0);
  assert.equal(value(payment[11]), value(payment[10]));
  assert.ok(value(payment[23]) > 0);
  assert.ok(projection.every((row) => value(row[3]) === value(projection[0][3])));
  assert.equal(JSON.stringify(api.state.snapshot), before);
});

test("switching series exports SR2 and CRA42 retains its own quantity and PU", () => {
  const api65 = loadValidator();
  api65.state.cotaIndex = 1;
  const second = api65.buildPuMemorySheets();
  assert.match(second.fileName, /SR2/);
  assert.equal(summaryValue(second, "Codigo IF"), "CRA0260040Q");
  const api42 = loadValidator("cra-modelo");
  const memory = api42.buildPuMemorySheets();
  assert.match(memory.fileName, /cra-modelo-SR1/);
  assert.equal(summaryValue(memory, "Quantidade atual"), 360000);
  assert.equal(summaryValue(memory, "PU na data-base"), api42.state.snapshot.passivo.cotas[0].pu);
});

test("historical projection cannot use rates known only after the selected date", () => {
  const api = loadValidator();
  api.state.dateKey = "2026-08-03";
  api.state.snapshot = api.buildHistoricalSnapshot(api.state.snapshot, api.state.dateKey);
  api.window.LAMINA_DI_RATES["2026-08-04"] = { data: "2026-08-04", taxaDia: 0.01 };
  const memory = api.buildPuMemorySheets();
  const rate = summaryValue(memory, "Taxa diaria da posicao");
  assert.ok(memory.sheets[2].rows.slice(1).every((row) => value(row[3]) === rate));
  assert.equal(value(memory.sheets[2].rows.at(-1)[0]), api.exporter.dateCell("2026-08-05").value);
});

test("calculated current view is exported rather than the source snapshot", () => {
  const api = loadValidator();
  api.state.dateKey = "2026-10-09";
  const oldPu = api.state.snapshot.passivo.cotas[0].pu;
  api.state.snapshot = api.buildHistoricalSnapshot(api.state.snapshot, api.state.dateKey);
  const memory = api.buildPuMemorySheets();
  assert.ok(summaryValue(memory, "PU na data-base") > oldPu);
  assert.equal(summaryValue(memory, "Natureza da visao"), "Calculada pelo validador");
  assert.equal(value(memory.sheets[1].rows.at(-1)[0]), api.exporter.dateCell("2026-10-09").value);
});

test("maturity caps projection and residual SUB is not fabricated", () => {
  const api = loadValidator();
  const cota = api.state.snapshot.passivo.cotas[0];
  cota.dataVencimentoIso = "2026-10-09";
  assert.equal(value(api.buildPuMemorySheets().sheets[2].rows.at(-1)[0]), api.exporter.dateCell("2026-10-09").value);
  cota.tipo = "sub";
  cota.classe = "SUB";
  cota.ehFunding = false;
  const memory = api.buildPuMemorySheets();
  assert.equal(memory.sheets[2].rows.length, 1);
  assert.match(summaryValue(memory, "Premissa da projecao"), /apenas historico/);
});

test("missing calendar, DI, stale history and loading state give explicit errors", () => {
  const api = loadValidator();
  api.state.loading = true;
  assert.throws(() => api.buildPuMemorySheets(), /Aguarde/);
  api.state.loading = false;
  const cota = api.state.snapshot.passivo.cotas[0];
  cota.pu += 1;
  assert.throws(() => api.buildPuMemorySheets(), /diverge/);
  cota.pu -= 1;
  cota.historicoPu.at(-1).taxaDiUtilizadaDia = 0;
  cota.historicoPu.at(-1).tdk = 0;
  assert.throws(() => api.buildPuMemorySheets(), /taxa DI valida/);
  cota.historicoPu.at(-1).taxaDiUtilizadaDia = 0.00050788;
  api.state.dateKey = "2028-01-03";
  cota.historicoPu.at(-1).dataIso = "2028-01-03";
  assert.throws(() => api.buildPuMemorySheets(), /calendario do Copom/);
});
