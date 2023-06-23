// Complexity
// Time = O(n + lon n)
export function nonConstructibleChange(coins) {
  coins.sort((a, b) => a - b);
  let current = 0;
  for (let index = 0; index < coins.length; index++) {
    if (coins[index] > current + 1) {
      return current + 1;
    }
    current += coins[index];
  }
  return current + 1;
}
