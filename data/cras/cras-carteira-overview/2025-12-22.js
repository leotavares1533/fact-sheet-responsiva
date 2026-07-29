window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2025-12-22"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "22/12/2025",
    "dateKey": "2025-12-22",
    "importedAt": "2026-07-29T09:56:17.460285-03:00",
    "revisionId": "20251222-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 81566701.9853412,
    "pddTotal": 0.0,
    "carteiraVp": 81566701.9853412,
    "carteiraVpLiquido": 81566701.9853412,
    "caixa": 0.0,
    "total": 81566701.9853412,
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
    "fundingTotal": 81498395.77491018,
    "subordinadaTotal": 68306.21043103561,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 68306.21043103561,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 81498395.77491018,
        "valor": 81498395.77491018
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 68306.21043103561,
        "valor": 68306.21043103561
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 96759852.05,
    "valorPresente": 81566701.9853412,
    "valorPresenteLiquido": 81566701.9853412,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 41.09015505028167,
    "taxaMediaPonderada": 0.020735157891119665,
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
        "value": "R$ 81.566.701,99"
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
        "value": "R$ 68.306,21"
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
        "carteiraVp": 29515820.35957506,
        "valorNominal": 34748833.76,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29515820.35957506,
        "funding": 29469716.473716002,
        "subordinada": 46103.88585905731,
        "puSub": 461.03885859057306,
        "rendimentoSubDia": 0.2729157453137254,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.022152114599133715,
        "prazoMedio": 8.493214295885823,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 32648154.760634158,
        "valorNominal": 40083132.34,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32648154.760634158,
        "funding": 32648902.455892,
        "subordinada": -747.6952578425407,
        "puSub": -7.476952578425408,
        "rendimentoSubDia": -0.9776907282821399,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 19,
        "cedentes": 4,
        "sacados": 11,
        "taxaMedia": 0.0207720003392109,
        "prazoMedio": 90.00250067960035,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 19402726.865131993,
        "valorNominal": 21927885.95,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19402726.865131993,
        "funding": 19379776.845302172,
        "subordinada": 22950.01982982084,
        "puSub": 229.5001982982084,
        "rendimentoSubDia": 0.23162888396466674,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 103,
        "cedentes": 2,
        "sacados": 86,
        "taxaMedia": 0.018517661458935145,
        "prazoMedio": 8.37452767246741,
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
        "puAtual": 1005.517827,
        "valorAtual": 29469716.473716002,
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
        "puAtual": 1005.231148,
        "valorAtual": 32648902.455892,
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
        "puAtual": 1005.01876499,
        "valorAtual": 19379776.845302172,
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
        "rendimentoSubDia": 2.2011543471498722
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 81498395.77491018,
      "valor": 81498395.77491018,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 68306.21043103561,
      "valor": 68306.21043103561,
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
          "value": "R$ 81.566.701,99",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 81.566.701,99",
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
          "value": "R$ 81.498.395,77",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 68.306,21",
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
      "date": "22/12/2025",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
