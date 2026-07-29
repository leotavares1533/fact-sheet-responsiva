window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-04-20"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "20/04/2026",
    "dateKey": "2026-04-20",
    "importedAt": "2026-07-29T10:02:11.384329-03:00",
    "revisionId": "20260420-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 487453510.35330474,
    "pddTotal": 0.0,
    "carteiraVp": 487453510.35330474,
    "carteiraVpLiquido": 487453510.35330474,
    "caixa": 12706096.370000001,
    "total": 500159606.72330475,
    "lastrosAtivos": 1853.0,
    "quantidadeLastrosAtivos": 1853.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 12706096.370000001
    },
    "total": 12706096.370000001,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 485119873.96773195,
    "subordinadaTotal": 15039732.755572796,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 15039732.755572796,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 485119873.96773195,
        "valor": 485119873.96773195
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 15039732.755572796,
        "valor": 15039732.755572796
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 495209675.05,
    "valorPresente": 487453510.35330474,
    "valorPresenteLiquido": 487453510.35330474,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 28.145845979086197,
    "taxaMediaPonderada": 0.019543399226606306,
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
        "value": "R$ 487.453.510,35"
      },
      {
        "label": "Caixa total",
        "value": "R$ 12.706.096,37"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 15.039.732,76"
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
        "carteiraVp": 33757882.02262397,
        "valorNominal": 36560711.43,
        "caixa": 984332.02,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34742214.042623974,
        "funding": 34500957.045177,
        "subordinada": 241256.9974469766,
        "puSub": 2412.569974469766,
        "rendimentoSubDia": 0.0007943584106790968,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 46,
        "cedentes": 15,
        "sacados": 26,
        "taxaMedia": 0.022111020509424668,
        "prazoMedio": 7.913934834548968,
        "montanteAtraso": 5267288.64
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 35557405.67439096,
        "valorNominal": 40278649.63,
        "caixa": 1121986.1199999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36679391.794390954,
        "funding": 36480059.46593399,
        "subordinada": 199332.32845696062,
        "puSub": 1993.3232845696061,
        "rendimentoSubDia": 0.2120995812575026,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 57,
        "cedentes": 11,
        "sacados": 32,
        "taxaMedia": 0.02023330290342061,
        "prazoMedio": 89.45029673223543,
        "montanteAtraso": 386058.05
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41043319.464985274,
        "valorNominal": 42540830.24,
        "caixa": 1168924.9,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42212244.36498527,
        "funding": 42155570.582096994,
        "subordinada": 56673.782888278365,
        "puSub": 566.7378288827837,
        "rendimentoSubDia": 0.10762889093625483,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 457,
        "cedentes": 21,
        "sacados": 235,
        "taxaMedia": 0.018785894851443708,
        "prazoMedio": 3.912028641199402,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42497858.55154744,
        "valorNominal": 27267265.52,
        "caixa": 104749.96999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42602608.52154744,
        "funding": 42516198.118484996,
        "subordinada": 86410.40306244045,
        "puSub": 864.1040306244046,
        "rendimentoSubDia": 0.03252368353132007,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018689045297544605,
        "prazoMedio": 11.83363172987736,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42468572.73584832,
        "valorNominal": 28015535.4,
        "caixa": 147429.31,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42616002.045848325,
        "funding": 42516198.118484996,
        "subordinada": 99803.92736332864,
        "puSub": 998.0392736332864,
        "rendimentoSubDia": 0.026591011569246037,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.018614152460882008,
        "prazoMedio": 11.406834576219373,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 39824908.36490997,
        "valorNominal": 43746098.88,
        "caixa": 1312352.87,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41137261.23490997,
        "funding": 40872599.382762,
        "subordinada": 264661.8521479666,
        "puSub": 2646.618521479666,
        "rendimentoSubDia": 0.08135122632345504,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 609,
        "cedentes": 39,
        "sacados": 254,
        "taxaMedia": 0.020336346504775494,
        "prazoMedio": 9.901888579279984,
        "montanteAtraso": 41202.0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38728402.86753897,
        "valorNominal": 41182142.33,
        "caixa": 75839.32,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38804242.187538974,
        "funding": 38645020.221129,
        "subordinada": 159221.9664099738,
        "puSub": 1592.219664099738,
        "rendimentoSubDia": 0.27885551272848663,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 10,
        "sacados": 26,
        "taxaMedia": 0.020481431888126483,
        "prazoMedio": 14.551594093054677,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39710458.28149949,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39710458.28149949,
        "funding": 39566453.743765,
        "subordinada": 144004.5377344936,
        "puSub": 1440.0453773449362,
        "rendimentoSubDia": 0.011436709239495135,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.018261284968419108,
        "prazoMedio": 86.3455962045719,
        "montanteAtraso": 872943.0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13395808.869331364,
        "valorNominal": 17468847.48,
        "caixa": 80348.73000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13476157.599331364,
        "funding": 0.0,
        "subordinada": 13476157.599331364,
        "puSub": 134761.57599331363,
        "rendimentoSubDia": 0.0009701519826625926,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.02059999999999995,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 37584679.82478104,
        "valorNominal": 40123843.65,
        "caixa": 948664.2799999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38533344.10478104,
        "funding": 38394633.780867,
        "subordinada": 138710.32391403615,
        "puSub": 1387.1032391403614,
        "rendimentoSubDia": 0.2576142132039445,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 310,
        "cedentes": 25,
        "sacados": 169,
        "taxaMedia": 0.02115203622408769,
        "prazoMedio": 15.157163983491515,
        "montanteAtraso": 1409726.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 35227219.05063043,
        "valorNominal": 39507009.1,
        "caixa": 4174967.67,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39402186.72063043,
        "funding": 39467270.85955645,
        "subordinada": -65084.138926021755,
        "puSub": -650.8413892602175,
        "rendimentoSubDia": -0.23574815151392015,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 179,
        "cedentes": 19,
        "sacados": 84,
        "taxaMedia": 0.018006625974403823,
        "prazoMedio": 37.63500037516002,
        "montanteAtraso": 1485017.46
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 37888388.86278142,
        "valorNominal": 40323755.89,
        "caixa": 2442301.6100000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40330690.47278142,
        "funding": 40024342.889685,
        "subordinada": 306347.58309642226,
        "puSub": 3063.4758309642225,
        "rendimentoSubDia": 0.09105912770732272,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 89,
        "cedentes": 13,
        "sacados": 38,
        "taxaMedia": 0.02099981722624557,
        "prazoMedio": 3.394089176408524,
        "montanteAtraso": 1387755.3699999999
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 40335944.90254262,
        "valorNominal": 43345891.22,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40335944.90254262,
        "funding": 40388427.8,
        "subordinada": -52482.89745737612,
        "puSub": -524.8289745737612,
        "rendimentoSubDia": -0.029087692233951024,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017911561360217976,
        "prazoMedio": 14.048728936279847,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 9432660.879893452,
        "valorNominal": 11119193.28,
        "caixa": 144199.57,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 9576860.449893452,
        "funding": 9592141.9597895,
        "subordinada": -15281.509896047413,
        "puSub": -152.81509896047413,
        "rendimentoSubDia": 0.03310064179067229,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.016238090594820433,
        "prazoMedio": 227.5784922233952,
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
        "puAtual": 864.68564023,
        "valorAtual": 34500957.045177,
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
        "puAtual": 914.2872046599999,
        "valorAtual": 36480059.46593399,
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
        "puAtual": 1056.5305910299999,
        "valorAtual": 42155570.582096994,
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
        "puAtual": 1065.56887515,
        "valorAtual": 42516198.118484996,
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
        "puAtual": 1065.56887515,
        "valorAtual": 42516198.118484996,
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
        "puAtual": 1024.37592438,
        "valorAtual": 40872599.382762,
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
        "puAtual": 968.54687271,
        "valorAtual": 38645020.221129,
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
        "puAtual": 1036.069385,
        "valorAtual": 25901734.625,
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
        "puAtual": 1036.069385,
        "valorAtual": 9324624.465,
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
        "puAtual": 1036.069385,
        "valorAtual": 4340094.653765,
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
        "puAtual": 962.27152333,
        "valorAtual": 38394633.780867,
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
        "puAtual": 996.52243049,
        "valorAtual": 39467270.85955645,
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
        "puAtual": 927.47777347,
        "valorAtual": 12335454.387151,
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
        "puAtual": 1040.93565799,
        "valorAtual": 13844444.251267,
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
        "puAtual": 1040.93565799,
        "valorAtual": 13844444.251267,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000RY",
        "puAtual": 1009.710695,
        "valorAtual": 20194213.9,
        "quantidadeIntegralizada": 20000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000RZ",
        "puAtual": 1009.710695,
        "valorAtual": 20194213.9,
        "quantidadeIntegralizada": 20000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000S0",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Nao integralizada"
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02600209",
        "puAtual": 1006.463364,
        "valorAtual": 3522621.7739999997,
        "quantidadeIntegralizada": 10440.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA0260020A",
        "puAtual": 1003.22647699,
        "valorAtual": 6069520.1857895,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-03-09",
        "reportDate": "09/03/2026",
        "caixaTotal": 18512412.42,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 23082425.116478678,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-10",
        "reportDate": "10/03/2026",
        "caixaTotal": 18597678.94,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 23086426.258603387,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-11",
        "reportDate": "11/03/2026",
        "caixaTotal": 21263622.87,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 25231283.180452853,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-12",
        "reportDate": "12/03/2026",
        "caixaTotal": 7632056.18,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17215054.4022503,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-13",
        "reportDate": "13/03/2026",
        "caixaTotal": 7680221.16,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17177568.17202255,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-16",
        "reportDate": "16/03/2026",
        "caixaTotal": 7734009.92,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17428596.67932669,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-17",
        "reportDate": "17/03/2026",
        "caixaTotal": 7758430.73,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17435988.306878377,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-18",
        "reportDate": "18/03/2026",
        "caixaTotal": 8110148.63,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17444251.281867463,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-19",
        "reportDate": "19/03/2026",
        "caixaTotal": 8279104.62,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17453618.837493785,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-20",
        "reportDate": "20/03/2026",
        "caixaTotal": 9079062.83,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17462298.486250207,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-23",
        "reportDate": "23/03/2026",
        "caixaTotal": 9075732.14,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17647719.778573494,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-24",
        "reportDate": "24/03/2026",
        "caixaTotal": 8788916.75,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17603092.04672396,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-25",
        "reportDate": "25/03/2026",
        "caixaTotal": 10995622.37,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17614715.100924708,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-26",
        "reportDate": "26/03/2026",
        "caixaTotal": 11947957.3,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17627757.661070004,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-27",
        "reportDate": "27/03/2026",
        "caixaTotal": 10826873.64,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17634521.56217985,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-30",
        "reportDate": "30/03/2026",
        "caixaTotal": 13585336.940000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13914663.245189974,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-31",
        "reportDate": "31/03/2026",
        "caixaTotal": 16365204.910000002,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -5499824.384724794,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-01",
        "reportDate": "01/04/2026",
        "caixaTotal": 17733881.82,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13984059.508038506,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-02",
        "reportDate": "02/04/2026",
        "caixaTotal": 19174173.07,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13965137.249933233,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-06",
        "reportDate": "06/04/2026",
        "caixaTotal": 19729407.12,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14246750.677318314,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-07",
        "reportDate": "07/04/2026",
        "caixaTotal": 19988842.55,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14233779.344699187,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-08",
        "reportDate": "08/04/2026",
        "caixaTotal": 20891941.33,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 7924021.303736722,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-09",
        "reportDate": "09/04/2026",
        "caixaTotal": 15269776.540000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 9028607.585091967,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-10",
        "reportDate": "10/04/2026",
        "caixaTotal": 9304865.15,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8417467.749462355,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-13",
        "reportDate": "13/04/2026",
        "caixaTotal": 9326666.3,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8606222.139072135,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-14",
        "reportDate": "14/04/2026",
        "caixaTotal": 10161513.21,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8963775.297827862,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-15",
        "reportDate": "15/04/2026",
        "caixaTotal": 10667149.78,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14495676.404188635,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-16",
        "reportDate": "16/04/2026",
        "caixaTotal": 11199790.22,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14890682.7773254,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-17",
        "reportDate": "17/04/2026",
        "caixaTotal": 11486903.469999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14849387.490953427,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-20",
        "reportDate": "20/04/2026",
        "caixaTotal": 12706096.370000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15039732.755572796,
        "rendimentoSubDia": 0.012818391649846328
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 485119873.96773195,
      "valor": 485119873.96773195,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 15039732.755572796,
      "valor": 15039732.755572796,
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
          "value": "R$ 500.159.606,72",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 487.453.510,35",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 12.706.096,37",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 0,00",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 485.119.873,97",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 15.039.732,76",
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
      "date": "20/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
