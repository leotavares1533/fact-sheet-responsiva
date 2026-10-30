window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-75"] = window.LAMINA_CRA_DAILY["cra-carteira-75"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-75"]["2026-10-27"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-75",
    "dateKey": "2026-10-27",
    "reportDate": "27/10/2026",
    "revisionId": "20261027-documentos-20261030-3a880273",
    "importedAt": "2026-10-29T14:03:14.608785-03:00",
    "fundingCashOnly": true,
    "crasCarteiraBatch": true,
    "businessCalendar": {
      "name": "ANBIMA feriados nacionais",
      "holidayCount": 1263,
      "lagBusinessDays": 2,
      "holidays": [
        "2026-05-01",
        "2026-06-04",
        "2026-09-07",
        "2026-10-12",
        "2026-11-02",
        "2026-11-15",
        "2026-11-20",
        "2026-12-25",
        "2027-01-01",
        "2027-02-08",
        "2027-02-09",
        "2027-03-26",
        "2027-04-21",
        "2027-05-01",
        "2027-05-27",
        "2027-09-07",
        "2027-10-12",
        "2027-11-02",
        "2027-11-15",
        "2027-11-20",
        "2027-12-25",
        "2028-01-01",
        "2028-02-28",
        "2028-02-29",
        "2028-04-14",
        "2028-04-21",
        "2028-05-01",
        "2028-06-15",
        "2028-09-07",
        "2028-10-12",
        "2028-11-02",
        "2028-11-15",
        "2028-11-20",
        "2028-12-25",
        "2029-01-01",
        "2029-02-12",
        "2029-02-13",
        "2029-03-30",
        "2029-04-21",
        "2029-05-01",
        "2029-05-31",
        "2029-09-07",
        "2029-10-12",
        "2029-11-02",
        "2029-11-15",
        "2029-11-20",
        "2029-12-25",
        "2030-01-01",
        "2030-03-04",
        "2030-03-05",
        "2030-04-19",
        "2030-04-21",
        "2030-05-01"
      ],
      "documentedSeriesLagBusinessDays": 2
    },
    "previousPortfolioDateKey": null,
    "fundingCashImport": {
      "sourceFile": "fundings e caixa cras carteiras.xlsx",
      "sourceHash": "a1d4fdf5a5f06e45373d75eeb3e33ffb3c1d4e841a18d2a33108ab1d5f076964",
      "sheetCash": "Saldo Caixa",
      "documentValidationRequired": true
    },
    "documentReview": {
      "date": "2026-10-30",
      "registry": "data/fundings/cras-carteira/documented-terms.json",
      "cancelledPaymentDate": "2026-10-07",
      "sourcePositionDate": "2026-10-27",
      "noPortfolioOrCashReprocessing": true,
      "registryHash": "3a8802739db9d76c1a56e46bc8bfc67d2c9029f3712bbd931784c9617afc32fa"
    }
  },
  "cra": {
    "id": "cra-carteira-75",
    "name": "CRA Carteira 75",
    "dateKey": "2026-10-27",
    "dataBase": "27/10/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 440724.44999999995
  },
  "caixa": {
    "accounts": {
      "cc": 186285.24,
      "contaAplicacao": 310758.11,
      "fundoDespesas": 56318.899999999994
    },
    "total": 440724.44999999995,
    "totalCalculado": 440724.44999999995,
    "fonte": "Saldo Caixa",
    "arquivoOrigem": "fundings e caixa cras carteiras.xlsx",
    "observacao": "Total informado preservado. Fundo de despesas deduzido uma unica vez. Divergencias sinalizadas."
  },
  "passivo": {
    "fundingTotal": 38177047.393254,
    "subordinadaTotal": null,
    "subordinadaPuResidual": null,
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA02600594",
        "ehFunding": true,
        "quantidade": 37499.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.04,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-09-17",
        "dataInicio": "17/09/2026",
        "dataVencimentoIso": "2027-09-30",
        "dataVencimento": "30/09/2027",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "17/09/2026",
            "dataIso": "2026-09-17",
            "tipo": "integralizacao",
            "quantidade": 3812.0,
            "valor": 3812000.0,
            "valorEventoReais": 3812000.0,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 4,
            "status": "realizado"
          },
          {
            "data": "22/09/2026",
            "dataIso": "2026-09-22",
            "tipo": "integralizacao",
            "quantidade": 1065.0,
            "valor": 1066413.96,
            "valorEventoReais": 1066413.96,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 5,
            "status": "realizado"
          },
          {
            "data": "30/09/2026",
            "dataIso": "2026-09-30",
            "tipo": "integralizacao",
            "quantidade": 12730.0,
            "valor": 12806343.37,
            "valorEventoReais": 12806343.37,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 6,
            "status": "realizado"
          },
          {
            "data": "06/10/2026",
            "dataIso": "2026-10-06",
            "tipo": "integralizacao",
            "quantidade": 2692.0,
            "valor": 2715340.02,
            "valorEventoReais": 2715340.02,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 7,
            "status": "realizado"
          },
          {
            "data": "08/10/2026",
            "dataIso": "2026-10-08",
            "tipo": "integralizacao",
            "quantidade": 4500.0,
            "valor": 4545041.91,
            "valorEventoReais": 4545041.91,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 8,
            "status": "realizado"
          },
          {
            "data": "16/10/2026",
            "dataIso": "2026-10-16",
            "tipo": "integralizacao",
            "quantidade": 3276.0,
            "valor": 3319783.85,
            "valorEventoReais": 3319783.85,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 9,
            "status": "realizado"
          },
          {
            "data": "19/10/2026",
            "dataIso": "2026-10-19",
            "tipo": "integralizacao",
            "quantidade": 8737.0,
            "valor": 8859645.75,
            "valorEventoReais": 8859645.75,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 11,
            "status": "realizado"
          },
          {
            "data": "23/10/2026",
            "dataIso": "2026-10-23",
            "tipo": "integralizacao",
            "quantidade": 687.0,
            "valor": 698494.81,
            "valorEventoReais": 698494.81,
            "sourceSheet": "75ª PU SR",
            "sourceRow": 12,
            "status": "realizado"
          }
        ],
        "historicoPu": [
          {
            "data": "17/09/2026",
            "dataIso": "2026-09-17",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 3812.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.0,
            "puContratualComDiaAdicional": 1000.67233,
            "fatorDiAcumulado": 1.0,
            "produtorioFatorDi": 1.0,
            "fatorDiArredondado": 1.0,
            "fatorSpread": 1.0,
            "fator": 1.0,
            "spread": 0.04,
            "spreadAcumulado": 0.0,
            "fatorJurosAcumulado": 1.0,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 3812000.0,
            "evento": "Integralizacao",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.0,
            "puAposEvento": 1000.0,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 3812.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.67233,
            "puJuros": 0.67233,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.67233,
            "puContratualComDiaAdicional": 1001.345116,
            "fatorDiAcumulado": 1.0005166,
            "produtorioFatorDi": 1.0005166,
            "fatorDiArredondado": 1.0005166,
            "fatorSpread": 1.00015565,
            "fator": 1.00067233,
            "spread": 0.04,
            "spreadAcumulado": 0.00015564999999995166,
            "fatorJurosAcumulado": 1.00067233,
            "dataTaxaDiIso": "2026-09-16",
            "taxaDiUtilizadaDia": 0.0005166,
            "dataTaxaDi": "16/09/2026",
            "dataReferenciaTaxaDi": "16/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 3814562.92196,
            "evento": "",
            "tdk": 0.0005166,
            "fatorDiario": 1.0005166,
            "puAntesEvento": 1000.67233,
            "puAposEvento": 1000.67233,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-16",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "19/09/2026",
            "dataIso": "2026-09-19",
            "diaUtil": false,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 3812.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.67233,
            "puJuros": 0.67233,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.67233,
            "puContratualComDiaAdicional": 1001.345116,
            "fatorDiAcumulado": 1.0005166,
            "produtorioFatorDi": 1.0005166,
            "fatorDiArredondado": 1.0005166,
            "fatorSpread": 1.00015565,
            "fator": 1.00067233,
            "spread": 0.04,
            "spreadAcumulado": 0.00015564999999995166,
            "fatorJurosAcumulado": 1.00067233,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 3814562.92196,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.67233,
            "puAposEvento": 1000.67233,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "20/09/2026",
            "dataIso": "2026-09-20",
            "diaUtil": false,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 3812.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.67233,
            "puJuros": 0.67233,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.67233,
            "puContratualComDiaAdicional": 1001.345116,
            "fatorDiAcumulado": 1.0005166,
            "produtorioFatorDi": 1.0005166,
            "fatorDiArredondado": 1.0005166,
            "fatorSpread": 1.00015565,
            "fator": 1.00067233,
            "spread": 0.04,
            "spreadAcumulado": 0.00015564999999995166,
            "fatorJurosAcumulado": 1.00067233,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 3814562.92196,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.67233,
            "puAposEvento": 1000.67233,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "21/09/2026",
            "dataIso": "2026-09-21",
            "diaUtil": true,
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 3812.0,
            "valorNominal": 1000,
            "puAtualizado": 1001.336383,
            "puJuros": 1.336383,
            "puSemDiaAdicionalPrimeiroPeriodo": 1001.336383,
            "puContratualComDiaAdicional": 1002.009612,
            "fatorDiAcumulado": 1.001024742370808,
            "produtorioFatorDi": 1.001024742370808,
            "fatorDiArredondado": 1.00102474,
            "fatorSpread": 1.000311324,
            "fator": 1.001336383,
            "spread": 0.04,
            "spreadAcumulado": 0.0003113239999998907,
            "fatorJurosAcumulado": 1.001336383,
            "dataTaxaDiIso": "2026-09-17",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "17/09/2026",
            "dataReferenciaTaxaDi": "17/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 3817094.291996,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1001.336383,
            "puAposEvento": 1001.336383,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-17",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "22/09/2026",
            "dataIso": "2026-09-22",
            "diaUtil": true,
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1002.000878,
            "puJuros": 2.000878,
            "puSemDiaAdicionalPrimeiroPeriodo": 1002.000878,
            "puContratualComDiaAdicional": 1002.674552,
            "fatorDiAcumulado": 1.0015331428169632,
            "produtorioFatorDi": 1.0015331428169632,
            "fatorDiArredondado": 1.00153314,
            "fatorSpread": 1.000467022,
            "fator": 1.002000878,
            "spread": 0.04,
            "spreadAcumulado": 0.00046702200000003913,
            "fatorJurosAcumulado": 1.002000878,
            "dataTaxaDiIso": "2026-09-18",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "18/09/2026",
            "dataReferenciaTaxaDi": "18/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4886758.282006,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1002.000878,
            "puAposEvento": 1002.000878,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-18",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "23/09/2026",
            "dataIso": "2026-09-23",
            "diaUtil": true,
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1002.665817,
            "puJuros": 2.665817,
            "puSemDiaAdicionalPrimeiroPeriodo": 1002.665817,
            "puContratualComDiaAdicional": 1003.339945,
            "fatorDiAcumulado": 1.002041801469537,
            "produtorioFatorDi": 1.002041801469537,
            "fatorDiArredondado": 1.0020418,
            "fatorSpread": 1.000622745,
            "fator": 1.002665817,
            "spread": 0.04,
            "spreadAcumulado": 0.0006227450000000356,
            "fatorJurosAcumulado": 1.002665817,
            "dataTaxaDiIso": "2026-09-21",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "21/09/2026",
            "dataReferenciaTaxaDi": "21/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4890001.189509,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1002.665817,
            "puAposEvento": 1002.665817,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-21",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "24/09/2026",
            "dataIso": "2026-09-24",
            "diaUtil": true,
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.331198,
            "puJuros": 3.331198,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.331198,
            "puContratualComDiaAdicional": 1004.00577,
            "fatorDiAcumulado": 1.0025507184596674,
            "produtorioFatorDi": 1.0025507184596674,
            "fatorDiArredondado": 1.00255072,
            "fatorSpread": 1.000778492,
            "fator": 1.003331198,
            "spread": 0.04,
            "spreadAcumulado": 0.0007784920000000195,
            "fatorJurosAcumulado": 1.003331198,
            "dataTaxaDiIso": "2026-09-22",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "22/09/2026",
            "dataReferenciaTaxaDi": "22/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4893246.252646,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.331198,
            "puAposEvento": 1003.331198,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-22",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "25/09/2026",
            "dataIso": "2026-09-25",
            "diaUtil": true,
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.997012,
            "puJuros": 3.997012,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.997012,
            "puContratualComDiaAdicional": 1004.672028,
            "fatorDiAcumulado": 1.0030598939185584,
            "produtorioFatorDi": 1.0030598939185584,
            "fatorDiArredondado": 1.00305989,
            "fatorSpread": 1.000934263,
            "fator": 1.003997012,
            "spread": 0.04,
            "spreadAcumulado": 0.0009342629999999907,
            "fatorJurosAcumulado": 1.003997012,
            "dataTaxaDiIso": "2026-09-23",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "23/09/2026",
            "dataReferenciaTaxaDi": "23/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4896493.427524,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.997012,
            "puAposEvento": 1003.997012,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-23",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "26/09/2026",
            "dataIso": "2026-09-26",
            "diaUtil": false,
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.997012,
            "puJuros": 3.997012,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.997012,
            "puContratualComDiaAdicional": 1004.672028,
            "fatorDiAcumulado": 1.0030598939185584,
            "produtorioFatorDi": 1.0030598939185584,
            "fatorDiArredondado": 1.00305989,
            "fatorSpread": 1.000934263,
            "fator": 1.003997012,
            "spread": 0.04,
            "spreadAcumulado": 0.0009342629999999907,
            "fatorJurosAcumulado": 1.003997012,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4896493.427524,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.997012,
            "puAposEvento": 1003.997012,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "27/09/2026",
            "dataIso": "2026-09-27",
            "diaUtil": false,
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.997012,
            "puJuros": 3.997012,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.997012,
            "puContratualComDiaAdicional": 1004.672028,
            "fatorDiAcumulado": 1.0030598939185584,
            "produtorioFatorDi": 1.0030598939185584,
            "fatorDiArredondado": 1.00305989,
            "fatorSpread": 1.000934263,
            "fator": 1.003997012,
            "spread": 0.04,
            "spreadAcumulado": 0.0009342629999999907,
            "fatorJurosAcumulado": 1.003997012,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4896493.427524,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.997012,
            "puAposEvento": 1003.997012,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "28/09/2026",
            "dataIso": "2026-09-28",
            "diaUtil": true,
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.663279,
            "puJuros": 4.663279,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.663279,
            "puContratualComDiaAdicional": 1005.33874,
            "fatorDiAcumulado": 1.0035693279774818,
            "produtorioFatorDi": 1.0035693279774818,
            "fatorDiArredondado": 1.00356933,
            "fatorSpread": 1.001090058,
            "fator": 1.004663279,
            "spread": 0.04,
            "spreadAcumulado": 0.0010900579999999493,
            "fatorJurosAcumulado": 1.004663279,
            "dataTaxaDiIso": "2026-09-24",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "24/09/2026",
            "dataReferenciaTaxaDi": "24/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4899742.811683,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1004.663279,
            "puAposEvento": 1004.663279,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-24",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "29/09/2026",
            "dataIso": "2026-09-29",
            "diaUtil": true,
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 4877.0,
            "valorNominal": 1000,
            "puAtualizado": 1005.329979,
            "puJuros": 5.329979,
            "puSemDiaAdicionalPrimeiroPeriodo": 1005.329979,
            "puContratualComDiaAdicional": 1006.005896,
            "fatorDiAcumulado": 1.004079020767775,
            "produtorioFatorDi": 1.004079020767775,
            "fatorDiArredondado": 1.00407902,
            "fatorSpread": 1.001245877,
            "fator": 1.005329979,
            "spread": 0.04,
            "spreadAcumulado": 0.0012458769999998953,
            "fatorJurosAcumulado": 1.005329979,
            "dataTaxaDiIso": "2026-09-25",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "25/09/2026",
            "dataReferenciaTaxaDi": "25/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 4902994.307583,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1005.329979,
            "puAposEvento": 1005.329979,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-25",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "30/09/2026",
            "dataIso": "2026-09-30",
            "diaUtil": true,
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17607.0,
            "valorNominal": 1000,
            "puAtualizado": 1005.997123,
            "puJuros": 5.997123,
            "puSemDiaAdicionalPrimeiroPeriodo": 1005.997123,
            "puContratualComDiaAdicional": 1006.673485,
            "fatorDiAcumulado": 1.0045889724208426,
            "produtorioFatorDi": 1.0045889724208426,
            "fatorDiArredondado": 1.00458897,
            "fatorSpread": 1.001401721,
            "fator": 1.005997123,
            "spread": 0.04,
            "spreadAcumulado": 0.0014017209999999114,
            "fatorJurosAcumulado": 1.005997123,
            "dataTaxaDiIso": "2026-09-28",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "28/09/2026",
            "dataReferenciaTaxaDi": "28/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17712591.344661,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1005.997123,
            "puAposEvento": 1005.997123,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-28",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "diaUtil": true,
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17607.0,
            "valorNominal": 1000,
            "puAtualizado": 1006.664711,
            "puJuros": 6.664711,
            "puSemDiaAdicionalPrimeiroPeriodo": 1006.664711,
            "puContratualComDiaAdicional": 1007.341529,
            "fatorDiAcumulado": 1.0050991830681555,
            "produtorioFatorDi": 1.0050991830681555,
            "fatorDiArredondado": 1.00509918,
            "fatorSpread": 1.001557589,
            "fator": 1.006664711,
            "spread": 0.04,
            "spreadAcumulado": 0.0015575889999999148,
            "fatorJurosAcumulado": 1.006664711,
            "dataTaxaDiIso": "2026-09-29",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "29/09/2026",
            "dataReferenciaTaxaDi": "29/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17724345.566577,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1006.664711,
            "puAposEvento": 1006.664711,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-29",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17607.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.332744,
            "puJuros": 7.332744,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.332744,
            "puContratualComDiaAdicional": 1008.010006,
            "fatorDiAcumulado": 1.0056096528412521,
            "produtorioFatorDi": 1.0056096528412521,
            "fatorDiArredondado": 1.00560965,
            "fatorSpread": 1.001713482,
            "fator": 1.007332744,
            "spread": 0.04,
            "spreadAcumulado": 0.0017134819999999884,
            "fatorJurosAcumulado": 1.007332744,
            "dataTaxaDiIso": "2026-09-30",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "30/09/2026",
            "dataReferenciaTaxaDi": "30/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17736107.623608,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.332744,
            "puAposEvento": 1007.332744,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-09-30",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "03/10/2026",
            "dataIso": "2026-10-03",
            "diaUtil": false,
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17607.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.332744,
            "puJuros": 7.332744,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.332744,
            "puContratualComDiaAdicional": 1008.010006,
            "fatorDiAcumulado": 1.0056096528412521,
            "produtorioFatorDi": 1.0056096528412521,
            "fatorDiArredondado": 1.00560965,
            "fatorSpread": 1.001713482,
            "fator": 1.007332744,
            "spread": 0.04,
            "spreadAcumulado": 0.0017134819999999884,
            "fatorJurosAcumulado": 1.007332744,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17736107.623608,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.332744,
            "puAposEvento": 1007.332744,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "04/10/2026",
            "dataIso": "2026-10-04",
            "diaUtil": false,
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17607.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.332744,
            "puJuros": 7.332744,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.332744,
            "puContratualComDiaAdicional": 1008.010006,
            "fatorDiAcumulado": 1.0056096528412521,
            "produtorioFatorDi": 1.0056096528412521,
            "fatorDiArredondado": 1.00560965,
            "fatorSpread": 1.001713482,
            "fator": 1.007332744,
            "spread": 0.04,
            "spreadAcumulado": 0.0017134819999999884,
            "fatorJurosAcumulado": 1.007332744,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17736107.623608,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.332744,
            "puAposEvento": 1007.332744,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "05/10/2026",
            "dataIso": "2026-10-05",
            "diaUtil": true,
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17607.0,
            "valorNominal": 1000,
            "puAtualizado": 1008.001219,
            "puJuros": 8.001219,
            "puSemDiaAdicionalPrimeiroPeriodo": 1008.001219,
            "puContratualComDiaAdicional": 1008.678928,
            "fatorDiAcumulado": 1.006120381871737,
            "produtorioFatorDi": 1.006120381871737,
            "fatorDiArredondado": 1.00612038,
            "fatorSpread": 1.001869398,
            "fator": 1.008001219,
            "spread": 0.04,
            "spreadAcumulado": 0.0018693979999999666,
            "fatorJurosAcumulado": 1.008001219,
            "dataTaxaDiIso": "2026-10-01",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDi": "01/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17747877.462933,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1008.001219,
            "puAposEvento": 1008.001219,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-01",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "06/10/2026",
            "dataIso": "2026-10-06",
            "diaUtil": true,
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20299.0,
            "valorNominal": 1000,
            "puAtualizado": 1008.67014,
            "puJuros": 8.67014,
            "puSemDiaAdicionalPrimeiroPeriodo": 1008.67014,
            "puContratualComDiaAdicional": 1009.348303,
            "fatorDiAcumulado": 1.0066313702912821,
            "produtorioFatorDi": 1.0066313702912821,
            "fatorDiArredondado": 1.00663137,
            "fatorSpread": 1.002025339,
            "fator": 1.00867014,
            "spread": 0.04,
            "spreadAcumulado": 0.002025339000000015,
            "fatorJurosAcumulado": 1.00867014,
            "dataTaxaDiIso": "2026-10-02",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDi": "02/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20474995.17186,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1008.67014,
            "puAposEvento": 1008.67014,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-02",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "07/10/2026",
            "dataIso": "2026-10-07",
            "diaUtil": true,
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20299.0,
            "valorNominal": 1000,
            "puAtualizado": 1009.339504,
            "puJuros": 9.339504,
            "puSemDiaAdicionalPrimeiroPeriodo": 1009.339504,
            "puContratualComDiaAdicional": 1010.018113,
            "fatorDiAcumulado": 1.0071426182316257,
            "produtorioFatorDi": 1.0071426182316257,
            "fatorDiArredondado": 1.00714262,
            "fatorSpread": 1.002181304,
            "fator": 1.009339504,
            "spread": 0.04,
            "spreadAcumulado": 0.0021813040000000505,
            "fatorJurosAcumulado": 1.009339504,
            "dataTaxaDiIso": "2026-10-05",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDi": "05/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20488582.591696,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1009.339504,
            "puAposEvento": 1009.339504,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-05",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "08/10/2026",
            "dataIso": "2026-10-08",
            "diaUtil": true,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.009313,
            "puJuros": 10.009313,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.009313,
            "puContratualComDiaAdicional": 1010.688369,
            "fatorDiAcumulado": 1.007654125824573,
            "produtorioFatorDi": 1.007654125824573,
            "fatorDiArredondado": 1.00765413,
            "fatorSpread": 1.002337293,
            "fator": 1.010009313,
            "spread": 0.04,
            "spreadAcumulado": 0.0023372930000000736,
            "fatorJurosAcumulado": 1.010009313,
            "dataTaxaDiIso": "2026-10-06",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDi": "06/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25047220.953087002,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1010.009313,
            "puAposEvento": 1010.009313,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-06",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "09/10/2026",
            "dataIso": "2026-10-09",
            "diaUtil": true,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.679557,
            "puJuros": 10.679557,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.679557,
            "puContratualComDiaAdicional": 1011.359069,
            "fatorDiAcumulado": 1.0081658932019968,
            "produtorioFatorDi": 1.0081658932019968,
            "fatorDiArredondado": 1.00816589,
            "fatorSpread": 1.002493307,
            "fator": 1.010679557,
            "spread": 0.04,
            "spreadAcumulado": 0.0024933069999999447,
            "fatorJurosAcumulado": 1.010679557,
            "dataTaxaDiIso": "2026-10-07",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDi": "07/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25063842.334043,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1010.679557,
            "puAposEvento": 1010.679557,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-07",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "10/10/2026",
            "dataIso": "2026-10-10",
            "diaUtil": false,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.679557,
            "puJuros": 10.679557,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.679557,
            "puContratualComDiaAdicional": 1011.359069,
            "fatorDiAcumulado": 1.0081658932019968,
            "produtorioFatorDi": 1.0081658932019968,
            "fatorDiArredondado": 1.00816589,
            "fatorSpread": 1.002493307,
            "fator": 1.010679557,
            "spread": 0.04,
            "spreadAcumulado": 0.0024933069999999447,
            "fatorJurosAcumulado": 1.010679557,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25063842.334043,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1010.679557,
            "puAposEvento": 1010.679557,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "11/10/2026",
            "dataIso": "2026-10-11",
            "diaUtil": false,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.679557,
            "puJuros": 10.679557,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.679557,
            "puContratualComDiaAdicional": 1011.359069,
            "fatorDiAcumulado": 1.0081658932019968,
            "produtorioFatorDi": 1.0081658932019968,
            "fatorDiArredondado": 1.00816589,
            "fatorSpread": 1.002493307,
            "fator": 1.010679557,
            "spread": 0.04,
            "spreadAcumulado": 0.0024933069999999447,
            "fatorJurosAcumulado": 1.010679557,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25063842.334043,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1010.679557,
            "puAposEvento": 1010.679557,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "12/10/2026",
            "dataIso": "2026-10-12",
            "diaUtil": false,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.679557,
            "puJuros": 10.679557,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.679557,
            "puContratualComDiaAdicional": 1011.359069,
            "fatorDiAcumulado": 1.0081658932019968,
            "produtorioFatorDi": 1.0081658932019968,
            "fatorDiArredondado": 1.00816589,
            "fatorSpread": 1.002493307,
            "fator": 1.010679557,
            "spread": 0.04,
            "spreadAcumulado": 0.0024933069999999447,
            "fatorJurosAcumulado": 1.010679557,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25063842.334043,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1010.679557,
            "puAposEvento": 1010.679557,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "13/10/2026",
            "dataIso": "2026-10-13",
            "diaUtil": true,
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.350256,
            "puJuros": 11.350256,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.350256,
            "puContratualComDiaAdicional": 1012.030214,
            "fatorDiAcumulado": 1.008677920495836,
            "produtorioFatorDi": 1.008677920495836,
            "fatorDiArredondado": 1.00867792,
            "fatorSpread": 1.002649345,
            "fator": 1.011350256,
            "spread": 0.04,
            "spreadAcumulado": 0.002649345000000025,
            "fatorJurosAcumulado": 1.011350256,
            "dataTaxaDiIso": "2026-10-08",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDi": "08/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25080474.998544,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.350256,
            "puAposEvento": 1011.350256,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-08",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "14/10/2026",
            "dataIso": "2026-10-14",
            "diaUtil": true,
            "diasUteis": 18,
            "diasUteisPeriodo": 18,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1012.021399,
            "puJuros": 12.021399,
            "puSemDiaAdicionalPrimeiroPeriodo": 1012.021399,
            "puContratualComDiaAdicional": 1012.701815,
            "fatorDiAcumulado": 1.0091902078380974,
            "produtorioFatorDi": 1.0091902078380974,
            "fatorDiArredondado": 1.00919021,
            "fatorSpread": 1.002805407,
            "fator": 1.012021399,
            "spread": 0.04,
            "spreadAcumulado": 0.002805407000000093,
            "fatorJurosAcumulado": 1.012021399,
            "dataTaxaDiIso": "2026-10-09",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDi": "09/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25097118.673801,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1012.021399,
            "puAposEvento": 1012.021399,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-09",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "15/10/2026",
            "dataIso": "2026-10-15",
            "diaUtil": true,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 24799.0,
            "valorNominal": 1000,
            "puAtualizado": 1012.692989,
            "puJuros": 12.692989,
            "puSemDiaAdicionalPrimeiroPeriodo": 1012.692989,
            "puContratualComDiaAdicional": 1013.373851,
            "fatorDiAcumulado": 1.0097027553608544,
            "produtorioFatorDi": 1.0097027553608544,
            "fatorDiArredondado": 1.00970276,
            "fatorSpread": 1.002961494,
            "fator": 1.012692989,
            "spread": 0.04,
            "spreadAcumulado": 0.002961494000000009,
            "fatorJurosAcumulado": 1.012692989,
            "dataTaxaDiIso": "2026-10-13",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDi": "13/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 25113773.434211,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1012.692989,
            "puAposEvento": 1012.692989,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-13",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "16/10/2026",
            "dataIso": "2026-10-16",
            "diaUtil": true,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 28075.0,
            "valorNominal": 1000,
            "puAtualizado": 1013.365013,
            "puJuros": 13.365013,
            "puSemDiaAdicionalPrimeiroPeriodo": 1013.365013,
            "puContratualComDiaAdicional": 1014.046332,
            "fatorDiAcumulado": 1.0102155631962468,
            "produtorioFatorDi": 1.0102155631962468,
            "fatorDiArredondado": 1.01021556,
            "fatorSpread": 1.003117605,
            "fator": 1.013365013,
            "spread": 0.04,
            "spreadAcumulado": 0.0031176049999999123,
            "fatorJurosAcumulado": 1.013365013,
            "dataTaxaDiIso": "2026-10-14",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDi": "14/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 28450222.739974998,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1013.365013,
            "puAposEvento": 1013.365013,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-14",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "17/10/2026",
            "dataIso": "2026-10-17",
            "diaUtil": false,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 28075.0,
            "valorNominal": 1000,
            "puAtualizado": 1013.365013,
            "puJuros": 13.365013,
            "puSemDiaAdicionalPrimeiroPeriodo": 1013.365013,
            "puContratualComDiaAdicional": 1014.046332,
            "fatorDiAcumulado": 1.0102155631962468,
            "produtorioFatorDi": 1.0102155631962468,
            "fatorDiArredondado": 1.01021556,
            "fatorSpread": 1.003117605,
            "fator": 1.013365013,
            "spread": 0.04,
            "spreadAcumulado": 0.0031176049999999123,
            "fatorJurosAcumulado": 1.013365013,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 28450222.739974998,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1013.365013,
            "puAposEvento": 1013.365013,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "18/10/2026",
            "dataIso": "2026-10-18",
            "diaUtil": false,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 28075.0,
            "valorNominal": 1000,
            "puAtualizado": 1013.365013,
            "puJuros": 13.365013,
            "puSemDiaAdicionalPrimeiroPeriodo": 1013.365013,
            "puContratualComDiaAdicional": 1014.046332,
            "fatorDiAcumulado": 1.0102155631962468,
            "produtorioFatorDi": 1.0102155631962468,
            "fatorDiArredondado": 1.01021556,
            "fatorSpread": 1.003117605,
            "fator": 1.013365013,
            "spread": 0.04,
            "spreadAcumulado": 0.0031176049999999123,
            "fatorJurosAcumulado": 1.013365013,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 28450222.739974998,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1013.365013,
            "puAposEvento": 1013.365013,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "19/10/2026",
            "dataIso": "2026-10-19",
            "diaUtil": true,
            "diasUteis": 21,
            "diasUteisPeriodo": 21,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 36812.0,
            "valorNominal": 1000,
            "puAtualizado": 1014.037493,
            "puJuros": 14.037493,
            "puSemDiaAdicionalPrimeiroPeriodo": 1014.037493,
            "puContratualComDiaAdicional": 1014.719258,
            "fatorDiAcumulado": 1.010728631476483,
            "produtorioFatorDi": 1.010728631476483,
            "fatorDiArredondado": 1.01072863,
            "fatorSpread": 1.00327374,
            "fator": 1.014037493,
            "spread": 0.04,
            "spreadAcumulado": 0.003273740000000025,
            "fatorJurosAcumulado": 1.014037493,
            "dataTaxaDiIso": "2026-10-15",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDi": "15/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 37328748.192316,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1014.037493,
            "puAposEvento": 1014.037493,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-15",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "20/10/2026",
            "dataIso": "2026-10-20",
            "diaUtil": true,
            "diasUteis": 22,
            "diasUteisPeriodo": 22,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 36812.0,
            "valorNominal": 1000,
            "puAtualizado": 1014.710418,
            "puJuros": 14.710418,
            "puSemDiaAdicionalPrimeiroPeriodo": 1014.710418,
            "puContratualComDiaAdicional": 1015.392641,
            "fatorDiAcumulado": 1.0112419603338372,
            "produtorioFatorDi": 1.0112419603338372,
            "fatorDiArredondado": 1.01124196,
            "fatorSpread": 1.003429899,
            "fator": 1.014710418,
            "spread": 0.04,
            "spreadAcumulado": 0.003429898999999903,
            "fatorJurosAcumulado": 1.014710418,
            "dataTaxaDiIso": "2026-10-16",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDi": "16/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 37353519.907416,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1014.710418,
            "puAposEvento": 1014.710418,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-16",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "21/10/2026",
            "dataIso": "2026-10-21",
            "diaUtil": true,
            "diasUteis": 23,
            "diasUteisPeriodo": 23,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 36812.0,
            "valorNominal": 1000,
            "puAtualizado": 1015.383789,
            "puJuros": 15.383789,
            "puSemDiaAdicionalPrimeiroPeriodo": 1015.383789,
            "puContratualComDiaAdicional": 1016.06646,
            "fatorDiAcumulado": 1.0117555499006514,
            "produtorioFatorDi": 1.0117555499006514,
            "fatorDiArredondado": 1.01175555,
            "fatorSpread": 1.003586083,
            "fator": 1.015383789,
            "spread": 0.04,
            "spreadAcumulado": 0.003586083000000073,
            "fatorJurosAcumulado": 1.015383789,
            "dataTaxaDiIso": "2026-10-19",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDi": "19/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 37378308.040667996,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1015.383789,
            "puAposEvento": 1015.383789,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-19",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "22/10/2026",
            "dataIso": "2026-10-22",
            "diaUtil": true,
            "diasUteis": 24,
            "diasUteisPeriodo": 24,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 36812.0,
            "valorNominal": 1000,
            "puAtualizado": 1016.057607,
            "puJuros": 16.057607,
            "puSemDiaAdicionalPrimeiroPeriodo": 1016.057607,
            "puContratualComDiaAdicional": 1016.740734,
            "fatorDiAcumulado": 1.012269400309335,
            "produtorioFatorDi": 1.012269400309335,
            "fatorDiArredondado": 1.0122694,
            "fatorSpread": 1.003742291,
            "fator": 1.016057607,
            "spread": 0.04,
            "spreadAcumulado": 0.0037422910000000087,
            "fatorJurosAcumulado": 1.016057607,
            "dataTaxaDiIso": "2026-10-20",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDi": "20/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 37403112.628883995,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1016.057607,
            "puAposEvento": 1016.057607,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-20",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "23/10/2026",
            "dataIso": "2026-10-23",
            "diaUtil": true,
            "diasUteis": 25,
            "diasUteisPeriodo": 25,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 37499.0,
            "valorNominal": 1000,
            "puAtualizado": 1016.73187,
            "puJuros": 16.73187,
            "puSemDiaAdicionalPrimeiroPeriodo": 1016.73187,
            "puContratualComDiaAdicional": 1017.415456,
            "fatorDiAcumulado": 1.012783511692364,
            "produtorioFatorDi": 1.012783511692364,
            "fatorDiArredondado": 1.01278351,
            "fatorSpread": 1.003898523,
            "fator": 1.01673187,
            "spread": 0.04,
            "spreadAcumulado": 0.0038985229999999316,
            "fatorJurosAcumulado": 1.01673187,
            "dataTaxaDiIso": "2026-10-21",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDi": "21/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 38126428.39313,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1016.73187,
            "puAposEvento": 1016.73187,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-21",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "24/10/2026",
            "dataIso": "2026-10-24",
            "diaUtil": false,
            "diasUteis": 25,
            "diasUteisPeriodo": 25,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 37499.0,
            "valorNominal": 1000,
            "puAtualizado": 1016.73187,
            "puJuros": 16.73187,
            "puSemDiaAdicionalPrimeiroPeriodo": 1016.73187,
            "puContratualComDiaAdicional": 1017.415456,
            "fatorDiAcumulado": 1.012783511692364,
            "produtorioFatorDi": 1.012783511692364,
            "fatorDiArredondado": 1.01278351,
            "fatorSpread": 1.003898523,
            "fator": 1.01673187,
            "spread": 0.04,
            "spreadAcumulado": 0.0038985229999999316,
            "fatorJurosAcumulado": 1.01673187,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 38126428.39313,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1016.73187,
            "puAposEvento": 1016.73187,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "25/10/2026",
            "dataIso": "2026-10-25",
            "diaUtil": false,
            "diasUteis": 25,
            "diasUteisPeriodo": 25,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 37499.0,
            "valorNominal": 1000,
            "puAtualizado": 1016.73187,
            "puJuros": 16.73187,
            "puSemDiaAdicionalPrimeiroPeriodo": 1016.73187,
            "puContratualComDiaAdicional": 1017.415456,
            "fatorDiAcumulado": 1.012783511692364,
            "produtorioFatorDi": 1.012783511692364,
            "fatorDiArredondado": 1.01278351,
            "fatorSpread": 1.003898523,
            "fator": 1.01673187,
            "spread": 0.04,
            "spreadAcumulado": 0.0038985229999999316,
            "fatorJurosAcumulado": 1.01673187,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 38126428.39313,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1016.73187,
            "puAposEvento": 1016.73187,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "26/10/2026",
            "dataIso": "2026-10-26",
            "diaUtil": true,
            "diasUteis": 26,
            "diasUteisPeriodo": 26,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 37499.0,
            "valorNominal": 1000,
            "puAtualizado": 1017.40658,
            "puJuros": 17.40658,
            "puSemDiaAdicionalPrimeiroPeriodo": 1017.40658,
            "puContratualComDiaAdicional": 1018.090614,
            "fatorDiAcumulado": 1.0132978841822824,
            "produtorioFatorDi": 1.0132978841822824,
            "fatorDiArredondado": 1.01329788,
            "fatorSpread": 1.00405478,
            "fator": 1.01740658,
            "spread": 0.04,
            "spreadAcumulado": 0.0040547799999999246,
            "fatorJurosAcumulado": 1.01740658,
            "dataTaxaDiIso": "2026-10-22",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDi": "22/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 38151729.34342,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1017.40658,
            "puAposEvento": 1017.40658,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-22",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "27/10/2026",
            "dataIso": "2026-10-27",
            "diaUtil": true,
            "diasUteis": 27,
            "diasUteisPeriodo": 27,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 37499.0,
            "valorNominal": 1000,
            "puAtualizado": 1018.081746,
            "puJuros": 18.081746,
            "puSemDiaAdicionalPrimeiroPeriodo": 1018.081746,
            "puContratualComDiaAdicional": 1018.766228,
            "fatorDiAcumulado": 1.0138125179117008,
            "produtorioFatorDi": 1.0138125179117008,
            "fatorDiArredondado": 1.01381252,
            "fatorSpread": 1.004211061,
            "fator": 1.018081746,
            "spread": 0.04,
            "spreadAcumulado": 0.004211060999999905,
            "fatorJurosAcumulado": 1.018081746,
            "dataTaxaDiIso": "2026-10-23",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDi": "23/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 38177047.393254,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1018.081746,
            "puAposEvento": 1018.081746,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          }
        ],
        "taxaTexto": "CDI + 4.00% a.a.",
        "pu": 1018.081746,
        "principalResidual": 1000,
        "valor": 38177047.393254,
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
        "dataPrimeiraIntegralizacaoIso": "2026-09-17",
        "importacaoFundingCaixa": {
          "sourceSheet": "75ª PU SR",
          "sourcePu": 1018.081756,
          "sourceBalance": 38177047.768244,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "17/09/2026",
          "periodoFim": "27/10/2026",
          "puFinal": 1018.081746,
          "diasAcumulacao": 27
        },
        "sourceClass": "SR1",
        "serieJuridica": 1,
        "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
        "lagBusinessDays": 2,
        "diasAdicionaisPrimeiroPeriodo": 0,
        "diasAdicionaisPrimeiroPeriodoTs": 1,
        "firstPeriodControlDecision": {
          "additionalBusinessDays": 0,
          "confirmedBy": "Leonardo",
          "confirmationDate": "2026-10-30",
          "status": "convencao_operacional_aprovada_com_ressalva_contratual",
          "instruction": "Pode seguir sem esse acrescimo de dia.",
          "description": "PU principal sem o DU adicional do primeiro periodo. Clausula do TS preservada como ressalva para juridico; cenario literal separado."
        },
        "puComparacaoSemDiaAdicional": 1018.081746,
        "puContratualComDiaAdicional": 1018.766228
      }
    ]
  },
  "sources": [
    {
      "name": "Eventos de funding e caixa",
      "date": "27/10/2026",
      "file": "fundings e caixa cras carteiras.xlsx"
    }
  ],
  "caixaHistorico": {
    "2026-10-27": {
      "total": 440724.44999999995,
      "totalCalculado": 440724.44999999995,
      "accounts": {
        "cc": 186285.24,
        "contaAplicacao": 310758.11,
        "fundoDespesas": 56318.899999999994
      }
    },
    "2026-10-26": {
      "total": 440571.43000000005,
      "totalCalculado": 440571.43000000005,
      "accounts": {
        "cc": 186285.24,
        "contaAplicacao": 310605.09,
        "fundoDespesas": 56318.899999999994
      }
    },
    "2026-10-23": {
      "total": 440418.49,
      "totalCalculado": 440418.49,
      "accounts": {
        "cc": 186285.24,
        "contaAplicacao": 310452.15,
        "fundoDespesas": 56318.899999999994
      }
    },
    "2026-10-22": {
      "total": 429418.77,
      "totalCalculado": 429418.77,
      "accounts": {
        "cc": 175438.39,
        "contaAplicacao": 310299.28,
        "fundoDespesas": 56318.899999999994
      }
    },
    "2026-10-21": {
      "total": 295840.55999999994,
      "totalCalculado": 295840.55999999994,
      "accounts": {
        "cc": 42012.97,
        "contaAplicacao": 310146.49,
        "fundoDespesas": 56318.899999999994
      }
    },
    "2026-10-20": {
      "total": 295687.83999999997,
      "totalCalculado": 295687.83999999997,
      "accounts": {
        "cc": 42012.97,
        "contaAplicacao": 309993.77,
        "fundoDespesas": 56318.899999999994
      }
    },
    "2026-10-19": {
      "total": 295682.45,
      "totalCalculado": 295682.45,
      "accounts": {
        "cc": 355750.01,
        "contaAplicacao": 0.0,
        "fundoDespesas": 60067.56
      }
    },
    "2026-10-16": {
      "total": 173283.55,
      "totalCalculado": 173283.55,
      "accounts": {
        "cc": 233351.11,
        "contaAplicacao": 0.0,
        "fundoDespesas": 60067.56
      }
    },
    "2026-10-15": {
      "total": 130074.72,
      "totalCalculado": 130074.72,
      "accounts": {
        "cc": 190142.28,
        "contaAplicacao": 0.0,
        "fundoDespesas": 60067.56
      }
    },
    "2026-10-14": {
      "total": 130074.72,
      "totalCalculado": 130074.72,
      "accounts": {
        "cc": 190142.28,
        "contaAplicacao": 0.0,
        "fundoDespesas": 60067.56
      }
    },
    "2026-10-13": {
      "total": 130074.72,
      "totalCalculado": 130074.72,
      "accounts": {
        "cc": 190142.28,
        "contaAplicacao": 0.0,
        "fundoDespesas": 60067.56
      }
    },
    "2026-10-09": {
      "total": 130074.59,
      "totalCalculado": 130074.59,
      "accounts": {
        "cc": 194628.81,
        "contaAplicacao": 0.0,
        "fundoDespesas": 64554.22
      }
    },
    "2026-10-08": {
      "total": 30069.979999999996,
      "totalCalculado": 30069.979999999996,
      "accounts": {
        "cc": 94624.2,
        "contaAplicacao": 0.0,
        "fundoDespesas": 64554.22
      }
    },
    "2026-10-07": {
      "total": 4434565.0600000005,
      "totalCalculado": 4434565.0600000005,
      "accounts": {
        "cc": 94624.2,
        "contaAplicacao": 4404495.08,
        "fundoDespesas": 64554.22
      }
    },
    "2026-10-06": {
      "total": 4432396.29,
      "totalCalculado": 4432396.29,
      "accounts": {
        "cc": 94624.2,
        "contaAplicacao": 4402326.31,
        "fundoDespesas": 64554.22
      }
    },
    "2026-10-05": {
      "total": 1631256.85,
      "totalCalculado": 1631256.85,
      "accounts": {
        "cc": 94624.2,
        "contaAplicacao": 1601186.87,
        "fundoDespesas": 64554.22
      }
    },
    "2026-10-02": {
      "total": 1630645.29,
      "totalCalculado": 1630645.29,
      "accounts": {
        "cc": 94623.82,
        "contaAplicacao": 1600575.69,
        "fundoDespesas": 64554.22
      }
    },
    "2026-10-01": {
      "total": 1630387.09,
      "totalCalculado": 1630387.09,
      "accounts": {
        "cc": 94976.47,
        "contaAplicacao": 1599964.84,
        "fundoDespesas": 64554.22
      }
    },
    "2026-09-30": {
      "total": 1630385.28,
      "totalCalculado": 1630385.28,
      "accounts": {
        "cc": 1694939.5,
        "contaAplicacao": 0.0,
        "fundoDespesas": 64554.22
      }
    },
    "2026-09-29": {
      "total": 15069.959999999992,
      "totalCalculado": 15069.959999999992,
      "accounts": {
        "cc": 79624.18,
        "contaAplicacao": 0.0,
        "fundoDespesas": 64554.22
      }
    },
    "2026-09-28": {
      "total": 15069.959999999992,
      "totalCalculado": 15069.959999999992,
      "accounts": {
        "cc": 79624.18,
        "contaAplicacao": 0.0,
        "fundoDespesas": 64554.22
      }
    },
    "2026-09-25": {
      "total": 15069.669999999998,
      "totalCalculado": 15069.669999999998,
      "accounts": {
        "cc": 125069.67,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-24": {
      "total": 15069.669999999998,
      "totalCalculado": 15069.669999999998,
      "accounts": {
        "cc": 125069.67,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-23": {
      "total": 15069.669999999998,
      "totalCalculado": 15069.669999999998,
      "accounts": {
        "cc": 125069.67,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-22": {
      "total": 4869906.14,
      "totalCalculado": 4869906.14,
      "accounts": {
        "cc": 1078466.26,
        "contaAplicacao": 3901439.88,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-21": {
      "total": 3802003.21,
      "totalCalculado": 3802003.21,
      "accounts": {
        "cc": 12052.31,
        "contaAplicacao": 3899950.9,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-18": {
      "total": 3802000.0,
      "totalCalculado": 3802000.0,
      "accounts": {
        "cc": 3912000.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-17": {
      "total": 0.0,
      "totalCalculado": -10000.0,
      "accounts": {
        "cc": 100000.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-16": {
      "total": 0.0,
      "totalCalculado": -110000.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-15": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-14": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-11": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-08": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-04": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-03": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-01": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-31": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-28": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-25": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-21": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-14": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-12": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-11": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-07": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-05": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-04": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-08-03": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-31": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-28": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-21": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-15": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-14": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-08": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-07": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-03": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-07-01": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-25": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-15": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-12": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-11": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-08": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-05": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-03": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-06-01": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-28": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-25": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-21": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-15": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-14": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-12": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-11": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-08": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-07": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-05": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-05-04": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-28": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-15": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-14": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-08": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-07": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-04-01": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-31": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-25": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-12": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-11": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-05": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-04": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-03": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-03-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-25": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-12": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-11": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-10": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-05": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-04": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-03": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-02-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-28": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-27": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-21": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-20": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-15": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-14": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-13": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-12": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-09": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-08": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-07": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-06": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-05": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-01-02": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-31": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-26": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-19": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2025-12-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    }
  },
  "fundingCashIssues": [],
  "cadastroSeriesDocumentadas": [
    {
      "cra": "cra-carteira-75",
      "number": 75,
      "sourceClass": "SR1",
      "class": "SR1",
      "label": "Senior",
      "kind": "sr",
      "legalSeries": 1,
      "ifCodigo": "CRA02600594",
      "spreadAa": 0.04,
      "method": "di_spread_ts_252",
      "maturity": "2027-09-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA02600594",
        "legalSeries": 1,
        "registeredMaturity": "30/09/2027",
        "registeredStart": "10/09/2026",
        "registeredRate": "4,0000",
        "registeredLag": "D-2",
        "issuedQuantity": "39.900",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA02600594.pdf",
        "documentId": "75-08"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-09-17",
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "75-01",
        "file": "CRA 75 - 1º adit. Termo de Securitização - 03 09 2026.pdf",
        "name": "CRA 75 - 1º adit. Termo de Securitização - 03 09 2026.pdf",
        "pages": [
          6,
          7
        ],
        "sha256": "de2ad8c0481beadbf902d6e4050d6b8d7f86611eb418d44a28bf06a1aa3a363a"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco"
      ],
      "calculationStatus": "recalculo_documentado"
    },
    {
      "cra": "cra-carteira-75",
      "number": 75,
      "sourceClass": "SUB",
      "class": "SUB",
      "label": "Subordinada",
      "kind": "sub",
      "legalSeries": 2,
      "ifCodigo": "CRA02600595",
      "spreadAa": null,
      "method": "residual_sem_carteira",
      "maturity": "2027-09-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": null,
      "firstPeriodAdditionalBusinessDays": null,
      "controlFirstPeriodAdditionalBusinessDays": null,
      "b3": {
        "ifCodigo": "CRA02600595",
        "legalSeries": 2,
        "registeredMaturity": "30/09/2027",
        "registeredStart": "10/09/2026",
        "registeredRate": "0,0001",
        "registeredLag": null,
        "issuedQuantity": "100",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA02600595.pdf",
        "documentId": "75-00"
      },
      "positionInSource": false,
      "sourceFirstIntegration": null,
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "75-01",
        "file": "CRA 75 - 1º adit. Termo de Securitização - 03 09 2026.pdf",
        "name": "CRA 75 - 1º adit. Termo de Securitização - 03 09 2026.pdf",
        "pages": [
          6,
          7
        ],
        "sha256": "de2ad8c0481beadbf902d6e4050d6b8d7f86611eb418d44a28bf06a1aa3a363a"
      },
      "pending": [
        "Sem posicao integralizada informada; nao presumida como zero ou como quantidade emitida"
      ],
      "calculationStatus": "cadastro_sem_posicao"
    }
  ]
};
