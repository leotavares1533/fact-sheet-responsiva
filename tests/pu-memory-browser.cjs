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
    const status = page.locator("#status-pill");
    const fundingUpdate = await page.evaluate(() => window.LAMINA_FUNDING_PU);
    assert.ok(fundingUpdate.vehicles["cra-carteira-73"]);
    const group = await page.evaluate(() => window.LAMINA_CRA_MANIFEST.find((row) => row.craId === "cra-carteira-73").groupId);
    await page.locator("#cra-selector").selectOption("group:" + group);
    await page.locator("#cra-child-selector").selectOption("cra-carteira-73");
    await status.filter({ hasText: "Funding:" }).waitFor();
    assert.equal(await page.locator("#date-selector").inputValue(), fundingUpdate.target);
    await page.locator("#pu-root").getByText("PU de " + fundingUpdate.target.split("-").reverse().join("/"), { exact: true }).waitFor();
    const pu8 = /^-?(?:\d{1,3}(?:\.\d{3})+|\d+),\d{8}$/;
    const detailForecast = page.locator(".forecast-class tbody tr");
    await detailForecast.first().waitFor();
    assert.equal(await detailForecast.count(), 5);
    const firstForecast = fundingUpdate.vehicles["cra-carteira-73"].series.CRA02600590.forecasts[fundingUpdate.target].rows[0];
    assert.equal(await detailForecast.first().locator("td").nth(3).textContent(),
      firstForecast.puAtualizado.toLocaleString("pt-BR", { minimumFractionDigits: 8, maximumFractionDigits: 8 }));
    assert.match(await page.locator(".forecast-class-head span").first().textContent(), pu8);
    await page.locator(".forecast-class").first().screenshot({ path: path.join(output, "forecast-desktop.png") });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.locator(".forecast-class").first().screenshot({ path: path.join(output, "forecast-mobile.png") });
    await page.setViewportSize({ width: 1440, height: 1000 });

    await page.locator("#cra-child-selector").selectOption("cra-carteira-51");
    await page.locator(".forecast-class-head").filter({ hasText: /Mezanino/i }).first().waitFor();
    assert.ok(await page.locator(".forecast-class").filter({ hasText: /Mezanino/i }).first().locator("tbody tr").count());

    await page.locator("#cra-child-selector").selectOption("cra-carteira-46");
    await page.locator(".forecast-class").getByText("Vencimento pendente de conciliacao", { exact: true }).waitFor();
    assert.equal(await detailForecast.count(), 0);

    const integralization = fundingUpdate.vehicles["cra-carteira-74"].series.CRA02600592.events?.at(-1);
    if (integralization) {
      await page.locator("#cra-child-selector").selectOption("cra-carteira-74");
      await page.getByText("5.640 títulos", { exact: true }).waitFor();
    }

    await page.locator("#cra-child-selector").selectOption("cras-carteira-overview");
    await page.locator(".overview-table tbody tr").filter({ hasText: "CRA02600590" })
      .getByText(fundingUpdate.target.split("-").reverse().join("/"), { exact: true }).waitFor();
    assert.ok((await page.locator(".overview-table tbody tr").filter({ hasText: "CRA02600590" })
      .locator("td.numeric strong").allTextContents()).some((text) => pu8.test(text)));

    await page.locator("#cra-selector").selectOption("cra:cra-65");
    const cra65FundingOnly = fundingUpdate.target > fundingUpdate.vehicles["cra-65"].sourceDate;
    await status.filter({ hasText: cra65FundingOnly ? "Funding:" : "Atualizado em" }).waitFor();
    assert.equal(await page.locator("#date-selector").inputValue(), fundingUpdate.target);
    if (cra65FundingOnly) {
      assert.equal(await page.locator("[data-cota-index]").count(), 2, "No residual SUB on the funding-only date");
    }
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
