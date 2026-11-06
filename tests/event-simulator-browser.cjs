const assert = require("node:assert/strict");
const fs = require("node:fs/promises");
const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { createRequire } = require("node:module");

const bundledRequire = createRequire(path.join(process.env.USERPROFILE,
  ".cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json"));
const { chromium } = bundledRequire("playwright");
const root = path.resolve(__dirname, "..");
const output = path.join(root, "tmp/event-simulator-tests");
const number = (value) => Number(value.replace(/[^\d,-]/g, "").replace(",", "."));
const money = (value) => value.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
    await page.goto(pathToFileURL(path.join(root, "simulador-eventos.html")).href);
    await page.locator("#status-pill").filter({ hasText: /series carregadas/ }).waitFor({ timeout: 60000 });
    assert.equal(await page.locator("#event-rows input:checked").count(), 0, "Series and event flags start unselected");
    await page.locator("#series-filter").fill("CRA 63");
    const rows = page.locator('tr[data-row-id^="cra-carteira-63::"]');
    assert.ok(await rows.count() >= 2, "Real CRA must have more than one active series");
    const srId = await rows.first().getAttribute("data-row-id");
    const juniorId = await rows.nth(1).getAttribute("data-row-id");
    const senior = () => page.locator(`tr[data-row-id="${srId}"]`);
    const junior = () => page.locator(`tr[data-row-id="${juniorId}"]`);
    const seniorCash = () => senior().locator("[data-row-cash]");
    assert.equal(await junior().locator("[data-row-cash]").isDisabled(), true);
    assert.equal(await junior().locator("[data-row-select]").isDisabled(), true);
    const payoff = Math.round(number(await senior().locator('[data-cell="puBefore"]').textContent())
      * number(await senior().locator("td").nth(4).textContent()) * 100) / 100;
    await seniorCash().fill(money(payoff + 10000));
    await seniorCash().dispatchEvent("change");
    assert.equal(await senior().locator("[data-row-select]").isChecked(), false);
    assert.equal(await page.locator("#event-rows input:checked").count(), 0, "Typing cash must not select anything");
    await senior().locator("[data-row-select]").check();
    await senior().locator('[data-row-type="interest"]').check();
    await senior().locator('[data-row-type="rescue"]').check();
    assert.equal(number(await seniorCash().inputValue()), payoff);
    assert.equal(await senior().locator('[data-row-type="ordinaryAmortization"]').isChecked(), false);
    assert.equal(await senior().locator('[data-row-type="ordinaryAmortization"]').isDisabled(), true);
    assert.equal(await senior().locator('[data-row-type="amex"]').isChecked(), false);
    assert.equal(await senior().locator('[data-row-type="amex"]').isDisabled(), true);
    for (const key of ["interest", "rescue", "premium"]) assert.equal(await senior().locator(`[data-row-type="${key}"]`).isDisabled(), false);
    assert.equal(await junior().locator("[data-row-cash]").isDisabled(), false);
    assert.equal(number(await junior().locator("[data-row-cash]").inputValue()), 10000);
    assert.equal(await junior().locator("[data-row-select]").isChecked(), false);
    assert.equal(number(await junior().locator('[data-cell="eventValue"]').textContent()), 0);
    assert.equal(number(await senior().locator('[data-cell="puAfter"]').textContent()), 0);

    await senior().locator('[data-row-type="premium"]').check();
    await senior().locator("[data-row-premium-value]").fill("2.000,00");
    await senior().locator("[data-row-premium-value]").dispatchEvent("change");
    assert.equal(number(await seniorCash().inputValue()), payoff + 2000);
    assert.equal(number(await junior().locator("[data-row-cash]").inputValue()), 8000);
    await senior().locator("[data-row-premium-mode]").selectOption("percent");
    await senior().locator("[data-row-premium-value]").fill("0,01");
    await senior().locator("[data-row-premium-value]").dispatchEvent("change");
    const principal = (number(await senior().locator('[data-cell="puBefore"]').textContent())
      - number(await senior().locator('[data-cell="interestPu"]').textContent()))
      * number(await senior().locator("td").nth(4).textContent());
    const premium = Math.round(principal * 0.0001 * 100) / 100;
    assert.equal(number(await seniorCash().inputValue()), payoff + premium);
    assert.equal(await junior().locator("[data-row-select]").isChecked(), false);
    await senior().locator('[data-row-type="rescue"]').uncheck();
    assert.equal(await junior().locator("[data-row-cash]").isDisabled(), true);
    await senior().locator('[data-row-type="rescue"]').check();
    await junior().locator("[data-row-select]").check();
    assert.equal(number(await junior().locator('[data-cell="eventValue"]').textContent()), 0);
    await junior().locator('[data-row-type="interest"]').check();
    await page.locator(".simulator-table-wrap").evaluate((element) => { element.scrollLeft = 500; });
    await page.screenshot({ path: path.join(output, "desktop-waterfall.png"), fullPage: true });

    const downloadPromise = page.waitForEvent("download");
    await page.locator("#export-af-excel").click();
    const download = await downloadPromise;
    await download.saveAs(path.join(output, "waterfall-af.xlsx"));

    await seniorCash().fill(money(payoff * 0.8));
    await seniorCash().dispatchEvent("change");
    assert.equal(await junior().locator("[data-row-cash]").isDisabled(), true);
    assert.equal(await junior().locator('[data-row-type="amex"]').isDisabled(), true);
    assert.equal(number(await junior().locator('[data-cell="eventValue"]').textContent()), 0);
    assert.equal(await senior().locator('[data-row-type="amex"]').isDisabled(), false);
    await page.locator("#clear-selection").click();

    await page.locator("#series-filter").fill("CRA 74");
    const single = page.locator('tr[data-row-id^="cra-carteira-74::"]');
    assert.equal(await single.count(), 1);
    await single.locator("[data-row-cash]").fill("50.000.000,00");
    await single.locator("[data-row-cash]").dispatchEvent("change");
    assert.equal(await single.locator("[data-row-select]").isChecked(), false);
    await single.locator("[data-row-select]").check();
    await single.locator('[data-row-type="interest"]').check();
    await single.locator('[data-row-type="rescue"]').check();
    assert.equal(await single.locator('[data-row-type="amex"]').isDisabled(), true);
    assert.equal(await single.locator('[data-row-type="ordinaryAmortization"]').isChecked(), false);
    assert.equal(await single.locator('[data-row-type="rescue"]').isChecked(), true);
    assert.equal(number(await single.locator('[data-cell="puAfter"]').textContent()), 0);
    assert.ok(number(await single.locator("[data-row-cash]").inputValue()) < 50000000);
    await single.locator('[data-row-type="premium"]').check();
    await single.locator("[data-row-premium-value]").fill("1.234,56");
    await single.locator("[data-row-premium-value]").dispatchEvent("change");
    assert.equal(number(await single.locator('[data-cell="puAfter"]').textContent()), 0);
    await page.screenshot({ path: path.join(output, "desktop-single.png"), fullPage: true });

    await page.setViewportSize({ width: 390, height: 844 });
    await single.locator("[data-row-premium-value]").scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(output, "mobile-single.png"), animations: "disabled", timeout: 60000 });
    await single.locator(".sim-premium-controls").screenshot({ path: path.join(output, "mobile-premium.png"), animations: "disabled", timeout: 60000 });
    const size = await page.locator(".simulator-table-wrap").evaluate((element) => ({
      width: element.clientWidth, content: element.scrollWidth,
      left: element.getBoundingClientRect().left, right: element.getBoundingClientRect().right
    }));
    assert.ok(size.content > size.width, "Financial table retains horizontal scrolling");
    const { canvasWidth, scrollX } = await page.evaluate(() => ({
      canvasWidth: Math.max(document.documentElement.scrollWidth, document.body.scrollWidth), scrollX: window.scrollX
    }));
    // The existing mobile layout deliberately retains a wider, scrollable financial canvas.
    assert.ok(size.left + scrollX >= 0 && size.right + scrollX <= canvasWidth,
      `Table stays within mobile canvas: ${JSON.stringify({ size, canvasWidth, scrollX })}`);
    const metricsFit = await page.locator(".sim-detail-metrics strong").evaluateAll((elements) => elements.every((element) =>
      element.scrollWidth <= element.clientWidth));
    assert.equal(metricsFit, true, "Eight-decimal PUs must not overlap adjacent values");
    assert.deepEqual(errors, []);
    console.log("Passed: manual selection only, interest/redemption payoff, editable premiums in reais and % of current principal, waterfall, XLSX export, desktop/mobile, no JS errors.");
  } finally {
    await browser.close();
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
