(function (root) {
  "use strict";
  const sum = (rows, key) => rows.reduce((total, row) => total + Number(row[key] || 0), 0);
  const active = snapshot => (snapshot.carteira || []).filter(r => Number(r.valorPresenteDia) > 0);
  function rank(rows, key, count) {
    const groups = new Map();
    for (const row of rows) {
      const name = row[key] || "Nao informado";
      const item = groups.get(name) || { name, nominal: 0, vp: 0, due: "" };
      item.nominal += Number(row.valorNominal || 0);
      item.vp += Number(row.valorPresenteDia || 0);
      item.due = [item.due, row.dataVencimentoIso || ""].sort().at(-1);
      groups.set(name, item);
    }
    return [...groups.values()].sort((a, b) => b.vp - a.vp || a.name.localeCompare(b.name)).slice(0, count);
  }
  function aging(rows, cutoff) {
    const result = ["Vincendos", "1 a 30 dias", "31 a 60 dias", "61 a 90 dias", "91 a 120 dias", "121 a 150 dias", "151 a 180 dias", "Acima de 180 dias", "Sem vencimento"].map(name => ({ name, vp: 0, nominal: 0, due: "" }));
    for (const row of rows) {
      const due = row.dataVencimentoIso;
      const days = due ? Math.round((Date.parse(cutoff) - Date.parse(due)) / 86400000) : null;
      const index = days === null ? 8 : days <= 0 ? 0 : days <= 30 ? 1 : days <= 60 ? 2 : days <= 90 ? 3 : days <= 120 ? 4 : days <= 150 ? 5 : days <= 180 ? 6 : 7;
      result[index].vp += Number(row.valorPresenteDia || 0);
      result[index].nominal += Number(row.valorNominal || 0);
      result[index].due = [result[index].due, due || ""].sort().at(-1);
    }
    return result;
  }
  function knownRate(rows, cutoff) {
    const scoped = rows.filter(r => r.dataVencimentoIso >= cutoff && Number(r.taxaOp) > 0);
    const weight = sum(scoped, "valorPresenteDia");
    return weight ? scoped.reduce((t, r) => t + r.valorPresenteDia * r.taxaOp, 0) / weight : null;
  }
  function fundingReturn(cota, cutoff, period) {
    const history = (cota.historicoPu || []).filter(r => r.dataIso <= cutoff).sort((a, b) => a.dataIso.localeCompare(b.dataIso));
    if (history.length < 2 || history.at(-1).dataIso !== cutoff) return null;
    const start = period === "month" ? cutoff.slice(0, 7) + "-01" : cutoff;
    const before = history.filter(r => r.dataIso < start).at(-1);
    if (!before || !(before.puAtualizado > 0)) return null;
    let previous = before.puAtualizado, factor = 1;
    for (const row of history.filter(r => r.dataIso >= start)) {
      const paid = (cota.eventosAplicados || []).filter(e => e.dataIso === row.dataIso && e.tipo !== "integralizacao")
        .reduce((t, e) => t + Number(e.puEvento || 0), 0);
      if (!(previous > 0)) return null;
      factor *= (Number(row.puAtualizado) + paid) / previous;
      previous = Number(row.puAtualizado);
    }
    return factor - 1;
  }
  function build(snapshots, cutoff) {
    const vehicles = snapshots.map(snapshot => {
      if (snapshot.metadata?.fundingCashOnly || snapshot.metadata?.assetDateKey !== cutoff || snapshot.metadata?.cashDateKey !== cutoff) {
        throw new Error("Carteira e caixa nao estao conciliados na data escolhida.");
      }
      const rows = active(snapshot), p = snapshot.passivo;
      const vp = sum(rows, "valorPresenteDia"), cash = Number(snapshot.caixa.total), funding = Number(p.fundingTotal);
      if (Math.abs(vp + cash - funding - p.subordinadaTotal) > .01 || Math.abs(p.subordinadaPuResidual * p.subordinadaQuantidade - p.subordinadaTotal) > .01) {
        throw new Error("Divergencia na composicao da subordinada.");
      }
      return { id: snapshot.metadata.craId, number: Number(snapshot.metadata.craId.split("-").at(-1)),
        rows, vp, nominal: sum(rows, "valorNominal"), cash, funding, asset: vp + cash,
        sub: p.subordinadaTotal, pu: p.subordinadaPuResidual, quantity: p.subordinadaQuantidade,
        rate: knownRate(rows, cutoff), due: rows.map(r => r.dataVencimentoIso || "").sort().at(-1),
        reserve: Number(snapshot.caixa.accounts?.fundoDespesas || snapshot.caixa.accounts?.reservaDespesas || 0),
        cedentes: rank(rows, "cedente", 5), sacados: rank(rows, "sacado", 5), aging: aging(rows, cutoff),
        series: p.cotas.filter(c => c.ehFunding).map(c => ({ ...c, dailyReturn: fundingReturn(c, cutoff, "day"), monthlyReturn: fundingReturn(c, cutoff, "month") })) };
    }).sort((a, b) => a.number - b.number);
    const rows = vehicles.flatMap(v => v.rows);
    const model = { cutoff, vehicles, vp: sum(vehicles, "vp"), nominal: sum(vehicles, "nominal"), cash: sum(vehicles, "cash"),
      funding: sum(vehicles, "funding"), sub: sum(vehicles, "sub"), rate: knownRate(rows, cutoff),
      cedentes: rank(rows, "cedente", 10), sacados: rank(rows, "sacado", 10), aging: aging(rows, cutoff) };
    if (Math.abs(sum(model.aging, "vp") - model.vp) > .01) throw new Error("Aging nao fecha com o valor presente.");
    return model;
  }
  root.LAMINA_CARTEIRA_REPORT = { build, aging, rank, fundingReturn };
})(globalThis);
