window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-04-07"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "07/04/2026",
    "dateKey": "2026-04-07",
    "importedAt": "2026-07-29T10:01:09.248315-03:00",
    "revisionId": "20260407-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 461126527.7721638,
    "pddTotal": 0.0,
    "carteiraVp": 461126527.7721638,
    "carteiraVpLiquido": 461126527.7721638,
    "caixa": 19988842.55,
    "total": 481115370.3221638,
    "lastrosAtivos": 1968.0,
    "quantidadeLastrosAtivos": 1968.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 19988842.55
    },
    "total": 19988842.55,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 466881590.9774646,
    "subordinadaTotal": 14233779.344699187,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 14233779.344699187,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 466881590.9774646,
        "valor": 466881590.9774646
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 14233779.344699187,
        "valor": 14233779.344699187
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 469020468.90999997,
    "valorPresente": 461126527.7721638,
    "valorPresenteLiquido": 461126527.7721638,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 24.128895565297675,
    "taxaMediaPonderada": 0.019702876877433072,
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
        "value": "R$ 461.126.527,77"
      },
      {
        "label": "Caixa total",
        "value": "R$ 19.988.842,55"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 14.233.779,34"
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
        "carteiraVp": 34070217.35856143,
        "valorNominal": 37143760.67,
        "caixa": 5622502.83,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39692720.188561425,
        "funding": 40889653.302708,
        "subordinada": -1196933.1141465753,
        "puSub": -11969.331141465753,
        "rendimentoSubDia": 0.00481712211107066,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 79,
        "cedentes": 17,
        "sacados": 37,
        "taxaMedia": 0.022090990710901814,
        "prazoMedio": 7.771003913131483,
        "montanteAtraso": 5722730.58
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 35982009.93163913,
        "valorNominal": 41014493.33,
        "caixa": 3923613.6700000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39905623.60163913,
        "funding": 40312768.465766996,
        "subordinada": -407144.8641278669,
        "puSub": -4071.448641278669,
        "rendimentoSubDia": 0.01889023469413975,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 73,
        "cedentes": 12,
        "sacados": 46,
        "taxaMedia": 0.020226860669313753,
        "prazoMedio": 87.63318375801039,
        "montanteAtraso": 248373.2
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41602201.64656459,
        "valorNominal": 43433249.91,
        "caixa": 283166.84,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41885368.48656459,
        "funding": 41840196.557187,
        "subordinada": 45171.9293775931,
        "puSub": 451.719293775931,
        "rendimentoSubDia": 0.05577913228303899,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 483,
        "cedentes": 21,
        "sacados": 249,
        "taxaMedia": 0.018846985966495707,
        "prazoMedio": 3.830941482136129,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42157785.918978184,
        "valorNominal": 27267265.52,
        "caixa": 109009.42,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42266795.338978186,
        "funding": 42199975.456085995,
        "subordinada": 66819.88289219141,
        "puSub": 668.1988289219141,
        "rendimentoSubDia": 0.04163020400842932,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.01868858072942723,
        "prazoMedio": 11.834204197173516,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42129872.92432561,
        "valorNominal": 28015535.4,
        "caixa": 152853.57,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42282726.49432561,
        "funding": 42199975.456085995,
        "subordinada": 82751.03823961318,
        "puSub": 827.5103823961317,
        "rendimentoSubDia": 0.03160547113860934,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.01861362225892292,
        "prazoMedio": 11.406206046487519,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40645187.448583335,
        "valorNominal": 44917430.33,
        "caixa": 555923.53,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41201110.978583336,
        "funding": 40979521.043474995,
        "subordinada": 221589.93510834128,
        "puSub": 2215.899351083413,
        "rendimentoSubDia": 0.006570381951603865,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 629,
        "cedentes": 39,
        "sacados": 262,
        "taxaMedia": 0.02032813811130231,
        "prazoMedio": 9.621491613837488,
        "montanteAtraso": 5913.91
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38437869.85778842,
        "valorNominal": 41230242.33,
        "caixa": 27352.28,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38465222.13778842,
        "funding": 38343754.337469004,
        "subordinada": 121467.80031941831,
        "puSub": 1214.678003194183,
        "rendimentoSubDia": -0.03622891598776279,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 35,
        "cedentes": 10,
        "sacados": 27,
        "taxaMedia": 0.02048104801692832,
        "prazoMedio": 14.571131729960486,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39410185.724123865,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39410185.724123865,
        "funding": 39280717.306391,
        "subordinada": 129468.41773286462,
        "puSub": 1294.6841773286462,
        "rendimentoSubDia": 0.012502462203982656,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.018260760714056388,
        "prazoMedio": 86.29044112696178,
        "montanteAtraso": 872943.0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13279254.694835534,
        "valorNominal": 17468847.48,
        "caixa": 79806.05000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13359060.744835535,
        "funding": 0.0,
        "subordinada": 13359060.744835535,
        "puSub": 133590.60744835535,
        "rendimentoSubDia": 0.000970158296766721,
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
        "carteiraVp": 37917678.40854662,
        "valorNominal": 40657301.15,
        "caixa": 3401533.0100000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41319211.41854662,
        "funding": 41215473.433701,
        "subordinada": 103737.98484561592,
        "puSub": 1037.3798484561592,
        "rendimentoSubDia": -0.04296983281309352,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 318,
        "cedentes": 26,
        "sacados": 175,
        "taxaMedia": 0.021168748117866846,
        "prazoMedio": 14.878571252976895,
        "montanteAtraso": 1584608.38
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 37174601.25398614,
        "valorNominal": 41701893.46,
        "caixa": 3697885.1,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40872486.353986144,
        "funding": 39433595.304705255,
        "subordinada": 1438891.0492808893,
        "puSub": 14388.910492808893,
        "rendimentoSubDia": -0.007174760154221915,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 190,
        "cedentes": 19,
        "sacados": 80,
        "taxaMedia": 0.018250028856531722,
        "prazoMedio": 35.37797200256103,
        "montanteAtraso": 3578350.41
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 34566696.58058228,
        "valorNominal": 36881106.22,
        "caixa": 2135196.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36701892.83058228,
        "funding": 36426627.949023366,
        "subordinada": 275264.88155891746,
        "puSub": 2752.648815589175,
        "rendimentoSubDia": -0.015967255471903585,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 98,
        "cedentes": 11,
        "sacados": 42,
        "taxaMedia": 0.021361389795594612,
        "prazoMedio": 3.1730863391667925,
        "montanteAtraso": 2822659.37
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 23752966.02364865,
        "valorNominal": 25559442.11,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 23752966.02364865,
        "funding": 23759332.364866,
        "subordinada": -6366.341217350215,
        "puSub": -63.663412173502145,
        "rendimentoSubDia": -0.11393730621596454,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 27,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01779714327614397,
        "prazoMedio": 9.632295617066118,
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
        "puAtual": 1024.80334092,
        "valorAtual": 40889653.302708,
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
        "puAtual": 1010.34507433,
        "valorAtual": 40312768.465766996,
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
        "puAtual": 1048.62648013,
        "valorAtual": 41840196.557187,
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
        "puAtual": 1057.64349514,
        "valorAtual": 42199975.456085995,
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
        "puAtual": 1057.64349514,
        "valorAtual": 42199975.456085995,
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
        "puAtual": 1027.05566525,
        "valorAtual": 40979521.043474995,
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
        "puAtual": 960.99634931,
        "valorAtual": 38343754.337469004,
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
        "puAtual": 1028.587219,
        "valorAtual": 25714680.475,
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
        "puAtual": 1028.587219,
        "valorAtual": 9257284.971,
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
        "puAtual": 1028.587219,
        "valorAtual": 4308751.860391,
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
        "puAtual": 1032.96925899,
        "valorAtual": 41215473.433701,
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
        "puAtual": 995.67214505,
        "valorAtual": 39433595.304705255,
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
        "puAtual": 1032.96925899,
        "valorAtual": 13738491.144567002,
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
        "puAtual": 1032.96925899,
        "valorAtual": 13738491.144567002,
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
        "puAtual": 1032.96925899,
        "valorAtual": 8949645.65988936,
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
        "puAtual": 1002.418883,
        "valorAtual": 20048377.66,
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
        "puAtual": 1002.418883,
        "valorAtual": 3710954.704866,
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
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-02-24",
        "reportDate": "24/02/2026",
        "caixaTotal": 7806383.26,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22859543.354595747,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-25",
        "reportDate": "25/02/2026",
        "caixaTotal": 6119579.699999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22939436.29085665,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-26",
        "reportDate": "26/02/2026",
        "caixaTotal": 7677970.79,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22877962.673280343,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-27",
        "reportDate": "27/02/2026",
        "caixaTotal": 6983847.33,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22886379.558468614,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-02",
        "reportDate": "02/03/2026",
        "caixaTotal": 6984838.66,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 19782045.79836372,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-03",
        "reportDate": "03/03/2026",
        "caixaTotal": 11374484.13,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22978340.692018375,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-04",
        "reportDate": "04/03/2026",
        "caixaTotal": 10111910.64,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22998729.0544352,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-05",
        "reportDate": "05/03/2026",
        "caixaTotal": 18863706.04,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22879297.857630294,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-06",
        "reportDate": "06/03/2026",
        "caixaTotal": 18427920.44,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22878819.30598335,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.0009104765650022051
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 466881590.9774646,
      "valor": 466881590.9774646,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 14233779.344699187,
      "valor": 14233779.344699187,
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
          "value": "R$ 481.115.370,32",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 461.126.527,77",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 19.988.842,55",
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
          "value": "R$ 466.881.590,98",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 14.233.779,34",
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
      "date": "07/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
