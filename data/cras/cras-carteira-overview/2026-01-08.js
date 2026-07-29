window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-01-08"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "08/01/2026",
    "dateKey": "2026-01-08",
    "importedAt": "2026-07-29T09:56:31.797595-03:00",
    "revisionId": "20260108-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 104043612.66141136,
    "pddTotal": 0.0,
    "carteiraVp": 104043612.66141136,
    "carteiraVpLiquido": 104043612.66141136,
    "caixa": 0.0,
    "total": 104043612.66141136,
    "lastrosAtivos": 129.0,
    "quantidadeLastrosAtivos": 129.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 0.0
    },
    "total": 0.0,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 103614430.368512,
    "subordinadaTotal": 429182.2928993609,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 429182.2928993609,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 103614430.368512,
        "valor": 103614430.368512
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 429182.2928993609,
        "valor": 429182.2928993609
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 96759852.05,
    "valorPresente": 104043612.66141136,
    "valorPresenteLiquido": 104043612.66141136,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 32.575671321551326,
    "taxaMediaPonderada": 0.020375749000075938,
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
        "value": "R$ 104.043.612,66"
      },
      {
        "label": "Caixa total",
        "value": "R$ 0,00"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 429.182,29"
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
        "carteiraVp": 29861586.249380678,
        "valorNominal": 34748833.76,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29861586.249380678,
        "funding": 29768517.834936,
        "subordinada": 93068.41444467753,
        "puSub": 930.6841444467753,
        "rendimentoSubDia": 0.02377170362003489,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.022152597665845788,
        "prazoMedio": 8.487703758742603,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 33025817.907403175,
        "valorNominal": 40083132.34,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33025817.907403175,
        "funding": 32962701.984518997,
        "subordinada": 63115.92288417742,
        "puSub": 631.1592288417742,
        "rendimentoSubDia": -0.06511275527158866,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 19,
        "cedentes": 4,
        "sacados": 11,
        "taxaMedia": 0.020774105030600225,
        "prazoMedio": 89.98574453349798,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 19593030.931205064,
        "valorNominal": 21927885.95,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19593030.931205064,
        "funding": 19558464.269069,
        "subordinada": 34566.66213606298,
        "puSub": 345.6666213606298,
        "rendimentoSubDia": -0.005111840338374196,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 103,
        "cedentes": 2,
        "sacados": 86,
        "taxaMedia": 0.018520267775285124,
        "prazoMedio": 8.369374736579207,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 11486926.370888593,
        "valorNominal": 0.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 11486926.370888593,
        "funding": 11366492.120937,
        "subordinada": 120434.24995159358,
        "puSub": 1204.3424995159357,
        "rendimentoSubDia": 0.011584267006643723,
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
        "carteiraVp": 10076251.202533849,
        "valorNominal": 0.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10076251.202533849,
        "funding": 9958254.159051,
        "subordinada": 117997.04348284937,
        "puSub": 1179.9704348284938,
        "rendimentoSubDia": 0.010448503715438262,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.01908116197901033,
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
        "puAtual": 1015.713042,
        "valorAtual": 29768517.834936,
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
        "puAtual": 1014.892761,
        "valorAtual": 32962701.984518997,
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
        "puAtual": 1014.285343,
        "valorAtual": 19558464.269069,
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
        "puAtual": 1005.88425849,
        "valorAtual": 11366492.120937,
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
        "puAtual": 1005.88425849,
        "valorAtual": 9958254.159051,
        "quantidadeIntegralizada": 39900.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
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
        "rendimentoSubDia": 0.0004355446778694372
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 103614430.368512,
      "valor": 103614430.368512,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 429182.2928993609,
      "valor": 429182.2928993609,
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
          "value": "R$ 104.043.612,66",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 104.043.612,66",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 0,00",
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
          "value": "R$ 103.614.430,37",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 429.182,29",
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
      "date": "08/01/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
