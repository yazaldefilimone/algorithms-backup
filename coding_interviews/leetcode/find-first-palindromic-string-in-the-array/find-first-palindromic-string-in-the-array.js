/**
 * @param {string[]} words
 * @return {string}
 */


// https://leetcode.com/problems/find-first-palindromic-string-in-the-array/
// Time complexity: O(n^2) where n is the length of the array
// Space complexity: O(1)
var firstPalindrome = function (words) {
  for (let index = 0; index < words.length; index++) {
    if (isPalindrome(words[index])) {
      return words[index]
    }
  }
  return ''
};
function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] != str[right]) {
      return false
    }
    left++
    right--
  }
  return true
}