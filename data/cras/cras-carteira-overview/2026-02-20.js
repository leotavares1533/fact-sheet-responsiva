window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-02-20"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "20/02/2026",
    "dateKey": "2026-02-20",
    "importedAt": "2026-07-29T09:58:04.025644-03:00",
    "revisionId": "20260220-cras-carteira-overview-assets",
    "portfolioOverview": true,
    "portfolioConsolidado": true,
    "assetImport": {
      "sourceFile": "C:\\Users\\leonardo.silva\\Downloads\\CARTEIRA_CAIXA_CCs_total.xlsx",
      "sheetCarteira": "carteira ",
      "sheetCaixa": "caixa ",
      "importMode": "carteira-caixa-consolidado"
    }
  },
  "cra": {
    "id": "cras-carteira-overview",
    "name": "CRAs Carteira - Visao geral",
    "description": "Resumo consolidado de carteira, caixa, funding e subordinada dos CRAs Carteira."
  },
  "ativo": {
    "carteiraVpBruto": 425091896.3101958,
    "pddTotal": 0.0,
    "carteiraVp": 425091896.3101958,
    "carteiraVpLiquido": 425091896.3101958,
    "caixa": 5745339.483000001,
    "total": 430837235.7931958,
    "lastrosAtivos": 2311.0,
    "quantidadeLastrosAtivos": 2311.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 5745339.483000001
    },
    "total": 5745339.483000001,
    "cessaoRendimentosDia": 12779.160000000003,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 408152145.6658292,
    "subordinadaTotal": 22685090.127366584,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 22685090.127366584,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 408152145.6658292,
        "valor": 408152145.6658292
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 22685090.127366584,
        "valor": 22685090.127366584
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 444961733.27,
    "valorPresente": 425091896.3101958,
    "valorPresenteLiquido": 425091896.3101958,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 19.525944298294625,
    "taxaMediaPonderada": 0.019949764085329006,
    "preFixado": {
      "valorPresente": 0
    },
    "posFixado": {
      "valorPresente": 0
    }
  },
  "portfolioOverview": {
    "metrics": [
      {
        "label": "Carteira VP liquida",
        "value": "R$ 425.091.896,31"
      },
      {
        "label": "Caixa total",
        "value": "R$ 5.745.339,48"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 12.779,16"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 22.685.090,13"
      },
      {
        "label": "PDD",
        "value": "R$ 0,00"
      }
    ],
    "assetRows": [
      {
        "operacao": "CRA 44",
        "craId": "cra-carteira-44",
        "carteiraVp": 41271457.381278075,
        "valorNominal": 45539065.66,
        "caixa": 522836.06,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41794293.44127808,
        "funding": 41619274.281899996,
        "subordinada": 175019.15937808156,
        "puSub": 1750.1915937808155,
        "rendimentoSubDia": 0.011754296395933395,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 312,
        "cedentes": 29,
        "sacados": 112,
        "taxaMedia": 0.021485182139592447,
        "prazoMedio": 6.21892174437629,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 41087292.532227844,
        "valorNominal": 47378485.86,
        "caixa": 558686.513,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41645979.04522784,
        "funding": 41528388.5058,
        "subordinada": 117590.53942783922,
        "puSub": 1175.9053942783921,
        "rendimentoSubDia": -0.03730411884362983,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 283,
        "cedentes": 20,
        "sacados": 131,
        "taxaMedia": 0.0205344136311655,
        "prazoMedio": 74.43025717809584,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41004053.56048226,
        "valorNominal": 43990350.99,
        "caixa": 424226.45000000007,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41428280.01048227,
        "funding": 41461168.337400004,
        "subordinada": -32888.32691773772,
        "puSub": -328.8832691773772,
        "rendimentoSubDia": -0.030390263985387578,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 503,
        "cedentes": 22,
        "sacados": 264,
        "taxaMedia": 0.01886347812929515,
        "prazoMedio": 3.788766139621109,
        "montanteAtraso": 21323.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 31674989.44400478,
        "valorNominal": 16886049.52,
        "caixa": 81026.48,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31756015.924004782,
        "funding": 31755865.18811628,
        "subordinada": 150.73588850349188,
        "puSub": 1.5073588850349189,
        "rendimentoSubDia": -1.0661457854898577,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018943212104583697,
        "prazoMedio": 6.215120998880184,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 31304114.827430837,
        "valorNominal": 17264983.55,
        "caixa": 127519.56000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31431634.387430836,
        "funding": 31410603.120155126,
        "subordinada": 21031.26727570966,
        "puSub": 210.31267275709658,
        "rendimentoSubDia": 0.12058176752735905,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018858649450739194,
        "prazoMedio": 7.180309575108446,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40261096.958741024,
        "valorNominal": 45723693.59,
        "caixa": 467824.89999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40728921.85874102,
        "funding": 40694459.7528,
        "subordinada": 34462.10594101995,
        "puSub": 344.6210594101995,
        "rendimentoSubDia": 0.052108251414531015,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 657,
        "cedentes": 41,
        "sacados": 271,
        "taxaMedia": 0.02031024115665193,
        "prazoMedio": 9.438240846358655,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 40449828.88839505,
        "valorNominal": 44230242.33,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40449828.88839505,
        "funding": 40318537.433601,
        "subordinada": 131291.45479404926,
        "puSub": 1312.9145479404926,
        "rendimentoSubDia": -0.034417521873736145,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 36,
        "cedentes": 11,
        "sacados": 28,
        "taxaMedia": 0.020769956741232474,
        "prazoMedio": 13.672905772341077,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 32013344.68690677,
        "valorNominal": 35608051.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32013344.68690677,
        "funding": 31885547.11817317,
        "subordinada": 127797.56873359904,
        "puSub": 1277.9756873359904,
        "rendimentoSubDia": 0.009996698866821863,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.017831794584059594,
        "prazoMedio": 59.187536957586005,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 22144755.044591404,
        "valorNominal": 33028420.47,
        "caixa": 0.0,
        "cessaoRendimentosDia": 12779.160000000003,
        "ativoTotal": 22144755.044591404,
        "funding": 0.0,
        "subordinada": 22144755.044591404,
        "puSub": 221447.55044591404,
        "rendimentoSubDia": 0.0008276484624494262,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.019931001334407165,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 32168735.548845455,
        "valorNominal": 35165539.66,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32168735.548845455,
        "funding": 32160596.73835631,
        "subordinada": 8138.810489144176,
        "puSub": 81.38810489144176,
        "rendimentoSubDia": -0.18197242582215933,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 117,
        "cedentes": 10,
        "sacados": 26,
        "taxaMedia": 0.0213142070034568,
        "prazoMedio": 9.092121340768886,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 36236589.54979078,
        "valorNominal": 41360464.16,
        "caixa": 3563219.5200000005,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39799809.06979078,
        "funding": 39842360.84402395,
        "subordinada": -42551.774233169854,
        "puSub": -425.5177423316985,
        "rendimentoSubDia": 0.22272565150140955,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 226,
        "cedentes": 13,
        "sacados": 83,
        "taxaMedia": 0.018570817202351035,
        "prazoMedio": 32.63351414455605,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 35475637.8875015,
        "valorNominal": 38786386.48,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35475637.8875015,
        "funding": 35475344.34550336,
        "subordinada": 293.5419981405139,
        "puSub": 2.935419981405139,
        "rendimentoSubDia": -0.7012837250597974,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 152,
        "cedentes": 13,
        "sacados": 57,
        "taxaMedia": 0.021353411265715848,
        "prazoMedio": 2.9785545608605903,
        "montanteAtraso": 0
      }
    ],
    "rows": [
      {
        "operacao": "CRA 44",
        "craId": "cra-carteira-44",
        "serie": "SR1",
        "classe": "SR1",
        "ifCodigo": "CRA02500B41",
        "puAtual": 1043.089581,
        "valorAtual": 41619274.281899996,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "29/12/2026",
        "dataVencimentoIso": "2026-12-29",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "serie": "SR1",
        "classe": "SR1",
        "ifCodigo": "CRA02500B43",
        "puAtual": 1040.811742,
        "valorAtual": 41528388.5058,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B47",
        "puAtual": 1039.1270260000001,
        "valorAtual": 41461168.337400004,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "28/09/2026",
        "dataVencimentoIso": "2026-09-28",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B49",
        "puAtual": 1030.63303869,
        "valorAtual": 31755865.18811628,
        "quantidadeIntegralizada": 39900.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B9U",
        "puAtual": 1030.63303869,
        "valorAtual": 31410603.120155126,
        "quantidadeIntegralizada": 39900.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B9X",
        "puAtual": 1019.911272,
        "valorAtual": 40694459.7528,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B9Z",
        "puAtual": 1010.48965999,
        "valorAtual": 40318537.433601,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000GP",
        "puAtual": 1003.22647699,
        "valorAtual": 25080661.92475,
        "quantidadeIntegralizada": 25000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000MH",
        "puAtual": 1003.22647699,
        "valorAtual": 5185677.65956131,
        "quantidadeIntegralizada": 9000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000MI",
        "puAtual": 1003.22647699,
        "valorAtual": 1619207.5338618602,
        "quantidadeIntegralizada": 4189,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000B5",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 21845.0,
        "taxa": "23,50% a.a.",
        "dataVencimento": "30/11/2029",
        "dataVencimentoIso": "2029-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000B7",
        "puAtual": 1005.99320399,
        "valorAtual": 32160596.73835631,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000B9",
        "puAtual": 1005.99320399,
        "valorAtual": 39842360.84402395,
        "quantidadeIntegralizada": 39605,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000M9",
        "puAtual": 1005.99320399,
        "valorAtual": 13379709.613067,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000MA",
        "puAtual": 1005.99320399,
        "valorAtual": 13379709.613067,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000MB",
        "puAtual": 1005.99320399,
        "valorAtual": 8715925.11936936,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-01-08",
        "reportDate": "08/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 429182.2928993609,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-09",
        "reportDate": "09/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 429372.13992830366,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-12",
        "reportDate": "12/01/2026",
        "caixaTotal": 1969113.9900000002,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 442295.93261961266,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-13",
        "reportDate": "13/01/2026",
        "caixaTotal": 1637242.64,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 441418.0623522587,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-14",
        "reportDate": "14/01/2026",
        "caixaTotal": 747367.2490475569,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -379744.57823010907,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-15",
        "reportDate": "15/01/2026",
        "caixaTotal": 315716.85904755694,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 258379.5446660407,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-16",
        "reportDate": "16/01/2026",
        "caixaTotal": 315716.85904755694,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 259744.1978101693,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-19",
        "reportDate": "19/01/2026",
        "caixaTotal": 1302077.149047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 233352.54293805175,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-20",
        "reportDate": "20/01/2026",
        "caixaTotal": 2491455.8790475572,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 234024.92911957577,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-21",
        "reportDate": "21/01/2026",
        "caixaTotal": 2255984.629047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 233795.13390413672,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-22",
        "reportDate": "22/01/2026",
        "caixaTotal": 1321859.1190475568,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 234362.63818397932,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-23",
        "reportDate": "23/01/2026",
        "caixaTotal": 1995381.9890475566,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 235640.46731579676,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-26",
        "reportDate": "26/01/2026",
        "caixaTotal": 3019694.1990475566,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -11171.865853846073,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-27",
        "reportDate": "27/01/2026",
        "caixaTotal": 2439388.6590475566,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -9161.419178973883,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-28",
        "reportDate": "28/01/2026",
        "caixaTotal": 2168073.739047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -7005.735816869885,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-29",
        "reportDate": "29/01/2026",
        "caixaTotal": 3891141.479047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -4062.9313783086836,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-30",
        "reportDate": "30/01/2026",
        "caixaTotal": 4039761.919047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -14179.13727100566,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-02",
        "reportDate": "02/02/2026",
        "caixaTotal": 8321016.129047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 55883.74806017056,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-03",
        "reportDate": "03/02/2026",
        "caixaTotal": 8596743.519047556,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 1358093.188633211,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-04",
        "reportDate": "04/02/2026",
        "caixaTotal": 989812.439047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 9272291.208667897,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-05",
        "reportDate": "05/02/2026",
        "caixaTotal": 1002507.54,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22051141.749465555,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-06",
        "reportDate": "06/02/2026",
        "caixaTotal": 2239718.08,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22069001.893484816,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-09",
        "reportDate": "09/02/2026",
        "caixaTotal": 786206.2320000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -7237136.563176539,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-10",
        "reportDate": "10/02/2026",
        "caixaTotal": 3854712.3600000003,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22103164.7187038,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-11",
        "reportDate": "11/02/2026",
        "caixaTotal": 4296087.99,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22083022.50226062,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-12",
        "reportDate": "12/02/2026",
        "caixaTotal": 31584517.209999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 49730052.695031695,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-13",
        "reportDate": "13/02/2026",
        "caixaTotal": 3662450.83,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22271931.73942357,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-18",
        "reportDate": "18/02/2026",
        "caixaTotal": 3692365.01,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22659101.30684073,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-19",
        "reportDate": "19/02/2026",
        "caixaTotal": 5476378.2299999995,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22675535.70698275,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-20",
        "reportDate": "20/02/2026",
        "caixaTotal": 5745339.483000001,
        "cessaoRendimentosDia": 12779.160000000003,
        "subordinadaTotal": 22685090.127366584,
        "rendimentoSubDia": 0.0004213536785766525
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 408152145.6658292,
      "valor": 408152145.6658292,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 22685090.127366584,
      "valor": 22685090.127366584,
      "resultadoDia": null
    }
  ],
  "rendimento30Dias": [],
  "sections": [
    {
      "id": "consolidado",
      "label": "Consolidado CRAs Carteira",
      "metrics": [
        {
          "label": "Ativo total",
          "value": "R$ 430.837.235,79",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 425.091.896,31",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 5.745.339,48",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 12.779,16",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 408.152.145,67",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 22.685.090,13",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "PDD",
          "value": "R$ 0,00",
          "isHighlight": true,
          "source": {
            "name": "Faixa vencimento"
          }
        }
      ]
    }
  ],
  "sources": [
    {
      "name": "Importacao carteira+caixa CRAs Carteira",
      "date": "20/02/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
