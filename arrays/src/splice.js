var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.splice(3, 3);
console.log(numbers);

numbers.splice(3, 0, 3, 4, 5);
console.log(numbers);
