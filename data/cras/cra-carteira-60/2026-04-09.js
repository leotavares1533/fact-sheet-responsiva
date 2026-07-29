window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-60"] = window.LAMINA_CRA_DAILY["cra-carteira-60"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-60"]["2026-04-09"] = {
  "metadata": {
    "reportDate": "09/04/2026",
    "dateKey": "2026-04-09",
    "importedAt": "2026-07-29T10:01:22.438233-03:00",
    "revisionId": "20260409-cras-carteira-consolidado",
    "calculatedView": true,
    "crasCarteiraBatch": true,
    "observation": "Snapshot inicial em lote dos CRAs Carteira, usando series Senior e Mezanino no validador de PU. Subordinadas ficam para a lamina com carteira e caixa.",
    "warnings": [],
    "subordinadasSimulador": [
      {
        "classe": "SUB",
        "tipo": "sub",
        "label": "Subordinada Jr.",
        "ifCodigo": "CRA0260020B",
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
        "dataInicio": "01/05/2026",
        "dataInicioIso": "2026-05-01",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "arquivoRelativo": "CRA CRA0260020B - 60E3S - SUB. JR..pdf"
      }
    ],
    "businessCalendar": {
      "name": "ANBIMA feriados nacionais",
      "holidayCount": 1263,
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
        "2027-11-20"
      ]
    },
    "schemaVersion": 2,
    "model": "cra-carteira",
    "craId": "cra-carteira-60",
    "sourceSnapshotDateKey": "2026-07-27",
    "assetImport": {
      "sourceFile": "C:\\Users\\leonardo.silva\\Downloads\\CARTEIRA_CAIXA_CCs_total.xlsx",
      "sheetCarteira": "carteira ",
      "sheetCaixa": "caixa ",
      "cashDate": "2026-04-09",
      "importMode": "carteira-caixa-consolidado",
      "cashGainLiquidated": false
    }
  },
  "cra": {
    "id": "cra-carteira-60",
    "name": "CRA Carteira 60",
    "dataVencimento": "30/11/2027",
    "dataVencimentoIso": "2027-11-30",
    "description": "CRA Carteira 60, importado em lote.",
    "dataBase": "09/04/2026",
    "dateKey": "2026-04-09"
  },
  "ativo": {
    "carteiraVpBruto": 3603029.2655594843,
    "pddTotal": 0.0,
    "carteiraVp": 3603029.2655594843,
    "carteiraVpLiquido": 3603029.2655594843,
    "caixa": 0.0,
    "total": 3603029.2655594843,
    "liquidacoesDia": 0,
    "aquisicoesDia": 0,
    "quantidadeLastros": 3,
    "quantidadeLastrosBase": 3,
    "lastrosAtivos": 1,
    "quantidadeLastrosAtivos": 1,
    "cedentesUnicos": 1,
    "sacadosUnicos": 1,
    "montanteAtraso": 0
  },
  "caixa": {
    "accounts": {
      "cc": 9.28,
      "contaAplicacao": 0.0,
      "fundoDespesas": 110000.0
    },
    "total": 0.0,
    "totalCalculado": -109990.72,
    "totalCalculadoPlanilha": -109990.72,
    "cessaoRendimentosDia": 0.0,
    "linhasPosTotal": [
      -109990.72
    ],
    "fonte": "Importacao consolidada CRAs Carteira",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx",
    "observacao": "Fundo de despesa reduz o caixa conforme total informado na aba Planilha2."
  },
  "passivo": {
    "fundingTotal": 9908826.1389395,
    "despesasTotal": 0,
    "subordinadaTotal": -6305796.873380016,
    "subordinadaQuantidade": 100.0,
    "subordinadaPuResidual": -63057.96873380015,
    "subordinadasSimulador": [
      {
        "classe": "SUB",
        "tipo": "sub",
        "label": "Subordinada Jr.",
        "ifCodigo": "CRA0260020B",
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
        "dataInicio": "01/05/2026",
        "dataInicioIso": "2026-05-01",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "arquivoRelativo": "CRA CRA0260020B - 60E3S - SUB. JR..pdf"
      }
    ],
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA02600209",
        "quantidade": 10440.0,
        "quantidadeEmitida": 20000.0,
        "quantidadeAIntegralizar": 9560.0,
        "ofertaAberta": true,
        "ofertaStatus": "Aberta",
        "valorIntegralizado": 10555868.100000001,
        "statusIntegralizacao": "Parcial",
        "dataInicio": "01/05/2026",
        "dataInicioIso": "2026-05-01",
        "dataEmissao": "01/04/2026",
        "dataEmissaoIso": "2026-04-01",
        "dataVencimento": "30/11/2026",
        "dataVencimentoIso": "2026-11-30",
        "valorNominalInicial": 1000.0,
        "principalResidual": 1000.0,
        "pu": 1000.805645,
        "valor": 3502819.7575000003,
        "taxaAa": 0.225,
        "taxaAm": 0,
        "taxaDia": 0.0008056451673785769,
        "taxaTexto": "22,50% a.a.",
        "indexador": "",
        "percentualIndexador": 1.0,
        "taxaJurosSpread": 0.225,
        "metodo": "prefixado_252_ts",
        "ehFunding": true,
        "ordem": 10,
        "eventosAplicados": [
          {
            "data": "08/04/2026",
            "dataIso": "2026-04-08",
            "tipo": "integralizacao",
            "quantidade": 3500,
            "valor": 3500000.0,
            "valorEventoReais": 3500000.0
          },
          {
            "data": "06/05/2026",
            "dataIso": "2026-05-06",
            "tipo": "integralizacao",
            "quantidade": 2500,
            "valor": 2536503.37,
            "valorEventoReais": 2536503.37
          },
          {
            "data": "12/05/2026",
            "dataIso": "2026-05-12",
            "tipo": "integralizacao",
            "quantidade": 4440,
            "valor": 4519364.73,
            "valorEventoReais": 4519364.73
          },
          {
            "data": "29/05/2026",
            "dataIso": "2026-05-29",
            "tipo": "amortizacao",
            "tipoEvento": "2-Amortizacao",
            "puEvento": 241.04879654429325,
            "residual": 758.9512034557067,
            "valorEventoReais": 2516549.4359224215,
            "ifCodigo": "CRA02600209",
            "arquivo": "Pasta2.xlsx",
            "pasta": "29-05-2026",
            "linha": 38
          },
          {
            "data": "29/05/2026",
            "dataIso": "2026-05-29",
            "tipo": "juros",
            "tipoEvento": "2-Juros",
            "puEvento": 28.587219,
            "residual": null,
            "valorEventoReais": 298450.56636,
            "ifCodigo": "CRA02600209",
            "arquivo": "Pasta2.xlsx",
            "pasta": "29-05-2026",
            "linha": 38
          }
        ],
        "agendaPagamentos": [
          {
            "dataIso": "2026-11-30",
            "juros": true,
            "amortizacaoPercentual": 1
          }
        ],
        "acumulacaoFinal": {
          "periodoInicio": "01/05/2026",
          "periodoFim": "09/04/2026",
          "diasAcumulacao": 1.0,
          "diasUteisPeriodo": 1.0,
          "puAntesAcumulacao": 1000.0,
          "puFinal": 1000.805645
        },
        "dataHistoricaDisponivel": true,
        "dataHistoricaSelecionada": "09/04/2026",
        "dataHistoricaIso": "2026-04-09",
        "historicoPu": [
          {
            "data": "08/04/2026",
            "dataIso": "2026-04-08",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008056451673785769,
            "taxaDiAnualEquivalente": 0.225,
            "taxaAa": 0.225,
            "taxaPrefixadaAa": 0.225,
            "taxaPrefixadaDia": 0.0008056451673785769,
            "taxaDiStatus": "prefixada",
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "fator": 1.0,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.0,
            "puJuros": 0.0,
            "valorReais": 3500000.0,
            "quantidade": 3500.0,
            "quantidadeEvento": 3500.0,
            "valorEventoReais": 3500000.0,
            "valorIntegralizadoReais": 3500000.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008056451673785769,
            "fatorDiario": 1,
            "produtorioFatorDi": 1.0,
            "fatorDiAcumulado": 1.0,
            "spread": 0.225,
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
            "data": "09/04/2026",
            "dataIso": "2026-04-09",
            "diaUtil": true,
            "taxaDiUtilizadaDia": 0.0008056451673785769,
            "taxaDiAnualEquivalente": 0.225,
            "taxaAa": 0.225,
            "taxaPrefixadaAa": 0.225,
            "taxaPrefixadaDia": 0.0008056451673785769,
            "taxaDiStatus": "prefixada",
            "diasUteis": 1,
            "diasUteisPeriodo": 1,
            "fator": 1.000805645,
            "valorNominal": 1000.0,
            "puAtualizado": 1000.805645,
            "puJuros": 0.8056450000000268,
            "valorReais": 3502819.7575000003,
            "quantidade": 3500.0,
            "quantidadeEvento": 0.0,
            "valorEventoReais": 0.0,
            "valorIntegralizadoReais": 0.0,
            "valorPagamentoReais": 0.0,
            "tdk": 0.0008056451673785769,
            "fatorDiario": 1.0008056451673786,
            "produtorioFatorDi": 1.000805645,
            "fatorDiAcumulado": 1.000805645,
            "spread": 0.225,
            "spreadAcumulado": 0,
            "fatorJurosAcumulado": 1.000805645,
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
        "visaoCalculadaPu": true
      },
      {
        "classe": "MEZA",
        "tipo": "mez",
        "label": "Mezanino A",
        "ifCodigo": "CRA0260020A",
        "quantidade": 6050.0,
        "quantidadeEmitida": 19900.0,
        "quantidadeAIntegralizar": 13850.0,
        "ofertaAberta": true,
        "ofertaStatus": "Aberta",
        "valorIntegralizado": 6050000.0,
        "statusIntegralizacao": "Parcial",
        "dataInicio": "01/05/2026",
        "dataInicioIso": "2026-05-01",
        "dataEmissao": "01/04/2026",
        "dataEmissaoIso": "2026-04-01",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "valorNominalInicial": 1000.0,
        "principalResidual": 1000.0,
        "pu": 1058.84402999,
        "valor": 6406006.3814395005,
        "taxaAa": 0.225,
        "taxaAm": 0,
        "taxaDia": 0.0008056451673785769,
        "taxaTexto": "22,50% a.a.",
        "indexador": "",
        "percentualIndexador": 1.0,
        "taxaJurosSpread": 0.225,
        "metodo": "prefixado_252_ts",
        "ehFunding": true,
        "ordem": 11,
        "eventosAplicados": [
          {
            "data": "14/04/2026",
            "dataIso": "2026-04-14",
            "tipo": "integralizacao",
            "quantidade": 6050,
            "valor": 6050000.0,
            "valorEventoReais": 6050000.0
          }
        ],
        "agendaPagamentos": [
          {
            "dataIso": "2027-11-30",
            "juros": true,
            "amortizacaoPercentual": 1
          }
        ],
        "acumulacaoFinal": {
          "periodoInicio": "01/05/2026",
          "periodoFim": "27/07/2026",
          "diasAcumulacao": 0.0,
          "diasUteisPeriodo": 0.0,
          "puAntesAcumulacao": 1000.0,
          "puFinal": 1058.84402999
        },
        "dataHistoricaDisponivel": true,
        "dataHistoricaSelecionada": "27/07/2026",
        "dataHistoricaIso": "2026-07-27",
        "historicoPu": [
          {
            "data": "27/07/2026",
            "dataIso": "2026-07-27",
            "valorNominal": 1000.0,
            "puAtualizado": 1058.84402999,
            "valorReais": 6406006.3814395005,
            "diasUteis": 0,
            "diasUteisPeriodo": 0,
            "produtorioFatorDi": 1,
            "fatorDiAcumulado": 1
          }
        ],
        "visaoCalculadaPu": false
      },
      {
        "classe": "SUB",
        "label": "Subordinada",
        "tipo": "sub",
        "ifCodigo": "",
        "quantidade": 100.0,
        "pu": -63057.96873380015,
        "valor": -6305796.873380016,
        "principalResidual": -63057.96873380015,
        "ehFunding": false,
        "ordem": 90,
        "historicoPu": [
          {
            "data": "27/07/2026",
            "dataIso": "2026-07-27",
            "valorNominal": -748.959594334513,
            "puAtualizado": -748.959594334513,
            "valorReais": -74895.9594334513,
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
          "puFinal": -748.959594334513
        }
      }
    ],
    "despesasOperacionaisTotal": 0,
    "provisoesTotal": 0.0,
    "provisoesCaixa": 0,
    "deducoesTotal": 0
  },
  "carteiraResumo": {
    "valorNominal": 3919193.28,
    "valorPresente": 3603029.2655594843,
    "valorPresenteLiquido": 3603029.2655594843,
    "pddTotal": 0.0,
    "cedentesUnicos": 1,
    "sacadosUnicos": 1,
    "prazoMedioDias": 41.0,
    "taxaMediaPonderada": 0.01782020366829795,
    "preFixado": {
      "valorPresente": 3603029.2655594843
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
      "ifCodigo": "CRA02600209",
      "quantidade": 10440.0,
      "taxa": "22,50% a.a.",
      "pu": 1000.805645,
      "valor": 3502819.7575000003,
      "resultadoDia": 0.0008056450000000215,
      "resultadoMes": null,
      "resultado30Dias": null,
      "resultadoInicio": null
    },
    {
      "classe": "MEZA",
      "label": "Mezanino A",
      "tipo": "mez",
      "ifCodigo": "CRA0260020A",
      "quantidade": 6050.0,
      "taxa": "22,50% a.a.",
      "pu": 1058.84402999,
      "valor": 6406006.3814395005,
      "resultadoDia": 0.0,
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
      "taxa": "22,50% a.a.",
      "pu": -63057.96873380015,
      "valor": -6305796.873380016,
      "resultadoDia": -3.3223572386664735e-05,
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
      "valorNominal": 3919193.28,
      "valorPresente": 3603029.2655594843,
      "valorPdd": 0.0,
      "order": 0.0,
      "percentualCarteira": 1.0
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
          "value": "R$ 3.603.029,27",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 3.603.029,27",
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
          "value": "R$ 9.908.826,14",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinada residual",
          "value": "R$ -6.305.796,87",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "PU SUB residual",
          "value": "-63.057,968734",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "Valor nominal",
          "value": "R$ 3.919.193,28",
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
      "date": "09/04/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    },
    {
      "name": "Memoria PU existente",
      "date": "27/07/2026",
      "file": "data/cras/cra-carteira-60/2026-07-27.js"
    }
  ],
  "notasEstruturacao": {
    "integralizacoes": [
      {
        "seriesKey": "sr",
        "dataIso": "2026-04-08",
        "valor": 3500000.0,
        "quantidade": 3500
      },
      {
        "seriesKey": "sr",
        "dataIso": "2026-05-06",
        "valor": 2536503.37,
        "quantidade": 2500
      },
      {
        "seriesKey": "sr",
        "dataIso": "2026-05-12",
        "valor": 4519364.73,
        "quantidade": 4440
      },
      {
        "seriesKey": "mez_a",
        "dataIso": "2026-04-14",
        "valor": 6050000.0,
        "quantidade": 6050
      }
    ],
    "comunicados": {
      "arquivo": "eventos-comunicados.json",
      "quantidadeEventos": 2,
      "primeiroEvento": "2026-05-29",
      "ultimoEvento": "2026-05-29"
    },
    "warnings": []
  },
  "carteira": [
    {
      "craCarteira": "60ª",
      "lastro": "466141",
      "numeroUnico": "466141",
      "cedente": "LEANDRO HOMERO SILVA",
      "sacado": "LEANDRO HOMERO SILVA",
      "devedor": "LEANDRO HOMERO SILVA",
      "valorAquisicao": 3600000.0,
      "valorFace": 3919193.28,
      "valorNominal": 3919193.28,
      "dataAquisicao": "08/04/2026",
      "dataAquisicaoIso": "2026-04-08",
      "dataVencimento": "31/08/2026",
      "dataVencimentoIso": "2026-08-31",
      "valorLiquidacao": 0.0,
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "dataLiquidacaoOriginal": "",
      "dataLiquidacaoOriginalIso": "",
      "tipoTitulo": "CPR",
      "tipoAtivo": "CPR",
      "mesaResp": "Especial",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "Vincendo",
      "taxa": 0.01782020366829795,
      "taxaCessao": 0.2360977277831664,
      "taxaOp": 0.01782020366829795,
      "taxaMedia": 0.01782020366829795,
      "base": 252.0,
      "tipo": "Pré fixado",
      "indexadorAtivo": "Pré fixado",
      "pagamento": "Bullet",
      "dias": 0.0,
      "diasDoVencimento": 41.0,
      "diasUteisOp": 101.0,
      "diasCorridosOp": 145.0,
      "fator": 1.0008414626554123,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 3603029.2655594843,
      "valorPresente": 3603029.2655594843,
      "pdd": 0.0,
      "valorPresenteLiquido": 3603029.2655594843
    },
    {
      "craCarteira": "60ª",
      "lastro": "462732",
      "numeroUnico": "462732",
      "cedente": "AGROPECUARIA RUIZ LTDA",
      "sacado": "AGROPECUÁRIA RUIZ LTDA",
      "devedor": "AGROPECUÁRIA RUIZ LTDA",
      "valorAquisicao": 5795809.71,
      "valorFace": 7200000.0,
      "valorNominal": 7200000.0,
      "dataAquisicao": "15/04/2026",
      "dataAquisicaoIso": "2026-04-15",
      "dataVencimento": "30/06/2027",
      "dataVencimentoIso": "2027-06-30",
      "valorLiquidacao": 0.0,
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "dataLiquidacaoOriginal": "",
      "dataLiquidacaoOriginalIso": "",
      "tipoTitulo": "CPR",
      "tipoAtivo": "CPR",
      "mesaResp": "Normal",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "Vincendo",
      "taxa": 0.015250881472845146,
      "taxaCessao": 0.19916930325701565,
      "taxaOp": 0.015250881472845146,
      "taxaMedia": 0.015250881472845146,
      "base": 252.0,
      "tipo": "Pré fixado",
      "indexadorAtivo": "Pré fixado",
      "pagamento": "Bullet",
      "dias": 0.0,
      "diasDoVencimento": 344.0,
      "diasUteisOp": 301.0,
      "diasCorridosOp": 440.0,
      "fator": 1.0007210100798565,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 0.0,
      "valorPresente": 0.0,
      "pdd": 0.0,
      "valorPresenteLiquido": 0.0
    },
    {
      "craCarteira": "60ª",
      "lastro": "481717",
      "numeroUnico": "481717",
      "cedente": "CERES TRADING S.A.",
      "sacado": "CERES TRADING S.A.",
      "devedor": "CERES TRADING S.A.",
      "valorAquisicao": 4400000.0,
      "valorFace": 4512230.02,
      "valorNominal": 4512230.02,
      "dataAquisicao": "12/05/2026",
      "dataAquisicaoIso": "2026-05-12",
      "dataVencimento": "20/07/2026",
      "dataVencimentoIso": "2026-07-20",
      "valorLiquidacao": 0.0,
      "dataLiquidacao": "",
      "dataLiquidacaoIso": "",
      "dataLiquidacaoOriginal": "",
      "dataLiquidacaoOriginalIso": "",
      "tipoTitulo": "CPR",
      "tipoAtivo": "CPR",
      "mesaResp": "Normal",
      "status": "EM CARTEIRA",
      "statusOriginal": "EM CARTEIRA",
      "statusPagamento": "Vencido",
      "taxa": 0.01656579153001414,
      "taxaCessao": 0.21794000000000002,
      "taxaOp": 0.01656579153001414,
      "taxaMedia": 0.01656579153001414,
      "base": 252.0,
      "tipo": "Pós fixado",
      "indexadorAtivo": "Pós fixado",
      "pagamento": "Bullet",
      "dias": 0.0,
      "diasDoVencimento": -1.0,
      "diasUteisOp": 49.0,
      "diasCorridosOp": 69.0,
      "fator": 1.0007826906941784,
      "faixaVenc": "Em dia",
      "faixaVencOrder": 0,
      "valorPresenteDia": 0.0,
      "valorPresente": 0.0,
      "pdd": 0.0,
      "valorPresenteLiquido": 0.0
    }
  ],
  "rankingCarteira": {
    "cedentes": [
      {
        "name": "LEANDRO HOMERO SILVA",
        "quantidade": 1,
        "valorPresenteDia": 3603029.2655594843,
        "pdd": 0.0,
        "valorPresenteLiquido": 3603029.2655594843,
        "valorNominal": 3919193.28,
        "posicao": 1,
        "participacao": 1.0,
        "participacaoPl": 1.0
      }
    ],
    "sacados": [
      {
        "name": "LEANDRO HOMERO SILVA",
        "quantidade": 1,
        "valorPresenteDia": 3603029.2655594843,
        "pdd": 0.0,
        "valorPresenteLiquido": 3603029.2655594843,
        "valorNominal": 3919193.28,
        "posicao": 1,
        "participacao": 1.0,
        "participacaoPl": 1.0
      }
    ],
    "lastrosAtivos": 1
  },
  "concentracaoDetalhada": {
    "top10Cedentes": [
      {
        "name": "LEANDRO HOMERO SILVA",
        "quantidade": 1,
        "valorPresenteDia": 3603029.2655594843,
        "pdd": 0.0,
        "valorPresenteLiquido": 3603029.2655594843,
        "valorNominal": 3919193.28,
        "posicao": 1,
        "participacao": 1.0,
        "participacaoPl": 1.0
      }
    ],
    "top10Sacados": [
      {
        "name": "LEANDRO HOMERO SILVA",
        "quantidade": 1,
        "valorPresenteDia": 3603029.2655594843,
        "pdd": 0.0,
        "valorPresenteLiquido": 3603029.2655594843,
        "valorNominal": 3919193.28,
        "posicao": 1,
        "participacao": 1.0,
        "participacaoPl": 1.0
      }
    ]
  },
  "pddComposition": [],
  "composicaoCarteira": [
    {
      "label": "CPR",
      "tipoTitulo": "CPR",
      "valorNominal": 3919193.28,
      "valorPresente": 3603029.2655594843,
      "lastros": 1,
      "percentualCarteira": 1.0,
      "taxaMedia": 0.01782020366829795
    }
  ],
  "movimentacoesDia": {
    "aquisicoes": [],
    "liquidacoes": []
  },
  "rendimento30Dias": [
    {
      "dateKey": "2026-04-08",
      "reportDate": "08/04/2026",
      "cotas": {
        "SR1": {
          "pu": 1000.0,
          "valor": 3500000.0,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "MEZA": {
          "pu": 1058.84402999,
          "valor": 6406006.3814395005,
          "resultadoDia": null,
          "resultadoMes": null
        },
        "SUB": {
          "pu": -63060.063814395,
          "valor": -6306006.3814395,
          "resultadoDia": null,
          "resultadoMes": null
        }
      }
    },
    {
      "dateKey": "2026-04-09",
      "reportDate": "09/04/2026",
      "cotas": {
        "SR1": {
          "pu": 1000.805645,
          "valor": 3502819.7575000003,
          "resultadoDia": 0.0008056450000000215,
          "resultadoMes": null
        },
        "MEZA": {
          "pu": 1058.84402999,
          "valor": 6406006.3814395005,
          "resultadoDia": 0.0,
          "resultadoMes": null
        },
        "SUB": {
          "pu": -63057.96873380015,
          "valor": -6305796.873380016,
          "resultadoDia": -3.3223572386664735e-05,
          "resultadoMes": null
        }
      }
    }
  ],
  "precificacaoMensal": []
};
