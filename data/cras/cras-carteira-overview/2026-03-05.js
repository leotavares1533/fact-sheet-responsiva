window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-03-05"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "05/03/2026",
    "dateKey": "2026-03-05",
    "importedAt": "2026-07-29T09:58:52.132579-03:00",
    "revisionId": "20260305-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 423349433.0578315,
    "pddTotal": 0.0,
    "carteiraVp": 423349433.0578315,
    "carteiraVpLiquido": 423349433.0578315,
    "caixa": 18863706.04,
    "total": 442213139.09783155,
    "lastrosAtivos": 2460.0,
    "quantidadeLastrosAtivos": 2460.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 18863706.04
    },
    "total": 18863706.04,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 419333841.24020123,
    "subordinadaTotal": 22879297.857630294,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 22879297.857630294,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 419333841.24020123,
        "valor": 419333841.24020123
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 22879297.857630294,
        "valor": 22879297.857630294
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 434399199.14,
    "valorPresente": 423349433.0578315,
    "valorPresenteLiquido": 423349433.0578315,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 20.437942728208718,
    "taxaMediaPonderada": 0.019949629483706786,
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
        "value": "R$ 423.349.433,06"
      },
      {
        "label": "Caixa total",
        "value": "R$ 18.863.706,04"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 22.879.297,86"
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
        "carteiraVp": 40248715.653480075,
        "valorNominal": 44142176.16,
        "caixa": 1921711.2699999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42170426.92348008,
        "funding": 41964220.993401,
        "subordinada": 206205.93007908016,
        "puSub": 2062.0593007908014,
        "rendimentoSubDia": 0.004565390909039735,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 285,
        "cedentes": 26,
        "sacados": 107,
        "taxaMedia": 0.021590237892491034,
        "prazoMedio": 6.434702686024233,
        "montanteAtraso": 107430.29
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 39576386.966489725,
        "valorNominal": 45461608.89,
        "caixa": 2448262.16,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42024649.12648973,
        "funding": 41854675.982301,
        "subordinada": 169973.1441887319,
        "puSub": 1699.731441887319,
        "rendimentoSubDia": 0.06605985505365797,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 275,
        "cedentes": 19,
        "sacados": 126,
        "taxaMedia": 0.02012162637480914,
        "prazoMedio": 77.94329032073357,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41224165.06519335,
        "valorNominal": 43878450.99,
        "caixa": 537731.81,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41761896.87519335,
        "funding": 41773685.406201,
        "subordinada": -11788.531007647514,
        "puSub": -117.88531007647515,
        "rendimentoSubDia": -0.08285752773152877,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 500,
        "cedentes": 22,
        "sacados": 262,
        "taxaMedia": 0.018861580429163683,
        "prazoMedio": 3.796606590823359,
        "montanteAtraso": 50993.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 31936909.091111094,
        "valorNominal": 16886049.52,
        "caixa": 81573.3,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32018482.391111095,
        "funding": 31996315.07106368,
        "subordinada": 22167.320047415793,
        "puSub": 221.67320047415794,
        "rendimentoSubDia": 0.12157589048310613,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018943643039818842,
        "prazoMedio": 6.217357592130867,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 31562013.951276056,
        "valorNominal": 17264983.55,
        "caixa": 127697.66,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31689711.611276057,
        "funding": 31648438.738829277,
        "subordinada": 41272.87244677916,
        "puSub": 412.7287244677916,
        "rendimentoSubDia": 0.0575399055439052,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01885918124520625,
        "prazoMedio": 7.183110563767177,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40411264.35813254,
        "valorNominal": 45541063.29,
        "caixa": 668619.7,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41079884.058132544,
        "funding": 40996443.620601,
        "subordinada": 83440.43753154576,
        "puSub": 834.4043753154576,
        "rendimentoSubDia": 0.01458889548103115,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 651,
        "cedentes": 40,
        "sacados": 269,
        "taxaMedia": 0.02031816522956353,
        "prazoMedio": 9.481871891148836,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 40590643.753671095,
        "valorNominal": 44230242.33,
        "caixa": 82148.28,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40672792.033671096,
        "funding": 40635319.134899996,
        "subordinada": 37472.898771099746,
        "puSub": 374.72898771099744,
        "rendimentoSubDia": -0.124907973773287,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 36,
        "cedentes": 11,
        "sacados": 28,
        "taxaMedia": 0.02080139546615894,
        "prazoMedio": 13.58409264890579,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 32256761.741449106,
        "valorNominal": 35608051.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32256761.741449106,
        "funding": 32117489.504412003,
        "subordinada": 139272.23703710362,
        "puSub": 1392.7223703710363,
        "rendimentoSubDia": 0.009297978147336128,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.017831828857821138,
        "prazoMedio": 59.19443302352367,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 12998595.916787611,
        "valorNominal": 17468847.48,
        "caixa": 9195311.26,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22193907.17678761,
        "funding": 0.0,
        "subordinada": 22193907.17678761,
        "puSub": 221939.0717678761,
        "rendimentoSubDia": -0.0054359295024449805,
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
        "carteiraVp": 39201323.845194615,
        "valorNominal": 42623954.8,
        "caixa": 1224841.19,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40426165.03519461,
        "funding": 40448687.243601,
        "subordinada": -22522.20840638876,
        "puSub": -225.2220840638876,
        "rendimentoSubDia": 0.23755002308894557,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 288,
        "cedentes": 29,
        "sacados": 121,
        "taxaMedia": 0.02117167318825579,
        "prazoMedio": 13.512930058012454,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 37542375.66570799,
        "valorNominal": 42507384.65,
        "caixa": 2575809.4099999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40118185.07570799,
        "funding": 40149630.53340395,
        "subordinada": -31445.457695961,
        "puSub": -314.45457695961,
        "rendimentoSubDia": 0.31239567037731253,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 249,
        "cedentes": 15,
        "sacados": 96,
        "taxaMedia": 0.018629194126284294,
        "prazoMedio": 33.19919524310866,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 35800277.04933829,
        "valorNominal": 38786386.48,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35800277.04933829,
        "funding": 35748935.011487365,
        "subordinada": 51342.037850923836,
        "puSub": 513.4203785092384,
        "rendimentoSubDia": -0.01224189858863245,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 152,
        "cedentes": 13,
        "sacados": 57,
        "taxaMedia": 0.021363547814266165,
        "prazoMedio": 2.983690477537304,
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
        "puAtual": 1051.73486199,
        "valorAtual": 41964220.993401,
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
        "puAtual": 1048.98937299,
        "valorAtual": 41854675.982301,
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
        "puAtual": 1046.95953399,
        "valorAtual": 41773685.406201,
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
        "puAtual": 1038.43681264,
        "valorAtual": 31996315.07106368,
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
        "puAtual": 1038.43681264,
        "valorAtual": 31648438.738829277,
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
        "puAtual": 1027.47978999,
        "valorAtual": 40996443.620601,
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
        "puAtual": 1018.429051,
        "valorAtual": 40635319.134899996,
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
        "puAtual": 1010.524164,
        "valorAtual": 25263104.1,
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
        "puAtual": 1010.524164,
        "valorAtual": 5223399.403716,
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
        "puAtual": 1010.524164,
        "valorAtual": 1630986.0006960002,
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
        "puAtual": 1013.75155999,
        "valorAtual": 40448687.243601,
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
        "puAtual": 1013.75155999,
        "valorAtual": 40149630.53340395,
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
        "puAtual": 1013.75155999,
        "valorAtual": 13482895.747867001,
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
        "puAtual": 1013.75155999,
        "valorAtual": 13482895.747867001,
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
        "puAtual": 1013.75155999,
        "valorAtual": 8783143.51575336,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-02-23",
        "reportDate": "23/02/2026",
        "caixaTotal": 5315998.640000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 22908836.085434005,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.00519294768516243
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 419333841.24020123,
      "valor": 419333841.24020123,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 22879297.857630294,
      "valor": 22879297.857630294,
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
          "value": "R$ 442.213.139,10",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 423.349.433,06",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 18.863.706,04",
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
          "value": "R$ 419.333.841,24",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 22.879.297,86",
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
      "date": "05/03/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
