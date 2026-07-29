window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-24"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "24/07/2026",
    "dateKey": "2026-07-24",
    "importedAt": "2026-07-29T10:14:12.182231-03:00",
    "revisionId": "20260724-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 286534524.54562205,
    "pddTotal": 0.0,
    "carteiraVp": 286534524.54562205,
    "carteiraVpLiquido": 286534524.54562205,
    "caixa": 35478627.32,
    "total": 322013151.86562204,
    "lastrosAtivos": 890.0,
    "quantidadeLastrosAtivos": 890.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 35478627.32
    },
    "total": 35478627.32,
    "cessaoRendimentosDia": 58774.35999999903,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 321111045.15536404,
    "subordinadaTotal": 902106.7102579809,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 902106.7102579809,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 321111045.15536404,
        "valor": 321111045.15536404
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 902106.7102579809,
        "valor": 902106.7102579809
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 347780976.38,
    "valorPresente": 286534524.54562205,
    "valorPresenteLiquido": 286534524.54562205,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 170.6596484858437,
    "taxaMediaPonderada": 0.01911315025810942,
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
        "value": "R$ 286.534.524,55"
      },
      {
        "label": "Caixa total",
        "value": "R$ 35.478.627,32"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 58.774,36"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 902.106,71"
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
        "carteiraVp": 15742606.107356703,
        "valorNominal": 23571447.65,
        "caixa": 604880.9299999999,
        "cessaoRendimentosDia": -422.20000000006985,
        "ativoTotal": 16347487.037356703,
        "funding": 16108458.398214,
        "subordinada": 239028.63914270326,
        "puSub": 2390.286391427033,
        "rendimentoSubDia": 0.01438067211248284,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.022600675049826116,
        "prazoMedio": 13.389592832972674,
        "montanteAtraso": 150000.2
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 26267665.36284007,
        "valorNominal": 28550334.8,
        "caixa": 567.8300000000017,
        "cessaoRendimentosDia": -608.8399999999965,
        "ativoTotal": 26268233.19284007,
        "funding": 26019685.744626,
        "subordinada": 248547.448214069,
        "puSub": 2485.4744821406903,
        "rendimentoSubDia": -0.014840446629290183,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.02020291495796953,
        "prazoMedio": 128.98868156606417,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 1478990.8620897557,
        "valorNominal": 19023272.3,
        "caixa": 43347.85999999999,
        "cessaoRendimentosDia": -599.9600000000064,
        "ativoTotal": 1522338.7220897558,
        "funding": 1439015.982453,
        "subordinada": 83322.73963675578,
        "puSub": 833.2273963675578,
        "rendimentoSubDia": -0.3232752703813099,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01826091580445249,
        "prazoMedio": 0.261743506622019,
        "montanteAtraso": 269603.716484137
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 15442498.400072308,
        "valorNominal": 16886049.52,
        "caixa": 9680257.67,
        "cessaoRendimentosDia": 3232.5299999993294,
        "ativoTotal": 25122756.07007231,
        "funding": 25258653.788487,
        "subordinada": -135897.71841469035,
        "puSub": -1358.9771841469035,
        "rendimentoSubDia": -3.651445762955803,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.019522905393697276,
        "prazoMedio": 10.595918431521298,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 19479736.844716612,
        "valorNominal": 19401300.51,
        "caixa": 6752522.569999999,
        "cessaoRendimentosDia": 2047.429999999702,
        "ativoTotal": 26232259.414716613,
        "funding": 26326952.785791,
        "subordinada": -94693.37107438594,
        "puSub": -946.9337107438594,
        "rendimentoSubDia": -1.9599547121859384,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.019228527893803173,
        "prazoMedio": 16.10825001710208,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10098261.085999347,
        "valorNominal": 10437163.96,
        "caixa": 154490.87,
        "cessaoRendimentosDia": -599.960000000021,
        "ativoTotal": 10252751.955999346,
        "funding": 9861604.277805,
        "subordinada": 391147.6781943459,
        "puSub": 3911.476781943459,
        "rendimentoSubDia": -0.0011309683021790695,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 239,
        "cedentes": 21,
        "sacados": 126,
        "taxaMedia": 0.02057337367766104,
        "prazoMedio": 42.65795796544304,
        "montanteAtraso": 1811500.0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13432360.259604959,
        "valorNominal": 14949673.5,
        "caixa": 218058.93000000005,
        "cessaoRendimentosDia": 2422.569999999978,
        "ativoTotal": 13650419.189604959,
        "funding": 13407376.015047,
        "subordinada": 243043.1745579578,
        "puSub": 2430.431745579578,
        "rendimentoSubDia": -0.000393431922793952,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.017644654771772544,
        "prazoMedio": 41.83950725004112,
        "montanteAtraso": 2393610.852040414
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12593621.393451769,
        "valorNominal": 24122656.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 12593621.393451769,
        "funding": 12758357.37558469,
        "subordinada": -164735.982132921,
        "puSub": -1647.35982132921,
        "rendimentoSubDia": 0.02190974898656939,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01821707338029633,
        "prazoMedio": 141.98337119800897,
        "montanteAtraso": 6024525.365250541
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58608.17000000001,
        "cessaoRendimentosDia": -554.2099999999919,
        "ativoTotal": 58608.17000000001,
        "funding": 0.0,
        "subordinada": 58608.17000000001,
        "puSub": 586.0817000000002,
        "rendimentoSubDia": null,
        "rendimentoSubMes": null,
        "pdd": 0,
        "lastrosAtivos": 0,
        "cedentes": 0,
        "sacados": 0,
        "taxaMedia": 0.0,
        "prazoMedio": 0.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 53",
        "craId": "cra-carteira-53",
        "carteiraVp": 19145111.28338649,
        "valorNominal": 20466773.25,
        "caixa": 161561.58,
        "cessaoRendimentosDia": -552.5500000000175,
        "ativoTotal": 19306672.86338649,
        "funding": 18956589.398481,
        "subordinada": 350083.46490548924,
        "puSub": 3500.8346490548925,
        "rendimentoSubDia": -0.00500242070602297,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 217,
        "cedentes": 16,
        "sacados": 128,
        "taxaMedia": 0.01803370720279842,
        "prazoMedio": 31.998213051576503,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14518785.7691335,
        "valorNominal": 15730474.53,
        "caixa": 7643.080000000002,
        "cessaoRendimentosDia": -593.1100000000006,
        "ativoTotal": 14526428.8491335,
        "funding": 14360449.878646998,
        "subordinada": 165978.9704865031,
        "puSub": 1659.789704865031,
        "rendimentoSubDia": -0.019213318400485346,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 87,
        "cedentes": 9,
        "sacados": 47,
        "taxaMedia": 0.01562785988460938,
        "prazoMedio": 92.8493039481507,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 11766823.679610021,
        "valorNominal": 12726256.36,
        "caixa": 3852415.2500000005,
        "cessaoRendimentosDia": 901.410000000149,
        "ativoTotal": 15619238.929610021,
        "funding": 15327116.216761999,
        "subordinada": 292122.7128480226,
        "puSub": 2921.227128480226,
        "rendimentoSubDia": -0.015991688081300914,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 4,
        "sacados": 6,
        "taxaMedia": 0.015331022530755401,
        "prazoMedio": 11.796112522680955,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 10583755.308940405,
        "valorNominal": 10844240.129999999,
        "caixa": 11930346.82,
        "cessaoRendimentosDia": 4032.940000001341,
        "ativoTotal": 22514102.128940403,
        "funding": 22606754.3908,
        "subordinada": -92652.26185959578,
        "puSub": -926.5226185959577,
        "rendimentoSubDia": 0.05504288206559571,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.018163620096404553,
        "prazoMedio": 42.7144397880053,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2299922.183762591,
        "valorNominal": 2983591.13,
        "caixa": 628715.69,
        "cessaoRendimentosDia": -327.71000000007916,
        "ativoTotal": 2928637.873762591,
        "funding": 3027427.5177006996,
        "subordinada": -98789.64393810881,
        "puSub": -987.8964393810882,
        "rendimentoSubDia": 0.007964331657006607,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 1,
        "cedentes": 1,
        "sacados": 1,
        "taxaMedia": 0.018290245528719273,
        "prazoMedio": 39.0,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "carteiraVp": 30121661.799344033,
        "valorNominal": 31789039.52,
        "caixa": 46492.20000000002,
        "cessaoRendimentosDia": 11760.200000000004,
        "ativoTotal": 30168153.999344032,
        "funding": 30508272.585596,
        "subordinada": -340118.58625196666,
        "puSub": -3401.1858625196664,
        "rendimentoSubDia": -14.59992783086169,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.017802958033821738,
        "prazoMedio": 95.01097556455144,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14500030.446086107,
        "valorNominal": 15631423.299999999,
        "caixa": 2843.3200000000033,
        "cessaoRendimentosDia": 39243.7399999991,
        "ativoTotal": 14502873.766086107,
        "funding": 14577105.226564799,
        "subordinada": -74231.46047869138,
        "puSub": -742.3146047869138,
        "rendimentoSubDia": 0.01731415043345641,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01634484979804388,
        "prazoMedio": 155.028636438513,
        "montanteAtraso": 4577505.640522374
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41827493.983341314,
        "valorNominal": 51743678.75,
        "caixa": 5273.7699999999895,
        "cessaoRendimentosDia": -555.75,
        "ativoTotal": 41832767.75334132,
        "funding": 41539399.629,
        "subordinada": 293368.1243413165,
        "puSub": 2933.6812434131652,
        "rendimentoSubDia": -0.006129105496863629,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.022637255307952252,
        "prazoMedio": 285.25250747476525,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 27235199.775886055,
        "valorNominal": 28923601.169999998,
        "caixa": 1330600.7799999998,
        "cessaoRendimentosDia": -52.170000000391155,
        "ativoTotal": 28565800.555886056,
        "funding": 29027825.94380488,
        "subordinada": -462025.38791882247,
        "puSub": -4620.253879188224,
        "rendimentoSubDia": 9.881518273217104,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 6,
        "sacados": 7,
        "taxaMedia": 0.0185747543255675,
        "prazoMedio": 820.9872163666445,
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
        "puAtual": 403.72076186,
        "valorAtual": 16108458.398214,
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
        "puAtual": 652.12244974,
        "valorAtual": 26019685.744626,
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
        "puAtual": 36.06556347,
        "valorAtual": 1439015.982453,
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
        "puAtual": 633.0489671299999,
        "valorAtual": 25258653.788487,
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
        "puAtual": 659.82337809,
        "valorAtual": 26326952.785791,
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
        "puAtual": 247.15800195,
        "valorAtual": 9861604.277805,
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
        "puAtual": 336.02446153,
        "valorAtual": 13407376.015047,
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
        "puAtual": 0,
        "valorAtual": 0,
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
        "puAtual": 909.04382415,
        "valorAtual": 8181394.41735,
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
        "puAtual": 1092.61469521,
        "valorAtual": 4576962.95823469,
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
        "puAtual": 475.10249119,
        "valorAtual": 18956589.398481,
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
        "puAtual": 362.59184139999996,
        "valorAtual": 14360449.878646998,
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
        "puAtual": 51.21671139,
        "valorAtual": 681182.261487,
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
        "puAtual": 1101.19804175,
        "valorAtual": 14645933.955275,
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
        "puAtual": 65.52028512000001,
        "valorAtual": 1310405.7024000003,
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
        "puAtual": 1064.81743442,
        "valorAtual": 21296348.6884,
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
        "puAtual": 194.12808705999998,
        "valorAtual": 3027427.5177006996,
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
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA026000S6",
        "puAtual": 0,
        "valorAtual": 0,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino A",
        "classe": "MEZA",
        "ifCodigo": "CRA026000S7",
        "puAtual": 1006.41219796,
        "valorAtual": 20128243.9592,
        "quantidadeIntegralizada": 20000.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 59",
        "craId": "cra-carteira-59",
        "serie": "Mezanino B",
        "classe": "MEZB",
        "ifCodigo": "CRA026000S8",
        "puAtual": 1048.48774004,
        "valorAtual": 10380028.626396,
        "quantidadeIntegralizada": 9900.0,
        "taxa": "CDI + 6,50% a.a.",
        "dataVencimento": "30/06/2028",
        "dataVencimentoIso": "2028-06-30",
        "status": "Integralizada"
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "serie": "Senior",
        "classe": "SR1",
        "ifCodigo": "CRA02600209",
        "puAtual": 783.16624742,
        "valorAtual": 8176255.6230648,
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
        "puAtual": 1057.9916699999999,
        "valorAtual": 6400849.603499999,
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
        "puAtual": 1041.08771,
        "valorAtual": 20821754.2,
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
        "puAtual": 1041.08771,
        "valorAtual": 20717645.429,
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
        "puAtual": 930.5375326799999,
        "valorAtual": 18610750.6536,
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
        "puAtual": 1057.7858743099998,
        "valorAtual": 10417075.290204879,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-06-15",
        "reportDate": "15/06/2026",
        "caixaTotal": 1723263.96,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5133205.576268571,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-16",
        "reportDate": "16/06/2026",
        "caixaTotal": 14316300.0,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 10422054.436621176,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-17",
        "reportDate": "17/06/2026",
        "caixaTotal": 14317019.93,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 10390803.377337696,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-18",
        "reportDate": "18/06/2026",
        "caixaTotal": 14895696.75,
        "cessaoRendimentosDia": 578676.82,
        "subordinadaTotal": 10361500.233802604,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-19",
        "reportDate": "19/06/2026",
        "caixaTotal": 6385785.289999999,
        "cessaoRendimentosDia": -8509911.46,
        "subordinadaTotal": 5125109.567757666,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-22",
        "reportDate": "22/06/2026",
        "caixaTotal": 7597112.249999999,
        "cessaoRendimentosDia": 1211326.9599999997,
        "subordinadaTotal": 5254544.152471506,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-23",
        "reportDate": "23/06/2026",
        "caixaTotal": 11268748.919999998,
        "cessaoRendimentosDia": 3671617.4699999997,
        "subordinadaTotal": 5211965.5613245,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-24",
        "reportDate": "24/06/2026",
        "caixaTotal": 30332630.92,
        "cessaoRendimentosDia": 17364120.05,
        "subordinadaTotal": 7663715.069139692,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-25",
        "reportDate": "25/06/2026",
        "caixaTotal": 30351499.87,
        "cessaoRendimentosDia": 17979.18999999961,
        "subordinadaTotal": 7639994.780474476,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-26",
        "reportDate": "26/06/2026",
        "caixaTotal": 4296678.45,
        "cessaoRendimentosDia": -23734836.39,
        "subordinadaTotal": 5111261.859385786,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-29",
        "reportDate": "29/06/2026",
        "caixaTotal": 4738750.899999999,
        "cessaoRendimentosDia": 442057.5200000001,
        "subordinadaTotal": 5256509.267965611,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-30",
        "reportDate": "30/06/2026",
        "caixaTotal": 7964355.43,
        "cessaoRendimentosDia": 3225589.5500000003,
        "subordinadaTotal": 4700776.909904404,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-01",
        "reportDate": "01/07/2026",
        "caixaTotal": 8271406.84,
        "cessaoRendimentosDia": 307051.2899999999,
        "subordinadaTotal": 4690282.15453174,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-02",
        "reportDate": "02/07/2026",
        "caixaTotal": 9760412.27,
        "cessaoRendimentosDia": 1489095.2999999996,
        "subordinadaTotal": 5345587.335534122,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-03",
        "reportDate": "03/07/2026",
        "caixaTotal": 7406920.840000001,
        "cessaoRendimentosDia": -2353491.699999999,
        "subordinadaTotal": 5178222.410346768,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-06",
        "reportDate": "06/07/2026",
        "caixaTotal": 6731405.09,
        "cessaoRendimentosDia": -675515.480000001,
        "subordinadaTotal": -48516153.99894648,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-07",
        "reportDate": "07/07/2026",
        "caixaTotal": 58131924.09,
        "cessaoRendimentosDia": 51400519.0,
        "subordinadaTotal": 2643049.059809388,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-08",
        "reportDate": "08/07/2026",
        "caixaTotal": 59992715.6,
        "cessaoRendimentosDia": 1860791.5100000019,
        "subordinadaTotal": 2620355.182283589,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-09",
        "reportDate": "09/07/2026",
        "caixaTotal": 60514668.830000006,
        "cessaoRendimentosDia": 521965.9600000004,
        "subordinadaTotal": 2237624.433209094,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-10",
        "reportDate": "10/07/2026",
        "caixaTotal": 35366124.72,
        "cessaoRendimentosDia": -26900573.040000003,
        "subordinadaTotal": 25944718.135794826,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-13",
        "reportDate": "13/07/2026",
        "caixaTotal": 37120612.78,
        "cessaoRendimentosDia": 1648155.5500000035,
        "subordinadaTotal": 23744204.767931785,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-14",
        "reportDate": "14/07/2026",
        "caixaTotal": 37162118.370000005,
        "cessaoRendimentosDia": 40833.93999999993,
        "subordinadaTotal": 23734185.190334313,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-15",
        "reportDate": "15/07/2026",
        "caixaTotal": 37178782.6,
        "cessaoRendimentosDia": 15992.220000000263,
        "subordinadaTotal": 23713924.100281045,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-16",
        "reportDate": "16/07/2026",
        "caixaTotal": 37241678.690000005,
        "cessaoRendimentosDia": 62220.489999999925,
        "subordinadaTotal": 23438909.672320027,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-17",
        "reportDate": "17/07/2026",
        "caixaTotal": 41275707.55,
        "cessaoRendimentosDia": 4033314.459999997,
        "subordinadaTotal": 23418729.628405537,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-20",
        "reportDate": "20/07/2026",
        "caixaTotal": 2578162.35,
        "cessaoRendimentosDia": -37264475.1,
        "subordinadaTotal": 2425883.4905180703,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-21",
        "reportDate": "21/07/2026",
        "caixaTotal": 6437514.26,
        "cessaoRendimentosDia": 3899198.4499999993,
        "subordinadaTotal": 2450554.5204253583,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-22",
        "reportDate": "22/07/2026",
        "caixaTotal": 35096146.85,
        "cessaoRendimentosDia": 28698478.13,
        "subordinadaTotal": 2129249.4769468345,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-23",
        "reportDate": "23/07/2026",
        "caixaTotal": 35459696.5,
        "cessaoRendimentosDia": 403394.1899999994,
        "subordinadaTotal": 2130518.5667558517,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-07-24",
        "reportDate": "24/07/2026",
        "caixaTotal": 35478627.32,
        "cessaoRendimentosDia": 58774.35999999903,
        "subordinadaTotal": 902106.7102579809,
        "rendimentoSubDia": -0.5765788084017395
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 321111045.15536404,
      "valor": 321111045.15536404,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 902106.7102579809,
      "valor": 902106.7102579809,
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
          "value": "R$ 322.013.151,87",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 286.534.524,55",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 35.478.627,32",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 58.774,36",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 321.111.045,16",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 902.106,71",
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
      "date": "24/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
