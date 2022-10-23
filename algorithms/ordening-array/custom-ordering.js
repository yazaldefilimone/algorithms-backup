const friends = [
  { name: 'John', age: 30 },
  { name: 'Ana', age: 20 },
  { name: 'Chris', age: 25 }, // vírgula no final: ES2017
];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }

  if (a.age > b.age) {
    return 1;
  }
  return 0;
}

// console.log(friends.sort(comparePerson));

let names = ['Ana', 'ana', 'john', 'John'];
console.log({ incurrentOrder: names.sort() });
/* 
Por que ana vem depois de John se “a” vem antes no alfabeto? Isso ocorre
porque o JavaScript compara os caracteres de acordo com o seu valor
ASCII. Por exemplo, A, J, a e j têm os seguintes valores ASCII decimais: A:
65, J: 74, a: 97 e j: 106.
Portanto, J tem um valor menor que a, e, por esse motivo, vem antes no
alfabeto.
site: http://www.asciitable.com.
*/
names = ['Ana', 'ana', 'john', 'John'];

currentOrder = names.sort((a, b) => {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
});
console.log({ currentOrder });

// Para caracteres com acento, podemos usar o método localeCompare também;
const names2 = ['Maève', 'Maeve'];
console.log(names2.sort((a, b) => a.localeCompare(b)));
