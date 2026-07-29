window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-05-05"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "05/05/2026",
    "dateKey": "2026-05-05",
    "importedAt": "2026-07-29T10:03:33.972566-03:00",
    "revisionId": "20260505-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 442973506.30430144,
    "pddTotal": 0.0,
    "carteiraVp": 442973506.30430144,
    "carteiraVpLiquido": 442973506.30430144,
    "caixa": 61122254.18,
    "total": 504095760.48430145,
    "lastrosAtivos": 1301.0,
    "quantidadeLastrosAtivos": 1301.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 61122254.18
    },
    "total": 61122254.18,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 489115824.93706286,
    "subordinadaTotal": 14979935.54723854,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 14979935.54723854,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 489115824.93706286,
        "valor": 489115824.93706286
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 14979935.54723854,
        "valor": 14979935.54723854
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 449559587.03999996,
    "valorPresente": 442973506.30430144,
    "valorPresenteLiquido": 442973506.30430144,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 31.687470011622377,
    "taxaMediaPonderada": 0.019438258961944153,
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
        "value": "R$ 442.973.506,30"
      },
      {
        "label": "Caixa total",
        "value": "R$ 61.122.254,18"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 14.979.935,55"
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
        "carteiraVp": 32328841.88432356,
        "valorNominal": 34900329.65,
        "caixa": 1891066.17,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34219908.05432356,
        "funding": 33983966.045169,
        "subordinada": 235942.00915455818,
        "puSub": 2359.4200915455817,
        "rendimentoSubDia": -0.005027016273750573,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 21,
        "cedentes": 9,
        "sacados": 14,
        "taxaMedia": 0.02217023181165585,
        "prazoMedio": 8.338847805641135,
        "montanteAtraso": 5100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 34038726.789789736,
        "valorNominal": 38419754.61,
        "caixa": 2604213.8200000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36642940.60978974,
        "funding": 36766682.343657,
        "subordinada": -123741.73386726528,
        "puSub": -1237.417338672653,
        "rendimentoSubDia": 0.09450795852807858,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 23,
        "cedentes": 5,
        "sacados": 13,
        "taxaMedia": 0.020276420497770033,
        "prazoMedio": 94.37881509566218,
        "montanteAtraso": 3539806.08
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 31365262.858459763,
        "valorNominal": 32556869.169999998,
        "caixa": 10494328.459999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41859591.318459764,
        "funding": 41801081.91966001,
        "subordinada": 58509.39879975468,
        "puSub": 585.0939879975468,
        "rendimentoSubDia": -0.043988734220818726,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 273,
        "cedentes": 15,
        "sacados": 142,
        "taxaMedia": 0.018661136920681068,
        "prazoMedio": 5.157180923620637,
        "montanteAtraso": 2974719.68
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42839969.66692469,
        "valorNominal": 27267265.52,
        "caixa": 105084.26,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42945053.92692469,
        "funding": 42833678.139609,
        "subordinada": 111375.78731568903,
        "puSub": 1113.7578731568904,
        "rendimentoSubDia": 0.025904476125516274,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018689509816056993,
        "prazoMedio": 11.833256963746106,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42809322.29671581,
        "valorNominal": 28015535.4,
        "caixa": 147907.93,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42957230.22671581,
        "funding": 42833678.139609,
        "subordinada": 123552.08710680902,
        "puSub": 1235.5208710680902,
        "rendimentoSubDia": 0.022194294153876415,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.01861468392129089,
        "prazoMedio": 11.407645537444628,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 34507228.933936715,
        "valorNominal": 38070328.61,
        "caixa": 6330249.209999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40837478.143936716,
        "funding": 40503700.011788994,
        "subordinada": 333778.13214772195,
        "puSub": 3337.7813214772195,
        "rendimentoSubDia": -0.00012144594728813463,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 445,
        "cedentes": 37,
        "sacados": 204,
        "taxaMedia": 0.0203499296613808,
        "prazoMedio": 11.523931205916938,
        "montanteAtraso": 2083486.98
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 27517821.74594598,
        "valorNominal": 30224506.14,
        "caixa": 11629336.8,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39147158.54594598,
        "funding": 38948653.141965,
        "subordinada": 198505.40398097783,
        "puSub": 1985.0540398097783,
        "rendimentoSubDia": -0.04273390810519839,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 21,
        "cedentes": 9,
        "sacados": 17,
        "taxaMedia": 0.020402406868784462,
        "prazoMedio": 20.33590717416706,
        "montanteAtraso": 422187.46
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 27026355.840261914,
        "valorNominal": 32032656.0,
        "caixa": 12954339.55,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39980695.39026192,
        "funding": 39854268.69346011,
        "subordinada": 126426.69680181146,
        "puSub": 1264.2669680181145,
        "rendimentoSubDia": -0.09166876673380742,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01844673320161395,
        "prazoMedio": 132.21016429298055,
        "montanteAtraso": 12012318.195809998
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13513386.05874065,
        "valorNominal": 17468847.48,
        "caixa": 80814.17999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13594200.23874065,
        "funding": 0.0,
        "subordinada": 13594200.23874065,
        "puSub": 135942.00238740648,
        "rendimentoSubDia": 0.0009639043162699146,
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
        "carteiraVp": 35706376.68620715,
        "valorNominal": 37896495.33,
        "caixa": 2510959.6100000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38217336.29620715,
        "funding": 37988344.174955994,
        "subordinada": 228992.12125115842,
        "puSub": 2289.921212511584,
        "rendimentoSubDia": 0.009072434660512663,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 287,
        "cedentes": 23,
        "sacados": 155,
        "taxaMedia": 0.02105629208649606,
        "prazoMedio": 16.110512260913346,
        "montanteAtraso": 1606820.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 33409845.181417137,
        "valorNominal": 37540125.019999996,
        "caixa": 2108879.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35518724.43141714,
        "funding": 35543227.74523745,
        "subordinada": -24503.313820309937,
        "puSub": -245.03313820309938,
        "rendimentoSubDia": -0.41293047413086803,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 136,
        "cedentes": 16,
        "sacados": 71,
        "taxaMedia": 0.01786821700300902,
        "prazoMedio": 39.56238370163641,
        "montanteAtraso": 1126256.03
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28653886.91016292,
        "valorNominal": 30894196.5,
        "caixa": 10119514.639999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38773401.55016292,
        "funding": 38501999.019722,
        "subordinada": 271402.5304409191,
        "puSub": 2714.025304409191,
        "rendimentoSubDia": -0.028532891457815568,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 23,
        "cedentes": 8,
        "sacados": 12,
        "taxaMedia": 0.02032850638051171,
        "prazoMedio": 4.534895991859596,
        "montanteAtraso": 55000.0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 40644008.98304442,
        "valorNominal": 43345891.22,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40644008.98304442,
        "funding": 40682222.0,
        "subordinada": -38213.01695557684,
        "puSub": -382.13016955576836,
        "rendimentoSubDia": -0.040095748047660806,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017911580332751375,
        "prazoMedio": 14.049873186072816,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 9114471.73284777,
        "valorNominal": 9807593.11,
        "caixa": 744.3999999999942,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 9115216.132847771,
        "funding": 9212406.28056432,
        "subordinada": -97190.1477165483,
        "puSub": -971.9014771654829,
        "rendimentoSubDia": -0.004394755420590646,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018294477527195256,
        "prazoMedio": 11.883952713154038,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 9498000.735523192,
        "valorNominal": 11119193.28,
        "caixa": 144815.9,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 9642816.635523193,
        "funding": 9661917.281665001,
        "subordinada": -19100.64614180848,
        "puSub": -191.0064614180848,
        "rendimentoSubDia": 0.02663875937029503,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.016238749164877202,
        "prazoMedio": 227.50082709928017,
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
        "puAtual": 851.72847231,
        "valorAtual": 33983966.045169,
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
        "puAtual": 921.47073543,
        "valorAtual": 36766682.343657,
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
        "puAtual": 1047.6461634000002,
        "valorAtual": 41801081.91966001,
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
        "puAtual": 1073.52576791,
        "valorAtual": 42833678.139609,
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
        "puAtual": 1073.52576791,
        "valorAtual": 42833678.139609,
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
        "puAtual": 1015.1303261099999,
        "valorAtual": 40503700.011788994,
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
        "puAtual": 976.15672035,
        "valorAtual": 38948653.141965,
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
        "puAtual": 1043.60597799,
        "valorAtual": 26090149.44975,
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
        "puAtual": 1043.60597799,
        "valorAtual": 9392453.80191,
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
        "puAtual": 1043.60597799,
        "valorAtual": 4371665.44180011,
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
        "puAtual": 952.0888264399999,
        "valorAtual": 37988344.174955994,
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
        "puAtual": 897.44294269,
        "valorAtual": 35543227.74523745,
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
        "puAtual": 796.9601543599999,
        "valorAtual": 10599570.052987998,
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
        "puAtual": 1048.96349499,
        "valorAtual": 13951214.483367002,
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
        "puAtual": 1048.96349499,
        "valorAtual": 13951214.483367002,
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
        "puAtual": 1017.05555,
        "valorAtual": 20341111.0,
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
        "puAtual": 1017.05555,
        "valorAtual": 20341111.0,
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
        "puAtual": 1004.84361699,
        "valorAtual": 9212406.28056432,
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
        "puAtual": 1013.78459699,
        "valorAtual": 3548246.0894649997,
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
        "puAtual": 1010.524164,
        "valorAtual": 6113671.1922,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -0.00031981036384565176
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 489115824.93706286,
      "valor": 489115824.93706286,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 14979935.54723854,
      "valor": 14979935.54723854,
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
          "value": "R$ 504.095.760,48",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 442.973.506,30",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 61.122.254,18",
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
          "value": "R$ 489.115.824,94",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 14.979.935,55",
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
      "date": "05/05/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
