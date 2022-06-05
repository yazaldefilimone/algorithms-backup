var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers[10] = 10;

numbers.push(11);
numbers.push(12);
numbers.push(13);

numbers.unshift(-1);
numbers.unshift(-2);
numbers.unshift(-3);
console.log(numbers);
