window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-06-25"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "25/06/2026",
    "dateKey": "2026-06-25",
    "importedAt": "2026-07-29T10:11:59.518175-03:00",
    "revisionId": "20260625-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 393786180.5909378,
    "pddTotal": 0.0,
    "carteiraVp": 393786180.5909378,
    "carteiraVpLiquido": 393786180.5909378,
    "caixa": 30351499.87,
    "total": 424137680.4609378,
    "lastrosAtivos": 1093.0,
    "quantidadeLastrosAtivos": 1093.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 30351499.87
    },
    "total": 30351499.87,
    "cessaoRendimentosDia": 17979.18999999961,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 416497685.6804633,
    "subordinadaTotal": 7639994.780474476,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 7639994.780474476,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 416497685.6804633,
        "valor": 416497685.6804633
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 7639994.780474476,
        "valor": 7639994.780474476
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 452152118.46,
    "valorPresente": 393786180.5909378,
    "valorPresenteLiquido": 393786180.5909378,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 122.41245053428024,
    "taxaMediaPonderada": 0.01919876480254268,
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
        "value": "R$ 393.786.180,59"
      },
      {
        "label": "Caixa total",
        "value": "R$ 30.351.499,87"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 17.979,19"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 7.639.994,78"
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
        "carteiraVp": 17813774.981871326,
        "valorNominal": 23842047.55,
        "caixa": 2328756.75,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 20142531.731871326,
        "funding": 19952238.919074,
        "subordinada": 190292.8127973266,
        "puSub": 1902.9281279732659,
        "rendimentoSubDia": 0.0074504262251091635,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.02267945399469118,
        "prazoMedio": 11.133437008894804,
        "montanteAtraso": 204999.9
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 29241522.876369927,
        "valorNominal": 32027193.98,
        "caixa": 35903.049999999996,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29277425.926369928,
        "funding": 26487247.375364996,
        "subordinada": 2790178.5510049313,
        "puSub": 27901.785510049314,
        "rendimentoSubDia": -0.002092575698442012,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 17,
        "cedentes": 2,
        "sacados": 9,
        "taxaMedia": 0.020270540455838995,
        "prazoMedio": 113.65542728677902,
        "montanteAtraso": 3476859.18
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 8980100.712413158,
        "valorNominal": 24083240.97,
        "caixa": 5266888.89,
        "cessaoRendimentosDia": 9790.260000000708,
        "ativoTotal": 14246989.602413159,
        "funding": 14110135.404917998,
        "subordinada": 136854.19749516062,
        "puSub": 1368.5419749516063,
        "rendimentoSubDia": -0.0369058481320822,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 95,
        "cedentes": 9,
        "sacados": 47,
        "taxaMedia": 0.018389571250724573,
        "prazoMedio": 2.233693692623353,
        "montanteAtraso": 4042111.43
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 25248290.211511075,
        "valorNominal": 27267265.52,
        "caixa": 1433511.41,
        "cessaoRendimentosDia": 561.4500000001863,
        "ativoTotal": 26681801.621511076,
        "funding": 26586377.74632,
        "subordinada": 95423.87519107386,
        "puSub": 954.2387519107386,
        "rendimentoSubDia": 0.011992402397485336,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018844825607148893,
        "prazoMedio": 18.625474020376043,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 27444609.232381962,
        "valorNominal": 28015535.4,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27444609.232381962,
        "funding": 27278786.915394,
        "subordinada": 165822.31698796153,
        "puSub": 1658.2231698796154,
        "rendimentoSubDia": 0.012772177403571838,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01879819099794327,
        "prazoMedio": 18.377427230470687,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 11413895.23988975,
        "valorNominal": 11926948.15,
        "caixa": 114725.75000000001,
        "cessaoRendimentosDia": 15.540000000008149,
        "ativoTotal": 11528620.98988975,
        "funding": 11113934.339172,
        "subordinada": 414686.6507177502,
        "puSub": 4146.866507177502,
        "rendimentoSubDia": -0.0005507102397465102,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 280,
        "cedentes": 23,
        "sacados": 151,
        "taxaMedia": 0.0205213212491723,
        "prazoMedio": 36.17707334797532,
        "montanteAtraso": 2196460.91
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13368667.364557931,
        "valorNominal": 14949673.5,
        "caixa": 843.7300000000105,
        "cessaoRendimentosDia": 38.93000000000757,
        "ativoTotal": 13369511.094557932,
        "funding": 13165761.530733,
        "subordinada": 203749.56382493116,
        "puSub": 2037.4956382493117,
        "rendimentoSubDia": -0.016210589001509956,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.01758555358219313,
        "prazoMedio": 42.66859405664003,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 17904208.879432213,
        "valorNominal": 24122656.0,
        "caixa": 10050.910000000003,
        "cessaoRendimentosDia": 23.279999999998836,
        "ativoTotal": 17914259.789432213,
        "funding": 18005596.811866112,
        "subordinada": -91337.02243389934,
        "puSub": -913.3702243389935,
        "rendimentoSubDia": 0.0334079572166881,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018540178640814267,
        "prazoMedio": 185.4875365016679,
        "montanteAtraso": 6005004.867927537
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58225.29000000002,
        "cessaoRendimentosDia": 54.42000000004191,
        "ativoTotal": 58225.29000000002,
        "funding": 0.0,
        "subordinada": 58225.29000000002,
        "puSub": 582.2529000000002,
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
        "carteiraVp": 18942816.602463778,
        "valorNominal": 20590845.97,
        "caixa": 14522615.23,
        "cessaoRendimentosDia": 5610.9399999994785,
        "ativoTotal": 33465431.83246378,
        "funding": 33174490.268513996,
        "subordinada": 290941.5639497824,
        "puSub": 2909.415639497824,
        "rendimentoSubDia": -0.03004055531059968,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 227,
        "cedentes": 18,
        "sacados": 136,
        "taxaMedia": 0.018031561928013046,
        "prazoMedio": 31.5939934554594,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 15103874.035888454,
        "valorNominal": 16398405.559999999,
        "caixa": 9856.169999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 15113730.205888454,
        "funding": 14925359.9174433,
        "subordinada": 188370.2884451542,
        "puSub": 1883.702884451542,
        "rendimentoSubDia": -0.02026900206727733,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 93,
        "cedentes": 10,
        "sacados": 50,
        "taxaMedia": 0.01596139908692797,
        "prazoMedio": 88.84470979807395,
        "montanteAtraso": 498460.01
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28798400.036551952,
        "valorNominal": 30212434.0,
        "caixa": 7742.310000000012,
        "cessaoRendimentosDia": 1.0,
        "ativoTotal": 28806142.34655195,
        "funding": 28458750.480027005,
        "subordinada": 347391.86652494594,
        "puSub": 3473.9186652494595,
        "rendimentoSubDia": -0.009565953219752843,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020269464846116796,
        "prazoMedio": 4.70406473536248,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 38225732.6566587,
        "valorNominal": 39526810.42,
        "caixa": 5879599.41,
        "cessaoRendimentosDia": 1472.039999999106,
        "ativoTotal": 44105332.066658705,
        "funding": 41206587.2904,
        "subordinada": 2898744.776258707,
        "puSub": 28987.44776258707,
        "rendimentoSubDia": 0.00021418224660019192,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 33,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017921733486235446,
        "prazoMedio": 15.405360716305232,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 15970404.924808528,
        "valorNominal": 16712523.889999999,
        "caixa": 787.2099999999919,
        "cessaoRendimentosDia": 34.970000000001164,
        "ativoTotal": 15971192.13480853,
        "funding": 16050330.978697298,
        "subordinada": -79138.84388876893,
        "puSub": -791.3884388876893,
        "rendimentoSubDia": -0.00925325352039319,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018084724993749027,
        "prazoMedio": 6.996335591514285,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "carteiraVp": 49532588.88218959,
        "valorNominal": 53199207.589999996,
        "caixa": 673471.04,
        "cessaoRendimentosDia": 329.95000000006985,
        "ativoTotal": 50206059.922189586,
        "funding": 50290010.805719,
        "subordinada": -83950.88352941722,
        "puSub": -839.5088352941722,
        "rendimentoSubDia": -0.03417502639461345,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 22,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01780253648649956,
        "prazoMedio": 56.76721923470511,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14269314.23154407,
        "valorNominal": 15631423.299999999,
        "caixa": 3539.6900000000023,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14272853.92154407,
        "funding": 14332653.9268452,
        "subordinada": -59800.005301130936,
        "puSub": -598.0000530113093,
        "rendimentoSubDia": 0.010880719989242449,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016343812637004577,
        "prazoMedio": 155.14165223926847,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 40930614.83258615,
        "valorNominal": 51743678.75,
        "caixa": 4983.029999999999,
        "cessaoRendimentosDia": 46.41000000000349,
        "ativoTotal": 40935597.86258615,
        "funding": 40842803.124501005,
        "subordinada": 92794.73808514327,
        "puSub": 927.9473808514326,
        "rendimentoSubDia": -0.014413456562694105,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.022617472003303413,
        "prazoMedio": 285.1968480752256,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 20597364.889819246,
        "valorNominal": 21902227.91,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 20597364.889819246,
        "funding": 20516619.845474422,
        "subordinada": 80745.04434482381,
        "puSub": 807.450443448238,
        "rendimentoSubDia": 0.040770905116859435,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.02059997449806834,
        "prazoMedio": 966.5398589091033,
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
        "puAtual": 500.05611325999996,
        "valorAtual": 19952238.919074,
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
        "puAtual": 663.8407863499999,
        "valorAtual": 26487247.375364996,
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
        "puAtual": 353.63747881999996,
        "valorAtual": 14110135.404917998,
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
        "puAtual": 666.3252568,
        "valorAtual": 26586377.74632,
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
        "puAtual": 683.67887006,
        "valorAtual": 27278786.915394,
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
        "puAtual": 278.54472028,
        "valorAtual": 11113934.339172,
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
        "puAtual": 329.96896067,
        "valorAtual": 13165761.530733,
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
        "puAtual": 153.4637472,
        "valorAtual": 3836593.68,
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
        "puAtual": 1074.30458199,
        "valorAtual": 9668741.23791,
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
        "puAtual": 1074.30458199,
        "valorAtual": 4500261.893956111,
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
        "puAtual": 831.4408588599999,
        "valorAtual": 33174490.268513996,
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
        "puAtual": 376.85544546,
        "valorAtual": 14925359.9174433,
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
        "puAtual": 1058.0569211900001,
        "valorAtual": 14072157.051827002,
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
        "puAtual": 1081.698754,
        "valorAtual": 14386593.4282,
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
        "puAtual": 1013.3562155200001,
        "valorAtual": 20267124.3104,
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
        "puAtual": 1046.973149,
        "valorAtual": 20939462.979999997,
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
        "puAtual": 1029.19724134,
        "valorAtual": 16050330.978697298,
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
        "puAtual": 1007.81584781,
        "valorAtual": 20156316.9562,
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
        "puAtual": 1007.81584781,
        "valorAtual": 20156316.9562,
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
        "puAtual": 1007.81584781,
        "valorAtual": 9977376.893319,
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
        "puAtual": 770.03291408,
        "valorAtual": 8039143.6229952,
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
        "puAtual": 1040.249637,
        "valorAtual": 6293510.30385,
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
        "puAtual": 1023.62915099,
        "valorAtual": 20472583.0198,
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
        "puAtual": 1023.62915099,
        "valorAtual": 20370220.104701,
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
        "puAtual": 1015.6653631,
        "valorAtual": 20313307.262000002,
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
        "puAtual": 1011.50539042,
        "valorAtual": 203312.58347442,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-02",
        "reportDate": "02/06/2026",
        "caixaTotal": 18823136.55,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8577532.346237166,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-03",
        "reportDate": "03/06/2026",
        "caixaTotal": 1901095.81,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -108956949.94119349,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-05",
        "reportDate": "05/06/2026",
        "caixaTotal": 1996935.1300000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5104226.150694992,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-08",
        "reportDate": "08/06/2026",
        "caixaTotal": 1999339.2400000002,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5206244.694946285,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-09",
        "reportDate": "09/06/2026",
        "caixaTotal": 2679990.62,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5650369.290771216,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.003095142297334763
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 416497685.6804633,
      "valor": 416497685.6804633,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 7639994.780474476,
      "valor": 7639994.780474476,
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
          "value": "R$ 424.137.680,46",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 393.786.180,59",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 30.351.499,87",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 17.979,19",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 416.497.685,68",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 7.639.994,78",
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
      "date": "25/06/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
