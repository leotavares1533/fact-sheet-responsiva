window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-68"] = window.LAMINA_CRA_DAILY["cra-carteira-68"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-68"]["2026-11-05"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-68",
    "dateKey": "2026-11-05",
    "reportDate": "05/11/2026",
    "revisionId": "20261105-revisao-20261109-cra-carteira-68",
    "importedAt": "2026-11-09T15:33:11.739553-03:00",
    "fundingCashOnly": false,
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
    },
    "cashDateKey": "2026-11-05",
    "cashOnlyTextImport": {
      "source": "Texto colado.txt",
      "sha256": "08aa8f5da010c5bbea15676b9f69014200fb20a4043965206cf94dfc6b9666c2",
      "noPortfolioReprocessing": true
    },
    "sourceSnapshotDateKey": "2026-11-05",
    "assetImport": {
      "sourceFile": "CRA_GER004 - Titulos (5).csv",
      "sheetCarteira": "CSV GER004",
      "sheetCaixa": "Caixa detalhado",
      "cashDate": "05/11/2026",
      "importMode": "carteira-caixa-consolidado",
      "cashGainLiquidated": false
    },
    "positionNotice": "Previa de 05/11/2026. Carteira, caixa e funding na mesma data; pendencias de conciliacao continuam sinalizadas.",
    "assetDateKey": "2026-11-05",
    "positionStatus": "previa"
  },
  "cra": {
    "id": "cra-carteira-68",
    "name": "CRA Carteira 68",
    "dateKey": "2026-11-05",
    "dataBase": "05/11/2026"
  },
  "ativo": {
    "carteiraVpBruto": 38119629.53,
    "pddTotal": 0.0,
    "carteiraVp": 38119629.53,
    "carteiraVpLiquido": 38119629.53,
    "caixa": 0.0,
    "total": 38119629.53,
    "liquidacoesDia": 0,
    "aquisicoesDia": 0,
    "quantidadeLastros": 22,
    "quantidadeLastrosBase": 22,
    "lastrosAtivos": 22,
    "quantidadeLastrosAtivos": 22,
    "cedentesUnicos": 3,
    "sacadosUnicos": 3,
    "montanteAtraso": 0
  },
  "caixa": {
    "accounts": {
      "cc": 3159.4,
      "contaAplicacao": 0.0,
      "fundoDespesas": 110000.0
    },
    "total": 0.0,
    "totalInformado": 0.0,
    "totalCalculado": -106840.6,
    "fonte": "Texto de saldos informado por Leonardo",
    "arquivoOrigem": "Texto colado.txt",
    "contaCorrenteIdentificacao": "98758-2(ITAU)",
    "totalPolicy": "total_informado",
    "reservaInsuficiente": 106840.6,
    "observacao": "Reserva de despesas deduzida uma unica vez. Total da fonte preservado, salvo ajuste explicitamente confirmado."
  },
  "passivo": {
    "fundingTotal": 38374110.550110996,
    "subordinadaTotal": -254481.02011099458,
    "subordinadaPuResidual": -2544.810201109946,
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior 1a serie",
        "ifCodigo": "CRA026004H8",
        "ehFunding": true,
        "quantidade": 20000.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.075,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-10-02",
        "dataInicio": "02/10/2026",
        "dataVencimentoIso": "2027-07-30",
        "dataVencimento": "30/07/2027",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "tipo": "integralizacao",
            "quantidade": 20000.0,
            "valor": 20000000.0,
            "valorEventoReais": 20000000.0,
            "sourceSheet": "68ª PU SR",
            "sourceRow": 4,
            "status": "realizado"
          }
        ],
        "historicoPu": [
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "valorReais": 20000000.0,
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
            "data": "03/10/2026",
            "dataIso": "2026-10-03",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "valorReais": 20000000.0,
            "evento": "",
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
            "data": "04/10/2026",
            "dataIso": "2026-10-04",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "valorReais": 20000000.0,
            "evento": "",
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
            "data": "05/10/2026",
            "dataIso": "2026-10-05",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-01",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDi": "01/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20015901.080000002,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-02",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDi": "02/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20031814.82,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1001.590741,
            "puAposEvento": 1001.590741,
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
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-05",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDi": "05/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20047741.080000002,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1002.387054,
            "puAposEvento": 1002.387054,
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
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-06",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDi": "06/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20063680.220000003,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.184011,
            "puAposEvento": 1003.184011,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-07",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDi": "07/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20079631.88,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20079631.88,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20079631.88,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20079631.88,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-08",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDi": "08/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20095596.24,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-09",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDi": "09/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20111573.32,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1005.578666,
            "puAposEvento": 1005.578666,
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
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-13",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDi": "13/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20127563.16,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1006.378158,
            "puAposEvento": 1006.378158,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-14",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDi": "14/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20143565.68,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20143565.68,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20143565.68,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-15",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDi": "15/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20159580.8,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 20000.0,
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
            "dataTaxaDiIso": "2026-10-16",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDi": "16/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20175608.82,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1008.780441,
            "puAposEvento": 1008.780441,
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
            "dataTaxaDiIso": "2026-10-19",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDi": "19/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20191649.44,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1009.582472,
            "puAposEvento": 1009.582472,
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
            "dataTaxaDiIso": "2026-10-20",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDi": "20/10/2026",
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
            "dataReferenciaTaxaDiIso": "2026-10-20",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "23/10/2026",
            "dataIso": "2026-10-23",
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
            "dataTaxaDiIso": "2026-10-21",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDi": "21/10/2026",
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
            "dataReferenciaTaxaDiIso": "2026-10-21",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "24/10/2026",
            "dataIso": "2026-10-24",
            "diaUtil": false,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20223769.14,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 20223769.14,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "dataTaxaDiIso": "2026-10-22",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDi": "22/10/2026",
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
            "dataReferenciaTaxaDiIso": "2026-10-22",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "27/10/2026",
            "dataIso": "2026-10-27",
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
            "dataTaxaDiIso": "2026-10-23",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDi": "23/10/2026",
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
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "28/10/2026",
            "dataIso": "2026-10-28",
            "diaUtil": true,
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "quantidade": 20000.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1013.602223,
            "puAntesEvento": 1013.602223,
            "puAposEvento": 1013.602223,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 13.602223,
            "valorReais": 20272044.46,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.013602223,
            "fatorJurosAcumulado": 1.013602223,
            "produtorioFatorDi": 1.0086691293658672,
            "dataTaxaDiIso": "2026-10-26",
            "dataReferenciaTaxaDiIso": "2026-10-26",
            "dataTaxaDi": "26/10/2026",
            "dataReferenciaTaxaDi": "26/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "29/10/2026",
            "dataIso": "2026-10-29",
            "diaUtil": true,
            "diasUteis": 18,
            "diasUteisPeriodo": 18,
            "quantidade": 20000.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.408089,
            "puAntesEvento": 1014.408089,
            "puAposEvento": 1014.408089,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 14.408089,
            "valorReais": 20288161.78,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.014408089,
            "fatorJurosAcumulado": 1.014408089,
            "produtorioFatorDi": 1.0091814122432894,
            "dataTaxaDiIso": "2026-10-27",
            "dataReferenciaTaxaDiIso": "2026-10-27",
            "dataTaxaDi": "27/10/2026",
            "dataReferenciaTaxaDi": "27/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "30/10/2026",
            "dataIso": "2026-10-30",
            "diaUtil": true,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 20000.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1015.214605,
            "puAntesEvento": 1015.214605,
            "puAposEvento": 1015.214605,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 15.214605,
            "valorReais": 20304292.1,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.015214605,
            "fatorJurosAcumulado": 1.015214605,
            "produtorioFatorDi": 1.0096939552989395,
            "dataTaxaDiIso": "2026-10-28",
            "dataReferenciaTaxaDiIso": "2026-10-28",
            "dataTaxaDi": "28/10/2026",
            "dataReferenciaTaxaDi": "28/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "03/11/2026",
            "dataIso": "2026-11-03",
            "diaUtil": true,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "quantidade": 20000.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.021752,
            "puAntesEvento": 1016.021752,
            "puAposEvento": 1016.021752,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 16.021752,
            "valorReais": 20320435.04,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.016021752,
            "fatorJurosAcumulado": 1.016021752,
            "produtorioFatorDi": 1.0102067586649568,
            "dataTaxaDiIso": "2026-10-29",
            "dataReferenciaTaxaDiIso": "2026-10-29",
            "dataTaxaDi": "29/10/2026",
            "dataReferenciaTaxaDi": "29/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "04/11/2026",
            "dataIso": "2026-11-04",
            "diaUtil": true,
            "diasUteis": 21,
            "diasUteisPeriodo": 21,
            "quantidade": 20000.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.829539,
            "puAntesEvento": 1016.829539,
            "puAposEvento": 1016.829539,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 16.829539,
            "valorReais": 20336590.78,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.016829539,
            "fatorJurosAcumulado": 1.016829539,
            "produtorioFatorDi": 1.0107198224735474,
            "dataTaxaDiIso": "2026-10-30",
            "dataReferenciaTaxaDiIso": "2026-10-30",
            "dataTaxaDi": "30/10/2026",
            "dataReferenciaTaxaDi": "30/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "05/11/2026",
            "dataIso": "2026-11-05",
            "diaUtil": true,
            "diasUteis": 22,
            "diasUteisPeriodo": 22,
            "quantidade": 20000.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1017.637979,
            "puAntesEvento": 1017.637979,
            "puAposEvento": 1017.637979,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 17.637979,
            "valorReais": 20352759.58,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.017637979,
            "fatorJurosAcumulado": 1.017637979,
            "produtorioFatorDi": 1.0112331468569853,
            "dataTaxaDiIso": "2026-11-03",
            "dataReferenciaTaxaDiIso": "2026-11-03",
            "dataTaxaDi": "03/11/2026",
            "dataReferenciaTaxaDi": "03/11/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          }
        ],
        "taxaTexto": "CDI + 7.50% a.a.",
        "pu": 1017.637979,
        "principalResidual": 1000.0,
        "valor": 20352759.58,
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
        "dataPrimeiraIntegralizacaoIso": "2026-10-02",
        "importacaoFundingCaixa": {
          "sourceSheet": "68ª PU SR",
          "sourcePu": 1010.811766,
          "sourceBalance": 26501462.880988,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "02/10/2026",
          "periodoFim": "05/11/2026",
          "puFinal": 1017.637979,
          "diasAcumulacao": 22.0,
          "diasUteisPeriodo": 22.0
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
        "puComparacaoSemDiaAdicional": 1012.796998,
        "puContratualComDiaAdicional": 1013.602223,
        "fundingSourceDateKey": "2026-11-05",
        "dataHistoricaIso": "2026-11-05",
        "dataHistoricaSelecionada": "05/11/2026",
        "visaoCalculadaPu": true
      },
      {
        "classe": "SR2",
        "tipo": "sr",
        "label": "Senior 2a serie",
        "ifCodigo": "CRA026004H9",
        "ehFunding": true,
        "quantidade": 17709.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.075,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-10-02",
        "dataInicio": "02/10/2026",
        "dataVencimentoIso": "2027-08-10",
        "dataVencimento": "10/08/2027",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "tipo": "integralizacao",
            "quantidade": 17709.0,
            "valor": 17709000.0,
            "valorEventoReais": 17709000.0,
            "sourceSheet": "68ª PU MEZ A",
            "sourceRow": 4,
            "status": "realizado"
          }
        ],
        "historicoPu": [
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "valorReais": 17709000.0,
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
            "data": "03/10/2026",
            "dataIso": "2026-10-03",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "valorReais": 17709000.0,
            "evento": "",
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
            "data": "04/10/2026",
            "dataIso": "2026-10-04",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "valorReais": 17709000.0,
            "evento": "",
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
            "data": "05/10/2026",
            "dataIso": "2026-10-05",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-01",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDi": "01/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17723079.611286,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1000.795054,
            "puAposEvento": 1000.795054,
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
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-02",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDi": "02/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17737170.432369,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1001.590741,
            "puAposEvento": 1001.590741,
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
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-05",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDi": "05/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17751272.339286,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1002.387054,
            "puAposEvento": 1002.387054,
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
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-06",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDi": "06/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17765385.650799002,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.184011,
            "puAposEvento": 1003.184011,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-07",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDi": "07/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17779510.048146,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17779510.048146,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17779510.048146,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17779510.048146,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1003.981594,
            "puAposEvento": 1003.981594,
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
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-08",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDi": "08/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17793645.690708,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1004.779812,
            "puAposEvento": 1004.779812,
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
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-09",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDi": "09/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17807792.596194,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1005.578666,
            "puAposEvento": 1005.578666,
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
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-13",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDi": "13/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17821950.800022,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1006.378158,
            "puAposEvento": 1006.378158,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-14",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDi": "14/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17836120.231356,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17836120.231356,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17836120.231356,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1007.178284,
            "puAposEvento": 1007.178284,
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
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-15",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDi": "15/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17850300.81936,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1007.97904,
            "puAposEvento": 1007.97904,
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
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-16",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDi": "16/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17864492.829669,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1008.780441,
            "puAposEvento": 1008.780441,
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
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-19",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDi": "19/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17878695.996648002,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1009.582472,
            "puAposEvento": 1009.582472,
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
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-20",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDi": "20/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17892910.621349998,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1010.38515,
            "puAposEvento": 1010.38515,
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
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-21",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDi": "21/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17907136.385013,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17907136.385013,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "",
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDi": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17907136.385013,
            "evento": "",
            "tdk": 0.0,
            "fatorDiario": 1.0,
            "puAntesEvento": 1011.188457,
            "puAposEvento": 1011.188457,
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
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-22",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDi": "22/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17921373.464727,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1011.992403,
            "puAposEvento": 1011.992403,
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
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "diasAdicionaisPrimeiroPeriodoTs": 1,
            "quantidade": 17709.0,
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
            "dataTaxaDiIso": "2026-10-23",
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDi": "23/10/2026",
            "taxaDiStatus": "historica_documentada",
            "puEvento": 0,
            "valorEventoReais": 0,
            "valorReais": 17935622.037582,
            "evento": "",
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "puAntesEvento": 1012.796998,
            "puAposEvento": 1012.796998,
            "principalAntesEvento": 1000,
            "principalAposEvento": 1000,
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "lagBusinessDays": 2,
            "metodoMemoria": "DI 8 casas; produto truncado 16; spread 9; fator 9; juros truncados 8"
          },
          {
            "data": "28/10/2026",
            "dataIso": "2026-10-28",
            "diaUtil": true,
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "quantidade": 17709.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1013.602223,
            "puAntesEvento": 1013.602223,
            "puAposEvento": 1013.602223,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 13.602223,
            "valorReais": 17949881.767107,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.013602223,
            "fatorJurosAcumulado": 1.013602223,
            "produtorioFatorDi": 1.0086691293658672,
            "dataTaxaDiIso": "2026-10-26",
            "dataReferenciaTaxaDiIso": "2026-10-26",
            "dataTaxaDi": "26/10/2026",
            "dataReferenciaTaxaDi": "26/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "29/10/2026",
            "dataIso": "2026-10-29",
            "diaUtil": true,
            "diasUteis": 18,
            "diasUteisPeriodo": 18,
            "quantidade": 17709.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.408089,
            "puAntesEvento": 1014.408089,
            "puAposEvento": 1014.408089,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 14.408089,
            "valorReais": 17964152.848101,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.014408089,
            "fatorJurosAcumulado": 1.014408089,
            "produtorioFatorDi": 1.0091814122432894,
            "dataTaxaDiIso": "2026-10-27",
            "dataReferenciaTaxaDiIso": "2026-10-27",
            "dataTaxaDi": "27/10/2026",
            "dataReferenciaTaxaDi": "27/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "30/10/2026",
            "dataIso": "2026-10-30",
            "diaUtil": true,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 17709.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1015.214605,
            "puAntesEvento": 1015.214605,
            "puAposEvento": 1015.214605,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 15.214605,
            "valorReais": 17978435.439945,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.015214605,
            "fatorJurosAcumulado": 1.015214605,
            "produtorioFatorDi": 1.0096939552989395,
            "dataTaxaDiIso": "2026-10-28",
            "dataReferenciaTaxaDiIso": "2026-10-28",
            "dataTaxaDi": "28/10/2026",
            "dataReferenciaTaxaDi": "28/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "03/11/2026",
            "dataIso": "2026-11-03",
            "diaUtil": true,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "quantidade": 17709.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.021752,
            "puAntesEvento": 1016.021752,
            "puAposEvento": 1016.021752,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 16.021752,
            "valorReais": 17992729.206168,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.016021752,
            "fatorJurosAcumulado": 1.016021752,
            "produtorioFatorDi": 1.0102067586649568,
            "dataTaxaDiIso": "2026-10-29",
            "dataReferenciaTaxaDiIso": "2026-10-29",
            "dataTaxaDi": "29/10/2026",
            "dataReferenciaTaxaDi": "29/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "04/11/2026",
            "dataIso": "2026-11-04",
            "diaUtil": true,
            "diasUteis": 21,
            "diasUteisPeriodo": 21,
            "quantidade": 17709.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.829539,
            "puAntesEvento": 1016.829539,
            "puAposEvento": 1016.829539,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 16.829539,
            "valorReais": 18007034.306151,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.016829539,
            "fatorJurosAcumulado": 1.016829539,
            "produtorioFatorDi": 1.0107198224735474,
            "dataTaxaDiIso": "2026-10-30",
            "dataReferenciaTaxaDiIso": "2026-10-30",
            "dataTaxaDi": "30/10/2026",
            "dataReferenciaTaxaDi": "30/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          },
          {
            "data": "05/11/2026",
            "dataIso": "2026-11-05",
            "diaUtil": true,
            "diasUteis": 22,
            "diasUteisPeriodo": 22,
            "quantidade": 17709.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1017.637979,
            "puAntesEvento": 1017.637979,
            "puAposEvento": 1017.637979,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "puJuros": 17.637979,
            "valorReais": 18021350.970111,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.017637979,
            "fatorJurosAcumulado": 1.017637979,
            "produtorioFatorDi": 1.0112331468569853,
            "dataTaxaDiIso": "2026-11-03",
            "dataReferenciaTaxaDiIso": "2026-11-03",
            "dataTaxaDi": "03/11/2026",
            "dataReferenciaTaxaDi": "03/11/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1000.0
          }
        ],
        "taxaTexto": "CDI + 7.50% a.a.",
        "pu": 1017.637979,
        "principalResidual": 1000.0,
        "valor": 18021350.970111,
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
        "dataPrimeiraIntegralizacaoIso": "2026-10-02",
        "importacaoFundingCaixa": {
          "sourceSheet": "68ª PU MEZ A",
          "sourcePu": 1010.811766,
          "sourceBalance": 18596914.870868,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "02/10/2026",
          "periodoFim": "05/11/2026",
          "puFinal": 1017.637979,
          "diasAcumulacao": 22.0,
          "diasUteisPeriodo": 22.0
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
        "puComparacaoSemDiaAdicional": 1012.796998,
        "puContratualComDiaAdicional": 1013.602223,
        "fundingSourceDateKey": "2026-11-05",
        "dataHistoricaIso": "2026-11-05",
        "dataHistoricaSelecionada": "05/11/2026",
        "visaoCalculadaPu": true
      },
      {
        "classe": "SUB",
        "label": "Subordinada",
        "tipo": "sub",
        "ifCodigo": "",
        "quantidade": 100,
        "pu": -2544.810201109946,
        "valor": -254481.02011099458,
        "principalResidual": -2544.810201109946,
        "ehFunding": false,
        "ordem": 90,
        "historicoPu": [
          {
            "data": "05/11/2026",
            "dataIso": "2026-11-05",
            "valorNominal": -2544.810201109946,
            "puAtualizado": -2544.810201109946,
            "valorReais": -254481.02011099458,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "produtorioFatorDi": 1,
            "fatorDiAcumulado": 1
          }
        ],
        "dataHistoricaDisponivel": true,
        "dataHistoricaSelecionada": "05/11/2026",
        "dataHistoricaIso": "2026-11-05",
        "visaoCalculadaPu": true,
        "acumulacaoFinal": {
          "periodoFim": "05/11/2026",
          "diasAcumulacao": 0.0,
          "diasUteisPeriodo": 0.0,
          "puFinal": -2544.810201109946
        }
      }
    ],
    "despesasTotal": 0,
    "despesasOperacionaisTotal": 0,
    "provisoesTotal": 0.0,
    "provisoesCaixa": 0,
    "deducoesTotal": 0,
    "subordinadaQuantidade": 100
  },
  "sources": [
    {
      "name": "Importacao carteira+caixa CRAs Carteira",
      "date": "05/11/2026",
      "file": "CRA_GER004 - Titulos (5).csv"
    },
    {
      "name": "Memoria PU existente",
      "date": "05/11/2026",
      "file": "data/cras/cra-carteira-68/2026-11-05.js"
    }
  ],
  "caixaHistorico": {
    "2026-10-27": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-26": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-23": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-22": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-21": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-20": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-19": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-16": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-15": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-14": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-13": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-09": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-08": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-07": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-06": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-05": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-02": {
      "total": 37698913.0,
      "totalCalculado": 37698913.0,
      "accounts": {
        "cc": 37808913.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-01": {
      "total": 0.0,
      "totalCalculado": 0.0,
      "accounts": {
        "cc": 0.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 0.0
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
    },
    "2026-10-28": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-29": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-10-30": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-11-03": {
      "total": 0.0,
      "totalCalculado": -106752.61,
      "accounts": {
        "cc": 3247.39,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-11-04": {
      "total": 0.0,
      "totalCalculado": -106839.6,
      "accounts": {
        "cc": 3160.4,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-11-05": {
      "total": 0.0,
      "totalCalculado": -106840.6,
      "accounts": {
        "cc": 3159.4,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    }
  },
  "fundingCashIssues": [
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
      "date": "2026-11-05",
      "type": "reserva_superior_aos_saldos",
      "amount": 106840.6,
      "reportedTotalPreserved": true
    }
  ],
  "cadastroSeriesDocumentadas": [
    {
      "cra": "cra-carteira-68",
      "number": 68,
      "sourceClass": "SR1",
      "class": "SR1",
      "label": "Senior 1a serie",
      "kind": "sr",
      "legalSeries": 1,
      "ifCodigo": "CRA026004H8",
      "spreadAa": 0.075,
      "method": "di_spread_ts_252",
      "maturity": "2027-07-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA026004H8",
        "legalSeries": 1,
        "registeredMaturity": "30/07/2027",
        "registeredStart": "17/07/2026",
        "registeredRate": "7,5000",
        "registeredLag": "D-1",
        "issuedQuantity": "20.000",
        "issuedPu": "1.000,00000000",
        "emissionDate": "08/07/2026",
        "file": "CRA026004H8 - 68E1S - SÊNIOR 1ªS.pdf",
        "documentId": "68-03"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-10-02",
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "68-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 68 Emissão - 01 10 2026.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 68 Emissão - 01 10 2026.pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "277242b9d3aa0f5784ee4e60f3d80394c3e5a84b6536ab5256debd9ed3167fbb"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
      ],
      "calculationStatus": "recalculo_documentado"
    },
    {
      "cra": "cra-carteira-68",
      "number": 68,
      "sourceClass": "MEZA",
      "class": "SR2",
      "label": "Senior 2a serie",
      "kind": "sr",
      "legalSeries": 2,
      "ifCodigo": "CRA026004H9",
      "spreadAa": 0.075,
      "method": "di_spread_ts_252",
      "maturity": "2027-08-10",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA026004H9",
        "legalSeries": 2,
        "registeredMaturity": "10/08/2027",
        "registeredStart": "17/07/2026",
        "registeredRate": "7,5000",
        "registeredLag": "D-1",
        "issuedQuantity": "19.900",
        "issuedPu": "1.000,00000000",
        "emissionDate": "08/07/2026",
        "file": "CRA026004H9 - 68E2S - SÊNIOR 2ªS.pdf",
        "documentId": "68-04"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-10-02",
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "68-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 68 Emissão - 01 10 2026.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 68 Emissão - 01 10 2026.pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "277242b9d3aa0f5784ee4e60f3d80394c3e5a84b6536ab5256debd9ed3167fbb"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3."
      ],
      "calculationStatus": "recalculo_documentado"
    },
    {
      "cra": "cra-carteira-68",
      "number": 68,
      "sourceClass": "SUB",
      "class": "SUB",
      "label": "Subordinada",
      "kind": "sub",
      "legalSeries": 3,
      "ifCodigo": "CRA026004HA",
      "spreadAa": null,
      "method": "residual_sem_carteira",
      "maturity": "2027-08-10",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": null,
      "firstPeriodAdditionalBusinessDays": null,
      "controlFirstPeriodAdditionalBusinessDays": null,
      "b3": {
        "ifCodigo": "CRA026004HA",
        "legalSeries": 3,
        "registeredMaturity": "10/08/2027",
        "registeredStart": "17/07/2026",
        "registeredRate": "0,0001",
        "registeredLag": null,
        "issuedQuantity": "100",
        "issuedPu": "1.000,00000000",
        "emissionDate": "08/07/2026",
        "file": "CRA026004HA - 68E3S - SUB..pdf",
        "documentId": "68-00"
      },
      "positionInSource": false,
      "sourceFirstIntegration": null,
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "68-01",
        "file": "CRA Ceres - 1º Adit ao Termo de Securitização - 68 Emissão - 01 10 2026.pdf",
        "name": "CRA Ceres - 1º Adit ao Termo de Securitização - 68 Emissão - 01 10 2026.pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "277242b9d3aa0f5784ee4e60f3d80394c3e5a84b6536ab5256debd9ed3167fbb"
      },
      "pending": [
        "Sem posicao integralizada informada; nao presumida como zero ou como quantidade emitida"
      ],
      "calculationStatus": "cadastro_sem_posicao"
    }
  ],
  "carteira": [
    {
      "craCarteira": "68",
      "lastro": "566500",
      "numeroUnico": "566500",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 3875468.38,
      "valorFace": 4185588.7,
      "valorNominal": 4185588.7,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "19/02/2027",
      "dataVencimentoIso": "2027-02-19",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0175347287,
      "taxaOp": 0.0175347287,
      "taxaMedia": 0.0175347287,
      "base": 252.0,
      "diasDoVencimento": 106,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 3943423.67,
      "valorPresente": 3943423.67,
      "valorPresenteLiquido": 3943423.67,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566544",
      "numeroUnico": "566544",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 1698536.02,
      "valorFace": 1836517.94,
      "valorNominal": 1836517.94,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "21/02/2027",
      "dataVencimentoIso": "2027-02-21",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0177929741,
      "taxaOp": 0.0177929741,
      "taxaMedia": 0.0177929741,
      "base": 252.0,
      "diasDoVencimento": 108,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1728758.03,
      "valorPresente": 1728758.03,
      "valorPresenteLiquido": 1728758.03,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566553",
      "numeroUnico": "566553",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 1878538.44,
      "valorFace": 2031143.0,
      "valorNominal": 2031143.0,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "21/02/2027",
      "dataVencimentoIso": "2027-02-21",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0177929741,
      "taxaOp": 0.0177929741,
      "taxaMedia": 0.0177929741,
      "base": 252.0,
      "diasDoVencimento": 108,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1911963.23,
      "valorPresente": 1911963.23,
      "valorPresenteLiquido": 1911963.23,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566557",
      "numeroUnico": "566557",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 401451.87,
      "valorFace": 435040.84,
      "valorNominal": 435040.84,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "25/02/2027",
      "dataVencimentoIso": "2027-02-25",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0175480387,
      "taxaOp": 0.0175480387,
      "taxaMedia": 0.0175480387,
      "base": 252.0,
      "diasDoVencimento": 112,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 408496.56,
      "valorPresente": 408496.56,
      "valorPresenteLiquido": 408496.56,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566558",
      "numeroUnico": "566558",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 3711510.56,
      "valorFace": 4022047.94,
      "valorNominal": 4022047.94,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "25/02/2027",
      "dataVencimentoIso": "2027-02-25",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0175480387,
      "taxaOp": 0.0175480387,
      "taxaMedia": 0.0175480387,
      "base": 252.0,
      "diasDoVencimento": 112,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 3776640.29,
      "valorPresente": 3776640.29,
      "valorPresenteLiquido": 3776640.29,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566560",
      "numeroUnico": "566560",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 328018.06,
      "valorFace": 355462.91,
      "valorNominal": 355462.91,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "25/02/2027",
      "dataVencimentoIso": "2027-02-25",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0175480387,
      "taxaOp": 0.0175480387,
      "taxaMedia": 0.0175480387,
      "base": 252.0,
      "diasDoVencimento": 112,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 333774.13,
      "valorPresente": 333774.13,
      "valorPresenteLiquido": 333774.13,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566561",
      "numeroUnico": "566561",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 504569.63,
      "valorFace": 546786.33,
      "valorNominal": 546786.33,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "25/02/2027",
      "dataVencimentoIso": "2027-02-25",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0175480387,
      "taxaOp": 0.0175480387,
      "taxaMedia": 0.0175480387,
      "base": 252.0,
      "diasDoVencimento": 112,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 513423.84,
      "valorPresente": 513423.84,
      "valorPresenteLiquido": 513423.84,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566570",
      "numeroUnico": "566570",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 3078819.53,
      "valorFace": 3338295.73,
      "valorNominal": 3338295.73,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "26/02/2027",
      "dataVencimentoIso": "2027-02-26",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0174899376,
      "taxaOp": 0.0174899376,
      "taxaMedia": 0.0174899376,
      "base": 252.0,
      "diasDoVencimento": 113,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 3132667.89,
      "valorPresente": 3132667.89,
      "valorPresenteLiquido": 3132667.89,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566571",
      "numeroUnico": "566571",
      "cedente": "ADAM PERRONE SAMMOUR E OUTROS",
      "sacado": "ADAM PERRONE SAMMOUR E OUTROS",
      "devedor": "ADAM PERRONE SAMMOUR E OUTROS",
      "valorAquisicao": 293355.56,
      "valorFace": 318078.93,
      "valorNominal": 318078.93,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "26/02/2027",
      "dataVencimentoIso": "2027-02-26",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0174899376,
      "taxaOp": 0.0174899376,
      "taxaMedia": 0.0174899376,
      "base": 252.0,
      "diasDoVencimento": 113,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 298486.33,
      "valorPresente": 298486.33,
      "valorPresenteLiquido": 298486.33,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566732",
      "numeroUnico": "566732",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 612660.84,
      "valorFace": 633668.37,
      "valorNominal": 633668.37,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "04/12/2026",
      "dataVencimentoIso": "2026-12-04",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.017,
      "taxaOp": 0.017,
      "taxaMedia": 0.017,
      "base": 252.0,
      "diasDoVencimento": 29,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 623076.07,
      "valorPresente": 623076.07,
      "valorPresenteLiquido": 623076.07,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566734",
      "numeroUnico": "566734",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 1392983.67,
      "valorFace": 1443178.42,
      "valorNominal": 1443178.42,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "07/12/2026",
      "dataVencimentoIso": "2026-12-07",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.017438654,
      "taxaOp": 0.017438654,
      "taxaMedia": 0.017438654,
      "base": 252.0,
      "diasDoVencimento": 32,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1417275.43,
      "valorPresente": 1417275.43,
      "valorPresenteLiquido": 1417275.43,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566736",
      "numeroUnico": "566736",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 1466848.89,
      "valorFace": 1522269.24,
      "valorNominal": 1522269.24,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "10/12/2026",
      "dataVencimentoIso": "2026-12-10",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0170745405,
      "taxaOp": 0.0170745405,
      "taxaMedia": 0.0170745405,
      "base": 252.0,
      "diasDoVencimento": 35,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1491894.66,
      "valorPresente": 1491894.66,
      "valorPresenteLiquido": 1491894.66,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566753",
      "numeroUnico": "566753",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 1006902.16,
      "valorFace": 1045532.17,
      "valorNominal": 1045532.17,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "11/12/2026",
      "dataVencimentoIso": "2026-12-11",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0169635247,
      "taxaOp": 0.0169635247,
      "taxaMedia": 0.0169635247,
      "base": 252.0,
      "diasDoVencimento": 36,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1023982.77,
      "valorPresente": 1023982.77,
      "valorPresenteLiquido": 1023982.77,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566755",
      "numeroUnico": "566755",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 656152.26,
      "valorFace": 681708.63,
      "valorNominal": 681708.63,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "12/12/2026",
      "dataVencimentoIso": "2026-12-12",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0172188791,
      "taxaOp": 0.0172188791,
      "taxaMedia": 0.0172188791,
      "base": 252.0,
      "diasDoVencimento": 37,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 667450.47,
      "valorPresente": 667450.47,
      "valorPresenteLiquido": 667450.47,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566757",
      "numeroUnico": "566757",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 113210.23,
      "valorFace": 121721.07,
      "valorNominal": 121721.07,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "11/02/2027",
      "dataVencimentoIso": "2027-02-11",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0176504858,
      "taxaOp": 0.0176504858,
      "taxaMedia": 0.0176504858,
      "base": 252.0,
      "diasDoVencimento": 98,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 115208.45,
      "valorPresente": 115208.45,
      "valorPresenteLiquido": 115208.45,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566759",
      "numeroUnico": "566759",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 773835.82,
      "valorFace": 835289.74,
      "valorNominal": 835289.74,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "18/02/2027",
      "dataVencimentoIso": "2027-02-18",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.017596477,
      "taxaOp": 0.017596477,
      "taxaMedia": 0.017596477,
      "base": 252.0,
      "diasDoVencimento": 105,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 787452.6,
      "valorPresente": 787452.6,
      "valorPresenteLiquido": 787452.6,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566761",
      "numeroUnico": "566761",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 1489959.15,
      "valorFace": 1609187.73,
      "valorNominal": 1609187.73,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "19/02/2027",
      "dataVencimentoIso": "2027-02-19",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0175347287,
      "taxaOp": 0.0175347287,
      "taxaMedia": 0.0175347287,
      "base": 252.0,
      "diasDoVencimento": 106,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1516085.18,
      "valorPresente": 1516085.18,
      "valorPresenteLiquido": 1516085.18,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566764",
      "numeroUnico": "566764",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 2166372.79,
      "valorFace": 2341044.0,
      "valorNominal": 2341044.0,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "20/02/2027",
      "dataVencimentoIso": "2027-02-20",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0176638432,
      "taxaOp": 0.0176638432,
      "taxaMedia": 0.0176638432,
      "base": 252.0,
      "diasDoVencimento": 107,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 2204639.26,
      "valorPresente": 2204639.26,
      "valorPresenteLiquido": 2204639.26,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566766",
      "numeroUnico": "566766",
      "cedente": "PEDRO RIBEIRO MEROLA",
      "sacado": "PEDRO RIBEIRO MEROLA",
      "devedor": "PEDRO RIBEIRO MEROLA",
      "valorAquisicao": 4069422.92,
      "valorFace": 4412385.01,
      "valorNominal": 4412385.01,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "26/02/2027",
      "dataVencimentoIso": "2027-02-26",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0174899376,
      "taxaOp": 0.0174899376,
      "taxaMedia": 0.0174899376,
      "base": 252.0,
      "diasDoVencimento": 113,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 4140596.87,
      "valorPresente": 4140596.87,
      "valorPresenteLiquido": 4140596.87,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566947",
      "numeroUnico": "566947",
      "cedente": "STEFAN ZEMBROD",
      "sacado": "STEFAN ZEMBROD",
      "devedor": "STEFAN ZEMBROD",
      "valorAquisicao": 5084995.86,
      "valorFace": 5712223.33,
      "valorNominal": 5712223.33,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "30/04/2027",
      "dataVencimentoIso": "2027-04-30",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0174742977,
      "taxaOp": 0.0174742977,
      "taxaMedia": 0.0174742977,
      "base": 252.0,
      "diasDoVencimento": 176,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 5173852.59,
      "valorPresente": 5173852.59,
      "valorPresenteLiquido": 5173852.59,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "566948",
      "numeroUnico": "566948",
      "cedente": "STEFAN ZEMBROD",
      "sacado": "STEFAN ZEMBROD",
      "devedor": "STEFAN ZEMBROD",
      "valorAquisicao": 1411153.6,
      "valorFace": 1587000.0,
      "valorNominal": 1587000.0,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "02/05/2027",
      "dataVencimentoIso": "2027-05-02",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0176446123,
      "taxaOp": 0.0176446123,
      "taxaMedia": 0.0176446123,
      "base": 252.0,
      "diasDoVencimento": 178,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1436052.86,
      "valorPresente": 1436052.86,
      "valorPresenteLiquido": 1436052.86,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    },
    {
      "craCarteira": "68",
      "lastro": "567099",
      "numeroUnico": "567099",
      "cedente": "STEFAN ZEMBROD",
      "sacado": "STEFAN ZEMBROD",
      "devedor": "STEFAN ZEMBROD",
      "valorAquisicao": 1449091.18,
      "valorFace": 1633332.03,
      "valorNominal": 1633332.03,
      "pagamentosAcumulados": 0.0,
      "dataAquisicao": "05/10/2026",
      "dataAquisicaoIso": "2026-10-05",
      "dataVencimento": "06/05/2027",
      "dataVencimentoIso": "2027-05-06",
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "VINCENDO",
      "tipoTitulo": "NP",
      "tipoAtivo": "NP",
      "tipo": "pre fixado",
      "indexadorAtivo": "pre fixado",
      "taxa": 0.0174848681,
      "taxaOp": 0.0174848681,
      "taxaMedia": 0.0174848681,
      "base": 252.0,
      "diasDoVencimento": 182,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 1474428.35,
      "valorPresente": 1474428.35,
      "valorPresenteLiquido": 1474428.35,
      "pdd": 0,
      "metodoPrecificacao": "Motor pre; taxa mensal; base 252",
      "observacao": "",
      "valorLiquidacao": 0
    }
  ],
  "carteiraResumo": {
    "valorNominal": 40647502.06,
    "valorPresente": 38119629.53,
    "valorPresenteLiquido": 38119629.53,
    "pddTotal": 0.0,
    "cedentesUnicos": 3,
    "sacadosUnicos": 3,
    "prazoMedioDias": 113.6622631738887,
    "taxaMediaPonderada": 0.017504157971903366,
    "preFixado": {
      "valorPresente": 38119629.53
    },
    "posFixado": {
      "valorPresente": 0
    },
    "montanteAtraso": 0
  },
  "rankingCarteira": {
    "cedentes": [
      {
        "name": "ADAM PERRONE SAMMOUR E OUTROS",
        "quantidade": 9,
        "valorPresenteDia": 16047633.97,
        "pdd": 0.0,
        "valorPresenteLiquido": 16047633.97,
        "valorNominal": 17068962.32,
        "posicao": 1,
        "participacao": 0.4209808481315532,
        "participacaoPl": 0.4209808481315532
      },
      {
        "name": "PEDRO RIBEIRO MEROLA",
        "quantidade": 10,
        "valorPresenteDia": 13987661.759999998,
        "pdd": 0.0,
        "valorPresenteLiquido": 13987661.759999998,
        "valorNominal": 14645984.38,
        "posicao": 2,
        "participacao": 0.36694117787770636,
        "participacaoPl": 0.36694117787770636
      },
      {
        "name": "STEFAN ZEMBROD",
        "quantidade": 3,
        "valorPresenteDia": 8084333.800000001,
        "pdd": 0.0,
        "valorPresenteLiquido": 8084333.800000001,
        "valorNominal": 8932555.36,
        "posicao": 3,
        "participacao": 0.2120779739907404,
        "participacaoPl": 0.2120779739907404
      }
    ],
    "sacados": [
      {
        "name": "ADAM PERRONE SAMMOUR E OUTROS",
        "quantidade": 9,
        "valorPresenteDia": 16047633.97,
        "pdd": 0.0,
        "valorPresenteLiquido": 16047633.97,
        "valorNominal": 17068962.32,
        "posicao": 1,
        "participacao": 0.4209808481315532,
        "participacaoPl": 0.4209808481315532
      },
      {
        "name": "PEDRO RIBEIRO MEROLA",
        "quantidade": 10,
        "valorPresenteDia": 13987661.759999998,
        "pdd": 0.0,
        "valorPresenteLiquido": 13987661.759999998,
        "valorNominal": 14645984.38,
        "posicao": 2,
        "participacao": 0.36694117787770636,
        "participacaoPl": 0.36694117787770636
      },
      {
        "name": "STEFAN ZEMBROD",
        "quantidade": 3,
        "valorPresenteDia": 8084333.800000001,
        "pdd": 0.0,
        "valorPresenteLiquido": 8084333.800000001,
        "valorNominal": 8932555.36,
        "posicao": 3,
        "participacao": 0.2120779739907404,
        "participacaoPl": 0.2120779739907404
      }
    ],
    "lastrosAtivos": 22
  },
  "concentracaoDetalhada": {
    "top10Cedentes": [
      {
        "name": "ADAM PERRONE SAMMOUR E OUTROS",
        "quantidade": 9,
        "valorPresenteDia": 16047633.97,
        "pdd": 0.0,
        "valorPresenteLiquido": 16047633.97,
        "valorNominal": 17068962.32,
        "posicao": 1,
        "participacao": 0.4209808481315532,
        "participacaoPl": 0.4209808481315532
      },
      {
        "name": "PEDRO RIBEIRO MEROLA",
        "quantidade": 10,
        "valorPresenteDia": 13987661.759999998,
        "pdd": 0.0,
        "valorPresenteLiquido": 13987661.759999998,
        "valorNominal": 14645984.38,
        "posicao": 2,
        "participacao": 0.36694117787770636,
        "participacaoPl": 0.36694117787770636
      },
      {
        "name": "STEFAN ZEMBROD",
        "quantidade": 3,
        "valorPresenteDia": 8084333.800000001,
        "pdd": 0.0,
        "valorPresenteLiquido": 8084333.800000001,
        "valorNominal": 8932555.36,
        "posicao": 3,
        "participacao": 0.2120779739907404,
        "participacaoPl": 0.2120779739907404
      }
    ],
    "top10Sacados": [
      {
        "name": "ADAM PERRONE SAMMOUR E OUTROS",
        "quantidade": 9,
        "valorPresenteDia": 16047633.97,
        "pdd": 0.0,
        "valorPresenteLiquido": 16047633.97,
        "valorNominal": 17068962.32,
        "posicao": 1,
        "participacao": 0.4209808481315532,
        "participacaoPl": 0.4209808481315532
      },
      {
        "name": "PEDRO RIBEIRO MEROLA",
        "quantidade": 10,
        "valorPresenteDia": 13987661.759999998,
        "pdd": 0.0,
        "valorPresenteLiquido": 13987661.759999998,
        "valorNominal": 14645984.38,
        "posicao": 2,
        "participacao": 0.36694117787770636,
        "participacaoPl": 0.36694117787770636
      },
      {
        "name": "STEFAN ZEMBROD",
        "quantidade": 3,
        "valorPresenteDia": 8084333.800000001,
        "pdd": 0.0,
        "valorPresenteLiquido": 8084333.800000001,
        "valorNominal": 8932555.36,
        "posicao": 3,
        "participacao": 0.2120779739907404,
        "participacaoPl": 0.2120779739907404
      }
    ]
  },
  "agingList": [
    {
      "status": "Em dia",
      "valorNominal": 40647502.059999995,
      "valorPresente": 38119629.53,
      "valorPdd": 0.0,
      "order": 0.0,
      "percentualCarteira": 1.0
    }
  ],
  "pddComposition": [],
  "composicaoCarteira": [
    {
      "label": "NP",
      "tipoTitulo": "NP",
      "valorNominal": 40647502.059999995,
      "valorPresente": 38119629.53,
      "lastros": 22,
      "percentualCarteira": 1.0,
      "taxaMedia": 0.017504157971903366
    }
  ],
  "movimentacoesDia": {
    "aquisicoes": [],
    "liquidacoes": []
  },
  "aquisicoesDia": {
    "total": 0,
    "quantidade": 0,
    "itens": []
  },
  "liquidacoesDia": {
    "total": 0,
    "quantidade": 0,
    "itens": []
  },
  "performanceCotas": [],
  "rendimento30Dias": [],
  "precificacaoMensal": [],
  "sections": [
    {
      "id": "resumo",
      "label": "Resumo",
      "metrics": [
        {
          "label": "Ativo total",
          "value": "R$ 38.119.629,53",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 38.119.629,53",
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
          "label": "Funding SR/MEZ",
          "value": "R$ 38.374.110,55",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinada residual",
          "value": "R$ -254.481,02",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "PU SUB residual",
          "value": "-2.544,810201",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "Valor nominal",
          "value": "R$ 40.647.502,06",
          "isHighlight": false,
          "source": {
            "name": "Carteira"
          }
        },
        {
          "label": "PDD",
          "value": "R$ 0,00",
          "isHighlight": false,
          "source": {
            "name": "Faixa vencimento"
          }
        }
      ]
    }
  ]
};
