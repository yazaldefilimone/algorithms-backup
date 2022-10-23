let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

console.log(numbers.indexOf(10)); // 10
console.log(numbers.indexOf(100)); // -1 not found

function multipleOf13(element, index, array) {
  return element % 13 == 0;
}
console.log({ value: numbers.find(multipleOf13) });
console.log({ index: numbers.findIndex(multipleOf13) });

console.log('includes 15: ', numbers.includes(15));
console.log('includes 100: ', numbers.includes(100));
