/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// Time: O(n) || Space: O(1)
var reverseString = function (s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};
