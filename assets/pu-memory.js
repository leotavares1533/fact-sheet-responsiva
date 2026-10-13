(() => {
  "use strict";

  // Decision dates, not promises that the Copom will change the rate.
  const calendars = [
    { year: 2025, source: "https://www.bcb.gov.br/detalhenoticia/20184/nota", dates: ["01-29", "03-19", "05-07", "06-18", "07-30", "09-17", "11-05", "12-10"] },
    { year: 2026, source: "https://www.bcb.gov.br/detalhenoticia/20739/nota", dates: ["01-28", "03-18", "04-29", "06-17", "08-05", "09-16", "11-04", "12-09"] },
    { year: 2027, source: "https://www.bcb.gov.br/detalhenoticia/21173/nota", dates: ["01-27", "03-17", "04-28", "06-16", "08-04", "09-22", "10-27", "12-08"] }
  ];

  function nextCopom(dateKey) {
    if (!calendars.some((calendar) => calendar.year === Number(dateKey.slice(0, 4)))) return null;
    for (const calendar of calendars) {
      const date = calendar.dates.map((day) => `${calendar.year}-${day}`).find((day) => day >= dateKey);
      if (date) return { dateKey: date, source: calendar.source };
    }
    return null;
  }

  const escapeXml = (value) => String(value ?? "")
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&apos;");

  function columnName(index) {
    let name = "";
    for (let value = index + 1; value > 0; value = Math.floor((value - 1) / 26)) {
      name = String.fromCharCode(65 + (value - 1) % 26) + name;
    }
    return name;
  }

  function numberCell(value, style = 3) {
    return { value: value == null || value === "" ? null : Number(value), style };
  }

  function dateCell(dateKey) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(dateKey || "")) return "";
    const [year, month, day] = dateKey.split("-").map(Number);
    return numberCell((Date.UTC(year, month - 1, day) - Date.UTC(1899, 11, 30)) / 86400000, 2);
  }

  function worksheetXml(sheet) {
    const widths = sheet.widths || [];
    const rows = sheet.rows.map((row, index) => {
      const cells = row.map((entry, column) => {
        const cell = entry && typeof entry === "object" ? entry : { value: entry };
        const value = cell.value;
        if (value == null || value === "") return "";
        const reference = `${columnName(column)}${index + 1}`;
        const style = index === 0 ? 1 : cell.style ?? (sheet.summary ? 8 : 0);
        if (typeof value === "number") {
          if (!Number.isFinite(value)) throw new Error(`Valor invalido em ${sheet.name}!${reference}.`);
          return `<c r="${reference}" s="${style}"><v>${value}</v></c>`;
        }
        return `<c r="${reference}" s="${style}" t="inlineStr"><is><t xml:space="preserve">${escapeXml(value)}</t></is></c>`;
      }).join("");
      const height = index === 0 ? 36 : sheet.summary ? 32 : 20;
      return `<row r="${index + 1}" ht="${height}" customHeight="1">${cells}</row>`;
    }).join("");
    const lastColumn = columnName(Math.max(0, ...sheet.rows.map((row) => row.length - 1)));
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <dimension ref="A1:${lastColumn}${sheet.rows.length}"/>
        <sheetViews><sheetView workbookViewId="0" showGridLines="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
        <sheetFormatPr defaultRowHeight="20"/>
        <cols>${widths.map((width, index) => `<col min="${index + 1}" max="${index + 1}" width="${width}" customWidth="1"/>`).join("")}</cols>
        <sheetData>${rows}</sheetData>
        ${sheet.summary ? "" : `<autoFilter ref="A1:${lastColumn}${sheet.rows.length}"/>`}
        <pageMargins left="0.25" right="0.25" top="0.5" bottom="0.5" header="0.2" footer="0.2"/>
        <pageSetup orientation="landscape" paperSize="9"/>
      </worksheet>`;
  }

  function stylesXml() {
    const formats = ["dd/mm/yyyy", "0.00000000", "#,##0.00;[Red](#,##0.00)", "0.00000000%", "0.0000000000000000", "#,##0"];
    const styles = formats.map((_, index) => `<xf numFmtId="${164 + index}" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>`).join("");
    return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
      <styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
        <numFmts count="6">${formats.map((format, index) => `<numFmt numFmtId="${164 + index}" formatCode="${escapeXml(format)}"/>`).join("")}</numFmts>
        <fonts count="2"><font><sz val="11"/><name val="Calibri"/><color rgb="FF172B35"/></font><font><b/><sz val="11"/><name val="Calibri"/><color rgb="FFFFFFFF"/></font></fonts>
        <fills count="3"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FF103845"/><bgColor indexed="64"/></patternFill></fill></fills>
        <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
        <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
        <cellXfs count="9">
          <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
          <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
          ${styles}
          <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="center" wrapText="1"/></xf>
        </cellXfs>
        <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
      </styleSheet>`;
  }

  async function createWorkbook(sheets) {
    if (!window.JSZip) throw new Error("Nao foi possivel carregar o gerador de Excel. Recarregue a pagina.");
    const zip = new window.JSZip();
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>';
    zip.file("[Content_Types].xml", `${xmlHeader}<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
      <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/>
      <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
      <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
      ${sheets.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`);
    zip.file("_rels/.rels", `${xmlHeader}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`);
    zip.file("xl/workbook.xml", `${xmlHeader}<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${sheets.map((sheet, i) => `<sheet name="${escapeXml(sheet.name)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join("")}</sheets></workbook>`);
    zip.file("xl/_rels/workbook.xml.rels", `${xmlHeader}<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${sheets.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("")}<Relationship Id="rId${sheets.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
    zip.file("xl/styles.xml", stylesXml());
    sheets.forEach((sheet, i) => zip.file(`xl/worksheets/sheet${i + 1}.xml`, worksheetXml(sheet)));
    return zip.generateAsync({ type: "blob", compression: "DEFLATE", mimeType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
  }

  window.LAMINA_PU_MEMORY = { nextCopom, dateCell, numberCell, createWorkbook };
})();
