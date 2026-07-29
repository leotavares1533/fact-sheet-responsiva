window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-52"] = window.LAMINA_CRA_DAILY["cra-carteira-52"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-52"]["2026-02-10"] = {
  "metadata": {
    "reportDate": "10/02/2026",
    "dateKey": "2026-02-10",
    "importedAt": "2026-07-29T09:57:35.998626-03:00",
    "revisionId": "20260210-cras-carteira-consolidado",
    "calculatedView": true,
    "crasCarteiraBatch": true,
    "observation": "Snapshot inicial em lote dos CRAs Carteira, usando series Senior e Mezanino no validador de PU. Subordinadas ficam para a lamina com carteira e caixa.",
    "warnings": [],
    "subordinadasSimulador": [
      {
        "classe": "SUB",
        "tipo": "sub",
        "label": "Subordinada",
        "ifCodigo": "CRA026000B6",
        "quantidade": 100.0,
        "quantidadeEmitida": 100.0,
        "valorNominalInicial": 1000.0,
        "principalResidual": 1000.0,
        "pu": 1000.0,
        "valor": 100000.0,
        "taxaAa": 0,
        "taxaTexto": "Subordinada residual",
        "indexador": "",
        "percentualIndexador": 0,
        "taxaJurosSpread": 0,
        "metodo": "subordinada_residual",
        "ehFunding": false,
        "ordem": 90,
        "dataInicio": "03/02/2026",
        "dataInicioIso": "2026-02-03",
        "dataVencimento": "30/11/2029",
        "dataVencimentoIso": "2029-11-30",
        "arquivoRelativo": "52E2S - CRA026000B6.pdf"
      }
    ],
    "businessCalendar": {
      "name": "ANBIMA feriados nacionais",
      "holidayCount": 1263,
      "holidays": [
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
        "2029-11-20"
      ]
    },
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-52",
    "sourceSnapshotDateKey": "2026-07-27",
    "assetImport": {
      "sourceFile": "C:\\Users\\leonardo.silva\\Downloads\\CARTEIRA_CAIXA_CCs_total.xlsx",
      "sheetCarteira": "carteira ",
      "sheetCaixa": "caixa ",
      "cashDate": "2026-02-10",
      "importMode": "carteira-caixa-consolidado",
      "cashGainLiquidated": true
    }
  },
  "cra": {
    "id": "cra-carteira-52",
    "name": "CRA Carteira 52",
    "dataVencimento": "30/11/2029",
    "dataVencimentoIso": "2029-11-30",
    "description": "CRA Carteira 52, importado em lote.",
    "dataBase": "10/02/2026",
    "dateKey": "2026-02-10"
  },
  "ativo": {
    "carteiraVpBruto": 22011993.55758258,
    "pddTotal": 0.0,
    "carteiraVp": 22011993.55758258,
    "carteiraVpLiquido": 22011993.55758258,
    "caixa": 0.0,
    "total": 22011993.55758258,
    "liquidacoesDia": 0,
    "aquisicoesDia": 0,
    "quantidadeLastros": 2,
    "quantidadeLastrosBase": 2,
    "lastrosAtivos": 2,
    "quantidadeLastrosAtivos": 2,
    "cedentesUnicos": 2,
    "sacadosUnicos": 2,
    "montanteAtraso": 0
  },
  "caixa": {
    "accounts": {
      "cc": 22538.77,
      "contaAplicacao": 0.0,
      "fundoDespesas": 155576.59
    },
    "total": 0.0,
    "totalCalculado": -133037.82,
    "totalCalculadoPlanilha": -133037.82,
    "cessaoRendimentosDia": 0.0,
    "linhasPosTotal": [
      -133037.82
    ],
    "fonte": "Importacao consolidada CRAs Carteira",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx",
    "observacao": "Fundo de despesa reduz o caixa conforme total informado na aba Planilha2."
  },
  "passivo": {
    "fundingTotal": 0.0,
    "despesasTotal": 0,
    "subordinadaTotal": 22011993.55758258,
    "subordinadaQuantidade": 100.0,
    "subordinadaPuResidual": 220119.9355758258,
    "subordinadasSimulador": [
      {
        "classe": "SUB",
        "tipo": "sub",
        "label": "Subordinada",
        "ifCodigo": "CRA026000B6",
        "quantidade": 100.0,
        "quantidadeEmitida": 100.0,
        "valorNominalInicial": 1000.0,
        "principalResidual": 1000.0,
        "pu": 1000.0,
        "valor": 100000.0,
        "taxaAa": 0,
        "taxaTexto": "Subordinada residual",
        "indexador": "",
        "percentualIndexador": 0,
        "taxaJurosSpread": 0,
        "metodo": "subordinada_residual",
        "ehFunding": false,
        "ordem": 90,
        "dataInicio": "03/02/2026",
        "dataInicioIso": "2026-02-03",
        "dataVencimento": "30/11/2029",
        "dataVencimentoIso": "2029-11-30",
        "arquivoRelativo": "52E2S - CRA026000B6.pdf"
      }
    ],
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA026000B5",
        "quantidade": 21845.0,
        "quantidadeEmitida": 39900.0,
        "quantidadeAIntegralizar": 0.0,
        "ofertaAberta": false,
        "ofertaStatus": "Encerrada",
        "valorIntegralizado": 21845000.0,
        "statusIntegralizacao": "Finalizado",
        "dataInicio": "03/02/2026",
        "dataInicioIso": "2026-02-03",
        "dataEmissao": "19/01/2026",
        "dataEmissaoIso": "2026-01-19",
        "dataVencimento": "30/11/2029",
        "dataVencimentoIso": "2029-11-30",
        "valorNominalInicial": 1000.0,
        "principalResidual": 0,
        "pu": 0,
        "valor": 0,
        "taxaAa": 0.235,
        "taxaAm": 0,
        "taxaDia": 0.0008379340853779116,
        "taxaTexto": "23,50% a.a.",
        "indexador": "",
        "percentualIndexador": 1.0,
        "taxaJurosSpread": 0.235,
        "metodo": "prefixado_252_ts",
        "ehFunding": true,
        "ordem": 10,
        "eventosAplicados": [
          {
            "data": "04/02/2026",
            "dataIso": "2026-02-04",
            "tipo": "integralizacao",
            "quantidade": 21845,
            "valor": 21845000.0,
            "valorEventoReais": 21845000.0
          },
          {
            "data": "12/03/2026",
            "dataIso": "2026-03-12",
            "tipo": "amortizacao",
            "tipoEvento": "2-Amortizacao",
            "puEvento": 396.9983308308538,
            "residual": 603.0016691691462,
            "valorEventoReais": 8672428.537,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "12-03-2026",
            "linha": 38
          },
          {
            "data": "12/03/2026",
            "dataIso": "2026-03-12",
            "tipo": "juros",
            "tipoEvento": "2-Juros",
            "puEvento": 20.3054,
            "residual": null,
            "valorEventoReais": 443571.463,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "12-03-2026",
            "linha": 38
          },
          {
            "data": "14/04/2026",
            "dataIso": "2026-04-14",
            "tipo": "amortizacao",
            "tipoEvento": "2-Amortizacao",
            "puEvento": 0.0,
            "residual": 610.5539179047929,
            "valorEventoReais": 0.0,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "14-04-2026",
            "linha": 61
          },
          {
            "data": "14/04/2026",
            "dataIso": "2026-04-14",
            "tipo": "juros",
            "tipoEvento": "2-Juros",
            "puEvento": 3.662165255207141,
            "residual": null,
            "valorEventoReais": 80000.0,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "14-04-2026",
            "linha": 61
          },
          {
            "data": "14/05/2026",
            "dataIso": "2026-05-14",
            "tipo": "amortizacao",
            "tipoEvento": "2-Amortizacao",
            "puEvento": 0.0,
            "residual": 620.9297254147929,
            "valorEventoReais": 0.0,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "14-05-2026",
            "linha": 81
          },
          {
            "data": "14/05/2026",
            "dataIso": "2026-05-14",
            "tipo": "juros",
            "tipoEvento": "2-Juros",
            "puEvento": 3.662165255207141,
            "residual": null,
            "valorEventoReais": 80000.0,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "14-05-2026",
            "linha": 81
          },
          {
            "data": "05/06/2026",
            "dataIso": "2026-06-05",
            "tipo": "amortizacao",
            "tipoEvento": "2-Amortizacao",
            "puEvento": 620.92972421,
            "residual": 0.0,
            "valorEventoReais": 13564209.82536745,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "05-06-2026",
            "linha": 98
          },
          {
            "data": "05/06/2026",
            "dataIso": "2026-06-05",
            "tipo": "juros",
            "tipoEvento": "2-Juros",
            "puEvento": 7.85041698,
            "residual": null,
            "valorEventoReais": 171492.3589281,
            "ifCodigo": "CRA026000B5",
            "arquivo": "Pasta2.xlsx",
            "pasta": "05-06-2026",
            "linha": 98
          }
        ],
        "agendaPagamentos": [
          {
            "dataIso": "2029-11-30",
            "juros": true,
            "amortizacaoPercentual": 1
          }
        ],
        "acumulacaoFinal": {
          "periodoInicio": "03/02/2026",
          "periodoFim": "10/02/2026",
          "diasAcumulacao": 4.0,
          "diasUteisPeriodo": 4.0,
          "puAntesAcumulacao": 1000.0,
          "puFinal": 1003.355951
        },
        "dataHistoricaDisponivel": true,
        "dataHistoricaSelecionada": "10/02/2026",
        "dataHistoricaIso": "2026-02-10",
        "historicoPu": [
          {
            "data": "04/02/2026",
            "dataIso": "2026-02-04",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "fator": 1.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "valorReais": 21845000.0,
            "quantidade": 21845.0,
            "quantidadeEvento": 21845.0,
            "valorEventoReais": 21845000.0,
            "valorIntegralizadoReais": 21845000.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1,
            "produtorioFatorDi": 1.0,
            "fatorDiAcumulado": 1.0,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.0,
            "evento": "Integralizacao",
            "eventoTs": "Integralizacao",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          },
          {
            "data": "05/02/2026",
            "dataIso": "2026-02-05",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "fator": 1.00083793399,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.83793399,
            "puJuros": 0.8379339900000105,
            "valorReais": 21863304.66801155,
            "quantidade": 21845.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1.000837934085378,
            "produtorioFatorDi": 1.000837934,
            "fatorDiAcumulado": 1.000837934,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.00083793399,
            "evento": "",
            "eventoTs": "",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          },
          {
            "data": "06/02/2026",
            "dataIso": "2026-02-06",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "fator": 1.0016765699999999,
            "valorNominal": 1000.0,
            "puAtualizado": 1001.67657,
            "puJuros": 1.6765699999999697,
            "valorReais": 21881624.67165,
            "quantidade": 21845.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1.000837934085378,
            "produtorioFatorDi": 1.00167657,
            "fatorDiAcumulado": 1.00167657,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.0016765699999999,
            "evento": "",
            "eventoTs": "",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          },
          {
            "data": "07/02/2026",
            "dataIso": "2026-02-07",
            "diaUtil": false,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "fator": 1.0016765699999999,
            "valorNominal": 1000.0,
            "puAtualizado": 1001.67657,
            "puJuros": 1.6765699999999697,
            "valorReais": 21881624.67165,
            "quantidade": 21845.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1,
            "produtorioFatorDi": 1.00167657,
            "fatorDiAcumulado": 1.00167657,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.0016765699999999,
            "evento": "",
            "eventoTs": "",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          },
          {
            "data": "08/02/2026",
            "dataIso": "2026-02-08",
            "diaUtil": false,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 2,
            "diasUteisPeriodo": 2,
            "fator": 1.0016765699999999,
            "valorNominal": 1000.0,
            "puAtualizado": 1001.67657,
            "puJuros": 1.6765699999999697,
            "valorReais": 21881624.67165,
            "quantidade": 21845.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1,
            "produtorioFatorDi": 1.00167657,
            "fatorDiAcumulado": 1.00167657,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.0016765699999999,
            "evento": "",
            "eventoTs": "",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          },
          {
            "data": "09/02/2026",
            "dataIso": "2026-02-09",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 3,
            "diasUteisPeriodo": 3,
            "fator": 1.00251590899,
            "valorNominal": 1000.0,
            "puAtualizado": 1002.51590899,
            "puJuros": 2.515908989999957,
            "valorReais": 21899960.031886548,
            "quantidade": 21845.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1.000837934085378,
            "produtorioFatorDi": 1.002515909,
            "fatorDiAcumulado": 1.002515909,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.00251590899,
            "evento": "",
            "eventoTs": "",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          },
          {
            "data": "10/02/2026",
            "dataIso": "2026-02-10",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008379340853779116,
            "taxaDiAnualEquivalente": 0.235,
            "taxaAa": 0.235,
            "taxaPrefixadaAa": 0.235,
            "taxaPrefixadaDia": 0.0008379340853779116,
            "taxaDiStatus": "prefixada",
            "diasUteis": 4,
            "diasUteisPeriodo": 4,
            "fator": 1.003355951,
            "valorNominal": 1000.0,
            "puAtualizado": 1003.355951,
            "puJuros": 3.3559510000000046,
            "valorReais": 21918310.749595,
            "quantidade": 21845.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008379340853779116,
            "fatorDiario": 1.000837934085378,
            "produtorioFatorDi": 1.003355951,
            "fatorDiAcumulado": 1.003355951,
            "spread": 0.235,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.003355951,
            "evento": "",
            "eventoTs": "",
            "puEvento": 0.0,
            "residualInformado": null,
            "puAntesEvento": null,
            "puAposEvento": null,
            "principalAntesEvento": null,
            "principalAposEvento": null
          }
        ],
        "visaoCalculadaPu": true,
        "status": "Finalizada",
        "observacaoGerencial": "Operacao liquidada; caixa residual tratado como ganho da subordinada."
      },
      {
        "classe": "SUB",
        "label": "Subordinada",
        "tipo": "sub",
        "ifCodigo": "",
        "quantidade": 100.0,
        "pu": 220119.9355758258,
        "valor": 22011993.55758258,
        "principalResidual": 220119.9355758258,
        "ehFunding": false,
        "ordem": 90,
        "historicoPu": [
          {
            "data": "27/07/2026",
            "dataIso": "2026-07-27",
            "valorNominal": 586.5889999999999,
            "puAtualizado": 586.5889999999999,
            "valorReais": 58658.899999999994,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "produtorioFatorDi": 1,
            "fatorDiAcumulado": 1
          }
        ],
        "dataHistoricaDisponivel": true,
        "dataHistoricaSelecionada": "27/07/2026",
        "dataHistoricaIso": "2026-07-27",
        "visaoCalculadaPu": false,
        "acumulacaoFinal": {
          "periodoFim": "27/07/2026",
          "diasAcumulacao": 0.0,
          "diasUteisPeriodo": 0.0,
          "puFinal": 586.5889999999999
        }
      }
    ],
    "despesasOperacionaisTotal": 0,
    "provisoesTotal": 0.0,
    "provisoesCaixa": 0,
    "deducoesTotal": 0
  },
  "carteiraResumo": {
    "valorNominal": 33028420.47,
    "valorPresente": 22011993.55758258,
    "valorPresenteLiquido": 22011993.55758258,
    "pddTotal": 0.0,
    "cedentesUnicos": 2,
    "sacadosUnicos": 2,
    "prazoMedioDias": 0.0,
    "taxaMediaPonderada": 0.01993117572545802,
    "preFixado": {
      "valorPresente": 22011993.55758258
    },
    "posFixado": {
      "valorPresente": 0
    },
    "montanteAtraso": 0
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Senior",
      "tipo": "sr",
      "ifCodigo": "CRA026000B5",
      "quantidade": 21845.0,
      "taxa": "23,50% a.a.",
      "pu": 0.0,
      "valor": 0.0,
      "resultadoDia": null,
      "resultadoMes": null,
      "resultado30Dias": null,
      "resultadoInicio": null
    },
    {
      "classe": "SUB",
      "label": "Subordinada",
      "tipo": "sub",
      "ifCodigo": "",
      "quantidade": 100.0,
      "taxa": "23,50% a.a.",
      "pu": 220119.9355758258,
      "valor": 22011993.55758258,
      "resultadoDia": 0.0008276859442604145,
      "resultadoMes": null,
      "resultado30Dias": null,
      "resultadoInicio": null
    }
  ],
  "puMensal": [],
  "rentabilidade30Dias": [],
  "evolucaoPu": [],
  "topCedentes": [],
  "topSacados": [],
  "agingList": [
    {
      "status": "Em dia",
      "valorNominal": 15559572.99,
      "valorPresente": 9201347.26398219,
      "valorPdd": 0.0,
      "order": 0.0,
      "percentualCarteira": 0.41801517158869766
    },
    {
      "status": "LIQUIDADO",
      "valorNominal": 17468847.48,
      "valorPresente": 12810646.293600392,
      "valorPdd": 0.0,
      "order": 99.0,
      "percentualCarteira": 0.5819848284113024
    }
  ],
  "composicaoPdd": [],
  "enquadramentos": [],
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
  "sections": [
    {
      "id": "resumo",
      "label": "Resumo",
      "metrics": [
        {
          "label": "Ativo total",
          "value": "R$ 22.011.993,56",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 22.011.993,56",
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
          "value": "R$ 0,00",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinada residual",
          "value": "R$ 22.011.993,56",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "PU SUB residual",
          "value": "220.119,935576",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "Valor nominal",
          "value": "R$ 33.028.420,47",
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
  ],
  "sources": [
    {
      "name": "Importacao carteira+caixa CRAs Carteira",
      "date": "10/02/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    },
    {
      "name": "Memoria PU existente",
      "date": "27/07/2026",
      "file": "data/cras/cra-carteira-52/2026-07-27.js"
    },
    {
      "name": "Regra gerencial",
      "date": "10/02/2026",
      "file": "CRA liquidado: caixa tratado como ganho da subordinada"
    }
  ],
  "notasEstruturacao": {
    "integralizacoes": [
      {
        "seriesKey": "sr",
        "dataIso": "2026-02-04",
        "valor": 21845000.0,
        "quantidade": 21845
      }
    ],
    "comunicados": {
      "arquivo": "eventos-comunicados.json",
      "quantidadeEventos": 8,
      "primeiroEvento": "2026-03-12",
      "ultimoEvento": "2026-06-05"
    },
    "warnings": []
  },
  "carteira": [
    {
      "craCarteira": "52ª",
      "lastro": "422325",
      "numeroUnico": "422325",
      "cedente": "CERES TRADING S.A.",
      "sacado": "CERES TRADING S.A.",
      "devedor": "CERES TRADING S.A.",
      "valorAquisicao": 9161025.92,
      "valorFace": 15559572.99,
      "valorNominal": 15559572.99,
      "dataAquisicao": "04/02/2026",
      "dataAquisicaoIso": "2026-02-04",
      "dataVencimento": "02/07/2029",
      "dataVencimentoIso": "2029-07-02",
      "valorLiquidacao": 9329230.49,
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "dataLiquidacaoOriginal": "05/03/2026",
      "dataLiquidacaoOriginalIso": "2026-03-05",
      "tipoTitulo": "CPR_F",
      "tipoAtivo": "CPR_F",
      "mesaResp": "Normal",
      "status": "EM CARTEIRA",
      "statusOriginal": "BAIXA PARCIAL",
      "statusPagamento": "Liquidado",
      "taxa": 0.018999999999999906,
      "taxaCessao": 0.253401494152226,
      "taxaOp": 0.018999999999999906,
      "taxaMedia": 0.018999999999999906,
      "base": 360.0,
      "tipo": "Pré fixado",
      "indexadorAtivo": "Pré fixado",
      "pagamento": "PMT",
      "dias": 0.0,
      "diasDoVencimento": 0.0,
      "diasUteisOp": 849.0,
      "diasCorridosOp": 1243.0,
      "fator": 1.0006275886594256,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 9201347.26398219,
      "valorPresente": 9201347.26398219,
      "pdd": 0.0,
      "valorPresenteLiquido": 9201347.26398219
    },
    {
      "craCarteira": "52ª",
      "lastro": "422306",
      "numeroUnico": "422306",
      "cedente": "NOVO HORIZONTE AGRO-INDUS",
      "sacado": "NOVO HORIZONTE AGRO-INDUS",
      "devedor": "NOVO HORIZONTE AGRO-INDUS",
      "valorAquisicao": 12760987.0,
      "valorFace": 17468847.48,
      "valorNominal": 17468847.48,
      "dataAquisicao": "05/02/2026",
      "dataAquisicaoIso": "2026-02-05",
      "dataVencimento": "31/12/2028",
      "dataVencimentoIso": "2028-12-31",
      "valorLiquidacao": 13791761.81,
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "dataLiquidacaoOriginal": "03/06/2026",
      "dataLiquidacaoOriginalIso": "2026-06-03",
      "tipoTitulo": "NC",
      "tipoAtivo": "NC",
      "mesaResp": "Normal",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "Liquidado",
      "taxa": 0.02059999999999995,
      "taxaCessao": 0.2772231097564388,
      "taxaOp": 0.02059999999999995,
      "taxaMedia": 0.02059999999999995,
      "base": 252.0,
      "tipo": "Pré fixado",
      "indexadorAtivo": "Pré fixado",
      "pagamento": "PMT",
      "dias": 0.0,
      "diasDoVencimento": 0.0,
      "diasUteisOp": 724.0,
      "diasCorridosOp": 1060.0,
      "fator": 1.0009714567800838,
      "faixaVenc": "LIQUIDADO",
      "faixaVencOrder": 99,
      "valorPresenteDia": 12810646.293600392,
      "valorPresente": 12810646.293600392,
      "pdd": 0.0,
      "valorPresenteLiquido": 12810646.293600392
    }
  ],
  "rankingCarteira": {
    "cedentes": [
      {
        "name": "NOVO HORIZONTE AGRO-INDUS",
        "quantidade": 1,
        "valorPresenteDia": 12810646.293600392,
        "pdd": 0.0,
        "valorPresenteLiquido": 12810646.293600392,
        "valorNominal": 17468847.48,
        "posicao": 1,
        "participacao": 0.5819848284113024,
        "participacaoPl": 0.5819848284113024
      },
      {
        "name": "CERES TRADING S.A.",
        "quantidade": 1,
        "valorPresenteDia": 9201347.26398219,
        "pdd": 0.0,
        "valorPresenteLiquido": 9201347.26398219,
        "valorNominal": 15559572.99,
        "posicao": 2,
        "participacao": 0.41801517158869766,
        "participacaoPl": 0.41801517158869766
      }
    ],
    "sacados": [
      {
        "name": "NOVO HORIZONTE AGRO-INDUS",
        "quantidade": 1,
        "valorPresenteDia": 12810646.293600392,
        "pdd": 0.0,
        "valorPresenteLiquido": 12810646.293600392,
        "valorNominal": 17468847.48,
        "posicao": 1,
        "participacao": 0.5819848284113024,
        "participacaoPl": 0.5819848284113024
      },
      {
        "name": "CERES TRADING S.A.",
        "quantidade": 1,
        "valorPresenteDia": 9201347.26398219,
        "pdd": 0.0,
        "valorPresenteLiquido": 9201347.26398219,
        "valorNominal": 15559572.99,
        "posicao": 2,
        "participacao": 0.41801517158869766,
        "participacaoPl": 0.41801517158869766
      }
    ],
    "lastrosAtivos": 2
  },
  "concentracaoDetalhada": {
    "top10Cedentes": [
      {
        "name": "NOVO HORIZONTE AGRO-INDUS",
        "quantidade": 1,
        "valorPresenteDia": 12810646.293600392,
        "pdd": 0.0,
        "valorPresenteLiquido": 12810646.293600392,
        "valorNominal": 17468847.48,
        "posicao": 1,
        "participacao": 0.5819848284113024,
        "participacaoPl": 0.5819848284113024
      },
      {
        "name": "CERES TRADING S.A.",
        "quantidade": 1,
        "valorPresenteDia": 9201347.26398219,
        "pdd": 0.0,
        "valorPresenteLiquido": 9201347.26398219,
        "valorNominal": 15559572.99,
        "posicao": 2,
        "participacao": 0.41801517158869766,
        "participacaoPl": 0.41801517158869766
      }
    ],
    "top10Sacados": [
      {
        "name": "NOVO HORIZONTE AGRO-INDUS",
        "quantidade": 1,
        "valorPresenteDia": 12810646.293600392,
        "pdd": 0.0,
        "valorPresenteLiquido": 12810646.293600392,
        "valorNominal": 17468847.48,
        "posicao": 1,
        "participacao": 0.5819848284113024,
        "participacaoPl": 0.5819848284113024
      },
      {
        "name": "CERES TRADING S.A.",
        "quantidade": 1,
        "valorPresenteDia": 9201347.26398219,
        "pdd": 0.0,
        "valorPresenteLiquido": 9201347.26398219,
        "valorNominal": 15559572.99,
        "posicao": 2,
        "participacao": 0.41801517158869766,
        "participacaoPl": 0.41801517158869766
      }
    ]
  },
  "pddComposition": [],
  "composicaoCarteira": [
    {
      "label": "NC",
      "tipoTitulo": "NC",
      "valorNominal": 17468847.48,
      "valorPresente": 12810646.293600392,
      "lastros": 1,
      "percentualCarteira": 0.5819848284113024,
      "taxaMedia": 0.020599999999999955
    },
    {
      "label": "CPR_F",
      "tipoTitulo": "CPR_F",
      "valorNominal": 15559572.99,
      "valorPresente": 9201347.26398219,
      "lastros": 1,
      "percentualCarteira": 0.41801517158869766,
      "taxaMedia": 0.018999999999999906
    }
  ],
  "movimentacoesDia": {
    "aquisicoes": [],
    "liquidacoes": []
  },
  "rendimento30Dias": [
    {
      "dateKey": "2026-02-04",
      "reportDate": "04/02/2026",
      "cotas": {
        "SR1": {
          "pu": 0.0,
          "valor": 0.0,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "SUB": {
          "pu": 91667.75275976096,
          "valor": 9166775.275976095,
          "resultadoDia": null,
          "resultadoMes": null
        }
      }
    },
    {
      "dateKey": "2026-02-05",
      "reportDate": "05/02/2026",
      "cotas": {
        "SR1": {
          "pu": 0.0,
          "valor": 0.0,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "SUB": {
          "pu": 219459.1198752451,
          "valor": 21945911.98752451,
          "resultadoDia": 1.3940711239032382,
          "resultadoMes": null
        }
      }
    },
    {
      "dateKey": "2026-02-06",
      "reportDate": "06/02/2026",
      "cotas": {
        "SR1": {
          "pu": 0.0,
          "valor": 0.0,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "SUB": {
          "pu": 219640.77352472275,
          "valor": 21964077.352472275,
          "resultadoDia": 0.0008277334274415793,
          "resultadoMes": null
        }
      }
    },
    {
      "dateKey": "2026-02-09",
      "reportDate": "09/02/2026",
      "cotas": {
        "SR1": {
          "pu": 0.0,
          "valor": 0.0,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "SUB": {
          "pu": 219937.89607063791,
          "valor": 21993789.607063793,
          "resultadoDia": 0.0013527658874399329,
          "resultadoMes": null
        }
      }
    },
    {
      "dateKey": "2026-02-10",
      "reportDate": "10/02/2026",
      "cotas": {
        "SR1": {
          "pu": 0.0,
          "valor": 0.0,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "SUB": {
          "pu": 220119.9355758258,
          "valor": 22011993.55758258,
          "resultadoDia": 0.0008276859442604145,
          "resultadoMes": null
        }
      }
    }
  ],
  "precificacaoMensal": []
};
