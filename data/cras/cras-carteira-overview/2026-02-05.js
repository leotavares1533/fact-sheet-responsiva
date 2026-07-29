window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-02-05"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "05/02/2026",
    "dateKey": "2026-02-05",
    "importedAt": "2026-07-29T09:57:24.848276-03:00",
    "revisionId": "20260205-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 281400460.42723775,
    "pddTotal": 0.0,
    "carteiraVp": 281400460.42723775,
    "carteiraVpLiquido": 281400460.42723775,
    "caixa": 1002507.54,
    "total": 282402967.9672378,
    "lastrosAtivos": 1710.0,
    "quantidadeLastrosAtivos": 1710.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 1002507.54
    },
    "total": 1002507.54,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 260351826.2177722,
    "subordinadaTotal": 22051141.749465555,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 22051141.749465555,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 260351826.2177722,
        "valor": 260351826.2177722
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 22051141.749465555,
        "valor": 22051141.749465555
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 288320927.75,
    "valorPresente": 281400460.42723775,
    "valorPresenteLiquido": 281400460.42723775,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 17.041030249125704,
    "taxaMediaPonderada": 0.020016117833360283,
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
        "value": "R$ 281.400.460,43"
      },
      {
        "label": "Caixa total",
        "value": "R$ 1.002.507,54"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 22.051.141,75"
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
        "carteiraVp": 41212582.01123352,
        "valorNominal": 45867463.2,
        "caixa": 195142.04000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41407724.05123352,
        "funding": 41277163.023200996,
        "subordinada": 130561.02803252637,
        "puSub": 1305.6102803252638,
        "rendimentoSubDia": 0.017036629167236583,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 332,
        "cedentes": 30,
        "sacados": 118,
        "taxaMedia": 0.0214668112989451,
        "prazoMedio": 6.171908257394731,
        "montanteAtraso": 1485.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 40816306.70129896,
        "valorNominal": 47513741.06,
        "caixa": 39523.20999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40855829.91129896,
        "funding": 40820481.089136,
        "subordinada": 35348.82216296345,
        "puSub": 353.4882216296345,
        "rendimentoSubDia": -0.10510236757370839,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 284,
        "cedentes": 19,
        "sacados": 130,
        "taxaMedia": 0.020535379422057402,
        "prazoMedio": 74.18009377499723,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 40667103.46175544,
        "valorNominal": 43985145.39,
        "caixa": 249656.58000000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40916760.04175544,
        "funding": 40975659.2585527,
        "subordinada": -58899.21679726243,
        "puSub": -588.9921679726243,
        "rendimentoSubDia": -0.018532901214651898,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 501,
        "cedentes": 21,
        "sacados": 263,
        "taxaMedia": 0.018857848358524464,
        "prazoMedio": 3.775792236717027,
        "montanteAtraso": 21323.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 31415225.4228985,
        "valorNominal": 16886049.52,
        "caixa": 80536.59,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31495762.0128985,
        "funding": 31517222.267513998,
        "subordinada": -21460.254615496844,
        "puSub": -214.60254615496845,
        "rendimentoSubDia": -0.09976923642398228,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01894278076505404,
        "prazoMedio": 6.212883710837006,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 31048331.492156792,
        "valorNominal": 17264983.55,
        "caixa": 127032.34000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31175363.832156792,
        "funding": 31174554.817831498,
        "subordinada": 809.0143252946436,
        "puSub": 8.090143252946437,
        "rendimentoSubDia": -1.57110589232355,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018858117239700885,
        "prazoMedio": 7.177507726061209,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 34245439.141334794,
        "valorNominal": 39544882.23,
        "caixa": 310616.77999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34556055.921334796,
        "funding": 34582520.498136,
        "subordinada": -26464.57680120319,
        "puSub": -264.6457680120319,
        "rendimentoSubDia": -0.024920921178393063,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 547,
        "cedentes": 35,
        "sacados": 219,
        "taxaMedia": 0.020239921753642982,
        "prazoMedio": 11.460454626220976,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 40049560.209035225,
        "valorNominal": 44230242.33,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40049560.209035225,
        "funding": 40004225.263401,
        "subordinada": 45334.94563422352,
        "puSub": 453.3494563422352,
        "rendimentoSubDia": -0.09419063418012219,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 36,
        "cedentes": 11,
        "sacados": 28,
        "taxaMedia": 0.020765024138330885,
        "prazoMedio": 13.712720066675292,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 21945911.98752451,
        "valorNominal": 33028420.47,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 21945911.98752451,
        "funding": 0.0,
        "subordinada": 21945911.98752451,
        "puSub": 219459.1198752451,
        "rendimentoSubDia": 1.3940711239032382,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.01993126291618062,
        "prazoMedio": 0.0,
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
        "puAtual": 1034.51536399,
        "valorAtual": 41277163.023200996,
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
        "puAtual": 1032.697862,
        "valorAtual": 40820481.089136,
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
        "puAtual": 1031.35311499,
        "valorAtual": 40975659.2585527,
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
        "puAtual": 1022.8879095,
        "valorAtual": 31517222.267513998,
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
        "puAtual": 1022.8879095,
        "valorAtual": 31174554.817831498,
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
        "puAtual": 1012.398504,
        "valorAtual": 34582520.498136,
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
        "puAtual": 1002.61216199,
        "valorAtual": 40004225.263401,
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
      }
    ],
    "subHistory": [
      {
        "dateKey": "2025-12-24",
        "reportDate": "24/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 63308.567856274545,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-26",
        "reportDate": "26/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 85631.97419805825,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-29",
        "reportDate": "29/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 353208.8710503243,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": 1.3781761436538758
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 260351826.2177722,
      "valor": 260351826.2177722,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 22051141.749465555,
      "valor": 22051141.749465555,
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
          "value": "R$ 282.402.967,97",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 281.400.460,43",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 1.002.507,54",
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
          "value": "R$ 260.351.826,22",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 22.051.141,75",
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
      "date": "05/02/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
