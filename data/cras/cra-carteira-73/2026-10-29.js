window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-73"] = window.LAMINA_CRA_DAILY["cra-carteira-73"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-73"]["2026-10-29"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-73",
    "dateKey": "2026-10-29",
    "reportDate": "29/10/2026",
    "revisionId": "20261029-caixa-texto-0674c15d6ed1-reported-total_informado",
    "importedAt": "2026-11-05T17:07:27.425970-03:00",
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
    },
    "cashDateKey": "2026-10-29",
    "cashOnlyTextImport": {
      "source": "Texto colado.txt",
      "sha256": "0674c15d6ed190bf6c03b4e7e283e500f1d031684388d3e6bdd6d9ff75baeb1d",
      "noPortfolioReprocessing": true
    }
  },
  "cra": {
    "id": "cra-carteira-73",
    "name": "CRA Carteira 73",
    "dateKey": "2026-10-29",
    "dataBase": "29/10/2026"
  },
  "ativo": {
    "total": null,
    "caixa": 0.0
  },
  "caixa": {
    "accounts": {
      "cc": 37951.45,
      "contaAplicacao": 0.0,
      "fundoDespesas": 85501.34
    },
    "total": 0.0,
    "totalInformado": 0.0,
    "totalCalculado": -47549.89,
    "fonte": "Texto de saldos informado por Leonardo",
    "arquivoOrigem": "Texto colado.txt",
    "contaCorrenteIdentificacao": "99887-1 (ITAU)",
    "totalPolicy": "total_informado",
    "reservaInsuficiente": 47549.89,
    "observacao": "Reserva de despesas deduzida uma unica vez. Total da fonte preservado, salvo ajuste explicitamente confirmado."
  },
  "passivo": {
    "fundingTotal": 37063515.253476,
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
            "tipo": "juros",
            "valorEventoReais": 263000.0,
            "valorJuros": 263000.0,
            "valorAmortizacao": 0.0,
            "puEvento": 7.325905292479109,
            "puAposEvento": 1009.6897627,
            "sourceSheet": "73ª PU SR",
            "sourceCells": {
              "saldoemconta": "Q16",
              "pujuros": "Q17",
              "valorjuros": "Q18",
              "valoramortizacao": "Q19",
              "puamortizacao": "Q20",
              "saldodevedor": "Q21"
            },
            "puAntesEvento": 1017.015668,
            "principalAntesEvento": 1000.0,
            "principalAposEvento": 1009.6897627,
            "puJurosIncorporados": 9.6897627,
            "valorJurosIncorporados": 347862.48,
            "tipoEvento": "Juros com incorporacao do saldo",
            "quantidadeNoEvento": 35900.0,
            "puAmortizacao": 0,
            "incorporacaoConfirmadaEm": "2026-11-03",
            "puAposEventoImagem": 1009.68097971
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
            "fator": 1,
            "puAntesEvento": 1000.0,
            "puEvento": 0.0,
            "puAposEvento": 1000.0,
            "principalAposEvento": 1000.0,
            "valorReais": 35900000.0,
            "valorEventoReais": 0,
            "evento": "Integralizacao",
            "taxaDiStatus": "integralizacao_sem_acrescimo_diario",
            "sourceRow": 14,
            "fatorJurosAcumulado": 1,
            "fatorDiAcumulado": 1,
            "fatorDiArredondado": 1,
            "fatorSpread": 1,
            "produtorioFatorDi": 1,
            "spreadAcumulado": 0,
            "principalAntesEvento": 1000.0,
            "taxaDiUtilizadaDia": 0,
            "tdk": 0,
            "fatorDiario": 1,
            "dataTaxaDi": "",
            "dataTaxaDiIso": "",
            "dataReferenciaTaxaDi": "",
            "dataReferenciaTaxaDiIso": ""
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
            "puJuros": 0.803776,
            "fator": 1.000803776,
            "puAntesEvento": 1000.803776,
            "puEvento": 0.0,
            "puAposEvento": 1000.803776,
            "principalAposEvento": 1000.0,
            "valorReais": 35928855.5584,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 15,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.000803776,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0005166,
            "fatorDiAcumulado": 1.0005166,
            "fatorDiArredondado": 1.0005166,
            "fatorSpread": 1.000287028,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-18",
            "dataTaxaDi": "18/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-18",
            "dataReferenciaTaxaDi": "18/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
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
            "puJuros": 1.608201,
            "fator": 1.001608201,
            "puAntesEvento": 1001.608201,
            "puEvento": 0.0,
            "puAposEvento": 1001.608201,
            "principalAposEvento": 1000.0,
            "valorReais": 35957734.4159,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 16,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.001608201,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.00103346687556,
            "fatorDiAcumulado": 1.00103347,
            "fatorDiArredondado": 1.00103347,
            "fatorSpread": 1.000574138,
            "spread": 0.075,
            "spreadAcumulado": 0.0005741379999999463,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-19",
            "dataTaxaDi": "19/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-19",
            "dataReferenciaTaxaDi": "19/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "24/08/2026",
            "dataIso": "2026-08-24",
            "diaUtil": true,
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.413267,
            "puJuros": 2.413267,
            "fator": 1.002413267,
            "puAntesEvento": 1002.413267,
            "puEvento": 0.0,
            "puAposEvento": 1002.413267,
            "principalAposEvento": 1000.0,
            "valorReais": 35986636.2853,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 17,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.002413267,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0015506007645478,
            "fatorDiAcumulado": 1.0015506,
            "fatorDiArredondado": 1.0015506,
            "fatorSpread": 1.000861331,
            "spread": 0.075,
            "spreadAcumulado": 0.0008613310000000762,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-20",
            "dataTaxaDi": "20/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-20",
            "dataReferenciaTaxaDi": "20/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "25/08/2026",
            "dataIso": "2026-08-25",
            "diaUtil": true,
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1003.218981,
            "puJuros": 3.218981,
            "fator": 1.003218981,
            "puAntesEvento": 1003.218981,
            "puEvento": 0.0,
            "puAposEvento": 1003.218981,
            "principalAposEvento": 1000.0,
            "valorReais": 36015561.417899996,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 18,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.003218981,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0020680018049029,
            "fatorDiAcumulado": 1.002068,
            "fatorDiArredondado": 1.002068,
            "fatorSpread": 1.001148606,
            "spread": 0.075,
            "spreadAcumulado": 0.0011486060000001075,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-21",
            "dataTaxaDi": "21/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-21",
            "dataReferenciaTaxaDi": "21/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "26/08/2026",
            "dataIso": "2026-08-26",
            "diaUtil": true,
            "diasUteis": 5,
            "diasUteisPeriodo": 5,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.025347,
            "puJuros": 4.025347,
            "fator": 1.004025347,
            "puAntesEvento": 1004.025347,
            "puEvento": 0.0,
            "puAposEvento": 1004.025347,
            "principalAposEvento": 1000.0,
            "valorReais": 36044509.9573,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 19,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.004025347,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0025856701346352,
            "fatorDiAcumulado": 1.00258567,
            "fatorDiArredondado": 1.00258567,
            "fatorSpread": 1.001435964,
            "spread": 0.075,
            "spreadAcumulado": 0.0014359639999999008,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-24",
            "dataTaxaDi": "24/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-24",
            "dataReferenciaTaxaDi": "24/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "27/08/2026",
            "dataIso": "2026-08-27",
            "diaUtil": true,
            "diasUteis": 6,
            "diasUteisPeriodo": 6,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1004.832363,
            "puJuros": 4.832363,
            "fator": 1.004832363,
            "puAntesEvento": 1004.832363,
            "puEvento": 0.0,
            "puAposEvento": 1004.832363,
            "principalAposEvento": 1000.0,
            "valorReais": 36073481.8317,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 20,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.004832363,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0031036058918268,
            "fatorDiAcumulado": 1.00310361,
            "fatorDiArredondado": 1.00310361,
            "fatorSpread": 1.001723404,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-25",
            "dataTaxaDi": "25/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-25",
            "dataReferenciaTaxaDi": "25/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "28/08/2026",
            "dataIso": "2026-08-28",
            "diaUtil": true,
            "diasUteis": 7,
            "diasUteisPeriodo": 7,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1005.640019,
            "puJuros": 5.640019,
            "fator": 1.005640019,
            "puAntesEvento": 1005.640019,
            "puEvento": 0.0,
            "puAposEvento": 1005.640019,
            "principalAposEvento": 1000.0,
            "valorReais": 36102476.682100005,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 21,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.005640019,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0036218092146303,
            "fatorDiAcumulado": 1.00362181,
            "fatorDiArredondado": 1.00362181,
            "fatorSpread": 1.002010926,
            "spread": 0.075,
            "spreadAcumulado": 0.0020109260000000795,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-26",
            "dataTaxaDi": "26/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-26",
            "dataReferenciaTaxaDi": "26/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "31/08/2026",
            "dataIso": "2026-08-31",
            "diaUtil": true,
            "diasUteis": 8,
            "diasUteisPeriodo": 8,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1006.448329,
            "puJuros": 6.448329,
            "fator": 1.006448329,
            "puAntesEvento": 1006.448329,
            "puEvento": 0.0,
            "puAposEvento": 1006.448329,
            "principalAposEvento": 1000.0,
            "valorReais": 36131495.0111,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 22,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.006448329,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0041402802412707,
            "fatorDiAcumulado": 1.00414028,
            "fatorDiArredondado": 1.00414028,
            "fatorSpread": 1.002298532,
            "spread": 0.075,
            "spreadAcumulado": 0.0022985319999999643,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-27",
            "dataTaxaDi": "27/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-27",
            "dataReferenciaTaxaDi": "27/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "01/09/2026",
            "dataIso": "2026-09-01",
            "diaUtil": true,
            "diasUteis": 9,
            "diasUteisPeriodo": 9,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1007.257288,
            "puJuros": 7.257288,
            "fator": 1.007257288,
            "puAntesEvento": 1007.257288,
            "puEvento": 0.0,
            "puAposEvento": 1007.257288,
            "principalAposEvento": 1000.0,
            "valorReais": 36160536.6392,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 23,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.007257288,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0046590191100433,
            "fatorDiAcumulado": 1.00465902,
            "fatorDiArredondado": 1.00465902,
            "fatorSpread": 1.002586219,
            "spread": 0.075,
            "spreadAcumulado": 0.0025862189999998897,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-28",
            "dataTaxaDi": "28/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-28",
            "dataReferenciaTaxaDi": "28/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "02/09/2026",
            "dataIso": "2026-09-02",
            "diaUtil": true,
            "diasUteis": 10,
            "diasUteisPeriodo": 10,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.066902,
            "puJuros": 8.066902,
            "fator": 1.008066902,
            "puAntesEvento": 1008.066902,
            "puEvento": 0.0,
            "puAposEvento": 1008.066902,
            "principalAposEvento": 1000.0,
            "valorReais": 36189601.7818,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 24,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.008066902,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0051780259593155,
            "fatorDiAcumulado": 1.00517803,
            "fatorDiArredondado": 1.00517803,
            "fatorSpread": 1.00287399,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-08-31",
            "dataTaxaDi": "31/08/2026",
            "dataReferenciaTaxaDiIso": "2026-08-31",
            "dataReferenciaTaxaDi": "31/08/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "03/09/2026",
            "dataIso": "2026-09-03",
            "diaUtil": true,
            "diasUteis": 11,
            "diasUteisPeriodo": 11,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1008.877156,
            "puJuros": 8.877156,
            "fator": 1.008877156,
            "puAntesEvento": 1008.877156,
            "puEvento": 0.0,
            "puAposEvento": 1008.877156,
            "principalAposEvento": 1000.0,
            "valorReais": 36218689.9004,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 25,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.008877156,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0056973009275259,
            "fatorDiAcumulado": 1.0056973,
            "fatorDiArredondado": 1.0056973,
            "fatorSpread": 1.003161842,
            "spread": 0.075,
            "spreadAcumulado": 0.0031618419999999148,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-01",
            "dataTaxaDi": "01/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-01",
            "dataReferenciaTaxaDi": "01/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "04/09/2026",
            "dataIso": "2026-09-04",
            "diaUtil": true,
            "diasUteis": 12,
            "diasUteisPeriodo": 12,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1009.688065,
            "puJuros": 9.688065,
            "fator": 1.009688065,
            "puAntesEvento": 1009.688065,
            "puEvento": 0.0,
            "puAposEvento": 1009.688065,
            "principalAposEvento": 1000.0,
            "valorReais": 36247801.5335,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 26,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.009688065,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.006216844153185,
            "fatorDiAcumulado": 1.00621684,
            "fatorDiArredondado": 1.00621684,
            "fatorSpread": 1.003449778,
            "spread": 0.075,
            "spreadAcumulado": 0.0034497780000000144,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-02",
            "dataTaxaDi": "02/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-02",
            "dataReferenciaTaxaDi": "02/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "08/09/2026",
            "dataIso": "2026-09-08",
            "diaUtil": true,
            "diasUteis": 13,
            "diasUteisPeriodo": 13,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1010.499636,
            "puJuros": 10.499636,
            "fator": 1.010499636,
            "puAntesEvento": 1010.499636,
            "puEvento": 0.0,
            "puAposEvento": 1010.499636,
            "principalAposEvento": 1000.0,
            "valorReais": 36276936.9324,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 27,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.010499636,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0067366557748745,
            "fatorDiAcumulado": 1.00673666,
            "fatorDiArredondado": 1.00673666,
            "fatorSpread": 1.003737796,
            "spread": 0.075,
            "spreadAcumulado": 0.0037377960000000154,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-03",
            "dataTaxaDi": "03/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-03",
            "dataReferenciaTaxaDi": "03/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "09/09/2026",
            "dataIso": "2026-09-09",
            "diaUtil": true,
            "diasUteis": 14,
            "diasUteisPeriodo": 14,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1011.311852,
            "puJuros": 11.311852,
            "fator": 1.011311852,
            "puAntesEvento": 1011.311852,
            "puEvento": 0.0,
            "puAposEvento": 1011.311852,
            "principalAposEvento": 1000.0,
            "valorReais": 36306095.4868,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 28,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.011311852,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0072567359312479,
            "fatorDiAcumulado": 1.00725674,
            "fatorDiArredondado": 1.00725674,
            "fatorSpread": 1.004025897,
            "spread": 0.075,
            "spreadAcumulado": 0.0040258970000000005,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-04",
            "dataTaxaDi": "04/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-04",
            "dataReferenciaTaxaDi": "04/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "10/09/2026",
            "dataIso": "2026-09-10",
            "diaUtil": true,
            "diasUteis": 15,
            "diasUteisPeriodo": 15,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.124711,
            "puJuros": 12.124711,
            "fator": 1.012124711,
            "puAntesEvento": 1012.124711,
            "puEvento": 0.0,
            "puAposEvento": 1012.124711,
            "principalAposEvento": 1000.0,
            "valorReais": 36335277.1249,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 29,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.012124711,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.00777708476103,
            "fatorDiAcumulado": 1.00777708,
            "fatorDiArredondado": 1.00777708,
            "fatorSpread": 1.00431408,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-08",
            "dataTaxaDi": "08/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-08",
            "dataReferenciaTaxaDi": "08/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "11/09/2026",
            "dataIso": "2026-09-11",
            "diaUtil": true,
            "diasUteis": 16,
            "diasUteisPeriodo": 16,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1012.938235,
            "puJuros": 12.938235,
            "fator": 1.012938235,
            "puAntesEvento": 1012.938235,
            "puEvento": 0.0,
            "puAposEvento": 1012.938235,
            "principalAposEvento": 1000.0,
            "valorReais": 36364482.6365,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 30,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.012938235,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0082977024030173,
            "fatorDiAcumulado": 1.0082977,
            "fatorDiArredondado": 1.0082977,
            "fatorSpread": 1.004602346,
            "spread": 0.075,
            "spreadAcumulado": 0.004602345999999979,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-09",
            "dataTaxaDi": "09/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-09",
            "dataReferenciaTaxaDi": "09/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "14/09/2026",
            "dataIso": "2026-09-14",
            "diaUtil": true,
            "diasUteis": 17,
            "diasUteisPeriodo": 17,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1013.752414,
            "puJuros": 13.752414,
            "fator": 1.013752414,
            "puAntesEvento": 1013.752414,
            "puEvento": 0.0,
            "puAposEvento": 1013.752414,
            "principalAposEvento": 1000.0,
            "valorReais": 36393711.6626,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 31,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.013752414,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0088185889960786,
            "fatorDiAcumulado": 1.00881859,
            "fatorDiArredondado": 1.00881859,
            "fatorSpread": 1.004890695,
            "spread": 0.075,
            "spreadAcumulado": 0.004890695000000056,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-10",
            "dataTaxaDi": "10/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-10",
            "dataReferenciaTaxaDi": "10/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "15/09/2026",
            "dataIso": "2026-09-15",
            "diaUtil": true,
            "diasUteis": 18,
            "diasUteisPeriodo": 18,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1014.567239,
            "puJuros": 14.567239,
            "fator": 1.014567239,
            "puAntesEvento": 1014.567239,
            "puEvento": 0.0,
            "puAposEvento": 1014.567239,
            "principalAposEvento": 1000.0,
            "valorReais": 36422963.8801,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 32,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.014567239,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0093397446791539,
            "fatorDiAcumulado": 1.00933974,
            "fatorDiArredondado": 1.00933974,
            "fatorSpread": 1.005179127,
            "spread": 0.075,
            "spreadAcumulado": 0.0051791269999998946,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-11",
            "dataTaxaDi": "11/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-11",
            "dataReferenciaTaxaDi": "11/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "16/09/2026",
            "dataIso": "2026-09-16",
            "diaUtil": true,
            "diasUteis": 19,
            "diasUteisPeriodo": 19,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1015.382729,
            "puJuros": 15.382729,
            "fator": 1.015382729,
            "puAntesEvento": 1015.382729,
            "puEvento": 0.0,
            "puAposEvento": 1015.382729,
            "principalAposEvento": 1000.0,
            "valorReais": 36452239.9711,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 33,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.015382729,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0098611695912552,
            "fatorDiAcumulado": 1.00986117,
            "fatorDiArredondado": 1.00986117,
            "fatorSpread": 1.005467642,
            "spread": 0.075,
            "spreadAcumulado": 0.005467641999999939,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-14",
            "dataTaxaDi": "14/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-14",
            "dataReferenciaTaxaDi": "14/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "17/09/2026",
            "dataIso": "2026-09-17",
            "diaUtil": true,
            "diasUteis": 20,
            "diasUteisPeriodo": 20,
            "quantidade": 35900.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1016.198865,
            "puJuros": 16.198865,
            "fator": 1.016198865,
            "puAntesEvento": 1016.198865,
            "puEvento": 0.0,
            "puAposEvento": 1016.198865,
            "principalAposEvento": 1000.0,
            "valorReais": 36481539.2535,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 34,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.016198865,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0103828638714658,
            "fatorDiAcumulado": 1.01038286,
            "fatorDiArredondado": 1.01038286,
            "fatorSpread": 1.005756239,
            "spread": 0.075,
            "spreadAcumulado": 0.005756239000000107,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-15",
            "dataTaxaDi": "15/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-15",
            "dataReferenciaTaxaDi": "15/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "18/09/2026",
            "dataIso": "2026-09-18",
            "diaUtil": true,
            "diasUteis": 21,
            "diasUteisPeriodo": 0,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1009.6897627,
            "puJuros": 0,
            "fator": 1.017015668,
            "puAntesEvento": 1017.015668,
            "puEvento": 7.325905292479109,
            "puAposEvento": 1009.6897627,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36247862.48093,
            "valorEventoReais": 263000.0,
            "evento": "Juros pagos e saldo incorporado",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 36,
            "principalAntesEvento": 1000.0,
            "fatorJurosAcumulado": 1.017015668,
            "fatorDiario": 1.0005166,
            "produtorioFatorDi": 1.0109048276589419,
            "fatorDiAcumulado": 1.01090483,
            "fatorDiArredondado": 1.01090483,
            "fatorSpread": 1.006044919,
            "spread": 0.075,
            "spreadAcumulado": 0.0060449190000000375,
            "taxaDiUtilizadaDia": 0.0005166,
            "tdk": 0.0005166,
            "taxaDiAnualEquivalente": 0.1389987480014514,
            "dataTaxaDiIso": "2026-09-16",
            "dataTaxaDi": "16/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-16",
            "dataReferenciaTaxaDi": "16/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1000.0,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8",
            "puJurosIncorporados": 9.6897627,
            "valorJurosIncorporados": 347862.48,
            "diasUteisAntesEvento": 21,
            "puJurosAntesEvento": 17.015668
          },
          {
            "data": "21/09/2026",
            "dataIso": "2026-09-21",
            "diaUtil": true,
            "diasUteis": 22,
            "diasUteisPeriodo": 1,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1010.49252058,
            "puJuros": 0.80275788,
            "fator": 1.000795054,
            "puAntesEvento": 1010.49252058,
            "puEvento": 0.0,
            "puAposEvento": 1010.49252058,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36276681.488822,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 37,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.000795054,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.00050788,
            "fatorDiAcumulado": 1.00050788,
            "fatorDiArredondado": 1.00050788,
            "fatorSpread": 1.000287028,
            "spread": 0.075,
            "spreadAcumulado": 0.0002870280000000225,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-17",
            "dataTaxaDi": "17/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-17",
            "dataReferenciaTaxaDi": "17/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "22/09/2026",
            "dataIso": "2026-09-22",
            "diaUtil": true,
            "diasUteis": 23,
            "diasUteisPeriodo": 2,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1011.2959176,
            "puJuros": 1.6061549,
            "fator": 1.001590741,
            "puAntesEvento": 1011.2959176,
            "puEvento": 0.0,
            "puAposEvento": 1011.2959176,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36305523.44184,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 38,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.001590741,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0010160179420944,
            "fatorDiAcumulado": 1.00101602,
            "fatorDiArredondado": 1.00101602,
            "fatorSpread": 1.000574138,
            "spread": 0.075,
            "spreadAcumulado": 0.0005741379999999463,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-18",
            "dataTaxaDi": "18/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-18",
            "dataReferenciaTaxaDi": "18/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "23/09/2026",
            "dataIso": "2026-09-23",
            "diaUtil": true,
            "diasUteis": 24,
            "diasUteisPeriodo": 3,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1012.09994668,
            "puJuros": 2.41018398,
            "fator": 1.002387054,
            "puAntesEvento": 1012.09994668,
            "puEvento": 0.0,
            "puAposEvento": 1012.09994668,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36334388.085812,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 39,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.002387054,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0015244139572868,
            "fatorDiAcumulado": 1.00152441,
            "fatorDiArredondado": 1.00152441,
            "fatorSpread": 1.000861331,
            "spread": 0.075,
            "spreadAcumulado": 0.0008613310000000762,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-21",
            "dataTaxaDi": "21/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-21",
            "dataReferenciaTaxaDi": "21/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "24/09/2026",
            "dataIso": "2026-09-24",
            "diaUtil": true,
            "diasUteis": 25,
            "diasUteisPeriodo": 4,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1012.90462601,
            "puJuros": 3.21486331,
            "fator": 1.003184011,
            "puAntesEvento": 1012.90462601,
            "puEvento": 0.0,
            "puAposEvento": 1012.90462601,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36363276.073759,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 40,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.003184011,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0020330681766474,
            "fatorDiAcumulado": 1.00203307,
            "fatorDiArredondado": 1.00203307,
            "fatorSpread": 1.001148606,
            "spread": 0.075,
            "spreadAcumulado": 0.0011486060000001075,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-22",
            "dataTaxaDi": "22/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-22",
            "dataReferenciaTaxaDi": "22/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "25/09/2026",
            "dataIso": "2026-09-25",
            "diaUtil": true,
            "diasUteis": 26,
            "diasUteisPeriodo": 5,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1013.7099374,
            "puJuros": 4.0201747,
            "fator": 1.003981594,
            "puAntesEvento": 1013.7099374,
            "puEvento": 0.0,
            "puAposEvento": 1013.7099374,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36392186.75266,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 41,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.003981594,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.002541980731313,
            "fatorDiAcumulado": 1.00254198,
            "fatorDiArredondado": 1.00254198,
            "fatorSpread": 1.001435964,
            "spread": 0.075,
            "spreadAcumulado": 0.0014359639999999008,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-23",
            "dataTaxaDi": "23/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-23",
            "dataReferenciaTaxaDi": "23/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "28/09/2026",
            "dataIso": "2026-09-28",
            "diaUtil": true,
            "diasUteis": 27,
            "diasUteisPeriodo": 6,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1014.51588994,
            "puJuros": 4.82612724,
            "fator": 1.004779812,
            "puAntesEvento": 1014.51588994,
            "puEvento": 0.0,
            "puAposEvento": 1014.51588994,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36421120.448846,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 42,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.004779812,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0030511517524867,
            "fatorDiAcumulado": 1.00305115,
            "fatorDiArredondado": 1.00305115,
            "fatorSpread": 1.001723404,
            "spread": 0.075,
            "spreadAcumulado": 0.0017234040000000395,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-24",
            "dataTaxaDi": "24/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-24",
            "dataReferenciaTaxaDi": "24/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "29/09/2026",
            "dataIso": "2026-09-29",
            "diaUtil": true,
            "diasUteis": 28,
            "diasUteisPeriodo": 7,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1015.32248464,
            "puJuros": 5.63272194,
            "fator": 1.005578666,
            "puAntesEvento": 1015.32248464,
            "puEvento": 0.0,
            "puAposEvento": 1015.32248464,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36450077.198575996,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 43,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.005578666,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0035605813714388,
            "fatorDiAcumulado": 1.00356058,
            "fatorDiArredondado": 1.00356058,
            "fatorSpread": 1.002010926,
            "spread": 0.075,
            "spreadAcumulado": 0.0020109260000000795,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-25",
            "dataTaxaDi": "25/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-25",
            "dataReferenciaTaxaDi": "25/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "30/09/2026",
            "dataIso": "2026-09-30",
            "diaUtil": true,
            "diasUteis": 29,
            "diasUteisPeriodo": 8,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1016.12972353,
            "puJuros": 6.43996083,
            "fator": 1.006378158,
            "puAntesEvento": 1016.12972353,
            "puEvento": 0.0,
            "puAposEvento": 1016.12972353,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36479057.074727,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 44,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.006378158,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0040702697195056,
            "fatorDiAcumulado": 1.00407027,
            "fatorDiArredondado": 1.00407027,
            "fatorSpread": 1.002298532,
            "spread": 0.075,
            "spreadAcumulado": 0.0022985319999999643,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-28",
            "dataTaxaDi": "28/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-28",
            "dataReferenciaTaxaDi": "28/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "01/10/2026",
            "dataIso": "2026-10-01",
            "diaUtil": true,
            "diasUteis": 30,
            "diasUteisPeriodo": 9,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1016.93760256,
            "puJuros": 7.24783986,
            "fator": 1.007178284,
            "puAntesEvento": 1016.93760256,
            "puEvento": 0.0,
            "puAposEvento": 1016.93760256,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36508059.931903996,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 45,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.007178284,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0045802169280906,
            "fatorDiAcumulado": 1.00458022,
            "fatorDiArredondado": 1.00458022,
            "fatorSpread": 1.002586219,
            "spread": 0.075,
            "spreadAcumulado": 0.0025862189999998897,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-29",
            "dataTaxaDi": "29/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-29",
            "dataReferenciaTaxaDi": "29/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "02/10/2026",
            "dataIso": "2026-10-02",
            "diaUtil": true,
            "diasUteis": 31,
            "diasUteisPeriodo": 10,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1017.7461177,
            "puJuros": 8.056355,
            "fator": 1.00797904,
            "puAntesEvento": 1017.7461177,
            "puEvento": 0.0,
            "puAposEvento": 1017.7461177,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36537085.62543,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 46,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.00797904,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0050904231286641,
            "fatorDiAcumulado": 1.00509042,
            "fatorDiArredondado": 1.00509042,
            "fatorSpread": 1.00287399,
            "spread": 0.075,
            "spreadAcumulado": 0.002873990000000104,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-09-30",
            "dataTaxaDi": "30/09/2026",
            "dataReferenciaTaxaDiIso": "2026-09-30",
            "dataReferenciaTaxaDi": "30/09/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "05/10/2026",
            "dataIso": "2026-10-05",
            "diaUtil": true,
            "diasUteis": 32,
            "diasUteisPeriodo": 11,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1018.55528408,
            "puJuros": 8.86552138,
            "fator": 1.008780441,
            "puAntesEvento": 1018.55528408,
            "puEvento": 0.0,
            "puAposEvento": 1018.55528408,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36566134.698472,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 47,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.008780441,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0056008884527625,
            "fatorDiAcumulado": 1.00560089,
            "fatorDiArredondado": 1.00560089,
            "fatorSpread": 1.003161842,
            "spread": 0.075,
            "spreadAcumulado": 0.0031618419999999148,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-01",
            "dataTaxaDi": "01/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-01",
            "dataReferenciaTaxaDi": "01/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "06/10/2026",
            "dataIso": "2026-10-06",
            "diaUtil": true,
            "diasUteis": 33,
            "diasUteisPeriodo": 12,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1019.36508657,
            "puJuros": 9.67532387,
            "fator": 1.009582472,
            "puAntesEvento": 1019.36508657,
            "puEvento": 0.0,
            "puAposEvento": 1019.36508657,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36595206.607863,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 48,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.009582472,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0061116130319898,
            "fatorDiAcumulado": 1.00611161,
            "fatorDiArredondado": 1.00611161,
            "fatorSpread": 1.003449778,
            "spread": 0.075,
            "spreadAcumulado": 0.0034497780000000144,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-02",
            "dataTaxaDi": "02/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-02",
            "dataReferenciaTaxaDi": "02/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "07/10/2026",
            "dataIso": "2026-10-07",
            "diaUtil": true,
            "diasUteis": 34,
            "diasUteisPeriodo": 13,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1020.17554233,
            "puJuros": 10.48577963,
            "fator": 1.01038515,
            "puAntesEvento": 1020.17554233,
            "puEvento": 0.0,
            "puAposEvento": 1020.17554233,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36624301.969647,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 49,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.01038515,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0066225969980165,
            "fatorDiAcumulado": 1.0066226,
            "fatorDiArredondado": 1.0066226,
            "fatorSpread": 1.003737796,
            "spread": 0.075,
            "spreadAcumulado": 0.0037377960000000154,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-05",
            "dataTaxaDi": "05/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-05",
            "dataReferenciaTaxaDi": "05/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "08/10/2026",
            "dataIso": "2026-10-08",
            "diaUtil": true,
            "diasUteis": 35,
            "diasUteisPeriodo": 14,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1020.98663319,
            "puJuros": 11.29687049,
            "fator": 1.011188457,
            "puAntesEvento": 1020.98663319,
            "puEvento": 0.0,
            "puAposEvento": 1020.98663319,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36653420.131521,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 50,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.011188457,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0071338404825798,
            "fatorDiAcumulado": 1.00713384,
            "fatorDiArredondado": 1.00713384,
            "fatorSpread": 1.004025897,
            "spread": 0.075,
            "spreadAcumulado": 0.0040258970000000005,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-06",
            "dataTaxaDi": "06/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-06",
            "dataReferenciaTaxaDi": "06/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "09/10/2026",
            "dataIso": "2026-10-09",
            "diaUtil": true,
            "diasUteis": 36,
            "diasUteisPeriodo": 15,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1021.79836923,
            "puJuros": 12.10860653,
            "fator": 1.011992403,
            "puAntesEvento": 1021.79836923,
            "puEvento": 0.0,
            "puAposEvento": 1021.79836923,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36682561.455357,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 51,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.011992403,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.007645343617484,
            "fatorDiAcumulado": 1.00764534,
            "fatorDiArredondado": 1.00764534,
            "fatorSpread": 1.00431408,
            "spread": 0.075,
            "spreadAcumulado": 0.004314080000000109,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-07",
            "dataTaxaDi": "07/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-07",
            "dataReferenciaTaxaDi": "07/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "13/10/2026",
            "dataIso": "2026-10-13",
            "diaUtil": true,
            "diasUteis": 37,
            "diasUteisPeriodo": 16,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1022.61076057,
            "puJuros": 12.92099787,
            "fator": 1.012796998,
            "puAntesEvento": 1022.61076057,
            "puEvento": 0.0,
            "puAposEvento": 1022.61076057,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36711726.304463,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 52,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.012796998,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0081571065346004,
            "fatorDiAcumulado": 1.00815711,
            "fatorDiArredondado": 1.00815711,
            "fatorSpread": 1.004602346,
            "spread": 0.075,
            "spreadAcumulado": 0.004602345999999979,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-08",
            "dataTaxaDi": "08/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-08",
            "dataReferenciaTaxaDi": "08/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "14/10/2026",
            "dataIso": "2026-10-14",
            "diaUtil": true,
            "diasUteis": 38,
            "diasUteisPeriodo": 17,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1023.42378801,
            "puJuros": 13.73402531,
            "fator": 1.013602223,
            "puAntesEvento": 1023.42378801,
            "puEvento": 0.0,
            "puAposEvento": 1023.42378801,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36740913.989558995,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 53,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.013602223,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0086691293658672,
            "fatorDiAcumulado": 1.00866913,
            "fatorDiArredondado": 1.00866913,
            "fatorSpread": 1.004890695,
            "spread": 0.075,
            "spreadAcumulado": 0.004890695000000056,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-09",
            "dataTaxaDi": "09/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-09",
            "dataReferenciaTaxaDi": "09/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "15/10/2026",
            "dataIso": "2026-10-15",
            "diaUtil": true,
            "diasUteis": 39,
            "diasUteisPeriodo": 18,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1024.23746266,
            "puJuros": 14.54769996,
            "fator": 1.014408089,
            "puAntesEvento": 1024.23746266,
            "puEvento": 0.0,
            "puAposEvento": 1024.23746266,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36770124.909494,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 54,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.014408089,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0091814122432894,
            "fatorDiAcumulado": 1.00918141,
            "fatorDiArredondado": 1.00918141,
            "fatorSpread": 1.005179127,
            "spread": 0.075,
            "spreadAcumulado": 0.0051791269999998946,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-13",
            "dataTaxaDi": "13/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-13",
            "dataReferenciaTaxaDi": "13/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "16/10/2026",
            "dataIso": "2026-10-16",
            "diaUtil": true,
            "diasUteis": 40,
            "diasUteisPeriodo": 19,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1025.05179361,
            "puJuros": 15.36203091,
            "fator": 1.015214605,
            "puAntesEvento": 1025.05179361,
            "puEvento": 0.0,
            "puAposEvento": 1025.05179361,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36799359.390599,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 55,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.015214605,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0096939552989395,
            "fatorDiAcumulado": 1.00969396,
            "fatorDiArredondado": 1.00969396,
            "fatorSpread": 1.005467642,
            "spread": 0.075,
            "spreadAcumulado": 0.005467641999999939,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-14",
            "dataTaxaDi": "14/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-14",
            "dataReferenciaTaxaDi": "14/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "19/10/2026",
            "dataIso": "2026-10-19",
            "diaUtil": true,
            "diasUteis": 41,
            "diasUteisPeriodo": 20,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1025.86676167,
            "puJuros": 16.17699897,
            "fator": 1.016021752,
            "puAntesEvento": 1025.86676167,
            "puEvento": 0.0,
            "puAposEvento": 1025.86676167,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36828616.743953,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 56,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.016021752,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0102067586649568,
            "fatorDiAcumulado": 1.01020676,
            "fatorDiArredondado": 1.01020676,
            "fatorSpread": 1.005756239,
            "spread": 0.075,
            "spreadAcumulado": 0.005756239000000107,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-15",
            "dataTaxaDi": "15/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-15",
            "dataReferenciaTaxaDi": "15/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "20/10/2026",
            "dataIso": "2026-10-20",
            "diaUtil": true,
            "diasUteis": 42,
            "diasUteisPeriodo": 21,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1026.68237593,
            "puJuros": 16.99261323,
            "fator": 1.016829539,
            "puAntesEvento": 1026.68237593,
            "puEvento": 0.0,
            "puAposEvento": 1026.68237593,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36857897.295887,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 57,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.016829539,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0107198224735474,
            "fatorDiAcumulado": 1.01071982,
            "fatorDiArredondado": 1.01071982,
            "fatorSpread": 1.006044919,
            "spread": 0.075,
            "spreadAcumulado": 0.0060449190000000375,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-16",
            "dataTaxaDi": "16/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-16",
            "dataReferenciaTaxaDi": "16/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "21/10/2026",
            "dataIso": "2026-10-21",
            "diaUtil": true,
            "diasUteis": 43,
            "diasUteisPeriodo": 22,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1027.49864953,
            "puJuros": 17.80888683,
            "fator": 1.017637979,
            "puAntesEvento": 1027.49864953,
            "puEvento": 0.0,
            "puAposEvento": 1027.49864953,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36887201.518127,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 58,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.017637979,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0112331468569853,
            "fatorDiAcumulado": 1.01123315,
            "fatorDiArredondado": 1.01123315,
            "fatorSpread": 1.006333682,
            "spread": 0.075,
            "spreadAcumulado": 0.006333681999999952,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-19",
            "dataTaxaDi": "19/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-19",
            "dataReferenciaTaxaDi": "19/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "22/10/2026",
            "dataIso": "2026-10-22",
            "diaUtil": true,
            "diasUteis": 44,
            "diasUteisPeriodo": 23,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1028.31556124,
            "puJuros": 18.62579854,
            "fator": 1.018447051,
            "puAntesEvento": 1028.31556124,
            "puEvento": 0.0,
            "puAposEvento": 1028.31556124,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36916528.648516,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 59,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.018447051,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.011746731947611,
            "fatorDiAcumulado": 1.01174673,
            "fatorDiArredondado": 1.01174673,
            "fatorSpread": 1.006622528,
            "spread": 0.075,
            "spreadAcumulado": 0.006622528000000072,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-20",
            "dataTaxaDi": "20/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-20",
            "dataReferenciaTaxaDi": "20/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "23/10/2026",
            "dataIso": "2026-10-23",
            "diaUtil": true,
            "diasUteis": 45,
            "diasUteisPeriodo": 24,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1029.13313128,
            "puJuros": 19.44336858,
            "fator": 1.019256775,
            "puAntesEvento": 1029.13313128,
            "puEvento": 0.0,
            "puAposEvento": 1029.13313128,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36945879.412952,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 60,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.019256775,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.0122605778778324,
            "fatorDiAcumulado": 1.01226058,
            "fatorDiArredondado": 1.01226058,
            "fatorSpread": 1.006911457,
            "spread": 0.075,
            "spreadAcumulado": 0.006911456999999954,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-21",
            "dataTaxaDi": "21/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-21",
            "dataReferenciaTaxaDi": "21/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "26/10/2026",
            "dataIso": "2026-10-26",
            "diaUtil": true,
            "diasUteis": 46,
            "diasUteisPeriodo": 25,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1029.95134044,
            "puJuros": 20.26157774,
            "fator": 1.020067132,
            "puAntesEvento": 1029.95134044,
            "puEvento": 0.0,
            "puAposEvento": 1029.95134044,
            "principalAposEvento": 1009.6897627,
            "valorReais": 36975253.121796,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 61,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.020067132,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.012774684780125,
            "fatorDiAcumulado": 1.01277468,
            "fatorDiArredondado": 1.01277468,
            "fatorSpread": 1.007200468,
            "spread": 0.075,
            "spreadAcumulado": 0.00720046799999996,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-22",
            "dataTaxaDi": "22/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-22",
            "dataReferenciaTaxaDi": "22/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "27/10/2026",
            "dataIso": "2026-10-27",
            "diaUtil": true,
            "diasUteis": 47,
            "diasUteisPeriodo": 26,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1030.77020894,
            "puJuros": 21.08044624,
            "fator": 1.020878142,
            "puAntesEvento": 1030.77020894,
            "puEvento": 0.0,
            "puAposEvento": 1030.77020894,
            "principalAposEvento": 1009.6897627,
            "valorReais": 37004650.500946,
            "valorEventoReais": 0,
            "evento": "",
            "taxaDiStatus": "historica_documentada",
            "sourceRow": 62,
            "principalAntesEvento": 1009.6897627,
            "fatorJurosAcumulado": 1.020878142,
            "fatorDiario": 1.00050788,
            "produtorioFatorDi": 1.013289052787031,
            "fatorDiAcumulado": 1.01328905,
            "fatorDiArredondado": 1.01328905,
            "fatorSpread": 1.007489563,
            "spread": 0.075,
            "spreadAcumulado": 0.007489563000000032,
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282562,
            "dataTaxaDiIso": "2026-10-23",
            "dataTaxaDi": "23/10/2026",
            "dataReferenciaTaxaDiIso": "2026-10-23",
            "dataReferenciaTaxaDi": "23/10/2026",
            "lagBusinessDays": 2,
            "diasAdicionaisPrimeiroPeriodo": 0,
            "puBaseCalculo": 1009.6897627,
            "metodoMemoria": "DI D-2; DI truncado 16 e arredondado 8; spread e fator 9; juros truncados 8"
          },
          {
            "data": "28/10/2026",
            "dataIso": "2026-10-28",
            "diaUtil": true,
            "diasUteis": 48,
            "diasUteisPeriodo": 27,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1031.58972767,
            "puAntesEvento": 1031.58972767,
            "puAposEvento": 1031.58972767,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1009.6897627,
            "principalAposEvento": 1009.6897627,
            "puJuros": 21.89996497,
            "valorReais": 37034071.223353,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.021689796,
            "fatorJurosAcumulado": 1.021689796,
            "produtorioFatorDi": 1.0138036820311604,
            "dataTaxaDiIso": "2026-10-26",
            "dataReferenciaTaxaDiIso": "2026-10-26",
            "dataTaxaDi": "26/10/2026",
            "dataReferenciaTaxaDi": "26/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1009.6897627
          },
          {
            "data": "29/10/2026",
            "dataIso": "2026-10-29",
            "diaUtil": true,
            "diasUteis": 49,
            "diasUteisPeriodo": 28,
            "quantidade": 35900.0,
            "valorNominal": 1009.6897627,
            "puAtualizado": 1032.40989564,
            "puAntesEvento": 1032.40989564,
            "puAposEvento": 1032.40989564,
            "puEvento": 0,
            "valorEventoReais": 0,
            "principalAntesEvento": 1009.6897627,
            "principalAposEvento": 1009.6897627,
            "puJuros": 22.72013294,
            "valorReais": 37063515.253476,
            "evento": "",
            "taxaDiUtilizadaDia": 0.00050788,
            "tdk": 0.00050788,
            "fatorDiario": 1.00050788,
            "taxaDiAnualEquivalente": 0.13649989315282104,
            "fator": 1.022502093,
            "fatorJurosAcumulado": 1.022502093,
            "produtorioFatorDi": 1.0143185726451902,
            "dataTaxaDiIso": "2026-10-27",
            "dataReferenciaTaxaDiIso": "2026-10-27",
            "dataTaxaDi": "27/10/2026",
            "dataReferenciaTaxaDi": "27/10/2026",
            "taxaDiStatus": "BCB_SGS_12",
            "lagBusinessDays": 2,
            "puBaseCalculo": 1009.6897627
          }
        ],
        "taxaTexto": "CDI + 7.50% a.a.",
        "pu": 1032.40989564,
        "principalResidual": 1009.6897627,
        "valor": 37063515.253476,
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
            "Pagamento de R$ 263.000 em 18/09 e incorporacao do saldo confirmados; AF sem evento."
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
          "calculationStatus": "recalculo_evento_confirmado"
        },
        "dataPrimeiraIntegralizacaoIso": "2026-08-19",
        "importacaoFundingCaixa": {
          "sourceSheet": "73ª PU SR",
          "sourcePu": 1030.76123247,
          "sourceBalance": 37004328.245673,
          "calculation": "memoria_recalculada_di_d2_com_ancora_documentada"
        },
        "forecastBlockedReason": "Cadastro e memoria revisados; agenda financeira e boletins/rateios ainda pendentes. PU principal sem DU adicional conforme orientacao de Leonardo.",
        "previsaoPu": [],
        "eventosPendentes": [],
        "eventosPrevistos": [],
        "dataHistoricaDisponivel": true,
        "acumulacaoFinal": {
          "periodoInicio": "18/09/2026",
          "periodoFim": "29/10/2026",
          "puFinal": 1032.40989564,
          "diasAcumulacao": 49,
          "diasUteisPeriodo": 28
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
          "status": "pagamento_e_incorporacao_confirmados_af_omisso",
          "confirmedBy": "Leonardo",
          "confirmationDate": "2026-10-30",
          "remainingIssue": "AF sem evento. Saldo recalculado pelo DI D-2 difere do informado na imagem.",
          "incorporationConfirmationDate": "2026-11-03"
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
        "fundingSourceDateKey": "2026-10-29",
        "dataHistoricaIso": "2026-10-29",
        "dataHistoricaSelecionada": "29/10/2026",
        "visaoCalculadaPu": true
      }
    ]
  },
  "sources": [
    {
      "name": "Eventos de funding e caixa",
      "date": "27/10/2026",
      "file": "fundings e caixa cras carteiras.xlsx"
    },
    {
      "name": "Atualizacao de caixa",
      "date": "29/10/2026",
      "file": "Texto colado.txt"
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
    },
    "2026-10-28": {
      "total": 0.0,
      "totalCalculado": -47549.89,
      "accounts": {
        "cc": 37951.45,
        "contaAplicacao": 0.0,
        "fundoDespesas": 85501.34
      }
    },
    "2026-10-29": {
      "total": 0.0,
      "totalCalculado": -47549.89,
      "accounts": {
        "cc": 37951.45,
        "contaAplicacao": 0.0,
        "fundoDespesas": 85501.34
      }
    }
  },
  "fundingCashIssues": [
    {
      "cra": "cra-carteira-73",
      "date": "2026-10-29",
      "type": "reserva_superior_aos_saldos",
      "amount": 47549.89,
      "reportedTotalPreserved": true
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
