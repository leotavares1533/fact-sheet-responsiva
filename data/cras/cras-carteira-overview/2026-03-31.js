window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-03-31"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "31/03/2026",
    "dateKey": "2026-03-31",
    "importedAt": "2026-07-29T10:00:42.600034-03:00",
    "revisionId": "20260331-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 419755565.86637783,
    "pddTotal": 0.0,
    "carteiraVp": 419755565.86637783,
    "carteiraVpLiquido": 419755565.86637783,
    "caixa": 16365204.910000002,
    "total": 436120770.77637786,
    "lastrosAtivos": 2002.0,
    "quantidadeLastrosAtivos": 2002.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 16365204.910000002
    },
    "total": 16365204.910000002,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 441620595.16110265,
    "subordinadaTotal": -5499824.384724794,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": -5499824.384724794,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 441620595.16110265,
        "valor": 441620595.16110265
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": -5499824.384724794,
        "valor": -5499824.384724794
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 425806863.54,
    "valorPresente": 419755565.86637783,
    "valorPresenteLiquido": 419755565.86637783,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 24.56571775505676,
    "taxaMediaPonderada": 0.019909981515217594,
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
        "value": "R$ 419.755.565,87"
      },
      {
        "label": "Caixa total",
        "value": "R$ 16.365.204,91"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ -5.499.824,38"
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
        "carteiraVp": 34320296.44885667,
        "valorNominal": 37478417.88,
        "caixa": 5236774.2700000005,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39557070.71885667,
        "funding": 40739926.87212,
        "subordinada": -1182856.1532633305,
        "puSub": -11828.561532633305,
        "rendimentoSubDia": 0.004606295829770568,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 91,
        "cedentes": 19,
        "sacados": 45,
        "taxaMedia": 0.022059949430019453,
        "prazoMedio": 7.683528794703438,
        "montanteAtraso": 5996181.649999998
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 36184797.73667903,
        "valorNominal": 41381445.83,
        "caixa": 3548624.08,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39733421.81667903,
        "funding": 40172790.445473,
        "subordinada": -439368.62879396975,
        "puSub": -4393.686287939698,
        "rendimentoSubDia": 0.018980655606175123,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 94,
        "cedentes": 15,
        "sacados": 54,
        "taxaMedia": 0.02021665489325898,
        "prazoMedio": 86.73700196105473,
        "montanteAtraso": 393614.7999999995
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41599737.26590027,
        "valorNominal": 43584253.41,
        "caixa": 133133.22,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41732870.48590027,
        "funding": 41700788.71467599,
        "subordinada": 32081.77122427523,
        "puSub": 320.8177122427523,
        "rendimentoSubDia": 0.039041720733344665,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 486,
        "cedentes": 21,
        "sacados": 252,
        "taxaMedia": 0.018849708453813212,
        "prazoMedio": 3.8185849597219663,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 32465186.296278313,
        "valorNominal": 16886049.52,
        "caixa": 81398.86,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32546585.156278312,
        "funding": 42060188.046072006,
        "subordinada": -9513602.889793694,
        "puSub": -95136.02889793694,
        "rendimentoSubDia": -150.006010269891,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018944520866670343,
        "prazoMedio": 6.222231322997137,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 32082219.079910494,
        "valorNominal": 17264983.55,
        "caixa": 127970.81,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32210189.889910493,
        "funding": 42060188.046072006,
        "subordinada": -9849998.156161513,
        "puSub": -98499.98156161513,
        "rendimentoSubDia": -123.0270956069066,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018860264694854415,
        "prazoMedio": 7.189160541969154,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40622878.138972245,
        "valorNominal": 45046935.54,
        "caixa": 409322.67,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41032200.80897225,
        "funding": 40845085.811481,
        "subordinada": 187114.99749124795,
        "puSub": 1871.1499749124796,
        "rendimentoSubDia": 0.013102665954402903,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 636,
        "cedentes": 40,
        "sacados": 267,
        "taxaMedia": 0.020326925432587795,
        "prazoMedio": 9.59106408718889,
        "montanteAtraso": 8171.949999999996
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38264772.811203115,
        "valorNominal": 41230242.33,
        "caixa": 27274.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38292046.811203115,
        "funding": 38210613.364119,
        "subordinada": 81433.44708411396,
        "puSub": 814.3344708411396,
        "rendimentoSubDia": -0.05326037495509772,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 35,
        "cedentes": 10,
        "sacados": 27,
        "taxaMedia": 0.02047915841659517,
        "prazoMedio": 14.589158726564616,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39277479.702160865,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39277479.702160865,
        "funding": 39154386.56644911,
        "subordinada": 123093.13571175188,
        "puSub": 1230.9313571175187,
        "rendimentoSubDia": 0.01913323077561291,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.01826052757171414,
        "prazoMedio": 86.26587458820478,
        "montanteAtraso": 872942.9999999994
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13227778.883813053,
        "valorNominal": 17468847.48,
        "caixa": 79657.53000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13307436.413813053,
        "funding": 0.0,
        "subordinada": 13307436.413813053,
        "puSub": 133074.36413813054,
        "rendimentoSubDia": 0.0009701550770895295,
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
        "carteiraVp": 38074562.791223325,
        "valorNominal": 40978179.14,
        "caixa": 3075501.5700000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41150064.361223325,
        "funding": 41074984.536201,
        "subordinada": 75079.82502232492,
        "puSub": 750.7982502232492,
        "rendimentoSubDia": -0.033296920005321806,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 321,
        "cedentes": 27,
        "sacados": 176,
        "taxaMedia": 0.021146600527248975,
        "prazoMedio": 14.75332981950529,
        "montanteAtraso": 1905486.3699999987
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 38674420.20488968,
        "valorNominal": 43335273.64,
        "caixa": 2054457.0800000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40728877.284889676,
        "funding": 39299180.23501615,
        "subordinada": 1429697.0498735234,
        "puSub": 14296.970498735234,
        "rendimentoSubDia": -0.0022788414225939357,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 214,
        "cedentes": 20,
        "sacados": 89,
        "taxaMedia": 0.018405410927404064,
        "prazoMedio": 33.892586245156345,
        "montanteAtraso": 4656047.559999997
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 34961436.50649078,
        "valorNominal": 37422334.22,
        "caixa": 1591090.82,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36552527.32649078,
        "funding": 36302462.52342336,
        "subordinada": 250064.8030674234,
        "puSub": 2500.648030674234,
        "rendimentoSubDia": 0.6541059133585772,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 100,
        "cedentes": 12,
        "sacados": 44,
        "taxaMedia": 0.021405643664061856,
        "prazoMedio": 3.122192375088894,
        "montanteAtraso": 3363887.3699999955
      }
    ],
    "rows": [
      {
        "operacao": "CRA 44",
        "craId": "cra-carteira-44",
        "serie": "SR1",
        "classe": "SR1",
        "ifCodigo": "CRA02500B41",
        "puAtual": 1021.0507988,
        "valorAtual": 40739926.87212,
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
        "puAtual": 1006.83685327,
        "valorAtual": 40172790.445473,
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
        "puAtual": 1045.13254924,
        "valorAtual": 41700788.71467599,
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
        "puAtual": 1054.14005128,
        "valorAtual": 42060188.046072006,
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
        "puAtual": 1054.14005128,
        "valorAtual": 42060188.046072006,
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
        "puAtual": 1023.68636119,
        "valorAtual": 40845085.811481,
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
        "puAtual": 957.65948281,
        "valorAtual": 38210613.364119,
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
        "puAtual": 1025.27917899,
        "valorAtual": 25631979.47475,
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
        "puAtual": 1025.27917899,
        "valorAtual": 9227512.61091,
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
        "puAtual": 1025.27917899,
        "valorAtual": 4294894.48078911,
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
        "puAtual": 1029.44823399,
        "valorAtual": 41074984.536201,
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
        "puAtual": 992.2782536300001,
        "valorAtual": 39299180.23501615,
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
        "puAtual": 1029.44823399,
        "valorAtual": 13691661.512067001,
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
        "puAtual": 1029.44823399,
        "valorAtual": 13691661.512067001,
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
        "puAtual": 1029.44823399,
        "valorAtual": 8919139.49928936,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -1.3952538619018304
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 441620595.16110265,
      "valor": 441620595.16110265,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": -5499824.384724794,
      "valor": -5499824.384724794,
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
          "value": "R$ 436.120.770,78",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 419.755.565,87",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 16.365.204,91",
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
          "value": "R$ 441.620.595,16",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ -5.499.824,38",
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
      "date": "31/03/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
