/**
 * @param {string} s
 * @return {number}
 */
// https://leetcode.com/problems/second-largest-digit-in-a-string/
// Time:O(n) || Space: O(1)
var secondHighest = function (s) {
  let table = [-Infinity, -Infinity]
  for (let index = 0; index < s.length; index++) {
    const curr = Number(s[index]);
    if (isNaN(curr) || table[1] == curr || table[0] == curr) {
      continue
    }
    if (table[1] < curr) {
      table[0] = table[1]
      table[1] = curr
    } else if (table[0] == -Infinity || curr > table[0] && curr < table[1]) {
      table[0] = curr
    }
  }
  if (table[0] == table[1] || table[0] == -Infinity || table[1] == -Infinity) {
    return -1
  }
  return table[0]
}