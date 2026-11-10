(function () {
  "use strict";
  const rounded = (value, places) => Number(Number(value).toFixed(places));
  const truncated = (value, places) => Math.trunc(Number(value) * 10 ** places + 1e-9) / 10 ** places;
  const nextDay = (key) => new Date(Date.parse(key + "T12:00:00Z") + 86400000).toISOString().slice(0, 10);

  function lateTerms(cota) {
    const rules = cota.encargosMora;
    return rules?.status === "validado" && rules.baseAnual === 252 && rules.capitalizacao === "composta"
      && rules.dataInadimplementoIso === cota.dataVencimentoIso ? rules : null;
  }

  function withCharges(cota, row, isBusinessDay) {
    const rules = lateTerms(cota);
    if (!rules) return row;
    let days = 0;
    for (let day = rules.dataInadimplementoIso; day < row.dataIso;) {
      day = nextDay(day);
      if (isBusinessDay(day)) days += 1;
    }
    const ordinary = Number(row.puSemEncargos ?? row.puAtualizado);
    const factor = Math.pow(1 + rules.taxaMoraMensal, days * 12 / 252);
    const fine = row.dataIso > rules.dataInadimplementoIso ? truncated(ordinary * rules.multaPercentual, 8) : 0;
    const interest = truncated(ordinary * (factor - 1), 8);
    const pu = rounded(ordinary + fine + interest, 8);
    return { ...row, puSemEncargos: ordinary, puJurosRemuneratorios: ordinary - row.valorNominal,
      puMulta: fine, puMora: interest, puEncargosMoratorios: fine + interest,
      diasUteisMora: days, fatorMora: factor, baseAnualMora: 252,
      puAtualizado: pu, puAntesEvento: pu, puAposEvento: pu,
      puJuros: pu - row.valorNominal, valorReais: pu * row.quantidade };
  }

  function project(cota, opening, source, target, calendar) {
    const nominal = Number(opening.valorNominal ?? cota.principalResidual);
    const base = Number(opening.puBaseCalculo ?? nominal);
    const ordinary = Number(opening.puSemEncargos ?? opening.puAtualizado ?? cota.pu);
    let product = Number(opening.produtorioFatorDi || 1);
    let days = Number(opening.diasUteisPeriodo ?? 0);
    const initialDays = days;
    const value = () => {
      const spread = rounded(Math.pow(1 + Number(cota.spreadAa || 0), days / 252), 9);
      const factor = rounded(rounded(product, 8) * spread, 9);
      const principal = truncated(base, 8);
      return { pu: principal + truncated(principal * (factor - 1), 8), factor };
    };
    const initial = value().pu;
    const rows = [];
    for (let key = source; key < target;) {
      key = nextDay(key);
      const business = calendar.isBusinessDay(key);
      const rate = calendar.rateInfo(key);
      if (!(rate.dailyRate > 0)) throw new Error("Taxa DI indisponivel para a memoria contratual.");
      const daily = rounded(rate.dailyRate, 8);
      if (business) {
        product = truncated(product * (1 + daily * Number(cota.percentualIndexador || 1)), 16);
        days += 1;
      }
      const detail = value();
      const pu = rounded(ordinary + detail.pu - initial, 8);
      rows.push(withCharges(cota, { ...rate, dataIso: key, data: calendar.formatDate(key), diaUtil: business,
        diasUteis: Number(opening.diasUteis || 0) + days - initialDays, diasUteisPeriodo: days,
        quantidade: Number(cota.quantidade), valorNominal: nominal, puBaseCalculo: base,
        puAtualizado: pu, puJuros: pu - nominal, valorReais: pu * Number(cota.quantidade),
        puAntesEvento: pu, puAposEvento: pu, puEvento: 0, valorEventoReais: 0, evento: "",
        taxaDiUtilizadaDia: daily, taxaDiAnualEquivalente: rate.annualRate,
        tdk: daily, fatorDiario: business ? 1 + daily : 1,
        produtorioFatorDi: product, fatorDiAcumulado: product, fatorJurosAcumulado: detail.factor,
        fator: detail.factor, spread: cota.spreadAa, lagBusinessDays: cota.lagBusinessDays,
        taxaDiStatus: "projetada" }, calendar.isBusinessDay));
    }
    return { projectedRows: rows, context: { pu: rows.at(-1)?.puAtualizado ?? cota.pu, principal: nominal } };
  }

  window.LAMINA_FUNDING_CONTRACT = { lateTerms, withCharges, project };
}());
