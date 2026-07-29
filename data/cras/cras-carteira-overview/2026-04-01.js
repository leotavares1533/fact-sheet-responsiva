window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-04-01"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "01/04/2026",
    "dateKey": "2026-04-01",
    "importedAt": "2026-07-29T10:00:49.209881-03:00",
    "revisionId": "20260401-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 461947710.40899146,
    "pddTotal": 0.0,
    "carteiraVp": 461947710.40899146,
    "carteiraVpLiquido": 461947710.40899146,
    "caixa": 17733881.82,
    "total": 479681592.2289915,
    "lastrosAtivos": 2022.0,
    "quantidadeLastrosAtivos": 2022.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 17733881.82
    },
    "total": 17733881.82,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 465697532.720953,
    "subordinadaTotal": 13984059.508038506,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 13984059.508038506,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 465697532.720953,
        "valor": 465697532.720953
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 13984059.508038506,
        "valor": 13984059.508038506
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 471204190.61,
    "valorPresente": 461947710.40899146,
    "valorPresenteLiquido": 461947710.40899146,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 24.01074495690223,
    "taxaMediaPonderada": 0.01970848511702255,
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
        "value": "R$ 461.947.710,41"
      },
      {
        "label": "Caixa total",
        "value": "R$ 17.733.881,82"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 13.984.059,51"
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
        "carteiraVp": 34129935.4138864,
        "valorNominal": 37258492.68,
        "caixa": 5462985.04,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39592920.4538864,
        "funding": 40777306.990812,
        "subordinada": -1184386.5369256064,
        "puSub": -11843.865369256064,
        "rendimentoSubDia": 0.0012938036954484033,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 86,
        "cedentes": 18,
        "sacados": 42,
        "taxaMedia": 0.022084400395215066,
        "prazoMedio": 7.734128023791516,
        "montanteAtraso": 5835722.59
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 36203409.83707671,
        "valorNominal": 41374446.83,
        "caixa": 3557085.27,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39760495.10707671,
        "funding": 40207739.310732,
        "subordinada": -447244.2036552876,
        "puSub": -4472.442036552876,
        "rendimentoSubDia": 0.01792475462559895,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 93,
        "cedentes": 15,
        "sacados": 53,
        "taxaMedia": 0.020216685168710287,
        "prazoMedio": 86.75013197321884,
        "montanteAtraso": 397909.6
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41635713.330354154,
        "valorNominal": 43584253.41,
        "caixa": 133189.08,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41768902.41035415,
        "funding": 41735597.08206,
        "subordinada": 33305.32829415053,
        "puSub": 333.0532829415053,
        "rendimentoSubDia": 0.03813870067589886,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 486,
        "cedentes": 21,
        "sacados": 252,
        "taxaMedia": 0.018849760734178853,
        "prazoMedio": 3.818443770174325,
        "montanteAtraso": 23613.16
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42045036.59366516,
        "valorNominal": 27267265.52,
        "caixa": 111851.55999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42156888.15366516,
        "funding": 42095091.428124,
        "subordinada": 61796.72554115951,
        "puSub": 617.9672554115951,
        "rendimentoSubDia": -1.006495617512841,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018688425827739514,
        "prazoMedio": 11.834395016217455,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42017576.91337831,
        "valorNominal": 28015535.4,
        "caixa": 155647.61,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42173224.52337831,
        "funding": 42095091.428124,
        "subordinada": 78133.09525430948,
        "puSub": 781.3309525430948,
        "rendimentoSubDia": -1.0079322954193077,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.018613445484491568,
        "prazoMedio": 11.40599651099233,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40657713.25409719,
        "valorNominal": 45046935.54,
        "caixa": 409439.52999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41067152.784097195,
        "funding": 40878653.226222,
        "subordinada": 188499.55787519366,
        "puSub": 1884.9955787519366,
        "rendimentoSubDia": 0.007399515819198177,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 636,
        "cedentes": 40,
        "sacados": 267,
        "taxaMedia": 0.020326947417678116,
        "prazoMedio": 9.591690142165268,
        "montanteAtraso": 8171.95
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 38293384.98350533,
        "valorNominal": 41230242.33,
        "caixa": 27316.880000000005,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38320701.86350533,
        "funding": 38243855.190072,
        "subordinada": 76846.67343333364,
        "puSub": 768.4667343333364,
        "rendimentoSubDia": -0.056325426652301336,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 35,
        "cedentes": 10,
        "sacados": 27,
        "taxaMedia": 0.020479794844597353,
        "prazoMedio": 14.58548744681997,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 39310613.17766722,
        "valorNominal": 43729901.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39310613.17766722,
        "funding": 39185931.10091,
        "subordinada": 124682.07675722241,
        "puSub": 1246.8207675722242,
        "rendimentoSubDia": 0.012908445595141815,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 8,
        "sacados": 8,
        "taxaMedia": 0.01826058586543643,
        "prazoMedio": 86.27201930068621,
        "montanteAtraso": 872943.0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13240629.099295182,
        "valorNominal": 17468847.48,
        "caixa": 79717.58,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13320346.679295182,
        "funding": 0.0,
        "subordinada": 13320346.679295182,
        "puSub": 133203.46679295183,
        "rendimentoSubDia": 0.0009701542115752027,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.020599999999999955,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 37782699.06689194,
        "valorNominal": 40657301.15,
        "caixa": 3397618.5,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41180317.56689194,
        "funding": 41110061.823201,
        "subordinada": 70255.74369093776,
        "puSub": 702.5574369093775,
        "rendimentoSubDia": -0.06425269811101353,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 318,
        "cedentes": 26,
        "sacados": 175,
        "taxaMedia": 0.021165524463408105,
        "prazoMedio": 14.883377115018048,
        "montanteAtraso": 1584608.38
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 38390731.18470759,
        "valorNominal": 43029192.94,
        "caixa": 2367316.55,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40758047.73470759,
        "funding": 39332740.976952605,
        "subordinada": 1425306.7577549815,
        "puSub": 14253.067577549815,
        "rendimentoSubDia": -0.0030707849043476454,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 206,
        "cedentes": 19,
        "sacados": 85,
        "taxaMedia": 0.018379003216012265,
        "prazoMedio": 34.162620384160434,
        "montanteAtraso": 4520375.409999999
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 34547085.77446629,
        "valorNominal": 36982334.22,
        "caixa": 2031714.2200000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36578799.99446629,
        "funding": 36333464.16374336,
        "subordinada": 245335.83072292805,
        "puSub": 2453.3583072292804,
        "rendimentoSubDia": -0.018910987418010783,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 99,
        "cedentes": 11,
        "sacados": 43,
        "taxaMedia": 0.021354686917297798,
        "prazoMedio": 3.163444496551046,
        "montanteAtraso": 2923887.37
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 23693181.78,
        "valorNominal": 25559442.11,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 23693181.78,
        "funding": 23702000.0,
        "subordinada": -8818.219999998808,
        "puSub": -88.18219999998809,
        "rendimentoSubDia": null,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 27,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.017797143229917035,
        "prazoMedio": 9.63228479395898,
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
        "puAtual": 1021.9876438800001,
        "valorAtual": 40777306.990812,
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
        "puAtual": 1007.71276468,
        "valorAtual": 40207739.310732,
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
        "puAtual": 1046.0049394,
        "valorAtual": 41735597.08206,
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
        "puAtual": 1055.01482276,
        "valorAtual": 42095091.428124,
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
        "puAtual": 1055.01482276,
        "valorAtual": 42095091.428124,
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
        "puAtual": 1024.52764978,
        "valorAtual": 40878653.226222,
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
        "puAtual": 958.49261128,
        "valorAtual": 38243855.190072,
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
        "puAtual": 1026.10519,
        "valorAtual": 25652629.75,
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
        "puAtual": 1026.10519,
        "valorAtual": 9234946.709999999,
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
        "puAtual": 1026.10519,
        "valorAtual": 4298354.64091,
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
        "puAtual": 1030.32736399,
        "valorAtual": 41110061.823201,
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
        "puAtual": 993.1256401200001,
        "valorAtual": 39332740.976952605,
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
        "puAtual": 1030.32736399,
        "valorAtual": 13703353.941067,
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
        "puAtual": 1030.32736399,
        "valorAtual": 13703353.941067,
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
        "puAtual": 1030.32736399,
        "valorAtual": 8926756.28160936,
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
        "puAtual": 1000.0,
        "valorAtual": 20000000.0,
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
        "puAtual": 1000.0,
        "valorAtual": 3702000.0,
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
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-01",
        "reportDate": "01/04/2026",
        "caixaTotal": 17733881.82,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13984059.508038506,
        "rendimentoSubDia": -3.5426374607301674
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 465697532.720953,
      "valor": 465697532.720953,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 13984059.508038506,
      "valor": 13984059.508038506,
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
          "value": "R$ 479.681.592,23",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 461.947.710,41",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 17.733.881,82",
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
          "value": "R$ 465.697.532,72",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 13.984.059,51",
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
      "date": "01/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
