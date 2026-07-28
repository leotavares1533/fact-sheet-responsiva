window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cra-carteira-63"] = window.LAMINA_CRA_DAILY["cra-carteira-63"] || {};
window.LAMINA_CRA_DAILY["cra-carteira-63"]["2026-07-20"] = {
  "metadata": {
    "reportDate": "20/07/2026",
    "dateKey": "2026-07-20",
    "importedAt": "2026-07-22T15:10:59-03:00",
    "revisionId": "20260720-cra63-pending-v1",
    "calculatedView": true,
    "crasCarteiraBatch": true,
    "warnings": [
      "Operacao sem print de integralizacao; PU mantido zerado."
    ],
    "subordinadasSimulador": [
      {
        "classe": "SUB",
        "tipo": "sub",
        "label": "Subordinada Jr.",
        "ifCodigo": "CRA0260020K",
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
        "arquivoRelativo": "CRA CRA0260020K - 63E3S - SUB. JR..pdf"
      }
    ],
    "businessCalendar": {
      "name": "ANBIMA feriados nacionais",
      "holidayCount": 1263,
      "holidays": []
    }
  },
  "cra": {
    "id": "cra-carteira-63",
    "name": "CRA Carteira 63",
    "dataVencimento": "30/11/2027",
    "dataVencimentoIso": "2027-11-30",
    "description": "Operacao cadastrada como pendente de integralizacao."
  },
  "ativo": {
    "total": 0,
    "carteiraVpBruto": 0,
    "pddTotal": 0,
    "carteiraVp": 0,
    "carteiraVpLiquido": 0,
    "caixa": 0
  },
  "caixa": {
    "accounts": {},
    "total": 0,
    "fonte": "Pendente de importacao"
  },
  "passivo": {
    "fundingTotal": 0,
    "despesasTotal": 0,
    "subordinadaTotal": 0,
    "subordinadaQuantidade": 0,
    "subordinadaPuResidual": 0,
    "subordinadasSimulador": [
      {
        "classe": "SUB",
        "tipo": "sub",
        "label": "Subordinada Jr.",
        "ifCodigo": "CRA0260020K",
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
        "arquivoRelativo": "CRA CRA0260020K - 63E3S - SUB. JR..pdf"
      }
    ],
    "cotas": [
      {
        "classe": "SR1",
        "tipo": "sr",
        "label": "Senior",
        "ifCodigo": "CRA0260020I",
        "quantidade": 0,
        "quantidadeEmitida": 20000.0,
        "quantidadeAIntegralizar": 20000.0,
        "ofertaAberta": true,
        "ofertaStatus": "Aberta",
        "valorIntegralizado": 0,
        "statusIntegralizacao": "Nao integralizada",
        "dataInicio": "01/05/2026",
        "dataInicioIso": "2026-05-01",
        "dataVencimento": "30/11/2026",
        "dataVencimentoIso": "2026-11-30",
        "valorNominalInicial": 1000.0,
        "principalResidual": 0,
        "pu": 0,
        "valor": 0,
        "taxaAa": 0.225,
        "taxaTexto": "22,50% a.a.",
        "indexador": "",
        "percentualIndexador": 1.0,
        "taxaJurosSpread": 0.225,
        "metodo": "pendente_integralizacao",
        "ehFunding": true,
        "ordem": 10,
        "eventosAplicados": [],
        "agendaPagamentos": [
          {
            "dataIso": "2026-11-30",
            "juros": true,
            "amortizacaoPercentual": 1
          }
        ],
        "historicoPu": [
          {
            "data": "20/07/2026",
            "dataIso": "2026-07-20",
            "diaUtil": true,
            "puAtualizado": 0,
            "valorReais": 0,
            "quantidade": 0,
            "taxaDiStatus": "sem_integralizacao",
            "evento": "Nao integralizada",
            "dataInicioPrevistaIso": "2026-05-01"
          }
        ]
      },
      {
        "classe": "MEZA",
        "tipo": "mez",
        "label": "Mezanino A",
        "ifCodigo": "CRA0260020J",
        "quantidade": 0,
        "quantidadeEmitida": 19900.0,
        "quantidadeAIntegralizar": 19900.0,
        "ofertaAberta": true,
        "ofertaStatus": "Aberta",
        "valorIntegralizado": 0,
        "statusIntegralizacao": "Nao integralizada",
        "dataInicio": "01/05/2026",
        "dataInicioIso": "2026-05-01",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "valorNominalInicial": 1000.0,
        "principalResidual": 0,
        "pu": 0,
        "valor": 0,
        "taxaAa": 0.225,
        "taxaTexto": "22,50% a.a.",
        "indexador": "",
        "percentualIndexador": 1.0,
        "taxaJurosSpread": 0.225,
        "metodo": "pendente_integralizacao",
        "ehFunding": true,
        "ordem": 20,
        "eventosAplicados": [],
        "agendaPagamentos": [
          {
            "dataIso": "2027-11-30",
            "juros": true,
            "amortizacaoPercentual": 1
          }
        ],
        "historicoPu": [
          {
            "data": "20/07/2026",
            "dataIso": "2026-07-20",
            "diaUtil": true,
            "puAtualizado": 0,
            "valorReais": 0,
            "quantidade": 0,
            "taxaDiStatus": "sem_integralizacao",
            "evento": "Nao integralizada",
            "dataInicioPrevistaIso": "2026-05-01"
          }
        ]
      }
    ]
  },
  "carteiraResumo": {},
  "performanceCotas": [],
  "puMensal": [],
  "rentabilidade30Dias": [],
  "evolucaoPu": [],
  "sections": [],
  "sources": [
    {
      "name": "Pasta CRAs Carteira",
      "date": "20/07/2026",
      "file": "C:\\Users\\leonardo.silva\\OneDrive - Ceres Investimentos\\Leonardo Tavares\\CRAs Carteiras\\63ª Emissão_CRA de CPR e CDA-WA"
    },
    {
      "name": "Status",
      "date": "20/07/2026",
      "file": "Sem print de integralizacao localizado"
    }
  ],
  "notasEstruturacao": {
    "warnings": [
      "Sem integralizacao."
    ]
  }
};
