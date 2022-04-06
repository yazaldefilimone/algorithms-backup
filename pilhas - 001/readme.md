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

**E importante dizer que se mesmo com tudo isso que falei sobre as pilhas "os teus olhos nao estao brilhando" e a dopamina nao aumentou pra descrobrir a fundo sobre o assunto, aconselho que de um passo atras e pense de facto no que voce e e quer e nao perca tempo aqui.**

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

## Usando a classe Stack

Nesta seção, veremos como usar a classe Stack. Nossa primeira tarefa deve
ser instanciar a classe Stack que acabamos de criar. Em seguida, podemos
verificar se ela está vazia (a saída será true porque ainda não adicionamos
nenhum elemento à nossa pilha):

```js
const stack = new Stack();
```

```js
console.log(stack.isEmpty()); // exibe true
```

A seguir, vamos adicionar alguns elementos na pilha (faremos um push dos
números 5 e 8; você pode adicionar elementos de qualquer tipo na pilha):

```js
stack.push(5);
stack.push(8);
```

Se chamarmos o método peek, o número 8 será devolvido porque esse foi o
último elemento que adicionamos na pilha:

```js
console.log(stack.peek()); // exibe 8
```

Vamos adicionar outro elemento:

```js
stack.push(11);
console.log(stack.size()); // exibe 3
console.log(stack.isEmpty()); // exibe false
```

Adicionamos o elemento 11. Se chamarmos o método size, o resultado será o
número 3, pois temos três elementos em nossa pilha (5, 8 e 11). Além disso,
se chamarmos o método isEmpty, a saída será false (temos três elementos em
nossa pilha). Por fim, vamos acrescentar outro elemento:

```js
stack.push(15);
```

Em seguida, vamos remover dois elementos da pilha chamando o método pop
duas vezes:y

```js
stack.pop();
stack.pop();

console.log(stack.size()); // exibe 2
```

Antes de chamar o método pop duas vezes, nossa pilha tinha quatro
elementos. Após a execução do método pop duas vezes, a pilha agora tem
apenas dois elementos: 5 e 8.

**NB:** código-fonte stara neste mesmo repo no caminho : `./src/stack-arry.js!`

Feito com 💙 por [Yazalde Filimone](https://github.com/yazaldefilimonepinto)
