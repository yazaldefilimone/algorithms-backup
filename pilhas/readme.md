# Pilhas.

Eu espero cinceramente que ate aqui voce ja tenha visto sobre **arrays**, por ja sabermos como criar e usar arrays, que são o tipo mais
comum de **estrutura de dados em ciência da computação.** Conforme
aprendemos, é possível adicionar e remover elementos de um array em
qualquer índice desejado. Às vezes, porém, precisaremos de alguma forma de
estrutura de dados na qual tenhamos mais controle sobre o acréscimo e a
remoção de itens. Há duas estruturas de dados que apresentam algumas
semelhanças com os arrays, mas que nos oferecem mais controle sobre a
adição e a remoção dos elementos. Essas estruturas de dados são as **pilhas
(stacks) e as filas (queues).**

**Os seguintes tópicos serão abordados neste capítulo:**

- criação de nossa própria biblioteca de estrutura de dados JavaScript;
- a estrutura de dados de pilha;
- adição de elementos em uma pilha;
- remoção (pop) de elementos de uma pilha;
- como usar a classe Stack;
- o problema do decimal para binário.

**Criação de uma biblioteca de estruturas de dados e
algoritmos JavaScript**

A partir deste capítulo, criaremos a nossa própria biblioteca de estruturas de
dados e algoritmos JavaScript. **O bundle** com o código-fonte deste repositorio foi
preparado para essa tarefa.

## Estrutura de dados de pilha

Uma **pilha** é uma coleção **ordenada** de itens que obedece ao princípio **LIFO
(Last In First Out, isto é, o último a entrar é o primeiro a sair).** A adição de
novos itens ou a remoção de itens existentes ocorrem na mesma extremidade.
O final da pilha é conhecido como **topo**, enquanto o lado oposto é conhecido
como **base**. Os elementos mais novos ficam próximos ao topo, e os elementos
mais antigos estão próximos da base.
Temos vários exemplos de pilhas na vida real, por exemplo, uma pilha de
**livros**, ou uma pilha de **bandejas em uma
lanchonete** ou em uma praça de alimentação. Uma pilha também é usada pelos **compiladores** em linguagens de
programação, **pela memória do computador para armazenar variáveis e
chamadas de métodos**, e também pelo histórico do **navegador** (o botão de
retornar [back] do navegador).

_E importante dizer que se mesmo com tudo isso que falei sobre as pilhas "os teus olhos nao estao brilhando" e a dopamina nao aumentou pra descrobrir a fundo sobre o assunto, aconselho que de um passo atras e pense de facto no que voce e e quer e nao perca tempo aqui._

## Criaremos a nossa própria classe para representar uma pilha.

Vamos começar pelo básico criando um arquivo stack-array.js e declarando a nossa classe

```js
class Stack {
  constructor() {
    this.items = []; // {1}
  }
}
```

Stack:

Precisamos de uma estrutura de dados que armazenará os elementos da pilha.
Podemos usar um array para isso ({1}). A estrutura de dados de array nos
permite adicionar ou remover elementos de qualquer posição da estrutura de
dados. Como a pilha obedece ao princípio LIFO, limitaremos as
funcionalidades que estarão disponíveis à inserção e remoção de elementos.
Os métodos a seguir estarão disponíveis na classe Stack:

- **push(element(s)):**
  esse método adiciona um novo elemento (ou vários
  elementos) no topo da pilha.
- **pop():**
  esse método remove o elemento que está no topo da pilha. Também
  devolve o elemento removido.

- **peek():**
  esse método devolve o elemento que está no topo da pilha. A pilha
  não é modificada (o elemento não é removido; ele é devolvido apenas
  como informação).
- **isEmpty():**
  esse método devolve true se a pilha não contiver nenhum
  elemento e false se o tamanho da pilha for maior que 0.
- **clear():**
  esse método remove todos os elementos da pilha.
- **size():**
  esse método devolve o número de elementos contidos na pilha. É
  semelhante à propriedade length de um array.

  **NB:** código-fonte stara neste mesmo repo!

Feito com 💙 por [Yazalde Filimone](https://github.com/yazaldefilimonepinto)
