/**
 * @param {number} n
 * @return {boolean}
 */
// https://leetcode.com/problems/happy-number 

// Time: O(n) || Space: O(1)
var isHappy = function (n) {
  if (n == 1) return true
  let max = 10;
  let result = 0;
  while (n > 1 && max > 0) {
    result = 0;
    const str = n.toString();
    for (let idx = 0; idx < str.length; idx++) {
      result += parseInt(str[idx]) ** 2
    }
    n = result;
    max--
  }
  return result == 1
};
