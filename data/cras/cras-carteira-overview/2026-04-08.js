window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-04-08"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "08/04/2026",
    "dateKey": "2026-04-08",
    "importedAt": "2026-07-29T10:01:15.782766-03:00",
    "revisionId": "20260408-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 464215032.879756,
    "pddTotal": 0.0,
    "carteiraVp": 464215032.879756,
    "carteiraVpLiquido": 464215032.879756,
    "caixa": 20891941.33,
    "total": 485106974.209756,
    "lastrosAtivos": 1963.0,
    "quantidadeLastrosAtivos": 1963.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 20891941.33
    },
    "total": 20891941.33,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 477182952.9060193,
    "subordinadaTotal": 7924021.303736722,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 7924021.303736722,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 477182952.9060193,
        "valor": 477182952.9060193
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 7924021.303736722,
        "valor": 7924021.303736722
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 472186377.74,
    "valorPresente": 464215032.879756,
    "valorPresenteLiquido": 464215032.879756,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 24.304296187223766,
    "taxaMediaPonderada": 0.019687431374038413,
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
        "value": "R$ 464.215.032,88"
      },
      {
        "label": "Caixa total",
        "value": "R$ 20.891.941,33"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 7.924.021,30"
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
        "carteiraVp": 34099808.14937962,
        "valorNominal": 37143760.67,
        "caixa": 5624689.9399999995,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39724498.089379616,
        "funding": 40927170.819045,
        "subordinada": -1202672.7296653837,
        "puSub": -12026.727296653837,
        "rendimentoSubDia": 0.004795268382979501,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 79,
        "cedentes": 17,
        "sacados": 37,
        "taxaMedia": 0.022091327724981884,
        "prazoMedio": 7.772042485770968,
        "montanteAtraso": 5722730.58
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 36007532.7558371,
        "valorNominal": 41014493.33,
        "caixa": 3925136.64,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39932669.3958371,
        "funding": 40347839.077098,
        "subordinada": -415169.6812608987,
        "puSub": -4151.696812608987,
        "rendimentoSubDia": 0.019709980009747774,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 73,
        "cedentes": 12,
        "sacados": 46,
        "taxaMedia": 0.020226866588962982,
        "prazoMedio": 87.62937406472642,
        "montanteAtraso": 248373.2
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41638171.44380646,
        "valorNominal": 43433249.91,
        "caixa": 283223.7,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41921395.143806465,
        "funding": 41875121.298108,
        "subordinada": 46273.84569846839,
        "puSub": 462.73845698468386,
        "rendimentoSubDia": 0.024393829000845635,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 483,
        "cedentes": 21,
        "sacados": 249,
        "taxaMedia": 0.018847038238354683,
        "prazoMedio": 3.8308005987295406,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42195436.44520418,
        "valorNominal": 27267265.52,
        "caixa": 109053.55,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42304489.99520418,
        "funding": 42234994.839407995,
        "subordinada": 69495.15579618514,
        "puSub": 694.9515579618513,
        "rendimentoSubDia": 0.04003707860892325,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.01868863235825138,
        "prazoMedio": 11.834140590436428,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42167371.87038385,
        "valorNominal": 28015535.4,
        "caixa": 152913.74,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42320285.61038385,
        "funding": 42234994.839407995,
        "subordinada": 85290.77097585797,
        "puSub": 852.9077097585797,
        "rendimentoSubDia": 0.0306912492008955,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.018613681179240196,
        "prazoMedio": 11.406275888801261,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40462342.07620258,
        "valorNominal": 44696421.83,
        "caixa": 775257.5900000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41237599.66620258,
        "funding": 41013198.935330994,
        "subordinada": 224400.730871588,
        "puSub": 2244.00730871588,
        "rendimentoSubDia": 0.012684672532046193,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 628,
        "cedentes": 39,
        "sacados": 261,
        "taxaMedia": 0.02032968492719603,
        "prazoMedio": 9.673889983804402,
        "montanteAtraso": 5913.91
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38466613.87457149,
        "valorNominal": 41230242.33,
        "caixa": 27394.23000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38494008.104571484,
        "funding": 38377112.031825,
        "subordinada": 116896.07274648547,
        "puSub": 1168.9607274648547,
        "rendimentoSubDia": -0.037637362007962305,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 35,
        "cedentes": 10,
        "sacados": 27,
        "taxaMedia": 0.020481684140238553,
        "prazoMedio": 14.567465178892713,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39443434.02928092,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39443434.02928092,
        "funding": 39312363.61415501,
        "subordinada": 131070.41512591392,
        "puSub": 1310.7041512591393,
        "rendimentoSubDia": 0.012373653908049898,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.01826081898610106,
        "prazoMedio": 86.29657763769308,
        "montanteAtraso": 872943.0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13292154.916843291,
        "valorNominal": 17468847.48,
        "caixa": 79866.22000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13372021.136843292,
        "funding": 0.0,
        "subordinada": 13372021.136843292,
        "puSub": 133720.2113684329,
        "rendimentoSubDia": 0.0009701574276295144,
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
        "carteiraVp": 37820977.21512788,
        "valorNominal": 40657301.15,
        "caixa": 3528499.6999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41349476.91512788,
        "funding": 41250670.660101004,
        "subordinada": 98806.25502687693,
        "puSub": 988.0625502687693,
        "rendimentoSubDia": -0.047540250816308416,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 318,
        "cedentes": 26,
        "sacados": 175,
        "taxaMedia": 0.02119330410116025,
        "prazoMedio": 14.932747965726094,
        "montanteAtraso": 1584608.38
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 36703055.05782091,
        "valorNominal": 41213069.51,
        "caixa": 4201738.18,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40904793.23782091,
        "funding": 39467270.85955645,
        "subordinada": 1437522.378264457,
        "puSub": 14375.22378264457,
        "rendimentoSubDia": -0.0009511985060413064,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 186,
        "cedentes": 19,
        "sacados": 77,
        "taxaMedia": 0.018205223588673144,
        "prazoMedio": 35.84042396180987,
        "montanteAtraso": 3089526.46
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 34545207.436584845,
        "valorNominal": 36837654.22,
        "caixa": 2184167.8400000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36729375.27658485,
        "funding": 36457735.59292736,
        "subordinada": 271639.6836574897,
        "puSub": 2716.396836574897,
        "rendimentoSubDia": -0.013169852546743632,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 97,
        "cedentes": 11,
        "sacados": 41,
        "taxaMedia": 0.021358492406935665,
        "prazoMedio": 3.1788839371940876,
        "montanteAtraso": 2822659.37
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 23772927.60871287,
        "valorNominal": 25559442.11,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 23772927.60871287,
        "funding": 23778473.95761698,
        "subordinada": -5546.348904110491,
        "puSub": -55.463489041104914,
        "rendimentoSubDia": -0.12880118819346265,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 27,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.017797143291552943,
        "prazoMedio": 9.632299224769412,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 3600000.0,
        "valorNominal": 3919193.28,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 3600000.0,
        "funding": 9906006.3814395,
        "subordinada": -6306006.3814395,
        "puSub": -63060.063814395,
        "rendimentoSubDia": null,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.01782020366829795,
        "prazoMedio": 41.0,
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
        "puAtual": 1025.74362955,
        "valorAtual": 40927170.819045,
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
        "puAtual": 1011.22403702,
        "valorAtual": 40347839.077098,
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
        "puAtual": 1049.5017869199999,
        "valorAtual": 41875121.298108,
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
        "puAtual": 1058.52117392,
        "valorAtual": 42234994.839407995,
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
        "puAtual": 1058.52117392,
        "valorAtual": 42234994.839407995,
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
        "puAtual": 1027.8997226899999,
        "valorAtual": 41013198.935330994,
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
        "puAtual": 961.83238175,
        "valorAtual": 38377112.031825,
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
        "puAtual": 1029.415895,
        "valorAtual": 25735397.375000004,
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
        "puAtual": 1029.415895,
        "valorAtual": 9264743.055000002,
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
        "puAtual": 1029.415895,
        "valorAtual": 4312223.184155,
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
        "puAtual": 1033.85139499,
        "valorAtual": 41250670.660101004,
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
        "puAtual": 1033.85139499,
        "valorAtual": 13750223.553367,
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
        "puAtual": 1033.85139499,
        "valorAtual": 13750223.553367,
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
        "puAtual": 1033.85139499,
        "valorAtual": 8957288.48619336,
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
        "puAtual": 1003.22647699,
        "valorAtual": 20064529.5398,
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
        "puAtual": 1003.22647699,
        "valorAtual": 3713944.4178169803,
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
        "puAtual": 1000.0,
        "valorAtual": 3500000.0,
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
        "puAtual": 1058.84402999,
        "valorAtual": 6406006.3814395005,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-08",
        "reportDate": "08/04/2026",
        "caixaTotal": 20891941.33,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 7924021.303736722,
        "rendimentoSubDia": -0.4432946365233832
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 477182952.9060193,
      "valor": 477182952.9060193,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 7924021.303736722,
      "valor": 7924021.303736722,
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
          "value": "R$ 485.106.974,21",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 464.215.032,88",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 20.891.941,33",
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
          "value": "R$ 477.182.952,91",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 7.924.021,30",
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
      "date": "08/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
