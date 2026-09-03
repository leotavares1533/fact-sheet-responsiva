# Financial Performance Tracking

Controle gerencial apartado para acompanhar carteiras/fundings fora da estrutura de CRA.

## V1

- Tela estatica e isolada.
- Dados ficticios no arquivo `assets/app.js`.
- Sem links ou botoes para o projeto de laminas de CRA.
- Visao gerencial consolidada com caixa, resultado sintetico e historico de 30 dias.
- Visao individual por funding com carteira, caixa, funding, resultado e gatilhos de rentabilidade.

## Proxima evolucao

- Separar dados ficticios para `data/`.
- Criar importacao de carteira, caixa e funding.
- Guardar historico diario por funding.
- Criar visao consolidada por investidor, produto e setor.

## Cotacoes pecuarias

- Fonte publica: DATAGRO Indicador do Boi (`https://www.indicadordoboi.com.br/pt-br#bulletin`).
- Coletor local: `scripts/collect-datagro-cattle.py`.
- Banco local: `data/pecuaria/cotacoes-pecuaria.sqlite`.
- Snapshot visual do `index`: `data/pecuaria/cotacoes-pecuaria-latest.js`.
- A rotina diaria deve rodar apos 18:30, quando o boletim costuma estar atualizado.
- Os mapas regionais de boi, vaca e novilha gravam preco em `R$/@` por UF.
- A serie historica publica do site esta disponivel para Boi Gordo - Sao Paulo e fica gravada como `historical_series`.
- Os mapas de reposicao gravam a grade numerica em `R$/kg` com linha, coluna e coordenadas, pois os rotulos visiveis ficam no desenho do boletim.
