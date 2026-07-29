window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-17"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "17/07/2026",
    "dateKey": "2026-07-17",
    "importedAt": "2026-07-29T10:13:18.809770-03:00",
    "revisionId": "20260717-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 316092835.35119087,
    "pddTotal": 0.0,
    "carteiraVp": 316092835.35119087,
    "carteiraVpLiquido": 316092835.35119087,
    "caixa": 41275707.55,
    "total": 357368542.9011909,
    "lastrosAtivos": 911.0,
    "quantidadeLastrosAtivos": 911.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 41275707.55
    },
    "total": 41275707.55,
    "cessaoRendimentosDia": 4033314.459999997,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 333949813.27278537,
    "subordinadaTotal": 23418729.628405537,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 23418729.628405537,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 333949813.27278537,
        "valor": 333949813.27278537
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 23418729.628405537,
        "valor": 23418729.628405537
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 377261291.09,
    "valorPresente": 316092835.35119087,
    "valorPresenteLiquido": 316092835.35119087,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 153.45153245568864,
    "taxaMediaPonderada": 0.0190761233214273,
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
        "value": "R$ 316.092.835,35"
      },
      {
        "label": "Caixa total",
        "value": "R$ 41.275.707,55"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 4.033.314,46"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 23.418.729,63"
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
        "carteiraVp": 16250705.180578737,
        "valorNominal": 23737047.65,
        "caixa": 1869794.25,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 18120499.43057874,
        "funding": 17895035.920314,
        "subordinada": 225463.5102647394,
        "puSub": 2254.635102647394,
        "rendimentoSubDia": 0.006676220636710362,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.022597551523003658,
        "prazoMedio": 12.4095979441398,
        "montanteAtraso": 100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 26145359.189657804,
        "valorNominal": 28550334.8,
        "caixa": 1174.9300000000003,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26146534.119657803,
        "funding": 25908766.729146,
        "subordinada": 237767.39051180333,
        "puSub": 2377.6739051180334,
        "rendimentoSubDia": -0.020976289564509143,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.020202908526484008,
        "prazoMedio": 128.98969126805372,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 1552304.9277952423,
        "valorNominal": 19023272.3,
        "caixa": 3988947.82,
        "cessaoRendimentosDia": 1582.089999999851,
        "ativoTotal": 5541252.747795242,
        "funding": 5414759.902776,
        "subordinada": 126492.8450192418,
        "puSub": 1264.928450192418,
        "rendimentoSubDia": -0.015024499084737797,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018339267229846395,
        "prazoMedio": -2.359850145429844,
        "montanteAtraso": 347967.87
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 25111845.557197403,
        "valorNominal": 26843675.89,
        "caixa": 5834.959999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 25117680.517197404,
        "funding": 24973083.768024005,
        "subordinada": 144596.74917339906,
        "puSub": 1445.9674917339905,
        "rendimentoSubDia": 0.012429932301535773,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01886140583217189,
        "prazoMedio": 18.99217463016238,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 26199451.60336092,
        "valorNominal": 26344807.88,
        "caixa": 2253.269999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26201704.87336092,
        "funding": 26029304.759619,
        "subordinada": 172400.1137419194,
        "puSub": 1724.001137419194,
        "rendimentoSubDia": 0.012191623774376437,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018860292401924855,
        "prazoMedio": 19.528804520710338,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10173234.060524557,
        "valorNominal": 10552681.8,
        "caixa": 36773.020000000004,
        "cessaoRendimentosDia": 2692.8300000000017,
        "ativoTotal": 10210007.080524556,
        "funding": 9821454.844950002,
        "subordinada": 388552.23557455465,
        "puSub": 3885.5223557455465,
        "rendimentoSubDia": 9.634489758547637e-05,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 244,
        "cedentes": 21,
        "sacados": 129,
        "taxaMedia": 0.02056712174598597,
        "prazoMedio": 41.345355864508804,
        "montanteAtraso": 1811500.0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13482923.213237498,
        "valorNominal": 14949673.5,
        "caixa": 97963.33000000005,
        "cessaoRendimentosDia": 3022.3900000000285,
        "ativoTotal": 13580886.543237498,
        "funding": 13350221.867724,
        "subordinada": 230664.67551349849,
        "puSub": 2306.6467551349847,
        "rendimentoSubDia": -0.0019466136737391615,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.017612604080600492,
        "prazoMedio": 42.32403265162278,
        "montanteAtraso": 2384196.394012788
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12560254.186170323,
        "valorNominal": 24122656.0,
        "caixa": 1178888.04,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13739142.226170324,
        "funding": 12707140.984184,
        "subordinada": 1032001.2419863231,
        "puSub": 10320.012419863231,
        "rendimentoSubDia": -0.0034504641106849476,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.0182162432865534,
        "prazoMedio": 141.61239906163144,
        "montanteAtraso": 6019846.296833542
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58959.81,
        "cessaoRendimentosDia": 50.56999999997788,
        "ativoTotal": 58959.81,
        "funding": 0.0,
        "subordinada": 58959.81,
        "puSub": 589.5980999999999,
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
        "carteiraVp": 19070270.07643282,
        "valorNominal": 20470404.96,
        "caixa": 158428.66,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19228698.73643282,
        "funding": 18876985.312668,
        "subordinada": 351713.42376482114,
        "puSub": 3517.1342376482116,
        "rendimentoSubDia": -0.006598582594217861,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 218,
        "cedentes": 16,
        "sacados": 129,
        "taxaMedia": 0.0180293937404626,
        "prazoMedio": 31.950089657383533,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14465952.931485042,
        "valorNominal": 15730474.53,
        "caixa": 385583.85,
        "cessaoRendimentosDia": 128.02999999996973,
        "ativoTotal": 14851536.781485042,
        "funding": 14684817.773674801,
        "subordinada": 166719.0078102406,
        "puSub": 1667.190078102406,
        "rendimentoSubDia": -0.021718286249608587,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 87,
        "cedentes": 9,
        "sacados": 47,
        "taxaMedia": 0.015626024308477347,
        "prazoMedio": 92.85532710264302,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 15542017.084341042,
        "valorNominal": 16543310.409999998,
        "caixa": 9110328.68,
        "cessaoRendimentosDia": 3599.089999999851,
        "ativoTotal": 24652345.76434104,
        "funding": 24360983.604713,
        "subordinada": 291362.1596280411,
        "puSub": 2913.621596280411,
        "rendimentoSubDia": -0.035428299307095346,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 5,
        "sacados": 7,
        "taxaMedia": 0.017829759434460125,
        "prazoMedio": 8.879266299640445,
        "montanteAtraso": 3817054.05
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 22157825.454431485,
        "valorNominal": 22581225.5,
        "caixa": 420004.29000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22577829.744431484,
        "funding": 22516171.547,
        "subordinada": 61658.1974314861,
        "puSub": 616.581974314861,
        "rendimentoSubDia": 0.010718215780127993,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.017965059360768386,
        "prazoMedio": 26.94249420915724,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2904820.833289563,
        "valorNominal": 2983591.13,
        "caixa": 12269.909999999989,
        "cessaoRendimentosDia": 34.970000000001164,
        "ativoTotal": 2917090.7432895633,
        "funding": 3015261.78350065,
        "subordinada": -98171.04021108663,
        "puSub": -981.7104021108663,
        "rendimentoSubDia": -0.0011573244390282733,
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
        "carteiraVp": 29995370.832563378,
        "valorNominal": 31789039.52,
        "caixa": 19917029.91,
        "cessaoRendimentosDia": 3.849999997764826,
        "ativoTotal": 49912400.74256338,
        "funding": 30012891.283692002,
        "subordinada": 19899509.45887138,
        "puSub": 198995.0945887138,
        "rendimentoSubDia": 9.776528218496949e-05,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01780295800472802,
        "prazoMedio": 95.01095740651215,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14444760.52330679,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14448203.64330679,
        "funding": 14518526.997988299,
        "subordinada": -70323.35468150862,
        "puSub": -703.2335468150861,
        "rendimentoSubDia": 0.009456499459789214,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016344602795634215,
        "prazoMedio": 155.0555463925353,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41609382.36522269,
        "valorNominal": 51743678.75,
        "caixa": 5642.559999999998,
        "cessaoRendimentosDia": 46.679999999993015,
        "ativoTotal": 41615024.925222695,
        "funding": 41372473.1511,
        "subordinada": 242551.77412269264,
        "puSub": 2425.5177412269263,
        "rendimentoSubDia": -0.005107707777770476,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.02263243823859862,
        "prazoMedio": 285.2388798988142,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 24426357.331595592,
        "valorNominal": 25663993.169999998,
        "caixa": 4022387.14,
        "cessaoRendimentosDia": 4022153.96,
        "ativoTotal": 28448744.471595593,
        "funding": 28491933.0417116,
        "subordinada": -43188.57011600584,
        "puSub": -431.8857011600584,
        "rendimentoSubDia": -0.030572669522246132,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018530861339178546,
        "prazoMedio": 876.7930994953515,
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
        "puAtual": 448.49714085999994,
        "valorAtual": 17895035.920314,
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
        "puAtual": 649.34252454,
        "valorAtual": 25908766.729146,
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
        "puAtual": 135.70826824,
        "valorAtual": 5414759.902776,
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
        "puAtual": 625.8918237600001,
        "valorAtual": 24973083.768024005,
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
        "puAtual": 652.36352781,
        "valorAtual": 26029304.759619,
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
        "puAtual": 246.15175050000002,
        "valorAtual": 9821454.844950002,
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
        "puAtual": 334.59202676,
        "valorAtual": 13350221.867724,
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
        "puAtual": 905.39082475,
        "valorAtual": 8148517.42275,
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
        "puAtual": 1088.236706,
        "valorAtual": 4558623.561434,
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
        "puAtual": 473.10740132,
        "valorAtual": 18876985.312668,
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
        "puAtual": 370.78191576,
        "valorAtual": 14684817.773674801,
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
        "puAtual": 735.0791026100001,
        "valorAtual": 9776552.064713001,
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
        "puAtual": 1096.5738000000001,
        "valorAtual": 14584431.540000001,
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
        "puAtual": 65.25775236,
        "valorAtual": 1305155.0472,
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
        "puAtual": 1060.55082499,
        "valorAtual": 21211016.499799997,
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
        "puAtual": 193.34798227,
        "valorAtual": 3015261.78350065,
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
        "puAtual": 995.5506513600001,
        "valorAtual": 19911013.027200002,
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
        "puAtual": 1020.39174308,
        "valorAtual": 10101878.256492,
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
        "puAtual": 780.01908852,
        "valorAtual": 8143399.284148799,
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
        "puAtual": 1053.74011799,
        "valorAtual": 6375127.7138395,
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
        "puAtual": 1036.904089,
        "valorAtual": 20738081.78,
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
        "puAtual": 1036.904089,
        "valorAtual": 20634391.3711,
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
        "puAtual": 920.01703446,
        "valorAtual": 18400340.6892,
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
        "puAtual": 1024.73521045,
        "valorAtual": 10091592.352511602,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-06-08",
        "reportDate": "08/06/2026",
        "caixaTotal": 1999339.2400000002,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5206244.694946285,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-09",
        "reportDate": "09/06/2026",
        "caixaTotal": 2679990.62,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5650369.290771216,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-10",
        "reportDate": "10/06/2026",
        "caixaTotal": 4209477.0200000005,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5161335.136598949,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-11",
        "reportDate": "11/06/2026",
        "caixaTotal": 5243220.23,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5130286.27391623,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-12",
        "reportDate": "12/06/2026",
        "caixaTotal": 1519204.16,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5027474.018246456,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.0008609634234958419
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 333949813.27278537,
      "valor": 333949813.27278537,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 23418729.628405537,
      "valor": 23418729.628405537,
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
          "value": "R$ 357.368.542,90",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 316.092.835,35",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 41.275.707,55",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 4.033.314,46",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 333.949.813,27",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 23.418.729,63",
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
      "date": "17/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
