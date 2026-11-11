const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const http = require("node:http");
const path = require("node:path");
const {chromium} = require("C:/Program Files/WindowsApps/OpenAI.CodexPrimaryRuntime.v26-1105-1297-0_26.1105.1297.0_x64__3k8sg7r9htsxt/dependencies/node/node_modules/playwright");

const root = path.resolve(__dirname, "..");
const output = path.join(root, "tmp/pdfs/lamina-print-isolated");
const mime = {".html":"text/html", ".js":"text/javascript", ".css":"text/css", ".png":"image/png", ".svg":"image/svg+xml"};
const gate = () => { let resolve; const promise = new Promise(done => { resolve = done; }); return {promise, resolve}; };

(async () => {
  await fs.mkdir(output, {recursive:true});
  const server = http.createServer(async (req, res) => {
    const pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
    const file = path.resolve(root, "." + (pathname === "/" ? "/index.html" : pathname));
    if (!file.startsWith(root + path.sep)) { res.writeHead(403); res.end(); return; }
    try { res.writeHead(200, {"Content-Type":(mime[path.extname(file)] || "application/octet-stream") + "; charset=utf-8"}); res.end(await fs.readFile(file)); }
    catch { res.writeHead(404); res.end(); }
  });
  await new Promise(done => server.listen(0, "127.0.0.1", done));
  const browser = await chromium.launch({channel:"msedge", headless:true});
  const slowSummary = gate(), summaryStarted = gate(), slowDate = gate(), dateStarted = gate();
  try {
    const page = await browser.newPage({viewport:{width:1440,height:1000}});
    const errors = [], children = [];
    page.on("pageerror", error => errors.push(error.message));
    page.on("request", request => {
      if (/\/data\/cras\/cra-carteira-\d+\//.test(request.url())) children.push(request.url());
    });
    await page.addInitScript(() => {
      const email = "leonardo.silva@ceresinvestimentos.com";
      localStorage.setItem("lamina_prod_access_users_v1", JSON.stringify({[email]:{name:"Leonardo",role:"admin",mustChangePassword:false}}));
      localStorage.setItem("lamina_prod_access_session_v1", JSON.stringify({email,signedAt:new Date().toISOString()}));
      window.__printed = [];
      window.print = () => window.__printed.push({cra:document.querySelector("#cra-selector").value,
        date:document.querySelector("#date-selector").value, meta:document.querySelector("#print-meta").textContent});
    });
    await page.route("**/data/cras/cra-carteira-44/**", async route => {
      summaryStarted.resolve(); await slowSummary.promise; await route.continue();
    });
    await page.goto(`http://127.0.0.1:${server.address().port}/index.html`);
    await page.waitForFunction(() => !document.querySelector("#print-button").disabled);
    await page.locator("#cra-selector").selectOption("group:cras-carteira");
    await summaryStarted.promise;
    assert.equal(await page.locator("#print-button").isDisabled(), true);

    for (const [cra, name] of [["cra-modelo", "CRA42"], ["cra-65", "CRA65"]]) {
      await page.locator("#cra-selector").selectOption(`cra:${cra}`);
      await page.waitForFunction(() => !document.querySelector("#print-button").disabled && !document.body.classList.contains("carteira-circulation-view"));
      assert.equal(await page.locator("#carteira-circulation").count(), 0);
      assert.doesNotMatch(await page.locator("#status-pill").textContent(), /resumos/);
      await page.locator("#print-button").click();
      await page.waitForFunction(count => window.__printed.length === count, name === "CRA42" ? 1 : 2);
      assert.equal((await page.evaluate(() => window.__printed.at(-1))).cra, `cra:${cra}`);
      await page.pdf({path:path.join(output, `${name}.pdf`), preferCSSPageSize:true, printBackground:true});
      await page.screenshot({path:path.join(output, `${name}.png`)});
      console.log(`${name}: PDF triggered without waiting for the pending Carteira summary`);
    }
    assert.equal(children.length, 1, "No other Carteira snapshots should be fetched after switching away");
    slowSummary.resolve();
    await page.waitForTimeout(500);
    assert.equal(await page.locator("#cra-selector").inputValue(), "cra:cra-65");
    assert.equal(await page.locator("#carteira-circulation").count(), 0);

    await page.route("**/data/cras/cra-modelo/2026-11-06.js*", async route => {
      dateStarted.resolve(); await slowDate.promise; await route.continue();
    });
    await page.locator("#cra-selector").selectOption("cra:cra-modelo");
    await page.waitForFunction(() => !document.querySelector("#print-button").disabled);
    await page.locator("#date-selector").fill("2026-11-06");
    await page.locator("#date-selector").dispatchEvent("change");
    await dateStarted.promise;
    await page.locator("#date-selector").fill("2026-11-09");
    await page.locator("#date-selector").dispatchEvent("change");
    await page.waitForFunction(() => !document.querySelector("#print-button").disabled);
    slowDate.resolve();
    await page.waitForTimeout(500);
    assert.match(await page.locator("#print-meta").textContent(), /09\/11\/2026/);
    assert.equal(await page.locator("#date-selector").inputValue(), "2026-11-09");

    await page.locator("#cra-selector").selectOption("group:cras-carteira");
    await page.waitForFunction(() => document.querySelectorAll(".vehicle-block").length === 30 && !document.querySelector("#print-button").disabled, {}, {timeout:120000});
    assert.equal(await page.locator(".report-page").count(), 11);
    assert.deepEqual(errors, []);
    console.log("Browser passed: isolated CRA42/65 PDFs, delayed response ignored, full 30-CRA overview preserved.");
  } finally {
    slowSummary.resolve(); slowDate.resolve();
    await browser.close(); await new Promise(done => server.close(done));
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
