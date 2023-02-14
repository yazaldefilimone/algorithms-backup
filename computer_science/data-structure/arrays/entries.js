let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let aEntries = numbers.entries();

console.log(aEntries.next().value); //[ 0, 1 ]
console.log(aEntries.next().value); //[ 1, 2 ]

aEntries = numbers.entries();

for (const n of aEntries) {
  // console.log(n);
}
