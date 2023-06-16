/**
 * @param {number} n
 * @return {number}
 */

// time: O(n)
// space:  O(n)
export function climbStairs(n) {
  if (n <= 3) return n;
  let ways = [0, 1, 2, 3];

  for (let index = 4; index <= n; index++) {
    ways.push(ways[index - 1] + ways[index - 2]);
  }
  return ways.pop();
}

// time: O(n)
// space:  O(1)
export function climbStairs_with_pointer(n) {
  if (n === 1) return n;
  let first = 1;
  let second = 2;

  for (let index = 3; index <= n; index++) {
    let three = first + second;
    first = second;
    second = three;
  }
  return second;
}
