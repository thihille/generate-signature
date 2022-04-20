#### Estrutura de Dados Padrão

![Exemplo da Estrutura de Dados Padrão](../../images/frontend/cmx-assembled-data/exemplo.png)

## :bookmark: Sobre

Cria uma linha de dados padronizada, contendo título e valor, recebendo a quantidade de informações esperadas por linha, calculando dinamicamente seus espaçamentos.

Tag HTML de inicialização: `<cmx-assembled-data></cmx-assembled-data>`

## :inbox_tray: Parâmetros

## Obrigatórios

- data - Lista de objetos contendo obrigatóriamente os atributos `title` e `value`, e recebendo opcionalmente os atributos `flag` (para bandeiras) e `formatter` (para formatação especial).

## Não Obrigatórios

- data - Lista de objetos do tipo: contendo atributos não obrigatórios `align` (alinhamento dos atributos `title` e `value`) podendo ser passado os valores: (left, center, right) - (padrão: left)

- maxRowElements - Número que define o máximo de elementos por linha, responsável por determinar a largura de cada elemento. (padrão: 6)

- no-margin - Passa-se este atributo do tipo `single` quando deseja remover as margens de css padrões que já vem setado no componente, ex:

```
    <cmx-assembled-data no-margin></cmx-assembled-data>
```

***
