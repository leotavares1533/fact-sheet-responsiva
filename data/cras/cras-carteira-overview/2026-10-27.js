window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-10-27"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cras-carteira-overview",
    "dateKey": "2026-10-27",
    "reportDate": "27/10/2026",
    "revisionId": "20261027-documentos-20261030-3a880273-overview",
    "importedAt": "2026-10-29T14:03:14.249037-03:00",
    "fundingCashOnly": true,
    "crasCarteiraBatch": true,
    "businessCalendar": {
      "name": "ANBIMA feriados nacionais",
      "holidayCount": 1263,
      "holidays": [
        "2025-12-25",
        "2026-01-01",
        "2026-02-16",
        "2026-02-17",
        "2026-04-03",
        "2026-04-21",
        "2026-05-01",
        "2026-06-04",
        "2026-09-07",
        "2026-10-12",
        "2026-11-02",
        "2026-11-15",
        "2026-11-20",
        "2026-12-25"
      ]
    },
    "previousPortfolioDateKey": "2026-07-27",
    "fundingCashImport": {
      "sourceFile": "fundings e caixa cras carteiras.xlsx",
      "sourceHash": "a1d4fdf5a5f06e45373d75eeb3e33ffb3c1d4e841a18d2a33108ab1d5f076964",
      "sheetCash": "Saldo Caixa",
      "documentValidationRequired": true
    },
    "portfolioOverview": true,
    "documentReview": {
      "date": "2026-10-30",
      "cancelledPaymentDate": "2026-10-07"
    }
  },
  "cra": {
    "id": "cras-carteira-overview",
    "name": "CRAs Carteira - Visao geral"
  },
  "ativo": {
    "total": null,
    "caixa": 21999553.65
  },
  "caixa": {
    "total": 21999553.65
  },
  "passivo": {
    "fundingTotal": 574055067.8442929,
    "cotas": []
  },
  "portfolioOverview": {
    "rows": [
      {
        "operacao": "CRA Carteira 44",
        "craId": "cra-carteira-44",
        "serie": "SR1",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B41",
        "quantidadeIntegralizada": 39900,
        "puAtual": 295.69633984,
        "valorAtual": 11798283.959616,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "29/12/2026",
        "dataVencimentoIso": "2026-12-29",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.26,
            "spreadAa": null,
            "maturity": "2026-12-29",
            "firstIntegration": "2025-12-12"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 45",
        "craId": "cra-carteira-45",
        "serie": "SR1",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B43",
        "quantidadeIntegralizada": 39900,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.253,
            "spreadAa": null,
            "maturity": "2027-03-30",
            "firstIntegration": "2025-12-12"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 46",
        "craId": "cra-carteira-46",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B47",
        "quantidadeIntegralizada": 39900,
        "puAtual": 3.1538410199999998,
        "valorAtual": 125838.256698,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "28/09/2026",
        "dataVencimentoIso": "2026-09-28",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.234,
            "spreadAa": null,
            "maturity": "2027-03-30",
            "firstIntegration": "2025-12-12"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado",
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 47",
        "craId": "cra-carteira-47",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B49",
        "quantidadeIntegralizada": 39900,
        "puAtual": 406.7491104,
        "valorAtual": 16229289.50496,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.075,
            "maturity": "2028-12-29",
            "firstIntegration": "2025-12-29"
          },
          "checks": []
        }
      },
      {
        "operacao": "CRA Carteira 48",
        "craId": "cra-carteira-48",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B9U",
        "quantidadeIntegralizada": 39900,
        "puAtual": 282.96879779,
        "valorAtual": 11290455.031821,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.075,
            "maturity": "2028-12-29",
            "firstIntegration": "2025-12-29"
          },
          "checks": []
        }
      },
      {
        "operacao": "CRA Carteira 49",
        "craId": "cra-carteira-49",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B9X",
        "quantidadeIntegralizada": 39900,
        "puAtual": 10.45200625,
        "valorAtual": 417035.049375,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.23,
            "spreadAa": null,
            "maturity": "2028-11-30",
            "firstIntegration": "2026-01-15"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 50",
        "craId": "cra-carteira-50",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B9Z",
        "quantidadeIntegralizada": 39900,
        "puAtual": 262.10957872,
        "valorAtual": 10458172.190928001,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.245,
            "spreadAa": null,
            "maturity": "2027-03-30",
            "firstIntegration": "2026-02-02"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 51",
        "craId": "cra-carteira-51",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000GP",
        "quantidadeIntegralizada": 25000,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2026",
        "dataVencimentoIso": "2026-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2026-11-30",
            "firstIntegration": "2026-02-12"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000MH",
        "quantidadeIntegralizada": 9000,
        "puAtual": 730.7769329099999,
        "valorAtual": 6576992.396189999,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-02-12"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000MI",
        "quantidadeIntegralizada": 4189,
        "puAtual": 1149.60816,
        "valorAtual": 4815708.58224,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2028-11-30",
            "firstIntegration": "2026-02-12"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 52",
        "craId": "cra-carteira-52",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000B5",
        "quantidadeIntegralizada": 21845,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "23,50% a.a.",
        "dataVencimento": "30/11/2029",
        "dataVencimentoIso": "2029-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.235,
            "spreadAa": null,
            "maturity": "2028-11-30",
            "firstIntegration": "2026-02-04"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 53",
        "craId": "cra-carteira-53",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000B7",
        "quantidadeIntegralizada": 39900,
        "puAtual": 282.00401966,
        "valorAtual": 11251960.384434,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.24,
            "spreadAa": null,
            "maturity": "2027-03-31",
            "firstIntegration": "2026-02-09"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 54",
        "craId": "cra-carteira-54",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000B9",
        "quantidadeIntegralizada": 39605,
        "puAtual": 282.66732484,
        "valorAtual": 11195039.4002882,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.24,
            "spreadAa": null,
            "maturity": "2027-03-31",
            "firstIntegration": "2026-02-09"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado",
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 55",
        "craId": "cra-carteira-55",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000M9",
        "quantidadeIntegralizada": 13300,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "01/03/2027",
        "dataVencimentoIso": "2027-03-01",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.24,
            "spreadAa": null,
            "maturity": "2027-03-01",
            "firstIntegration": "2026-02-09"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000MA",
        "quantidadeIntegralizada": 13300,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "15/03/2027",
        "dataVencimentoIso": "2027-03-15",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.24,
            "spreadAa": null,
            "maturity": "2027-03-15",
            "firstIntegration": "2026-02-09"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000MB",
        "quantidadeIntegralizada": 13300,
        "puAtual": 774.30274801,
        "valorAtual": 10298226.548533,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.24,
            "spreadAa": null,
            "maturity": "2027-03-31",
            "firstIntegration": "2026-02-09"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 57",
        "craId": "cra-carteira-57",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000RY",
        "quantidadeIntegralizada": 20000,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/09/2026",
        "dataVencimentoIso": "2026-09-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2026-09-30",
            "firstIntegration": "2026-04-01"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000RZ",
        "quantidadeIntegralizada": 20000,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-03-31",
            "firstIntegration": "2026-04-01"
          },
          "checks": [
            "taxa_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000S0",
        "quantidadeIntegralizada": 0,
        "puAtual": 0,
        "valorAtual": 0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Cadastro anterior",
        "documentValidation": null
      },
      {
        "operacao": "CRA Carteira 58",
        "craId": "cra-carteira-58",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000S2",
        "quantidadeIntegralizada": 15595,
        "puAtual": 4.81968365,
        "valorAtual": 75162.96652175,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2026",
        "dataVencimentoIso": "2026-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-04-24"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000S3",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1046.97314999,
        "valorAtual": 20939462.999799997,
        "taxa": "22,50% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-08-05"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000S4",
        "quantidadeIntegralizada": 9400.0,
        "puAtual": 1046.97314999,
        "valorAtual": 9841547.609906,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-08-05"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 59",
        "craId": "cra-carteira-59",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000S6",
        "quantidadeIntegralizada": 20000,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.065,
            "maturity": "2030-12-29",
            "firstIntegration": "2026-06-11"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000S7",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 867.82372539,
        "valorAtual": 17356474.5078,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.065,
            "maturity": "2030-12-29",
            "firstIntegration": "2026-06-11"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000S8",
        "quantidadeIntegralizada": 13000.0,
        "puAtual": 1076.48535,
        "valorAtual": 13994309.549999999,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.065,
            "maturity": "2030-12-29",
            "firstIntegration": "2026-06-11"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600209",
        "quantidadeIntegralizada": 10440,
        "puAtual": 6.5e-07,
        "valorAtual": 0.006786,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2026",
        "dataVencimentoIso": "2026-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-04-08"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 60",
        "craId": "cra-carteira-60",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020A",
        "quantidadeIntegralizada": 6050,
        "puAtual": 1114.84826,
        "valorAtual": 6744831.973,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2028-06-30",
            "firstIntegration": "2026-04-14"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 61",
        "craId": "cra-carteira-61",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260020C",
        "quantidadeIntegralizada": 20000,
        "puAtual": 1097.03588999,
        "valorAtual": 21940717.7998,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/05/2027",
        "dataVencimentoIso": "2027-05-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-05-14"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 61",
        "craId": "cra-carteira-61",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020D",
        "quantidadeIntegralizada": 19900,
        "puAtual": 1097.03588999,
        "valorAtual": 21831014.210800998,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "prefixado_252_ts",
            "annualRate": 0.225,
            "spreadAa": null,
            "maturity": "2027-11-30",
            "firstIntegration": "2026-05-14"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 62",
        "craId": "cra-carteira-62",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260020F",
        "quantidadeIntegralizada": 20000,
        "puAtual": 973.11578502,
        "valorAtual": 19462315.7004,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "30/04/2030",
        "dataVencimentoIso": "2030-04-30",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.075,
            "maturity": "2026-11-30",
            "firstIntegration": "2026-05-28"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 62",
        "craId": "cra-carteira-62",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020G",
        "quantidadeIntegralizada": 17537.0,
        "puAtual": 1083.87776999,
        "valorAtual": 19007964.45231463,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Cadastro anterior",
        "documentValidation": {
          "status": "validado_cadastro_anterior",
          "fields": [],
          "sourceTerms": {
            "method": "di_spread_252",
            "annualRate": null,
            "spreadAa": 0.075,
            "maturity": "2026-11-30",
            "firstIntegration": "2026-06-05"
          },
          "checks": [
            "vencimento_planilha_diverge_cadastro_validado"
          ]
        }
      },
      {
        "operacao": "CRA Carteira 63",
        "craId": "cra-carteira-63",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260020I",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1048.032001,
        "valorAtual": 20960640.02,
        "taxa": "CDI + 7.00% a.a.",
        "dataVencimento": "22/11/2027",
        "dataVencimentoIso": "2027-11-22",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
            "Nao pagamento de 07/08 confirmado por Leonardo. Solicitar retificacao da memoria AF."
          ],
          "sources": [
            {
              "id": "63-06",
              "file": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "name": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "pages": [
                1,
                4,
                5,
                6,
                7,
                8,
                9,
                14
              ],
              "sha256": "6021e4246fa59fc9bb76c790e7551a2821150a9db992d8fb3302186028b7c8e8"
            },
            {
              "id": "63-06",
              "file": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "name": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "pages": [
                1,
                4
              ],
              "sha256": "6021e4246fa59fc9bb76c790e7551a2821150a9db992d8fb3302186028b7c8e8"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 63",
        "craId": "cra-carteira-63",
        "serie": "Mezanino",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020J",
        "quantidadeIntegralizada": 19440.0,
        "puAtual": 1018.013793,
        "valorAtual": 19790188.13592,
        "taxa": "CDI + 7.00% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "63-06",
              "file": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "name": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "pages": [
                1,
                4,
                5,
                6,
                7,
                8,
                9,
                14
              ],
              "sha256": "6021e4246fa59fc9bb76c790e7551a2821150a9db992d8fb3302186028b7c8e8"
            },
            {
              "id": "63-06",
              "file": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "name": "CRA 63 - 1º adit. Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "pages": [
                1,
                4
              ],
              "sha256": "6021e4246fa59fc9bb76c790e7551a2821150a9db992d8fb3302186028b7c8e8"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 67",
        "craId": "cra-carteira-67",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004H5",
        "quantidadeIntegralizada": 17019.0,
        "puAtual": 1032.553032,
        "valorAtual": 17573020.051608,
        "taxa": "CDI + 4.00% a.a.",
        "dataVencimento": "30/07/2027",
        "dataVencimentoIso": "2027-07-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco"
          ],
          "sources": [
            {
              "id": "67-01",
              "file": "CRA 67ª - 1º Aditamento ao TS 17 08 2026.pdf",
              "name": "CRA 67ª - 1º Aditamento ao TS 17 08 2026.pdf",
              "pages": [
                1,
                3,
                4,
                5,
                6,
                7
              ],
              "sha256": "ad6c859c10f0fcf111671fe34ae4134732c5202a703246fa218134b434e6a194"
            },
            {
              "id": "67-06",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_67_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_67_Emissão_(assinado).pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "4eab1a5c63b4d87ed08c679c3582b0f1f68d63bb9db813e78198227b18245db5"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 67",
        "craId": "cra-carteira-67",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004H6",
        "quantidadeIntegralizada": 9199.0,
        "puAtual": 1032.553032,
        "valorAtual": 9498455.341368001,
        "taxa": "CDI + 4.00% a.a.",
        "dataVencimento": "10/08/2027",
        "dataVencimentoIso": "2027-08-10",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco"
          ],
          "sources": [
            {
              "id": "67-01",
              "file": "CRA 67ª - 1º Aditamento ao TS 17 08 2026.pdf",
              "name": "CRA 67ª - 1º Aditamento ao TS 17 08 2026.pdf",
              "pages": [
                1,
                3,
                4,
                5,
                6,
                7
              ],
              "sha256": "ad6c859c10f0fcf111671fe34ae4134732c5202a703246fa218134b434e6a194"
            },
            {
              "id": "67-06",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_67_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_67_Emissão_(assinado).pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "4eab1a5c63b4d87ed08c679c3582b0f1f68d63bb9db813e78198227b18245db5"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 68",
        "craId": "cra-carteira-68",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004H8",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1012.796998,
        "valorAtual": 20255939.96,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/07/2027",
        "dataVencimentoIso": "2027-07-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "68-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "257993f4951d2c84d62508f9a6efa7b44287fc6fd9214ffed84f7fbc184c23ca"
            },
            {
              "id": "68-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "257993f4951d2c84d62508f9a6efa7b44287fc6fd9214ffed84f7fbc184c23ca"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 68",
        "craId": "cra-carteira-68",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004H9",
        "quantidadeIntegralizada": 17709.0,
        "puAtual": 1012.796998,
        "valorAtual": 17935622.037582,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "10/08/2027",
        "dataVencimentoIso": "2027-08-10",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "68-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "257993f4951d2c84d62508f9a6efa7b44287fc6fd9214ffed84f7fbc184c23ca"
            },
            {
              "id": "68-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_68ª_Emissão.pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "257993f4951d2c84d62508f9a6efa7b44287fc6fd9214ffed84f7fbc184c23ca"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 69",
        "craId": "cra-carteira-69",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004HB",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1012.796998,
        "valorAtual": 20255939.96,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/07/2027",
        "dataVencimentoIso": "2027-07-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "69-04",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "5d6085cbdd2edaa6f39a88539afc3ed28e8d614abbb976bfe197f4305c511180"
            },
            {
              "id": "69-04",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "5d6085cbdd2edaa6f39a88539afc3ed28e8d614abbb976bfe197f4305c511180"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 69",
        "craId": "cra-carteira-69",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004HC",
        "quantidadeIntegralizada": 18537.0,
        "puAtual": 1012.796998,
        "valorAtual": 18774217.951926,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "10/08/2027",
        "dataVencimentoIso": "2027-08-10",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "69-04",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "5d6085cbdd2edaa6f39a88539afc3ed28e8d614abbb976bfe197f4305c511180"
            },
            {
              "id": "69-04",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_69ª_Emissão_(assinado).pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "5d6085cbdd2edaa6f39a88539afc3ed28e8d614abbb976bfe197f4305c511180"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 70",
        "craId": "cra-carteira-70",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004HE",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1012.796998,
        "valorAtual": 20255939.96,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/07/2027",
        "dataVencimentoIso": "2027-07-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "70-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "3ee3d61797c1e6e776e40f538e16e9dac7de5fd3a1c651f98c0b214f278eda01"
            },
            {
              "id": "70-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "3ee3d61797c1e6e776e40f538e16e9dac7de5fd3a1c651f98c0b214f278eda01"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 70",
        "craId": "cra-carteira-70",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004HF",
        "quantidadeIntegralizada": 14623.0,
        "puAtual": 1012.796998,
        "valorAtual": 14810130.501754,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "10/08/2027",
        "dataVencimentoIso": "2027-08-10",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "70-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "3ee3d61797c1e6e776e40f538e16e9dac7de5fd3a1c651f98c0b214f278eda01"
            },
            {
              "id": "70-02",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_70ª_Emissão_(FAS_07.07.2026).pdf",
              "pages": [
                7,
                20,
                24,
                31,
                38,
                44,
                48,
                109,
                110
              ],
              "sha256": "3ee3d61797c1e6e776e40f538e16e9dac7de5fd3a1c651f98c0b214f278eda01"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 71",
        "craId": "cra-carteira-71",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004HH",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1013.602223,
        "valorAtual": 20272044.46,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/05/2031",
        "dataVencimentoIso": "2031-05-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "71-03",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_71ª_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_71ª_Emissão_(assinado).pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "0e3ac8c41a2f8be81bfe7e456d30dd4fa71b7b8666d656aa99f566cbb33e2eb9"
            },
            {
              "id": "71-01",
              "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
              "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
              "pages": [
                1,
                4,
                10
              ],
              "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 71",
        "craId": "cra-carteira-71",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004HI",
        "quantidadeIntegralizada": 280.0,
        "puAtual": 1013.602223,
        "valorAtual": 283808.62244,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/05/2031",
        "dataVencimentoIso": "2031-05-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
          ],
          "sources": [
            {
              "id": "71-03",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_71ª_Emissão_(assinado).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_71ª_Emissão_(assinado).pdf",
              "pages": [
                6,
                7,
                13,
                14,
                21,
                22,
                25,
                26,
                27,
                28,
                29,
                30,
                33,
                34,
                35,
                39,
                40,
                42,
                43,
                44,
                48,
                49,
                52,
                53,
                54,
                55,
                56,
                57,
                58,
                68,
                79,
                88,
                89,
                92,
                107,
                108,
                109
              ],
              "sha256": "0e3ac8c41a2f8be81bfe7e456d30dd4fa71b7b8666d656aa99f566cbb33e2eb9"
            },
            {
              "id": "71-01",
              "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
              "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
              "pages": [
                1,
                4,
                10
              ],
              "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 72",
        "craId": "cra-carteira-72",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260058Y",
        "quantidadeIntegralizada": 33486.0,
        "puAtual": 1005.39400412,
        "valorAtual": 33666623.62196232,
        "taxa": "CDI + 4.00% a.a.",
        "dataVencimento": "30/07/2027",
        "dataVencimentoIso": "2027-07-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
            "Pagamento e quantidade do evento conferidos. Conciliar rateio AF e fatores de CDI posteriores."
          ],
          "sources": [
            {
              "id": "72-01",
              "file": "CRA 72ª - 1º Aditamento ao Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "name": "CRA 72ª - 1º Aditamento ao Termo de Securitização - 30 07 2026 (v_assinada).pdf",
              "pages": [
                1,
                2,
                3,
                4,
                5
              ],
              "sha256": "83cf8953e742a2fcab9ce13a208c9e543c785c17a12e4261a71e28a85e1add73"
            },
            {
              "id": "72-04",
              "file": "CRA_Ceres_Carteira_-_Termo_de_Securitização_-_72ª_Emissão.pdf",
              "name": "CRA_Ceres_Carteira_-_Termo_de_Securitização_-_72ª_Emissão.pdf",
              "pages": [
                8,
                19,
                23,
                28,
                30,
                35,
                38,
                42,
                65
              ],
              "sha256": "0f6eef14e74b71e87303afab5246f1939e1f0d9468118f1796a789a615c76b9a"
            }
          ],
          "calculationStatus": "recalculo_evento_confirmado",
          "approvedPayment": {
            "cra": "cra-carteira-72",
            "sourceClass": "SR1",
            "date": "2026-09-18",
            "amount": 1170000,
            "principalBefore": 1000,
            "interestPuApproved": 23.141531,
            "quantityAtEvent": 33486,
            "evidence": "Imagem CRA0260058Y enviada por Leonardo",
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30"
          }
        }
      },
      {
        "operacao": "CRA Carteira 73",
        "craId": "cra-carteira-73",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600590",
        "quantidadeIntegralizada": 35900.0,
        "puAtual": 1030.76123247,
        "valorAtual": 37004328.245673,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/09/2027",
        "dataVencimentoIso": "2027-09-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
            "Pagamento de R$ 263.000 em 18/09 confirmado. AF omisso. Falta somente formalizar tratamento dos juros remanescentes."
          ],
          "sources": [
            {
              "id": "73-02",
              "file": "CRA_Ceres_Carteira_-_Termo_de_Securitização_-_73ª_Emissão_(V._Assinatura)(2556621.1).pdf",
              "name": "CRA_Ceres_Carteira_-_Termo_de_Securitização_-_73ª_Emissão_(V._Assinatura)(2556621.1).pdf",
              "pages": [
                6,
                7,
                8,
                9,
                15,
                20,
                21,
                24,
                25,
                26,
                27,
                28,
                29,
                31,
                32,
                33,
                37,
                38,
                40,
                41,
                42,
                46,
                48,
                50,
                51,
                52,
                53,
                54,
                56,
                57,
                67,
                68,
                79,
                90,
                94
              ],
              "sha256": "f905d5c6d1adfdc5ecf07cc035b96dfdc95f9e1e10a28e46721408b5dc2e8d21"
            },
            {
              "id": "73-02",
              "file": "CRA_Ceres_Carteira_-_Termo_de_Securitização_-_73ª_Emissão_(V._Assinatura)(2556621.1).pdf",
              "name": "CRA_Ceres_Carteira_-_Termo_de_Securitização_-_73ª_Emissão_(V._Assinatura)(2556621.1).pdf",
              "pages": [
                8,
                14,
                19,
                23,
                28,
                30,
                35,
                38,
                42,
                65
              ],
              "sha256": "f905d5c6d1adfdc5ecf07cc035b96dfdc95f9e1e10a28e46721408b5dc2e8d21"
            }
          ],
          "calculationStatus": "preservado_pendente_evento_financeiro"
        }
      },
      {
        "operacao": "CRA Carteira 74",
        "craId": "cra-carteira-74",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600592",
        "quantidadeIntegralizada": 14210.0,
        "puAtual": 969.5557313,
        "valorAtual": 13777386.941773001,
        "taxa": "CDI + 4.00% a.a.",
        "dataVencimento": "20/12/2027",
        "dataVencimentoIso": "2027-12-20",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
            "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
            "Pagamento e quantidade do evento conferidos. Conciliar rateio AF e fatores de CDI posteriores."
          ],
          "sources": [
            {
              "id": "74-01",
              "file": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
              "name": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
              "pages": [
                1,
                4,
                5,
                6,
                7,
                13
              ],
              "sha256": "7bcf0081a5d37997e25514383a9e0c26c486e78131944939f1fa1c028fda15bc"
            },
            {
              "id": "74-01",
              "file": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
              "name": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
              "pages": [
                1,
                4,
                6
              ],
              "sha256": "7bcf0081a5d37997e25514383a9e0c26c486e78131944939f1fa1c028fda15bc"
            }
          ],
          "calculationStatus": "recalculo_evento_confirmado",
          "approvedPayment": {
            "cra": "cra-carteira-74",
            "sourceClass": "SR1",
            "date": "2026-09-18",
            "amount": 750000,
            "principalBefore": 1000,
            "interestPuApproved": 18.997252,
            "quantityAtEvent": 11360,
            "evidence": "Imagem CRA02600592; Leonardo confirmou 2850 titulos integralizados somente em 26/10. Usar 11360 em 18/09.",
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30"
          }
        }
      },
      {
        "operacao": "CRA Carteira 75",
        "craId": "cra-carteira-75",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600594",
        "quantidadeIntegralizada": 37499.0,
        "puAtual": 1018.081746,
        "valorAtual": 38177047.393254,
        "taxa": "CDI + 4.00% a.a.",
        "dataVencimento": "30/09/2027",
        "dataVencimentoIso": "2027-09-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco"
          ],
          "sources": [
            {
              "id": "75-01",
              "file": "CRA 75 - 1º adit. Termo de Securitização - 03 09 2026.pdf",
              "name": "CRA 75 - 1º adit. Termo de Securitização - 03 09 2026.pdf",
              "pages": [
                1,
                3,
                4,
                5,
                6,
                7
              ],
              "sha256": "de2ad8c0481beadbf902d6e4050d6b8d7f86611eb418d44a28bf06a1aa3a363a"
            },
            {
              "id": "75-07",
              "file": "CRA_Ceres_-_Termo_de_Securitização_-_75ª_Emissão_(V._Assinatura)(2556619.1).pdf",
              "name": "CRA_Ceres_-_Termo_de_Securitização_-_75ª_Emissão_(V._Assinatura)(2556619.1).pdf",
              "pages": [
                7,
                20,
                23,
                30,
                37,
                44,
                47,
                108,
                109
              ],
              "sha256": "747ef9d8936abf549f49b2c886c108e19e870c6e0759306eaa51158270ee9f89"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      },
      {
        "operacao": "CRA Carteira 80",
        "craId": "cra-carteira-80",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600799",
        "quantidadeIntegralizada": 5105.0,
        "puAtual": 1001.553684,
        "valorAtual": 5112931.55682,
        "taxa": "CDI + 7.00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Conciliacao pendente",
        "documentValidation": {
          "status": "cadastro_documentado_conciliacao_financeira_pendente",
          "reviewDate": "2026-10-30",
          "fieldsValidated": [
            "codigo_if",
            "classe_juridica",
            "taxa",
            "vencimento",
            "metodo",
            "defasagem_di"
          ],
          "fields": [
            "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco"
          ],
          "sources": [
            {
              "id": "80-02",
              "file": "CRA_Ceres_Carteira__-_80ª_Emissão_-_Termo_de_Securitização_(v._assinatura).pdf",
              "name": "CRA_Ceres_Carteira__-_80ª_Emissão_-_Termo_de_Securitização_(v._assinatura).pdf",
              "pages": [
                8,
                9,
                17,
                18,
                26,
                27,
                30,
                31,
                32,
                33,
                34,
                35,
                39,
                41,
                45,
                46,
                48,
                50,
                51,
                55,
                56,
                59,
                60,
                61,
                62,
                63,
                64,
                65,
                66,
                77,
                88,
                100,
                104,
                119,
                120
              ],
              "sha256": "0a348efdb248fa959cb47501dfbb563fbef82bfe1085ed01291d85c50275f826"
            },
            {
              "id": "80-02",
              "file": "CRA_Ceres_Carteira__-_80ª_Emissão_-_Termo_de_Securitização_(v._assinatura).pdf",
              "name": "CRA_Ceres_Carteira__-_80ª_Emissão_-_Termo_de_Securitização_(v._assinatura).pdf",
              "pages": [
                9,
                17,
                25,
                29,
                34,
                36,
                38,
                44,
                46,
                51,
                75,
                94,
                121,
                132
              ],
              "sha256": "0a348efdb248fa959cb47501dfbb563fbef82bfe1085ed01291d85c50275f826"
            }
          ],
          "calculationStatus": "recalculo_documentado",
          "firstPeriodControlDecision": {
            "additionalBusinessDays": 0,
            "confirmedBy": "Leonardo",
            "confirmationDate": "2026-10-30",
            "status": "convencao_operacional_aprovada_com_ressalva_contratual",
            "instruction": "Pode seguir sem esse acrescimo de dia.",
            "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
          },
          "contractualReservation": "PU principal sem DU adicional por orientacao de Leonardo em 30/10/2026; redacao contratual preservada para validacao juridica."
        }
      }
    ]
  },
  "fundingCashVehicles": [
    {
      "craId": "cra-carteira-44",
      "name": "CRA Carteira 44",
      "funding": 11798283.959616,
      "cash": 7923.929999999993
    },
    {
      "craId": "cra-carteira-45",
      "name": "CRA Carteira 45",
      "funding": 0.0,
      "cash": 191481.59999999998
    },
    {
      "craId": "cra-carteira-46",
      "name": "CRA Carteira 46",
      "funding": 125838.256698,
      "cash": 210044.73
    },
    {
      "craId": "cra-carteira-47",
      "name": "CRA Carteira 47",
      "funding": 16229289.50496,
      "cash": 2993566.27
    },
    {
      "craId": "cra-carteira-48",
      "name": "CRA Carteira 48",
      "funding": 11290455.031821,
      "cash": 38550.92999999999
    },
    {
      "craId": "cra-carteira-49",
      "name": "CRA Carteira 49",
      "funding": 417035.049375,
      "cash": 272830.30000000005
    },
    {
      "craId": "cra-carteira-50",
      "name": "CRA Carteira 50",
      "funding": 10458172.190928001,
      "cash": 10750.01000000001
    },
    {
      "craId": "cra-carteira-51",
      "name": "CRA Carteira 51",
      "funding": 11392700.97843,
      "cash": 5583.470000000001
    },
    {
      "craId": "cra-carteira-52",
      "name": "CRA Carteira 52",
      "funding": 0.0,
      "cash": 59805.250000000015
    },
    {
      "craId": "cra-carteira-53",
      "name": "CRA Carteira 53",
      "funding": 11251960.384434,
      "cash": 652571.8300000001
    },
    {
      "craId": "cra-carteira-54",
      "name": "CRA Carteira 54",
      "funding": 11195039.4002882,
      "cash": 529688.8300000001
    },
    {
      "craId": "cra-carteira-55",
      "name": "CRA Carteira 55",
      "funding": 10298226.548533,
      "cash": 245722.30000000002
    },
    {
      "craId": "cra-carteira-56",
      "name": "CRA Carteira 56",
      "funding": null,
      "cash": 1243041.8399999999
    },
    {
      "craId": "cra-carteira-57",
      "name": "CRA Carteira 57",
      "funding": 0.0,
      "cash": 163479.87
    },
    {
      "craId": "cra-carteira-58",
      "name": "CRA Carteira 58",
      "funding": 30856173.576227747,
      "cash": 1399.699999999997
    },
    {
      "craId": "cra-carteira-59",
      "name": "CRA Carteira 59",
      "funding": 31350784.057800002,
      "cash": 14028721.16
    },
    {
      "craId": "cra-carteira-60",
      "name": "CRA Carteira 60",
      "funding": 6744831.979786,
      "cash": 210301.66999999998
    },
    {
      "craId": "cra-carteira-61",
      "name": "CRA Carteira 61",
      "funding": 43771732.010601,
      "cash": 131618.26
    },
    {
      "craId": "cra-carteira-62",
      "name": "CRA Carteira 62",
      "funding": 38470280.152714625,
      "cash": 501012.07
    },
    {
      "craId": "cra-carteira-63",
      "name": "CRA Carteira 63",
      "funding": 40750828.15592,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-67",
      "name": "CRA Carteira 67",
      "funding": 27071475.392976,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-68",
      "name": "CRA Carteira 68",
      "funding": 38191561.997582,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-69",
      "name": "CRA Carteira 69",
      "funding": 39030157.911926,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-70",
      "name": "CRA Carteira 70",
      "funding": 35066070.461754,
      "cash": 1887.83
    },
    {
      "craId": "cra-carteira-71",
      "name": "CRA Carteira 71",
      "funding": 20555853.08244,
      "cash": 41943.22
    },
    {
      "craId": "cra-carteira-72",
      "name": "CRA Carteira 72",
      "funding": 33666623.62196232,
      "cash": 6654.120000000006
    },
    {
      "craId": "cra-carteira-73",
      "name": "CRA Carteira 73",
      "funding": 37004328.245673,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-74",
      "name": "CRA Carteira 74",
      "funding": 13777386.941773001,
      "cash": 10250.010000000002
    },
    {
      "craId": "cra-carteira-75",
      "name": "CRA Carteira 75",
      "funding": 38177047.393254,
      "cash": 440724.44999999995
    },
    {
      "craId": "cra-carteira-80",
      "name": "CRA Carteira 80",
      "funding": 5112931.55682,
      "cash": null
    }
  ],
  "fundingCashIssues": [
    {
      "cra": "cra-carteira-63",
      "class": null,
      "date": "2026-10-27",
      "type": "caixa_nao_concilia"
    },
    {
      "cra": "cra-carteira-67",
      "class": null,
      "date": "2026-10-27",
      "type": "caixa_nao_concilia"
    },
    {
      "cra": "cra-carteira-69",
      "class": null,
      "date": "2026-10-27",
      "type": "caixa_nao_concilia"
    },
    {
      "cra": "cra-carteira-68",
      "class": null,
      "date": "2026-10-27",
      "type": "caixa_nao_concilia"
    },
    {
      "cra": "cra-carteira-73",
      "class": null,
      "date": "2026-10-27",
      "type": "caixa_nao_concilia"
    },
    {
      "cra": "cra-carteira-45",
      "class": "SR1",
      "date": "2026-08-07",
      "type": "pagamento_maior_saldo_calculado"
    },
    {
      "cra": "cra-carteira-46",
      "class": "SR1",
      "date": "2026-09-04",
      "type": "ajuste_generico_sem_detalhamento"
    },
    {
      "cra": "cra-carteira-46",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_apos_vencimento_cadastrado"
    },
    {
      "cra": "cra-carteira-51",
      "class": "MEZB",
      "date": "2026-03-20",
      "type": "evento_anterior_base_validada_pendente"
    },
    {
      "cra": "cra-carteira-53",
      "class": "SR1",
      "date": "2026-09-04",
      "type": "ajuste_generico_sem_detalhamento"
    },
    {
      "cra": "cra-carteira-54",
      "class": "SR1",
      "date": "2026-09-04",
      "type": "ajuste_generico_sem_detalhamento"
    },
    {
      "cra": "cra-carteira-55",
      "class": "SR1",
      "date": "2026-09-04",
      "type": "ajuste_generico_sem_detalhamento"
    },
    {
      "cra": "cra-carteira-55",
      "class": "MEZA",
      "date": "2026-07-30",
      "type": "pagamento_maior_saldo_calculado"
    },
    {
      "cra": "cra-carteira-55",
      "class": "MEZB",
      "date": "2026-03-17",
      "type": "evento_anterior_base_validada_pendente"
    },
    {
      "cra": "cra-carteira-56",
      "class": null,
      "date": null,
      "type": "funding_nao_informado"
    },
    {
      "cra": "cra-carteira-57",
      "class": "SR1",
      "date": "2026-07-30",
      "type": "pagamento_maior_saldo_calculado"
    },
    {
      "cra": "cra-carteira-57",
      "class": "MEZA",
      "date": "2026-09-15",
      "type": "pagamento_maior_saldo_calculado"
    },
    {
      "cra": "cra-carteira-57",
      "class": "MEZA",
      "date": "2026-05-08",
      "type": "evento_anterior_base_validada_pendente"
    },
    {
      "cra": "cra-carteira-60",
      "class": "MEZA",
      "date": "2026-05-20",
      "type": "evento_anterior_base_validada_pendente"
    },
    {
      "cra": "cra-carteira-80",
      "class": null,
      "date": null,
      "type": "caixa_nao_informado"
    }
  ],
  "sources": [
    {
      "name": "Eventos de funding e caixa",
      "date": "27/10/2026",
      "file": "fundings e caixa cras carteiras.xlsx"
    }
  ]
};
