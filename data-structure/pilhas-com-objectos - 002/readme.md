# Criando uma classe JavaScript Stack baseada em objeto.

O modo mais fácil de criar uma _classe Stack_ usa um array para armazenar seus elementos. Ao trabalhar com um _conjunto grande de dados_ (o que é
muito comum em projetos reais), também é necessário analisar qual é o modo mais eficaz de manipular os dados. Quando trabalhamos com arrays, a maioria dos métodos tem uma complexidade de tempo O(_n_); conheceremos melhor a complexidade dos algoritmos mais em diante, que vai ter como temha: **Complexidade de algoritmos**.

Isso significa que, para a maioria dos métodos, devemos _iterar pelo array até encontrarmos o elemento que
estamos procurando_ e, no cenário de pior caso, faremos a iteração por todas as posições do array, considerando que _n_ é o tamanho do array. _Se o array tiver mais elementos, demorará mais para iterar pelos elementos_, em comparação com um array com menos elementos.Além disso, _um array é um
conjunto ordenado de elementos_, e, para mantê-los assim, _seria necessário ter
mais espaço na memória também_.
**Não seria melhor se pudéssemos acessar diretamente o elemento, usar menos espaço de memória e continuar tendo todos os elementos organizados conforme fosse necessário?** No cenário de uma _estrutura de dados de pilha_ na _linguagem JavaScript_, também é possível usar um _objeto JavaScript_ para
armazenar os elementos da pilha, mantê-los em ordem e obedecer igualmenteao princípio _LIFO_.

- Vamos ver como podemos conseguir esse comporamento

Começaremos declarando a _classe Stack_ (arquivo stack.js) da seguinte maneira:

```js
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // métodos
}
```

Nessa versão da classe Stack, usaremos uma propriedade count para nos
ajudar a manter o controle do tamanho da pilha (e, consequentemente, para nos ajudar também a adicionar e a remover elementos da estrutura de dados).

Feito com 💙 por [Yazalde Filimone](https://github.com/yazaldefilimonepinto)
