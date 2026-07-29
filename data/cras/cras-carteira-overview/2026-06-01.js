window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-06-01"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "01/06/2026",
    "dateKey": "2026-06-01",
    "importedAt": "2026-07-29T10:06:12.939295-03:00",
    "revisionId": "20260601-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 477296469.72673994,
    "pddTotal": 0.0,
    "carteiraVp": 477296469.72673994,
    "carteiraVpLiquido": 477296469.72673994,
    "caixa": 18431918.2,
    "total": 495728387.92674,
    "lastrosAtivos": 1154.0,
    "quantidadeLastrosAtivos": 1154.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 18431918.2
    },
    "total": 18431918.2,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 487122753.23653316,
    "subordinadaTotal": 8605634.690206826,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 8605634.690206826,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 487122753.23653316,
        "valor": 487122753.23653316
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 8605634.690206826,
        "valor": 8605634.690206826
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 479508209.77,
    "valorPresente": 477296469.72673994,
    "valorPresenteLiquido": 477296469.72673994,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 70.6257547775676,
    "taxaMediaPonderada": 0.019349166188723576,
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
        "value": "R$ 477.296.469,73"
      },
      {
        "label": "Caixa total",
        "value": "R$ 18.431.918,20"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 8.605.634,69"
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
        "carteiraVp": 30638042.945007328,
        "valorNominal": 32878590.07,
        "caixa": 1845867.37,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32483910.31500733,
        "funding": 32242190.327046003,
        "subordinada": 241719.9879613258,
        "puSub": 2417.199879613258,
        "rendimentoSubDia": 0.015237016931514802,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 8,
        "sacados": 9,
        "taxaMedia": 0.022354485469573186,
        "prazoMedio": 8.973132113616593,
        "montanteAtraso": 100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 36773962.496577166,
        "valorNominal": 38391517.11,
        "caixa": 383929.85,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 37157892.34657717,
        "funding": 34242009.178922996,
        "subordinada": 2915883.1676541716,
        "puSub": 29158.831676541715,
        "rendimentoSubDia": 0.01180818960621699,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 22,
        "cedentes": 4,
        "sacados": 11,
        "taxaMedia": 0.020052972893021024,
        "prazoMedio": 88.94307944588743,
        "montanteAtraso": 3511568.58
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 25772652.878893398,
        "valorNominal": 26504077.02,
        "caixa": 3731611.71,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29504264.5888934,
        "funding": 29367485.618352,
        "subordinada": 136778.97054139897,
        "puSub": 1367.7897054139896,
        "rendimentoSubDia": 0.0008623830677796374,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 119,
        "cedentes": 11,
        "sacados": 60,
        "taxaMedia": 0.018119180797683272,
        "prazoMedio": 6.3753870206450935,
        "montanteAtraso": 3103308.879999992
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 43135445.2314907,
        "valorNominal": 27267265.52,
        "caixa": 259415.52000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 43394860.751490705,
        "funding": 43246073.37519,
        "subordinada": 148787.37630070746,
        "puSub": 1487.8737630070746,
        "rendimentoSubDia": 0.019789791797631517,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.0186850939243806,
        "prazoMedio": 11.95202816037669,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 43037137.1552544,
        "valorNominal": 28015535.4,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 43037137.1552544,
        "funding": 42862822.534811996,
        "subordinada": 174314.62044240534,
        "puSub": 1743.1462044240534,
        "rendimentoSubDia": 0.016778654636093515,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.018613010846757417,
        "prazoMedio": 11.54206614234291,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 29853642.762403555,
        "valorNominal": 33592803.07,
        "caixa": 2008503.73,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31862146.492403556,
        "funding": 31456830.626697,
        "subordinada": 405315.86570655555,
        "puSub": 4053.1586570655554,
        "rendimentoSubDia": 0.04682793720455103,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 310,
        "cedentes": 31,
        "sacados": 166,
        "taxaMedia": 0.020330987370043928,
        "prazoMedio": 13.561832958150275,
        "montanteAtraso": 1991990.68
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 26717775.666219443,
        "valorNominal": 29529583.58,
        "caixa": 725313.72,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27443089.386219442,
        "funding": 27219846.516891,
        "subordinada": 223242.86932844296,
        "puSub": 2232.4286932844298,
        "rendimentoSubDia": 0.10736349255682742,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 8,
        "sacados": 11,
        "taxaMedia": 0.020287120103409172,
        "prazoMedio": 20.901708771186694,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 25076951.234556273,
        "valorNominal": 24122656.0,
        "caixa": 1549445.2100000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26626396.444556274,
        "funding": 26659550.664565,
        "subordinada": -33154.22000872716,
        "puSub": -331.5422000872716,
        "rendimentoSubDia": 0.08870339154801288,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01810902803029608,
        "prazoMedio": 138.99178799825376,
        "montanteAtraso": 5989453.231004236
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13765004.607019883,
        "valorNominal": 17468847.48,
        "caixa": 1624.9199999999983,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13766629.527019883,
        "funding": 0.0,
        "subordinada": 13766629.527019883,
        "puSub": 137666.29527019884,
        "rendimentoSubDia": 0.000971342004506548,
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
        "carteiraVp": 33052246.80977226,
        "valorNominal": 34964143.85,
        "caixa": 2014733.26,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35066980.06977226,
        "funding": 34964664.51786,
        "subordinada": 102315.55191225559,
        "puSub": 1023.1555191225558,
        "rendimentoSubDia": 0.20199891098254308,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 239,
        "cedentes": 21,
        "sacados": 142,
        "taxaMedia": 0.02114308310033091,
        "prazoMedio": 17.765523401132793,
        "montanteAtraso": 14710297.879999999
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 31914127.46131911,
        "valorNominal": 35677849.699999996,
        "caixa": 1275980.18,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33190107.64131911,
        "funding": 32949655.596844748,
        "subordinada": 240452.04447436333,
        "puSub": 2404.520444743633,
        "rendimentoSubDia": 0.10390011801518129,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 97,
        "cedentes": 11,
        "sacados": 53,
        "taxaMedia": 0.017737230320254337,
        "prazoMedio": 41.53629842859123,
        "montanteAtraso": 503470.0099999999
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28339208.669636823,
        "valorNominal": 30212434.0,
        "caixa": 147832.55000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28487041.219636824,
        "funding": 28188515.048743,
        "subordinada": 298526.1708938256,
        "puSub": 2985.261708938256,
        "rendimentoSubDia": 0.09778969696506978,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020248063200766962,
        "prazoMedio": 4.68716350293747,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 41302115.996253006,
        "valorNominal": 43345891.22,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41302115.996253006,
        "funding": 40646294.492400005,
        "subordinada": 655821.5038530007,
        "puSub": 6558.215038530007,
        "rendimentoSubDia": 0.00333715546176494,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01791162039335638,
        "prazoMedio": 14.052289267319285,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 15740360.59094915,
        "valorNominal": 16712523.889999999,
        "caixa": 492.38999999998487,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 15740852.98094915,
        "funding": 15832091.9633582,
        "subordinada": -91238.98240904883,
        "puSub": -912.3898240904882,
        "rendimentoSubDia": -0.007436253455951447,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018084674881271346,
        "prazoMedio": 6.995192158872561,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14084821.520747606,
        "valorNominal": 15631423.299999999,
        "caixa": 3633.850000000006,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14088455.370747605,
        "funding": 14137770.4518236,
        "subordinada": -49315.0810759943,
        "puSub": -493.150810759943,
        "rendimentoSubDia": 0.012100695990379995,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016342966790807163,
        "prazoMedio": 155.2378407713466,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 29255273.790951688,
        "valorNominal": 36288854.8,
        "caixa": 4676.600000000006,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29259950.39095169,
        "funding": 29259396.519709997,
        "subordinada": 553.8712416924536,
        "puSub": 5.538712416924536,
        "rendimentoSubDia": -1.018511065428704,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 251,
        "cedentes": 2,
        "sacados": 56,
        "taxaMedia": 0.019903661559168152,
        "prazoMedio": 278.46902248086377,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 8837699.909688167,
        "valorNominal": 8904213.76,
        "caixa": 4478857.34,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13316557.249688167,
        "funding": 23847555.8033176,
        "subordinada": -10530998.553629432,
        "puSub": -105309.98553629432,
        "rendimentoSubDia": 0.00025927116705060094,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.01998869658738577,
        "prazoMedio": 1297.7365746930393,
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
        "puAtual": 808.07494554,
        "valorAtual": 32242190.327046003,
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
        "puAtual": 858.19571877,
        "valorAtual": 34242009.178922996,
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
        "puAtual": 736.02720848,
        "valorAtual": 29367485.618352,
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
        "puAtual": 1083.8614880999999,
        "valorAtual": 43246073.37519,
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
        "puAtual": 1074.25620388,
        "valorAtual": 42862822.534811996,
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
        "puAtual": 788.39174503,
        "valorAtual": 31456830.626697,
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
        "puAtual": 682.20166709,
        "valorAtual": 27219846.516891,
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
        "puAtual": 507.32823242,
        "valorAtual": 12683205.8105,
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
        "puAtual": 1059.697085,
        "valorAtual": 9537273.765,
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
        "puAtual": 1059.697085,
        "valorAtual": 4439071.089065,
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
        "puAtual": 876.3073814,
        "valorAtual": 34964664.51786,
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
        "puAtual": 831.9569649499999,
        "valorAtual": 32949655.596844748,
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
        "puAtual": 1053.32217471,
        "valorAtual": 14009184.923642999,
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
        "puAtual": 1066.115047,
        "valorAtual": 14179330.1251,
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
        "puAtual": 999.57744262,
        "valorAtual": 19991548.8524,
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
        "puAtual": 1032.737282,
        "valorAtual": 20654745.64,
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
        "puAtual": 1015.20307556,
        "valorAtual": 15832091.9633582,
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
        "puAtual": 759.56264869,
        "valorAtual": 7929834.052323599,
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
        "puAtual": 1026.10519,
        "valorAtual": 6207936.3995,
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
        "puAtual": 1009.710695,
        "valorAtual": 20194213.9,
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
        "puAtual": 1009.710695,
        "valorAtual": 9065182.61971,
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
        "puAtual": 1001.64303675,
        "valorAtual": 13422016.69245,
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
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": 0.022626971975137078
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 487122753.23653316,
      "valor": 487122753.23653316,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 8605634.690206826,
      "valor": 8605634.690206826,
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
          "value": "R$ 495.728.387,93",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 477.296.469,73",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 18.431.918,20",
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
          "value": "R$ 487.122.753,24",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 8.605.634,69",
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
      "date": "01/06/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
