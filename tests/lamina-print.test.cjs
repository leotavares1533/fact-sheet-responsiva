const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const {test} = require("node:test");

function deferred() {
  let resolve, reject;
  const promise = new Promise((yes, no) => { resolve = yes; reject = no; });
  return {promise, resolve, reject};
}

function snapshot(craId, dateKey = "2026-11-09", overview = false) {
  return {metadata: {craId, dateKey, reportDate: dateKey, portfolioOverview: overview},
    portfolioOverview: overview ? {assetRows: [{}]} : undefined};
}

function loadApp(fontReady = Promise.resolve()) {
  const nodes = new Map(), classes = new Set(), rendered = [];
  const classList = {
    add: name => classes.add(name), remove: name => classes.delete(name), contains: name => classes.has(name),
    toggle(name, flag) { if (flag) classes.add(name); else classes.delete(name); }
  };
  const document = {body: {classList}, fonts: {ready: fontReady}, title: "", getElementById(id) {
    if (!nodes.has(id)) nodes.set(id, {textContent: "", innerHTML: "", dataset: {}, value: "", tagName: "INPUT", disabled: false,
      addEventListener() {}, setAttribute() {}});
    return nodes.get(id);
  }};
  const dates = ["2026-11-06", "2026-11-09"].map(dateKey => ({dateKey, dataScript: `${dateKey}.js`, assetImported: true}));
  const window = {LAMINA_CRA_MANIFEST: ["cra-modelo", "cra-65", "cras-carteira-overview"].map(craId => ({craId, name: craId, dates})),
    LAMINA_AUTH: {currentUser: () => ({role: "admin"})}, LAMINA_CARTEIRA_REPORT_VIEW: {render: () => ""},
    LAMINA_CARTEIRA_REPORT: {build: () => ({vehicles: []})}, printCount: 0, rendered,
    print() { this.printCount += 1; }, setTimeout: fn => fn()};
  const context = vm.createContext({window, document, Date, Set, Map, console, requestAnimationFrame: fn => fn()});
  const source = fs.readFileSync(path.join(__dirname, "../assets/app.js"), "utf8");
  const marker = "      initCraApp();";
  assert.ok(source.includes(marker));
  vm.runInContext(source.replace(marker, `
    renderSummary = snapshot => window.rendered.push(snapshot.metadata.craId + "/" + snapshot.metadata.dateKey);
    renderSections = () => {};
    renderSources = () => {};
    renderTimeline = () => {};
    window.testPrint = {state, selectDate, renderSnapshot, printReport, needsCarteiraCirculation,
      setLoader(loader) { loadSnapshot = loader; }};`), context);
  return {...window.testPrint, window, document, nodes, classes, rendered};
}

for (const cra of ["cra-modelo", "cra-65"]) {
  test(`${cra} prints independently of an unfinished Carteira summary and stale CSS`, async () => {
    const api = loadApp();
    Object.assign(api.state, {craId: cra, dateKey: "2026-11-09", snapshot: snapshot(cra), circulationModel: null});
    api.classes.add("carteira-circulation-view");
    await api.printReport();
    assert.equal(api.window.printCount, 1);
    assert.doesNotMatch(api.nodes.get("status-pill").textContent, /resumos/);
  });
}

test("Carteira overview still requires the individual summaries before printing", async () => {
  const api = loadApp();
  Object.assign(api.state, {craId: "cras-carteira-overview", dateKey: "2026-11-09", snapshot: snapshot("cras-carteira-overview", "2026-11-09", true)});
  await api.printReport();
  assert.equal(api.window.printCount, 0);
  assert.match(api.nodes.get("status-pill").textContent, /resumos dos CRAs/);
});

test("a delayed overview cannot replace the selected CRA 42 or trigger its summary loader", async () => {
  const api = loadApp(), old = deferred();
  api.setLoader(cra => cra === "cras-carteira-overview" ? old.promise : Promise.resolve(snapshot(cra)));
  api.state.craId = "cras-carteira-overview";
  const pending = api.selectDate("2026-11-09");
  api.state.craId = "cra-modelo";
  await api.selectDate("2026-11-09");
  old.resolve(snapshot("cras-carteira-overview", "2026-11-09", true));
  await pending;
  assert.equal(api.state.snapshot.metadata.craId, "cra-modelo");
  assert.equal(api.rendered.join(","), "cra-modelo/2026-11-09");
  assert.equal(api.classes.has("carteira-circulation-view"), false);
  assert.equal(api.nodes.get("print-button").disabled, false);
  await api.printReport();
  assert.equal(api.window.printCount, 1);
});

test("older date responses and errors cannot overwrite the latest selection", async () => {
  for (const fails of [false, true]) {
    const api = loadApp(), old = deferred();
    api.state.craId = "cra-65";
    api.setLoader((cra, key) => key === "2026-11-06" ? old.promise : Promise.resolve(snapshot(cra, key)));
    const pending = api.selectDate("2026-11-06");
    await api.selectDate("2026-11-09");
    if (fails) old.reject(new Error("Old request failed")); else old.resolve(snapshot("cra-65", "2026-11-06"));
    await pending;
    assert.equal(api.state.snapshot.metadata.dateKey, "2026-11-09");
    assert.equal(api.rendered.join(","), "cra-65/2026-11-09");
    assert.doesNotMatch(api.nodes.get("status-pill").textContent, /Erro/);
  }
});

test("switching positions clears the old print state until that position is available", async () => {
  const api = loadApp(), next = deferred();
  Object.assign(api.state, {craId: "cra-65", dateKey: "2026-11-06", snapshot: snapshot("cra-65", "2026-11-06")});
  api.setLoader(() => next.promise);
  const pending = api.selectDate("2026-11-09");
  assert.equal(api.state.snapshot, null);
  await api.printReport();
  assert.equal(api.window.printCount, 0);
  next.resolve(snapshot("cra-65"));
  await pending;
  await api.printReport();
  assert.equal(api.window.printCount, 1);
});

test("a selection change while fonts load cancels the outdated print", async () => {
  const fonts = deferred(), api = loadApp(fonts.promise);
  Object.assign(api.state, {craId: "cra-modelo", dateKey: "2026-11-09", snapshot: snapshot("cra-modelo")});
  const printing = api.printReport();
  api.state.craId = "cra-65";
  api.setLoader(cra => Promise.resolve(snapshot(cra)));
  await api.selectDate("2026-11-09");
  fonts.resolve();
  await printing;
  assert.equal(api.window.printCount, 0);
  assert.equal(api.classes.has("is-printing-report"), false);
});

test("an inherited overview flag does not make CRA 42 wait for the 30 summaries", () => {
  const api = loadApp();
  Object.assign(api.state, {craId: "cra-modelo", dateKey: "2026-11-09"});
  assert.equal(api.needsCarteiraCirculation(snapshot("cra-modelo", "2026-11-09", true)), false);
});
