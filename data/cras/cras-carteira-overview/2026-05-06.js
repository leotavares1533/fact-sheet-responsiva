window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-05-06"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "06/05/2026",
    "dateKey": "2026-05-06",
    "importedAt": "2026-07-29T10:03:42.321424-03:00",
    "revisionId": "20260506-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 443235861.4580207,
    "pddTotal": 0.0,
    "carteiraVp": 443235861.4580207,
    "carteiraVpLiquido": 443235861.4580207,
    "caixa": 63764002.089999996,
    "total": 506999863.54802066,
    "lastrosAtivos": 1299.0,
    "quantidadeLastrosAtivos": 1299.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 63764002.089999996
    },
    "total": 63764002.089999996,
    "cessaoRendimentosDia": 0.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 492063671.0316116,
    "subordinadaTotal": 14936192.516409077,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 14936192.516409077,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 492063671.0316116,
        "valor": 492063671.0316116
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 14936192.516409077,
        "valor": 14936192.516409077
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 449495884.0,
    "valorPresente": 443235861.4580207,
    "valorPresenteLiquido": 443235861.4580207,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 31.694027846275944,
    "taxaMediaPonderada": 0.019438518178656845,
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
        "value": "R$ 443.235.861,46"
      },
      {
        "label": "Caixa total",
        "value": "R$ 63.764.002,09"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 0,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 14.936.192,52"
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
        "carteiraVp": 32357709.95535975,
        "valorNominal": 34900329.65,
        "caixa": 1891806.23,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 34249516.185359746,
        "funding": 34015147.384449005,
        "subordinada": 234368.8009107411,
        "puSub": 2343.688009107411,
        "rendimentoSubDia": -0.006667775058177616,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 21,
        "cedentes": 9,
        "sacados": 14,
        "taxaMedia": 0.022170569536491245,
        "prazoMedio": 8.340006217721504,
        "montanteAtraso": 5100000.0
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 34059085.44312125,
        "valorNominal": 38419754.61,
        "caixa": 2605229.9000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 36664315.343121246,
        "funding": 36798668.043395996,
        "subordinada": -134352.7002747506,
        "puSub": -1343.527002747506,
        "rendimentoSubDia": 0.08575091099715348,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 23,
        "cedentes": 5,
        "sacados": 13,
        "taxaMedia": 0.020276387885076637,
        "prazoMedio": 94.3852022264746,
        "montanteAtraso": 3539806.08
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 31389614.401818257,
        "valorNominal": 32556869.169999998,
        "caixa": 10498338.929999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 41887953.33181825,
        "funding": 41835973.972506,
        "subordinada": 51979.35931225121,
        "puSub": 519.7935931225121,
        "rendimentoSubDia": -0.11160667553348458,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 273,
        "cedentes": 15,
        "sacados": 142,
        "taxaMedia": 0.01866099256430216,
        "prazoMedio": 5.157445835743737,
        "montanteAtraso": 2974719.68
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 42877993.08101725,
        "valorNominal": 27267265.52,
        "caixa": 105139.36,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42983132.44101725,
        "funding": 42868852.35129,
        "subordinada": 114280.08972724527,
        "puSub": 1142.8008972724526,
        "rendimentoSubDia": 0.026076604992467,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.018689561451330817,
        "prazoMedio": 11.833259259369845,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 42847200.09041177,
        "valorNominal": 28015535.4,
        "caixa": 147978.77,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 42995178.86041177,
        "funding": 42868852.35129,
        "subordinada": 126326.50912176818,
        "puSub": 1263.2650912176819,
        "rendimentoSubDia": 0.022455484807478054,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 7,
        "sacados": 7,
        "taxaMedia": 0.01861474328141137,
        "prazoMedio": 11.40777620541937,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 34510385.71672686,
        "valorNominal": 38062840.61,
        "caixa": 6356504.919999999,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40866890.63672686,
        "funding": 40536986.847336,
        "subordinada": 329903.789390862,
        "puSub": 3299.03789390862,
        "rendimentoSubDia": -0.011607539211542117,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 444,
        "cedentes": 37,
        "sacados": 204,
        "taxaMedia": 0.02035006473736451,
        "prazoMedio": 11.533738725434288,
        "montanteAtraso": 2083486.98
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 27538316.17807958,
        "valorNominal": 30224506.14,
        "caixa": 11633941.51,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 39172257.68807958,
        "funding": 38982537.07383,
        "subordinada": 189720.6142495796,
        "puSub": 1897.206142495796,
        "rendimentoSubDia": -0.04425466287174751,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 21,
        "cedentes": 9,
        "sacados": 17,
        "taxaMedia": 0.020403125121964173,
        "prazoMedio": 20.330869538040606,
        "montanteAtraso": 422187.46
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 27040668.156806145,
        "valorNominal": 32032656.0,
        "caixa": 12959453.21,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40000121.36680615,
        "funding": 39886377.126695,
        "subordinada": 113744.24011114985,
        "puSub": 1137.4424011114984,
        "rendimentoSubDia": -0.10031470418421862,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018447005536314256,
        "prazoMedio": 132.2673026677059,
        "montanteAtraso": 12013212.44367573
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 13526513.729249302,
        "valorNominal": 17468847.48,
        "caixa": 80877.14999999998,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 13607390.879249303,
        "funding": 0.0,
        "subordinada": 13607390.879249303,
        "puSub": 136073.90879249302,
        "rendimentoSubDia": 0.0009703138306778047,
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
        "carteiraVp": 35733299.89867287,
        "valorNominal": 37896495.33,
        "caixa": 2511900.8300000005,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38245200.72867287,
        "funding": 38020785.503967,
        "subordinada": 224415.22470586747,
        "puSub": 2244.1522470586747,
        "rendimentoSubDia": -0.019987135453760962,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 287,
        "cedentes": 23,
        "sacados": 155,
        "taxaMedia": 0.02105717460020759,
        "prazoMedio": 16.11579113225646,
        "montanteAtraso": 1606820.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 33374144.11542515,
        "valorNominal": 37483909.98,
        "caixa": 2167139.9,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 35541284.01542515,
        "funding": 35573580.9907021,
        "subordinada": -32296.97527694702,
        "puSub": -322.96975276947023,
        "rendimentoSubDia": 0.31806560997383104,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 135,
        "cedentes": 16,
        "sacados": 70,
        "taxaMedia": 0.01786641075579941,
        "prazoMedio": 39.6274948700416,
        "montanteAtraso": 1070040.99
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 28674915.085999858,
        "valorNominal": 30894196.5,
        "caixa": 10123473.93,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 38798389.01599985,
        "funding": 38534878.999491,
        "subordinada": 263510.0165088549,
        "puSub": 2635.100165088549,
        "rendimentoSubDia": -0.02908047290215776,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 23,
        "cedentes": 8,
        "sacados": 12,
        "taxaMedia": 0.020329428349563826,
        "prazoMedio": 4.5368158361762845,
        "montanteAtraso": 55000.0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 40678383.25409594,
        "valorNominal": 43345891.22,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 40678383.25409594,
        "funding": 40714997.4396,
        "subordinada": -36614.18550405651,
        "puSub": -366.14185504056513,
        "rendimentoSubDia": -0.04183996917539867,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 34,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.01791158244095123,
        "prazoMedio": 14.050000333261986,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 9122343.587231463,
        "valorNominal": 9807593.11,
        "caixa": 811.3399999999965,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 9123154.927231463,
        "funding": 9219828.21672,
        "subordinada": -96673.28948853724,
        "puSub": -966.7328948853724,
        "rendimentoSubDia": -0.005318010520145022,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 5,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.018294477528561552,
        "prazoMedio": 11.883950361284693,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 9505288.764005248,
        "valorNominal": 11119193.28,
        "caixa": 2681406.11,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 12186694.874005247,
        "funding": 12206204.730339501,
        "subordinada": -19509.856334254146,
        "puSub": -195.09856334254147,
        "rendimentoSubDia": 0.021423892647797205,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.016238822349508707,
        "prazoMedio": 227.49219644043026,
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
        "puAtual": 852.50995951,
        "valorAtual": 34015147.384449005,
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
        "puAtual": 922.2723820399999,
        "valorAtual": 36798668.043395996,
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
        "puAtual": 1048.52065094,
        "valorAtual": 41835973.972506,
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
        "puAtual": 1074.4073271,
        "valorAtual": 42868852.35129,
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
        "puAtual": 1074.4073271,
        "valorAtual": 42868852.35129,
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
        "puAtual": 1015.96458264,
        "valorAtual": 40536986.847336,
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
        "puAtual": 977.0059417,
        "valorAtual": 38982537.07383,
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
        "puAtual": 1044.446755,
        "valorAtual": 26111168.875,
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
        "puAtual": 1044.446755,
        "valorAtual": 9400020.795,
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
        "puAtual": 1044.446755,
        "valorAtual": 4375187.456695,
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
        "puAtual": 952.90189233,
        "valorAtual": 38020785.503967,
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
        "puAtual": 898.20934202,
        "valorAtual": 35573580.9907021,
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
        "puAtual": 797.6407432899999,
        "valorAtual": 10608621.885757,
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
        "puAtual": 1049.85928999,
        "valorAtual": 13963128.556867,
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
        "puAtual": 1049.85928999,
        "valorAtual": 13963128.556867,
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
        "puAtual": 1017.87493599,
        "valorAtual": 20357498.7198,
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
        "puAtual": 1017.87493599,
        "valorAtual": 20357498.7198,
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
        "puAtual": 1005.653165,
        "valorAtual": 9219828.21672,
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
        "puAtual": 1014.601348,
        "valorAtual": 6087608.088,
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
        "puAtual": 1011.33828799,
        "valorAtual": 6118596.642339501,
        "quantidadeIntegralizada": 6050.0,
        "taxa": "22,50% a.a.",
        "dataVencimento": "30/11/2027",
        "dataVencimentoIso": "2027-11-30",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
      {
        "dateKey": "2026-03-23",
        "reportDate": "23/03/2026",
        "caixaTotal": 9075732.14,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17647719.778573494,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-24",
        "reportDate": "24/03/2026",
        "caixaTotal": 8788916.75,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17603092.04672396,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-25",
        "reportDate": "25/03/2026",
        "caixaTotal": 10995622.37,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17614715.100924708,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-26",
        "reportDate": "26/03/2026",
        "caixaTotal": 11947957.3,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17627757.661070004,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-27",
        "reportDate": "27/03/2026",
        "caixaTotal": 10826873.64,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 17634521.56217985,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-30",
        "reportDate": "30/03/2026",
        "caixaTotal": 13585336.940000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13914663.245189974,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-03-31",
        "reportDate": "31/03/2026",
        "caixaTotal": 16365204.910000002,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -5499824.384724794,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-01",
        "reportDate": "01/04/2026",
        "caixaTotal": 17733881.82,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13984059.508038506,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-02",
        "reportDate": "02/04/2026",
        "caixaTotal": 19174173.07,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 13965137.249933233,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-06",
        "reportDate": "06/04/2026",
        "caixaTotal": 19729407.12,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14246750.677318314,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-07",
        "reportDate": "07/04/2026",
        "caixaTotal": 19988842.55,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 14233779.344699187,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-08",
        "reportDate": "08/04/2026",
        "caixaTotal": 20891941.33,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 7924021.303736722,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-09",
        "reportDate": "09/04/2026",
        "caixaTotal": 15269776.540000001,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 9028607.585091967,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-10",
        "reportDate": "10/04/2026",
        "caixaTotal": 9304865.15,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8417467.749462355,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-13",
        "reportDate": "13/04/2026",
        "caixaTotal": 9326666.3,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8606222.139072135,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-04-14",
        "reportDate": "14/04/2026",
        "caixaTotal": 10161513.21,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8963775.297827862,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -0.0029201080800062007
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 492063671.0316116,
      "valor": 492063671.0316116,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 14936192.516409077,
      "valor": 14936192.516409077,
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
          "value": "R$ 506.999.863,55",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 443.235.861,46",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 63.764.002,09",
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
          "value": "R$ 492.063.671,03",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 14.936.192,52",
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
      "date": "06/05/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
