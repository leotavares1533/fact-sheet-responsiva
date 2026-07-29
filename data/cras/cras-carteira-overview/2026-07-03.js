window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-03"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "03/07/2026",
    "dateKey": "2026-07-03",
    "importedAt": "2026-07-29T10:12:36.379785-03:00",
    "revisionId": "20260703-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 384538060.8671657,
    "pddTotal": 0.0,
    "carteiraVp": 384538060.8671657,
    "carteiraVpLiquido": 384538060.8671657,
    "caixa": 7406920.840000001,
    "total": 391944981.70716566,
    "lastrosAtivos": 1032.0,
    "quantidadeLastrosAtivos": 1032.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 7406920.840000001
    },
    "total": 7406920.840000001,
    "cessaoRendimentosDia": -2353491.699999999,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 386766759.2968189,
    "subordinadaTotal": 5178222.410346768,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 5178222.410346768,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 386766759.2968189,
        "valor": 386766759.2968189
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 5178222.410346768,
        "valor": 5178222.410346768
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 443827334.65999997,
    "valorPresente": 384538060.8671657,
    "valorPresenteLiquido": 384538060.8671657,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 123.52212216900084,
    "taxaMediaPonderada": 0.019192872447876895,
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
        "value": "R$ 384.538.060,87"
      },
      {
        "label": "Caixa total",
        "value": "R$ 7.406.920,84"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ -2.353.491,70"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 5.178.222,41"
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
        "carteiraVp": 17927044.22922792,
        "valorNominal": 23842047.55,
        "caixa": 8712.149999999994,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 17935756.379227918,
        "funding": 17731669.035129,
        "subordinada": 204087.34409891814,
        "puSub": 2040.8734409891813,
        "rendimentoSubDia": 0.013279330523425115,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.02267989442444222,
        "prazoMedio": 11.132529335519132,
        "montanteAtraso": 204999.9
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 25902452.733464025,
        "valorNominal": 28550334.8,
        "caixa": 1190.9000000000015,
        "cessaoRendimentosDia": -954000.0,
        "ativoTotal": 25903643.633464023,
        "funding": 25684444.62046654,
        "subordinada": 219199.01299748197,
        "puSub": 2191.99012997482,
        "rendimentoSubDia": -0.0778995312165891,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.02020289566340924,
        "prazoMedio": 128.9917106888006,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 6870793.180913748,
        "valorNominal": 21950566.2,
        "caixa": 1690.2099999999991,
        "cessaoRendimentosDia": -2150000.0,
        "ativoTotal": 6872483.390913748,
        "funding": 6753982.012561838,
        "subordinada": 118501.37835191004,
        "puSub": 1185.0137835191003,
        "rendimentoSubDia": -0.03599806040382325,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 57,
        "cedentes": 8,
        "sacados": 22,
        "taxaMedia": 0.017897940665326004,
        "prazoMedio": 2.946135095992141,
        "montanteAtraso": 3275261.77
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 25304920.662001457,
        "valorNominal": 27267265.52,
        "caixa": 82087.11,
        "cessaoRendimentosDia": 42.55000000001746,
        "ativoTotal": 25387007.772001456,
        "funding": 25259098.077381004,
        "subordinada": 127909.69462045282,
        "puSub": 1279.0969462045282,
        "rendimentoSubDia": 0.013783783091259494,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018843869376856073,
        "prazoMedio": 18.68215826330948,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 27590482.389517687,
        "valorNominal": 28015535.4,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27590482.389517687,
        "funding": 27412039.563657,
        "subordinada": 178442.8258606866,
        "puSub": 1784.428258606866,
        "rendimentoSubDia": 0.011978436523563785,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018798436458760157,
        "prazoMedio": 18.378802595423434,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10650572.93707678,
        "valorNominal": 11111235.82,
        "caixa": 22389.730000000003,
        "cessaoRendimentosDia": -880000.0000000001,
        "ativoTotal": 10672962.66707678,
        "funding": 10288849.125466865,
        "subordinada": 384113.541609915,
        "puSub": 3841.1354160991496,
        "rendimentoSubDia": -0.00301965979857699,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 265,
        "cedentes": 22,
        "sacados": 140,
        "taxaMedia": 0.020543196339311953,
        "prazoMedio": 39.03942614652751,
        "montanteAtraso": 2340434.73
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13373391.336944979,
        "valorNominal": 14949673.5,
        "caixa": 67738.3199999996,
        "cessaoRendimentosDia": 3022.139999999592,
        "ativoTotal": 13441129.656944979,
        "funding": 13234633.577885998,
        "subordinada": 206496.07905898057,
        "puSub": 2064.9607905898056,
        "rendimentoSubDia": -0.0020312618595045295,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.01760541426323939,
        "prazoMedio": 42.38507356896798,
        "montanteAtraso": 2365478.4180694534
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 15306438.209064726,
        "valorNominal": 24122656.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": -2660314.9099999997,
        "ativoTotal": 15306438.209064726,
        "funding": 15422809.04133511,
        "subordinada": -116370.83227038383,
        "puSub": -1163.7083227038383,
        "rendimentoSubDia": -0.0366176758591612,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018618117022793954,
        "prazoMedio": 155.77679442629545,
        "montanteAtraso": 6010547.004266814
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58450.05000000002,
        "cessaoRendimentosDia": 50.320000000006985,
        "ativoTotal": 58450.05000000002,
        "funding": 0.0,
        "subordinada": 58450.05000000002,
        "puSub": 584.5005000000002,
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
        "carteiraVp": 19027752.828797277,
        "valorNominal": 20584345.97,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19027752.828797277,
        "funding": 18716534.029011,
        "subordinada": 311218.7997862771,
        "puSub": 3112.187997862771,
        "rendimentoSubDia": -0.0073589249679979485,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 226,
        "cedentes": 17,
        "sacados": 135,
        "taxaMedia": 0.018036295098888763,
        "prazoMedio": 31.664996316864965,
        "montanteAtraso": 542559.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14734342.605884656,
        "valorNominal": 16103934.54,
        "caixa": 716.3600000005245,
        "cessaoRendimentosDia": -441993.1999999995,
        "ativoTotal": 14735058.965884658,
        "funding": 14559999.225128775,
        "subordinada": 175059.7407558821,
        "puSub": 1750.597407558821,
        "rendimentoSubDia": -0.02321356169369515,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 89,
        "cedentes": 9,
        "sacados": 48,
        "taxaMedia": 0.015833351672514682,
        "prazoMedio": 90.51351531375308,
        "montanteAtraso": 373460.01
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28924826.36030579,
        "valorNominal": 30212434.0,
        "caixa": 7652.200000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28932478.56030579,
        "funding": 28604881.548747,
        "subordinada": 327597.01155878976,
        "puSub": 3275.9701155878975,
        "rendimentoSubDia": -0.03230978355092995,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020271205651632745,
        "prazoMedio": 4.716140849169993,
        "montanteAtraso": 9031791.91
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 36861459.06345024,
        "valorNominal": 37928243.92,
        "caixa": 1473179.3599999999,
        "cessaoRendimentosDia": -268961.39000000013,
        "ativoTotal": 38334638.42345024,
        "funding": 35243492.4412,
        "subordinada": 3091145.982250236,
        "puSub": 30911.45982250236,
        "rendimentoSubDia": 0.0008502700749843939,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 31,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01792669499645301,
        "prazoMedio": 16.057636906169037,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 16052397.391939389,
        "valorNominal": 16712523.889999999,
        "caixa": 887.6199999999808,
        "cessaoRendimentosDia": 30.0,
        "ativoTotal": 16053285.011939388,
        "funding": 16128072.64521565,
        "subordinada": -74787.63327626139,
        "puSub": -747.8763327626139,
        "rendimentoSubDia": -0.009817958127465887,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.01808474267964424,
        "prazoMedio": 6.996739134033474,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "carteiraVp": 49782947.59943023,
        "valorNominal": 53199207.589999996,
        "caixa": 1087.2799999999988,
        "cessaoRendimentosDia": -673935.96,
        "ativoTotal": 49784034.879430234,
        "funding": 49850601.625202,
        "subordinada": -66566.74577176571,
        "puSub": -665.667457717657,
        "rendimentoSubDia": -0.0369974496798714,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 22,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017802536513059505,
        "prazoMedio": 56.76723896906423,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14334854.446366433,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14338297.566366432,
        "funding": 14402075.819403999,
        "subordinada": -63778.25303756632,
        "puSub": -637.7825303756632,
        "rendimentoSubDia": 0.010285299075428078,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01634410890199164,
        "prazoMedio": 155.1093636219827,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41176699.32785591,
        "valorNominal": 51743678.75,
        "caixa": 5174.130000000005,
        "cessaoRendimentosDia": 46.45000000001164,
        "ativoTotal": 41181873.45785591,
        "funding": 41040630.038100004,
        "subordinada": 141243.41975590587,
        "puSub": 1412.4341975590587,
        "rendimentoSubDia": -0.009268293209504286,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.02262281463876089,
        "prazoMedio": 285.21164106279923,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 20716685.56492442,
        "valorNominal": 21902227.91,
        "caixa": 5672522.300000001,
        "cessaoRendimentosDia": 5672522.300000001,
        "ativoTotal": 26389207.86492442,
        "funding": 26432946.87092711,
        "subordinada": -43739.00600269064,
        "puSub": -437.39006002690644,
        "rendimentoSubDia": -1.4525630207593339,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.020601339074600555,
        "prazoMedio": 966.4048657943265,
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
        "puAtual": 444.40273270999995,
        "valorAtual": 17731669.035129,
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
        "puAtual": 643.7204165530461,
        "valorAtual": 25684444.62046654,
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
        "puAtual": 169.27273214440697,
        "valorAtual": 6753982.012561838,
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
        "puAtual": 633.0601021900001,
        "valorAtual": 25259098.077381004,
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
        "puAtual": 687.01853543,
        "valorAtual": 27412039.563657,
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
        "puAtual": 257.86589286884373,
        "valorAtual": 10288849.125466865,
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
        "puAtual": 331.69507713999997,
        "valorAtual": 13234633.577885998,
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
        "puAtual": 47.40706684,
        "valorAtual": 1185176.6709999999,
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
        "puAtual": 1079.50810299,
        "valorAtual": 9715572.92691,
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
        "puAtual": 1079.50810299,
        "valorAtual": 4522059.44342511,
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
        "puAtual": 469.08606589,
        "valorAtual": 18716534.029011,
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
        "puAtual": 367.63033013833547,
        "valorAtual": 14559999.225128775,
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
        "puAtual": 1063.4898715900001,
        "valorAtual": 14144415.292147001,
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
        "puAtual": 1087.253102,
        "valorAtual": 14460466.256599998,
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
        "puAtual": 710.13033507,
        "valorAtual": 14202606.7014,
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
        "puAtual": 1052.04428699,
        "valorAtual": 21040885.739800002,
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
        "puAtual": 1034.18227927,
        "valorAtual": 16128072.64521565,
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
        "puAtual": 978.822336,
        "valorAtual": 19576446.72,
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
        "puAtual": 1012.51354198,
        "valorAtual": 20250270.8396,
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
        "puAtual": 1012.51354198,
        "valorAtual": 10023884.065602,
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
        "puAtual": 773.7626591,
        "valorAtual": 8078082.161003999,
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
        "puAtual": 1045.288208,
        "valorAtual": 6323993.6584,
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
        "puAtual": 1028.587219,
        "valorAtual": 20571744.38,
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
        "puAtual": 1028.587219,
        "valorAtual": 20468885.6581,
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
        "puAtual": 1020.62673106,
        "valorAtual": 20412534.6212,
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
        "puAtual": 1016.44643757,
        "valorAtual": 6020412.249727109,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -0.03130898714811314
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 386766759.2968189,
      "valor": 386766759.2968189,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 5178222.410346768,
      "valor": 5178222.410346768,
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
          "value": "R$ 391.944.981,71",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 384.538.060,87",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 7.406.920,84",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ -2.353.491,70",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 386.766.759,30",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 5.178.222,41",
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
      "date": "03/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
