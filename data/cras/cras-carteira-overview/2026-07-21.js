window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-21"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "21/07/2026",
    "dateKey": "2026-07-21",
    "importedAt": "2026-07-29T10:13:39.760706-03:00",
    "revisionId": "20260721-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 315166592.2516624,
    "pddTotal": 0.0,
    "carteiraVp": 315166592.2516624,
    "carteiraVpLiquido": 315166592.2516624,
    "caixa": 6437514.26,
    "total": 321604106.51166236,
    "lastrosAtivos": 915.0,
    "quantidadeLastrosAtivos": 915.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 6437514.26
    },
    "total": 6437514.26,
    "cessaoRendimentosDia": 3899198.4499999993,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 319153551.991237,
    "subordinadaTotal": 2450554.5204253583,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 2450554.5204253583,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 319153551.991237,
        "valor": 319153551.991237
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 2450554.5204253583,
        "valor": 2450554.5204253583
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 376703845.04,
    "valorPresente": 315166592.2516624,
    "valorPresenteLiquido": 315166592.2516624,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 156.9103045381248,
    "taxaMediaPonderada": 0.018992090288344032,
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
        "value": "R$ 315.166.592,25"
      },
      {
        "label": "Caixa total",
        "value": "R$ 6.437.514,26"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 3.899.198,45"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 2.450.554,52"
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
        "carteiraVp": 15858158.334129393,
        "valorNominal": 23737047.65,
        "caixa": 436724.15,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 16294882.484129393,
        "funding": 16066182.90543,
        "subordinada": 228699.5786993932,
        "puSub": 2286.995786993932,
        "rendimentoSubDia": 0.008920369393129679,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.022573399834025495,
        "prazoMedio": 12.74331530455697,
        "montanteAtraso": 100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 26215178.52444063,
        "valorNominal": 28550334.8,
        "caixa": 1174.9300000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26216353.45444063,
        "funding": 25953865.711515,
        "subordinada": 262487.74292563275,
        "puSub": 2624.8774292563276,
        "rendimentoSubDia": -0.01901149243471556,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.02020291220162283,
        "prazoMedio": 128.9891142948036,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 1554331.5607525592,
        "valorNominal": 19023272.3,
        "caixa": 3948.3899999999994,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 1558279.9507525591,
        "funding": 1435476.9134999998,
        "subordinada": 122803.03725255933,
        "puSub": 1228.0303725255933,
        "rendimentoSubDia": -0.0015535684436904784,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01833851462508997,
        "prazoMedio": -2.3425408973530835,
        "montanteAtraso": 347967.87
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 25156002.09934338,
        "valorNominal": 26843675.89,
        "caixa": 5834.959999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 25161837.059343383,
        "funding": 25013680.951098002,
        "subordinada": 148156.10824538022,
        "puSub": 1481.5610824538023,
        "rendimentoSubDia": 0.012168433018961533,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.018861474419707387,
        "prazoMedio": 18.992230806557476,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 26245929.238676418,
        "valorNominal": 26344807.88,
        "caixa": 935.0699999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26246864.308676418,
        "funding": 26071618.975353003,
        "subordinada": 175245.33332341537,
        "puSub": 1752.4533332341537,
        "rendimentoSubDia": 0.012031749628175659,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01886037378955798,
        "prazoMedio": 19.52918830567746,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10189532.049434649,
        "valorNominal": 10552681.8,
        "caixa": 36773.020000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10226305.069434648,
        "funding": 9837604.461321,
        "subordinada": 388700.60811364837,
        "puSub": 3887.0060811364838,
        "rendimentoSubDia": -9.467738467328068e-06,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 244,
        "cedentes": 21,
        "sacados": 129,
        "taxaMedia": 0.020567273795172543,
        "prazoMedio": 41.374883870028455,
        "montanteAtraso": 1911499.9999999998
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13513556.35923829,
        "valorNominal": 14949673.5,
        "caixa": 104008.17000000004,
        "cessaoRendimentosDia": 3022.4300000000367,
        "ativoTotal": 13617564.52923829,
        "funding": 13373460.383031,
        "subordinada": 244104.14620728977,
        "puSub": 2441.0414620728975,
        "rendimentoSubDia": -0.0018435109798357052,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.017614024413354367,
        "prazoMedio": 42.306687827706654,
        "montanteAtraso": 2389571.540837002
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12573583.56893303,
        "valorNominal": 24122656.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 12573583.56893303,
        "funding": 12727624.17852111,
        "subordinada": -154040.60958807915,
        "puSub": -1540.4060958807916,
        "rendimentoSubDia": 0.023780749105644317,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01821657529921101,
        "prazoMedio": 141.76082808979982,
        "montanteAtraso": 6021715.5625022035
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 59011.47,
        "cessaoRendimentosDia": 1.0499999999883585,
        "ativoTotal": 59011.47,
        "funding": 0.0,
        "subordinada": 59011.47,
        "puSub": 590.1147,
        "rendimentoSubDia": null,
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
        "carteiraVp": 19107205.566789337,
        "valorNominal": 20470404.96,
        "caixa": 158428.66,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19265634.226789337,
        "funding": 18909240.262794,
        "subordinada": 356393.9639953375,
        "puSub": 3563.939639953375,
        "rendimentoSubDia": -0.006510321438377598,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 218,
        "cedentes": 16,
        "sacados": 129,
        "taxaMedia": 0.01803009657592152,
        "prazoMedio": 31.959794478825014,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14492600.298277546,
        "valorNominal": 15730474.53,
        "caixa": 597.5500000000029,
        "cessaoRendimentosDia": 6.849999999998545,
        "ativoTotal": 14493197.848277546,
        "funding": 14324580.809583899,
        "subordinada": 168617.03869364783,
        "puSub": 1686.1703869364783,
        "rendimentoSubDia": -0.020329114466624332,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 87,
        "cedentes": 9,
        "sacados": 47,
        "taxaMedia": 0.015626136685394254,
        "prazoMedio": 92.85564982629634,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 11747303.926009182,
        "valorNominal": 12726256.36,
        "caixa": 3850010.64,
        "cessaoRendimentosDia": 3845681.1100000003,
        "ativoTotal": 15597314.566009182,
        "funding": 15288832.656202,
        "subordinada": 308481.90980718285,
        "puSub": 3084.8190980718286,
        "rendimentoSubDia": 0.0770943413394416,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 4,
        "sacados": 6,
        "taxaMedia": 0.015328605867594228,
        "prazoMedio": 11.77475057557858,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 22195431.871948674,
        "valorNominal": 22581225.5,
        "caixa": 418975.28,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22614407.151948676,
        "funding": 22552466.237999998,
        "subordinada": 61940.91394867748,
        "puSub": 619.4091394867748,
        "rendimentoSubDia": 0.010712706255461502,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.0179650649994947,
        "prazoMedio": 26.94284744282128,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2909839.4351338916,
        "valorNominal": 2983591.13,
        "caixa": 12342.959999999992,
        "cessaoRendimentosDia": 35.0,
        "ativoTotal": 2922182.3951338916,
        "funding": 3020122.2024506,
        "subordinada": -97939.80731670838,
        "puSub": -979.3980731670838,
        "rendimentoSubDia": -0.0011646010616875868,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.018290245528719273,
        "prazoMedio": 39.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "carteiraVp": 30045823.554662075,
        "valorNominal": 31789039.52,
        "caixa": 10011.740000000005,
        "cessaoRendimentosDia": 10011.740000000005,
        "ativoTotal": 30055835.294662073,
        "funding": 30059451.669703,
        "subordinada": -3616.375040926039,
        "puSub": -36.163750409260395,
        "rendimentoSubDia": -0.7678218076227662,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01780295801636551,
        "prazoMedio": 95.01096466972768,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14466843.063524783,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 39846.5399999991,
        "ativoTotal": 14470286.183524782,
        "funding": 14541929.985927898,
        "subordinada": -71643.8024031166,
        "puSub": -716.438024031166,
        "rendimentoSubDia": 0.00930777278855488,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016344701592152632,
        "prazoMedio": 155.044782517853,
        "montanteAtraso": 4567130.1795417955
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41731013.35475602,
        "valorNominal": 51743678.75,
        "caixa": 5736.0,
        "cessaoRendimentosDia": 46.73999999999069,
        "ativoTotal": 41736749.35475602,
        "funding": 41439163.08840001,
        "subordinada": 297586.2663560137,
        "puSub": 2975.862663560137,
        "rendimentoSubDia": -0.0040241311224155085,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.02263563990979689,
        "prazoMedio": 285.2489441733673,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 27164259.44561249,
        "valorNominal": 28923601.169999998,
        "caixa": 1329558.15,
        "cessaoRendimentosDia": 546.9899999997579,
        "ativoTotal": 28493817.59561249,
        "funding": 28538250.59840648,
        "subordinada": -44433.002793990076,
        "puSub": -444.33002793990073,
        "rendimentoSubDia": -0.021608666332379345,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 6,
        "sacados": 7,
        "taxaMedia": 0.01857101463876767,
        "prazoMedio": 820.9050631233813,
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
        "puAtual": 402.6612257,
        "valorAtual": 16066182.90543,
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
        "puAtual": 650.4728248499999,
        "valorAtual": 25953865.711515,
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
        "puAtual": 35.976865,
        "valorAtual": 1435476.9134999998,
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
        "puAtual": 626.90929702,
        "valorAtual": 25013680.951098002,
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
        "puAtual": 653.42403447,
        "valorAtual": 26071618.975353003,
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
        "puAtual": 246.55650279,
        "valorAtual": 9837604.461321,
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
        "puAtual": 335.17444568999997,
        "valorAtual": 13373460.383031,
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
        "puAtual": 0,
        "valorAtual": 0,
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
        "puAtual": 906.85026609,
        "valorAtual": 8161652.3948099995,
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
        "puAtual": 1089.99087699,
        "valorAtual": 4565971.78371111,
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
        "puAtual": 473.91579606,
        "valorAtual": 18909240.262794,
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
        "puAtual": 361.68617118,
        "valorAtual": 14324580.809583899,
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
        "puAtual": 51.08878394,
        "valorAtual": 679480.826402,
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
        "puAtual": 1098.447506,
        "valorAtual": 14609351.8298,
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
        "puAtual": 65.3629439,
        "valorAtual": 1307258.878,
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
        "puAtual": 1062.260368,
        "valorAtual": 21245207.36,
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
        "puAtual": 193.65964748,
        "valorAtual": 3020122.2024506,
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
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000S6",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000S7",
        "puAtual": 997.09509512,
        "valorAtual": 19941901.9024,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000S8",
        "puAtual": 1021.97472397,
        "valorAtual": 10117549.767303,
        "quantidadeIntegralizada": 9900.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02600209",
        "puAtual": 781.27643236,
        "valorAtual": 8156525.9538384,
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
        "puAtual": 1055.43868299,
        "valorAtual": 6385404.0320895,
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
        "puAtual": 1038.575516,
        "valorAtual": 20771510.32,
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
        "puAtual": 1038.575516,
        "valorAtual": 20667652.768400002,
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
        "puAtual": 921.5126487099999,
        "valorAtual": 18430252.9742,
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
        "puAtual": 1026.40105851,
        "valorAtual": 10107997.62420648,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-06-10",
        "reportDate": "10/06/2026",
        "caixaTotal": 4209477.0200000005,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5161335.136598949,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-11",
        "reportDate": "11/06/2026",
        "caixaTotal": 5243220.23,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5130286.27391623,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-12",
        "reportDate": "12/06/2026",
        "caixaTotal": 1519204.16,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5027474.018246456,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-15",
        "reportDate": "15/06/2026",
        "caixaTotal": 1723263.96,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5133205.576268571,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-16",
        "reportDate": "16/06/2026",
        "caixaTotal": 14316300.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 10422054.436621176,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-17",
        "reportDate": "17/06/2026",
        "caixaTotal": 14317019.93,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 10390803.377337696,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-18",
        "reportDate": "18/06/2026",
        "caixaTotal": 14895696.75,
        "cessaoRendimentosDia": 578676.82,
        "subordinadaTotal": 10361500.233802604,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-19",
        "reportDate": "19/06/2026",
        "caixaTotal": 6385785.289999999,
        "cessaoRendimentosDia": -8509911.46,
        "subordinadaTotal": 5125109.567757666,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-22",
        "reportDate": "22/06/2026",
        "caixaTotal": 7597112.249999999,
        "cessaoRendimentosDia": 1211326.9599999997,
        "subordinadaTotal": 5254544.152471506,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-23",
        "reportDate": "23/06/2026",
        "caixaTotal": 11268748.919999998,
        "cessaoRendimentosDia": 3671617.4699999997,
        "subordinadaTotal": 5211965.5613245,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-24",
        "reportDate": "24/06/2026",
        "caixaTotal": 30332630.92,
        "cessaoRendimentosDia": 17364120.05,
        "subordinadaTotal": 7663715.069139692,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-25",
        "reportDate": "25/06/2026",
        "caixaTotal": 30351499.87,
        "cessaoRendimentosDia": 17979.18999999961,
        "subordinadaTotal": 7639994.780474476,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-26",
        "reportDate": "26/06/2026",
        "caixaTotal": 4296678.45,
        "cessaoRendimentosDia": -23734836.39,
        "subordinadaTotal": 5111261.859385786,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-29",
        "reportDate": "29/06/2026",
        "caixaTotal": 4738750.899999999,
        "cessaoRendimentosDia": 442057.5200000001,
        "subordinadaTotal": 5256509.267965611,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-30",
        "reportDate": "30/06/2026",
        "caixaTotal": 7964355.43,
        "cessaoRendimentosDia": 3225589.5500000003,
        "subordinadaTotal": 4700776.909904404,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-01",
        "reportDate": "01/07/2026",
        "caixaTotal": 8271406.84,
        "cessaoRendimentosDia": 307051.2899999999,
        "subordinadaTotal": 4690282.15453174,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-02",
        "reportDate": "02/07/2026",
        "caixaTotal": 9760412.27,
        "cessaoRendimentosDia": 1489095.2999999996,
        "subordinadaTotal": 5345587.335534122,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-03",
        "reportDate": "03/07/2026",
        "caixaTotal": 7406920.840000001,
        "cessaoRendimentosDia": -2353491.699999999,
        "subordinadaTotal": 5178222.410346768,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-06",
        "reportDate": "06/07/2026",
        "caixaTotal": 6731405.09,
        "cessaoRendimentosDia": -675515.480000001,
        "subordinadaTotal": -48516153.99894648,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-07",
        "reportDate": "07/07/2026",
        "caixaTotal": 58131924.09,
        "cessaoRendimentosDia": 51400519.0,
        "subordinadaTotal": 2643049.059809388,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-08",
        "reportDate": "08/07/2026",
        "caixaTotal": 59992715.6,
        "cessaoRendimentosDia": 1860791.5100000019,
        "subordinadaTotal": 2620355.182283589,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-09",
        "reportDate": "09/07/2026",
        "caixaTotal": 60514668.830000006,
        "cessaoRendimentosDia": 521965.9600000004,
        "subordinadaTotal": 2237624.433209094,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-10",
        "reportDate": "10/07/2026",
        "caixaTotal": 35366124.72,
        "cessaoRendimentosDia": -26900573.040000003,
        "subordinadaTotal": 25944718.135794826,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-13",
        "reportDate": "13/07/2026",
        "caixaTotal": 37120612.78,
        "cessaoRendimentosDia": 1648155.5500000035,
        "subordinadaTotal": 23744204.767931785,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-14",
        "reportDate": "14/07/2026",
        "caixaTotal": 37162118.370000005,
        "cessaoRendimentosDia": 40833.93999999993,
        "subordinadaTotal": 23734185.190334313,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-15",
        "reportDate": "15/07/2026",
        "caixaTotal": 37178782.6,
        "cessaoRendimentosDia": 15992.220000000263,
        "subordinadaTotal": 23713924.100281045,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-16",
        "reportDate": "16/07/2026",
        "caixaTotal": 37241678.690000005,
        "cessaoRendimentosDia": 62220.489999999925,
        "subordinadaTotal": 23438909.672320027,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-17",
        "reportDate": "17/07/2026",
        "caixaTotal": 41275707.55,
        "cessaoRendimentosDia": 4033314.459999997,
        "subordinadaTotal": 23418729.628405537,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-20",
        "reportDate": "20/07/2026",
        "caixaTotal": 2578162.35,
        "cessaoRendimentosDia": -37264475.1,
        "subordinadaTotal": 2425883.4905180703,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-21",
        "reportDate": "21/07/2026",
        "caixaTotal": 6437514.26,
        "cessaoRendimentosDia": 3899198.4499999993,
        "subordinadaTotal": 2450554.5204253583,
        "rendimentoSubDia": 0.010169915415854991
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 319153551.991237,
      "valor": 319153551.991237,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 2450554.5204253583,
      "valor": 2450554.5204253583,
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
          "value": "R$ 321.604.106,51",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 315.166.592,25",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 6.437.514,26",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 3.899.198,45",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 319.153.551,99",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 2.450.554,52",
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
      "date": "21/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
