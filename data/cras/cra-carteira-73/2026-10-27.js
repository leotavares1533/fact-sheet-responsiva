window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-73"] = window.LAMINA_CRA_DAILY["cra-carteira-73"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-73"]["2026-10-27"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-73",
    "dateKey": "2026-10-27",
    "reportDate": "27/10/2026",
    "revisionId": "20261027-documentos-20261030-3a880273",
    "importedAt": "2026-10-29T14:03:14.606788-03:00",
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
    "id": "cra-carteira-73",
    "name": "CRA Carteira 73",
    "dateKey": "2026-10-27",
    "dataBase": "27/10/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 0.0
  },
  "caixa": {
    "accounts": {
      "cc": 41700.16,
      "contaAplicacao": 0.0,
      "fundoDespesas": 89251.34
    },
    "total": 0.0,
    "totalCalculado": -47551.17999999999,
    "fonte": "Saldo Caixa",
    "arquivoOrigem": "fundings e caixa cras carteiras.xlsx",
    "observacao": "Total informado preservado. Fundo de despesas deduzido uma unica vez. Divergencias sinalizadas."
  },
  "passivo": {
    "fundingTotal": 37004328.245673,
    "subordinadaTotal": null,
    "subordinadaPuResidual": null,
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA02600590",
        "ehFunding": true,
        "quantidade": 35900.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.075,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-08-19",
        "dataInicio": "19/08/2026",
        "dataVencimentoIso": "2027-09-30",
        "dataVencimento": "30/09/2027",
        "revolvencia": null,
        "eventosAplicados": [
          {
            "data": "19/08/2026",
            "dataIso": "2026-08-19",
            "tipo": "integralizacao",
            "quantidade": 35900.0,
            "valor": 35900000.0,
            "valorEventoReais": 35900000.0,
            "sourceSheet": "73ª PU SR",
            "sourceRow": 4,
            "status": "realizado"
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "tipo": "juros_amortizacao",
            "valorEventoReais": 263000.0,
            "valorJuros": 263000.0,
            "valorAmortizacao": 0.0,
            "puEvento": 7.325905292479109,
            "puAposEvento": 1009.6809797,
            "sourceSheet": "73ª PU SR",
            "sourceCells": {
              "saldoemconta": "Q16",
              "pujuros": "Q17",
              "valorjuros": "Q18",
              "valoramortizacao": "Q19",
              "puamortizacao": "Q20",
              "saldodevedor": "Q21"
            }
          }
        ],
        "historicoPu": [
          {
            "data": "19/08/2026",
            "dataIso": "2026-08-19",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.0,
            "puJuros": 0,
            "fator": 1.0,
            "puAntesEvento": 1000.0,
            "puEvento": 0.0,
            "puAposEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "valorReais": 35900000.0,
            "valorEventoReais": 0,
            "evento": "Integralizacao",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 14
          },
          {
            "data": "20/08/2026",
            "dataIso": "2026-08-20",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.803776,
            "puJuros": 0.8037759999999707,
            "fator": 1.000803776,
            "puAntesEvento": 1000.803776,
            "puEvento": 0.0,
            "puAposEvento": 1000.803776,
            "principalAposEvento": 1000.0,
            "valorReais": 35928855.5584,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 15
          },
          {
            "data": "21/08/2026",
            "dataIso": "2026-08-21",
            "diaUtil": true,
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1001.608201,
            "puJuros": 1.6082010000000082,
            "fator": 1.001608201,
            "puAntesEvento": 1001.608201,
            "puEvento": 0.0,
            "puAposEvento": 1001.608201,
            "principalAposEvento": 1000.0,
            "valorReais": 35957734.4159,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 16
          },
          {
            "data": "24/08/2026",
            "dataIso": "2026-08-24",
            "diaUtil": true,
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.413277,
            "puJuros": 2.4132769999999937,
            "fator": 1.002413277,
            "puAntesEvento": 1002.413277,
            "puEvento": 0.0,
            "puAposEvento": 1002.413277,
            "principalAposEvento": 1000.0,
            "valorReais": 35986636.6443,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 17
          },
          {
            "data": "25/08/2026",
            "dataIso": "2026-08-25",
            "diaUtil": true,
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1003.219001,
            "puJuros": 3.2190010000000484,
            "fator": 1.003219001,
            "puAntesEvento": 1003.219001,
            "puEvento": 0.0,
            "puAposEvento": 1003.219001,
            "principalAposEvento": 1000.0,
            "valorReais": 36015562.1359,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 18
          },
          {
            "data": "26/08/2026",
            "dataIso": "2026-08-26",
            "diaUtil": true,
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.025367,
            "puJuros": 4.02536699999996,
            "fator": 1.004025367,
            "puAntesEvento": 1004.025367,
            "puEvento": 0.0,
            "puAposEvento": 1004.025367,
            "principalAposEvento": 1000.0,
            "valorReais": 36044510.6753,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 19
          },
          {
            "data": "27/08/2026",
            "dataIso": "2026-08-27",
            "diaUtil": true,
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.832383,
            "puJuros": 4.83238300000005,
            "fator": 1.004832383,
            "puAntesEvento": 1004.832383,
            "puEvento": 0.0,
            "puAposEvento": 1004.832383,
            "principalAposEvento": 1000.0,
            "valorReais": 36073482.5497,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 20
          },
          {
            "data": "28/08/2026",
            "dataIso": "2026-08-28",
            "diaUtil": true,
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1005.640049,
            "puJuros": 5.640048999999976,
            "fator": 1.005640049,
            "puAntesEvento": 1005.640049,
            "puEvento": 0.0,
            "puAposEvento": 1005.640049,
            "principalAposEvento": 1000.0,
            "valorReais": 36102477.7591,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 21
          },
          {
            "data": "31/08/2026",
            "dataIso": "2026-08-31",
            "diaUtil": true,
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1006.448369,
            "puJuros": 6.448368999999957,
            "fator": 1.006448369,
            "puAntesEvento": 1006.448369,
            "puEvento": 0.0,
            "puAposEvento": 1006.448369,
            "principalAposEvento": 1000.0,
            "valorReais": 36131496.4471,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 22
          },
          {
            "data": "01/09/2026",
            "dataIso": "2026-09-01",
            "diaUtil": true,
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1007.257328,
            "puJuros": 7.2573280000000295,
            "fator": 1.0072573280000001,
            "puAntesEvento": 1007.257328,
            "puEvento": 0.0,
            "puAposEvento": 1007.257328,
            "principalAposEvento": 1000.0,
            "valorReais": 36160538.0752,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 23
          },
          {
            "data": "02/09/2026",
            "dataIso": "2026-09-02",
            "diaUtil": true,
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.066942,
            "puJuros": 8.06694200000004,
            "fator": 1.0080669420000001,
            "puAntesEvento": 1008.066942,
            "puEvento": 0.0,
            "puAposEvento": 1008.066942,
            "principalAposEvento": 1000.0,
            "valorReais": 36189603.2178,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 24
          },
          {
            "data": "03/09/2026",
            "dataIso": "2026-09-03",
            "diaUtil": true,
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.877206,
            "puJuros": 8.877206000000001,
            "fator": 1.008877206,
            "puAntesEvento": 1008.877206,
            "puEvento": 0.0,
            "puAposEvento": 1008.877206,
            "principalAposEvento": 1000.0,
            "valorReais": 36218691.6954,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 25
          },
          {
            "data": "04/09/2026",
            "dataIso": "2026-09-04",
            "diaUtil": true,
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1009.688125,
            "puJuros": 9.688125000000014,
            "fator": 1.009688125,
            "puAntesEvento": 1009.688125,
            "puEvento": 0.0,
            "puAposEvento": 1009.688125,
            "principalAposEvento": 1000.0,
            "valorReais": 36247803.6875,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 26
          },
          {
            "data": "08/09/2026",
            "dataIso": "2026-09-08",
            "diaUtil": true,
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1010.499696,
            "puJuros": 10.499695999999972,
            "fator": 1.010499696,
            "puAntesEvento": 1010.499696,
            "puEvento": 0.0,
            "puAposEvento": 1010.499696,
            "principalAposEvento": 1000.0,
            "valorReais": 36276939.0864,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 27
          },
          {
            "data": "09/09/2026",
            "dataIso": "2026-09-09",
            "diaUtil": true,
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1011.311912,
            "puJuros": 11.311912000000007,
            "fator": 1.011311912,
            "puAntesEvento": 1011.311912,
            "puEvento": 0.0,
            "puAposEvento": 1011.311912,
            "principalAposEvento": 1000.0,
            "valorReais": 36306097.6408,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 28
          },
          {
            "data": "10/09/2026",
            "dataIso": "2026-09-10",
            "diaUtil": true,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.124781,
            "puJuros": 12.124780999999984,
            "fator": 1.012124781,
            "puAntesEvento": 1012.124781,
            "puEvento": 0.0,
            "puAposEvento": 1012.124781,
            "principalAposEvento": 1000.0,
            "valorReais": 36335279.6379,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 29
          },
          {
            "data": "11/09/2026",
            "dataIso": "2026-09-11",
            "diaUtil": true,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.938305,
            "puJuros": 12.938305000000014,
            "fator": 1.012938305,
            "puAntesEvento": 1012.938305,
            "puEvento": 0.0,
            "puAposEvento": 1012.938305,
            "principalAposEvento": 1000.0,
            "valorReais": 36364485.1495,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 30
          },
          {
            "data": "14/09/2026",
            "dataIso": "2026-09-14",
            "diaUtil": true,
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1013.752484,
            "puJuros": 13.752483999999981,
            "fator": 1.013752484,
            "puAntesEvento": 1013.752484,
            "puEvento": 0.0,
            "puAposEvento": 1013.752484,
            "principalAposEvento": 1000.0,
            "valorReais": 36393714.1756,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 31
          },
          {
            "data": "15/09/2026",
            "dataIso": "2026-09-15",
            "diaUtil": true,
            "diasUteis": 18,
            "diasUteisPeriodo": 18,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.567319,
            "puJuros": 14.567318999999998,
            "fator": 1.014567319,
            "puAntesEvento": 1014.567319,
            "puEvento": 0.0,
            "puAposEvento": 1014.567319,
            "principalAposEvento": 1000.0,
            "valorReais": 36422966.7521,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 32
          },
          {
            "data": "16/09/2026",
            "dataIso": "2026-09-16",
            "diaUtil": true,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1015.38281,
            "puJuros": 15.38280999999995,
            "fator": 1.01538281,
            "puAntesEvento": 1015.38281,
            "puEvento": 0.0,
            "puAposEvento": 1015.38281,
            "principalAposEvento": 1000.0,
            "valorReais": 36452242.879,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 33
          },
          {
            "data": "17/09/2026",
            "dataIso": "2026-09-17",
            "diaUtil": true,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.198956,
            "puJuros": 16.198955999999953,
            "fator": 1.016198956,
            "puAntesEvento": 1016.198956,
            "puEvento": 0.0,
            "puAposEvento": 1016.198956,
            "principalAposEvento": 1000.0,
            "valorReais": 36481542.520399995,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 34
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "diaUtil": true,
            "diasUteis": 21,
            "diasUteisPeriodo": 0,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1009.6809797,
            "puJuros": 0,
            "fator": 0.9999999999925512,
            "puAntesEvento": 1017.0068849924791,
            "puEvento": 7.325905292479109,
            "puAposEvento": 1009.6809797,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36247547.171229996,
            "valorEventoReais": 263000.0,
            "evento": "Juros / amortizacao",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 36
          },
          {
            "data": "21/09/2026",
            "dataIso": "2026-09-21",
            "diaUtil": true,
            "diasUteis": 22,
            "diasUteisPeriodo": 1,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1010.4837306,
            "puJuros": 0.8027508924790254,
            "fator": 1.0007950539909265,
            "puAntesEvento": 1010.4837306,
            "puEvento": 0.0,
            "puAposEvento": 1010.4837306,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36276365.92854,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 37
          },
          {
            "data": "22/09/2026",
            "dataIso": "2026-09-22",
            "diaUtil": true,
            "diasUteis": 23,
            "diasUteisPeriodo": 2,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1011.28712063,
            "puJuros": 1.606140922479085,
            "fator": 1.001590740991223,
            "puAntesEvento": 1011.28712063,
            "puEvento": 0.0,
            "puAposEvento": 1011.28712063,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36305207.630617,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 38
          },
          {
            "data": "23/09/2026",
            "dataIso": "2026-09-23",
            "diaUtil": true,
            "diasUteis": 24,
            "diasUteisPeriodo": 3,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1012.09115282,
            "puJuros": 2.4101731124791286,
            "fator": 1.0023870639943888,
            "puAntesEvento": 1012.09115282,
            "puEvento": 0.0,
            "puAposEvento": 1012.09115282,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36334072.386238,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 39
          },
          {
            "data": "24/09/2026",
            "dataIso": "2026-09-24",
            "diaUtil": true,
            "diasUteis": 25,
            "diasUteisPeriodo": 4,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1012.89581505,
            "puJuros": 3.214835342479091,
            "fator": 1.0031840109966321,
            "puAntesEvento": 1012.89581505,
            "puEvento": 0.0,
            "puAposEvento": 1012.89581505,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36362959.760295,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 40
          },
          {
            "data": "25/09/2026",
            "dataIso": "2026-09-25",
            "diaUtil": true,
            "diasUteis": 26,
            "diasUteisPeriodo": 5,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1013.70111943,
            "puJuros": 4.02013972247903,
            "fator": 1.0039815939918404,
            "puAntesEvento": 1013.70111943,
            "puEvento": 0.0,
            "puAposEvento": 1013.70111943,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36391870.187537,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 41
          },
          {
            "data": "28/09/2026",
            "dataIso": "2026-09-28",
            "diaUtil": true,
            "diasUteis": 27,
            "diasUteisPeriodo": 6,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1014.50706497,
            "puJuros": 4.826085262479069,
            "fator": 1.0047798119995062,
            "puAntesEvento": 1014.50706497,
            "puEvento": 0.0,
            "puAposEvento": 1014.50706497,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36420803.632423,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 42
          },
          {
            "data": "29/09/2026",
            "dataIso": "2026-09-29",
            "diaUtil": true,
            "diasUteis": 28,
            "diasUteisPeriodo": 7,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1015.31365265,
            "puJuros": 5.632672942479076,
            "fator": 1.0055786659902326,
            "puAntesEvento": 1015.31365265,
            "puEvento": 0.0,
            "puAposEvento": 1015.31365265,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36449760.130135,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 43
          },
          {
            "data": "30/09/2026",
            "dataIso": "2026-09-30",
            "diaUtil": true,
            "diasUteis": 29,
            "diasUteisPeriodo": 8,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1016.12088452,
            "puJuros": 6.439904812479085,
            "fator": 1.0063781579943643,
            "puAntesEvento": 1016.12088452,
            "puEvento": 0.0,
            "puAposEvento": 1016.12088452,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36478739.754268,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 44
          },
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "diaUtil": true,
            "diasUteis": 30,
            "diasUteisPeriodo": 9,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1016.92875652,
            "puJuros": 7.24777681247906,
            "fator": 1.007178283990829,
            "puAntesEvento": 1016.92875652,
            "puEvento": 0.0,
            "puAposEvento": 1016.92875652,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36507742.359068,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 45
          },
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 31,
            "diasUteisPeriodo": 10,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1017.73727472,
            "puJuros": 8.05629501247904,
            "fator": 1.0079790499914267,
            "puAntesEvento": 1017.73727472,
            "puEvento": 0.0,
            "puAposEvento": 1017.73727472,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36536768.162448,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 46
          },
          {
            "data": "05/10/2026",
            "dataIso": "2026-10-05",
            "diaUtil": true,
            "diasUteis": 32,
            "diasUteisPeriodo": 11,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1018.54643407,
            "puJuros": 8.865454362479113,
            "fator": 1.0087804509945777,
            "puAntesEvento": 1018.54643407,
            "puEvento": 0.0,
            "puAposEvento": 1018.54643407,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36565816.983113,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 47
          },
          {
            "data": "06/10/2026",
            "dataIso": "2026-10-06",
            "diaUtil": true,
            "diasUteis": 33,
            "diasUteisPeriodo": 12,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1019.35622952,
            "puJuros": 9.675249812479137,
            "fator": 1.009582481998702,
            "puAntesEvento": 1019.35622952,
            "puEvento": 0.0,
            "puAposEvento": 1019.35622952,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36594888.639768004,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 48
          },
          {
            "data": "07/10/2026",
            "dataIso": "2026-10-07",
            "diaUtil": true,
            "diasUteis": 34,
            "diasUteisPeriodo": 13,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1020.16666813,
            "puJuros": 10.48568842247903,
            "fator": 1.0103851499961072,
            "puAntesEvento": 1020.16666813,
            "puEvento": 0.0,
            "puAposEvento": 1020.16666813,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36623983.385867,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 49
          },
          {
            "data": "08/10/2026",
            "dataIso": "2026-10-08",
            "diaUtil": true,
            "diasUteis": 35,
            "diasUteisPeriodo": 14,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1020.97775193,
            "puJuros": 11.296772222479035,
            "fator": 1.0111884569973295,
            "puAntesEvento": 1020.97775193,
            "puEvento": 0.0,
            "puAposEvento": 1020.97775193,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36653101.294286996,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 50
          },
          {
            "data": "09/10/2026",
            "dataIso": "2026-10-09",
            "diaUtil": true,
            "diasUteis": 36,
            "diasUteisPeriodo": 15,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1021.78948091,
            "puJuros": 12.108501202479033,
            "fator": 1.0119924029924645,
            "puAntesEvento": 1021.78948091,
            "puEvento": 0.0,
            "puAposEvento": 1021.78948091,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36682242.364668995,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 51
          },
          {
            "data": "13/10/2026",
            "dataIso": "2026-10-13",
            "diaUtil": true,
            "diasUteis": 37,
            "diasUteisPeriodo": 16,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1022.60185508,
            "puJuros": 12.920875372479031,
            "fator": 1.0127969879914167,
            "puAntesEvento": 1022.60185508,
            "puEvento": 0.0,
            "puAposEvento": 1022.60185508,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36711406.597371995,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 52
          },
          {
            "data": "14/10/2026",
            "dataIso": "2026-10-14",
            "diaUtil": true,
            "diasUteis": 38,
            "diasUteisPeriodo": 17,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1023.41487545,
            "puJuros": 13.733895742479035,
            "fator": 1.013602212994502,
            "puAntesEvento": 1023.41487545,
            "puEvento": 0.0,
            "puAposEvento": 1023.41487545,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36740594.028655,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 53
          },
          {
            "data": "15/10/2026",
            "dataIso": "2026-10-15",
            "diaUtil": true,
            "diasUteis": 39,
            "diasUteisPeriodo": 18,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1024.22854302,
            "puJuros": 14.547563312479042,
            "fator": 1.014408078992132,
            "puAntesEvento": 1024.22854302,
            "puEvento": 0.0,
            "puAposEvento": 1024.22854302,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36769804.694418,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 54
          },
          {
            "data": "16/10/2026",
            "dataIso": "2026-10-16",
            "diaUtil": true,
            "diasUteis": 40,
            "diasUteisPeriodo": 19,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1025.04285679,
            "puJuros": 15.361877082479168,
            "fator": 1.015214584993895,
            "puAntesEvento": 1025.04285679,
            "puEvento": 0.0,
            "puAposEvento": 1025.04285679,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36799038.558761,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 55
          },
          {
            "data": "19/10/2026",
            "dataIso": "2026-10-19",
            "diaUtil": true,
            "diasUteis": 41,
            "diasUteisPeriodo": 20,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1025.85781676,
            "puJuros": 16.176837052479186,
            "fator": 1.0160217309997908,
            "puAntesEvento": 1025.85781676,
            "puEvento": 0.0,
            "puAposEvento": 1025.85781676,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36828295.62168401,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 56
          },
          {
            "data": "20/10/2026",
            "dataIso": "2026-10-20",
            "diaUtil": true,
            "diasUteis": 42,
            "diasUteisPeriodo": 21,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1026.67342493,
            "puJuros": 16.99244522247909,
            "fator": 1.0168295189906433,
            "puAntesEvento": 1026.67342493,
            "puEvento": 0.0,
            "puAposEvento": 1026.67342493,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36857575.954987,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 57
          },
          {
            "data": "21/10/2026",
            "dataIso": "2026-10-21",
            "diaUtil": true,
            "diasUteis": 43,
            "diasUteisPeriodo": 22,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1027.48968133,
            "puJuros": 17.80870162247902,
            "fator": 1.0176379489961649,
            "puAntesEvento": 1027.48968133,
            "puEvento": 0.0,
            "puAposEvento": 1027.48968133,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36886879.559746996,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 58
          },
          {
            "data": "22/10/2026",
            "dataIso": "2026-10-22",
            "diaUtil": true,
            "diasUteis": 44,
            "diasUteisPeriodo": 23,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1028.30659604,
            "puJuros": 18.625616332479012,
            "fator": 1.018447030999707,
            "puAntesEvento": 1028.30659604,
            "puEvento": 0.0,
            "puAposEvento": 1028.30659604,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36916206.797836,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 59
          },
          {
            "data": "23/10/2026",
            "dataIso": "2026-10-23",
            "diaUtil": true,
            "diasUteis": 45,
            "diasUteisPeriodo": 24,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1029.12415896,
            "puJuros": 19.443179252479013,
            "fator": 1.0192567549981095,
            "puAntesEvento": 1029.12415896,
            "puEvento": 0.0,
            "puAposEvento": 1029.12415896,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36945557.306664,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 60
          },
          {
            "data": "26/10/2026",
            "dataIso": "2026-10-26",
            "diaUtil": true,
            "diasUteis": 46,
            "diasUteisPeriodo": 25,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1029.9423711,
            "puJuros": 20.261391392479027,
            "fator": 1.020067121991689,
            "puAntesEvento": 1029.9423711,
            "puEvento": 0.0,
            "puAposEvento": 1029.9423711,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 36974931.122489996,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 61
          },
          {
            "data": "27/10/2026",
            "dataIso": "2026-10-27",
            "diaUtil": true,
            "diasUteis": 47,
            "diasUteisPeriodo": 26,
            "quantidade": 35900.0,
            "valorNominal": 1009.6809797075209,
            "puAtualizado": 1030.76123247,
            "puJuros": 21.080252762479176,
            "fator": 1.0208781319903497,
            "puAntesEvento": 1030.76123247,
            "puEvento": 0.0,
            "puAposEvento": 1030.76123247,
            "principalAposEvento": 1009.6809797075209,
            "valorReais": 37004328.245673,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "importada_pendente_validacao",
            "sourceRow": 62
          }
        ],
        "taxaTexto": "CDI + 7.50% a.a.",
        "pu": 1030.76123247,
        "principalResidual": 1009.6809797075209,
        "valor": 37004328.245673,
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
        "dataPrimeiraIntegralizacaoIso": "2026-08-19",
        "importacaoFundingCaixa": {
          "sourceSheet": "73ª PU SR",
          "sourcePu": 1030.76123247,
          "sourceBalance": 37004328.245673,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "19/08/2026",
          "periodoFim": "27/10/2026",
          "puFinal": 1030.76123247,
          "diasAcumulacao": 47
        },
        "sourceClass": "SR1",
        "serieJuridica": 1,
        "revolvenciaRegra": "Nao localizada clausula de revolvencia nos documentos enviados",
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
        "financialEventConfirmation": {
          "cra": "cra-carteira-73",
          "sourceClass": "SR1",
          "date": "2026-09-18",
          "amount": 263000,
          "status": "pagamento_confirmado_af_omisso",
          "confirmedBy": "Leonardo",
          "confirmationDate": "2026-10-30",
          "remainingIssue": "Confirmacao do pagamento nao autoriza capitalizar automaticamente os juros remanescentes. PU da fonte preservado sob essa ressalva."
        }
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
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-26": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-23": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-22": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-21": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-20": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-19": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-16": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-15": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-14": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-13": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-09": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-08": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-07": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-06": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-05": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-02": {
      "total": 0.0,
      "totalCalculado": -47551.17999999999,
      "accounts": {
        "cc": 41700.16,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-10-01": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-30": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-29": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-28": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-25": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-24": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-23": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-22": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-21": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-18": {
      "total": 0.0,
      "totalCalculado": -47199.71,
      "accounts": {
        "cc": 42051.63,
        "contaAplicacao": 0.0,
        "fundoDespesas": 89251.34
      }
    },
    "2026-09-17": {
      "total": 215799.53999999998,
      "totalCalculado": 215799.53999999998,
      "accounts": {
        "cc": 309845.04,
        "contaAplicacao": 0.0,
        "fundoDespesas": 94045.5
      }
    },
    "2026-09-16": {
      "total": 215682.39999999997,
      "totalCalculado": 215682.39999999997,
      "accounts": {
        "cc": 8453.8,
        "contaAplicacao": 301274.1,
        "fundoDespesas": 94045.5
      }
    },
    "2026-09-15": {
      "total": 215565.31,
      "totalCalculado": 215565.31,
      "accounts": {
        "cc": 8453.8,
        "contaAplicacao": 301157.01,
        "fundoDespesas": 94045.5
      }
    },
    "2026-09-14": {
      "total": 215448.27999999997,
      "totalCalculado": 215448.27999999997,
      "accounts": {
        "cc": 8453.8,
        "contaAplicacao": 301039.98,
        "fundoDespesas": 94045.5
      }
    },
    "2026-09-11": {
      "total": 215331.31,
      "totalCalculado": 215331.31,
      "accounts": {
        "cc": 8453.8,
        "contaAplicacao": 300923.01,
        "fundoDespesas": 94045.5
      }
    },
    "2026-09-10": {
      "total": 215214.39999999997,
      "totalCalculado": 215214.39999999997,
      "accounts": {
        "cc": 8453.8,
        "contaAplicacao": 300806.1,
        "fundoDespesas": 94045.5
      }
    },
    "2026-09-09": {
      "total": 215096.3,
      "totalCalculado": 215096.3,
      "accounts": {
        "cc": 24407.05,
        "contaAplicacao": 300689.25,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-08": {
      "total": 214979.5,
      "totalCalculado": 214979.5,
      "accounts": {
        "cc": 24407.05,
        "contaAplicacao": 300572.45,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-04": {
      "total": 214950.32,
      "totalCalculado": 214950.32,
      "accounts": {
        "cc": 24407.05,
        "contaAplicacao": 300543.27,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-03": {
      "total": 214746.08999999997,
      "totalCalculado": 214746.08999999997,
      "accounts": {
        "cc": 24407.05,
        "contaAplicacao": 300339.04,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-02": {
      "total": 214629.47999999998,
      "totalCalculado": 214629.47999999998,
      "accounts": {
        "cc": 24407.05,
        "contaAplicacao": 300222.43,
        "fundoDespesas": 110000.0
      }
    },
    "2026-09-01": {
      "total": 214864.44,
      "totalCalculado": 214864.44,
      "accounts": {
        "cc": 24758.58,
        "contaAplicacao": 300105.86,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-31": {
      "total": 214747.94,
      "totalCalculado": 214747.94,
      "accounts": {
        "cc": 24758.58,
        "contaAplicacao": 299989.36,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-28": {
      "total": 214631.16000000003,
      "totalCalculado": 214631.16000000003,
      "accounts": {
        "cc": 24083.13,
        "contaAplicacao": 300548.03,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-27": {
      "total": 214514.44,
      "totalCalculado": 214514.44,
      "accounts": {
        "cc": 24083.13,
        "contaAplicacao": 300431.31,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-26": {
      "total": 214397.77000000002,
      "totalCalculado": 214397.77000000002,
      "accounts": {
        "cc": 24083.13,
        "contaAplicacao": 300314.64,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-25": {
      "total": 214281.16000000003,
      "totalCalculado": 214281.16000000003,
      "accounts": {
        "cc": 24083.13,
        "contaAplicacao": 300198.03,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-24": {
      "total": 214164.61,
      "totalCalculado": 214164.61,
      "accounts": {
        "cc": 24083.13,
        "contaAplicacao": 300081.48,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-21": {
      "total": 214048.11,
      "totalCalculado": 214048.11,
      "accounts": {
        "cc": 24083.13,
        "contaAplicacao": 299964.98,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-20": {
      "total": 214047.91999999998,
      "totalCalculado": 214047.91999999998,
      "accounts": {
        "cc": 324047.92,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-19": {
      "total": 35890000.0,
      "totalCalculado": 35890000.0,
      "accounts": {
        "cc": 100138.42,
        "contaAplicacao": 35899861.58,
        "fundoDespesas": 110000.0
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
  "fundingCashIssues": [
    {
      "cra": "cra-carteira-73",
      "type": "caixa_nao_concilia",
      "date": "2026-10-27",
      "reported": 0.0,
      "calculated": -47551.17999999999,
      "difference": 47551.17999999999
    }
  ],
  "cadastroSeriesDocumentadas": [
    {
      "cra": "cra-carteira-73",
      "number": 73,
      "sourceClass": "SR1",
      "class": "SR1",
      "label": "Senior",
      "kind": "sr",
      "legalSeries": 1,
      "ifCodigo": "CRA02600590",
      "spreadAa": 0.075,
      "method": "di_spread_ts_252",
      "maturity": "2027-09-30",
      "revolvencia": null,
      "revolvenciaRegra": "Nao localizada clausula de revolvencia nos documentos enviados",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA02600590",
        "legalSeries": 1,
        "registeredMaturity": "30/09/2027",
        "registeredStart": "30/07/2026",
        "registeredRate": "7,5000",
        "registeredLag": "D-1",
        "issuedQuantity": "39.900",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA02600590.pdf",
        "documentId": "73-03"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-08-19",
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": null,
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
        "Pagamento de R$ 263.000 em 18/09 confirmado. AF omisso. Falta somente formalizar tratamento dos juros remanescentes."
      ],
      "calculationStatus": "preservado_pendente_evento_financeiro"
    },
    {
      "cra": "cra-carteira-73",
      "number": 73,
      "sourceClass": "SUB",
      "class": "SUB",
      "label": "Subordinada",
      "kind": "sub",
      "legalSeries": 2,
      "ifCodigo": "CRA02600591",
      "spreadAa": null,
      "method": "residual_sem_carteira",
      "maturity": "2027-09-30",
      "revolvencia": null,
      "revolvenciaRegra": "Nao localizada clausula de revolvencia nos documentos enviados",
      "lagBusinessDays": null,
      "firstPeriodAdditionalBusinessDays": null,
      "controlFirstPeriodAdditionalBusinessDays": null,
      "b3": {
        "ifCodigo": "CRA02600591",
        "legalSeries": 2,
        "registeredMaturity": "30/09/2027",
        "registeredStart": "30/07/2026",
        "registeredRate": "0,0001",
        "registeredLag": null,
        "issuedQuantity": "100",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA02600591.pdf",
        "documentId": "73-00"
      },
      "positionInSource": false,
      "sourceFirstIntegration": null,
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": null,
      "pending": [
        "Sem posicao integralizada informada; nao presumida como zero ou como quantidade emitida"
      ],
      "calculationStatus": "cadastro_sem_posicao"
    }
  ]
};
