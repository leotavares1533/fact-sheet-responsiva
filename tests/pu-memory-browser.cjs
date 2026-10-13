const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { createRequire } = require("node:module");

const bundledRequire = createRequire(path.join(process.env.USERPROFILE, ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json"));
const { chromium } = bundledRequire("playwright");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "tmp/pu-memory-tests");

(async () => {
  await fs.mkdir(output, { recursive: true });
  const browser = await chromium.launch({ channel: "msedge", headless: true });
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.addInitScript(() => {
      const email = "leonardo.silva@ceresinvestimentos.com";
      localStorage.setItem("lamina_prod_access_users_v1", JSON.stringify({ [email]: { name: "Leonardo", role: "admin", mustChangePassword: false } }));
      localStorage.setItem("lamina_prod_access_session_v1", JSON.stringify({ email, signedAt: new Date().toISOString() }));
    });
    await page.goto(pathToFileURL(path.join(root, "pu.html")).href);
    const button = page.locator("#export-pu-memory");
    await page.waitForFunction(() => !document.querySelector("#export-pu-memory").disabled);
    await page.locator("#cra-selector").selectOption("cra:cra-65");
    await page.waitForFunction(() => !document.querySelector("#export-pu-memory").disabled);
    await page.locator("#date-selector").fill("2026-10-07");
    await page.locator("#date-selector").dispatchEvent("change");
    await page.waitForFunction(() => !document.querySelector("#export-pu-memory").disabled && document.querySelector("#date-selector").value === "2026-10-07");
    await page.locator('[data-cota-index="1"]').click();
    const downloadPromise = page.waitForEvent("download");
    await button.click();
    const download = await downloadPromise;
    assert.match(download.suggestedFilename(), /cra-65-SR2-2026-10-07.xlsx$/);
    await download.saveAs(path.join(output, "cra65-sr2.xlsx"));
    await page.locator("#pu-memory-status").filter({ hasText: "exportada" }).waitFor({ state: "visible" });
    await page.screenshot({ path: path.join(output, "desktop.png") });

    await page.locator("#cra-selector").selectOption("cra:cra-modelo");
    await page.waitForFunction(() => !document.querySelector("#export-pu-memory").disabled);
    await page.locator("#date-selector").fill("2026-10-07");
    await page.locator("#date-selector").dispatchEvent("change");
    await page.waitForFunction(() => !document.querySelector("#export-pu-memory").disabled);
    const secondPromise = page.waitForEvent("download");
    await button.click();
    const second = await secondPromise;
    assert.match(second.suggestedFilename(), /cra-modelo-SR1-2026-10-07.xlsx$/);
    await second.saveAs(path.join(output, "cra42-sr1.xlsx"));

    await page.setViewportSize({ width: 390, height: 844 });
    const canvasWidth = await page.evaluate(() => document.documentElement.scrollWidth);
    await button.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, "mobile.png") });
    await page.locator(".base-switcher").screenshot({ path: path.join(output, "mobile-toolbar.png") });
    const bounds = await button.boundingBox();
    assert.ok(bounds.x >= 0 && bounds.x + bounds.width <= 391, "Export button must fit mobile viewport");
    // This app intentionally uses a wider, scrollable canvas on phones.
    await button.evaluate((node) => node.remove());
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth), canvasWidth, "Export must not widen the existing mobile canvas");
    assert.deepEqual(errors, []);
    console.log("Browser passed: CRA65 SR2 and CRA42 SR1 XLSX downloads, correct selection, desktop/mobile layout, no JS errors.");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
