window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-11-03"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cras-carteira-overview",
    "dateKey": "2026-11-03",
    "reportDate": "03/11/2026",
    "revisionId": "20261103-caixa-texto-0674c15d6ed1-reported-overview",
    "importedAt": "2026-11-05T17:07:27.425970-03:00",
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
    },
    "cashDateKey": "2026-11-03"
  },
  "cra": {
    "id": "cras-carteira-overview",
    "name": "CRAs Carteira - Visao geral",
    "dateKey": "2026-11-03",
    "dataBase": "03/11/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 13703719.78
  },
  "caixa": {
    "total": 13703719.78
  },
  "passivo": {
    "fundingTotal": 581516321.3387793,
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
        "quantidadeIntegralizada": 39900.0,
        "puAtual": 296.61588948,
        "valorAtual": 11834973.990252,
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
        },
        "dataFunding": "2026-11-03"
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
        },
        "dataFunding": "2026-10-27"
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
        },
        "dataFunding": "2026-10-27"
      },
      {
        "operacao": "CRA Carteira 47",
        "craId": "cra-carteira-47",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B49",
        "quantidadeIntegralizada": 39900.0,
        "puAtual": 408.04420045,
        "valorAtual": 16280963.597955,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 48",
        "craId": "cra-carteira-48",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B9U",
        "quantidadeIntegralizada": 39900.0,
        "puAtual": 283.86976941,
        "valorAtual": 11326403.799459,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 49",
        "craId": "cra-carteira-49",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B9X",
        "quantidadeIntegralizada": 39900.0,
        "puAtual": 10.48450965,
        "valorAtual": 418331.935035,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 50",
        "craId": "cra-carteira-50",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02500B9Z",
        "quantidadeIntegralizada": 39900.0,
        "puAtual": 262.92468103,
        "valorAtual": 10490694.773097,
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
        },
        "dataFunding": "2026-11-03"
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
        },
        "dataFunding": "2026-10-27"
      },
      {
        "operacao": "CRA Carteira 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000MH",
        "quantidadeIntegralizada": 9000.0,
        "puAtual": 734.12348075,
        "valorAtual": 6607111.32675,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "PU revisado no controle",
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
        },
        "revisaoInternaPu": {
          "versao": "20261027-revisao-interna-20261103",
          "dataBase": "2026-10-27",
          "inicio": "2026-08-17",
          "fonte": "Comunicado CRA 51 de 17/08/2026, aba Versao final, PU residual informado.",
          "diasUteis": 49,
          "diReferenciaFinal": "2026-10-23",
          "puAnterior": 730.7769329099999,
          "pendencia": null
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000MI",
        "quantidadeIntegralizada": 4189.0,
        "puAtual": 1153.22342374,
        "valorAtual": 4830852.92204686,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "PU revisado no controle",
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
        },
        "revisaoInternaPu": {
          "versao": "20261027-revisao-interna-20261103",
          "dataBase": "2026-10-27",
          "inicio": "2026-07-23",
          "fonte": "5o aditamento do CRA 51, clausula 5.1.16.2. PU de 23/07 preservado na mudanca de regime.",
          "diasUteis": 66,
          "diReferenciaFinal": "2026-10-23",
          "puAnterior": 1149.60816,
          "pendencia": null
        },
        "dataFunding": "2026-11-03"
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
        },
        "dataFunding": "2026-10-27"
      },
      {
        "operacao": "CRA Carteira 53",
        "craId": "cra-carteira-53",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000B7",
        "quantidadeIntegralizada": 39900.0,
        "puAtual": 282.88099085,
        "valorAtual": 11286951.534915,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "04/09: encargos passados, sem efeito no PU",
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 54",
        "craId": "cra-carteira-54",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000B9",
        "quantidadeIntegralizada": 39605.0,
        "puAtual": 283.54635947,
        "valorAtual": 11229853.56680935,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "04/09: encargos passados, sem efeito no PU",
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
        },
        "dataFunding": "2026-11-03"
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
        },
        "dataFunding": "2026-10-27"
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
        },
        "dataFunding": "2026-10-27"
      },
      {
        "operacao": "CRA Carteira 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000MB",
        "quantidadeIntegralizada": 13300.0,
        "puAtual": 776.71065768,
        "valorAtual": 10330251.747144,
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
        },
        "dataFunding": "2026-11-03"
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
        },
        "dataFunding": "2026-10-27"
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
        },
        "dataFunding": "2026-10-27"
      },
      {
        "operacao": "CRA Carteira 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000S0",
        "quantidadeIntegralizada": 0,
        "puAtual": 0.0,
        "valorAtual": 0.0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Cadastro anterior",
        "documentValidation": null,
        "dataFunding": "2026-07-27"
      },
      {
        "operacao": "CRA Carteira 58",
        "craId": "cra-carteira-58",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026000S2",
        "quantidadeIntegralizada": 15595.0,
        "puAtual": 4.83523426,
        "valorAtual": 75405.4782847,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000S3",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1050.35117999,
        "valorAtual": 21007023.5998,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000S4",
        "quantidadeIntegralizada": 9400.0,
        "puAtual": 1050.35117999,
        "valorAtual": 9873301.091906,
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
        },
        "dataFunding": "2026-11-03"
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
        },
        "dataFunding": "2026-10-27"
      },
      {
        "operacao": "CRA Carteira 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026000S7",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 870.40637288,
        "valorAtual": 17408127.4576,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "sourceClass": "MEZB",
        "ifCodigo": "CRA026000S8",
        "quantidadeIntegralizada": 13000.0,
        "puAtual": 1079.809059,
        "valorAtual": 14037517.767,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "PU revisado no controle",
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
        },
        "revisaoInternaPu": {
          "versao": "20261027-revisao-interna-20261103",
          "dataBase": "2026-10-27",
          "inicio": "2026-06-11",
          "fonte": "1o aditamento do CRA 59, de 10/06/2026. Primeira integralizacao registrada em 11/06.",
          "diasUteis": 96,
          "diReferenciaFinal": "2026-10-23",
          "puAnterior": 1076.48535,
          "pendencia": null
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600209",
        "quantidadeIntegralizada": 10440.0,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 60",
        "craId": "cra-carteira-60",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020A",
        "quantidadeIntegralizada": 6050.0,
        "puAtual": 1118.4453,
        "valorAtual": 6766594.065,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 61",
        "craId": "cra-carteira-61",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260020C",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1100.57544999,
        "valorAtual": 22011508.9998,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 61",
        "craId": "cra-carteira-61",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020D",
        "quantidadeIntegralizada": 19900.0,
        "puAtual": 1100.57544999,
        "valorAtual": 21901451.454801,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 62",
        "craId": "cra-carteira-62",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260020F",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 976.24819002,
        "valorAtual": 19524963.8004,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "30/04/2030",
        "dataVencimentoIso": "2030-04-30",
        "status": "PU revisado no controle",
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
        },
        "revisaoInternaPu": {
          "versao": "20261027-revisao-interna-20261103",
          "dataBase": "2026-10-27",
          "inicio": "2026-07-10",
          "fonte": "1o aditamento do CRA 62, clausula 5.1.16.1, e comunicado de 10/07/2026, PU residual.",
          "diasUteis": 75,
          "diReferenciaFinal": "2026-10-23",
          "puAnterior": 973.11578502,
          "pendencia": null
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 62",
        "craId": "cra-carteira-62",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020G",
        "quantidadeIntegralizada": 17537.0,
        "puAtual": 1087.385597,
        "valorAtual": 19069481.214589,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "PU revisado no controle",
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
        },
        "revisaoInternaPu": {
          "versao": "20261027-revisao-interna-20261103",
          "dataBase": "2026-10-27",
          "inicio": "2026-06-05",
          "fonte": "1o aditamento do CRA 62, clausula 5.1.16.2. Primeira integralizacao em 05/06 confirmada em 03/11/2026.",
          "diasUteis": 100,
          "diReferenciaFinal": "2026-10-23",
          "puAnterior": 1083.87776999,
          "pendencia": null
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 63",
        "craId": "cra-carteira-63",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260020I",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1051.291145,
        "valorAtual": 21025822.9,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 63",
        "craId": "cra-carteira-63",
        "serie": "Mezanino",
        "classe": "MEZA",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA0260020J",
        "quantidadeIntegralizada": 19440.0,
        "puAtual": 1021.179588,
        "valorAtual": 19851731.19072,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 67",
        "craId": "cra-carteira-67",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004H5",
        "quantidadeIntegralizada": 17019.0,
        "puAtual": 1035.29661,
        "valorAtual": 17619713.00559,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 67",
        "craId": "cra-carteira-67",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004H6",
        "quantidadeIntegralizada": 9199.0,
        "puAtual": 1035.29661,
        "valorAtual": 9523693.51539,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 68",
        "craId": "cra-carteira-68",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004H8",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1016.021752,
        "valorAtual": 20320435.04,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 68",
        "craId": "cra-carteira-68",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004H9",
        "quantidadeIntegralizada": 17709.0,
        "puAtual": 1016.021752,
        "valorAtual": 17992729.206168,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 69",
        "craId": "cra-carteira-69",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004HB",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1016.021752,
        "valorAtual": 20320435.04,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 69",
        "craId": "cra-carteira-69",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004HC",
        "quantidadeIntegralizada": 18537.0,
        "puAtual": 1016.021752,
        "valorAtual": 18833995.216824,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 70",
        "craId": "cra-carteira-70",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004HE",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1016.021752,
        "valorAtual": 20320435.04,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 70",
        "craId": "cra-carteira-70",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004HF",
        "quantidadeIntegralizada": 14623.0,
        "puAtual": 1016.021752,
        "valorAtual": 14857286.079496,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 71",
        "craId": "cra-carteira-71",
        "serie": "Senior 1a serie",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA026004HH",
        "quantidadeIntegralizada": 20000.0,
        "puAtual": 1016.829539,
        "valorAtual": 20336590.78,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 71",
        "craId": "cra-carteira-71",
        "serie": "Senior 2a serie",
        "classe": "SR2",
        "sourceClass": "MEZA",
        "ifCodigo": "CRA026004HI",
        "quantidadeIntegralizada": 485.0,
        "puAtual": 1016.829539,
        "valorAtual": 493162.326415,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 72",
        "craId": "cra-carteira-72",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA0260058Y",
        "quantidadeIntegralizada": 33486.0,
        "puAtual": 1008.06542026,
        "valorAtual": 33756078.66282636,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 73",
        "craId": "cra-carteira-73",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600590",
        "quantidadeIntegralizada": 35900.0,
        "puAtual": 1034.05219642,
        "valorAtual": 37122473.851478,
        "taxa": "CDI + 7.50% a.a.",
        "dataVencimento": "30/09/2027",
        "dataVencimentoIso": "2027-09-30",
        "status": "Juros incorporados; conciliar AF",
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
        },
        "revisaoInternaPu": {
          "versao": "20261027-revisao-interna-20261103-cra73",
          "dataBase": "2026-10-27",
          "inicio": "2026-08-19",
          "fonte": "TS CRA 73 e comunicado de 18/09/2026; incorporacao dos juros remanescentes confirmada por Leonardo.",
          "diasUteis": 47,
          "diReferenciaFinal": "2026-10-23",
          "puAnterior": 1030.76123247,
          "pendencia": null
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 74",
        "craId": "cra-carteira-74",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600592",
        "quantidadeIntegralizada": 19850.0,
        "puAtual": 972.13192214,
        "valorAtual": 19296818.654479,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 75",
        "craId": "cra-carteira-75",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600594",
        "quantidadeIntegralizada": 37499.0,
        "puAtual": 1020.78687,
        "valorAtual": 38278486.83813,
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
        },
        "dataFunding": "2026-11-03"
      },
      {
        "operacao": "CRA Carteira 80",
        "craId": "cra-carteira-80",
        "serie": "Senior",
        "classe": "SR1",
        "sourceClass": "SR1",
        "ifCodigo": "CRA02600799",
        "quantidadeIntegralizada": 5105.0,
        "puAtual": 1004.668287,
        "valorAtual": 5128831.605135,
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
        },
        "dataFunding": "2026-11-03"
      }
    ]
  },
  "fundingCashVehicles": [
    {
      "craId": "cra-carteira-44",
      "name": "CRA Carteira 44",
      "funding": 11834973.990252,
      "cash": 7924.07
    },
    {
      "craId": "cra-carteira-45",
      "name": "CRA Carteira 45",
      "funding": 0.0,
      "cash": 191653.48
    },
    {
      "craId": "cra-carteira-46",
      "name": "CRA Carteira 46",
      "funding": 125838.256698,
      "cash": 210176.22
    },
    {
      "craId": "cra-carteira-47",
      "name": "CRA Carteira 47",
      "funding": 16280963.597955,
      "cash": 2973885.18
    },
    {
      "craId": "cra-carteira-48",
      "name": "CRA Carteira 48",
      "funding": 11326403.799459,
      "cash": 38550.93
    },
    {
      "craId": "cra-carteira-49",
      "name": "CRA Carteira 49",
      "funding": 418331.935035,
      "cash": 48893.1
    },
    {
      "craId": "cra-carteira-50",
      "name": "CRA Carteira 50",
      "funding": 10490694.773097,
      "cash": 10825.52
    },
    {
      "craId": "cra-carteira-51",
      "name": "CRA Carteira 51",
      "funding": 11437964.24879686,
      "cash": 5604.46
    },
    {
      "craId": "cra-carteira-52",
      "name": "CRA Carteira 52",
      "funding": 0.0,
      "cash": 59908.93
    },
    {
      "craId": "cra-carteira-53",
      "name": "CRA Carteira 53",
      "funding": 11286951.534915,
      "cash": 767554.33
    },
    {
      "craId": "cra-carteira-54",
      "name": "CRA Carteira 54",
      "funding": 11229853.56680935,
      "cash": 530021.36
    },
    {
      "craId": "cra-carteira-55",
      "name": "CRA Carteira 55",
      "funding": 10330251.747144,
      "cash": 245947.25
    },
    {
      "craId": "cra-carteira-56",
      "name": "CRA Carteira 56",
      "funding": null,
      "cash": 1242500.75
    },
    {
      "craId": "cra-carteira-57",
      "name": "CRA Carteira 57",
      "funding": 0.0,
      "cash": 163394.33
    },
    {
      "craId": "cra-carteira-58",
      "name": "CRA Carteira 58",
      "funding": 30955730.169990703,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-59",
      "name": "CRA Carteira 59",
      "funding": 31445645.224600002,
      "cash": 3838195.28
    },
    {
      "craId": "cra-carteira-60",
      "name": "CRA Carteira 60",
      "funding": 6766594.071786,
      "cash": 209973.58
    },
    {
      "craId": "cra-carteira-61",
      "name": "CRA Carteira 61",
      "funding": 43912960.454601005,
      "cash": 131721.84
    },
    {
      "craId": "cra-carteira-62",
      "name": "CRA Carteira 62",
      "funding": 38594445.014989,
      "cash": 501330.28
    },
    {
      "craId": "cra-carteira-63",
      "name": "CRA Carteira 63",
      "funding": 40877554.09072,
      "cash": 1792440.04
    },
    {
      "craId": "cra-carteira-67",
      "name": "CRA Carteira 67",
      "funding": 27143406.52098,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-68",
      "name": "CRA Carteira 68",
      "funding": 38313164.246168,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-69",
      "name": "CRA Carteira 69",
      "funding": 39154430.256824,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-70",
      "name": "CRA Carteira 70",
      "funding": 35177721.119496,
      "cash": 1887.83
    },
    {
      "craId": "cra-carteira-71",
      "name": "CRA Carteira 71",
      "funding": 20829753.106415,
      "cash": 250139.76
    },
    {
      "craId": "cra-carteira-72",
      "name": "CRA Carteira 72",
      "funding": 33756078.66282636,
      "cash": 6655.19
    },
    {
      "craId": "cra-carteira-73",
      "name": "CRA Carteira 73",
      "funding": 37122473.851478,
      "cash": 0.0
    },
    {
      "craId": "cra-carteira-74",
      "name": "CRA Carteira 74",
      "funding": 19296818.654479,
      "cash": 33473.03
    },
    {
      "craId": "cra-carteira-75",
      "name": "CRA Carteira 75",
      "funding": 38278486.83813,
      "cash": 441063.04
    },
    {
      "craId": "cra-carteira-80",
      "name": "CRA Carteira 80",
      "funding": 5128831.605135,
      "cash": 0.0
    }
  ],
  "fundingCashIssues": [
    {
      "cra": "cra-carteira-44",
      "class": "SR1",
      "date": "2026-07-30",
      "type": "quadros_pagamento_deduplicados",
      "pending": false,
      "alternatives": [
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 183,
          "sourceColumn": 14,
          "sourceSheet": "44ª PU SR",
          "fields": {
            "saldoemconta": 605000.0,
            "pujuros": 1.60399167,
            "valorjuros": 63999.27,
            "valoramortizacao": 541000.73,
            "puamortizacao": 13.5589156
          },
          "sourceCells": {
            "saldoemconta": "O184",
            "pujuros": "O185",
            "valorjuros": "O186",
            "valoramortizacao": "O187",
            "puamortizacao": "O188"
          },
          "status": "realizado"
        },
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 183,
          "sourceColumn": 12,
          "sourceSheet": "44ª PU SR",
          "fields": {
            "saldoemconta": 605000.0,
            "pujuros": 1.6039916772693914,
            "valorjuros": 63999.26788184123,
            "valoramortizacao": 541000.7321181587,
            "puamortizacao": 13.55891560066404,
            "saldodevedor": 389.8415567420666
          },
          "sourceCells": {
            "saldoemconta": "M184",
            "pujuros": "M185",
            "valorjuros": "M186",
            "valoramortizacao": "M187",
            "puamortizacao": "M188",
            "saldodevedor": "M189"
          },
          "status": "realizado"
        }
      ],
      "selectedAmount": 605000.0
    },
    {
      "cra": "cra-carteira-45",
      "class": "SR1",
      "date": "2026-08-07",
      "type": "pagamento_maior_saldo_calculado",
      "pending": true,
      "payment": 26237000.0,
      "balanceBefore": 26226557.459949,
      "difference": 10442.54005099833
    },
    {
      "cra": "cra-carteira-46",
      "class": "SR1",
      "date": "2026-09-04",
      "type": "ajuste_generico_sem_detalhamento",
      "pending": true,
      "amount": 591442.99
    },
    {
      "cra": "cra-carteira-46",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_apos_vencimento_cadastrado",
      "pending": true,
      "maturity": "2026-09-28",
      "balance": 125838.256698
    },
    {
      "cra": "cra-carteira-47",
      "class": "SR1",
      "date": "2026-07-30",
      "type": "quadros_pagamento_deduplicados",
      "pending": false,
      "alternatives": [
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 166,
          "sourceColumn": 17,
          "sourceSheet": "47ª PU SR",
          "fields": {
            "saldoemconta": 9700000.0,
            "pujuros": 7.12813785,
            "valorjuros": 284409.48852572363,
            "valoramortizacao": 9415590.511474276,
            "puamortizacao": 235.9796316,
            "saldodevedor": 387.3757278494638
          },
          "sourceCells": {
            "saldoemconta": "R167",
            "pujuros": "R168",
            "valorjuros": "R169",
            "valoramortizacao": "R170",
            "puamortizacao": "R171",
            "saldodevedor": "R172"
          },
          "status": "realizado"
        },
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 166,
          "sourceColumn": 20,
          "sourceSheet": "47ª PU SR",
          "fields": {
            "saldoemconta": 9700000.0,
            "pujuros": 7.12813785,
            "valorjuros": 284412.7,
            "valoramortizacao": 9415587.3,
            "puamortizacao": 235.9796316
          },
          "sourceCells": {
            "saldoemconta": "U167",
            "pujuros": "U168",
            "valorjuros": "U169",
            "valoramortizacao": "U170",
            "puamortizacao": "U171"
          },
          "status": "realizado"
        }
      ],
      "selectedAmount": 9700000.0
    },
    {
      "cra": "cra-carteira-47",
      "class": "SR1",
      "date": "2026-01-26",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-01-26",
        "type": "integralizacao",
        "amount": 10498867.69,
        "quantity": 10332.999895753392,
        "sourceRow": 5,
        "sourceSheet": "47ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "26/01/2026",
        "dataIso": "2026-01-26",
        "tipo": "integralizacao",
        "quantidade": 10333,
        "valor": 10498867.69,
        "valorEventoReais": 10498867.69
      }
    },
    {
      "cra": "cra-carteira-47",
      "class": "SR1",
      "date": "2026-01-30",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-01-30",
        "type": "integralizacao",
        "amount": 5357285.13,
        "quantity": 5255.0,
        "sourceRow": 6,
        "sourceSheet": "47ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "30/01/2026",
        "dataIso": "2026-01-30",
        "tipo": "integralizacao",
        "quantidade": 3924,
        "valor": 4000378.09,
        "valorEventoReais": 4000378.09
      }
    },
    {
      "cra": "cra-carteira-47",
      "class": "SR1",
      "date": "2026-03-31",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-03-31",
        "type": "integralizacao",
        "amount": 9580770.22,
        "quantity": 9087.549623004352,
        "sourceRow": 8,
        "sourceSheet": "47ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "31/03/2026",
        "dataIso": "2026-03-31",
        "tipo": "integralizacao",
        "quantidade": 9088,
        "valor": 9580770.22,
        "valorEventoReais": 9580770.22
      }
    },
    {
      "cra": "cra-carteira-47",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 16229673.618825724,
      "puTimesQuantity": 16229856.892136998
    },
    {
      "cra": "cra-carteira-48",
      "class": "SR1",
      "date": "2026-07-30",
      "type": "quadros_pagamento_deduplicados",
      "pending": false,
      "alternatives": [
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 161,
          "sourceColumn": 16,
          "sourceSheet": "48ª PU SR",
          "fields": {
            "saldoemconta": 6750000.0,
            "pujuros": 7.42961417,
            "valorjuros": 296439.01345291483,
            "valoramortizacao": 6453560.986547085,
            "puamortizacao": 161.74331816,
            "saldodevedor": 487.9764671534336
          },
          "sourceCells": {
            "saldoemconta": "Q162",
            "pujuros": "Q163",
            "valorjuros": "Q164",
            "valoramortizacao": "Q165",
            "puamortizacao": "Q166",
            "saldodevedor": "Q167"
          },
          "status": "realizado"
        },
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 161,
          "sourceColumn": 18,
          "sourceSheet": "48ª PU SR",
          "fields": {
            "saldoemconta": 6750000.0,
            "pujuros": 7.42961417,
            "valorjuros": 296441.61,
            "valoramortizacao": 6453558.39,
            "puamortizacao": 161.74331816
          },
          "sourceCells": {
            "saldoemconta": "S162",
            "pujuros": "S163",
            "valorjuros": "S164",
            "valoramortizacao": "S165",
            "puamortizacao": "S166"
          },
          "status": "realizado"
        }
      ],
      "selectedAmount": 6750000.0
    },
    {
      "cra": "cra-carteira-48",
      "class": "SR1",
      "date": "2026-01-30",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-01-30",
        "type": "integralizacao",
        "amount": 6116786.06,
        "quantity": 6000.0,
        "sourceRow": 6,
        "sourceSheet": "48ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "30/01/2026",
        "dataIso": "2026-01-30",
        "tipo": "integralizacao",
        "quantidade": 4577,
        "valor": 4666088.3,
        "valorEventoReais": 4666088.3
      }
    },
    {
      "cra": "cra-carteira-48",
      "class": "SR1",
      "date": "2026-03-31",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-03-31",
        "type": "integralizacao",
        "amount": 9933934.61,
        "quantity": 9422.651343839314,
        "sourceRow": 8,
        "sourceSheet": "48ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "31/03/2026",
        "dataIso": "2026-03-31",
        "tipo": "integralizacao",
        "quantidade": 9423,
        "valor": 9933934.61,
        "valorEventoReais": 9933934.61
      }
    },
    {
      "cra": "cra-carteira-48",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 11290553.830038527,
      "puTimesQuantity": 11290652.549588999
    },
    {
      "cra": "cra-carteira-51",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 11402364.857004954,
      "puTimesQuantity": 0.0
    },
    {
      "cra": "cra-carteira-51",
      "class": "MEZB",
      "date": "2026-03-20",
      "type": "evento_anterior_base_validada_pendente",
      "pending": true
    },
    {
      "cra": "cra-carteira-55",
      "class": "SR1",
      "date": "2026-09-04",
      "type": "ajuste_generico_sem_detalhamento",
      "pending": true,
      "amount": 536451.91
    },
    {
      "cra": "cra-carteira-55",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 10298676.462958097,
      "puTimesQuantity": 0.0
    },
    {
      "cra": "cra-carteira-55",
      "class": "MEZA",
      "date": "2026-05-29",
      "type": "quadros_pagamento_repetidos_divergentes",
      "pending": false,
      "alternatives": [
        {
          "date": "2026-05-29",
          "type": "pagamento",
          "sourceRow": 88,
          "sourceColumn": 15,
          "sourceSheet": "55ª PU MEZ A",
          "fields": {
            "saldoemconta": 170000.0,
            "pujuros": 12.781954887218046,
            "valorjuros": 170000.0,
            "valoramortizacao": 0.0,
            "puamortizacao": 0.0,
            "saldodevedor": 1052.423425112782
          },
          "sourceCells": {
            "saldoemconta": "P89",
            "pujuros": "P90",
            "valorjuros": "P91",
            "valoramortizacao": "P92",
            "puamortizacao": "P93",
            "saldodevedor": "P94"
          },
          "status": "realizado"
        },
        {
          "date": "2026-05-29",
          "type": "pagamento",
          "sourceRow": 88,
          "sourceColumn": 12,
          "sourceSheet": "55ª PU MEZ A",
          "fields": {
            "saldoemconta": 170000.0,
            "pujuros": 65.20538,
            "valorjuros": 867231.5540000001,
            "valoramortizacao": 0.0,
            "puamortizacao": 0.0,
            "saldodevedor": 1000.0
          },
          "sourceCells": {
            "saldoemconta": "M89",
            "pujuros": "M90",
            "valorjuros": "M91",
            "valoramortizacao": "M92",
            "puamortizacao": "M93",
            "saldodevedor": "M94"
          },
          "status": "realizado"
        }
      ],
      "selectedAmount": 170000.0,
      "preservedEarlierValidatedEvent": true
    },
    {
      "cra": "cra-carteira-55",
      "class": "MEZA",
      "date": "2026-07-30",
      "type": "quadros_pagamento_repetidos_divergentes",
      "pending": false,
      "alternatives": [
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 134,
          "sourceColumn": 12,
          "sourceSheet": "55ª PU MEZ A",
          "fields": {
            "saldoemconta": 684000.0,
            "pujuros": 0.2034851459398297,
            "valorjuros": 2706.352440999735,
            "valoramortizacao": 681293.6475590003,
            "puamortizacao": 51.2250862826316,
            "saldodevedor": -0.04900745857143107
          },
          "sourceCells": {
            "saldoemconta": "M135",
            "pujuros": "M136",
            "valorjuros": "M137",
            "valoramortizacao": "M138",
            "puamortizacao": "M139",
            "saldodevedor": "M140"
          },
          "status": "realizado"
        },
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 134,
          "sourceColumn": 14,
          "sourceSheet": "55ª PU MEZ A",
          "fields": {
            "saldoemconta": 694000.0,
            "pujuros": 0.2034852,
            "valorjuros": 2706.35,
            "valoramortizacao": 680641.88,
            "puamortizacao": 51.1760809
          },
          "sourceCells": {
            "saldoemconta": "O135",
            "pujuros": "O136",
            "valorjuros": "O137",
            "valoramortizacao": "O138",
            "puamortizacao": "O139"
          },
          "status": "realizado"
        }
      ],
      "selectedAmount": 684000.0
    },
    {
      "cra": "cra-carteira-55",
      "class": "MEZA",
      "date": "2026-07-30",
      "type": "pagamento_maior_saldo_calculado",
      "pending": true,
      "payment": 684000.0,
      "balanceBefore": 683348.192422,
      "difference": 651.8075780000072
    },
    {
      "cra": "cra-carteira-55",
      "class": "MEZB",
      "date": "2026-03-17",
      "type": "evento_anterior_base_validada_pendente",
      "pending": true
    },
    {
      "cra": "cra-carteira-56",
      "type": "funding_nao_informado",
      "pending": true
    },
    {
      "cra": "cra-carteira-57",
      "class": "SR1",
      "date": "2026-07-30",
      "type": "quadros_pagamento_repetidos_divergentes",
      "pending": false,
      "alternatives": [
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 99,
          "sourceColumn": 12,
          "sourceSheet": "57ª PU SR",
          "fields": {
            "saldoemconta": 1315000.0,
            "pujuros": 0.260313560000057,
            "valorjuros": 5206.27120000114,
            "valoramortizacao": 1309793.7287999988,
            "puamortizacao": 65.48968643999994,
            "saldodevedor": -0.021381230000002915
          },
          "sourceCells": {
            "saldoemconta": "M100",
            "pujuros": "M101",
            "valorjuros": "M102",
            "valoramortizacao": "M103",
            "puamortizacao": "M104",
            "saldodevedor": "M105"
          },
          "status": "realizado"
        },
        {
          "date": "2026-07-30",
          "type": "pagamento",
          "sourceRow": 99,
          "sourceColumn": 14,
          "sourceSheet": "57ª PU SR",
          "fields": {
            "saldoemconta": 1330000.0,
            "pujuros": 0.2603136,
            "valorjuros": 5206.27,
            "valoramortizacao": 1309366.08,
            "puamortizacao": 65.468304
          },
          "sourceCells": {
            "saldoemconta": "O100",
            "pujuros": "O101",
            "valorjuros": "O102",
            "valoramortizacao": "O103",
            "puamortizacao": "O104"
          },
          "status": "realizado"
        }
      ],
      "selectedAmount": 1315000.0
    },
    {
      "cra": "cra-carteira-57",
      "class": "SR1",
      "date": "2026-07-30",
      "type": "pagamento_maior_saldo_calculado",
      "pending": true,
      "payment": 1315000.0,
      "balanceBefore": 1314572.3486,
      "difference": 427.6514000000898
    },
    {
      "cra": "cra-carteira-57",
      "class": "MEZA",
      "date": "2026-09-15",
      "type": "pagamento_maior_saldo_calculado",
      "pending": true,
      "payment": 880913.44016793,
      "balanceBefore": 880721.104,
      "difference": 192.3361679299269
    },
    {
      "cra": "cra-carteira-57",
      "class": "MEZA",
      "date": "2026-05-08",
      "type": "evento_anterior_base_validada_pendente",
      "pending": true
    },
    {
      "cra": "cra-carteira-58",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 30856173.576864358,
      "puTimesQuantity": 75162.96686198059
    },
    {
      "cra": "cra-carteira-58",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 30856173.576864358,
      "puTimesQuantity": 20939463.0
    },
    {
      "cra": "cra-carteira-58",
      "class": "MEZB",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 30856173.57686436,
      "puTimesQuantity": 9841547.61
    },
    {
      "cra": "cra-carteira-58",
      "date": "2026-11-03",
      "type": "reserva_superior_aos_saldos",
      "amount": 45249.14,
      "reportedTotalPreserved": true
    },
    {
      "cra": "cra-carteira-59",
      "class": "SR1",
      "date": "2026-06-16",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-06-16",
        "type": "integralizacao",
        "amount": 10679079.76,
        "quantity": 10654.0,
        "sourceRow": 5,
        "sourceSheet": "59ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "16/06/2026",
        "dataIso": "2026-06-16",
        "tipo": "integralizacao",
        "quantidade": 4000,
        "valor": 4009416.09,
        "valorEventoReais": 4009416.09
      }
    },
    {
      "cra": "cra-carteira-60",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 6744831.973,
      "puTimesQuantity": 0.0
    },
    {
      "cra": "cra-carteira-60",
      "class": "MEZA",
      "date": "2026-05-20",
      "type": "evento_anterior_base_validada_pendente",
      "pending": true
    },
    {
      "cra": "cra-carteira-61",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 43771732.01211478,
      "puTimesQuantity": 21940717.8
    },
    {
      "cra": "cra-carteira-61",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 43771732.01211478,
      "puTimesQuantity": 21831014.211000003
    },
    {
      "cra": "cra-carteira-62",
      "class": "SR1",
      "date": "2026-06-05",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-06-05",
        "type": "integralizacao",
        "amount": 451850.68,
        "quantity": 450.0,
        "sourceRow": 6,
        "sourceSheet": "62ª PU SR",
        "status": "realizado"
      },
      "preserved": {
        "data": "05/06/2026",
        "dataIso": "2026-06-05",
        "tipo": "integralizacao",
        "quantidade": 450,
        "valor": 652673.2,
        "valorEventoReais": 652673.2
      }
    },
    {
      "cra": "cra-carteira-62",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 38471928.713225216,
      "puTimesQuantity": 19463163.5238
    },
    {
      "cra": "cra-carteira-62",
      "class": "MEZA",
      "date": "2026-06-05",
      "type": "integralizacao_diverge_documento_preservado",
      "source": {
        "date": "2026-06-05",
        "type": "integralizacao",
        "amount": 200822.53,
        "quantity": 200.82253,
        "sourceRow": 4,
        "sourceSheet": "62ª PU MEZ A",
        "status": "realizado"
      },
      "preserved": {
        "data": "05/06/2026",
        "dataIso": "2026-06-05",
        "tipo": "integralizacao",
        "quantidade": 201,
        "valor": 200822.53,
        "valorEventoReais": 200822.53
      }
    },
    {
      "cra": "cra-carteira-62",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 38471928.713225216,
      "puTimesQuantity": 19008957.555263
    },
    {
      "cra": "cra-carteira-63",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 30985169.29100636,
      "puTimesQuantity": 19790187.74712
    },
    {
      "cra": "cra-carteira-67",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 27071242.13143,
      "puTimesQuantity": 17572868.633565
    },
    {
      "cra": "cra-carteira-67",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 18996746.99573,
      "puTimesQuantity": 9498373.497865
    },
    {
      "cra": "cra-carteira-67",
      "date": "2026-11-03",
      "type": "reserva_superior_aos_saldos",
      "amount": 10970.34,
      "reportedTotalPreserved": true
    },
    {
      "cra": "cra-carteira-68",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 26501462.880988,
      "puTimesQuantity": 20216235.32
    },
    {
      "cra": "cra-carteira-68",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 18596914.870868,
      "puTimesQuantity": 17900465.564094
    },
    {
      "cra": "cra-carteira-68",
      "date": "2026-11-03",
      "type": "reserva_superior_aos_saldos",
      "amount": 106752.61,
      "reportedTotalPreserved": true
    },
    {
      "cra": "cra-carteira-69",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 26501462.880988,
      "puTimesQuantity": 20216235.32
    },
    {
      "cra": "cra-carteira-69",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 18596914.870868,
      "puTimesQuantity": 18737417.706342
    },
    {
      "cra": "cra-carteira-69",
      "date": "2026-11-03",
      "type": "reserva_superior_aos_saldos",
      "amount": 108386.35,
      "reportedTotalPreserved": true
    },
    {
      "cra": "cra-carteira-70",
      "class": "SR1",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 26501462.880988,
      "puTimesQuantity": 20216235.32
    },
    {
      "cra": "cra-carteira-70",
      "class": "MEZA",
      "date": "2026-10-27",
      "type": "saldo_planilha_nao_e_pu_vezes_quantidade",
      "sourceBalance": 18596914.870868,
      "puTimesQuantity": 14781100.454218
    },
    {
      "cra": "cra-carteira-73",
      "date": "2026-11-03",
      "type": "reserva_superior_aos_saldos",
      "amount": 47549.89,
      "reportedTotalPreserved": true
    },
    {
      "cra": "cra-carteira-80",
      "date": "2026-11-03",
      "type": "reserva_superior_aos_saldos",
      "amount": 105003.05,
      "reportedTotalPreserved": true
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
