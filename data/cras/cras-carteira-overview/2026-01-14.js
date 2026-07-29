window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-01-14"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "14/01/2026",
    "dateKey": "2026-01-14",
    "importedAt": "2026-07-29T09:56:38.760472-03:00",
    "revisionId": "20260114-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 141594119.99140933,
    "pddTotal": 0.0,
    "carteiraVp": 141594119.99140933,
    "carteiraVpLiquido": 141594119.99140933,
    "caixa": 747367.2490475569,
    "total": 142341487.24045688,
    "lastrosAtivos": 1114.0,
    "quantidadeLastrosAtivos": 1114.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 747367.2490475569
    },
    "total": 747367.2490475569,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 142721231.818687,
    "subordinadaTotal": -379744.57823010907,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": -379744.57823010907,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 142721231.818687,
        "valor": 142721231.818687
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": -379744.57823010907,
        "valor": -379744.57823010907
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 136353868.77,
    "valorPresente": 141594119.99140933,
    "valorPresenteLiquido": 141594119.99140933,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 23.90976821564912,
    "taxaMediaPonderada": 0.020081361591352886,
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
        "value": "R$ 141.594.119,99"
      },
      {
        "label": "Caixa total",
        "value": "R$ 747.367,25"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ -379.744,58"
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
        "carteiraVp": 39648871.27317781,
        "valorNominal": 44854982.32,
        "caixa": 459370.49000000005,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40108241.76317781,
        "funding": 40636135.690587,
        "subordinada": -527893.927409187,
        "puSub": -5278.939274091869,
        "rendimentoSubDia": -8.660590390162103,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 327,
        "cedentes": 26,
        "sacados": 109,
        "taxaMedia": 0.021459296046308758,
        "prazoMedio": 6.310370075174662,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 40205341.702300824,
        "valorNominal": 47513741.06,
        "caixa": 39139.23000000001,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40244480.93230082,
        "funding": 40256463.527927995,
        "subordinada": -11982.595627173781,
        "puSub": -119.82595627173781,
        "rendimentoSubDia": -1.1367259082346794,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 284,
        "cedentes": 19,
        "sacados": 130,
        "taxaMedia": 0.020531964879718794,
        "prazoMedio": 74.21264675858362,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 40094674.653847,
        "valorNominal": 43985145.39,
        "caixa": 248857.5290475569,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40343532.18289456,
        "funding": 40432273.4395,
        "subordinada": -88741.25660543889,
        "puSub": -887.4125660543889,
        "rendimentoSubDia": -3.298271937910999,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 501,
        "cedentes": 21,
        "sacados": 263,
        "taxaMedia": 0.018855572728857392,
        "prazoMedio": 3.7795223092339425,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 11530637.800362343,
        "valorNominal": 0.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 11530637.800362343,
        "funding": 11404663.137528,
        "subordinada": 125974.66283434257,
        "puSub": 1259.7466283434258,
        "rendimentoSubDia": 0.011146292671849745,
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
        "carteiraVp": 10114594.56172135,
        "valorNominal": 0.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10114594.56172135,
        "funding": 9991696.023144001,
        "subordinada": 122898.538577348,
        "puSub": 1228.98538577348,
        "rendimentoSubDia": 0.010097123664792651,
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
        "puAtual": 1019.445967,
        "valorAtual": 40636135.690587,
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
        "puAtual": 1018.429051,
        "valorAtual": 40256463.527927995,
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
        "puAtual": 1017.67615,
        "valorAtual": 40432273.4395,
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
        "puAtual": 1009.26222456,
        "valorAtual": 11404663.137528,
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
        "puAtual": 1009.26222456,
        "valorAtual": 9991696.023144001,
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
        "rendimentoSubDia": -1.8602832793168913
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 142721231.818687,
      "valor": 142721231.818687,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": -379744.57823010907,
      "valor": -379744.57823010907,
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
          "value": "R$ 142.341.487,24",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 141.594.119,99",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 747.367,25",
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
          "value": "R$ 142.721.231,82",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ -379.744,58",
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
      "date": "14/01/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
