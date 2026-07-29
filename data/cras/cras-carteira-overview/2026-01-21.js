window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-01-21"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "21/01/2026",
    "dateKey": "2026-01-21",
    "importedAt": "2026-07-29T09:56:50.618019-03:00",
    "revisionId": "20260121-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 161200324.31649056,
    "pddTotal": 0.0,
    "carteiraVp": 161200324.31649056,
    "carteiraVpLiquido": 161200324.31649056,
    "caixa": 2255984.629047557,
    "total": 163456308.9455381,
    "lastrosAtivos": 1375.0,
    "quantidadeLastrosAtivos": 1375.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 2255984.629047557
    },
    "total": 2255984.629047557,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 163222513.81163397,
    "subordinadaTotal": 233795.13390413672,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 233795.13390413672,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 163222513.81163397,
        "valor": 163222513.81163397
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 233795.13390413672,
        "valor": 233795.13390413672
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 160102608.34,
    "valorPresente": 161200324.31649056,
    "valorPresenteLiquido": 161200324.31649056,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 22.536460439831668,
    "taxaMediaPonderada": 0.020064455461236686,
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
        "value": "R$ 161.200.324,32"
      },
      {
        "label": "Caixa total",
        "value": "R$ 2.255.984,63"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 233.795,13"
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
        "carteiraVp": 40865643.70416136,
        "valorNominal": 45973569.32,
        "caixa": 47820.149999999994,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40913463.85416136,
        "funding": 40822902.611943394,
        "subordinada": 90561.24221796542,
        "puSub": 905.6124221796542,
        "rendimentoSubDia": 0.0245652074444469,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 340,
        "cedentes": 29,
        "sacados": 117,
        "taxaMedia": 0.021461515809922817,
        "prazoMedio": 6.156093413148519,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 40397640.97163711,
        "valorNominal": 47513741.06,
        "caixa": 39139.23000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40436780.201637104,
        "funding": 40431876.77502072,
        "subordinada": 4903.426616385579,
        "puSub": 49.03426616385579,
        "rendimentoSubDia": -0.4612704158183061,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 284,
        "cedentes": 19,
        "sacados": 130,
        "taxaMedia": 0.020533010985466112,
        "prazoMedio": 74.20430798799133,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 40273023.4287277,
        "valorNominal": 43985145.39,
        "caixa": 248857.5290475569,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40521880.95777526,
        "funding": 40601302.89692,
        "subordinada": -79421.93914474547,
        "puSub": -794.2193914474547,
        "rendimentoSubDia": -0.011696514523038659,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 501,
        "cedentes": 21,
        "sacados": 263,
        "taxaMedia": 0.018856320296694096,
        "prazoMedio": 3.778320349085919,
        "montanteAtraso": 21323.2
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 11585511.071287911,
        "valorNominal": 0.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 11585511.071287911,
        "funding": 11452557.220587,
        "subordinada": 132953.85070091113,
        "puSub": 1329.5385070091113,
        "rendimentoSubDia": 0.010646832786687987,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.01891178311302899,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 10162729.009901673,
        "valorNominal": 0.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10162729.009901673,
        "funding": 10033656.326001,
        "subordinada": 129072.68390067294,
        "puSub": 1290.7268390067295,
        "rendimentoSubDia": 0.009692645945015288,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.01908116197901033,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 17915776.130774796,
        "valorNominal": 22630152.57,
        "caixa": 1920167.72,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19835943.850774795,
        "funding": 19880217.981161848,
        "subordinada": -44274.130387052894,
        "puSub": -442.74130387052895,
        "rendimentoSubDia": 0.04194530066338653,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 248,
        "cedentes": 15,
        "sacados": 115,
        "taxaMedia": 0.019840194507041997,
        "prazoMedio": 12.91982181168943,
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
        "puAtual": 1024.13142199,
        "valorAtual": 40822902.611943394,
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
        "puAtual": 1022.86674699,
        "valorAtual": 40431876.77502072,
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
        "puAtual": 1021.930604,
        "valorAtual": 40601302.89692,
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
        "puAtual": 1013.50063899,
        "valorAtual": 11452557.220587,
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
        "puAtual": 1013.50063899,
        "valorAtual": 10033656.326001,
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
        "puAtual": 1003.29134399,
        "valorAtual": 19880217.981161848,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2025-12-12",
        "reportDate": "12/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 469187.74965678155,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-15",
        "reportDate": "15/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 888192.4117239341,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-16",
        "reportDate": "16/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 28918.018888752908,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-17",
        "reportDate": "17/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 26392.98612340167,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-18",
        "reportDate": "18/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 23866.30236981809,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-19",
        "reportDate": "19/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 21337.99343097955,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-22",
        "reportDate": "22/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 68306.21043103561,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2025-12-23",
        "reportDate": "23/12/2025",
        "caixaTotal": 0.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 65808.18635586649,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.0009819262259946893
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 163222513.81163397,
      "valor": 163222513.81163397,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 233795.13390413672,
      "valor": 233795.13390413672,
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
          "value": "R$ 163.456.308,95",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 161.200.324,32",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 2.255.984,63",
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
          "value": "R$ 163.222.513,81",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 233.795,13",
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
      "date": "21/01/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
