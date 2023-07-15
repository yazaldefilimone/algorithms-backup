/**
 * @param {string} string
 * @return {boolean}
 */
//  Time: O(n) | Space: O(n)
var validPalindrome = function (string) {
  let start = 0;
  let end = string.length - 1;
  while (start < end) {
    if (string[start] != string[end]) {
      return isPalindrome(start + 1, end, string) || isPalindrome(start, end - 1, string);
    }
    start += 1;
    end -= 1;
  }
  return true;
};

function isPalindrome(start, end, string) {
  while (start < end) {
    if (string[start] != string[end]) {
      return false;
    }
    start += 1;
    end -= 1;
  }
  return true;
}
