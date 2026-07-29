window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-04-10"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "10/04/2026",
    "dateKey": "2026-04-10",
    "importedAt": "2026-07-29T10:01:29.255447-03:00",
    "revisionId": "20260410-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 460972378.7206012,
    "pddTotal": 0.0,
    "carteiraVp": 460972378.7206012,
    "carteiraVpLiquido": 460972378.7206012,
    "caixa": 9304865.15,
    "total": 470277243.8706012,
    "lastrosAtivos": 1904.0,
    "quantidadeLastrosAtivos": 1904.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 9304865.15
    },
    "total": 9304865.15,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 461859776.1211388,
    "subordinadaTotal": 8417467.749462355,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 8417467.749462355,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 461859776.1211388,
        "valor": 461859776.1211388
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 8417467.749462355,
        "valor": 8417467.749462355
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 468190734.75,
    "valorPresente": 460972378.7206012,
    "valorPresenteLiquido": 460972378.7206012,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 24.514067732984564,
    "taxaMediaPonderada": 0.019675301282824537,
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
        "value": "R$ 460.972.378,72"
      },
      {
        "label": "Caixa total",
        "value": "R$ 9.304.865,15"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 8.417.467,75"
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
        "carteiraVp": 33864916.06034894,
        "valorNominal": 36849593.67,
        "caixa": 696490.97,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34561407.03034894,
        "funding": 34311631.39914354,
        "subordinada": 249775.63120540231,
        "puSub": 2497.756312054023,
        "rendimentoSubDia": -1.207667035077428,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 58,
        "cedentes": 16,
        "sacados": 32,
        "taxaMedia": 0.02209275714291557,
        "prazoMedio": 7.841646087502124,
        "montanteAtraso": 5428563.58
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 36044868.23792915,
        "valorNominal": 41000727.230000004,
        "caixa": 398874.17,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36443742.40792915,
        "funding": 36290219.987301,
        "subordinada": 153522.4206281528,
        "puSub": 1535.2242062815278,
        "rendimentoSubDia": -0.03880046283444716,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 72,
        "cedentes": 12,
        "sacados": 45,
        "taxaMedia": 0.02022692055986168,
        "prazoMedio": 87.65521539239543,
        "montanteAtraso": 234607.1
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41668225.53937442,
        "valorNominal": 43390984.11,
        "caixa": 325853.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41994078.53937442,
        "funding": 41945058.194865,
        "subordinada": 49020.34450941533,
        "puSub": 490.20344509415327,
        "rendimentoSubDia": 0.033377250988437135,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 480,
        "cedentes": 21,
        "sacados": 248,
        "taxaMedia": 0.0188461579753827,
        "prazoMedio": 3.834377909085748,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42270838.80643941,
        "valorNominal": 27267265.52,
        "caixa": 109141.87999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42379980.68643941,
        "funding": 42305120.812689,
        "subordinada": 74859.87375041097,
        "puSub": 748.5987375041097,
        "rendimentoSubDia": 0.037197385256295235,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018688735608291693,
        "prazoMedio": 11.834013376392823,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42242470.356438145,
        "valorNominal": 28015535.4,
        "caixa": 153034.19,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42395504.54643814,
        "funding": 42305120.812689,
        "subordinada": 90383.73374914378,
        "puSub": 903.8373374914378,
        "rendimentoSubDia": 0.02901724605892042,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.01861379901313417,
        "prazoMedio": 11.40641556916143,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 39726692.677290075,
        "valorNominal": 43890649.97,
        "caixa": 1172797.57,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40899490.247290075,
        "funding": 40671637.73007774,
        "subordinada": 227852.5172123313,
        "puSub": 2278.525172123313,
        "rendimentoSubDia": 0.0066883404063105,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 620,
        "cedentes": 39,
        "sacados": 258,
        "taxaMedia": 0.020337298935657888,
        "prazoMedio": 9.871224224195617,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38524172.0027776,
        "valorNominal": 41230242.33,
        "caixa": 27479.22,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38551651.2227776,
        "funding": 38443914.426876,
        "subordinada": 107736.79590159655,
        "puSub": 1077.3679590159654,
        "rendimentoSubDia": -0.0407941759076218,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 35,
        "cedentes": 10,
        "sacados": 27,
        "taxaMedia": 0.02048295652563298,
        "prazoMedio": 14.560134191650384,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39510016.973776355,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39510016.973776355,
        "funding": 39375732.760439,
        "subordinada": 134284.21333735436,
        "puSub": 1342.8421333735437,
        "rendimentoSubDia": 0.01212386046308267,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.018260935513983976,
        "prazoMedio": 86.30884452235506,
        "montanteAtraso": 872943.0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13317992.969057512,
        "valorNominal": 17468847.48,
        "caixa": 79986.66000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13397979.629057512,
        "funding": 0.0,
        "subordinada": 13397979.629057512,
        "puSub": 133979.79629057512,
        "rendimentoSubDia": 0.0009701556908041642,
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
        "carteiraVp": 37875955.47376527,
        "valorNominal": 40654018.03,
        "caixa": 412104.8,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38288060.273765266,
        "funding": 38198490.721482,
        "subordinada": 89569.5522832647,
        "puSub": 895.6955228326469,
        "rendimentoSubDia": -0.8568150808973227,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 316,
        "cedentes": 26,
        "sacados": 173,
        "taxaMedia": 0.021194683792375373,
        "prazoMedio": 14.943348608423772,
        "montanteAtraso": 1584608.38
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 34996734.72909134,
        "valorNominal": 39462865.4,
        "caixa": 4203903.3,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39200638.029091336,
        "funding": 39265648.11759669,
        "subordinada": -65010.088505357504,
        "puSub": -650.100885053575,
        "rendimentoSubDia": -1.0455774716804314,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 167,
        "cedentes": 19,
        "sacados": 75,
        "taxaMedia": 0.018014248745787605,
        "prazoMedio": 37.63102262689973,
        "montanteAtraso": 1360017.46
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 33510532.69506893,
        "valorNominal": 35751469.22,
        "caixa": 1725199.3900000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35235732.085068926,
        "funding": 35018749.58014336,
        "subordinada": 216982.50492556393,
        "puSub": 2169.8250492556394,
        "rendimentoSubDia": -0.18577354711227978,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 92,
        "cedentes": 11,
        "sacados": 39,
        "taxaMedia": 0.02139097012161878,
        "prazoMedio": 3.2849333704913057,
        "montanteAtraso": 1736474.3699999999
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 23812901.119111236,
        "valorNominal": 25559442.11,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 23812901.119111236,
        "funding": 23816803.40989698,
        "subordinada": -3902.2907857447863,
        "puSub": -39.02290785744786,
        "rendimentoSubDia": -0.17412039309785898,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 27,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01779714332237087,
        "prazoMedio": 9.632306440177377,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 3606061.08013281,
        "valorNominal": 3919193.28,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 3606061.08013281,
        "funding": 9911648.1679395,
        "subordinada": -6305587.0878066905,
        "puSub": -63055.870878066904,
        "rendimentoSubDia": -3.3268685550313926e-05,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.01782020366829795,
        "prazoMedio": 41.0,
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
        "puAtual": 859.9406365700136,
        "valorAtual": 34311631.39914354,
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
        "puAtual": 909.52932299,
        "valorAtual": 36290219.987301,
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
        "puAtual": 1051.25459135,
        "valorAtual": 41945058.194865,
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
        "puAtual": 1060.27871711,
        "valorAtual": 42305120.812689,
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
        "puAtual": 1060.27871711,
        "valorAtual": 42305120.812689,
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
        "puAtual": 1019.3392914806452,
        "valorAtual": 40671637.73007774,
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
        "puAtual": 963.5066272400001,
        "valorAtual": 38443914.426876,
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
        "puAtual": 1031.075251,
        "valorAtual": 25776881.275,
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
        "puAtual": 1031.075251,
        "valorAtual": 9279677.259,
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
        "puAtual": 1031.075251,
        "valorAtual": 4319174.226439,
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
        "puAtual": 957.35565718,
        "valorAtual": 38198490.721482,
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
        "puAtual": 991.4315898900819,
        "valorAtual": 39265648.11759669,
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
        "puAtual": 922.73965487,
        "valorAtual": 12272437.409771,
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
        "puAtual": 1035.61792799,
        "valorAtual": 13773718.442267,
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
        "puAtual": 1035.61792799,
        "valorAtual": 8972593.72810536,
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
        "puAtual": 1004.84361699,
        "valorAtual": 20096872.3398,
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
        "puAtual": 1004.84361699,
        "valorAtual": 3719931.07009698,
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
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02600209",
        "puAtual": 1001.611939,
        "valorAtual": 3505641.7865,
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
        "puAtual": 1058.84402999,
        "valorAtual": 6406006.3814395005,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -0.06768926768272954
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 461859776.1211388,
      "valor": 461859776.1211388,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 8417467.749462355,
      "valor": 8417467.749462355,
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
          "value": "R$ 470.277.243,87",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 460.972.378,72",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 9.304.865,15",
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
          "value": "R$ 461.859.776,12",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 8.417.467,75",
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
      "date": "10/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
