window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-02-23"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "23/02/2026",
    "dateKey": "2026-02-23",
    "importedAt": "2026-07-29T09:58:09.677267-03:00",
    "revisionId": "20260223-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 426092863.62486595,
    "pddTotal": 0.0,
    "carteiraVp": 426092863.62486595,
    "carteiraVpLiquido": 426092863.62486595,
    "caixa": 5315998.640000001,
    "total": 431408862.264866,
    "lastrosAtivos": 2317.0,
    "quantidadeLastrosAtivos": 2317.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 5315998.640000001
    },
    "total": 5315998.640000001,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 408500026.179432,
    "subordinadaTotal": 22908836.085434005,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 22908836.085434005,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 408500026.179432,
        "valor": 408500026.179432
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 22908836.085434005,
        "valor": 22908836.085434005
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 445456104.65,
    "valorPresente": 426092863.62486595,
    "valorPresenteLiquido": 426092863.62486595,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 19.589640136283016,
    "taxaMediaPonderada": 0.0199495905074257,
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
        "value": "R$ 426.092.863,62"
      },
      {
        "label": "Caixa total",
        "value": "R$ 5.315.998,64"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 22.908.836,09"
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
        "carteiraVp": 41280006.90761209,
        "valorNominal": 45499386.94,
        "caixa": 562687.08,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41842693.98761209,
        "funding": 41657461.254801005,
        "subordinada": 185232.73281108588,
        "puSub": 1852.3273281108588,
        "rendimentoSubDia": 0.05835688772187897,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 311,
        "cedentes": 29,
        "sacados": 111,
        "taxaMedia": 0.021486459271273375,
        "prazoMedio": 6.223865570258233,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 41157562.74538753,
        "valorNominal": 47378485.86,
        "caixa": 558777.8200000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41716340.56538753,
        "funding": 41564516.718501,
        "subordinada": 151823.84688653052,
        "puSub": 1518.238468865305,
        "rendimentoSubDia": 0.29112297320227,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 283,
        "cedentes": 20,
        "sacados": 131,
        "taxaMedia": 0.020534390366926586,
        "prazoMedio": 74.45169462970955,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 41044281.36634069,
        "valorNominal": 43990350.99,
        "caixa": 424410.29000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41468691.65634069,
        "funding": 41495776.679301,
        "subordinada": -27085.022960312665,
        "puSub": -270.85022960312665,
        "rendimentoSubDia": -0.17645482459295148,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 503,
        "cedentes": 22,
        "sacados": 264,
        "taxaMedia": 0.01886401749455643,
        "prazoMedio": 3.7881361309452646,
        "montanteAtraso": 21323.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 31703984.849418547,
        "valorNominal": 16886049.52,
        "caixa": 81448.37999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31785433.229418546,
        "funding": 31782492.3595866,
        "subordinada": 2940.869831945747,
        "puSub": 29.40869831945747,
        "rendimentoSubDia": 18.51008390332751,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018943260006237746,
        "prazoMedio": 6.215369543553916,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 31332665.48224347,
        "valorNominal": 17264983.55,
        "caixa": 127572.73999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31460238.22224347,
        "funding": 31436940.79070235,
        "subordinada": 23297.43154111877,
        "puSub": 232.97431541118772,
        "rendimentoSubDia": 0.10775214996323368,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018858708559582403,
        "prazoMedio": 7.180620838565025,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 40295454.41435732,
        "valorNominal": 45704810.06,
        "caixa": 486872.91,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40782327.324357316,
        "funding": 40727903.3742,
        "subordinada": 54423.95015731454,
        "puSub": 544.2395015731454,
        "rendimentoSubDia": 0.5792404054023343,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 655,
        "cedentes": 41,
        "sacados": 271,
        "taxaMedia": 0.020310908161836814,
        "prazoMedio": 9.439061071316218,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 40523247.406583846,
        "valorNominal": 44230242.33,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40523247.406583846,
        "funding": 40353613.0851,
        "subordinada": 169634.32148384303,
        "puSub": 1696.3432148384302,
        "rendimentoSubDia": 0.29204388625246325,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 36,
        "cedentes": 11,
        "sacados": 28,
        "taxaMedia": 0.020770367135493323,
        "prazoMedio": 13.666670154665663,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 32040300.038698867,
        "valorNominal": 35608051.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32040300.038698867,
        "funding": 31911235.569326002,
        "subordinada": 129064.46937286481,
        "puSub": 1290.6446937286482,
        "rendimentoSubDia": 0.009913339133287513,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.017831798392752746,
        "prazoMedio": 59.18830310755729,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 22174716.706359692,
        "valorNominal": 33028420.47,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22174716.706359692,
        "funding": 0.0,
        "subordinada": 22174716.706359692,
        "puSub": 221747.16706359692,
        "rendimentoSubDia": 0.0013529913384888737,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.01993064660516975,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 32225448.92680277,
        "valorNominal": 35165539.66,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32225448.92680277,
        "funding": 32188061.274607,
        "subordinada": 37387.65219577029,
        "puSub": 373.87652195770295,
        "rendimentoSubDia": 3.5937489570053547,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 117,
        "cedentes": 10,
        "sacados": 26,
        "taxaMedia": 0.021315922940958368,
        "prazoMedio": 9.086886055374134,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 36781537.55624916,
        "valorNominal": 41913397.79,
        "caixa": 3074229.4200000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39855766.97624916,
        "funding": 39876385.460315,
        "subordinada": -20618.484065838158,
        "puSub": -206.18484065838157,
        "rendimentoSubDia": -0.5154494862457301,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 235,
        "cedentes": 14,
        "sacados": 85,
        "taxaMedia": 0.018579949690955822,
        "prazoMedio": 33.144633912840874,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 35533657.22481199,
        "valorNominal": 38786386.48,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35533657.22481199,
        "funding": 35505639.612992,
        "subordinada": 28017.61181998998,
        "puSub": 280.1761181998998,
        "rendimentoSubDia": 94.44668905121506,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 152,
        "cedentes": 13,
        "sacados": 57,
        "taxaMedia": 0.02135479898239513,
        "prazoMedio": 2.977272414808524,
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
        "puAtual": 1044.04664799,
        "valorAtual": 41657461.254801005,
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
        "puAtual": 1041.71721099,
        "valorAtual": 41564516.718501,
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
        "puAtual": 1039.99440299,
        "valorAtual": 41495776.679301,
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
        "puAtual": 1031.49722055,
        "valorAtual": 31782492.3595866,
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
        "puAtual": 1031.49722055,
        "valorAtual": 31436940.79070235,
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
        "puAtual": 1020.749458,
        "valorAtual": 40727903.3742,
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
        "puAtual": 1011.368749,
        "valorAtual": 40353613.0851,
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
        "puAtual": 1004.034722,
        "valorAtual": 25100868.05,
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
        "puAtual": 1004.034722,
        "valorAtual": 5189855.478018,
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
        "puAtual": 1004.034722,
        "valorAtual": 1620512.041308,
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
        "puAtual": 1006.852303,
        "valorAtual": 32188061.274607,
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
        "puAtual": 1006.852303,
        "valorAtual": 39876385.460315,
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
        "puAtual": 1006.852303,
        "valorAtual": 13391135.629900001,
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
        "puAtual": 1006.852303,
        "valorAtual": 13391135.629900001,
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
        "puAtual": 1006.852303,
        "valorAtual": 8723368.353192,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": 0.009863128460640302
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 408500026.179432,
      "valor": 408500026.179432,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 22908836.085434005,
      "valor": 22908836.085434005,
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
          "value": "R$ 431.408.862,26",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 426.092.863,62",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 5.315.998,64",
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
          "value": "R$ 408.500.026,18",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 22.908.836,09",
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
      "date": "23/02/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
