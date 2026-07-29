window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-13"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "13/07/2026",
    "dateKey": "2026-07-13",
    "importedAt": "2026-07-29T10:13:00.230507-03:00",
    "revisionId": "20260713-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 315461356.075953,
    "pddTotal": 0.0,
    "carteiraVp": 315461356.075953,
    "carteiraVpLiquido": 315461356.075953,
    "caixa": 37120612.78,
    "total": 352581968.855953,
    "lastrosAtivos": 921.0,
    "quantidadeLastrosAtivos": 921.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 37120612.78
    },
    "total": 37120612.78,
    "cessaoRendimentosDia": 1648155.5500000035,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 328837764.0880212,
    "subordinadaTotal": 23744204.767931785,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 23744204.767931785,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 328837764.0880212,
        "valor": 328837764.0880212
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 23744204.767931785,
        "valor": 23744204.767931785
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 377602625.53,
    "valorPresente": 315461356.075953,
    "valorPresenteLiquido": 315461356.075953,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 153.2426786680455,
    "taxaMediaPonderada": 0.019079414570362094,
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
        "value": "R$ 315.461.356,08"
      },
      {
        "label": "Caixa total",
        "value": "R$ 37.120.612,78"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 1.648.155,55"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 23.744.204,77"
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
        "carteiraVp": 16182074.886740213,
        "valorNominal": 23737047.65,
        "caixa": 1867060.59,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 18049135.476740215,
        "funding": 17829509.328561,
        "subordinada": 219626.14817921445,
        "puSub": 2196.2614817921444,
        "rendimentoSubDia": 0.009655475352990939,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.02259726656435174,
        "prazoMedio": 12.410377253076344,
        "montanteAtraso": 100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 26075725.818432033,
        "valorNominal": 28550334.8,
        "caixa": 1167.6399999999994,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26076893.458432034,
        "funding": 25818803.751069,
        "subordinada": 258089.7073630318,
        "puSub": 2580.897073630318,
        "rendimentoSubDia": 0.1298498128071266,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.0202029048513339,
        "prazoMedio": 128.99026824312912,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 1548292.1579896153,
        "valorNominal": 19023272.3,
        "caixa": 3982624.64,
        "cessaoRendimentosDia": 3973519.29,
        "ativoTotal": 5530916.797989615,
        "funding": 5396718.400773001,
        "subordinada": 134198.39721661434,
        "puSub": 1341.9839721661433,
        "rendimentoSubDia": 0.18049101907846654,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018340848182001854,
        "prazoMedio": -2.3930785417058096,
        "montanteAtraso": 347967.87
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 25023765.33447196,
        "valorNominal": 26843675.89,
        "caixa": 5834.959999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 25029600.29447196,
        "funding": 24892086.962337,
        "subordinada": 137513.33213496208,
        "puSub": 1375.133321349621,
        "rendimentoSubDia": 0.01299097439619401,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.018861268667498522,
        "prazoMedio": 18.992062585179546,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 26106743.703384187,
        "valorNominal": 26344807.88,
        "caixa": 2253.269999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26108996.973384187,
        "funding": 25944882.24447,
        "subordinada": 164114.72891418636,
        "puSub": 1641.1472891418637,
        "rendimentoSubDia": 0.012728852819567926,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01886012963808124,
        "prazoMedio": 19.528037286502244,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10157754.083681425,
        "valorNominal": 10569573.61,
        "caixa": 19881.210000000006,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10177635.293681426,
        "funding": 9789235.103781,
        "subordinada": 388400.1899004262,
        "puSub": 3884.0018990042618,
        "rendimentoSubDia": 0.0004157155218353914,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 249,
        "cedentes": 21,
        "sacados": 132,
        "taxaMedia": 0.020566781945540836,
        "prazoMedio": 41.21845812804422,
        "montanteAtraso": 1811500.0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13450428.426912295,
        "valorNominal": 14949673.5,
        "caixa": 85873.16,
        "cessaoRendimentosDia": 3022.2799999999843,
        "ativoTotal": 13536301.586912295,
        "funding": 13303865.892911999,
        "subordinada": 232435.6940002963,
        "puSub": 2324.356940002963,
        "rendimentoSubDia": 0.06334698608628897,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.01760970264795587,
        "prazoMedio": 42.34159074035154,
        "montanteAtraso": 2378833.338144165
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12533665.237076543,
        "valorNominal": 24122656.0,
        "caixa": 1178888.04,
        "cessaoRendimentosDia": 1178888.04,
        "ativoTotal": 13712553.277076542,
        "funding": 12666273.593281109,
        "subordinada": 1046279.6837954335,
        "puSub": 10462.796837954334,
        "rendimentoSubDia": -9.107883893281821,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01821557936228216,
        "prazoMedio": 141.3153811872343,
        "montanteAtraso": 6016117.188476433
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58757.65000000002,
        "cessaoRendimentosDia": 50.48000000001048,
        "ativoTotal": 58757.65000000002,
        "funding": 0.0,
        "subordinada": 58757.65000000002,
        "puSub": 587.5765000000002,
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
        "carteiraVp": 19030806.580934465,
        "valorNominal": 20486387.59,
        "caixa": 132527.03,
        "cessaoRendimentosDia": 15318.380000000005,
        "ativoTotal": 19163333.610934466,
        "funding": 18812640.403704,
        "subordinada": 350693.20723046735,
        "puSub": 3506.9320723046735,
        "rendimentoSubDia": 0.05118590281517266,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 222,
        "cedentes": 16,
        "sacados": 132,
        "taxaMedia": 0.018026036512112903,
        "prazoMedio": 31.87330544494913,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14739645.918968579,
        "valorNominal": 16038934.53,
        "caixa": 331595.41,
        "cessaoRendimentosDia": 6.820000000006985,
        "ativoTotal": 15071241.328968579,
        "funding": 14634762.46173755,
        "subordinada": 436478.86723102815,
        "puSub": 4364.788672310282,
        "rendimentoSubDia": 0.012495681942531478,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 88,
        "cedentes": 9,
        "sacados": 48,
        "taxaMedia": 0.015797907828909684,
        "prazoMedio": 90.92039812359977,
        "montanteAtraso": 308460.0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 15516100.778884588,
        "valorNominal": 16543310.409999998,
        "caixa": 9095943.35,
        "cessaoRendimentosDia": 7.870000001043081,
        "ativoTotal": 24612044.128884587,
        "funding": 24277945.684734,
        "subordinada": 334098.4441505857,
        "puSub": 3340.984441505857,
        "rendimentoSubDia": -0.014513141278846398,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 5,
        "sacados": 7,
        "taxaMedia": 0.017831514028192674,
        "prazoMedio": 8.853011457794539,
        "montanteAtraso": 3817054.05
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 22082803.69958771,
        "valorNominal": 22581225.5,
        "caixa": 420018.05000000005,
        "cessaoRendimentosDia": -80387.15999999992,
        "ativoTotal": 22502821.74958771,
        "funding": 22443757.277000003,
        "subordinada": 59064.472587708384,
        "puSub": 590.6447258770838,
        "rendimentoSubDia": -0.5744728650464028,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01796504808358316,
        "prazoMedio": 26.9417877567861,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2894809.5814295765,
        "valorNominal": 2983591.13,
        "caixa": 12130.109999999986,
        "cessaoRendimentosDia": 34.90000000000873,
        "ativoTotal": 2906939.6914295764,
        "funding": 3005564.39736175,
        "subordinada": -98624.70593217341,
        "puSub": -986.2470593217341,
        "rendimentoSubDia": -0.0011429156012354724,
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
        "carteiraVp": 29894719.405703057,
        "valorNominal": 31789039.52,
        "caixa": 19917026.060000002,
        "cessaoRendimentosDia": -15397.849999997765,
        "ativoTotal": 49811745.465703055,
        "funding": 29919986.758565,
        "subordinada": 19891758.707138054,
        "puSub": 198917.58707138055,
        "rendimentoSubDia": -0.0006766549703126623,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01780295798145305,
        "prazoMedio": 95.0109428800819,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14400696.92372686,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14404140.04372686,
        "funding": 14471833.963988699,
        "subordinada": -67693.9202618394,
        "puSub": -676.939202618394,
        "rendimentoSubDia": 0.009770165650099694,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016344405220384044,
        "prazoMedio": 155.07707371354144,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41481483.29497008,
        "valorNominal": 51743678.75,
        "caixa": 5455.9800000000105,
        "cessaoRendimentosDia": 46.58999999999651,
        "ativoTotal": 41486939.27497008,
        "funding": 41239415.1498,
        "subordinada": 247524.1251700744,
        "puSub": 2475.241251700744,
        "rendimentoSubDia": 0.29157707264647303,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.022630286949457755,
        "prazoMedio": 285.23413544123554,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 24341840.24305979,
        "valorNominal": 25663993.169999998,
        "caixa": 132.5099999999802,
        "cessaoRendimentosDia": -3426954.09,
        "ativoTotal": 24341972.753059793,
        "funding": 24390482.713946078,
        "subordinada": -48509.96088628471,
        "puSub": -485.0996088628471,
        "rendimentoSubDia": -1.0143641056515869,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01852532010041464,
        "prazoMedio": 876.6651363457745,
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
        "puAtual": 446.85487039,
        "valorAtual": 17829509.328561,
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
        "puAtual": 647.08781331,
        "valorAtual": 25818803.751069,
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
        "puAtual": 135.25610027000002,
        "valorAtual": 5396718.400773001,
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
        "puAtual": 623.86182863,
        "valorAtual": 24892086.962337,
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
        "puAtual": 650.2476753,
        "valorAtual": 25944882.24447,
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
        "puAtual": 245.34423819,
        "valorAtual": 9789235.103781,
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
        "puAtual": 333.43022288,
        "valorAtual": 13303865.892911999,
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
        "puAtual": 902.47900278,
        "valorAtual": 8122311.02502,
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
        "puAtual": 1084.73682699,
        "valorAtual": 4543962.56826111,
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
        "puAtual": 471.49474696,
        "valorAtual": 18812640.403704,
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
        "puAtual": 369.51805231000003,
        "valorAtual": 14634762.46173755,
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
        "puAtual": 732.57347998,
        "valorAtual": 9743227.283734,
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
        "puAtual": 1092.83597,
        "valorAtual": 14534718.401,
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
        "puAtual": 65.04787685000001,
        "valorAtual": 1300957.5370000002,
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
        "puAtual": 1057.139987,
        "valorAtual": 21142799.740000002,
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
        "puAtual": 192.72615564999998,
        "valorAtual": 3005564.39736175,
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
        "puAtual": 992.46893692,
        "valorAtual": 19849378.7384,
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
        "puAtual": 1017.23313335,
        "valorAtual": 10070608.020165,
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
        "puAtual": 777.51046943,
        "valorAtual": 8117209.300849199,
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
        "puAtual": 1050.35118399,
        "valorAtual": 6354624.6631395,
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
        "puAtual": 1033.569302,
        "valorAtual": 20671386.040000003,
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
        "puAtual": 1033.569302,
        "valorAtual": 20568029.109800003,
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
        "puAtual": 917.0330841499999,
        "valorAtual": 18340661.683,
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
        "puAtual": 1021.41162096,
        "valorAtual": 6049821.030946081,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -0.08481546634446124
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 328837764.0880212,
      "valor": 328837764.0880212,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 23744204.767931785,
      "valor": 23744204.767931785,
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
          "value": "R$ 352.581.968,86",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 315.461.356,08",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 37.120.612,78",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 1.648.155,55",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 328.837.764,09",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 23.744.204,77",
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
      "date": "13/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
