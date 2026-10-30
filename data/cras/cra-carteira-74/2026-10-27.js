window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-74"] = window.LAMINA_CRA_DAILY["cra-carteira-74"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-74"]["2026-10-27"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-74",
    "dateKey": "2026-10-27",
    "reportDate": "27/10/2026",
    "revisionId": "20261027-documentos-20261030-3a880273",
    "importedAt": "2026-10-29T14:03:14.607800-03:00",
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
    "id": "cra-carteira-74",
    "name": "CRA Carteira 74",
    "dateKey": "2026-10-27",
    "dataBase": "27/10/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 10250.010000000002
  },
  "caixa": {
    "accounts": {
      "cc": 39494.14,
      "contaAplicacao": 0.0,
      "fundoDespesas": 29244.129999999997
    },
    "total": 10250.010000000002,
    "totalCalculado": 10250.010000000002,
    "fonte": "Saldo Caixa",
    "arquivoOrigem": "fundings e caixa cras carteiras.xlsx",
    "observacao": "Total informado preservado. Fundo de despesas deduzido uma unica vez. Divergencias sinalizadas."
  },
  "passivo": {
    "fundingTotal": 13777386.941773001,
    "subordinadaTotal": null,
    "subordinadaPuResidual": null,
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA02600592",
        "ehFunding": true,
        "quantidade": 14210.0,
        "valorNominalInicial": 1000,
        "metodo": "di_spread_ts_252",
        "taxaAa": 0,
        "spreadAa": 0.04,
        "indexador": "DI",
        "percentualIndexador": 1,
        "dataInicioIso": "2026-08-10",
        "dataInicio": "10/08/2026",
        "dataVencimentoIso": "2027-12-20",
        "dataVencimento": "20/12/2027",
        "revolvencia": true,
        "eventosAplicados": [
          {
            "data": "10/08/2026",
            "dataIso": "2026-08-10",
            "tipo": "integralizacao",
            "quantidade": 7780.0,
            "valor": 7780000.0,
            "valorEventoReais": 7780000.0,
            "sourceSheet": "74ª PU SR",
            "sourceRow": 4,
            "status": "realizado"
          },
          {
            "data": "14/08/2026",
            "dataIso": "2026-08-14",
            "tipo": "integralizacao",
            "quantidade": 3580.0,
            "valor": 3589637.55,
            "valorEventoReais": 3589637.55,
            "sourceSheet": "74ª PU SR",
            "sourceRow": 5,
            "status": "realizado"
          },
          {
            "data": "26/10/2026",
            "dataIso": "2026-10-26",
            "tipo": "integralizacao",
            "quantidade": 2850.0,
            "valor": 2761401.31,
            "valorEventoReais": 2761401.31,
            "sourceSheet": "74ª PU SR",
            "sourceRow": 6,
            "status": "realizado"
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "tipo": "juros_amortizacao",
            "valorEventoReais": 750000.0,
            "valorJuros": 215808.78272,
            "valorAmortizacao": 534191.21728,
            "puAntesEvento": 1018.997252,
            "puEvento": 66.02112676056338,
            "puAposEvento": 952.97612523,
            "quantidadeNoEvento": 11360.0,
            "sourceSheet": "74ª PU SR",
            "humanConfirmation": {
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
            },
            "observacao": "Quantidade historica no evento. Juros unitarios aprovados; memoria posterior DI D-2. Caixa nao deduzido novamente."
          }
        ],
        "historicoPu": [
          {
            "data": "10/08/2026",
            "dataIso": "2026-08-10",
            "diaUtil": true,
            "quantidade": 7780.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "valorReais": 7780000.0,
            "sourceRow": 14,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "11/08/2026",
            "dataIso": "2026-08-11",
            "diaUtil": true,
            "quantidade": 7780.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.67233,
            "puJuros": 0.6723299999999881,
            "valorReais": 7785230.7274,
            "sourceRow": 15,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "12/08/2026",
            "dataIso": "2026-08-12",
            "diaUtil": true,
            "quantidade": 7780.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1001.345116,
            "puJuros": 1.3451159999999618,
            "valorReais": 7790465.002479999,
            "sourceRow": 16,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "13/08/2026",
            "dataIso": "2026-08-13",
            "diaUtil": true,
            "quantidade": 7780.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.018356,
            "puJuros": 2.01835600000004,
            "valorReais": 7795702.80968,
            "sourceRow": 17,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "14/08/2026",
            "dataIso": "2026-08-14",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.692053,
            "puJuros": 2.692052999999987,
            "valorReais": 11390581.72208,
            "sourceRow": 18,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "17/08/2026",
            "dataIso": "2026-08-17",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1003.366195,
            "puJuros": 3.366194999999948,
            "valorReais": 11398239.9752,
            "sourceRow": 19,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "18/08/2026",
            "dataIso": "2026-08-18",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.040793,
            "puJuros": 4.040793000000008,
            "valorReais": 11405903.40848,
            "sourceRow": 20,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "19/08/2026",
            "dataIso": "2026-08-19",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.715846,
            "puJuros": 4.715846000000056,
            "valorReais": 11413572.01056,
            "sourceRow": 21,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "20/08/2026",
            "dataIso": "2026-08-20",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1005.391355,
            "puJuros": 5.391354999999976,
            "valorReais": 11421245.7928,
            "sourceRow": 22,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "21/08/2026",
            "dataIso": "2026-08-21",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1006.067312,
            "puJuros": 6.067312000000015,
            "valorReais": 11428924.66432,
            "sourceRow": 23,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "24/08/2026",
            "dataIso": "2026-08-24",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1006.743724,
            "puJuros": 6.743724000000043,
            "valorReais": 11436608.704640001,
            "sourceRow": 24,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "25/08/2026",
            "dataIso": "2026-08-25",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1007.420594,
            "puJuros": 7.420594000000051,
            "valorReais": 11444297.947840001,
            "sourceRow": 25,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "26/08/2026",
            "dataIso": "2026-08-26",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.09792,
            "puJuros": 8.097920000000045,
            "valorReais": 11451992.3712,
            "sourceRow": 26,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "27/08/2026",
            "dataIso": "2026-08-27",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.775703,
            "puJuros": 8.775703000000021,
            "valorReais": 11459691.98608,
            "sourceRow": 27,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "28/08/2026",
            "dataIso": "2026-08-28",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1009.453933,
            "puJuros": 9.453933000000006,
            "valorReais": 11467396.67888,
            "sourceRow": 28,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "31/08/2026",
            "dataIso": "2026-08-31",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1010.13262,
            "puJuros": 10.132619999999974,
            "valorReais": 11475106.563199999,
            "sourceRow": 29,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "01/09/2026",
            "dataIso": "2026-09-01",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1010.811766,
            "puJuros": 10.811766000000034,
            "valorReais": 11482821.66176,
            "sourceRow": 30,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "02/09/2026",
            "dataIso": "2026-09-02",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1011.491369,
            "puJuros": 11.491368999999963,
            "valorReais": 11490541.95184,
            "sourceRow": 31,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "03/09/2026",
            "dataIso": "2026-09-03",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.171429,
            "puJuros": 12.17142899999999,
            "valorReais": 11498267.43344,
            "sourceRow": 32,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "04/09/2026",
            "dataIso": "2026-09-04",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.851948,
            "puJuros": 12.851947999999993,
            "valorReais": 11505998.129279999,
            "sourceRow": 33,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "08/09/2026",
            "dataIso": "2026-09-08",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1013.532925,
            "puJuros": 13.532924999999977,
            "valorReais": 11513734.027999999,
            "sourceRow": 34,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "09/09/2026",
            "dataIso": "2026-09-09",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.21436,
            "puJuros": 14.214360000000056,
            "valorReais": 11521475.129600001,
            "sourceRow": 35,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "10/09/2026",
            "dataIso": "2026-09-10",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.896253,
            "puJuros": 14.896253000000002,
            "valorReais": 11529221.43408,
            "sourceRow": 36,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "11/09/2026",
            "dataIso": "2026-09-11",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1015.578606,
            "puJuros": 15.578606000000036,
            "valorReais": 11536972.96416,
            "sourceRow": 37,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "14/09/2026",
            "dataIso": "2026-09-14",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.261417,
            "puJuros": 16.26141700000005,
            "valorReais": 11544729.69712,
            "sourceRow": 38,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "15/09/2026",
            "dataIso": "2026-09-15",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.944686,
            "puJuros": 16.944686000000047,
            "valorReais": 11552491.632960001,
            "sourceRow": 39,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "16/09/2026",
            "dataIso": "2026-09-16",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1017.628416,
            "puJuros": 17.628416000000016,
            "valorReais": 11560258.80576,
            "sourceRow": 40,
            "puEvento": 0,
            "valorEventoReais": 0,
            "taxaDiStatus": "historico_fonte_conciliado"
          },
          {
            "data": "17/09/2026",
            "dataIso": "2026-09-17",
            "diaUtil": true,
            "quantidade": 11360.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1018.312604,
            "puJuros": 18.312603999999965,
            "valorReais": 11568031.18144,
            "sourceRow": 41,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 952.97612523,
            "puJuros": 0.0,
            "valorReais": 10825808.7826128,
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
            "puAntesEvento": 1018.997252,
            "puEvento": 66.02112676056338,
            "puAposEvento": 952.97612523,
            "valorEventoReais": 750000.0,
            "evento": "Juros / amortizacao",
            "eventQuantity": 11360.0
          },
          {
            "data": "19/09/2026",
            "dataIso": "2026-09-19",
            "diaUtil": false,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 952.97612523,
            "puJuros": 0.0,
            "valorReais": 10825808.7826128,
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
            "puAntesEvento": 952.97612523,
            "puEvento": 0,
            "puAposEvento": 952.97612523,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 952.97612523,
            "puJuros": 0.0,
            "valorReais": 10825808.7826128,
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
            "puAntesEvento": 952.97612523,
            "puEvento": 0,
            "puAposEvento": 952.97612523,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 953.60852876,
            "puJuros": 0.63240353,
            "valorReais": 10832992.8867136,
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
            "puAntesEvento": 953.60852876,
            "puEvento": 0,
            "puAposEvento": 953.60852876,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 954.24135351,
            "puJuros": 1.26522828,
            "valorReais": 10840181.7758736,
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
            "puAntesEvento": 954.24135351,
            "puEvento": 0,
            "puAposEvento": 954.24135351,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 954.8745909,
            "puJuros": 1.89846567,
            "valorReais": 10847375.352624001,
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
            "puAntesEvento": 954.8745909,
            "puEvento": 0,
            "puAposEvento": 954.8745909,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 955.50825998,
            "puJuros": 2.53213475,
            "valorReais": 10854573.8333728,
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
            "puAntesEvento": 955.50825998,
            "puEvento": 0,
            "puAposEvento": 955.50825998,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 956.14234171,
            "puJuros": 3.16621648,
            "valorReais": 10861777.001825599,
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
            "puAntesEvento": 956.14234171,
            "puEvento": 0,
            "puAposEvento": 956.14234171,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 956.14234171,
            "puJuros": 3.16621648,
            "valorReais": 10861777.001825599,
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
            "puAntesEvento": 956.14234171,
            "puEvento": 0,
            "puAposEvento": 956.14234171,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 956.14234171,
            "puJuros": 3.16621648,
            "valorReais": 10861777.001825599,
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
            "puAntesEvento": 956.14234171,
            "puEvento": 0,
            "puAposEvento": 956.14234171,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 956.7768456,
            "puJuros": 3.80072037,
            "valorReais": 10868984.966016,
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
            "puAntesEvento": 956.7768456,
            "puEvento": 0,
            "puAposEvento": 956.7768456,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 957.41177071,
            "puJuros": 4.43564548,
            "valorReais": 10876197.7152656,
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
            "puAntesEvento": 957.41177071,
            "puEvento": 0,
            "puAposEvento": 957.41177071,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 958.04711894,
            "puJuros": 5.07099371,
            "valorReais": 10883415.2711584,
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
            "puAntesEvento": 958.04711894,
            "puEvento": 0,
            "puAposEvento": 958.04711894,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 958.68289029,
            "puJuros": 5.70676506,
            "valorReais": 10890637.633694401,
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
            "puAntesEvento": 958.68289029,
            "puEvento": 0,
            "puAposEvento": 958.68289029,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 959.31907523,
            "puJuros": 6.34295,
            "valorReais": 10897864.6946128,
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
            "puAntesEvento": 959.31907523,
            "puEvento": 0,
            "puAposEvento": 959.31907523,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 959.31907523,
            "puJuros": 6.34295,
            "valorReais": 10897864.6946128,
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
            "puAntesEvento": 959.31907523,
            "puEvento": 0,
            "puAposEvento": 959.31907523,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 959.31907523,
            "puJuros": 6.34295,
            "valorReais": 10897864.6946128,
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
            "puAntesEvento": 959.31907523,
            "puEvento": 0,
            "puAposEvento": 959.31907523,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 959.95569282,
            "puJuros": 6.97956759,
            "valorReais": 10905096.6704352,
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
            "puAntesEvento": 959.95569282,
            "puEvento": 0,
            "puAposEvento": 959.95569282,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 960.59272306,
            "puJuros": 7.61659783,
            "valorReais": 10912333.3339616,
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
            "puAntesEvento": 960.59272306,
            "puEvento": 0,
            "puAposEvento": 960.59272306,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 961.23018689,
            "puJuros": 8.25406166,
            "valorReais": 10919574.923070401,
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
            "puAntesEvento": 961.23018689,
            "puEvento": 0,
            "puAposEvento": 961.23018689,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 961.86806432,
            "puJuros": 8.89193909,
            "valorReais": 10926821.2106752,
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
            "puAntesEvento": 961.86806432,
            "puEvento": 0,
            "puAposEvento": 961.86806432,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 962.50636487,
            "puJuros": 9.53023964,
            "valorReais": 10934072.3049232,
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
            "puAntesEvento": 962.50636487,
            "puEvento": 0,
            "puAposEvento": 962.50636487,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 962.50636487,
            "puJuros": 9.53023964,
            "valorReais": 10934072.3049232,
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
            "puAntesEvento": 962.50636487,
            "puEvento": 0,
            "puAposEvento": 962.50636487,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 962.50636487,
            "puJuros": 9.53023964,
            "valorReais": 10934072.3049232,
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
            "puAntesEvento": 962.50636487,
            "puEvento": 0,
            "puAposEvento": 962.50636487,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 962.50636487,
            "puJuros": 9.53023964,
            "valorReais": 10934072.3049232,
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
            "puAntesEvento": 962.50636487,
            "puEvento": 0,
            "puAposEvento": 962.50636487,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 963.14509998,
            "puJuros": 10.16897475,
            "valorReais": 10941328.335772801,
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
            "puAntesEvento": 963.14509998,
            "puEvento": 0,
            "puAposEvento": 963.14509998,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 963.78424963,
            "puJuros": 10.8081244,
            "valorReais": 10948589.0757968,
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
            "puAntesEvento": 963.78424963,
            "puEvento": 0,
            "puAposEvento": 963.78424963,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 964.4238224,
            "puJuros": 11.44769717,
            "valorReais": 10955854.622464,
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
            "puAntesEvento": 964.4238224,
            "puEvento": 0,
            "puAposEvento": 964.4238224,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 965.06382973,
            "puJuros": 12.0877045,
            "valorReais": 10963125.105732799,
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
            "puAntesEvento": 965.06382973,
            "puEvento": 0,
            "puAposEvento": 965.06382973,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 965.06382973,
            "puJuros": 12.0877045,
            "valorReais": 10963125.105732799,
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
            "puAntesEvento": 965.06382973,
            "puEvento": 0,
            "puAposEvento": 965.06382973,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 965.06382973,
            "puJuros": 12.0877045,
            "valorReais": 10963125.105732799,
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
            "puAntesEvento": 965.06382973,
            "puEvento": 0,
            "puAposEvento": 965.06382973,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 965.70425161,
            "puJuros": 12.72812638,
            "valorReais": 10970400.2982896,
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
            "puAntesEvento": 965.70425161,
            "puEvento": 0,
            "puAposEvento": 965.70425161,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 966.34509756,
            "puJuros": 13.36897233,
            "valorReais": 10977680.3082816,
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
            "puAntesEvento": 966.34509756,
            "puEvento": 0,
            "puAposEvento": 966.34509756,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 966.98637806,
            "puJuros": 14.01025283,
            "valorReais": 10984965.254761599,
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
            "puAntesEvento": 966.98637806,
            "puEvento": 0,
            "puAposEvento": 966.98637806,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 967.62807407,
            "puJuros": 14.65194884,
            "valorReais": 10992254.9214352,
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
            "puAntesEvento": 967.62807407,
            "puEvento": 0,
            "puAposEvento": 967.62807407,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 968.27020463,
            "puJuros": 15.2940794,
            "valorReais": 10999549.5245968,
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
            "puAntesEvento": 968.27020463,
            "puEvento": 0,
            "puAposEvento": 968.27020463,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 968.27020463,
            "puJuros": 15.2940794,
            "valorReais": 10999549.5245968,
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
            "puAntesEvento": 968.27020463,
            "puEvento": 0,
            "puAposEvento": 968.27020463,
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
            "quantidade": 11360.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 968.27020463,
            "puJuros": 15.2940794,
            "valorReais": 10999549.5245968,
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
            "puAntesEvento": 968.27020463,
            "puEvento": 0,
            "puAposEvento": 968.27020463,
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
            "quantidade": 14210.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 968.91274973,
            "puJuros": 15.9366245,
            "valorReais": 13768250.1736633,
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
            "puAntesEvento": 968.91274973,
            "puEvento": 0,
            "puAposEvento": 968.91274973,
            "valorEventoReais": 0,
            "evento": "Integralizacao",
            "eventQuantity": null
          },
          {
            "data": "27/10/2026",
            "dataIso": "2026-10-27",
            "diaUtil": true,
            "diasUteis": 26,
            "diasUteisPeriodo": 26,
            "quantidade": 14210.0,
            "valorNominal": 952.97612523,
            "puAtualizado": 969.5557313,
            "puJuros": 16.57960607,
            "valorReais": 13777386.941773001,
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
            "puAntesEvento": 969.5557313,
            "puEvento": 0,
            "puAposEvento": 969.5557313,
            "valorEventoReais": 0,
            "evento": "",
            "eventQuantity": null
          }
        ],
        "taxaTexto": "CDI + 4.00% a.a.",
        "pu": 969.5557313,
        "principalResidual": 952.97612523,
        "valor": 13777386.941773001,
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
        "dataPrimeiraIntegralizacaoIso": "2026-08-10",
        "importacaoFundingCaixa": {
          "sourceSheet": "74ª PU SR",
          "sourcePu": 983.02748581,
          "sourceBalance": 13968820.5733601,
          "calculation": "pu_planilha_pendente_validacao"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "10/08/2026",
          "periodoFim": "27/10/2026",
          "puFinal": 969.5557313,
          "diasAcumulacao": 54
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
      "total": 10250.010000000002,
      "totalCalculado": 10250.010000000002,
      "accounts": {
        "cc": 39494.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-26": {
      "total": 10250.010000000002,
      "totalCalculado": 10250.010000000002,
      "accounts": {
        "cc": 39494.14,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-23": {
      "total": 3793.4500000000044,
      "totalCalculado": 3793.4500000000044,
      "accounts": {
        "cc": 33037.58,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-22": {
      "total": 3793.4500000000044,
      "totalCalculado": 3793.4500000000044,
      "accounts": {
        "cc": 33037.58,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-21": {
      "total": 3793.4500000000044,
      "totalCalculado": 3793.4500000000044,
      "accounts": {
        "cc": 33037.58,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-20": {
      "total": 3793.4500000000044,
      "totalCalculado": 3793.4500000000044,
      "accounts": {
        "cc": 33037.58,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-19": {
      "total": 3793.4500000000044,
      "totalCalculado": 3793.4500000000044,
      "accounts": {
        "cc": 33037.58,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-16": {
      "total": 3793.4500000000044,
      "totalCalculado": 3793.4500000000044,
      "accounts": {
        "cc": 33037.58,
        "contaAplicacao": 0.0,
        "fundoDespesas": 29244.129999999997
      }
    },
    "2026-10-15": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-14": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-13": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-09": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-08": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-07": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-06": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-05": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-02": {
      "total": 3792.7400000000016,
      "totalCalculado": 3792.7400000000016,
      "accounts": {
        "cc": 35848.0,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-10-01": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-30": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-29": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-28": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-25": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-24": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-23": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-22": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-21": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-18": {
      "total": 4144.220000000005,
      "totalCalculado": 4144.220000000005,
      "accounts": {
        "cc": 36199.48,
        "contaAplicacao": 0.0,
        "fundoDespesas": 32055.26
      }
    },
    "2026-09-17": {
      "total": 754143.39,
      "totalCalculado": 754143.39,
      "accounts": {
        "cc": 790992.81,
        "contaAplicacao": 0.0,
        "fundoDespesas": 36849.42
      }
    },
    "2026-09-16": {
      "total": 753850.5399999999,
      "totalCalculado": 753850.5399999999,
      "accounts": {
        "cc": 37514.71,
        "contaAplicacao": 753185.25,
        "fundoDespesas": 36849.42
      }
    },
    "2026-09-15": {
      "total": 753557.8099999999,
      "totalCalculado": 753557.8099999999,
      "accounts": {
        "cc": 37514.71,
        "contaAplicacao": 752892.52,
        "fundoDespesas": 36849.42
      }
    },
    "2026-09-14": {
      "total": 753265.2499999999,
      "totalCalculado": 753265.2499999999,
      "accounts": {
        "cc": 37514.71,
        "contaAplicacao": 752599.96,
        "fundoDespesas": 36849.42
      }
    },
    "2026-09-11": {
      "total": 752972.82,
      "totalCalculado": 752972.82,
      "accounts": {
        "cc": 37514.71,
        "contaAplicacao": 752307.53,
        "fundoDespesas": 36849.42
      }
    },
    "2026-09-10": {
      "total": 752680.5399999999,
      "totalCalculado": 752680.5399999999,
      "accounts": {
        "cc": 37514.71,
        "contaAplicacao": 752015.25,
        "fundoDespesas": 36849.42
      }
    },
    "2026-09-09": {
      "total": 752394.61,
      "totalCalculado": 752394.61,
      "accounts": {
        "cc": 53466.41,
        "contaAplicacao": 751723.12,
        "fundoDespesas": 52794.92
      }
    },
    "2026-09-08": {
      "total": 752102.63,
      "totalCalculado": 752102.63,
      "accounts": {
        "cc": 53466.41,
        "contaAplicacao": 751431.14,
        "fundoDespesas": 52794.92
      }
    },
    "2026-09-04": {
      "total": 752029.65,
      "totalCalculado": 752029.65,
      "accounts": {
        "cc": 53466.41,
        "contaAplicacao": 751358.16,
        "fundoDespesas": 52794.92
      }
    },
    "2026-09-03": {
      "total": 751519.09,
      "totalCalculado": 751519.09,
      "accounts": {
        "cc": 53466.41,
        "contaAplicacao": 750847.6,
        "fundoDespesas": 52794.92
      }
    },
    "2026-09-02": {
      "total": 751227.55,
      "totalCalculado": 751227.55,
      "accounts": {
        "cc": 53466.41,
        "contaAplicacao": 750556.06,
        "fundoDespesas": 52794.92
      }
    },
    "2026-09-01": {
      "total": 751288.2,
      "totalCalculado": 751288.2,
      "accounts": {
        "cc": 53818.47,
        "contaAplicacao": 750264.65,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-31": {
      "total": 750996.95,
      "totalCalculado": 750996.95,
      "accounts": {
        "cc": 53818.47,
        "contaAplicacao": 749973.4,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-28": {
      "total": 750692.25,
      "totalCalculado": 750692.25,
      "accounts": {
        "cc": 19968.0,
        "contaAplicacao": 783519.17,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-27": {
      "total": 750387.71,
      "totalCalculado": 750387.71,
      "accounts": {
        "cc": 19968.0,
        "contaAplicacao": 783214.63,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-26": {
      "total": 750083.32,
      "totalCalculado": 750083.32,
      "accounts": {
        "cc": 19968.0,
        "contaAplicacao": 782910.24,
        "fundoDespesas": 52794.92
      }
    },
    "2026-08-25": {
      "total": 749769.86,
      "totalCalculado": 749769.86,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 802772.27,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-24": {
      "total": 749457.9299999999,
      "totalCalculado": 749457.9299999999,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 802460.34,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-21": {
      "total": 749146.1699999999,
      "totalCalculado": 749146.1699999999,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 802148.58,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-20": {
      "total": 748834.5599999999,
      "totalCalculado": 748834.5599999999,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 801836.97,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-19": {
      "total": 748523.11,
      "totalCalculado": 748523.11,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 801525.52,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-18": {
      "total": 748211.83,
      "totalCalculado": 748211.83,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 801214.24,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-17": {
      "total": 747900.6799999999,
      "totalCalculado": 747900.6799999999,
      "accounts": {
        "cc": 56997.59,
        "contaAplicacao": 800903.09,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-14": {
      "total": 747589.16,
      "totalCalculado": 747589.16,
      "accounts": {
        "cc": 56997.05,
        "contaAplicacao": 800592.11,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-13": {
      "total": 745158.04,
      "totalCalculado": 745158.04,
      "accounts": {
        "cc": 54876.76,
        "contaAplicacao": 800281.28,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-12": {
      "total": 744847.37,
      "totalCalculado": 744847.37,
      "accounts": {
        "cc": 54876.76,
        "contaAplicacao": 799970.61,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-11": {
      "total": 744846.47,
      "totalCalculado": 744846.47,
      "accounts": {
        "cc": 854846.47,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
      }
    },
    "2026-08-10": {
      "total": 744846.47,
      "totalCalculado": 744846.47,
      "accounts": {
        "cc": 854846.47,
        "contaAplicacao": 0.0,
        "fundoDespesas": 110000.0
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
      "cra": "cra-carteira-74",
      "number": 74,
      "sourceClass": "SR1",
      "class": "SR1",
      "label": "Senior",
      "kind": "sr",
      "legalSeries": 1,
      "ifCodigo": "CRA02600592",
      "spreadAa": 0.04,
      "method": "di_spread_ts_252",
      "maturity": "2027-12-20",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": 2,
      "firstPeriodAdditionalBusinessDays": 1,
      "controlFirstPeriodAdditionalBusinessDays": 0,
      "b3": {
        "ifCodigo": "CRA02600592",
        "legalSeries": 1,
        "registeredMaturity": "20/12/2027",
        "registeredStart": "30/07/2026",
        "registeredRate": "4,0000",
        "registeredLag": "D-1",
        "issuedQuantity": "39.900",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA02600592.pdf",
        "documentId": "74-06"
      },
      "positionInSource": true,
      "sourceFirstIntegration": "2026-08-10",
      "rateSource": {
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
      "maturitySource": {
        "id": "74-01",
        "file": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "name": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "pages": [
          1,
          4,
          6
        ],
        "sha256": "7bcf0081a5d37997e25514383a9e0c26c486e78131944939f1fa1c028fda15bc"
      },
      "revolveSource": {
        "id": "74-01",
        "file": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "name": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "pages": [
          6,
          7
        ],
        "sha256": "7bcf0081a5d37997e25514383a9e0c26c486e78131944939f1fa1c028fda15bc"
      },
      "pending": [
        "Comprovantes de subscricao/integralizacao para confirmar quantidade e preco",
        "Ficha B3 informa D-1; termo contratual determina D-2. Conciliar cadastro com AF/B3.",
        "Pagamento e quantidade do evento conferidos. Conciliar rateio AF e fatores de CDI posteriores."
      ],
      "calculationStatus": "recalculo_evento_confirmado"
    },
    {
      "cra": "cra-carteira-74",
      "number": 74,
      "sourceClass": "SUB",
      "class": "SUB",
      "label": "Subordinada",
      "kind": "sub",
      "legalSeries": 2,
      "ifCodigo": "CRA02600593",
      "spreadAa": null,
      "method": "residual_sem_carteira",
      "maturity": "2027-12-20",
      "revolvencia": true,
      "revolvenciaRegra": "Alocacao em ate 180 dias; ate 90 dias antes do vencimento",
      "lagBusinessDays": null,
      "firstPeriodAdditionalBusinessDays": null,
      "controlFirstPeriodAdditionalBusinessDays": null,
      "b3": {
        "ifCodigo": "CRA02600593",
        "legalSeries": 2,
        "registeredMaturity": "20/12/2027",
        "registeredStart": "30/07/2026",
        "registeredRate": "0,0001",
        "registeredLag": null,
        "issuedQuantity": "100",
        "issuedPu": "1.000,00000000",
        "emissionDate": "20/07/2026",
        "file": "CRA02600593.pdf",
        "documentId": "74-00"
      },
      "positionInSource": false,
      "sourceFirstIntegration": null,
      "rateSource": {
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
      "maturitySource": {
        "id": "74-01",
        "file": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "name": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "pages": [
          1,
          4,
          6
        ],
        "sha256": "7bcf0081a5d37997e25514383a9e0c26c486e78131944939f1fa1c028fda15bc"
      },
      "revolveSource": {
        "id": "74-01",
        "file": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "name": "CRA 74 - 1º adit. Termo de Securitização - 06 08 2026-Assinado.pdf",
        "pages": [
          6,
          7
        ],
        "sha256": "7bcf0081a5d37997e25514383a9e0c26c486e78131944939f1fa1c028fda15bc"
      },
      "pending": [
        "Sem posicao integralizada informada; nao presumida como zero ou como quantidade emitida"
      ],
      "calculationStatus": "cadastro_sem_posicao"
    }
  ]
};
