window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-04-06"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "06/04/2026",
    "dateKey": "2026-04-06",
    "importedAt": "2026-07-29T10:01:02.416561-03:00",
    "revisionId": "20260406-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 461003913.8231403,
    "pddTotal": 0.0,
    "carteiraVp": 461003913.8231403,
    "carteiraVpLiquido": 461003913.8231403,
    "caixa": 19729407.12,
    "total": 480733320.9431403,
    "lastrosAtivos": 1976.0,
    "quantidadeLastrosAtivos": 1976.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 19729407.12
    },
    "total": 19729407.12,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 466486570.265822,
    "subordinadaTotal": 14246750.677318314,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 14246750.677318314,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 466486570.265822,
        "valor": 466486570.265822
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 14246750.677318314,
        "valor": 14246750.677318314
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 469257044.83,
    "valorPresente": 461003913.8231403,
    "valorPresenteLiquido": 461003913.8231403,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 24.11622034416781,
    "taxaMediaPonderada": 0.019702658220981793,
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
        "value": "R$ 461.003.913,82"
      },
      {
        "label": "Caixa total",
        "value": "R$ 19.729.407,12"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 14.246.750,68"
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
        "carteiraVp": 34040657.63374802,
        "valorNominal": 37143760.67,
        "caixa": 5620317.550000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39660975.18374802,
        "funding": 40852170.166206,
        "subordinada": -1191194.9824579805,
        "puSub": -11911.949824579806,
        "rendimentoSubDia": 0.0007930619606046907,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 79,
        "cedentes": 17,
        "sacados": 37,
        "taxaMedia": 0.022090653520199247,
        "prazoMedio": 7.769964250347066,
        "montanteAtraso": 5722730.58
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 36034940.01692429,
        "valorNominal": 41093737.33,
        "caixa": 3843191.87,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39878131.88692429,
        "funding": 40277728.28137799,
        "subordinada": -399596.39445370436,
        "puSub": -3995.9639445370435,
        "rendimentoSubDia": -0.11667521955993687,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 76,
        "cedentes": 12,
        "sacados": 48,
        "taxaMedia": 0.020225927735811992,
        "prazoMedio": 87.4462400986818,
        "montanteAtraso": 248373.2
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41708057.08982245,
        "valorNominal": 43577436.91,
        "caixa": 140029.28999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41848086.37982245,
        "funding": 41805300.98276699,
        "subordinada": 42785.39705545455,
        "puSub": 427.8539705545455,
        "rendimentoSubDia": 0.23905423537407944,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 485,
        "cedentes": 21,
        "sacados": 251,
        "taxaMedia": 0.01884989312780632,
        "prazoMedio": 3.8180579021516974,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42120169.1218615,
        "valorNominal": 27267265.52,
        "caixa": 108965.31999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42229134.4418615,
        "funding": 42164985.108792,
        "subordinada": 64149.33306950331,
        "puSub": 641.493330695033,
        "rendimentoSubDia": 0.0433586962323127,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018688529098067164,
        "prazoMedio": 11.834267803717632,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42092407.4694899,
        "valorNominal": 28015535.4,
        "caixa": 152793.41999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42245200.889489904,
        "funding": 42164985.108792,
        "subordinada": 80215.78069790453,
        "puSub": 802.1578069790453,
        "rendimentoSubDia": 0.032577449846796336,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.01861356333635897,
        "prazoMedio": 11.406136202749192,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40630966.37004546,
        "valorNominal": 44921535.67,
        "caixa": 535047.9600000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41166014.33004546,
        "funding": 40945870.82187,
        "subordinada": 220143.50817546248,
        "puSub": 2201.4350817546247,
        "rendimentoSubDia": 0.15843900757766427,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 631,
        "cedentes": 39,
        "sacados": 263,
        "taxaMedia": 0.02032805647227833,
        "prazoMedio": 9.615984732650965,
        "montanteAtraso": 8171.95
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38409149.178432606,
        "valorNominal": 41230242.33,
        "caixa": 27310.350000000006,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38436459.52843261,
        "funding": 38310425.657595,
        "subordinada": 126033.87083760649,
        "puSub": 1260.338708376065,
        "rendimentoSubDia": 0.7465191515794776,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 35,
        "cedentes": 10,
        "sacados": 27,
        "taxaMedia": 0.020480411939885697,
        "prazoMedio": 14.574798985741948,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39376966.16375187,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39376966.16375187,
        "funding": 39249096.432501,
        "subordinada": 127869.73125086725,
        "puSub": 1278.6973125086724,
        "rendimentoSubDia": 0.012635013259377548,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.018260702436601453,
        "prazoMedio": 86.28430256835543,
        "montanteAtraso": 872943.0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13266366.992673421,
        "valorNominal": 17468847.48,
        "caixa": 79745.91000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13346112.902673421,
        "funding": 0.0,
        "subordinada": 13346112.902673421,
        "puSub": 133461.1290267342,
        "rendimentoSubDia": 0.0009701599173623787,
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
        "carteiraVp": 37888553.67339811,
        "valorNominal": 40657301.15,
        "caixa": 3400148.2700000005,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41288701.94339811,
        "funding": 41180306.212101005,
        "subordinada": 108395.73129710555,
        "puSub": 1083.9573129710554,
        "rendimentoSubDia": 0.6591076939304907,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 318,
        "cedentes": 26,
        "sacados": 175,
        "taxaMedia": 0.02116804882342471,
        "prazoMedio": 14.873919744612445,
        "montanteAtraso": 1584608.38
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 37161712.53477581,
        "valorNominal": 41710933.04,
        "caixa": 3687525.3099999996,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40849237.84477581,
        "funding": 39399948.49199465,
        "subordinada": 1449289.3527811617,
        "puSub": 14492.893527811617,
        "rendimentoSubDia": 0.02453693695750525,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 191,
        "cedentes": 19,
        "sacados": 81,
        "taxaMedia": 0.018250056292634053,
        "prazoMedio": 35.369954055216226,
        "montanteAtraso": 3578350.41
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 34540946.378327675,
        "valorNominal": 36881106.22,
        "caixa": 2134331.87,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36675278.24832767,
        "funding": 36395546.823647365,
        "subordinada": 279731.4246803075,
        "puSub": 2797.314246803075,
        "rendimentoSubDia": 0.1630951817269235,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 98,
        "cedentes": 11,
        "sacados": 42,
        "taxaMedia": 0.021360268611384566,
        "prazoMedio": 3.1716322444677902,
        "montanteAtraso": 2822659.37
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 23733021.199889205,
        "valorNominal": 25559442.11,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 23733021.199889205,
        "funding": 23740206.178178,
        "subordinada": -7184.978288795799,
        "puSub": -71.84978288795799,
        "rendimentoSubDia": -0.1021329808141741,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 27,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.017797143260734997,
        "prazoMedio": 9.632292009363281,
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
        "puAtual": 1023.86391394,
        "valorAtual": 40852170.166206,
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
        "puAtual": 1009.4668742199999,
        "valorAtual": 40277728.28137799,
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
        "puAtual": 1047.75190433,
        "valorAtual": 41805300.98276699,
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
        "puAtual": 1056.76654408,
        "valorAtual": 42164985.108792,
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
        "puAtual": 1056.76654408,
        "valorAtual": 42164985.108792,
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
        "puAtual": 1026.2123013,
        "valorAtual": 40945870.82187,
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
        "puAtual": 960.16104405,
        "valorAtual": 38310425.657595,
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
        "puAtual": 1027.759209,
        "valorAtual": 25693980.225,
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
        "puAtual": 1027.759209,
        "valorAtual": 9249832.881000001,
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
        "puAtual": 1027.759209,
        "valorAtual": 4305283.326501001,
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
        "puAtual": 1032.08787499,
        "valorAtual": 41180306.212101005,
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
        "puAtual": 994.82258533,
        "valorAtual": 39399948.49199465,
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
        "puAtual": 1032.08787499,
        "valorAtual": 13726768.737367,
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
        "puAtual": 1032.08787499,
        "valorAtual": 13726768.737367,
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
        "puAtual": 1032.08787499,
        "valorAtual": 8942009.34891336,
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
        "puAtual": 1001.611939,
        "valorAtual": 20032238.78,
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
        "puAtual": 1001.611939,
        "valorAtual": 3707967.398178,
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
        "rendimentoSubDia": 0.02016546077171033
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 466486570.265822,
      "valor": 466486570.265822,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 14246750.677318314,
      "valor": 14246750.677318314,
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
          "value": "R$ 480.733.320,94",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 461.003.913,82",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 19.729.407,12",
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
          "value": "R$ 466.486.570,27",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 14.246.750,68",
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
      "date": "06/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
