# Cotacoes pecuarias

Banco local criado para historico diario das cotacoes publicas do DATAGRO Indicador do Boi.

## Arquivos

- `cotacoes-pecuaria.sqlite`: banco SQLite usado pelo controle Ceres Confina.
- `cotacoes-pecuaria-latest.js`: snapshot carregado pelo `index.html` para validacao visual.
- `../../scripts/collect-datagro-cattle.py`: coletor que le os SVGs publicos do boletim e grava o historico.

## Tabelas

- `datagro_collection_runs`: registro de cada execucao da rotina.
- `datagro_cattle_quotes`: historico de cotacoes.
- `datagro_cattle_quotes_latest`: visao com a cotacao mais recente por produto, categoria, regiao e posicao da grade.
- Registros com `map_type = historical_series` guardam a serie historica publica de Boi Gordo - Sao Paulo.
- A coleta diaria usa horario de Sao Paulo: em dia util, os quadros diarios sao gravados com a data local da posicao/coleta. A data de fechamento exibida pela fonte fica apenas como referencia visual do boletim.

## Uso no controle

As cotacoes de boi, vaca e novilha em `R$/@` entram na cobertura da garantia biologica:

`valor da garantia = cabecas x peso medio / 15 x cotacao da arroba`

As cotacoes de reposicao ficam historizadas para consulta gerencial e podem ser mapeadas depois para categorias internas de bezerro/garrote quando o layout final de gado for fechado.
