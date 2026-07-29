window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-06-03"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "03/06/2026",
    "dateKey": "2026-06-03",
    "importedAt": "2026-07-29T10:06:29.788585-03:00",
    "revisionId": "20260603-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 370228593.86081433,
    "pddTotal": 0.0,
    "carteiraVp": 370228593.86081433,
    "carteiraVpLiquido": 370228593.86081433,
    "caixa": 1901095.81,
    "total": 372129689.67081434,
    "lastrosAtivos": 1126.0,
    "quantidadeLastrosAtivos": 1126.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 1901095.81
    },
    "total": 1901095.81,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 481086639.61200786,
    "subordinadaTotal": -108956949.94119349,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": -108956949.94119349,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 481086639.61200786,
        "valor": 481086639.61200786
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": -108956949.94119349,
        "valor": -108956949.94119349
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 404580875.39,
    "valorPresente": 370228593.86081433,
    "valorPresenteLiquido": 370228593.86081433,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 112.25297270789207,
    "taxaMediaPonderada": 0.019232065702178645,
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
        "value": "R$ 370.228.593,86"
      },
      {
        "label": "Caixa total",
        "value": "R$ 1.901.095,81"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ -108.956.949,94"
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
        "carteiraVp": 21293666.33014579,
        "valorNominal": 24017047.55,
        "caixa": 948481.53,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22242147.860145792,
        "funding": 30456383.843915112,
        "subordinada": -8214235.98376932,
        "puSub": -82142.3598376932,
        "rendimentoSubDia": -34.54257534530813,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 6,
        "sacados": 7,
        "taxaMedia": 0.02255652753250337,
        "prazoMedio": 12.937490068783498,
        "montanteAtraso": 100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 28901080.35595109,
        "valorNominal": 32061903.38,
        "caixa": 582.5199999999968,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28901662.87595109,
        "funding": 34301613.690183,
        "subordinada": -5399950.81423191,
        "puSub": -53999.5081423191,
        "rendimentoSubDia": -2.8585747490613604,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 20,
        "cedentes": 3,
        "sacados": 10,
        "taxaMedia": 0.020270984945005018,
        "prazoMedio": 113.32262973929747,
        "montanteAtraso": 3511568.58
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 25784657.75594226,
        "valorNominal": 26477936.2,
        "caixa": 28211.689999999995,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 25812869.44594226,
        "funding": 25686533.16349076,
        "subordinada": 126336.28245149925,
        "puSub": 1263.3628245149926,
        "rendimentoSubDia": -0.04116912143879714,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 117,
        "cedentes": 11,
        "sacados": 58,
        "taxaMedia": 0.01811511397072095,
        "prazoMedio": 6.383998824260421,
        "montanteAtraso": 3169794.06
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 26332761.693901833,
        "valorNominal": 27267265.52,
        "caixa": 764.4199999999983,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26333526.113901835,
        "funding": 43067126.877836,
        "subordinada": -16733600.763934162,
        "puSub": -167336.0076393416,
        "rendimentoSubDia": -111.38579981115298,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018920236382329886,
        "prazoMedio": 19.613283051247404,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 27082493.043223076,
        "valorNominal": 28015535.4,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27082493.043223076,
        "funding": 42933247.727768995,
        "subordinada": -15850754.68454592,
        "puSub": -158507.5468454592,
        "rendimentoSubDia": -90.4532044757262,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018797575720276426,
        "prazoMedio": 18.374540478292985,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 12497586.008971395,
        "valorNominal": 13760726.29,
        "caixa": 17511.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 12515097.258971395,
        "funding": 29503555.742702473,
        "subordinada": -16988458.483731076,
        "puSub": -169884.58483731077,
        "rendimentoSubDia": -42.824075939566875,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 304,
        "cedentes": 27,
        "sacados": 160,
        "taxaMedia": 0.020471057977495606,
        "prazoMedio": 32.47088083084532,
        "montanteAtraso": 2063792.6
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13459508.638897238,
        "valorNominal": 14949673.5,
        "caixa": 883.320000000007,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13460391.958897239,
        "funding": 26542227.659218997,
        "subordinada": -13081835.700321758,
        "puSub": -130818.35700321758,
        "rendimentoSubDia": -60.56440045922397,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.017564350032681576,
        "prazoMedio": 41.53222873340218,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 18723639.552877605,
        "valorNominal": 24122656.0,
        "caixa": 732.7100000000064,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 18724372.262877606,
        "funding": 25157524.21224611,
        "subordinada": -6433151.949368503,
        "puSub": -64331.51949368503,
        "rendimentoSubDia": 173.32165474893847,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01863590178071539,
        "prazoMedio": 186.5211884648185,
        "montanteAtraso": 5991271.31143246
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 57597.000000000015,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 57597.000000000015,
        "funding": 0.0,
        "subordinada": 57597.000000000015,
        "puSub": 575.9700000000001,
        "rendimentoSubDia": -0.9958202472300451,
        "rendimentoSubMes": null,
        "pdd": 0,
        "lastrosAtivos": 0,
        "cedentes": 0,
        "sacados": 0,
        "taxaMedia": 0.0,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 32980839.32687602,
        "valorNominal": 34865543.85,
        "caixa": 625011.0800000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33605850.40687602,
        "funding": 33534408.353549443,
        "subordinada": 71442.05332657695,
        "puSub": 714.4205332657694,
        "rendimentoSubDia": -0.1835217389528101,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 234,
        "cedentes": 20,
        "sacados": 141,
        "taxaMedia": 0.02114432942640641,
        "prazoMedio": 17.843927859535782,
        "montanteAtraso": 14611697.88
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14948159.596798984,
        "valorNominal": 16407467.319999998,
        "caixa": 879.6500000000015,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14949039.246798985,
        "funding": 31730956.40333144,
        "subordinada": -16781917.156532455,
        "puSub": -167819.17156532456,
        "rendimentoSubDia": -73.11954401041501,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 94,
        "cedentes": 10,
        "sacados": 51,
        "taxaMedia": 0.015960848025479455,
        "prazoMedio": 88.78184677215538,
        "montanteAtraso": 373460.01
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28380402.56184664,
        "valorNominal": 30212434.0,
        "caixa": 7745.180000000008,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28388147.74184664,
        "funding": 28096680.533014003,
        "subordinada": 291467.2088326365,
        "puSub": 2914.6720883263647,
        "rendimentoSubDia": -0.011822220916227533,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020249828916563756,
        "prazoMedio": 4.691204206600376,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 41372007.41498928,
        "valorNominal": 43345891.22,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41372007.41498928,
        "funding": 40711813.8572,
        "subordinada": 660193.557789281,
        "puSub": 6601.93557789281,
        "rendimentoSubDia": 0.0033246269946849427,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017911624610852602,
        "prazoMedio": 14.05254362661794,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 15767251.678600574,
        "valorNominal": 16712523.889999999,
        "caixa": 395.04999999998836,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 15767646.728600575,
        "funding": 15857612.335297301,
        "subordinada": -89965.60669672675,
        "puSub": -899.6560669672675,
        "rendimentoSubDia": -0.007566944391641961,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018084680777044185,
        "prazoMedio": 6.995326685128112,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14106428.934501726,
        "valorNominal": 15631423.299999999,
        "caixa": 3536.5000000000036,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14109965.434501726,
        "funding": 14160559.6782984,
        "subordinada": -50594.243796674535,
        "puSub": -505.94243796674533,
        "rendimentoSubDia": 0.011826037764530062,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01634306671350295,
        "prazoMedio": 155.22622238577543,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 29295685.425080255,
        "valorNominal": 36288854.8,
        "caixa": 4676.600000000006,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29300362.025080256,
        "funding": 29306560.909374222,
        "subordinada": -6198.884293965995,
        "puSub": -61.98884293965995,
        "rendimentoSubDia": 1.198184867839685,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 251,
        "cedentes": 2,
        "sacados": 56,
        "taxaMedia": 0.01990357088172787,
        "prazoMedio": 278.46839570349647,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 19302425.54221058,
        "valorNominal": 20443993.17,
        "caixa": 204087.31,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19506512.852210578,
        "funding": 30039834.624581598,
        "subordinada": -10533321.77237102,
        "puSub": -105333.2177237102,
        "rendimentoSubDia": 0.00013262170612415858,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.020104239952302774,
        "prazoMedio": 999.0812164919047,
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
        "puAtual": 763.3178908249402,
        "valorAtual": 30456383.843915112,
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
        "puAtual": 859.68956617,
        "valorAtual": 34301613.690183,
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
        "puAtual": 643.7727609897433,
        "valorAtual": 25686533.16349076,
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
        "puAtual": 1079.376613479599,
        "valorAtual": 43067126.877836,
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
        "puAtual": 1076.02124631,
        "valorAtual": 42933247.727768995,
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
        "puAtual": 739.4374872857762,
        "valorAtual": 29503555.742702473,
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
        "puAtual": 665.2187383262907,
        "valorAtual": 26542227.659218997,
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
        "puAtual": 446.34601375,
        "valorAtual": 11158650.34375,
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
        "puAtual": 1061.40525199,
        "valorAtual": 9552647.26791,
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
        "puAtual": 1061.40525199,
        "valorAtual": 4446226.60058611,
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
        "puAtual": 840.4613622443469,
        "valorAtual": 33534408.353549443,
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
        "puAtual": 801.1856180616447,
        "valorAtual": 31730956.40333144,
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
        "puAtual": 0,
        "valorAtual": 0,
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
        "puAtual": 1044.5956619033084,
        "valorAtual": 13893122.303314002,
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
        "puAtual": 1067.936709,
        "valorAtual": 14203558.229700001,
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
        "puAtual": 1001.18870086,
        "valorAtual": 20023774.0172,
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
        "puAtual": 1034.401992,
        "valorAtual": 20688039.84,
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
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000S2",
        "puAtual": 1016.83952134,
        "valorAtual": 15857612.335297301,
        "quantidadeIntegralizada": 15595.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000S3",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 0.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Nao integralizada"
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000S4",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 0.0,
        "taxa": "22,50% a.a.",
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
        "puAtual": 760.78701761,
        "valorAtual": 7942616.4638484,
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
        "puAtual": 1027.759209,
        "valorAtual": 6217943.214450001,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA0260020C",
        "puAtual": 1011.33828799,
        "valorAtual": 20226765.759800002,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA0260020D",
        "puAtual": 1011.33828799,
        "valorAtual": 9079795.14957422,
        "quantidadeIntegralizada": 19900.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA0260020F",
        "puAtual": 1003.28877308,
        "valorAtual": 19614295.513714,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA0260020G",
        "puAtual": 1058.64531995,
        "valorAtual": 10425539.110867599,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-04-22",
        "reportDate": "22/04/2026",
        "caixaTotal": 17042122.709999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15147435.269771092,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-23",
        "reportDate": "23/04/2026",
        "caixaTotal": 18388508.959999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14996360.876221312,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-24",
        "reportDate": "24/04/2026",
        "caixaTotal": 18562455.709999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14885983.343399946,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-27",
        "reportDate": "27/04/2026",
        "caixaTotal": 20724160.18,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15231965.66495035,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-28",
        "reportDate": "28/04/2026",
        "caixaTotal": 14598223.61,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15071403.84796698,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-29",
        "reportDate": "29/04/2026",
        "caixaTotal": 31306151.169999998,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 18523178.56208051,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-30",
        "reportDate": "30/04/2026",
        "caixaTotal": 56801366.14,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14788673.408065982,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-04",
        "reportDate": "04/05/2026",
        "caixaTotal": 60086050.59,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14984727.818494301,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-05",
        "reportDate": "05/05/2026",
        "caixaTotal": 61122254.18,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14979935.54723854,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-06",
        "reportDate": "06/05/2026",
        "caixaTotal": 63764002.089999996,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14936192.516409077,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-07",
        "reportDate": "07/05/2026",
        "caixaTotal": 64609210.339999996,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14892337.582614593,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-08",
        "reportDate": "08/05/2026",
        "caixaTotal": 21235267.34,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14957013.809559127,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-11",
        "reportDate": "11/05/2026",
        "caixaTotal": 10054377.879999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15337324.638483573,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-12",
        "reportDate": "12/05/2026",
        "caixaTotal": 11559383.54,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15323159.972812641,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-13",
        "reportDate": "13/05/2026",
        "caixaTotal": 12437245.979999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15325577.245278366,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-14",
        "reportDate": "14/05/2026",
        "caixaTotal": 7198254.88,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15456566.13360905,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-15",
        "reportDate": "15/05/2026",
        "caixaTotal": 7508897.7,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15465120.665787352,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-18",
        "reportDate": "18/05/2026",
        "caixaTotal": 5482194.899999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16049749.427974185,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-19",
        "reportDate": "19/05/2026",
        "caixaTotal": 12365234.59,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15998118.919525562,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-20",
        "reportDate": "20/05/2026",
        "caixaTotal": 7517131.77,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15353642.342368053,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-21",
        "reportDate": "21/05/2026",
        "caixaTotal": 7838110.31,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15321070.513374325,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-22",
        "reportDate": "22/05/2026",
        "caixaTotal": 6431615.79,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16298817.238703532,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-25",
        "reportDate": "25/05/2026",
        "caixaTotal": 6703203.15,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16469367.130793378,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-26",
        "reportDate": "26/05/2026",
        "caixaTotal": 7470803.51,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16466785.862193247,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-27",
        "reportDate": "27/05/2026",
        "caixaTotal": 7918815.27,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17008780.534905232,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-28",
        "reportDate": "28/05/2026",
        "caixaTotal": 9715051.63,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 1670342.3786785584,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-29",
        "reportDate": "29/05/2026",
        "caixaTotal": 14374959.86,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8415223.660281135,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-01",
        "reportDate": "01/06/2026",
        "caixaTotal": 18431918.2,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8605634.690206826,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-02",
        "reportDate": "02/06/2026",
        "caixaTotal": 18823136.55,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8577532.346237166,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-03",
        "reportDate": "03/06/2026",
        "caixaTotal": 1901095.81,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -108956949.94119349,
        "rendimentoSubDia": -13.702598549685593
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 481086639.61200786,
      "valor": 481086639.61200786,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": -108956949.94119349,
      "valor": -108956949.94119349,
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
          "value": "R$ 372.129.689,67",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 370.228.593,86",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 1.901.095,81",
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
          "value": "R$ 481.086.639,61",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ -108.956.949,94",
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
      "date": "03/06/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
