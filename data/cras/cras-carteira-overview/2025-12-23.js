window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2025-12-23"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "23/12/2025",
    "dateKey": "2025-12-23",
    "importedAt": "2026-07-29T09:56:18.427648-03:00",
    "revisionId": "20251223-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 81635823.310397,
    "pddTotal": 0.0,
    "carteiraVp": 81635823.310397,
    "carteiraVpLiquido": 81635823.310397,
    "caixa": 0.0,
    "total": 81635823.310397,
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
    "fundingTotal": 81570015.12404114,
    "subordinadaTotal": 65808.18635586649,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 65808.18635586649,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 81570015.12404114,
        "valor": 81570015.12404114
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 65808.18635586649,
        "valor": 65808.18635586649
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 96759852.05,
    "valorPresente": 81635823.310397,
    "valorPresenteLiquido": 81635823.310397,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 41.08406599697232,
    "taxaMediaPonderada": 0.020735430629540662,
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
        "value": "R$ 81.635.823,31"
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
        "value": "R$ 65.808,19"
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
        "carteiraVp": 29544957.488127835,
        "valorNominal": 34748833.76,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29544957.488127835,
        "funding": 29496755.85837492,
        "subordinada": 48201.62975291535,
        "puSub": 482.0162975291535,
        "rendimentoSubDia": 0.04550037062539558,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.02215227491906178,
        "prazoMedio": 8.493325458325932,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 32672147.22508772,
        "valorNominal": 40083132.34,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32672147.22508772,
        "funding": 32677305.795773212,
        "subordinada": -5158.570685490966,
        "puSub": -51.58570685490966,
        "rendimentoSubDia": 5.8992957108968636,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 19,
        "cedentes": 4,
        "sacados": 11,
        "taxaMedia": 0.02077236248792025,
        "prazoMedio": 89.99628922103969,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 19418718.597181443,
        "valorNominal": 21927885.95,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19418718.597181443,
        "funding": 19395953.469893,
        "subordinada": 22765.127288442105,
        "puSub": 227.65127288442105,
        "rendimentoSubDia": -0.008056312924770936,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 103,
        "cedentes": 2,
        "sacados": 86,
        "taxaMedia": 0.018517609345404897,
        "prazoMedio": 8.37463095451976,
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
        "puAtual": 1006.44042099,
        "valorAtual": 29496755.85837492,
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
        "puAtual": 1006.10566199,
        "valorAtual": 32677305.795773212,
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
        "puAtual": 1005.857671,
        "valorAtual": 19395953.469893,
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
        "rendimentoSubDia": -0.036570965647277576
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 81570015.12404114,
      "valor": 81570015.12404114,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 65808.18635586649,
      "valor": 65808.18635586649,
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
          "value": "R$ 81.635.823,31",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 81.635.823,31",
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
          "value": "R$ 81.570.015,12",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 65.808,19",
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
      "date": "23/12/2025",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
