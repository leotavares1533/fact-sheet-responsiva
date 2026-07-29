window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2025-12-24"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "24/12/2025",
    "dateKey": "2025-12-24",
    "importedAt": "2026-07-29T09:56:19.400536-03:00",
    "revisionId": "20251224-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 81705006.05096519,
    "pddTotal": 0.0,
    "carteiraVp": 81705006.05096519,
    "carteiraVpLiquido": 81705006.05096519,
    "caixa": 0.0,
    "total": 81705006.05096519,
    "lastrosAtivos": 127.0,
    "quantidadeLastrosAtivos": 127.0
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
    "fundingTotal": 81641697.48310892,
    "subordinadaTotal": 63308.567856274545,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 63308.567856274545,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 81641697.48310892,
        "valor": 81641697.48310892
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 63308.567856274545,
        "valor": 63308.567856274545
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 96759852.05,
    "valorPresente": 81705006.05096519,
    "valorPresenteLiquido": 81705006.05096519,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 41.07797677445387,
    "taxaMediaPonderada": 0.020735703458794955,
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
        "value": "R$ 81.705.006,05"
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
        "value": "R$ 63.308,57"
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
        "carteiraVp": 29574124.118468072,
        "valorNominal": 34748833.76,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29574124.118468072,
        "funding": 29523820.03789492,
        "subordinada": 50304.08057315275,
        "puSub": 503.0408057315275,
        "rendimentoSubDia": 0.04361783680374898,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.02215243521614511,
        "prazoMedio": 8.49343641013235,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 32696158.408769883,
        "valorNominal": 40083132.34,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32696158.408769883,
        "funding": 32705733.852823,
        "subordinada": -9575.444053117186,
        "puSub": -95.75444053117185,
        "rendimentoSubDia": 0.8562203829152035,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 19,
        "cedentes": 4,
        "sacados": 11,
        "taxaMedia": 0.02077272486519781,
        "prazoMedio": 89.99007520025944,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 19434723.52372724,
        "valorNominal": 21927885.95,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19434723.52372724,
        "funding": 19412143.592391,
        "subordinada": 22579.93133623898,
        "puSub": 225.7993133623898,
        "rendimentoSubDia": -0.008135072115197373,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 103,
        "cedentes": 2,
        "sacados": 86,
        "taxaMedia": 0.01851755723458539,
        "prazoMedio": 8.37473423118601,
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
        "puAtual": 1007.36386099,
        "valorAtual": 29523820.03789492,
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
        "puAtual": 1006.980937,
        "valorAtual": 32705733.852823,
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
        "puAtual": 1006.697277,
        "valorAtual": 19412143.592391,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "28/09/2026",
        "dataVencimentoIso": "2026-09-28",
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
        "rendimentoSubDia": -0.03798339747694801
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 81641697.48310892,
      "valor": 81641697.48310892,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 63308.567856274545,
      "valor": 63308.567856274545,
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
          "value": "R$ 81.705.006,05",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 81.705.006,05",
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
          "value": "R$ 81.641.697,48",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 63.308,57",
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
      "date": "24/12/2025",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
