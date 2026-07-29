window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-05-21"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "21/05/2026",
    "dateKey": "2026-05-21",
    "importedAt": "2026-07-29T10:05:13.007861-03:00",
    "revisionId": "20260521-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 478635138.0727861,
    "pddTotal": 0.0,
    "carteiraVp": 478635138.0727861,
    "carteiraVpLiquido": 478635138.0727861,
    "caixa": 7838110.31,
    "total": 486473248.3827861,
    "lastrosAtivos": 1396.0,
    "quantidadeLastrosAtivos": 1396.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 7838110.31
    },
    "total": 7838110.31,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 471152177.86941177,
    "subordinadaTotal": 15321070.513374325,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 15321070.513374325,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 471152177.86941177,
        "valor": 471152177.86941177
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 15321070.513374325,
        "valor": 15321070.513374325
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 490213929.25,
    "valorPresente": 478635138.0727861,
    "valorPresenteLiquido": 478635138.0727861,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 46.18243014333528,
    "taxaMediaPonderada": 0.019398352850048935,
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
        "value": "R$ 478.635.138,07"
      },
      {
        "label": "Caixa total",
        "value": "R$ 7.838.110,31"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 15.321.070,51"
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
        "carteiraVp": 32365374.986295223,
        "valorNominal": 34589629.65,
        "caixa": 329981.41000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32695356.396295223,
        "funding": 32794997.805843,
        "subordinada": -99641.40954777598,
        "puSub": -996.4140954777598,
        "rendimentoSubDia": 0.011841876894390202,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 18,
        "cedentes": 9,
        "sacados": 12,
        "taxaMedia": 0.02218272545085255,
        "prazoMedio": 8.433156310261602,
        "montanteAtraso": 5194750.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 34366101.208522454,
        "valorNominal": 38419754.61,
        "caixa": 6153.129999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34372254.33852246,
        "funding": 34034207.801979,
        "subordinada": 338046.5365434587,
        "puSub": 3380.465365434587,
        "rendimentoSubDia": -0.02595762849553762,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 23,
        "cedentes": 5,
        "sacados": 13,
        "taxaMedia": 0.020275900815859154,
        "prazoMedio": 94.48059213809796,
        "montanteAtraso": 3539806.08
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 30419409.68761633,
        "valorNominal": 31317369.21,
        "caixa": 785413.19,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31204822.87761633,
        "funding": 31182727.023147,
        "subordinada": 22095.85446932912,
        "puSub": 220.95854469329117,
        "rendimentoSubDia": -0.050529898248896865,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 243,
        "cedentes": 13,
        "sacados": 126,
        "taxaMedia": 0.01857840611552512,
        "prazoMedio": 5.370455489710856,
        "montanteAtraso": 3097240.73
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 43121572.60421051,
        "valorNominal": 27267265.52,
        "caixa": 159620.39,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 43281192.99421051,
        "funding": 43153170.791745,
        "subordinada": 128022.20246551186,
        "puSub": 1280.2220246551185,
        "rendimentoSubDia": 0.023209999200651588,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018687921037830825,
        "prazoMedio": 11.881834606041874,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42771525.14696533,
        "valorNominal": 28015535.4,
        "caixa": 64851.14000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42836376.28696533,
        "funding": 42706170.690351,
        "subordinada": 130205.596614331,
        "puSub": 1302.0559661433101,
        "rendimentoSubDia": 0.021834615361006948,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.0186125908581274,
        "prazoMedio": 11.541136071305496,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 32450349.424619377,
        "valorNominal": 35667050.04,
        "caixa": 238513.69,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32688863.114619378,
        "funding": 32323198.177052997,
        "subordinada": 365664.93756638095,
        "puSub": 3656.6493756638097,
        "rendimentoSubDia": 0.0012488366753524716,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 368,
        "cedentes": 34,
        "sacados": 183,
        "taxaMedia": 0.020351279006694502,
        "prazoMedio": 12.394153124879413,
        "montanteAtraso": 181898.69
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 27425322.54713591,
        "valorNominal": 29917074.58,
        "caixa": 400914.5,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27826237.04713591,
        "funding": 27631617.787493996,
        "subordinada": 194619.25964191183,
        "puSub": 1946.1925964191184,
        "rendimentoSubDia": -0.01705012653657867,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 14,
        "cedentes": 9,
        "sacados": 13,
        "taxaMedia": 0.020365284522634457,
        "prazoMedio": 20.256801810994006,
        "montanteAtraso": 387490.9999999998
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 26512115.345323525,
        "valorNominal": 32032656.0,
        "caixa": 705804.7200000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27217920.065323524,
        "funding": 27206312.84292011,
        "subordinada": 11607.222403414547,
        "puSub": 116.07222403414548,
        "rendimentoSubDia": -0.4020603687225861,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01839920533177504,
        "prazoMedio": 130.58683725710767,
        "montanteAtraso": 12023098.98729838
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13671762.532039575,
        "valorNominal": 17468847.48,
        "caixa": 1410.300000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13673172.832039576,
        "funding": 0.0,
        "subordinada": 13673172.832039576,
        "puSub": 136731.72832039575,
        "rendimentoSubDia": 0.0009739725170048175,
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
        "carteiraVp": 35032905.37993424,
        "valorNominal": 37071022.33,
        "caixa": 401600.35000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35434505.72993424,
        "funding": 35204063.685147,
        "subordinada": 230442.04478723556,
        "puSub": 2304.4204478723555,
        "rendimentoSubDia": -0.06003542727771527,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 278,
        "cedentes": 23,
        "sacados": 151,
        "taxaMedia": 0.021099207058403704,
        "prazoMedio": 16.634695080504347,
        "montanteAtraso": 14887860.98
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 33107658.63646799,
        "valorNominal": 36951970.54,
        "caixa": 486630.8599999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33594289.49646799,
        "funding": 33347169.53467805,
        "subordinada": 247119.96178994328,
        "puSub": 2471.1996178994327,
        "rendimentoSubDia": -0.03076582804942518,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 111,
        "cedentes": 14,
        "sacados": 61,
        "taxaMedia": 0.017821619163338936,
        "prazoMedio": 40.194360539334596,
        "montanteAtraso": 861652.6599999999
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28279342.767561913,
        "valorNominal": 30212434.0,
        "caixa": 698713.59,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28978056.357561912,
        "funding": 28713913.327743,
        "subordinada": 264143.0298189111,
        "puSub": 2641.430298189111,
        "rendimentoSubDia": -0.014626268961475897,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020206539855397644,
        "prazoMedio": 4.659195814079555,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 41058424.65468687,
        "valorNominal": 43345891.22,
        "caixa": 660761.5499999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41719186.204686865,
        "funding": 41077274.68,
        "subordinada": 641911.5246868655,
        "puSub": 6419.115246868655,
        "rendimentoSubDia": 0.003030868019960664,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017911605633005243,
        "prazoMedio": 14.051399062209041,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 14996910.854484227,
        "valorNominal": 16017150.57,
        "caixa": 80109.96999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 15077020.824484227,
        "funding": 15822708.022060001,
        "subordinada": -745687.197575774,
        "puSub": -7456.87197575774,
        "rendimentoSubDia": -0.00018049242580220337,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018098155031739407,
        "prazoMedio": 7.2977445163328545,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14009456.914955484,
        "valorNominal": 15631423.299999999,
        "caixa": 2812960.27,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 16822417.184955485,
        "funding": 16859727.5251356,
        "subordinada": -37310.34018011391,
        "puSub": -373.1034018011391,
        "rendimentoSubDia": 0.047723847534852926,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016342617099465495,
        "prazoMedio": 155.27850506014036,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 29046905.38196712,
        "valorNominal": 36288854.8,
        "caixa": 4671.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29051576.63196712,
        "funding": 29094918.174116,
        "subordinada": -43341.54214888066,
        "puSub": -433.4154214888066,
        "rendimentoSubDia": 0.08454297171798775,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 251,
        "cedentes": 2,
        "sacados": 56,
        "taxaMedia": 0.019902459300143473,
        "prazoMedio": 278.4607122689333,
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
        "puAtual": 821.92976957,
        "valorAtual": 32794997.805843,
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
        "puAtual": 852.9876642099999,
        "valorAtual": 34034207.801979,
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
        "puAtual": 781.5219805300001,
        "valorAtual": 31182727.023147,
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
        "puAtual": 1081.53310255,
        "valorAtual": 43153170.791745,
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
        "puAtual": 1070.33009249,
        "valorAtual": 42706170.690351,
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
        "puAtual": 810.10521747,
        "valorAtual": 32323198.177052997,
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
        "puAtual": 692.5217490599999,
        "valorAtual": 27631617.787493996,
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
        "puAtual": 532.34137707,
        "valorAtual": 13308534.42675,
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
        "puAtual": 1053.74011799,
        "valorAtual": 9483661.06191,
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
        "puAtual": 1053.74011799,
        "valorAtual": 4414117.35426011,
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
        "puAtual": 882.30736053,
        "valorAtual": 35204063.685147,
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
        "puAtual": 841.99392841,
        "valorAtual": 33347169.53467805,
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
        "puAtual": 39.41351773,
        "valorAtual": 524199.785809,
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
        "puAtual": 1059.76366699,
        "valorAtual": 14094856.770967001,
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
        "puAtual": 1059.76366699,
        "valorAtual": 14094856.770967001,
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
        "puAtual": 1026.931867,
        "valorAtual": 20538637.34,
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
        "puAtual": 1026.931867,
        "valorAtual": 20538637.34,
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
        "puAtual": 1014.601348,
        "valorAtual": 15822708.022060001,
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
        "puAtual": 1023.62915099,
        "valorAtual": 10686688.3363356,
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
        "puAtual": 1020.337056,
        "valorAtual": 6173039.1888,
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
        "puAtual": 1004.034722,
        "valorAtual": 20080694.44,
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
        "puAtual": 1004.034722,
        "valorAtual": 9014223.734116,
        "quantidadeIntegralizada": 19900.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -0.0021214398686263403
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 471152177.86941177,
      "valor": 471152177.86941177,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 15321070.513374325,
      "valor": 15321070.513374325,
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
          "value": "R$ 486.473.248,38",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 478.635.138,07",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 7.838.110,31",
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
          "value": "R$ 471.152.177,87",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 15.321.070,51",
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
      "date": "21/05/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
