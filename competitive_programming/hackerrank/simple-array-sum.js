// https://www.hackerrank.com/challenges/simple-array-sum/problem/
function simpleArraySum(ar) {
  // Write your code here
  let some = 0;
  for (let int of ar) {
    some = int + some;
  }

  return some;
}
const numbers = [1, 2, 3, 4, 10, 11];
const result = simpleArraySum(numbers); // 31

console.log(result);
