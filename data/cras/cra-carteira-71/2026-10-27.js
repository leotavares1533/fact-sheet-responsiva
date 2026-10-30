window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-71"] = window.LAMINA_CRA_DAILY["cra-carteira-71"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-71"]["2026-10-27"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-71",
    "dateKey": "2026-10-27",
    "reportDate": "27/10/2026",
    "revisionId": "20261027-documentos-20261030-3a880273",
    "importedAt": "2026-10-29T14:03:14.605799-03:00",
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
    "id": "cra-carteira-71",
    "name": "CRA Carteira 71",
    "dateKey": "2026-10-27",
    "dataBase": "27/10/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 41943.22
  },
  "caixa": {
    "accounts": {
      "cc": 41743.22,
      "contaAplicacao": 110200.0,
      "fundoDespesas": 110000.0
    },
    "total": 41943.22,
    "totalCalculado": 41943.22,
    "fonte": "Saldo Caixa",
    "arquivoOrigem": "fundings e caixa cras carteiras.xlsx",
    "observacao": "Total informado preservado. Fundo de despesas deduzido uma unica vez. Divergencias sinalizadas."
  },
  "passivo": {
    "fundingTotal": 20555853.08244,
    "subordinadaTotal": null,
    "subordinadaPuResidual": null,
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior 1a serie",
        "ifCodigo": "CRA026004HH",
        "ehFunding": true,
        "quantidade": 20000.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.075,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-10-01",
        "dataInicio": "01/10/2026",
        "dataVencimentoIso": "2031-05-30",
        "dataVencimento": "30/05/2031",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "tipo": "integralizacao",
            "quantidade": 1000.0,
            "valor": 1000000.0,
            "valorEventoReais": 1000000.0,
            "sourceSheet": "71ª PU SR",
            "sourceRow": 4,
            "status": "realizado"
          },
          {
            "data": "08/10/2026",
            "dataIso": "2026-10-08",
            "tipo": "integralizacao",
            "quantidade": 9255.0,
            "valor": 9291849.65,
            "valorEventoReais": 9291849.65,
            "sourceSheet": "71ª PU SR",
            "sourceRow": 5,
            "status": "realizado"
          },
          {
            "data": "19/10/2026",
            "dataIso": "2026-10-19",
            "tipo": "integralizacao",
            "quantidade": 6601.0,
            "valor": 6658959.76,
            "valorEventoReais": 6658959.76,
            "sourceSheet": "71ª PU SR",
            "sourceRow": 6,
            "status": "realizado"
          },
          {
            "data": "20/10/2026",
            "dataIso": "2026-10-20",
            "tipo": "integralizacao",
            "quantidade": 3144.0,
            "valor": 3174127.32,
            "valorEventoReais": 3174127.32,
            "sourceSheet": "71ª PU SR",
            "sourceRow": 7,
            "status": "realizado"
          }
        ],
        "historicoPu": [
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.0,
            "puContratualComDiaAdicional": 1000.795054,
            "fatorDiAcumulado": 1.0,
            "produtorioFatorDi": 1.0,
            "fatorDiArredondado": 1.0,
            "fatorSpread": 1.0,
            "fator": 1.0,
            "spread": 0.075,
            "spreadAcumulado": 0.0,
            "fatorJurosAcumulado": 1.0,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1000000.0,
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
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.795054,
            "puJuros": 0.795054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.795054,
            "puContratualComDiaAdicional": 1001.590741,
            "fatorDiAcumulado": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "fator": 1.000795054,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "fatorJurosAcumulado": 1.000795054,
            "dataTaxaDiIso": "2026-09-30",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "30/09/2026",
            "dataReferenciaTaxaDi": "30/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1000795.054,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.795054,
            "puJuros": 0.795054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.795054,
            "puContratualComDiaAdicional": 1001.590741,
            "fatorDiAcumulado": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "fator": 1.000795054,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "fatorJurosAcumulado": 1.000795054,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1000795.054,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.795054,
            "puJuros": 0.795054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.795054,
            "puContratualComDiaAdicional": 1001.590741,
            "fatorDiAcumulado": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "fator": 1.000795054,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "fatorJurosAcumulado": 1.000795054,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1000795.054,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1001.590741,
            "puJuros": 1.590741,
            "puSemDiaAdicionalPrimeiroPeriodo": 1001.590741,
            "puContratualComDiaAdicional": 1002.387054,
            "fatorDiAcumulado": 1.0010160179420944,
            "produtorioFatorDi": 1.0010160179420944,
            "fatorDiArredondado": 1.00101602,
            "fatorSpread": 1.000574138,
            "fator": 1.001590741,
            "spread": 0.075,
            "spreadAcumulado": 0.0005741379999999463,
            "fatorJurosAcumulado": 1.001590741,
            "dataTaxaDiIso": "2026-10-01",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDi": "01/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1001590.7409999999,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1001.590741,
            "puAposEvento": 1001.590741,
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
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1002.387054,
            "puJuros": 2.387054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1002.387054,
            "puContratualComDiaAdicional": 1003.184011,
            "fatorDiAcumulado": 1.0015244139572868,
            "produtorioFatorDi": 1.0015244139572868,
            "fatorDiArredondado": 1.00152441,
            "fatorSpread": 1.000861331,
            "fator": 1.002387054,
            "spread": 0.075,
            "spreadAcumulado": 0.0008613310000000762,
            "fatorJurosAcumulado": 1.002387054,
            "dataTaxaDiIso": "2026-10-02",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDi": "02/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1002387.054,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1002.387054,
            "puAposEvento": 1002.387054,
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
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 1000.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.184011,
            "puJuros": 3.184011,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.184011,
            "puContratualComDiaAdicional": 1003.981594,
            "fatorDiAcumulado": 1.0020330681766474,
            "produtorioFatorDi": 1.0020330681766474,
            "fatorDiArredondado": 1.00203307,
            "fatorSpread": 1.001148606,
            "fator": 1.003184011,
            "spread": 0.075,
            "spreadAcumulado": 0.0011486060000001075,
            "fatorJurosAcumulado": 1.003184011,
            "dataTaxaDiIso": "2026-10-05",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDi": "05/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 1003184.011,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.184011,
            "puAposEvento": 1003.184011,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.981594,
            "puJuros": 3.981594,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.981594,
            "puContratualComDiaAdicional": 1004.779812,
            "fatorDiAcumulado": 1.002541980731313,
            "produtorioFatorDi": 1.002541980731313,
            "fatorDiArredondado": 1.00254198,
            "fatorSpread": 1.001435964,
            "fator": 1.003981594,
            "spread": 0.075,
            "spreadAcumulado": 0.0014359639999999008,
            "fatorJurosAcumulado": 1.003981594,
            "dataTaxaDiIso": "2026-10-06",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDi": "06/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10295831.24647,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "2026-10-07",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDi": "07/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10304016.97206,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10304016.97206,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10304016.97206,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10304016.97206,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1005.578666,
            "puJuros": 5.578666,
            "puSemDiaAdicionalPrimeiroPeriodo": 1005.578666,
            "puContratualComDiaAdicional": 1006.378158,
            "fatorDiAcumulado": 1.0035605813714388,
            "produtorioFatorDi": 1.0035605813714388,
            "fatorDiArredondado": 1.00356058,
            "fatorSpread": 1.002010926,
            "fator": 1.005578666,
            "spread": 0.075,
            "spreadAcumulado": 0.0020109260000000795,
            "fatorJurosAcumulado": 1.005578666,
            "dataTaxaDiIso": "2026-10-08",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDi": "08/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10312209.21983,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1005.578666,
            "puAposEvento": 1005.578666,
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
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1006.378158,
            "puJuros": 6.378158,
            "puSemDiaAdicionalPrimeiroPeriodo": 1006.378158,
            "puContratualComDiaAdicional": 1007.178284,
            "fatorDiAcumulado": 1.0040702697195056,
            "produtorioFatorDi": 1.0040702697195056,
            "fatorDiArredondado": 1.00407027,
            "fatorSpread": 1.002298532,
            "fator": 1.006378158,
            "spread": 0.075,
            "spreadAcumulado": 0.0022985319999999643,
            "fatorJurosAcumulado": 1.006378158,
            "dataTaxaDiIso": "2026-10-09",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDi": "09/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10320408.01029,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1006.378158,
            "puAposEvento": 1006.378158,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.178284,
            "puJuros": 7.178284,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.178284,
            "puContratualComDiaAdicional": 1007.97904,
            "fatorDiAcumulado": 1.0045802169280906,
            "produtorioFatorDi": 1.0045802169280906,
            "fatorDiArredondado": 1.00458022,
            "fatorSpread": 1.002586219,
            "fator": 1.007178284,
            "spread": 0.075,
            "spreadAcumulado": 0.0025862189999998897,
            "fatorJurosAcumulado": 1.007178284,
            "dataTaxaDiIso": "2026-10-13",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDi": "13/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10328613.30242,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.97904,
            "puJuros": 7.97904,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.97904,
            "puContratualComDiaAdicional": 1008.780441,
            "fatorDiAcumulado": 1.0050904231286641,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "fator": 1.00797904,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "fatorJurosAcumulado": 1.00797904,
            "dataTaxaDiIso": "2026-10-14",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDi": "14/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10336825.055200001,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.97904,
            "puJuros": 7.97904,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.97904,
            "puContratualComDiaAdicional": 1008.780441,
            "fatorDiAcumulado": 1.0050904231286641,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "fator": 1.00797904,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "fatorJurosAcumulado": 1.00797904,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10336825.055200001,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 10255.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.97904,
            "puJuros": 7.97904,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.97904,
            "puContratualComDiaAdicional": 1008.780441,
            "fatorDiAcumulado": 1.0050904231286641,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "fator": 1.00797904,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "fatorJurosAcumulado": 1.00797904,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 10336825.055200001,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 16856.0,
            "valorNominal": 1000,
            "puAtualizado": 1008.780441,
            "puJuros": 8.780441,
            "puSemDiaAdicionalPrimeiroPeriodo": 1008.780441,
            "puContratualComDiaAdicional": 1009.582472,
            "fatorDiAcumulado": 1.0056008884527625,
            "produtorioFatorDi": 1.0056008884527625,
            "fatorDiArredondado": 1.00560089,
            "fatorSpread": 1.003161842,
            "fator": 1.008780441,
            "spread": 0.075,
            "spreadAcumulado": 0.0031618419999999148,
            "fatorJurosAcumulado": 1.008780441,
            "dataTaxaDiIso": "2026-10-15",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDi": "15/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17004003.113495998,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1008.780441,
            "puAposEvento": 1008.780441,
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
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1009.582472,
            "puJuros": 9.582472,
            "puSemDiaAdicionalPrimeiroPeriodo": 1009.582472,
            "puContratualComDiaAdicional": 1010.38515,
            "fatorDiAcumulado": 1.0061116130319898,
            "produtorioFatorDi": 1.0061116130319898,
            "fatorDiArredondado": 1.00611161,
            "fatorSpread": 1.003449778,
            "fator": 1.009582472,
            "spread": 0.075,
            "spreadAcumulado": 0.0034497780000000144,
            "fatorJurosAcumulado": 1.009582472,
            "dataTaxaDiIso": "2026-10-16",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDi": "16/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20191649.44,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1009.582472,
            "puAposEvento": 1009.582472,
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
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.38515,
            "puJuros": 10.38515,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.38515,
            "puContratualComDiaAdicional": 1011.188457,
            "fatorDiAcumulado": 1.0066225969980165,
            "produtorioFatorDi": 1.0066225969980165,
            "fatorDiArredondado": 1.0066226,
            "fatorSpread": 1.003737796,
            "fator": 1.01038515,
            "spread": 0.075,
            "spreadAcumulado": 0.0037377960000000154,
            "fatorJurosAcumulado": 1.01038515,
            "dataTaxaDiIso": "2026-10-19",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDi": "19/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20207703.0,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1010.38515,
            "puAposEvento": 1010.38515,
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
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.188457,
            "puJuros": 11.188457,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.188457,
            "puContratualComDiaAdicional": 1011.992403,
            "fatorDiAcumulado": 1.0071338404825798,
            "produtorioFatorDi": 1.0071338404825798,
            "fatorDiArredondado": 1.00713384,
            "fatorSpread": 1.004025897,
            "fator": 1.011188457,
            "spread": 0.075,
            "spreadAcumulado": 0.0040258970000000005,
            "fatorJurosAcumulado": 1.011188457,
            "dataTaxaDiIso": "2026-10-20",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDi": "20/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20223769.14,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.992403,
            "puJuros": 11.992403,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.992403,
            "puContratualComDiaAdicional": 1012.796998,
            "fatorDiAcumulado": 1.007645343617484,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "fator": 1.011992403,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "fatorJurosAcumulado": 1.011992403,
            "dataTaxaDiIso": "2026-10-21",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDi": "21/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20239848.06,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.992403,
            "puJuros": 11.992403,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.992403,
            "puContratualComDiaAdicional": 1012.796998,
            "fatorDiAcumulado": 1.007645343617484,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "fator": 1.011992403,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "fatorJurosAcumulado": 1.011992403,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20239848.06,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.992403,
            "puJuros": 11.992403,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.992403,
            "puContratualComDiaAdicional": 1012.796998,
            "fatorDiAcumulado": 1.007645343617484,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "fator": 1.011992403,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "fatorJurosAcumulado": 1.011992403,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20239848.06,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1012.796998,
            "puJuros": 12.796998,
            "puSemDiaAdicionalPrimeiroPeriodo": 1012.796998,
            "puContratualComDiaAdicional": 1013.602223,
            "fatorDiAcumulado": 1.0081571065346004,
            "produtorioFatorDi": 1.0081571065346004,
            "fatorDiArredondado": 1.00815711,
            "fatorSpread": 1.004602346,
            "fator": 1.012796998,
            "spread": 0.075,
            "spreadAcumulado": 0.004602345999999979,
            "fatorJurosAcumulado": 1.012796998,
            "dataTaxaDiIso": "2026-10-22",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDi": "22/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20255939.96,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1012.796998,
            "puAposEvento": 1012.796998,
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
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
            "valorNominal": 1000,
            "puAtualizado": 1013.602223,
            "puJuros": 13.602223,
            "puSemDiaAdicionalPrimeiroPeriodo": 1013.602223,
            "puContratualComDiaAdicional": 1014.408089,
            "fatorDiAcumulado": 1.0086691293658672,
            "produtorioFatorDi": 1.0086691293658672,
            "fatorDiArredondado": 1.00866913,
            "fatorSpread": 1.004890695,
            "fator": 1.013602223,
            "spread": 0.075,
            "spreadAcumulado": 0.004890695000000056,
            "fatorJurosAcumulado": 1.013602223,
            "dataTaxaDiIso": "2026-10-23",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDi": "23/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20272044.46,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1013.602223,
            "puAposEvento": 1013.602223,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          }
        ],
        "taxaTexto": "CDI + 7.50% a.a.",
        "pu": 1013.602223,
        "principalResidual": 1000,
        "valor": 20272044.46,
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
        "dataPrimeiraIntegralizacaoIso": "2026-10-01",
        "importacaoFundingCaixa": {
          "sourceSheet": "71ª PU SR",
          "sourcePu": 1013.602213,
          "sourceBalance": 20272044.25704786,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "01/10/2026",
          "periodoFim": "27/10/2026",
          "puFinal": 1013.602223,
          "diasAcumulacao": 17
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
        "puComparacaoSemDiaAdicional": 1013.602223,
        "puContratualComDiaAdicional": 1014.408089
      },
      {
        "classe": "SR2",
        "tipo": "sr",
        "label": "Senior 2a serie",
        "ifCodigo": "CRA026004HI",
        "ehFunding": true,
        "quantidade": 280.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.075,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-10-01",
        "dataInicio": "01/10/2026",
        "dataVencimentoIso": "2031-05-30",
        "dataVencimento": "30/05/2031",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "tipo": "integralizacao",
            "quantidade": 140.0,
            "valor": 140000.0,
            "valorEventoReais": 140000.0,
            "sourceSheet": "71ª MEZ A",
            "sourceRow": 4,
            "status": "realizado"
          },
          {
            "data": "20/10/2026",
            "dataIso": "2026-10-20",
            "tipo": "integralizacao",
            "quantidade": 140.0,
            "valor": 141341.55,
            "valorEventoReais": 141341.55,
            "sourceSheet": "71ª MEZ A",
            "sourceRow": 5,
            "status": "realizado"
          }
        ],
        "historicoPu": [
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.0,
            "puContratualComDiaAdicional": 1000.795054,
            "fatorDiAcumulado": 1.0,
            "produtorioFatorDi": 1.0,
            "fatorDiArredondado": 1.0,
            "fatorSpread": 1.0,
            "fator": 1.0,
            "spread": 0.075,
            "spreadAcumulado": 0.0,
            "fatorJurosAcumulado": 1.0,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140000.0,
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
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.795054,
            "puJuros": 0.795054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.795054,
            "puContratualComDiaAdicional": 1001.590741,
            "fatorDiAcumulado": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "fator": 1.000795054,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "fatorJurosAcumulado": 1.000795054,
            "dataTaxaDiIso": "2026-09-30",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "30/09/2026",
            "dataReferenciaTaxaDi": "30/09/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140111.30756000002,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.795054,
            "puJuros": 0.795054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.795054,
            "puContratualComDiaAdicional": 1001.590741,
            "fatorDiAcumulado": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "fator": 1.000795054,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "fatorJurosAcumulado": 1.000795054,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140111.30756000002,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1000.795054,
            "puJuros": 0.795054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1000.795054,
            "puContratualComDiaAdicional": 1001.590741,
            "fatorDiAcumulado": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "fator": 1.000795054,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "fatorJurosAcumulado": 1.000795054,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140111.30756000002,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1001.590741,
            "puJuros": 1.590741,
            "puSemDiaAdicionalPrimeiroPeriodo": 1001.590741,
            "puContratualComDiaAdicional": 1002.387054,
            "fatorDiAcumulado": 1.0010160179420944,
            "produtorioFatorDi": 1.0010160179420944,
            "fatorDiArredondado": 1.00101602,
            "fatorSpread": 1.000574138,
            "fator": 1.001590741,
            "spread": 0.075,
            "spreadAcumulado": 0.0005741379999999463,
            "fatorJurosAcumulado": 1.001590741,
            "dataTaxaDiIso": "2026-10-01",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDi": "01/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140222.70374,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1001.590741,
            "puAposEvento": 1001.590741,
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
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1002.387054,
            "puJuros": 2.387054,
            "puSemDiaAdicionalPrimeiroPeriodo": 1002.387054,
            "puContratualComDiaAdicional": 1003.184011,
            "fatorDiAcumulado": 1.0015244139572868,
            "produtorioFatorDi": 1.0015244139572868,
            "fatorDiArredondado": 1.00152441,
            "fatorSpread": 1.000861331,
            "fator": 1.002387054,
            "spread": 0.075,
            "spreadAcumulado": 0.0008613310000000762,
            "fatorJurosAcumulado": 1.002387054,
            "dataTaxaDiIso": "2026-10-02",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDi": "02/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140334.18756,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1002.387054,
            "puAposEvento": 1002.387054,
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
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.184011,
            "puJuros": 3.184011,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.184011,
            "puContratualComDiaAdicional": 1003.981594,
            "fatorDiAcumulado": 1.0020330681766474,
            "produtorioFatorDi": 1.0020330681766474,
            "fatorDiArredondado": 1.00203307,
            "fatorSpread": 1.001148606,
            "fator": 1.003184011,
            "spread": 0.075,
            "spreadAcumulado": 0.0011486060000001075,
            "fatorJurosAcumulado": 1.003184011,
            "dataTaxaDiIso": "2026-10-05",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDi": "05/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140445.76154,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.184011,
            "puAposEvento": 1003.184011,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1003.981594,
            "puJuros": 3.981594,
            "puSemDiaAdicionalPrimeiroPeriodo": 1003.981594,
            "puContratualComDiaAdicional": 1004.779812,
            "fatorDiAcumulado": 1.002541980731313,
            "produtorioFatorDi": 1.002541980731313,
            "fatorDiArredondado": 1.00254198,
            "fatorSpread": 1.001435964,
            "fator": 1.003981594,
            "spread": 0.075,
            "spreadAcumulado": 0.0014359639999999008,
            "fatorJurosAcumulado": 1.003981594,
            "dataTaxaDiIso": "2026-10-06",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDi": "06/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140557.42316,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "2026-10-07",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDi": "07/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140669.17368,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140669.17368,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140669.17368,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1004.779812,
            "puJuros": 4.779812,
            "puSemDiaAdicionalPrimeiroPeriodo": 1004.779812,
            "puContratualComDiaAdicional": 1005.578666,
            "fatorDiAcumulado": 1.0030511517524867,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "fator": 1.004779812,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "fatorJurosAcumulado": 1.004779812,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140669.17368,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1005.578666,
            "puJuros": 5.578666,
            "puSemDiaAdicionalPrimeiroPeriodo": 1005.578666,
            "puContratualComDiaAdicional": 1006.378158,
            "fatorDiAcumulado": 1.0035605813714388,
            "produtorioFatorDi": 1.0035605813714388,
            "fatorDiArredondado": 1.00356058,
            "fatorSpread": 1.002010926,
            "fator": 1.005578666,
            "spread": 0.075,
            "spreadAcumulado": 0.0020109260000000795,
            "fatorJurosAcumulado": 1.005578666,
            "dataTaxaDiIso": "2026-10-08",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDi": "08/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140781.01324,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1005.578666,
            "puAposEvento": 1005.578666,
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
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1006.378158,
            "puJuros": 6.378158,
            "puSemDiaAdicionalPrimeiroPeriodo": 1006.378158,
            "puContratualComDiaAdicional": 1007.178284,
            "fatorDiAcumulado": 1.0040702697195056,
            "produtorioFatorDi": 1.0040702697195056,
            "fatorDiArredondado": 1.00407027,
            "fatorSpread": 1.002298532,
            "fator": 1.006378158,
            "spread": 0.075,
            "spreadAcumulado": 0.0022985319999999643,
            "fatorJurosAcumulado": 1.006378158,
            "dataTaxaDiIso": "2026-10-09",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDi": "09/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 140892.94212,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1006.378158,
            "puAposEvento": 1006.378158,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.178284,
            "puJuros": 7.178284,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.178284,
            "puContratualComDiaAdicional": 1007.97904,
            "fatorDiAcumulado": 1.0045802169280906,
            "produtorioFatorDi": 1.0045802169280906,
            "fatorDiArredondado": 1.00458022,
            "fatorSpread": 1.002586219,
            "fator": 1.007178284,
            "spread": 0.075,
            "spreadAcumulado": 0.0025862189999998897,
            "fatorJurosAcumulado": 1.007178284,
            "dataTaxaDiIso": "2026-10-13",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDi": "13/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 141004.95976,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.97904,
            "puJuros": 7.97904,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.97904,
            "puContratualComDiaAdicional": 1008.780441,
            "fatorDiAcumulado": 1.0050904231286641,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "fator": 1.00797904,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "fatorJurosAcumulado": 1.00797904,
            "dataTaxaDiIso": "2026-10-14",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDi": "14/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 141117.0656,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.97904,
            "puJuros": 7.97904,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.97904,
            "puContratualComDiaAdicional": 1008.780441,
            "fatorDiAcumulado": 1.0050904231286641,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "fator": 1.00797904,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "fatorJurosAcumulado": 1.00797904,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 141117.0656,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1007.97904,
            "puJuros": 7.97904,
            "puSemDiaAdicionalPrimeiroPeriodo": 1007.97904,
            "puContratualComDiaAdicional": 1008.780441,
            "fatorDiAcumulado": 1.0050904231286641,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "fator": 1.00797904,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "fatorJurosAcumulado": 1.00797904,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 141117.0656,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 140.0,
            "valorNominal": 1000,
            "puAtualizado": 1008.780441,
            "puJuros": 8.780441,
            "puSemDiaAdicionalPrimeiroPeriodo": 1008.780441,
            "puContratualComDiaAdicional": 1009.582472,
            "fatorDiAcumulado": 1.0056008884527625,
            "produtorioFatorDi": 1.0056008884527625,
            "fatorDiArredondado": 1.00560089,
            "fatorSpread": 1.003161842,
            "fator": 1.008780441,
            "spread": 0.075,
            "spreadAcumulado": 0.0031618419999999148,
            "fatorJurosAcumulado": 1.008780441,
            "dataTaxaDiIso": "2026-10-15",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDi": "15/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 141229.26174,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1008.780441,
            "puAposEvento": 1008.780441,
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
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1009.582472,
            "puJuros": 9.582472,
            "puSemDiaAdicionalPrimeiroPeriodo": 1009.582472,
            "puContratualComDiaAdicional": 1010.38515,
            "fatorDiAcumulado": 1.0061116130319898,
            "produtorioFatorDi": 1.0061116130319898,
            "fatorDiArredondado": 1.00611161,
            "fatorSpread": 1.003449778,
            "fator": 1.009582472,
            "spread": 0.075,
            "spreadAcumulado": 0.0034497780000000144,
            "fatorJurosAcumulado": 1.009582472,
            "dataTaxaDiIso": "2026-10-16",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDi": "16/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 282683.09216,
            "evento": "Integralizacao",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1009.582472,
            "puAposEvento": 1009.582472,
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
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1010.38515,
            "puJuros": 10.38515,
            "puSemDiaAdicionalPrimeiroPeriodo": 1010.38515,
            "puContratualComDiaAdicional": 1011.188457,
            "fatorDiAcumulado": 1.0066225969980165,
            "produtorioFatorDi": 1.0066225969980165,
            "fatorDiArredondado": 1.0066226,
            "fatorSpread": 1.003737796,
            "fator": 1.01038515,
            "spread": 0.075,
            "spreadAcumulado": 0.0037377960000000154,
            "fatorJurosAcumulado": 1.01038515,
            "dataTaxaDiIso": "2026-10-19",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDi": "19/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 282907.842,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1010.38515,
            "puAposEvento": 1010.38515,
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
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.188457,
            "puJuros": 11.188457,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.188457,
            "puContratualComDiaAdicional": 1011.992403,
            "fatorDiAcumulado": 1.0071338404825798,
            "produtorioFatorDi": 1.0071338404825798,
            "fatorDiArredondado": 1.00713384,
            "fatorSpread": 1.004025897,
            "fator": 1.011188457,
            "spread": 0.075,
            "spreadAcumulado": 0.0040258970000000005,
            "fatorJurosAcumulado": 1.011188457,
            "dataTaxaDiIso": "2026-10-20",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDi": "20/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 283132.76795999997,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.992403,
            "puJuros": 11.992403,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.992403,
            "puContratualComDiaAdicional": 1012.796998,
            "fatorDiAcumulado": 1.007645343617484,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "fator": 1.011992403,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "fatorJurosAcumulado": 1.011992403,
            "dataTaxaDiIso": "2026-10-21",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDi": "21/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 283357.87283999997,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.992403,
            "puJuros": 11.992403,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.992403,
            "puContratualComDiaAdicional": 1012.796998,
            "fatorDiAcumulado": 1.007645343617484,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "fator": 1.011992403,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "fatorJurosAcumulado": 1.011992403,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 283357.87283999997,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1011.992403,
            "puJuros": 11.992403,
            "puSemDiaAdicionalPrimeiroPeriodo": 1011.992403,
            "puContratualComDiaAdicional": 1012.796998,
            "fatorDiAcumulado": 1.007645343617484,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "fator": 1.011992403,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "fatorJurosAcumulado": 1.011992403,
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 283357.87283999997,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1012.796998,
            "puJuros": 12.796998,
            "puSemDiaAdicionalPrimeiroPeriodo": 1012.796998,
            "puContratualComDiaAdicional": 1013.602223,
            "fatorDiAcumulado": 1.0081571065346004,
            "produtorioFatorDi": 1.0081571065346004,
            "fatorDiArredondado": 1.00815711,
            "fatorSpread": 1.004602346,
            "fator": 1.012796998,
            "spread": 0.075,
            "spreadAcumulado": 0.004602345999999979,
            "fatorJurosAcumulado": 1.012796998,
            "dataTaxaDiIso": "2026-10-22",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDi": "22/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 283583.15944,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1012.796998,
            "puAposEvento": 1012.796998,
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
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 280.0,
            "valorNominal": 1000,
            "puAtualizado": 1013.602223,
            "puJuros": 13.602223,
            "puSemDiaAdicionalPrimeiroPeriodo": 1013.602223,
            "puContratualComDiaAdicional": 1014.408089,
            "fatorDiAcumulado": 1.0086691293658672,
            "produtorioFatorDi": 1.0086691293658672,
            "fatorDiArredondado": 1.00866913,
            "fatorSpread": 1.004890695,
            "fator": 1.013602223,
            "spread": 0.075,
            "spreadAcumulado": 0.004890695000000056,
            "fatorJurosAcumulado": 1.013602223,
            "dataTaxaDiIso": "2026-10-23",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDi": "23/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 283808.62244,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1013.602223,
            "puAposEvento": 1013.602223,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          }
        ],
        "taxaTexto": "CDI + 7.50% a.a.",
        "pu": 1013.602223,
        "principalResidual": 1000,
        "valor": 283808.62244,
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
        "dataPrimeiraIntegralizacaoIso": "2026-10-01",
        "importacaoFundingCaixa": {
          "sourceSheet": "71ª MEZ A",
          "sourcePu": 1013.602213,
          "sourceBalance": 283808.6221700336,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "01/10/2026",
          "periodoFim": "27/10/2026",
          "puFinal": 1013.602223,
          "diasAcumulacao": 17
        },
        "sourceClass": "MEZA",
        "serieJuridica": 2,
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
        "puComparacaoSemDiaAdicional": 1013.602223,
        "puContratualComDiaAdicional": 1014.408089
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
      "total": 41943.22,
      "totalCalculado": 41943.22,
      "accounts": {
        "cc": 41743.22,
        "contaAplicacao": 110200.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-26": {
      "total": 41888.96000000002,
      "totalCalculado": 41888.96000000002,
      "accounts": {
        "cc": 41743.22,
        "contaAplicacao": 110145.74,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-23": {
      "total": 41834.72999999998,
      "totalCalculado": 41834.72999999998,
      "accounts": {
        "cc": 41743.22,
        "contaAplicacao": 110091.51,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-22": {
      "total": 41780.52000000002,
      "totalCalculado": 41780.52000000002,
      "accounts": {
        "cc": 41743.22,
        "contaAplicacao": 110037.3,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-21": {
      "total": 41726.330000000016,
      "totalCalculado": 41726.330000000016,
      "accounts": {
        "cc": 41743.22,
        "contaAplicacao": 109983.11,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-20": {
      "total": 9896660.4,
      "totalCalculado": 9896660.4,
      "accounts": {
        "cc": 506682.42,
        "contaAplicacao": 9499977.98,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-19": {
      "total": 6581188.89,
      "totalCalculado": 6581188.89,
      "accounts": {
        "cc": 6691188.89,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-16": {
      "total": 0.0,
      "totalCalculado": -77770.86,
      "accounts": {
        "cc": 32229.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-15": {
      "total": 0.0,
      "totalCalculado": -77770.86,
      "accounts": {
        "cc": 32229.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-14": {
      "total": 0.0,
      "totalCalculado": -77770.86,
      "accounts": {
        "cc": 32229.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-13": {
      "total": 0.0,
      "totalCalculado": -77770.86,
      "accounts": {
        "cc": 32229.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-09": {
      "total": 0.0,
      "totalCalculado": -77770.86,
      "accounts": {
        "cc": 32229.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-08": {
      "total": 9184394.39,
      "totalCalculado": 9184394.39,
      "accounts": {
        "cc": 9294394.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-07": {
      "total": 0.0,
      "totalCalculado": -107455.26,
      "accounts": {
        "cc": 2544.74,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-06": {
      "total": 0.0,
      "totalCalculado": -107455.26,
      "accounts": {
        "cc": 2544.74,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-05": {
      "total": 0.0,
      "totalCalculado": -107455.26,
      "accounts": {
        "cc": 2544.74,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-02": {
      "total": 0.0,
      "totalCalculado": -107455.26,
      "accounts": {
        "cc": 2544.74,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-01": {
      "total": 0.0,
      "totalCalculado": -107455.26,
      "accounts": {
        "cc": 2544.74,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-30": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-29": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-28": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-25": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-24": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-23": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-22": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-21": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-18": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-17": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
      }
    },
    "2026-09-16": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
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
      "cra": "cra-carteira-71",
      "number": 71,
      "sourceClass": "SR1",
      "class": "SR1",
      "label": "Senior 1a serie",
      "kind": "sr",
      "legalSeries": 1,
      "ifCodigo": "CRA026004HH",
      "spreadAa": 0.075,
      "method": "di_spread_ts_252",
      "maturity": "2031-05-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA026004HH",
        "legalSeries": 1,
        "registeredMaturity": "30/05/2031",
        "registeredStart": "01/10/2026",
        "registeredRate": "7,5000",
        "registeredLag": "D-1",
        "issuedQuantity": "20.000",
        "issuedPu": "1.000,00000000",
        "emissionDate": "08/07/2026",
        "file": "CRA026004HH.pdf",
        "documentId": "71-04"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-10-01",
      "rateSource": {
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
      "maturitySource": {
        "id": "71-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "pages": [
          1,
          4,
          10
        ],
        "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
      },
      "revolveSource": {
        "id": "71-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
      ],
      "calculationStatus": "recalculo_documentado"
    },
    {
      "cra": "cra-carteira-71",
      "number": 71,
      "sourceClass": "MEZA",
      "class": "SR2",
      "label": "Senior 2a serie",
      "kind": "sr",
      "legalSeries": 2,
      "ifCodigo": "CRA026004HI",
      "spreadAa": 0.075,
      "method": "di_spread_ts_252",
      "maturity": "2031-05-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA026004HI",
        "legalSeries": 2,
        "registeredMaturity": "30/05/2031",
        "registeredStart": "01/10/2026",
        "registeredRate": "7,5000",
        "registeredLag": "D-1",
        "issuedQuantity": "19.900",
        "issuedPu": "1.000,00000000",
        "emissionDate": "08/07/2026",
        "file": "CRA026004HI.pdf",
        "documentId": "71-05"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-10-01",
      "rateSource": {
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
      "maturitySource": {
        "id": "71-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "pages": [
          1,
          4,
          10
        ],
        "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
      },
      "revolveSource": {
        "id": "71-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
      ],
      "calculationStatus": "recalculo_documentado"
    },
    {
      "cra": "cra-carteira-71",
      "number": 71,
      "sourceClass": "SUB",
      "class": "SUB",
      "label": "Subordinada",
      "kind": "sub",
      "legalSeries": 3,
      "ifCodigo": "CRA026004HJ",
      "spreadAa": null,
      "method": "residual_sem_carteira",
      "maturity": "2031-05-10",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": null,
      "firstPeriodAdditionalBusinessDays": null,
      "controlFirstPeriodAdditionalBusinessDays": null,
      "b3": {
        "ifCodigo": "CRA026004HJ",
        "legalSeries": 3,
        "registeredMaturity": "10/05/2031",
        "registeredStart": "01/10/2026",
        "registeredRate": "0,0001",
        "registeredLag": null,
        "issuedQuantity": "100",
        "issuedPu": "1.000,00000000",
        "emissionDate": "08/07/2026",
        "file": "CRA026004HJ.pdf",
        "documentId": "71-00"
      },
      "positionInSource": false,
      "sourceFirstIntegration": null,
      "rateSource": {
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
      "maturitySource": {
        "id": "71-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "pages": [
          1,
          4,
          10
        ],
        "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
      },
      "revolveSource": {
        "id": "71-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 71 Emissão - 30 09 2026-VersaoImpressao.pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "2c5e63b13bdb47bc1a6a4c894d92a1c60e25e117bde9b26b70d9e9f6591ec0aa"
      },
      "pending": [
        "Sem posicao integralizada informada; nao presumida como zero ou como quantidade emitida"
      ],
      "calculationStatus": "cadastro_sem_posicao"
    }
  ]
};
