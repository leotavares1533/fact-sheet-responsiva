window.LAMINA_CRA_DAILY = window.LAMINA_CRA_DAILY || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"] = window.LAMINA_CRA_DAILY["cras-carteira-overview"] || {};
window.LAMINA_CRA_DAILY["cras-carteira-overview"]["2026-07-07"] = {
  "metadata": {
    "schemaVersion": 2,
    "model": "cras-carteira-consolidado",
    "craId": "cras-carteira-overview",
    "reportDate": "07/07/2026",
    "dateKey": "2026-07-07",
    "importedAt": "2026-07-29T10:12:44.098080-03:00",
    "revisionId": "20260707-cras-carteira-overview-assets",
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
    "carteiraVpBruto": 331915086.9774147,
    "pddTotal": 0.0,
    "carteiraVp": 331915086.9774147,
    "carteiraVpLiquido": 331915086.9774147,
    "caixa": 58131924.09,
    "total": 390047011.06741476,
    "lastrosAtivos": 990.0,
    "quantidadeLastrosAtivos": 990.0
  },
  "caixa": {
    "accounts": {
      "totalCrasCarteira": 58131924.09
    },
    "total": 58131924.09,
    "cessaoRendimentosDia": 51400519.0,
    "fonte": "Soma dos caixas importados por CRA",
    "arquivoOrigem": "CARTEIRA_CAIXA_CCs_total.xlsx"
  },
  "passivo": {
    "fundingTotal": 387403962.0076054,
    "subordinadaTotal": 2643049.059809388,
    "subordinadaQuantidade": 1.0,
    "subordinadaPuResidual": 2643049.059809388,
    "deducoesTotal": 0,
    "provisoesTotal": 0.0,
    "cotas": [
      {
        "classe": "SR1",
        "label": "Funding SR/MEZ",
        "tipo": "sr",
        "quantidade": 1,
        "taxa": "-",
        "pu": 387403962.0076054,
        "valor": 387403962.0076054
      },
      {
        "classe": "SUB",
        "label": "Subordinadas",
        "tipo": "sub",
        "quantidade": 1,
        "taxa": "-",
        "pu": 2643049.059809388,
        "valor": 2643049.059809388
      }
    ]
  },
  "carteiraResumo": {
    "valorNominal": 391038498.33,
    "valorPresente": 331915086.9774147,
    "valorPresenteLiquido": 331915086.9774147,
    "pddTotal": 0.0,
    "cedentesUnicos": null,
    "sacadosUnicos": null,
    "prazoMedioDias": 145.16219540704347,
    "taxaMediaPonderada": 0.01925190384268885,
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
        "value": "R$ 331.915.086,98"
      },
      {
        "label": "Caixa total",
        "value": "R$ 58.131.924,09"
      },
      {
        "label": "Cessao rendimentos",
        "value": "R$ 51.400.519,00"
      },
      {
        "label": "Subordinadas",
        "value": "R$ 2.643.049,06"
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
        "carteiraVp": 17964962.70256933,
        "valorNominal": 23842047.55,
        "caixa": 8711.879999999997,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 17973674.582569327,
        "funding": 17764222.660296,
        "subordinada": 209451.92227332667,
        "puSub": 2094.519222733267,
        "rendimentoSubDia": 0.012986140692129,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 9,
        "cedentes": 6,
        "sacados": 6,
        "taxaMedia": 0.022680041084359136,
        "prazoMedio": 11.13222160083339,
        "montanteAtraso": 204999.9
      },
      {
        "operacao": "CRA 45",
        "craId": "cra-carteira-45",
        "carteiraVp": 25971623.360053055,
        "valorNominal": 28550334.8,
        "caixa": 1190.9000000000015,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 25972814.260053053,
        "funding": 25729153.121763002,
        "subordinada": 243661.13829005137,
        "puSub": 2436.6113829005135,
        "rendimentoSubDia": -0.020320451372613846,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 16,
        "cedentes": 1,
        "sacados": 8,
        "taxaMedia": 0.02020289933858757,
        "prazoMedio": 128.9911337091638,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 46",
        "craId": "cra-carteira-46",
        "carteiraVp": 6786409.741437655,
        "valorNominal": 21860158.2,
        "caixa": 95750.66999999998,
        "cessaoRendimentosDia": 94060.45999999999,
        "ativoTotal": 6882160.411437655,
        "funding": 6765262.046823,
        "subordinada": 116898.36461465526,
        "puSub": 1168.9836461465527,
        "rendimentoSubDia": 0.008768400578049063,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 52,
        "cedentes": 8,
        "sacados": 21,
        "taxaMedia": 0.017872388500661997,
        "prazoMedio": 2.9919158891718074,
        "montanteAtraso": 3184853.77
      },
      {
        "operacao": "CRA 47",
        "craId": "cra-carteira-47",
        "carteiraVp": 24935994.682419162,
        "valorNominal": 26843675.89,
        "caixa": 495431.82000000007,
        "cessaoRendimentosDia": 413302.1400000001,
        "ativoTotal": 25431426.502419163,
        "funding": 25300160.216352,
        "subordinada": 131266.2860671617,
        "puSub": 1312.6628606716172,
        "rendimentoSubDia": -1.4631987162504876,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.018861131516690294,
        "prazoMedio": 18.99195095055246,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 48",
        "craId": "cra-carteira-48",
        "carteiraVp": 26014364.653405335,
        "valorNominal": 26344807.88,
        "caixa": 1600981.13,
        "cessaoRendimentosDia": 1600981.13,
        "ativoTotal": 27615345.783405334,
        "funding": 27456601.604943004,
        "subordinada": 158744.17846233025,
        "puSub": 1587.4417846233025,
        "rendimentoSubDia": -1.110010557564502,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.018859966889472342,
        "prazoMedio": 19.527270499927678,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 49",
        "craId": "cra-carteira-49",
        "carteiraVp": 10651498.727558475,
        "valorNominal": 11095966.88,
        "caixa": 37995.94,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 10689494.667558474,
        "funding": 10305767.285309998,
        "subordinada": 383727.38224847615,
        "puSub": 3837.2738224847617,
        "rendimentoSubDia": -0.0011428087086773342,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 263,
        "cedentes": 21,
        "sacados": 138,
        "taxaMedia": 0.02054159589683631,
        "prazoMedio": 39.12668138984865,
        "montanteAtraso": 2325165.79
      },
      {
        "operacao": "CRA 50",
        "craId": "cra-carteira-50",
        "carteiraVp": 13403766.835460417,
        "valorNominal": 14949673.5,
        "caixa": 73786.48000000001,
        "cessaoRendimentosDia": 3022.1800000000076,
        "ativoTotal": 13477553.315460417,
        "funding": 13257670.895049,
        "subordinada": 219882.42041141726,
        "puSub": 2198.8242041141725,
        "rendimentoSubDia": -0.0019121476638671586,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 7,
        "cedentes": 4,
        "sacados": 7,
        "taxaMedia": 0.01760683383974039,
        "prazoMedio": 42.367722237216284,
        "montanteAtraso": 2370811.3654049
      },
      {
        "operacao": "CRA 51",
        "craId": "cra-carteira-51",
        "carteiraVp": 12507169.104498144,
        "valorNominal": 24122656.0,
        "caixa": 2806667.81,
        "cessaoRendimentosDia": 1124.8500000000931,
        "ativoTotal": 15313836.914498145,
        "funding": 15447669.66567411,
        "subordinada": -133832.7511759661,
        "puSub": -1338.327511759661,
        "rendimentoSubDia": 0.03640388328547295,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 10,
        "cedentes": 4,
        "sacados": 4,
        "taxaMedia": 0.01821491557523562,
        "prazoMedio": 141.01815152372578,
        "montanteAtraso": 6012400.608911721
      },
      {
        "operacao": "CRA 52",
        "craId": "cra-carteira-52",
        "carteiraVp": 0,
        "valorNominal": 0,
        "caixa": 58550.78,
        "cessaoRendimentosDia": 50.36999999999534,
        "ativoTotal": 58550.78,
        "funding": 0.0,
        "subordinada": 58550.78,
        "puSub": 585.5078,
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
        "carteiraVp": 18982721.70562794,
        "valorNominal": 20502655.97,
        "caixa": 76420.56,
        "cessaoRendimentosDia": 76420.56,
        "ativoTotal": 19059142.26562794,
        "funding": 18748514.81307,
        "subordinada": 310627.45255794004,
        "puSub": 3106.2745255794002,
        "rendimentoSubDia": -0.02380823963668266,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 225,
        "cedentes": 16,
        "sacados": 134,
        "taxaMedia": 0.01802539886299324,
        "prazoMedio": 31.811267287821575,
        "montanteAtraso": 460869.0
      },
      {
        "operacao": "CRA 54",
        "craId": "cra-carteira-54",
        "carteiraVp": 14760795.690032046,
        "valorNominal": 16103934.54,
        "caixa": 738.3499999999985,
        "cessaoRendimentosDia": 6.819999999992433,
        "ativoTotal": 14761534.040032046,
        "funding": 14584877.7641798,
        "subordinada": 176656.2758522462,
        "puSub": 1766.562758522462,
        "rendimentoSubDia": -0.020995039366182966,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 89,
        "cedentes": 9,
        "sacados": 48,
        "taxaMedia": 0.01583308257686326,
        "prazoMedio": 90.51805132946836,
        "montanteAtraso": 373460.01
      },
      {
        "operacao": "CRA 55",
        "craId": "cra-carteira-55",
        "carteiraVp": 24503133.251937136,
        "valorNominal": 25575102.32,
        "caixa": 4470509.37,
        "cessaoRendimentosDia": 4462836.39,
        "ativoTotal": 28973642.621937137,
        "funding": 28653758.47033,
        "subordinada": 319884.1516071372,
        "puSub": 3198.8415160713716,
        "rendimentoSubDia": -1.0774885556208251,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 11,
        "cedentes": 5,
        "sacados": 7,
        "taxaMedia": 0.020626513896370522,
        "prazoMedio": 5.580090538639902,
        "montanteAtraso": 9031791.91
      },
      {
        "operacao": "CRA 57",
        "craId": "cra-carteira-57",
        "carteiraVp": 22841992.82417343,
        "valorNominal": 23435758.93,
        "caixa": 12964245.98,
        "cessaoRendimentosDia": 11491030.58,
        "ativoTotal": 35806238.80417343,
        "funding": 35300302.7968,
        "subordinada": 505936.00737342983,
        "puSub": 5059.360073734299,
        "rendimentoSubDia": -1.0460946230170696,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 17,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.017959260191192133,
        "prazoMedio": 25.95746755573528,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 58",
        "craId": "cra-carteira-58",
        "carteiraVp": 2884832.832614547,
        "valorNominal": 2983591.13,
        "caixa": 13191626.13,
        "cessaoRendimentosDia": 13190711.41,
        "ativoTotal": 16076458.962614547,
        "funding": 16154070.1129624,
        "subordinada": -77611.15034785308,
        "puSub": -776.1115034785308,
        "rendimentoSubDia": -0.9941460040826319,
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
        "carteiraVp": 29794405.72141236,
        "valorNominal": 31789039.52,
        "caixa": 20067167.72,
        "cessaoRendimentosDia": 20066016.369999997,
        "ativoTotal": 49861573.44141236,
        "funding": 49927937.168195,
        "subordinada": -66363.7267826423,
        "puSub": -663.637267826423,
        "rendimentoSubDia": -0.9967013946968534,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 15,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.017802957958178076,
        "prazoMedio": 95.01092835365266,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 60",
        "craId": "cra-carteira-60",
        "carteiraVp": 14356768.285096275,
        "valorNominal": 15631423.299999999,
        "caixa": 3443.1200000000026,
        "cessaoRendimentosDia": 0.0,
        "ativoTotal": 14360211.405096274,
        "funding": 14425291.087331198,
        "subordinada": -65079.68223492429,
        "puSub": -650.7968223492429,
        "rendimentoSubDia": 0.010107235551106264,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 3,
        "cedentes": 3,
        "sacados": 3,
        "taxaMedia": 0.01634420766885662,
        "prazoMedio": 155.09860046243773,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 61",
        "craId": "cra-carteira-61",
        "carteiraVp": 41297006.20094757,
        "valorNominal": 51743678.75,
        "caixa": 5267.0899999999965,
        "cessaoRendimentosDia": 46.48999999999069,
        "ativoTotal": 41302273.29094757,
        "funding": 41106785.0361,
        "subordinada": 195488.25484757125,
        "puSub": 1954.8825484757126,
        "rendimentoSubDia": -0.00650046748509181,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 254,
        "cedentes": 2,
        "sacados": 58,
        "taxaMedia": 0.022626012919314927,
        "prazoMedio": 285.2217037702054,
        "montanteAtraso": 0
      },
      {
        "operacao": "CRA 62",
        "craId": "cra-carteira-62",
        "carteiraVp": 24257640.65817187,
        "valorNominal": 25663993.169999998,
        "caixa": 2173438.36,
        "cessaoRendimentosDia": 909.25,
        "ativoTotal": 26431079.01817187,
        "funding": 26475917.26242684,
        "subordinada": -44838.24425496906,
        "puSub": -448.3824425496906,
        "rendimentoSubDia": -0.009187287664607191,
        "rendimentoSubMes": null,
        "pdd": 0.0,
        "lastrosAtivos": 6,
        "cedentes": 5,
        "sacados": 5,
        "taxaMedia": 0.018519771997115384,
        "prazoMedio": 876.536652929354,
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
        "puAtual": 445.21861304,
        "valorAtual": 17764222.660296,
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
        "puAtual": 644.84093037,
        "valorAtual": 25729153.121763002,
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
        "puAtual": 169.55543977,
        "valorAtual": 6765262.046823,
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
        "puAtual": 634.08922848,
        "valorAtual": 25300160.216352,
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
        "puAtual": 688.1353785700001,
        "valorAtual": 27456601.604943004,
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
        "puAtual": 258.28990689999995,
        "valorAtual": 10305767.285309998,
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
        "puAtual": 332.27245351,
        "valorAtual": 13257670.895049,
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
        "puAtual": 47.48348413,
        "valorAtual": 1187087.10325,
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
        "puAtual": 1081.24820399,
        "valorAtual": 9731233.83591,
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
        "puAtual": 1081.24820399,
        "valorAtual": 4529348.72651411,
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
        "puAtual": 469.8875893,
        "valorAtual": 18748514.81307,
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
        "puAtual": 368.25849676,
        "valorAtual": 14584877.7641798,
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
        "puAtual": 1065.30704811,
        "valorAtual": 14168583.739863,
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
        "puAtual": 1089.11088199,
        "valorAtual": 14485174.730467001,
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
        "puAtual": 711.27502185,
        "valorAtual": 14225500.437,
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
        "puAtual": 1053.74011799,
        "valorAtual": 21074802.3598,
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
        "puAtual": 1035.84931792,
        "valorAtual": 16154070.1129624,
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
        "puAtual": 980.3408283399999,
        "valorAtual": 19606816.5668,
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
        "puAtual": 1014.08430105,
        "valorAtual": 20281686.021,
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
        "puAtual": 1014.08430105,
        "valorAtual": 10039434.580395,
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
        "puAtual": 775.0099172299999,
        "valorAtual": 8091103.535881199,
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
        "puAtual": 1046.973149,
        "valorAtual": 6334187.551449999,
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
        "puAtual": 1030.245239,
        "valorAtual": 20604904.78,
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
        "puAtual": 1030.245239,
        "valorAtual": 20501880.256100003,
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
        "puAtual": 1022.28590022,
        "valorAtual": 20445718.0044,
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
        "puAtual": 1018.09881108,
        "valorAtual": 6030199.25802684,
        "quantidadeIntegralizada": 9848.0,
        "taxa": "CDI + 7,50% a.a.",
        "dataVencimento": "10/05/2030",
        "dataVencimentoIso": "2030-05-10",
        "status": "Integralizada"
      }
    ],
    "subHistory": [
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
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-05-29",
        "reportDate": "29/05/2026",
        "caixaTotal": 14374959.86,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8415223.660281135,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-01",
        "reportDate": "01/06/2026",
        "caixaTotal": 18431918.2,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8605634.690206826,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-02",
        "reportDate": "02/06/2026",
        "caixaTotal": 18823136.55,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": 8577532.346237166,
        "rendimentoSubDia": null
      },
      {
        "dateKey": "2026-06-03",
        "reportDate": "03/06/2026",
        "caixaTotal": 1901095.81,
        "cessaoRendimentosDia": 0.0,
        "subordinadaTotal": -108956949.94119349,
        "rendimentoSubDia": null
      },
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
        "rendimentoSubDia": -1.0544777118950275
      }
    ]
  },
  "performanceCotas": [
    {
      "classe": "SR1",
      "label": "Funding SR/MEZ",
      "quantidade": 1,
      "taxa": "-",
      "pu": 387403962.0076054,
      "valor": 387403962.0076054,
      "resultadoDia": null
    },
    {
      "classe": "SUB",
      "label": "Subordinadas",
      "quantidade": 1,
      "taxa": "-",
      "pu": 2643049.059809388,
      "valor": 2643049.059809388,
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
          "value": "R$ 390.047.011,07",
          "isHighlight": true,
          "source": {
            "name": "Carteira + caixa"
          }
        },
        {
          "label": "Carteira VP liquida",
          "value": "R$ 331.915.086,98",
          "isHighlight": true,
          "source": {
            "name": "Import carteira"
          }
        },
        {
          "label": "Caixa total",
          "value": "R$ 58.131.924,09",
          "isHighlight": true,
          "source": {
            "name": "Import caixa"
          }
        },
        {
          "label": "Cessao rendimentos",
          "value": "R$ 51.400.519,00",
          "isHighlight": true,
          "source": {
            "name": "Linhas pos-total caixa"
          }
        },
        {
          "label": "Funding SR/MEZ",
          "value": "R$ 387.403.962,01",
          "isHighlight": true,
          "source": {
            "name": "Memoria PU"
          }
        },
        {
          "label": "Subordinadas",
          "value": "R$ 2.643.049,06",
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
      "date": "07/07/2026",
      "file": "CARTEIRA_CAIXA_CCs_total.xlsx"
    }
  ]
};
