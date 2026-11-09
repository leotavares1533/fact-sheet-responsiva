const test=require('node:test');
const assert=require('node:assert/strict');
require('../assets/cra-carteira-report-model.js');
const m=globalThis.LAMINA_CARTEIRA_REPORT;
test('aging uses calendar maturity and retains all VP',()=>{
 const rows=[['2026-11-05',10],['2026-11-04',20],['2026-10-06',30],['2026-10-05',40],['',50]].map(([d,v])=>({dataVencimentoIso:d,valorPresenteDia:v,valorNominal:v}));
 const a=m.aging(rows,'2026-11-05');
 assert.equal(a[0].vp,10);assert.equal(a[1].vp,50);assert.equal(a[2].vp,40);assert.equal(a[8].vp,50);
 assert.equal(a.reduce((s,r)=>s+r.vp,0),150);
});
test('ranking groups and sorts by VP rather than nominal',()=>{
 const r=m.rank([{cedente:'B',valorPresenteDia:3,valorNominal:999},{cedente:'A',valorPresenteDia:2,valorNominal:2},{cedente:'A',valorPresenteDia:2,valorNominal:2}],'cedente',10);
 assert.equal(r[0].name,'A');assert.equal(r[0].vp,4);
});
test('subscription price is not treated as income',()=>{
 const c={historicoPu:[{dataIso:'2026-11-04',puAtualizado:1000},{dataIso:'2026-11-05',puAtualizado:1001}],eventosAplicados:[{tipo:'integralizacao',dataIso:'2026-11-05',puEvento:1001}]};
 assert.ok(Math.abs(m.fundingReturn(c,'2026-11-05','day')-.001)<1e-12);
});
test('payment is excluded from negative apparent return',()=>{
 const c={historicoPu:[{dataIso:'2026-11-04',puAtualizado:1020},{dataIso:'2026-11-05',puAtualizado:1000}],eventosAplicados:[{tipo:'juros_amortizacao',dataIso:'2026-11-05',puEvento:21}]};
 assert.ok(Math.abs(m.fundingReturn(c,'2026-11-05','day')-(1021/1020-1))<1e-12);
});
const fixture=()=>({metadata:{craId:'cra-carteira-44',assetDateKey:'2026-11-05',cashDateKey:'2026-11-05'},carteira:[{valorPresenteDia:100,valorNominal:101,dataVencimentoIso:'2026-12-01',taxaOp:.02}],caixa:{total:10,accounts:{}},passivo:{fundingTotal:90,subordinadaTotal:20,subordinadaQuantidade:100,subordinadaPuResidual:.2,cotas:[]}});
test('cash and liability reconcile exactly once',()=>{const x=m.build([fixture()],'2026-11-05');assert.equal(x.sub,20);assert.equal(x.cash,10);assert.equal(x.vp,100);});
test('pro forma mixing dates is excluded from common-date circulation',()=>{const x=fixture();x.metadata.assetDateKey='2026-11-04';assert.throws(()=>m.build([x],'2026-11-05'));});
test('inconsistent sub must not be printed',()=>{const x=fixture();x.passivo.subordinadaTotal=25;assert.throws(()=>m.build([x],'2026-11-05'));});
