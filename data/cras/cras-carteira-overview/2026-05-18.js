window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-05-18"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "18/05/2026",
    "dateKey": "2026-05-18",
    "importedAt": "2026-07-29T10:04:47.537352-03:00",
    "revisionId": "20260518-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 474032563.0507863,
    "pddTotal": 0.0,
    "carteiraVp": 474032563.0507863,
    "carteiraVpLiquido": 474032563.0507863,
    "caixa": 5482194.899999999,
    "total": 479514757.95078635,
    "lastrosAtivos": 1414.0,
    "quantidadeLastrosAtivos": 1414.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 5482194.899999999
    },
    "total": 5482194.899999999,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 463465008.5228121,
    "subordinadaTotal": 16049749.427974185,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 16049749.427974185,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 463465008.5228121,
        "valor": 463465008.5228121
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 16049749.427974185,
        "valor": 16049749.427974185
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 485318395.71999997,
    "valorPresente": 474032563.0507863,
    "valorPresenteLiquido": 474032563.0507863,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 46.86758956413859,
    "taxaMediaPonderada": 0.019423006237442003,
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
        "value": "R$ 474.032.563,05"
      },
      {
        "label": "Caixa total",
        "value": "R$ 5.482.194,90"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 16.049.749,43"
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
        "carteiraVp": 32356261.334729865,
        "valorNominal": 34666829.65,
        "caixa": 250915.38,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32607176.714729864,
        "funding": 32704891.941078003,
        "subordinada": -97715.22634813935,
        "puSub": -977.1522634813934,
        "rendimentoSubDia": 0.011241394262432314,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 19,
        "cedentes": 9,
        "sacados": 13,
        "taxaMedia": 0.022178256995025566,
        "prazoMedio": 8.409477077755533,
        "montanteAtraso": 5271949.999999999
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 34304451.95008719,
        "valorNominal": 38419754.61,
        "caixa": 6121.390000000007,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34310573.34008719,
        "funding": 33945536.55927,
        "subordinada": 365036.7808171883,
        "puSub": 3650.367808171883,
        "rendimentoSubDia": 0.09618696672196725,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 23,
        "cedentes": 5,
        "sacados": 13,
        "taxaMedia": 0.020275997912042144,
        "prazoMedio": 94.46157661160254,
        "montanteAtraso": 3539806.08
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 31001219.98987105,
        "valorNominal": 31972245.21,
        "caixa": 128377.84999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31129597.839871053,
        "funding": 31104770.9402966,
        "subordinada": 24826.89957445115,
        "puSub": 248.26899574451147,
        "rendimentoSubDia": -0.034219789125114364,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 252,
        "cedentes": 14,
        "sacados": 132,
        "taxaMedia": 0.0186189647245987,
        "prazoMedio": 5.256601521632082,
        "montanteAtraso": 3011933.4699999997
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 43006953.30372222,
        "valorNominal": 27267265.52,
        "caixa": 176662.27000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 43183615.57372222,
        "funding": 43047035.43385535,
        "subordinada": 136580.13986687362,
        "puSub": 1365.8013986687363,
        "rendimentoSubDia": 0.014749882965227945,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018687765586689158,
        "prazoMedio": 11.88182733330168,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42658196.03976037,
        "valorNominal": 28015535.4,
        "caixa": 89581.78999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42747777.82976037,
        "funding": 42601134.729972005,
        "subordinada": 146643.09978836775,
        "puSub": 1466.4309978836775,
        "rendimentoSubDia": 1.7002838590234313,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.018612410829792012,
        "prazoMedio": 11.540737460722179,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 32386285.901382763,
        "valorNominal": 35683727.34,
        "caixa": 221744.34999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32608030.251382764,
        "funding": 32243637.196225338,
        "subordinada": 364393.05515742674,
        "puSub": 3643.9305515742676,
        "rendimentoSubDia": 0.05757408142118914,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 369,
        "cedentes": 34,
        "sacados": 183,
        "taxaMedia": 0.02035138029840066,
        "prazoMedio": 12.383620389682408,
        "montanteAtraso": 141314.13
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 27754328.936248492,
        "valorNominal": 30224506.14,
        "caixa": 4032.899999999994,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27758361.83624849,
        "funding": 27559627.574093997,
        "subordinada": 198734.26215449348,
        "puSub": 1987.342621544935,
        "rendimentoSubDia": 0.153621070442854,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 21,
        "cedentes": 9,
        "sacados": 17,
        "taxaMedia": 0.020408041728142052,
        "prazoMedio": 20.28787774014179,
        "montanteAtraso": 422187.46
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 27155628.70982842,
        "valorNominal": 32032656.0,
        "caixa": 19231.65000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27174860.35982842,
        "funding": 27140662.749773107,
        "subordinada": 34197.610055312514,
        "puSub": 341.97610055312515,
        "rendimentoSubDia": -0.1776139386222747,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018449184243629103,
        "prazoMedio": 132.72408591522483,
        "montanteAtraso": 12020393.576680698
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13631995.242231386,
        "valorNominal": 17468847.48,
        "caixa": 1303.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13633298.492231386,
        "funding": 0.0,
        "subordinada": 13633298.492231386,
        "puSub": 136332.98492231386,
        "rendimentoSubDia": 0.0009739838357738506,
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
        "carteiraVp": 35347714.5765807,
        "valorNominal": 37288172.33,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35347714.5765807,
        "funding": 35114026.68598307,
        "subordinada": 233687.89059763402,
        "puSub": 2336.8789059763403,
        "rendimentoSubDia": 0.08901374024299535,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 279,
        "cedentes": 23,
        "sacados": 151,
        "taxaMedia": 0.02106839768641446,
        "prazoMedio": 16.43314215127343,
        "montanteAtraso": 15105010.98
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 33107493.207565106,
        "valorNominal": 36992659.61,
        "caixa": 410142.19999999995,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33517635.407565106,
        "funding": 33261881.679940253,
        "subordinada": 255753.7276248522,
        "puSub": 2557.537276248522,
        "rendimentoSubDia": -4.340744668591475,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 115,
        "cedentes": 14,
        "sacados": 64,
        "taxaMedia": 0.017820166183296196,
        "prazoMedio": 40.18663596439545,
        "montanteAtraso": 871796.7699999999
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28217940.39312359,
        "valorNominal": 30212434.0,
        "caixa": 698425.83,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28916366.223123588,
        "funding": 28640475.396575,
        "subordinada": 275890.82654858753,
        "puSub": 2758.9082654858753,
        "rendimentoSubDia": 0.10401872639428156,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020203877781913238,
        "prazoMedio": 4.653155138442356,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 40954426.217105485,
        "valorNominal": 43345891.22,
        "caixa": 660089.49,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41614515.70710549,
        "funding": 40978153.31959999,
        "subordinada": 636362.387505494,
        "puSub": 6363.623875054941,
        "rendimentoSubDia": 0.0026214123153383007,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017911599307562205,
        "prazoMedio": 14.051017570702456,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 9185563.667542692,
        "valorNominal": 9807593.11,
        "caixa": 1354.0799999999872,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 9186917.747542692,
        "funding": 9279419.32733232,
        "subordinada": -92501.57978962734,
        "puSub": -925.0157978962734,
        "rendimentoSubDia": -0.0056405044556560036,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018294477539491923,
        "prazoMedio": 11.88393154631934,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 13977281.862913292,
        "valorNominal": 15631423.299999999,
        "caixa": 2809544.2199999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 16786826.08291329,
        "funding": 16819044.2204751,
        "subordinada": -32218.13756180927,
        "puSub": -322.1813756180927,
        "rendimentoSubDia": 0.05546995882509376,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016342467249896207,
        "prazoMedio": 155.29593258232464,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 28986821.718093697,
        "valorNominal": 36288854.8,
        "caixa": 4668.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28991489.968093697,
        "funding": 29024710.768342003,
        "subordinada": -33220.800248306245,
        "puSub": -332.20800248306244,
        "rendimentoSubDia": -0.47585647319073965,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 251,
        "cedentes": 2,
        "sacados": 56,
        "taxaMedia": 0.019902595503476096,
        "prazoMedio": 278.4616537287493,
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
        "puAtual": 819.67147722,
        "valorAtual": 32704891.941078003,
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
        "puAtual": 850.7653273,
        "valorAtual": 33945536.55927,
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
        "puAtual": 779.568193992396,
        "valorAtual": 31104770.9402966,
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
        "puAtual": 1078.873068517678,
        "valorAtual": 43047035.43385535,
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
        "puAtual": 1067.6976122800002,
        "valorAtual": 42601134.729972005,
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
        "puAtual": 808.111207925447,
        "valorAtual": 32243637.196225338,
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
        "puAtual": 690.71748306,
        "valorAtual": 27559627.574093997,
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
        "puAtual": 531.0568122899999,
        "valorAtual": 13276420.307249999,
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
        "puAtual": 1051.19739499,
        "valorAtual": 9460776.55491,
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
        "puAtual": 1051.19739499,
        "valorAtual": 4403465.88761311,
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
        "puAtual": 880.050794134914,
        "valorAtual": 35114026.68598307,
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
        "puAtual": 839.840466606243,
        "valorAtual": 33261881.679940253,
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
        "puAtual": 39.31271475,
        "valorAtual": 522859.10617499996,
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
        "puAtual": 1057.053244,
        "valorAtual": 14058808.1452,
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
        "puAtual": 1057.053244,
        "valorAtual": 14058808.1452,
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
        "puAtual": 1024.45383299,
        "valorAtual": 20489076.659799997,
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
        "puAtual": 1024.45383299,
        "valorAtual": 20489076.659799997,
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
        "puAtual": 1012.15306799,
        "valorAtual": 9279419.32733232,
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
        "puAtual": 1021.15908599,
        "valorAtual": 10660900.8577356,
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
        "puAtual": 1017.87493599,
        "valorAtual": 6158143.362739501,
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
        "puAtual": 1001.611939,
        "valorAtual": 20032238.78,
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
        "puAtual": 1001.611939,
        "valorAtual": 8992471.988342,
        "quantidadeIntegralizada": 19900.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": 0.037803052095168876
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 463465008.5228121,
      "valor": 463465008.5228121,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 16049749.427974185,
      "valor": 16049749.427974185,
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
          "value": "R$ 479.514.757,95",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 474.032.563,05",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 5.482.194,90",
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
          "value": "R$ 463.465.008,52",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 16.049.749,43",
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
      "date": "18/05/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
