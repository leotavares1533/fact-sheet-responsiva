window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-16"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "16/07/2026",
    "dateKey": "2026-07-16",
    "importedAt": "2026-07-29T10:13:13.113967-03:00",
    "revisionId": "20260716-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 315852128.8657572,
    "pddTotal": 0.0,
    "carteiraVp": 315852128.8657572,
    "carteiraVpLiquido": 315852128.8657572,
    "caixa": 37241678.690000005,
    "total": 353093807.5557572,
    "lastrosAtivos": 912.0,
    "quantidadeLastrosAtivos": 912.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 37241678.690000005
    },
    "total": 37241678.690000005,
    "cessaoRendimentosDia": 62220.489999999925,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 329654897.8834372,
    "subordinadaTotal": 23438909.672320027,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 23438909.672320027,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 329654897.8834372,
        "valor": 329654897.8834372
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 23438909.672320027,
        "valor": 23438909.672320027
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 377263983.92,
    "valorPresente": 315852128.8657572,
    "valorPresenteLiquido": 315852128.8657572,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 153.43946119895813,
    "taxaMediaPonderada": 0.01907571975214447,
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
        "value": "R$ 315.852.128,87"
      },
      {
        "label": "Caixa total",
        "value": "R$ 37.241.678,69"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 62.220,49"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 23.438.909,67"
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
        "carteiraVp": 16233520.131585997,
        "valorNominal": 23737047.65,
        "caixa": 1869079.85,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 18102599.981585998,
        "funding": 17878631.732766,
        "subordinada": 223968.2488199994,
        "puSub": 2239.682488199994,
        "rendimentoSubDia": 0.006530655249314732,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.022597480304224753,
        "prazoMedio": 12.409793734989758,
        "montanteAtraso": 100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 26127933.432139948,
        "valorNominal": 28550334.8,
        "caixa": 1174.9300000000003,
        "cessaoRendimentosDia": 7.290000000000873,
        "ativoTotal": 26129108.362139948,
        "funding": 25886246.633688,
        "subordinada": 242861.7284519486,
        "puSub": 2428.617284519486,
        "rendimentoSubDia": -0.020485094662557324,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.02020290760769754,
        "prazoMedio": 128.98983551165145,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 1551300.4792618048,
        "valorNominal": 19023272.3,
        "caixa": 3987365.73,
        "cessaoRendimentosDia": 1581.1099999998696,
        "ativoTotal": 5538666.209261805,
        "funding": 5410243.883121001,
        "subordinada": 128422.32614080422,
        "puSub": 1284.2232614080422,
        "rendimentoSubDia": -0.01478740047452809,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018339662198761816,
        "prazoMedio": -2.3681514687680463,
        "montanteAtraso": 347967.87
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 25089796.41949347,
        "valorNominal": 26843675.89,
        "caixa": 5834.959999999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 25095631.37949347,
        "funding": 24952809.891744003,
        "subordinada": 142821.48774946854,
        "puSub": 1428.2148774946854,
        "rendimentoSubDia": 0.012565269235175647,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.018861371539703797,
        "prazoMedio": 18.99214658044227,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 26176243.73457127,
        "valorNominal": 26344807.88,
        "caixa": 2253.269999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 26178497.00457127,
        "funding": 26008173.41199,
        "subordinada": 170323.5925812684,
        "puSub": 1703.235925812684,
        "rendimentoSubDia": 0.012321319559392752,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018860251709535994,
        "prazoMedio": 19.528612670192583,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10167824.598189538,
        "valorNominal": 10555374.63,
        "caixa": 34080.19,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10201904.788189538,
        "funding": 9813389.984034,
        "subordinada": 388514.80415553786,
        "puSub": 3885.1480415553788,
        "rendimentoSubDia": -1.2835063557425919e-05,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 245,
        "cedentes": 21,
        "sacados": 130,
        "taxaMedia": 0.020566698542024343,
        "prazoMedio": 41.31985557517415,
        "montanteAtraso": 1811500.0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13474791.376613434,
        "valorNominal": 14949673.5,
        "caixa": 94940.94000000002,
        "cessaoRendimentosDia": 3022.3600000000006,
        "ativoTotal": 13569732.316613434,
        "funding": 13338617.750324998,
        "subordinada": 231114.56628843583,
        "puSub": 2311.1456628843584,
        "rendimentoSubDia": -0.0019228961777451037,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.017611878330952707,
        "prazoMedio": 42.32842168857212,
        "montanteAtraso": 2382854.4975819993
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12553598.229506431,
        "valorNominal": 24122656.0,
        "caixa": 1178888.04,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13732486.269506432,
        "funding": 12696911.815031,
        "subordinada": 1035574.4544754326,
        "puSub": 10355.744544754327,
        "rendimentoSubDia": -0.0034363638295086263,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01821607729278483,
        "prazoMedio": 141.5381645337303,
        "montanteAtraso": 6018912.8428626675
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58909.24000000002,
        "cessaoRendimentosDia": 50.55999999999767,
        "ativoTotal": 58909.24000000002,
        "funding": 0.0,
        "subordinada": 58909.24000000002,
        "puSub": 589.0924000000002,
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
        "carteiraVp": 19056499.467495296,
        "valorNominal": 20470404.96,
        "caixa": 158428.66,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 19214928.127495296,
        "funding": 18860878.477875,
        "subordinada": 354049.6496202946,
        "puSub": 3540.4964962029458,
        "rendimentoSubDia": -0.0065503506971802405,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 218,
        "cedentes": 16,
        "sacados": 129,
        "taxaMedia": 0.018028055276684503,
        "prazoMedio": 31.937407705681416,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14457252.34227415,
        "valorNominal": 15730474.53,
        "caixa": 385455.82,
        "cessaoRendimentosDia": 53846.73000000004,
        "ativoTotal": 14842708.16227415,
        "funding": 14672287.918834152,
        "subordinada": 170420.24343999848,
        "puSub": 1704.2024343999847,
        "rendimentoSubDia": -0.602618467897434,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 87,
        "cedentes": 9,
        "sacados": 47,
        "taxaMedia": 0.015625450269175924,
        "prazoMedio": 92.85744109721527,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 15535531.701123118,
        "valorNominal": 16543310.409999998,
        "caixa": 9106729.59,
        "cessaoRendimentosDia": 3597.25,
        "ativoTotal": 24642261.29112312,
        "funding": 24340197.526015,
        "subordinada": 302063.7651081197,
        "puSub": 3020.637651081197,
        "rendimentoSubDia": -0.0341798923610841,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 5,
        "sacados": 7,
        "taxaMedia": 0.01783019705281825,
        "prazoMedio": 8.872696403554523,
        "montanteAtraso": 3817054.05
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 22139046.150954474,
        "valorNominal": 22581225.5,
        "caixa": 420004.29000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 22559050.440954473,
        "funding": 22498046.1012,
        "subordinada": 61004.33975447342,
        "puSub": 610.0433975447341,
        "rendimentoSubDia": 0.010812020155726243,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01796505654143865,
        "prazoMedio": 26.942317594194783,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2902314.7791456417,
        "valorNominal": 2983591.13,
        "caixa": 12234.939999999988,
        "cessaoRendimentosDia": 34.9600000000064,
        "ativoTotal": 2914549.7191456417,
        "funding": 3012834.5067434,
        "subordinada": -98284.78759775823,
        "puSub": -982.8478759775822,
        "rendimentoSubDia": -0.0011537818257866261,
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
        "carteiraVp": 29970176.250360716,
        "valorNominal": 31789039.52,
        "caixa": 19917026.060000002,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 49887202.310360715,
        "funding": 29989638.142465003,
        "subordinada": 19897564.167895712,
        "puSub": 198975.64167895712,
        "rendimentoSubDia": 9.742317046756988e-05,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01780295799890928,
        "prazoMedio": 95.0109537749045,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14433731.94807341,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14437175.068073409,
        "funding": 14506839.6397703,
        "subordinada": -69664.57169689052,
        "puSub": -696.6457169689052,
        "rendimentoSubDia": 0.009532930841714249,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016344553399598137,
        "prazoMedio": 155.0609282763588,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41577369.599547975,
        "valorNominal": 51743678.75,
        "caixa": 5595.880000000005,
        "cessaoRendimentosDia": 46.66000000000349,
        "ativoTotal": 41582965.47954798,
        "funding": 41339168.461500004,
        "subordinada": 243797.0180479735,
        "puSub": 2437.970180479735,
        "rendimentoSubDia": -0.005075876802259627,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.022631900302552077,
        "prazoMedio": 285.2376934807124,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 24405198.22542055,
        "valorNominal": 25663993.169999998,
        "caixa": 233.17999999999302,
        "cessaoRendimentosDia": 33.570000000006985,
        "ativoTotal": 24405431.40542055,
        "funding": 24449982.00633534,
        "subordinada": -44550.60091479123,
        "puSub": -445.50600914791227,
        "rendimentoSubDia": -0.028852107890158907,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018529476672521014,
        "prazoMedio": 876.7611574674231,
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
        "puAtual": 448.08600834,
        "valorAtual": 17878631.732766,
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
        "puAtual": 648.77811112,
        "valorAtual": 25886246.633688,
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
        "puAtual": 135.59508479000002,
        "valorAtual": 5410243.883121001,
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
        "puAtual": 625.3837065600001,
        "valorAtual": 24952809.891744003,
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
        "puAtual": 651.8339201,
        "valorAtual": 26008173.41199,
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
        "puAtual": 245.94962366000001,
        "valorAtual": 9813389.984034,
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
        "puAtual": 334.30119675,
        "valorAtual": 13338617.750324998,
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
        "puAtual": 904.6619923,
        "valorAtual": 8141957.930699999,
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
        "puAtual": 1087.360679,
        "valorAtual": 4554953.884330999,
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
        "puAtual": 472.70372125,
        "valorAtual": 18860878.477875,
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
        "puAtual": 370.46554523000003,
        "valorAtual": 14672287.918834152,
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
        "puAtual": 734.45189456,
        "valorAtual": 9768210.197648,
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
        "puAtual": 1095.63814499,
        "valorAtual": 14571987.328367,
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
        "puAtual": 65.20522006,
        "valorAtual": 1304104.4012,
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
        "puAtual": 1059.697085,
        "valorAtual": 21193941.7,
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
        "puAtual": 193.19233771999998,
        "valorAtual": 3012834.5067434,
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
        "puAtual": 994.77932681,
        "valorAtual": 19895586.5362,
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
        "puAtual": 1019.60117235,
        "valorAtual": 10094051.606265,
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
        "puAtual": 779.39117632,
        "valorAtual": 8136843.8807808,
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
        "puAtual": 1052.89186099,
        "valorAtual": 6369995.7589895,
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
        "puAtual": 1036.069385,
        "valorAtual": 20721387.7,
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
        "puAtual": 1036.069385,
        "valorAtual": 20617780.7615,
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
        "puAtual": 919.27013785,
        "valorAtual": 18385402.757,
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
        "puAtual": 1023.90330058,
        "valorAtual": 6064579.249335339,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-06-05",
        "reportDate": "05/06/2026",
        "caixaTotal": 1996935.1300000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 5104226.150694992,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.011597170792908007
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 329654897.8834372,
      "valor": 329654897.8834372,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 23438909.672320027,
      "valor": 23438909.672320027,
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
          "value": "R$ 353.093.807,56",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 315.852.128,87",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 37.241.678,69",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 62.220,49",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 329.654.897,88",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 23.438.909,67",
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
      "date": "16/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
