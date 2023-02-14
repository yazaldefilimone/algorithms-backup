let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let numbers2 = Array.from(numbers);
let numbers3 = Array.from(numbers, (x) => x % 2 === 0);

console.log({ numbers2, numbers3 });

let numbers4 = Array.of(1);
let numbers5 = Array.of(1, 3, 4, 5);
console.log(numbers4);
console.log(numbers5);

let copyNumbers = Array.of(...numbers);

console.log(copyNumbers);

copyNumbers.fill(1);
console.log(copyNumbers);
copyNumbers = Array.of(...numbers);

copyNumbers.fill(1, 2, 4);
console.log(copyNumbers);
