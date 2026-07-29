window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-02-10"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "10/02/2026",
    "dateKey": "2026-02-10",
    "importedAt": "2026-07-29T09:57:36.444003-03:00",
    "revisionId": "20260210-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 386102150.7937116,
    "pddTotal": 0.0,
    "carteiraVp": 386102150.7937116,
    "carteiraVpLiquido": 386102150.7937116,
    "caixa": 3854712.3600000003,
    "total": 389956863.15371156,
    "lastrosAtivos": 2181.0,
    "quantidadeLastrosAtivos": 2181.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 3854712.3600000003
    },
    "total": 3854712.3600000003,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 367853698.4350078,
    "subordinadaTotal": 22103164.7187038,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 22103164.7187038,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 367853698.4350078,
        "valor": 367853698.4350078
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 22103164.7187038,
        "valor": 22103164.7187038
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 404236218.88,
    "valorPresente": 386102150.7937116,
    "valorPresenteLiquido": 386102150.7937116,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 15.948949338967113,
    "taxaMediaPonderada": 0.02011706924800581,
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
        "value": "R$ 386.102.150,79"
      },
      {
        "label": "Caixa total",
        "value": "R$ 3.854.712,36"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 22.103.164,72"
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
        "carteiraVp": 41136492.705508426,
        "valorNominal": 45663078.96,
        "caixa": 399817.76000000007,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41536310.465508424,
        "funding": 41390886.5223,
        "subordinada": 145423.94320842624,
        "puSub": 1454.2394320842623,
        "rendimentoSubDia": 0.015434024157458204,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 323,
        "cedentes": 29,
        "sacados": 114,
        "taxaMedia": 0.02148013590392947,
        "prazoMedio": 6.2019352578015905,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 41162703.601476885,
        "valorNominal": 47730818.46,
        "caixa": 211237.24,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41373940.84147689,
        "funding": 41312277.896000996,
        "subordinada": 61662.94547589123,
        "puSub": 616.6294547589123,
        "rendimentoSubDia": -0.05757376891921606,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 297,
        "cedentes": 20,
        "sacados": 137,
        "taxaMedia": 0.020523276049916488,
        "prazoMedio": 73.80104491499209,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 40782488.54225229,
        "valorNominal": 43990350.99,
        "caixa": 423236.1600000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41205724.70225228,
        "funding": 41254123.606101,
        "subordinada": -48398.90384871513,
        "puSub": -483.9890384871513,
        "rendimentoSubDia": -0.5126434754737184,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 503,
        "cedentes": 22,
        "sacados": 264,
        "taxaMedia": 0.01886219709281929,
        "prazoMedio": 3.79058346353487,
        "montanteAtraso": 21323.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 31501575.017545708,
        "valorNominal": 16886049.52,
        "caixa": 80695.47,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31582270.487545706,
        "funding": 31596569.97450104,
        "subordinada": -14299.486955333501,
        "puSub": -142.994869553335,
        "rendimentoSubDia": -0.14326627373510514,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018942924589832055,
        "prazoMedio": 6.213629550711123,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 31133358.594576795,
        "valorNominal": 17264983.55,
        "caixa": 127191.22,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31260549.814576793,
        "funding": 31253039.82581034,
        "subordinada": 7509.98876645416,
        "puSub": 75.0998876645416,
        "rendimentoSubDia": 0.42442701347226386,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01885829468967387,
        "prazoMedio": 7.178441771321476,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 37874039.96758113,
        "valorNominal": 43405127.61,
        "caixa": 2612534.5100000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40486574.47758113,
        "funding": 40494373.9809,
        "subordinada": -7799.5033188685775,
        "puSub": -77.99503318868578,
        "rendimentoSubDia": -1.2425948961669675,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 591,
        "cedentes": 37,
        "sacados": 238,
        "taxaMedia": 0.020294703440972745,
        "prazoMedio": 9.531366641453074,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 40182530.60817915,
        "valorNominal": 44230242.33,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40182530.60817915,
        "funding": 40108722.805199996,
        "subordinada": 73807.80297915637,
        "puSub": 738.0780297915637,
        "rendimentoSubDia": -0.05990071273935771,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 36,
        "cedentes": 11,
        "sacados": 28,
        "taxaMedia": 0.02076666900258418,
        "prazoMedio": 13.699437967883995,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 22011993.55758258,
        "valorNominal": 33028420.47,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22011993.55758258,
        "funding": 0.0,
        "subordinada": 22011993.55758258,
        "puSub": 220119.9355758258,
        "rendimentoSubDia": 0.0008276859442604145,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.01993117572545802,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 31953616.9337566,
        "valorNominal": 35165539.66,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31953616.9337566,
        "funding": 31996300.91826931,
        "subordinada": -42683.98451270908,
        "puSub": -426.8398451270908,
        "rendimentoSubDia": -0.9956509517144081,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 117,
        "cedentes": 10,
        "sacados": 26,
        "taxaMedia": 0.021306514142175575,
        "prazoMedio": 9.088456471151066,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 33121206.53317997,
        "valorNominal": 38085220.85,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33121206.53317997,
        "funding": 33153288.120293748,
        "subordinada": -32081.58711377904,
        "puSub": -320.8158711377904,
        "rendimentoSubDia": -0.9967263652445855,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 152,
        "cedentes": 8,
        "sacados": 57,
        "taxaMedia": 0.01844113875393096,
        "prazoMedio": 29.71949062770196,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 35242144.732072055,
        "valorNominal": 38786386.48,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35242144.732072055,
        "funding": 35294114.78563136,
        "subordinada": -51970.053559303284,
        "puSub": -519.7005355930328,
        "rendimentoSubDia": -0.9947104034244836,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 152,
        "cedentes": 13,
        "sacados": 57,
        "taxaMedia": 0.021346424544672338,
        "prazoMedio": 2.9767145397197914,
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
        "puAtual": 1037.365577,
        "valorAtual": 41390886.5223,
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
        "puAtual": 1035.39543599,
        "valorAtual": 41312277.896000996,
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
        "puAtual": 1033.93793499,
        "valorAtual": 41254123.606101,
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
        "puAtual": 1025.46313042,
        "valorAtual": 31596569.97450104,
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
        "puAtual": 1025.46313042,
        "valorAtual": 31253039.82581034,
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
        "puAtual": 1014.896591,
        "valorAtual": 40494373.9809,
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
        "puAtual": 1005.231148,
        "valorAtual": 40108722.805199996,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
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
        "puAtual": 1000.85398099,
        "valorAtual": 31996300.91826931,
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
        "puAtual": 1000.85398099,
        "valorAtual": 33153288.120293748,
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
        "puAtual": 1000.85398099,
        "valorAtual": 13311357.947167,
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
        "puAtual": 1000.85398099,
        "valorAtual": 13311357.947167,
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
        "puAtual": 1000.85398099,
        "valorAtual": 8671398.891297359,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2025-12-30",
        "reportDate": "30/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 353327.58861440606,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-31",
        "reportDate": "31/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 353449.239870904,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-02",
        "reportDate": "02/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 378516.3405988347,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-05",
        "reportDate": "05/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 428630.46283471584,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-06",
        "reportDate": "06/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 428811.4876094833,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-07",
        "reportDate": "07/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 428995.4462159313,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-08",
        "reportDate": "08/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 429182.2928993609,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-01-09",
        "reportDate": "09/01/2026",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 429372.13992830366,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -4.054131219682586
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 367853698.4350078,
      "valor": 367853698.4350078,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 22103164.7187038,
      "valor": 22103164.7187038,
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
          "value": "R$ 389.956.863,15",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 386.102.150,79",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 3.854.712,36",
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
          "value": "R$ 367.853.698,44",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 22.103.164,72",
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
      "date": "10/02/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
