window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-72"] = window.LAMINA_CRA_DAILY["cra-carteira-72"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-72"]["2026-10-27"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-72",
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
    "id": "cra-carteira-72",
    "name": "CRA Carteira 72",
    "dateKey": "2026-10-27",
    "dataBase": "27/10/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 6654.120000000006
  },
  "caixa": {
    "accounts": {
      "cc": 28454.97,
      "contaAplicacao": 0.0,
      "fundoDespesas": 21800.849999999995
    },
    "total": 6654.120000000006,
    "totalCalculado": 6654.120000000006,
    "fonte": "Saldo Caixa",
    "arquivoOrigem": "fundings e caixa cras carteiras.xlsx",
    "observacao": "Total informado preservado. Fundo de despesas deduzido uma unica vez. Divergencias sinalizadas."
  },
  "passivo": {
    "fundingTotal": 33666623.62196232,
    "subordinadaTotal": null,
    "subordinadaPuResidual": null,
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA0260058Y",
        "ehFunding": true,
        "quantidade": 33486.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.04,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-07-31",
        "dataInicio": "31/07/2026",
        "dataVencimentoIso": "2027-07-30",
        "dataVencimento": "30/07/2027",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "31/07/2026",
            "dataIso": "2026-07-31",
            "tipo": "integralizacao",
            "quantidade": 15527.0,
            "valor": 15527000.0,
            "valorEventoReais": 15527000.0,
            "sourceSheet": "72ª PU SR",
            "sourceRow": 4,
            "status": "realizado"
          },
          {
            "data": "06/08/2026",
            "dataIso": "2026-08-06",
            "tipo": "integralizacao",
            "quantidade": 9874.0,
            "valor": 9900925.95,
            "valorEventoReais": 9900925.95,
            "sourceSheet": "72ª PU SR",
            "sourceRow": 5,
            "status": "realizado"
          },
          {
            "data": "28/08/2026",
            "dataIso": "2026-08-28",
            "tipo": "integralizacao",
            "quantidade": 8085.0,
            "valor": 8194699.02,
            "valorEventoReais": 8194699.02,
            "sourceSheet": "72ª PU SR",
            "sourceRow": 6,
            "status": "realizado"
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "tipo": "juros_amortizacao",
            "valorEventoReais": 1170000.0,
            "valorJuros": 774917.307066,
            "valorAmortizacao": 395082.692934,
            "puAntesEvento": 1023.141531,
            "puEvento": 34.9399749148898,
            "puAposEvento": 988.20155608,
            "quantidadeNoEvento": 33486.0,
            "sourceSheet": "72ª PU SR",
            "humanConfirmation": {
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
            },
            "observacao": "Quantidade historica no evento. Juros unitarios aprovados; memoria posterior DI D-2. Caixa nao deduzido novamente."
          }
        ],
        "historicoPu": [
          {
            "data": "31/07/2026",
            "dataIso": "2026-07-31",
            "diaUtil": true,
            "quantidade": 15527.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "valorReais": 15527000.0,
            "sourceRow": 14,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "03/08/2026",
            "dataIso": "2026-08-03",
            "diaUtil": true,
            "quantidade": 15527.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.681042,
            "puJuros": 0.6810420000000477,
            "valorReais": 15537574.539134001,
            "sourceRow": 15,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "04/08/2026",
            "dataIso": "2026-08-04",
            "diaUtil": true,
            "quantidade": 15527.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1001.362551,
            "puJuros": 1.3625510000000531,
            "valorReais": 15548156.329377001,
            "sourceRow": 16,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "05/08/2026",
            "dataIso": "2026-08-05",
            "diaUtil": true,
            "quantidade": 15527.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.044518,
            "puJuros": 2.044518000000039,
            "valorReais": 15558745.230986001,
            "sourceRow": 17,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "06/08/2026",
            "dataIso": "2026-08-06",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.726955,
            "puJuros": 2.7269549999999754,
            "valorReais": 25470267.383954998,
            "sourceRow": 18,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "07/08/2026",
            "dataIso": "2026-08-07",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1003.401122,
            "puJuros": 3.4011219999999867,
            "valorReais": 25487391.899922,
            "sourceRow": 19,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "10/08/2026",
            "dataIso": "2026-08-10",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.075745,
            "puJuros": 4.0757449999999835,
            "valorReais": 25504527.998744998,
            "sourceRow": 20,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "11/08/2026",
            "dataIso": "2026-08-11",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.750824,
            "puJuros": 4.750823999999966,
            "valorReais": 25521675.680423997,
            "sourceRow": 21,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "12/08/2026",
            "dataIso": "2026-08-12",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1005.426349,
            "puJuros": 5.426348999999959,
            "valorReais": 25538834.690949,
            "sourceRow": 22,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "13/08/2026",
            "dataIso": "2026-08-13",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1006.102331,
            "puJuros": 6.102331000000049,
            "valorReais": 25556005.309731003,
            "sourceRow": 23,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "14/08/2026",
            "dataIso": "2026-08-14",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1006.778769,
            "puJuros": 6.778769000000011,
            "valorReais": 25573187.511369,
            "sourceRow": 24,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "17/08/2026",
            "dataIso": "2026-08-17",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1007.455664,
            "puJuros": 7.455663999999956,
            "valorReais": 25590381.321264,
            "sourceRow": 25,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "18/08/2026",
            "dataIso": "2026-08-18",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.133015,
            "puJuros": 8.133015,
            "valorReais": 25607586.714015,
            "sourceRow": 26,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "19/08/2026",
            "dataIso": "2026-08-19",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.810814,
            "puJuros": 8.81081400000005,
            "valorReais": 25624803.486414,
            "sourceRow": 27,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "20/08/2026",
            "dataIso": "2026-08-20",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1009.48907,
            "puJuros": 9.48906999999997,
            "valorReais": 25642031.86707,
            "sourceRow": 28,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "21/08/2026",
            "dataIso": "2026-08-21",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1010.167782,
            "puJuros": 10.167781999999988,
            "valorReais": 25659271.830582,
            "sourceRow": 29,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "24/08/2026",
            "dataIso": "2026-08-24",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1010.846953,
            "puJuros": 10.846952999999985,
            "valorReais": 25676523.453153,
            "sourceRow": 30,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "25/08/2026",
            "dataIso": "2026-08-25",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1011.526582,
            "puJuros": 11.526581999999962,
            "valorReais": 25693786.709381998,
            "sourceRow": 31,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "26/08/2026",
            "dataIso": "2026-08-26",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.206668,
            "puJuros": 12.206668000000036,
            "valorReais": 25711061.573868003,
            "sourceRow": 32,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "27/08/2026",
            "dataIso": "2026-08-27",
            "diaUtil": true,
            "quantidade": 25401.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.887212,
            "puJuros": 12.887211999999977,
            "valorReais": 25728348.072012,
            "sourceRow": 33,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "28/08/2026",
            "dataIso": "2026-08-28",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1013.568215,
            "puJuros": 13.56821500000001,
            "valorReais": 33940345.24749,
            "sourceRow": 34,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "31/08/2026",
            "dataIso": "2026-08-31",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.249675,
            "puJuros": 14.249675000000025,
            "valorReais": 33963164.61705,
            "sourceRow": 35,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "01/09/2026",
            "dataIso": "2026-09-01",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.931594,
            "puJuros": 14.931594000000018,
            "valorReais": 33985999.356684,
            "sourceRow": 36,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "02/09/2026",
            "dataIso": "2026-09-02",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1015.613972,
            "puJuros": 15.61397199999999,
            "valorReais": 34008849.466392,
            "sourceRow": 37,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "03/09/2026",
            "dataIso": "2026-09-03",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.296808,
            "puJuros": 16.296808000000055,
            "valorReais": 34031714.912688,
            "sourceRow": 38,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "04/09/2026",
            "dataIso": "2026-09-04",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.980104,
            "puJuros": 16.980103999999983,
            "valorReais": 34054595.762544,
            "sourceRow": 39,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "08/09/2026",
            "dataIso": "2026-09-08",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1017.663859,
            "puJuros": 17.663859000000002,
            "valorReais": 34077491.982474,
            "sourceRow": 40,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "09/09/2026",
            "dataIso": "2026-09-09",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1018.348073,
            "puJuros": 18.348073,
            "valorReais": 34100403.572478,
            "sourceRow": 41,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "10/09/2026",
            "dataIso": "2026-09-10",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1019.032747,
            "puJuros": 19.032746999999972,
            "valorReais": 34123330.566042,
            "sourceRow": 42,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "11/09/2026",
            "dataIso": "2026-09-11",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1019.71788,
            "puJuros": 19.717880000000036,
            "valorReais": 34146272.929680005,
            "sourceRow": 43,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "14/09/2026",
            "dataIso": "2026-09-14",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1020.403474,
            "puJuros": 20.40347399999996,
            "valorReais": 34169230.730364,
            "sourceRow": 44,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "15/09/2026",
            "dataIso": "2026-09-15",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1021.089527,
            "puJuros": 21.089526999999975,
            "valorReais": 34192203.901122,
            "sourceRow": 45,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "16/09/2026",
            "dataIso": "2026-09-16",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1021.77604,
            "puJuros": 21.776039999999966,
            "valorReais": 34215192.475439996,
            "sourceRow": 46,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "17/09/2026",
            "dataIso": "2026-09-17",
            "diaUtil": true,
            "quantidade": 33486.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1022.463014,
            "puJuros": 22.463014000000044,
            "valorReais": 34238196.486804,
            "sourceRow": 47,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "diaUtil": true,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 988.20155608,
            "puJuros": 0.0,
            "valorReais": 33090917.30689488,
            "fator": 1.0,
            "fatorJurosAcumulado": 1.0,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0,
            "fatorDiAcumulado": 1.0,
            "fatorSpread": 1.0,
            "spread": 0.04,
            "spreadAcumulado": 0.0,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1023.141531,
            "puEvento": 34.9399749148898,
            "puAposEvento": 988.20155608,
            "valorEventoReais": 1170000.0,
            "evento": "Juros / amortizacao",
            "eventQuantity": 33486.0
          },
          {
            "data": "19/09/2026",
            "dataIso": "2026-09-19",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 988.20155608,
            "puJuros": 0.0,
            "valorReais": 33090917.30689488,
            "fator": 1.0,
            "fatorJurosAcumulado": 1.0,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0,
            "fatorDiAcumulado": 1.0,
            "fatorSpread": 1.0,
            "spread": 0.04,
            "spreadAcumulado": 0.0,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 988.20155608,
            "puEvento": 0,
            "puAposEvento": 988.20155608,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "20/09/2026",
            "dataIso": "2026-09-20",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 988.20155608,
            "puJuros": 0.0,
            "valorReais": 33090917.30689488,
            "fator": 1.0,
            "fatorJurosAcumulado": 1.0,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0,
            "fatorDiAcumulado": 1.0,
            "fatorSpread": 1.0,
            "spread": 0.04,
            "spreadAcumulado": 0.0,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 988.20155608,
            "puEvento": 0,
            "puAposEvento": 988.20155608,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "21/09/2026",
            "dataIso": "2026-09-21",
            "diaUtil": true,
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 988.85733552,
            "puJuros": 0.65577944,
            "valorReais": 33112876.73722272,
            "fator": 1.000663609,
            "fatorJurosAcumulado": 1.000663609,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiAcumulado": 1.00050788,
            "fatorSpread": 1.00015565,
            "spread": 0.04,
            "spreadAcumulado": 0.00015564999999995166,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-17",
            "dataTaxaDi": "17/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-17",
            "dataReferenciaTaxaDi": "17/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 988.85733552,
            "puEvento": 0,
            "puAposEvento": 988.85733552,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "22/09/2026",
            "dataIso": "2026-09-22",
            "diaUtil": true,
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 989.51355175,
            "puJuros": 1.31199567,
            "valorReais": 33134850.7939005,
            "fator": 1.00132766,
            "fatorJurosAcumulado": 1.00132766,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0010160179420944,
            "fatorDiAcumulado": 1.00101602,
            "fatorSpread": 1.000311324,
            "spread": 0.04,
            "spreadAcumulado": 0.0003113239999998907,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-18",
            "dataTaxaDi": "18/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-18",
            "dataReferenciaTaxaDi": "18/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 989.51355175,
            "puEvento": 0,
            "puAposEvento": 989.51355175,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "23/09/2026",
            "dataIso": "2026-09-23",
            "diaUtil": true,
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 990.17019588,
            "puJuros": 1.9686398,
            "valorReais": 33156839.179237682,
            "fator": 1.001992144,
            "fatorJurosAcumulado": 1.001992144,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0015244139572868,
            "fatorDiAcumulado": 1.00152441,
            "fatorSpread": 1.000467022,
            "spread": 0.04,
            "spreadAcumulado": 0.00046702200000003913,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-21",
            "dataTaxaDi": "21/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-21",
            "dataReferenciaTaxaDi": "21/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 990.17019588,
            "puEvento": 0,
            "puAposEvento": 990.17019588,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "24/09/2026",
            "dataIso": "2026-09-24",
            "diaUtil": true,
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 990.82728765,
            "puJuros": 2.62573157,
            "valorReais": 33178842.5542479,
            "fator": 1.002657081,
            "fatorJurosAcumulado": 1.002657081,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0020330681766474,
            "fatorDiAcumulado": 1.00203307,
            "fatorSpread": 1.000622745,
            "spread": 0.04,
            "spreadAcumulado": 0.0006227450000000356,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-22",
            "dataTaxaDi": "22/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-22",
            "dataReferenciaTaxaDi": "22/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 990.82728765,
            "puEvento": 0,
            "puAposEvento": 990.82728765,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "25/09/2026",
            "dataIso": "2026-09-25",
            "diaUtil": true,
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 991.48480732,
            "puJuros": 3.28325124,
            "valorReais": 33200860.25791752,
            "fator": 1.003322451,
            "fatorJurosAcumulado": 1.003322451,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.002541980731313,
            "fatorDiAcumulado": 1.00254198,
            "fatorSpread": 1.000778492,
            "spread": 0.04,
            "spreadAcumulado": 0.0007784920000000195,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-23",
            "dataTaxaDi": "23/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-23",
            "dataReferenciaTaxaDi": "23/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 991.48480732,
            "puEvento": 0,
            "puAposEvento": 991.48480732,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "26/09/2026",
            "dataIso": "2026-09-26",
            "diaUtil": false,
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 991.48480732,
            "puJuros": 3.28325124,
            "valorReais": 33200860.25791752,
            "fator": 1.003322451,
            "fatorJurosAcumulado": 1.003322451,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.002541980731313,
            "fatorDiAcumulado": 1.00254198,
            "fatorSpread": 1.000778492,
            "spread": 0.04,
            "spreadAcumulado": 0.0007784920000000195,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 991.48480732,
            "puEvento": 0,
            "puAposEvento": 991.48480732,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "27/09/2026",
            "dataIso": "2026-09-27",
            "diaUtil": false,
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 991.48480732,
            "puJuros": 3.28325124,
            "valorReais": 33200860.25791752,
            "fator": 1.003322451,
            "fatorJurosAcumulado": 1.003322451,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.002541980731313,
            "fatorDiAcumulado": 1.00254198,
            "fatorSpread": 1.000778492,
            "spread": 0.04,
            "spreadAcumulado": 0.0007784920000000195,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 991.48480732,
            "puEvento": 0,
            "puAposEvento": 991.48480732,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "28/09/2026",
            "dataIso": "2026-09-28",
            "diaUtil": true,
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 992.14276477,
            "puJuros": 3.94120869,
            "valorReais": 33222892.621088218,
            "fator": 1.003988264,
            "fatorJurosAcumulado": 1.003988264,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiAcumulado": 1.00305115,
            "fatorSpread": 1.000934263,
            "spread": 0.04,
            "spreadAcumulado": 0.0009342629999999907,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-24",
            "dataTaxaDi": "24/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-24",
            "dataReferenciaTaxaDi": "24/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 992.14276477,
            "puEvento": 0,
            "puAposEvento": 992.14276477,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "29/09/2026",
            "dataIso": "2026-09-29",
            "diaUtil": true,
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 992.80115899,
            "puJuros": 4.59960291,
            "valorReais": 33244939.60993914,
            "fator": 1.004654519,
            "fatorJurosAcumulado": 1.004654519,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0035605813714388,
            "fatorDiAcumulado": 1.00356058,
            "fatorSpread": 1.001090058,
            "spread": 0.04,
            "spreadAcumulado": 0.0010900579999999493,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-25",
            "dataTaxaDi": "25/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-25",
            "dataReferenciaTaxaDi": "25/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 992.80115899,
            "puEvento": 0,
            "puAposEvento": 992.80115899,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "30/09/2026",
            "dataIso": "2026-09-30",
            "diaUtil": true,
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 993.45999198,
            "puJuros": 5.2584359,
            "valorReais": 33267001.291442282,
            "fator": 1.005321218,
            "fatorJurosAcumulado": 1.005321218,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0040702697195056,
            "fatorDiAcumulado": 1.00407027,
            "fatorSpread": 1.001245877,
            "spread": 0.04,
            "spreadAcumulado": 0.0012458769999998953,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-28",
            "dataTaxaDi": "28/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-28",
            "dataReferenciaTaxaDi": "28/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 993.45999198,
            "puEvento": 0,
            "puAposEvento": 993.45999198,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "diaUtil": true,
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 994.11926373,
            "puJuros": 5.91770765,
            "valorReais": 33289077.665262777,
            "fator": 1.005988361,
            "fatorJurosAcumulado": 1.005988361,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0045802169280906,
            "fatorDiAcumulado": 1.00458022,
            "fatorSpread": 1.001401721,
            "spread": 0.04,
            "spreadAcumulado": 0.0014017209999999114,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-29",
            "dataTaxaDi": "29/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-29",
            "dataReferenciaTaxaDi": "29/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 994.11926373,
            "puEvento": 0,
            "puAposEvento": 994.11926373,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 994.77896436,
            "puJuros": 6.57740828,
            "valorReais": 33311168.40055896,
            "fator": 1.006655938,
            "fatorJurosAcumulado": 1.006655938,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiAcumulado": 1.00509042,
            "fatorSpread": 1.001557589,
            "spread": 0.04,
            "spreadAcumulado": 0.0015575889999999148,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-09-30",
            "dataTaxaDi": "30/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-30",
            "dataReferenciaTaxaDi": "30/09/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 994.77896436,
            "puEvento": 0,
            "puAposEvento": 994.77896436,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "03/10/2026",
            "dataIso": "2026-10-03",
            "diaUtil": false,
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 994.77896436,
            "puJuros": 6.57740828,
            "valorReais": 33311168.40055896,
            "fator": 1.006655938,
            "fatorJurosAcumulado": 1.006655938,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiAcumulado": 1.00509042,
            "fatorSpread": 1.001557589,
            "spread": 0.04,
            "spreadAcumulado": 0.0015575889999999148,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 994.77896436,
            "puEvento": 0,
            "puAposEvento": 994.77896436,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "04/10/2026",
            "dataIso": "2026-10-04",
            "diaUtil": false,
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 994.77896436,
            "puJuros": 6.57740828,
            "valorReais": 33311168.40055896,
            "fator": 1.006655938,
            "fatorJurosAcumulado": 1.006655938,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiAcumulado": 1.00509042,
            "fatorSpread": 1.001557589,
            "spread": 0.04,
            "spreadAcumulado": 0.0015575889999999148,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 994.77896436,
            "puEvento": 0,
            "puAposEvento": 994.77896436,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "05/10/2026",
            "dataIso": "2026-10-05",
            "diaUtil": true,
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 995.43911364,
            "puJuros": 7.23755756,
            "valorReais": 33333274.15934904,
            "fator": 1.007323969,
            "fatorJurosAcumulado": 1.007323969,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0056008884527625,
            "fatorDiAcumulado": 1.00560089,
            "fatorSpread": 1.001713482,
            "spread": 0.04,
            "spreadAcumulado": 0.0017134819999999884,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-01",
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-01",
            "dataReferenciaTaxaDi": "01/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 995.43911364,
            "puEvento": 0,
            "puAposEvento": 995.43911364,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "06/10/2026",
            "dataIso": "2026-10-06",
            "diaUtil": true,
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 996.0996908,
            "puJuros": 7.89813472,
            "valorReais": 33355394.246128798,
            "fator": 1.007992433,
            "fatorJurosAcumulado": 1.007992433,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0061116130319898,
            "fatorDiAcumulado": 1.00611161,
            "fatorSpread": 1.001869398,
            "spread": 0.04,
            "spreadAcumulado": 0.0018693979999999666,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-02",
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-02",
            "dataReferenciaTaxaDi": "02/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 996.0996908,
            "puEvento": 0,
            "puAposEvento": 996.0996908,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "07/10/2026",
            "dataIso": "2026-10-07",
            "diaUtil": true,
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 996.7607176,
            "puJuros": 8.55916152,
            "valorReais": 33377529.3895536,
            "fator": 1.008661352,
            "fatorJurosAcumulado": 1.008661352,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0066225969980165,
            "fatorDiAcumulado": 1.0066226,
            "fatorSpread": 1.002025339,
            "spread": 0.04,
            "spreadAcumulado": 0.002025339000000015,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-05",
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-05",
            "dataReferenciaTaxaDi": "05/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 996.7607176,
            "puEvento": 0,
            "puAposEvento": 996.7607176,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "08/10/2026",
            "dataIso": "2026-10-08",
            "diaUtil": true,
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 997.42217328,
            "puJuros": 9.2206172,
            "valorReais": 33399678.89445408,
            "fator": 1.009330705,
            "fatorJurosAcumulado": 1.009330705,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0071338404825798,
            "fatorDiAcumulado": 1.00713384,
            "fatorSpread": 1.002181304,
            "spread": 0.04,
            "spreadAcumulado": 0.0021813040000000505,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-06",
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-06",
            "dataReferenciaTaxaDi": "06/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 997.42217328,
            "puEvento": 0,
            "puAposEvento": 997.42217328,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "09/10/2026",
            "dataIso": "2026-10-09",
            "diaUtil": true,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 998.08406771,
            "puJuros": 9.88251163,
            "valorReais": 33421843.09133706,
            "fator": 1.010000502,
            "fatorJurosAcumulado": 1.010000502,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiAcumulado": 1.00764534,
            "fatorSpread": 1.002337293,
            "spread": 0.04,
            "spreadAcumulado": 0.0023372930000000736,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-07",
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-07",
            "dataReferenciaTaxaDi": "07/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 998.08406771,
            "puEvento": 0,
            "puAposEvento": 998.08406771,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "10/10/2026",
            "dataIso": "2026-10-10",
            "diaUtil": false,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 998.08406771,
            "puJuros": 9.88251163,
            "valorReais": 33421843.09133706,
            "fator": 1.010000502,
            "fatorJurosAcumulado": 1.010000502,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiAcumulado": 1.00764534,
            "fatorSpread": 1.002337293,
            "spread": 0.04,
            "spreadAcumulado": 0.0023372930000000736,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 998.08406771,
            "puEvento": 0,
            "puAposEvento": 998.08406771,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "11/10/2026",
            "dataIso": "2026-10-11",
            "diaUtil": false,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 998.08406771,
            "puJuros": 9.88251163,
            "valorReais": 33421843.09133706,
            "fator": 1.010000502,
            "fatorJurosAcumulado": 1.010000502,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiAcumulado": 1.00764534,
            "fatorSpread": 1.002337293,
            "spread": 0.04,
            "spreadAcumulado": 0.0023372930000000736,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 998.08406771,
            "puEvento": 0,
            "puAposEvento": 998.08406771,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "12/10/2026",
            "dataIso": "2026-10-12",
            "diaUtil": false,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 998.08406771,
            "puJuros": 9.88251163,
            "valorReais": 33421843.09133706,
            "fator": 1.010000502,
            "fatorJurosAcumulado": 1.010000502,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiAcumulado": 1.00764534,
            "fatorSpread": 1.002337293,
            "spread": 0.04,
            "spreadAcumulado": 0.0023372930000000736,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 998.08406771,
            "puEvento": 0,
            "puAposEvento": 998.08406771,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "13/10/2026",
            "dataIso": "2026-10-13",
            "diaUtil": true,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 998.74641277,
            "puJuros": 10.54485669,
            "valorReais": 33444022.37801622,
            "fator": 1.010670755,
            "fatorJurosAcumulado": 1.010670755,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0081571065346004,
            "fatorDiAcumulado": 1.00815711,
            "fatorSpread": 1.002493307,
            "spread": 0.04,
            "spreadAcumulado": 0.0024933069999999447,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-08",
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-08",
            "dataReferenciaTaxaDi": "08/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 998.74641277,
            "puEvento": 0,
            "puAposEvento": 998.74641277,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "14/10/2026",
            "dataIso": "2026-10-14",
            "diaUtil": true,
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 999.4091877,
            "puJuros": 11.20763162,
            "valorReais": 33466216.059322197,
            "fator": 1.011341443,
            "fatorJurosAcumulado": 1.011341443,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0086691293658672,
            "fatorDiAcumulado": 1.00866913,
            "fatorSpread": 1.002649345,
            "spread": 0.04,
            "spreadAcumulado": 0.002649345000000025,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-09",
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-09",
            "dataReferenciaTaxaDi": "09/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 999.4091877,
            "puEvento": 0,
            "puAposEvento": 999.4091877,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "15/10/2026",
            "dataIso": "2026-10-15",
            "diaUtil": true,
            "diasUteis": 18,
            "diasUteisPeriodo": 18,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1000.07240138,
            "puJuros": 11.8708453,
            "valorReais": 33488424.43261068,
            "fator": 1.012012575,
            "fatorJurosAcumulado": 1.012012575,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0091814122432894,
            "fatorDiAcumulado": 1.00918141,
            "fatorSpread": 1.002805407,
            "spread": 0.04,
            "spreadAcumulado": 0.002805407000000093,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-13",
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-13",
            "dataReferenciaTaxaDi": "13/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1000.07240138,
            "puEvento": 0,
            "puAposEvento": 1000.07240138,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "16/10/2026",
            "dataIso": "2026-10-16",
            "diaUtil": true,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1000.73606569,
            "puJuros": 12.53450961,
            "valorReais": 33510647.89569534,
            "fator": 1.012684163,
            "fatorJurosAcumulado": 1.012684163,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0096939552989395,
            "fatorDiAcumulado": 1.00969396,
            "fatorSpread": 1.002961494,
            "spread": 0.04,
            "spreadAcumulado": 0.002961494000000009,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-14",
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-14",
            "dataReferenciaTaxaDi": "14/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1000.73606569,
            "puEvento": 0,
            "puAposEvento": 1000.73606569,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "17/10/2026",
            "dataIso": "2026-10-17",
            "diaUtil": false,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1000.73606569,
            "puJuros": 12.53450961,
            "valorReais": 33510647.89569534,
            "fator": 1.012684163,
            "fatorJurosAcumulado": 1.012684163,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0096939552989395,
            "fatorDiAcumulado": 1.00969396,
            "fatorSpread": 1.002961494,
            "spread": 0.04,
            "spreadAcumulado": 0.002961494000000009,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1000.73606569,
            "puEvento": 0,
            "puAposEvento": 1000.73606569,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "18/10/2026",
            "dataIso": "2026-10-18",
            "diaUtil": false,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1000.73606569,
            "puJuros": 12.53450961,
            "valorReais": 33510647.89569534,
            "fator": 1.012684163,
            "fatorJurosAcumulado": 1.012684163,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0096939552989395,
            "fatorDiAcumulado": 1.00969396,
            "fatorSpread": 1.002961494,
            "spread": 0.04,
            "spreadAcumulado": 0.002961494000000009,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1000.73606569,
            "puEvento": 0,
            "puAposEvento": 1000.73606569,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "19/10/2026",
            "dataIso": "2026-10-19",
            "diaUtil": true,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1001.40015986,
            "puJuros": 13.19860378,
            "valorReais": 33532885.75307196,
            "fator": 1.013356186,
            "fatorJurosAcumulado": 1.013356186,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0102067586649568,
            "fatorDiAcumulado": 1.01020676,
            "fatorSpread": 1.003117605,
            "spread": 0.04,
            "spreadAcumulado": 0.0031176049999999123,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-15",
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-15",
            "dataReferenciaTaxaDi": "15/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1001.40015986,
            "puEvento": 0,
            "puAposEvento": 1001.40015986,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "20/10/2026",
            "dataIso": "2026-10-20",
            "diaUtil": true,
            "diasUteis": 21,
            "diasUteisPeriodo": 21,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1002.06469379,
            "puJuros": 13.86313771,
            "valorReais": 33555138.33625194,
            "fator": 1.014028654,
            "fatorJurosAcumulado": 1.014028654,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0107198224735474,
            "fatorDiAcumulado": 1.01071982,
            "fatorSpread": 1.00327374,
            "spread": 0.04,
            "spreadAcumulado": 0.003273740000000025,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-16",
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-16",
            "dataReferenciaTaxaDi": "16/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1002.06469379,
            "puEvento": 0,
            "puAposEvento": 1002.06469379,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "21/10/2026",
            "dataIso": "2026-10-21",
            "diaUtil": true,
            "diasUteis": 22,
            "diasUteisPeriodo": 22,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1002.72967833,
            "puJuros": 14.52812225,
            "valorReais": 33577406.00855838,
            "fator": 1.014701578,
            "fatorJurosAcumulado": 1.014701578,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0112331468569853,
            "fatorDiAcumulado": 1.01123315,
            "fatorSpread": 1.003429899,
            "spread": 0.04,
            "spreadAcumulado": 0.003429898999999903,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-19",
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-19",
            "dataReferenciaTaxaDi": "19/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1002.72967833,
            "puEvento": 0,
            "puAposEvento": 1002.72967833,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "22/10/2026",
            "dataIso": "2026-10-22",
            "diaUtil": true,
            "diasUteis": 23,
            "diasUteisPeriodo": 23,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1003.39509373,
            "puJuros": 15.19353765,
            "valorReais": 33599688.10864278,
            "fator": 1.015374938,
            "fatorJurosAcumulado": 1.015374938,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.011746731947611,
            "fatorDiAcumulado": 1.01174673,
            "fatorSpread": 1.003586083,
            "spread": 0.04,
            "spreadAcumulado": 0.003586083000000073,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-20",
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-20",
            "dataReferenciaTaxaDi": "20/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1003.39509373,
            "puEvento": 0,
            "puAposEvento": 1003.39509373,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "23/10/2026",
            "dataIso": "2026-10-23",
            "diaUtil": true,
            "diasUteis": 24,
            "diasUteisPeriodo": 24,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1004.06095975,
            "puJuros": 15.85940367,
            "valorReais": 33621985.2981885,
            "fator": 1.016048754,
            "fatorJurosAcumulado": 1.016048754,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0122605778778324,
            "fatorDiAcumulado": 1.01226058,
            "fatorSpread": 1.003742291,
            "spread": 0.04,
            "spreadAcumulado": 0.0037422910000000087,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-21",
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-21",
            "dataReferenciaTaxaDi": "21/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1004.06095975,
            "puEvento": 0,
            "puAposEvento": 1004.06095975,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "24/10/2026",
            "dataIso": "2026-10-24",
            "diaUtil": false,
            "diasUteis": 24,
            "diasUteisPeriodo": 24,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1004.06095975,
            "puJuros": 15.85940367,
            "valorReais": 33621985.2981885,
            "fator": 1.016048754,
            "fatorJurosAcumulado": 1.016048754,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0122605778778324,
            "fatorDiAcumulado": 1.01226058,
            "fatorSpread": 1.003742291,
            "spread": 0.04,
            "spreadAcumulado": 0.0037422910000000087,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1004.06095975,
            "puEvento": 0,
            "puAposEvento": 1004.06095975,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "25/10/2026",
            "dataIso": "2026-10-25",
            "diaUtil": false,
            "diasUteis": 24,
            "diasUteisPeriodo": 24,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1004.06095975,
            "puJuros": 15.85940367,
            "valorReais": 33621985.2981885,
            "fator": 1.016048754,
            "fatorJurosAcumulado": 1.016048754,
            "fatorDiario": 1.0,
            "produtorioFatorDi": 1.0122605778778324,
            "fatorDiAcumulado": 1.01226058,
            "fatorSpread": 1.003742291,
            "spread": 0.04,
            "spreadAcumulado": 0.0037422910000000087,
            "tdk": 0.0,
            "taxaDiUtilizadaDia": 0.0,
            "dataTaxaDiIso": "",
            "dataTaxaDi": "",
            "dataReferenciaTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1004.06095975,
            "puEvento": 0,
            "puAposEvento": 1004.06095975,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "26/10/2026",
            "dataIso": "2026-10-26",
            "diaUtil": true,
            "diasUteis": 25,
            "diasUteisPeriodo": 25,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1004.72725564,
            "puJuros": 16.52569956,
            "valorReais": 33644296.88236104,
            "fator": 1.016723005,
            "fatorJurosAcumulado": 1.016723005,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.012774684780125,
            "fatorDiAcumulado": 1.01277468,
            "fatorSpread": 1.003898523,
            "spread": 0.04,
            "spreadAcumulado": 0.0038985229999999316,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-22",
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-22",
            "dataReferenciaTaxaDi": "22/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1004.72725564,
            "puEvento": 0,
            "puAposEvento": 1004.72725564,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          },
          {
            "data": "27/10/2026",
            "dataIso": "2026-10-27",
            "diaUtil": true,
            "diasUteis": 26,
            "diasUteisPeriodo": 26,
            "quantidade": 33486.0,
            "valorNominal": 988.20155608,
            "puAtualizado": 1005.39400412,
            "puJuros": 17.19244804,
            "valorReais": 33666623.62196232,
            "fator": 1.017397714,
            "fatorJurosAcumulado": 1.017397714,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.013289052787031,
            "fatorDiAcumulado": 1.01328905,
            "fatorSpread": 1.00405478,
            "spread": 0.04,
            "spreadAcumulado": 0.0040547799999999246,
            "tdk": 0.00050788,
            "taxaDiUtilizadaDia": 0.00050788,
            "dataTaxaDiIso": "2026-10-23",
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "dataReferenciaTaxaDi": "23/10/2026",
            "taxaDiStatus": "historica_documentada",
            "lagBusinessDays": 2,
            "puAntesEvento": 1005.39400412,
            "puEvento": 0,
            "puAposEvento": 1005.39400412,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          }
        ],
        "taxaTexto": "CDI + 4.00% a.a.",
        "pu": 1005.39400412,
        "principalResidual": 988.20155608,
        "valor": 33666623.62196232,
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
        "dataPrimeiraIntegralizacaoIso": "2026-07-31",
        "importacaoFundingCaixa": {
          "sourceSheet": "72ª PU SR",
          "sourcePu": 1005.39399425,
          "sourceBalance": 33666623.2914555,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "31/07/2026",
          "periodoFim": "27/10/2026",
          "puFinal": 1005.39400412,
          "diasAcumulacao": 60
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
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-26": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-23": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-22": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-21": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-20": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-19": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-16": {
      "total": 6654.120000000006,
      "totalCalculado": 6654.120000000006,
      "accounts": {
        "cc": 28454.97,
        "contaAplicacao": 0.0,
        "fundoDespesas": 21800.849999999995
      }
    },
    "2026-10-15": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-14": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-13": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-09": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-08": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-07": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-06": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-05": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-02": {
      "total": 6652.560000000001,
      "totalCalculado": 6652.560000000001,
      "accounts": {
        "cc": 35515.88,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-10-01": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-30": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-29": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-28": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-25": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-24": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-23": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-22": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-21": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-18": {
      "total": 6740.100000000002,
      "totalCalculado": 6740.100000000002,
      "accounts": {
        "cc": 35603.42,
        "contaAplicacao": 0.0,
        "fundoDespesas": 28863.319999999996
      }
    },
    "2026-09-17": {
      "total": 1176739.72,
      "totalCalculado": 1176739.72,
      "accounts": {
        "cc": 1210397.2,
        "contaAplicacao": 0.0,
        "fundoDespesas": 33657.479999999996
      }
    },
    "2026-09-16": {
      "total": 1176279.86,
      "totalCalculado": 1176279.86,
      "accounts": {
        "cc": 26726.8,
        "contaAplicacao": 1183210.54,
        "fundoDespesas": 33657.479999999996
      }
    },
    "2026-09-15": {
      "total": 1175820.23,
      "totalCalculado": 1175820.23,
      "accounts": {
        "cc": 26726.8,
        "contaAplicacao": 1182750.91,
        "fundoDespesas": 33657.479999999996
      }
    },
    "2026-09-14": {
      "total": 1175360.81,
      "totalCalculado": 1175360.81,
      "accounts": {
        "cc": 26726.8,
        "contaAplicacao": 1182291.49,
        "fundoDespesas": 33657.479999999996
      }
    },
    "2026-09-11": {
      "total": 1174901.6500000001,
      "totalCalculado": 1174901.6500000001,
      "accounts": {
        "cc": 26726.8,
        "contaAplicacao": 1181832.33,
        "fundoDespesas": 33657.479999999996
      }
    },
    "2026-09-10": {
      "total": 1174442.6900000002,
      "totalCalculado": 1174442.6900000002,
      "accounts": {
        "cc": 26726.8,
        "contaAplicacao": 1181373.37,
        "fundoDespesas": 33657.479999999996
      }
    },
    "2026-09-09": {
      "total": 1173983.54,
      "totalCalculado": 1173983.54,
      "accounts": {
        "cc": 42680.85,
        "contaAplicacao": 1180914.67,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-09-08": {
      "total": 1173525.04,
      "totalCalculado": 1173525.04,
      "accounts": {
        "cc": 42680.85,
        "contaAplicacao": 1180456.17,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-09-04": {
      "total": 1173410.4600000002,
      "totalCalculado": 1173410.4600000002,
      "accounts": {
        "cc": 42680.85,
        "contaAplicacao": 1180341.59,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-09-03": {
      "total": 1172600.0599999998,
      "totalCalculado": 1172600.0599999998,
      "accounts": {
        "cc": 20824.9,
        "contaAplicacao": 1201387.14,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-09-02": {
      "total": 1172133.5799999998,
      "totalCalculado": 1172133.5799999998,
      "accounts": {
        "cc": 20824.9,
        "contaAplicacao": 1200920.66,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-09-01": {
      "total": 1171754.38,
      "totalCalculado": 1171754.38,
      "accounts": {
        "cc": 20911.96,
        "contaAplicacao": 1200454.4,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-08-31": {
      "total": 1171298.0999999999,
      "totalCalculado": 1171298.0999999999,
      "accounts": {
        "cc": 20921.7,
        "contaAplicacao": 1199988.38,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-08-28": {
      "total": 1171296.1,
      "totalCalculado": 1171296.1,
      "accounts": {
        "cc": 1220908.08,
        "contaAplicacao": 0.0,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-08-27": {
      "total": 49172.649999999994,
      "totalCalculado": 49172.649999999994,
      "accounts": {
        "cc": 9050.7,
        "contaAplicacao": 89733.93,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-08-26": {
      "total": 49137.759999999995,
      "totalCalculado": 49137.759999999995,
      "accounts": {
        "cc": 9050.7,
        "contaAplicacao": 89699.04,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-08-25": {
      "total": 49102.89,
      "totalCalculado": 49102.89,
      "accounts": {
        "cc": 9050.7,
        "contaAplicacao": 89664.17,
        "fundoDespesas": 49611.979999999996
      }
    },
    "2026-08-24": {
      "total": 49068.05,
      "totalCalculado": 49068.05,
      "accounts": {
        "cc": 12233.65,
        "contaAplicacao": 89629.32,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-21": {
      "total": 49033.22,
      "totalCalculado": 49033.22,
      "accounts": {
        "cc": 12233.65,
        "contaAplicacao": 89594.49,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-20": {
      "total": 48998.399999999994,
      "totalCalculado": 48998.399999999994,
      "accounts": {
        "cc": 12233.65,
        "contaAplicacao": 89559.67,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-19": {
      "total": 48963.59999999999,
      "totalCalculado": 48963.59999999999,
      "accounts": {
        "cc": 12233.65,
        "contaAplicacao": 89524.87,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-18": {
      "total": 48928.81999999999,
      "totalCalculado": 48928.81999999999,
      "accounts": {
        "cc": 12233.65,
        "contaAplicacao": 89490.09,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-17": {
      "total": 48893.740000000005,
      "totalCalculado": 48893.740000000005,
      "accounts": {
        "cc": 12233.33,
        "contaAplicacao": 89455.33,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-14": {
      "total": 48858.990000000005,
      "totalCalculado": 48858.990000000005,
      "accounts": {
        "cc": 12233.33,
        "contaAplicacao": 89420.58,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-13": {
      "total": 48824.26000000001,
      "totalCalculado": 48824.26000000001,
      "accounts": {
        "cc": 12233.33,
        "contaAplicacao": 89385.85,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-12": {
      "total": 48777.330000000016,
      "totalCalculado": 48777.330000000016,
      "accounts": {
        "cc": 38649.69,
        "contaAplicacao": 120127.64,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-11": {
      "total": 48730.69,
      "totalCalculado": 48730.69,
      "accounts": {
        "cc": 38649.69,
        "contaAplicacao": 120081.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-10": {
      "total": 48684.07000000001,
      "totalCalculado": 48684.07000000001,
      "accounts": {
        "cc": 38649.69,
        "contaAplicacao": 120034.38,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-07": {
      "total": 48637.47,
      "totalCalculado": 48637.47,
      "accounts": {
        "cc": 38649.69,
        "contaAplicacao": 119987.78,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-06": {
      "total": 48637.03,
      "totalCalculado": 48637.03,
      "accounts": {
        "cc": 158637.03,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-05": {
      "total": 1932385.6500000001,
      "totalCalculado": 1932385.6500000001,
      "accounts": {
        "cc": 40023.6,
        "contaAplicacao": 2002362.05,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-04": {
      "total": 1931595.04,
      "totalCalculado": 1931595.04,
      "accounts": {
        "cc": 40023.6,
        "contaAplicacao": 2001571.44,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-03": {
      "total": 1930891.84,
      "totalCalculado": 1930891.84,
      "accounts": {
        "cc": 40110.6,
        "contaAplicacao": 2000781.24,
        "fundoDespesas": 110000.0
      }
    },
    "2026-07-31": {
      "total": 1930102.04,
      "totalCalculado": 1930102.04,
      "accounts": {
        "cc": 40110.6,
        "contaAplicacao": 1999991.44,
        "fundoDespesas": 110000.0
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
      "cra": "cra-carteira-72",
      "number": 72,
      "sourceClass": "SR1",
      "class": "SR1",
      "label": "Senior",
      "kind": "sr",
      "legalSeries": 1,
      "ifCodigo": "CRA0260058Y",
      "spreadAa": 0.04,
      "method": "di_spread_ts_252",
      "maturity": "2027-07-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA0260058Y",
        "legalSeries": 1,
        "registeredMaturity": "30/07/2027",
        "registeredStart": "31/07/2026",
        "registeredRate": "4,0000",
        "registeredLag": "D-1",
        "issuedQuantity": "39.900",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA0260058Y.pdf",
        "documentId": "72-05"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-07-31",
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "72-01",
        "file": "CRA 72ª - 1º Aditamento ao Termo de Securitização - 30 07 2026 (v_assinada).pdf",
        "name": "CRA 72ª - 1º Aditamento ao Termo de Securitização - 30 07 2026 (v_assinada).pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "83cf8953e742a2fcab9ce13a208c9e543c785c17a12e4261a71e28a85e1add73"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
        "Pagamento e quantidade do evento conferidos. Conciliar rateio AF e fatores de CDI posteriores."
      ],
      "calculationStatus": "recalculo_evento_confirmado"
    },
    {
      "cra": "cra-carteira-72",
      "number": 72,
      "sourceClass": "SUB",
      "class": "SUB",
      "label": "Subordinada",
      "kind": "sub",
      "legalSeries": 2,
      "ifCodigo": "CRA0260058Z",
      "spreadAa": null,
      "method": "residual_sem_carteira",
      "maturity": "2027-07-30",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": null,
      "firstPeriodAdditionalBusinessDays": null,
      "controlFirstPeriodAdditionalBusinessDays": null,
      "b3": {
        "ifCodigo": "CRA0260058Z",
        "legalSeries": 2,
        "registeredMaturity": "30/07/2027",
        "registeredStart": "31/07/2026",
        "registeredRate": "0,0001",
        "registeredLag": null,
        "issuedQuantity": "100",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA0260058Z.pdf",
        "documentId": "72-00"
      },
      "positionInSource": false,
      "sourceFirstIntegration": null,
      "rateSource": {
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
      "maturitySource": {
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
      },
      "revolveSource": {
        "id": "72-01",
        "file": "CRA 72ª - 1º Aditamento ao Termo de Securitização - 30 07 2026 (v_assinada).pdf",
        "name": "CRA 72ª - 1º Aditamento ao Termo de Securitização - 30 07 2026 (v_assinada).pdf",
        "pages": [
          4,
          5
        ],
        "sha256": "83cf8953e742a2fcab9ce13a208c9e543c785c17a12e4261a71e28a85e1add73"
      },
      "pending": [
        "Sem posicao integralizada informada; nao presumida como zero ou como quantidade emitida"
      ],
      "calculationStatus": "cadastro_sem_posicao"
    }
  ]
};
