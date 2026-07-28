# Lamina ao investidor

Versao estatica da lamina diaria ao investidor, pronta para abrir em navegador ou hospedar como site estatico.

## Estrutura publicada

- `index.html`: lamina ao investidor.
- `pu.html`: validacao de PU.
- `simulador-eventos.html`: simulador gerencial de eventos.
- `assets/`: estilos e scripts de renderizacao.
- `data/`: snapshots historicos ja processados, manifestos e curvas de indice usados pela navegacao no tempo.

## Historico

A navegacao por data depende da pasta `data/`, principalmente:

- `data/cra-manifest.js`
- `data/current.js`
- `data/current-cra.js`
- `data/cras/<cra-id>/<data>.js`

Por isso a base historica processada esta versionada neste repositorio. Arquivos brutos de importacao, backups, logs e temporarios ficam fora do Git.

## Abrir localmente

Abra `index.html` diretamente no navegador, ou use um servidor estatico simples caso o navegador bloqueie arquivos locais.

## Nao versionado

As pastas abaixo nao fazem parte desta versao publica do site:

- `Importe de arquivos/`
- `archive/`
- `backups/`
- `cras/`
- `inbox/`
- `logs/`
- `tmp/`
- arquivos `.xlsx`, `.xls`, `.csv`, `.pdf` brutos
