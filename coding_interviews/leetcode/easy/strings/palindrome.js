/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  return Number(String(x).split('').reverse().join('')) === x;
};
