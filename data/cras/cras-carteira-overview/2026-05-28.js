window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-05-28"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "28/05/2026",
    "dateKey": "2026-05-28",
    "importedAt": "2026-07-29T10:05:56.462191-03:00",
    "revisionId": "20260528-cras-carteira-overview-assets",
    "portfolioOverview": true,
    "portfolioConsolidado": true,
    "assetImport": {
      "sourceFile": "C:\\Users\\leonardo.silva\\Downloads\\CARTEIRA_CAIXA_CCs_total.xlsx",
      "sheetCarteira": "carteira ",
      "sheetCaixa": "caixa ",
      "importMode": "carteira-caixa-consolidado"
    }
  },
  "cra": {
    "id": "cras-carteira-overview",
    "name": "CRAs Carteira - Visao geral",
    "description": "Resumo consolidado de carteira, caixa, funding e subordinada dos CRAs Carteira."
  },
  "ativo": {
    "carteiraVpBruto": 485425612.34937316,
    "pddTotal": 0.0,
    "carteiraVp": 485425612.34937316,
    "carteiraVpLiquido": 485425612.34937316,
    "caixa": 9715051.63,
    "total": 495140663.97937316,
    "lastrosAtivos": 1300.0,
    "quantidadeLastrosAtivos": 1300.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 9715051.63
    },
    "total": 9715051.63,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 493470321.6006946,
    "subordinadaTotal": 1670342.3786785584,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 1670342.3786785584,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 493470321.6006946,
        "valor": 493470321.6006946
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 1670342.3786785584,
        "valor": 1670342.3786785584
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 496162013.21,
    "valorPresente": 485425612.34937316,
    "valorPresenteLiquido": 485425612.34937316,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 69.29782980440358,
    "taxaMediaPonderada": 0.01939049437670784,
    "preFixado": {
      "valorPresente": 0
    },
    "posFixado": {
      "valorPresente": 0
    }
  },
  "portfolioOverview": {
    "metrics": [
      {
        "label": "Carteira VP liquida",
        "value": "R$ 485.425.612,35"
      },
      {
        "label": "Caixa total",
        "value": "R$ 9.715.051,63"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 1.670.342,38"
      },
      {
        "label": "PDD",
        "value": "R$ 0,00"
      }
    ],
    "assetRows": [
      {
        "operacao": "CRA 44",
        "craId": "cra-carteira-44",
        "carteiraVp": 32323824.360202063,
        "valorNominal": 34403854.65,
        "caixa": 268102.95999999996,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32591927.320202064,
        "funding": 32352949.406169,
        "subordinada": 238977.91403306276,
        "puSub": 2389.7791403306273,
        "rendimentoSubDia": -0.0024117382344667204,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 8,
        "sacados": 10,
        "taxaMedia": 0.02218987470539148,
        "prazoMedio": 8.487639003595099,
        "montanteAtraso": 5204999.9
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 34483917.86349055,
        "valorNominal": 38393242.11,
        "caixa": 30500.799999999996,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34514418.66349055,
        "funding": 34182508.224920996,
        "subordinada": 331910.4385695532,
        "puSub": 3319.104385695532,
        "rendimentoSubDia": -0.35203991614419405,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 22,
        "cedentes": 4,
        "sacados": 12,
        "taxaMedia": 0.02027594506366253,
        "prazoMedio": 94.59751475519444,
        "montanteAtraso": 3513293.58
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 28189533.664245576,
        "valorNominal": 28969543.57,
        "caixa": 2905468.3000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 31095001.964245576,
        "funding": 31017102.037361998,
        "subordinada": 77899.9268835783,
        "puSub": 778.999268835783,
        "rendimentoSubDia": 0.4146867925192832,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 174,
        "cedentes": 13,
        "sacados": 76,
        "taxaMedia": 0.01829303442622131,
        "prazoMedio": 5.819222105600916,
        "montanteAtraso": 890090.1900000001
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 43313286.73148759,
        "valorNominal": 27267265.52,
        "caixa": 4734.68,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 43318021.41148759,
        "funding": 43175135.041101,
        "subordinada": 142886.3703865856,
        "puSub": 1428.863703865856,
        "rendimentoSubDia": 0.021508232193820698,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018688180073854237,
        "prazoMedio": 11.881846725897399,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42961079.40607164,
        "valorNominal": 28015535.4,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42961079.40607164,
        "funding": 42792512.863128,
        "subordinada": 168566.54294364154,
        "puSub": 1685.6654294364155,
        "rendimentoSubDia": 0.017300307716255015,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.01861289086107675,
        "prazoMedio": 11.541800410642207,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 31637591.858513825,
        "valorNominal": 35447196.56,
        "caixa": 982521.68,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 32620113.538513824,
        "funding": 32234508.907523997,
        "subordinada": 385604.6309898272,
        "puSub": 3856.0463098982723,
        "rendimentoSubDia": 0.0017400450106934695,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 351,
        "cedentes": 33,
        "sacados": 179,
        "taxaMedia": 0.020337258401831267,
        "prazoMedio": 12.772805011025792,
        "montanteAtraso": 198509.69
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 27372929.02798851,
        "valorNominal": 29736904.58,
        "caixa": 357556.13,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27730485.157988507,
        "funding": 27527239.114577997,
        "subordinada": 203246.04341050982,
        "puSub": 2032.4604341050983,
        "rendimentoSubDia": -0.016662956132374562,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 13,
        "cedentes": 9,
        "sacados": 12,
        "taxaMedia": 0.020328266160369323,
        "prazoMedio": 20.36363246207781,
        "montanteAtraso": 207321.0
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 26581266.564449687,
        "valorNominal": 32032656.0,
        "caixa": 707322.04,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 27288588.604449686,
        "funding": 27316082.73299211,
        "subordinada": -27494.12854242325,
        "puSub": -274.9412854242325,
        "rendimentoSubDia": 0.398200478093816,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018400490218665078,
        "prazoMedio": 130.87419707640817,
        "montanteAtraso": 12027623.207274094
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13738299.313768,
        "valorNominal": 17468847.48,
        "caixa": 1589.1000000000058,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13739888.413767999,
        "funding": 0.0,
        "subordinada": 13739888.413767999,
        "puSub": 137398.88413768,
        "rendimentoSubDia": 0.0009739542104547638,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.02059999999999995,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 34543608.192288056,
        "valorNominal": 36495797.33,
        "caixa": 944284.33,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35487892.522288054,
        "funding": 35354638.635918,
        "subordinada": 133253.88637005538,
        "puSub": 1332.5388637005537,
        "rendimentoSubDia": -0.2635004907012257,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 274,
        "cedentes": 23,
        "sacados": 150,
        "taxaMedia": 0.02110437643822294,
        "prazoMedio": 16.961796092477726,
        "montanteAtraso": 14312635.98
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 33000892.938794687,
        "valorNominal": 36835829.04,
        "caixa": 291407.04,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 33292299.978794686,
        "funding": 33053314.320983153,
        "subordinada": 238985.65781153366,
        "puSub": 2389.8565781153366,
        "rendimentoSubDia": -0.3546122881719711,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 107,
        "cedentes": 14,
        "sacados": 59,
        "taxaMedia": 0.017832931835331096,
        "prazoMedio": 40.09445199289804,
        "montanteAtraso": 861652.6599999999
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28268030.558585215,
        "valorNominal": 30212434.0,
        "caixa": 317801.6,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 28585832.158585217,
        "funding": 28310286.713800002,
        "subordinada": 275545.44478521496,
        "puSub": 2755.4544478521498,
        "rendimentoSubDia": -0.01291570549579335,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 12,
        "cedentes": 6,
        "sacados": 8,
        "taxaMedia": 0.020244469563553677,
        "prazoMedio": 4.688103887141836,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 41232342.66420739,
        "valorNominal": 43345891.22,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41232342.66420739,
        "funding": 40580880.574200004,
        "subordinada": 651462.0900073871,
        "puSub": 6514.620900073871,
        "rendimentoSubDia": 0.0033497884564546165,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.017911616175972617,
        "prazoMedio": 14.052034914679032,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 15713515.374782652,
        "valorNominal": 16712523.889999999,
        "caixa": 80452.51999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 15793967.894782651,
        "funding": 15607564.033775,
        "subordinada": 186403.8610076513,
        "puSub": 1864.0386100765131,
        "rendimentoSubDia": 0.0049027725152845925,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.0180846689854486,
        "prazoMedio": 6.995057631345909,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14063247.336057413,
        "valorNominal": 15631423.299999999,
        "caixa": 2818633.85,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 16881881.186057415,
        "funding": 16927751.8315495,
        "subordinada": -45870.645492084324,
        "puSub": -458.70645492084327,
        "rendimentoSubDia": 0.03911872646069514,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016342866872947684,
        "prazoMedio": 155.24945914934796,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 29181097.164440285,
        "valorNominal": 36288854.8,
        "caixa": 4676.600000000006,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 29185773.764440287,
        "funding": 29212308.051826224,
        "subordinada": -26534.287385936826,
        "puSub": -265.34287385936824,
        "rendimentoSubDia": 0.14606372671861978,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 251,
        "cedentes": 2,
        "sacados": 56,
        "taxaMedia": 0.019902992599079534,
        "prazoMedio": 278.46439851880945,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 8821149.33,
        "valorNominal": 8904213.76,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 8821149.33,
        "funding": 23825539.110867597,
        "subordinada": -15004389.780867597,
        "puSub": -150043.89780867597,
        "rendimentoSubDia": null,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.019988696587385776,
        "prazoMedio": 1297.7365746930393,
        "montanteAtraso": 0
      }
    ],
    "rows": [
      {
        "operacao": "CRA 44",
        "craId": "cra-carteira-44",
        "serie": "SR1",
        "classe": "SR1",
        "ifCodigo": "CRA02500B41",
        "puAtual": 810.85086231,
        "valorAtual": 32352949.406169,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "29/12/2026",
        "dataVencimentoIso": "2026-12-29",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "serie": "SR1",
        "classe": "SR1",
        "ifCodigo": "CRA02500B43",
        "puAtual": 856.70446679,
        "valorAtual": 34182508.224920996,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B47",
        "puAtual": 777.37097838,
        "valorAtual": 31017102.037361998,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "28/09/2026",
        "dataVencimentoIso": "2026-09-28",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B49",
        "puAtual": 1082.08358499,
        "valorAtual": 43175135.041101,
        "quantidadeIntegralizada": 39900.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B9U",
        "puAtual": 1072.49405672,
        "valorAtual": 42792512.863128,
        "quantidadeIntegralizada": 39900.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "29/12/2028",
        "dataVencimentoIso": "2028-12-29",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B9X",
        "puAtual": 807.8824287599999,
        "valorAtual": 32234508.907523997,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02500B9Z",
        "puAtual": 689.90574222,
        "valorAtual": 27527239.114577997,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000GP",
        "puAtual": 534.4892260099999,
        "valorAtual": 13362230.650249999,
        "quantidadeIntegralizada": 25000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000MH",
        "puAtual": 1057.99166599,
        "valorAtual": 9521924.99391,
        "quantidadeIntegralizada": 9000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000MI",
        "puAtual": 1057.99166599,
        "valorAtual": 4431927.08883211,
        "quantidadeIntegralizada": 4189,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/11/2028",
        "dataVencimentoIso": "2028-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000B5",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 21845.0,
        "taxa": "23,50% a.a.",
        "dataVencimento": "30/11/2029",
        "dataVencimentoIso": "2029-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000B7",
        "puAtual": 886.08116882,
        "valorAtual": 35354638.635918,
        "quantidadeIntegralizada": 39900,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000B9",
        "puAtual": 834.5742790300001,
        "valorAtual": 33053314.320983153,
        "quantidadeIntegralizada": 39605,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/03/2027",
        "dataVencimentoIso": "2027-03-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000M9",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000MA",
        "puAtual": 1064.296493,
        "valorAtual": 14155143.356900001,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000MB",
        "puAtual": 1064.296493,
        "valorAtual": 14155143.356900001,
        "quantidadeIntegralizada": 13300,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "31/03/2027",
        "dataVencimentoIso": "2027-03-31",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000RY",
        "puAtual": 997.96877771,
        "valorAtual": 19959375.5542,
        "quantidadeIntegralizada": 20000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000RZ",
        "puAtual": 1031.075251,
        "valorAtual": 20621505.02,
        "quantidadeIntegralizada": 20000,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000S0",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 0,
        "taxa": "CDI + 7,00% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Nao integralizada"
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000S2",
        "puAtual": 1000.805645,
        "valorAtual": 15607564.033775,
        "quantidadeIntegralizada": 15595.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000S3",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 0.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Nao integralizada"
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000S4",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 0.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Nao integralizada"
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02600209",
        "puAtual": 1027.759209,
        "valorAtual": 10729806.14196,
        "quantidadeIntegralizada": 10440.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA0260020A",
        "puAtual": 1024.45383299,
        "valorAtual": 6197945.6895894995,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA0260020C",
        "puAtual": 1008.08572199,
        "valorAtual": 20161714.4398,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA0260020D",
        "puAtual": 1008.08572199,
        "valorAtual": 9050593.61202622,
        "quantidadeIntegralizada": 19900.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/06/2027",
        "dataVencimentoIso": "2027-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA0260020F",
        "puAtual": 1000.0,
        "valorAtual": 13400000.0,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA0260020G",
        "puAtual": 1058.64531995,
        "valorAtual": 10425539.110867599,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-04-15",
        "reportDate": "15/04/2026",
        "caixaTotal": 10667149.78,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14495676.404188635,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-16",
        "reportDate": "16/04/2026",
        "caixaTotal": 11199790.22,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14890682.7773254,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-17",
        "reportDate": "17/04/2026",
        "caixaTotal": 11486903.469999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14849387.490953427,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-20",
        "reportDate": "20/04/2026",
        "caixaTotal": 12706096.370000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15039732.755572796,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-22",
        "reportDate": "22/04/2026",
        "caixaTotal": 17042122.709999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15147435.269771092,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-23",
        "reportDate": "23/04/2026",
        "caixaTotal": 18388508.959999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14996360.876221312,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-24",
        "reportDate": "24/04/2026",
        "caixaTotal": 18562455.709999997,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14885983.343399946,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-27",
        "reportDate": "27/04/2026",
        "caixaTotal": 20724160.18,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15231965.66495035,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-28",
        "reportDate": "28/04/2026",
        "caixaTotal": 14598223.61,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15071403.84796698,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-29",
        "reportDate": "29/04/2026",
        "caixaTotal": 31306151.169999998,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 18523178.56208051,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-30",
        "reportDate": "30/04/2026",
        "caixaTotal": 56801366.14,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14788673.408065982,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-04",
        "reportDate": "04/05/2026",
        "caixaTotal": 60086050.59,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14984727.818494301,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-05",
        "reportDate": "05/05/2026",
        "caixaTotal": 61122254.18,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14979935.54723854,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-06",
        "reportDate": "06/05/2026",
        "caixaTotal": 63764002.089999996,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14936192.516409077,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-07",
        "reportDate": "07/05/2026",
        "caixaTotal": 64609210.339999996,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14892337.582614593,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-08",
        "reportDate": "08/05/2026",
        "caixaTotal": 21235267.34,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14957013.809559127,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-11",
        "reportDate": "11/05/2026",
        "caixaTotal": 10054377.879999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15337324.638483573,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-12",
        "reportDate": "12/05/2026",
        "caixaTotal": 11559383.54,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15323159.972812641,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-13",
        "reportDate": "13/05/2026",
        "caixaTotal": 12437245.979999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15325577.245278366,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-14",
        "reportDate": "14/05/2026",
        "caixaTotal": 7198254.88,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15456566.13360905,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-15",
        "reportDate": "15/05/2026",
        "caixaTotal": 7508897.7,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15465120.665787352,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-18",
        "reportDate": "18/05/2026",
        "caixaTotal": 5482194.899999999,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16049749.427974185,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-19",
        "reportDate": "19/05/2026",
        "caixaTotal": 12365234.59,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15998118.919525562,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-20",
        "reportDate": "20/05/2026",
        "caixaTotal": 7517131.77,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15353642.342368053,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-21",
        "reportDate": "21/05/2026",
        "caixaTotal": 7838110.31,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 15321070.513374325,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-22",
        "reportDate": "22/05/2026",
        "caixaTotal": 6431615.79,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16298817.238703532,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-25",
        "reportDate": "25/05/2026",
        "caixaTotal": 6703203.15,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16469367.130793378,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-26",
        "reportDate": "26/05/2026",
        "caixaTotal": 7470803.51,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 16466785.862193247,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-27",
        "reportDate": "27/05/2026",
        "caixaTotal": 7918815.27,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17008780.534905232,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-28",
        "reportDate": "28/05/2026",
        "caixaTotal": 9715051.63,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 1670342.3786785584,
        "rendimentoSubDia": -0.9017952888950093
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 493470321.6006946,
      "valor": 493470321.6006946,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 1670342.3786785584,
      "valor": 1670342.3786785584,
      "resultadoDia": null
    }
  ],
  "rendimento30Dias": [],
  "sections": [
    {
      "id": "consolidado",
      "label": "Consolidado CRAs Carteira",
      "metrics": [
        {
          "label": "Ativo total",
          "value": "R$ 495.140.663,98",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 485.425.612,35",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 9.715.051,63",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 0,00",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 493.470.321,60",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 1.670.342,38",
          "isHighlight": true,
          "source": {
            "name": "Residual"
          }
        },
        {
          "label": "PDD",
          "value": "R$ 0,00",
          "isHighlight": true,
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
      "date": "28/05/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
