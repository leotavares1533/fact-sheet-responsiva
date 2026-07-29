window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-22"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "22/07/2026",
    "dateKey": "2026-07-22",
    "importedAt": "2026-07-29T10:13:50.675811-03:00",
    "revisionId": "20260722-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 286450287.2639238,
    "pddTotal": 0.0,
    "carteiraVp": 286450287.2639238,
    "carteiraVpLiquido": 286450287.2639238,
    "caixa": 35096146.85,
    "total": 321546434.1139238,
    "lastrosAtivos": 897.0,
    "quantidadeLastrosAtivos": 897.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 35096146.85
    },
    "total": 35096146.85,
    "cessaoRendimentosDia": 28698478.13,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 319417184.63697696,
    "subordinadaTotal": 2129249.4769468345,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 2129249.4769468345,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 319417184.63697696,
        "valor": 319417184.63697696
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 2129249.4769468345,
        "valor": 2129249.4769468345
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 348062094.21999997,
    "valorPresente": 286450287.2639238,
    "valorPresenteLiquido": 286450287.2639238,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 170.35380410593598,
    "taxaMediaPonderada": 0.01911318634711917,
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
        "value": "R$ 286.450.287,26"
      },
      {
        "label": "Caixa total",
        "value": "R$ 35.096.146,85"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 28.698.478,13"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 2.129.249,48"
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
        "carteiraVp": 15874925.95560391,
        "valorNominal": 23737047.65,
        "caixa": 436725.45,
        "cessaoRendimentosDia": 1.2999999999883585,
        "ativoTotal": 16311651.40560391,
        "funding": 16080924.112449,
        "subordinada": 230727.2931549102,
        "puSub": 2307.272931549102,
        "rendimentoSubDia": 0.008866279802737465,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 8,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.022573471729659313,
        "prazoMedio": 12.743128743856289,
        "montanteAtraso": 250000.2
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 26232662.473116484,
        "valorNominal": 28550334.8,
        "caixa": 1176.6699999999983,
        "cessaoRendimentosDia": 1.7399999999979627,
        "ativoTotal": 26233839.143116485,
        "funding": 25976444.624361,
        "subordinada": 257394.51875548437,
        "puSub": 2573.945187554844,
        "rendimentoSubDia": -0.01940366477070654,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.020202913120405768,
        "prazoMedio": 128.98897005177633,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 1555338.5381392082,
        "valorNominal": 19023272.3,
        "caixa": 3948.719999999994,
        "cessaoRendimentosDia": 0.32999999999447027,
        "ativoTotal": 1559287.2581392082,
        "funding": 1436675.130849,
        "subordinada": 122612.12729020813,
        "puSub": 1226.1212729020813,
        "rendimentoSubDia": -0.0015546029367219383,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 4,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01833812020136335,
        "prazoMedio": -2.3342511505009207,
        "montanteAtraso": 347967.87
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 15414660.545916323,
        "valorNominal": 16886049.52,
        "caixa": 9673194.610000001,
        "cessaoRendimentosDia": 9667359.65,
        "ativoTotal": 25087855.155916326,
        "funding": 25034004.284624998,
        "subordinada": 53850.87129132822,
        "puSub": 538.5087129132822,
        "rendimentoSubDia": -0.636526148472131,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 2,
        "cedentes": 2,
        "sacados": 2,
        "taxaMedia": 0.019522874277382477,
        "prazoMedio": 10.594799092711765,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 19444619.86843697,
        "valorNominal": 19401300.51,
        "caixa": 6747829.31,
        "cessaoRendimentosDia": 6746894.239999999,
        "ativoTotal": 26192449.17843697,
        "funding": 26092801.871388003,
        "subordinada": 99647.30704896525,
        "puSub": 996.4730704896524,
        "rendimentoSubDia": -0.4313839623616905,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.019228463183798984,
        "prazoMedio": 16.10731123796131,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10197511.60992123,
        "valorNominal": 10552681.8,
        "caixa": 36773.020000000004,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10234284.62992123,
        "funding": 9845689.22715,
        "subordinada": 388595.4027712289,
        "puSub": 3885.954027712289,
        "rendimentoSubDia": -0.00027065906310264065,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 244,
        "cedentes": 21,
        "sacados": 129,
        "taxaMedia": 0.020567338020510518,
        "prazoMedio": 41.39001139891794,
        "montanteAtraso": 1911500.0
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13416128.82917471,
        "valorNominal": 14949673.5,
        "caixa": 212613.87000000005,
        "cessaoRendimentosDia": 108605.70000000001,
        "ativoTotal": 13628742.69917471,
        "funding": 13385094.807273,
        "subordinada": 243647.89190170914,
        "puSub": 2436.4789190170914,
        "rendimentoSubDia": -0.0018690969107635347,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.017643198363928147,
        "prazoMedio": 41.84822296047089,
        "montanteAtraso": 2390917.219947924
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12580257.005265644,
        "valorNominal": 24122656.0,
        "caixa": 0.0,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 12580257.005265644,
        "funding": 12737878.049897,
        "subordinada": -157621.04463135637,
        "puSub": -1576.2104463135638,
        "rendimentoSubDia": 0.023243448937599442,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.0182167413180064,
        "prazoMedio": 141.83502254138708,
        "montanteAtraso": 6022651.375523175
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 59111.70000000001,
        "cessaoRendimentosDia": 100.23000000001048,
        "ativoTotal": 59111.70000000001,
        "funding": 0.0,
        "subordinada": 59111.70000000001,
        "puSub": 591.1170000000001,
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
        "carteiraVp": 19117460.158698056,
        "valorNominal": 20466773.25,
        "caixa": 162066.75,
        "cessaoRendimentosDia": 3638.0899999999965,
        "ativoTotal": 19279526.908698056,
        "funding": 18925388.39688,
        "subordinada": 354138.51181805506,
        "puSub": 3541.3851181805508,
        "rendimentoSubDia": -0.006328536409533347,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 217,
        "cedentes": 16,
        "sacados": 128,
        "taxaMedia": 0.018031028052951013,
        "prazoMedio": 31.972843047533797,
        "montanteAtraso": 450000.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14501322.873362869,
        "valorNominal": 15730474.53,
        "caixa": 604.4100000000035,
        "cessaoRendimentosDia": 6.860000000000582,
        "ativoTotal": 14501927.28336287,
        "funding": 14336813.725144949,
        "subordinada": 165113.55821792036,
        "puSub": 1651.1355821792035,
        "rendimentoSubDia": -0.020777736952745207,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 87,
        "cedentes": 9,
        "sacados": 47,
        "taxaMedia": 0.01562671093937611,
        "prazoMedio": 92.85353503767212,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 11753806.28722906,
        "valorNominal": 12726256.36,
        "caixa": 3850013.22,
        "cessaoRendimentosDia": 2.580000000074506,
        "ativoTotal": 15603819.50722906,
        "funding": 15301889.024540998,
        "subordinada": 301930.4826880619,
        "puSub": 3019.3048268806187,
        "rendimentoSubDia": -0.021237637964624745,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 4,
        "sacados": 6,
        "taxaMedia": 0.015329410986703347,
        "prazoMedio": 11.781867387141268,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 10565626.662243184,
        "valorNominal": 10844240.129999999,
        "caixa": 11921614.569999998,
        "cessaoRendimentosDia": 11502639.29,
        "ativoTotal": 22487241.23224318,
        "funding": 22570635.523999996,
        "subordinada": -83394.29175681621,
        "puSub": -833.9429175681621,
        "rendimentoSubDia": -2.34635229673741,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.018163615301371495,
        "prazoMedio": 42.7142717563128,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2295955.5065728193,
        "valorNominal": 2983591.13,
        "caixa": 628771.42,
        "cessaoRendimentosDia": 616428.4600000001,
        "ativoTotal": 2924726.9265728192,
        "funding": 3022555.3474504,
        "subordinada": -97828.42087758053,
        "puSub": -978.2842087758053,
        "rendimentoSubDia": -0.0011372948567037744,
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
        "carteiraVp": 30071081.730183195,
        "valorNominal": 31789039.52,
        "caixa": 22371.87000000001,
        "cessaoRendimentosDia": 12360.130000000005,
        "ativoTotal": 30093453.600183196,
        "funding": 30082758.942291997,
        "subordinada": 10694.657891198993,
        "puSub": 106.94657891198993,
        "rendimentoSubDia": -3.95728672224782,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.017802958022184255,
        "prazoMedio": 95.01096830133555,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14477897.041551849,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 39845.5399999991,
        "ativoTotal": 14481340.161551848,
        "funding": 14553645.6275407,
        "subordinada": -72305.46598885208,
        "puSub": -723.0546598885209,
        "rendimentoSubDia": 0.00923546159669919,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.016344750992634702,
        "prazoMedio": 155.03940052703044,
        "montanteAtraso": 4570586.050875471
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41763148.09084304,
        "valorNominal": 51743678.75,
        "caixa": 5782.739999999991,
        "cessaoRendimentosDia": 46.73999999999069,
        "ativoTotal": 41768930.83084304,
        "funding": 41472548.3361,
        "subordinada": 296382.4947430417,
        "puSub": 2963.824947430417,
        "rendimentoSubDia": -0.004045118169303863,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.022636178300076606,
        "prazoMedio": 285.25013173819957,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 27187884.08766525,
        "valorNominal": 28923601.169999998,
        "caixa": 1330105.4,
        "cessaoRendimentosDia": 547.25,
        "ativoTotal": 28517989.487665247,
        "funding": 28561437.60503592,
        "subordinada": -43448.117370672524,
        "puSub": -434.48117370672526,
        "rendimentoSubDia": -0.022165628280489735,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 6,
        "sacados": 7,
        "taxaMedia": 0.018572261594894314,
        "prazoMedio": 820.9324737192345,
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
        "puAtual": 403.03067950999997,
        "valorAtual": 16080924.112449,
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
        "puAtual": 651.03871239,
        "valorAtual": 25976444.624361,
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
        "puAtual": 36.00689551,
        "valorAtual": 1436675.130849,
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
        "puAtual": 627.41865375,
        "valorAtual": 25034004.284624998,
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
        "puAtual": 653.9549341200001,
        "valorAtual": 26092801.871388003,
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
        "puAtual": 246.7591285,
        "valorAtual": 9845689.22715,
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
        "puAtual": 335.46603527,
        "valorAtual": 13385094.807273,
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
        "puAtual": 907.58085695,
        "valorAtual": 8168227.71255,
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
        "puAtual": 1090.869023,
        "valorAtual": 4569650.337347,
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
        "puAtual": 474.3205112,
        "valorAtual": 18925388.39688,
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
        "puAtual": 361.99504419,
        "valorAtual": 14336813.725144949,
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
        "puAtual": 51.132412779999996,
        "valorAtual": 680061.0899739999,
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
        "puAtual": 1099.38555899,
        "valorAtual": 14621827.934566999,
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
        "puAtual": 65.4156032,
        "valorAtual": 1308312.0640000002,
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
        "puAtual": 1063.116173,
        "valorAtual": 21262323.459999997,
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
        "puAtual": 193.81566832,
        "valorAtual": 3022555.3474504,
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
        "puAtual": 997.86821525,
        "valorAtual": 19957364.305,
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
        "puAtual": 1022.76713508,
        "valorAtual": 10125394.637292,
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
        "puAtual": 781.9058639799999,
        "valorAtual": 8163097.219951199,
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
        "puAtual": 1056.28899299,
        "valorAtual": 6390548.4075895,
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
        "puAtual": 1039.412239,
        "valorAtual": 20788244.78,
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
        "puAtual": 1039.412239,
        "valorAtual": 20684303.5561,
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
        "puAtual": 922.26136734,
        "valorAtual": 18445227.3468,
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
        "puAtual": 1027.23499779,
        "valorAtual": 10116210.25823592,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": -0.13111523975510364
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 319417184.63697696,
      "valor": 319417184.63697696,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 2129249.4769468345,
      "valor": 2129249.4769468345,
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
          "value": "R$ 321.546.434,11",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 286.450.287,26",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 35.096.146,85",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 28.698.478,13",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 319.417.184,64",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 2.129.249,48",
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
      "date": "22/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
