# Lamina ao investidor

Versao estatica da lamina diaria ao investidor, pronta para abrir em navegador ou hospedar como site estatico.

## Estrutura publicada

- `index.html`: lamina ao investidor.
- `pu.html`: validacao de PU.
- `simulador-eventos.html`: simulador gerencial de eventos.
- `operacional.html`: tela operacional para publicar no GitHub Pages.
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

## Publicar no GitHub Pages

O GitHub Pages nao grava arquivos diretamente pelo navegador. Para publicar pelo site sem expor token do GitHub no HTML:

1. Abra `scripts/Iniciar-Publicador-GitHub-Pages.cmd` no computador com o clone e credencial GitHub.
2. Copie a chave local exibida na janela.
3. Abra `operacional.html` pelo site publicado.
4. Cole a chave, confira o status do Git e clique em `Publicar no GitHub Pages`.

O publicador local executa `git add`, cria commit se houver alteracao e faz `git push` para a branch atual. Depois do push, o GitHub Pages costuma atualizar em alguns minutos.

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
