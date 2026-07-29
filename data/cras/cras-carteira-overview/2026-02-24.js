window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-02-24"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "24/02/2026",
    "dateKey": "2026-02-24",
    "importedAt": "2026-07-29T09:58:14.449473-03:00",
    "revisionId": "20260224-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 426924499.9802006,
    "pddTotal": 0.0,
    "carteiraVp": 426924499.9802006,
    "carteiraVpLiquido": 426924499.9802006,
    "caixa": 7806383.26,
    "total": 434730883.2402006,
    "lastrosAtivos": 2328.0,
    "quantidadeLastrosAtivos": 2328.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 7806383.26
    },
    "total": 7806383.26,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 411871339.88560486,
    "subordinadaTotal": 22859543.354595747,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 22859543.354595747,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 411871339.88560486,
        "valor": 411871339.88560486
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 22859543.354595747,
        "valor": 22859543.354595747
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 446005717.92,
    "valorPresente": 426924499.9802006,
    "valorPresenteLiquido": 426924499.9802006,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 19.6147518606596,
    "taxaMediaPonderada": 0.01995237439281461,
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
        "value": "R$ 426.924.499,98"
      },
      {
        "label": "Caixa total",
        "value": "R$ 7.806.383,26"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 22.859.543,35"
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
        "carteiraVp": 41301585.17888794,
        "valorNominal": 45480886.94,
        "caixa": 581399.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41882984.17888794,
        "funding": 41695683.2607,
        "subordinada": 187300.91818793863,
        "puSub": 1873.0091818793862,
        "rendimentoSubDia": 0.01116533425526911,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 310,
        "cedentes": 28,
        "sacados": 110,
        "taxaMedia": 0.021487452958674394,
        "prazoMedio": 6.226848690859401,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 41163281.301770344,
        "valorNominal": 47352612.27,
        "caixa": 584882.9400000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41748164.24177034,
        "funding": 41600676.333299994,
        "subordinada": 147487.90847034752,
        "puSub": 1474.8790847034752,
        "rendimentoSubDia": -0.028559007725733387,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 281,
        "cedentes": 20,
        "sacados": 130,
        "taxaMedia": 0.020536432016534868,
        "prazoMedio": 74.49091580384585,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41079773.064228855,
        "valorNominal": 43990350.99,
        "caixa": 424410.29000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41504183.354228854,
        "funding": 41530413.909201,
        "subordinada": -26230.55497214943,
        "puSub": -262.30554972149434,
        "rendimentoSubDia": -0.03154761911833237,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 503,
        "cedentes": 22,
        "sacados": 264,
        "taxaMedia": 0.01886406830407656,
        "prazoMedio": 3.7879965111069724,
        "montanteAtraso": 21323.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 31733006.89187345,
        "valorNominal": 16886049.52,
        "caixa": 81448.37999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31814455.271873448,
        "funding": 31809141.85804836,
        "subordinada": 5313.413825087249,
        "puSub": 53.134138250872496,
        "rendimentoSubDia": 0.8067490670172821,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018943307902900795,
        "prazoMedio": 6.215618079649827,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 31361242.281761155,
        "valorNominal": 17264983.55,
        "caixa": 127572.73999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31488815.021761153,
        "funding": 31463300.545493312,
        "subordinada": 25514.476267840713,
        "puSub": 255.14476267840712,
        "rendimentoSubDia": 0.09516262437809808,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018858767663282927,
        "prazoMedio": 7.180932091399058,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40330047.38462896,
        "valorNominal": 45704810.06,
        "caixa": 486872.91,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40816920.294628955,
        "funding": 40761374.4468,
        "subordinada": 55545.84782895446,
        "puSub": 555.4584782895446,
        "rendimentoSubDia": 0.020614043420167594,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 655,
        "cedentes": 41,
        "sacados": 271,
        "taxaMedia": 0.02031092982170923,
        "prazoMedio": 9.439665306245942,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 40553691.30432077,
        "valorNominal": 44230242.33,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40553691.30432077,
        "funding": 40388719.259301,
        "subordinada": 164972.04501976818,
        "puSub": 1649.7204501976819,
        "rendimentoSubDia": -0.027484275724938723,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 36,
        "cedentes": 11,
        "sacados": 28,
        "taxaMedia": 0.020770983363468696,
        "prazoMedio": 13.663162549229313,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 32067278.092710383,
        "valorNominal": 35608051.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32067278.092710383,
        "funding": 31936944.67879317,
        "subordinada": 130333.41391721368,
        "puSub": 1303.3341391721367,
        "rendimentoSubDia": 0.009831865814927676,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.017831802201321526,
        "prazoMedio": 59.18906927742393,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 22193068.523445807,
        "valorNominal": 33028420.47,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22193068.523445807,
        "funding": 0.0,
        "subordinada": 22193068.523445807,
        "puSub": 221930.68523445807,
        "rendimentoSubDia": 0.0008276009713734656,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.01993078037338306,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 32251147.109360874,
        "valorNominal": 35165539.66,
        "caixa": 2963970.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35215117.10936087,
        "funding": 35238685.683784,
        "subordinada": -23568.574423126876,
        "puSub": -235.68574423126876,
        "rendimentoSubDia": -1.6303839112366947,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 117,
        "cedentes": 10,
        "sacados": 26,
        "taxaMedia": 0.021316987251004147,
        "prazoMedio": 9.09041557122273,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 37327066.63661998,
        "valorNominal": 42507384.65,
        "caixa": 2555827.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39882893.63661998,
        "funding": 39910439.14628,
        "subordinada": -27545.50966002047,
        "puSub": -275.4550966002047,
        "rendimentoSubDia": 0.335961924846812,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 249,
        "cedentes": 15,
        "sacados": 96,
        "taxaMedia": 0.018625762459784992,
        "prazoMedio": 33.23519564765247,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 35563312.21059208,
        "valorNominal": 38786386.48,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35563312.21059208,
        "funding": 35535960.763904,
        "subordinada": 27351.446688085794,
        "puSub": 273.5144668808579,
        "rendimentoSubDia": -0.02377665648964744,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 152,
        "cedentes": 13,
        "sacados": 57,
        "taxaMedia": 0.021355851232159564,
        "prazoMedio": 2.978372332382347,
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
        "puAtual": 1045.004593,
        "valorAtual": 41695683.2607,
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
        "puAtual": 1042.623467,
        "valorAtual": 41600676.333299994,
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
        "puAtual": 1040.86250399,
        "valorAtual": 41530413.909201,
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
        "puAtual": 1032.36212703,
        "valorAtual": 31809141.85804836,
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
        "puAtual": 1032.36212703,
        "valorAtual": 31463300.545493312,
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
        "puAtual": 1021.588332,
        "valorAtual": 40761374.4468,
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
        "puAtual": 1012.24860299,
        "valorAtual": 40388719.259301,
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
        "puAtual": 1004.84361699,
        "valorAtual": 25121090.42475,
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
        "puAtual": 1004.84361699,
        "valorAtual": 5194036.65622131,
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
        "puAtual": 1004.84361699,
        "valorAtual": 1621817.5978218599,
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
        "puAtual": 1007.712136,
        "valorAtual": 35238685.683784,
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
        "puAtual": 1007.712136,
        "valorAtual": 39910439.14628,
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
        "puAtual": 1007.712136,
        "valorAtual": 13402571.4088,
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
        "puAtual": 1007.712136,
        "valorAtual": 13402571.4088,
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
        "puAtual": 1007.712136,
        "valorAtual": 8730817.946303999,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-01-12",
        "reportDate": "12/01/2026",
        "caixaTotal": 1969113.9900000002,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 442295.93261961266,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-13",
        "reportDate": "13/01/2026",
        "caixaTotal": 1637242.64,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 441418.0623522587,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-14",
        "reportDate": "14/01/2026",
        "caixaTotal": 747367.2490475569,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -379744.57823010907,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-15",
        "reportDate": "15/01/2026",
        "caixaTotal": 315716.85904755694,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 258379.5446660407,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-16",
        "reportDate": "16/01/2026",
        "caixaTotal": 315716.85904755694,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 259744.1978101693,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-19",
        "reportDate": "19/01/2026",
        "caixaTotal": 1302077.149047557,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 233352.54293805175,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-20",
        "reportDate": "20/01/2026",
        "caixaTotal": 2491455.8790475572,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 234024.92911957577,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.0021516907561095477
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 411871339.88560486,
      "valor": 411871339.88560486,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 22859543.354595747,
      "valor": 22859543.354595747,
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
          "value": "R$ 434.730.883,24",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 426.924.499,98",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 7.806.383,26",
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
          "value": "R$ 411.871.339,89",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 22.859.543,35",
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
      "date": "24/02/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
