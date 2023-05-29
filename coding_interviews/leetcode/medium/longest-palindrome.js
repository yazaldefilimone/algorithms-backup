/**
 * @param {string} str
 * @return {string}
 */
export function longestPalindrome(str) {
  let startIndex = 0;
  let maxLength = 1;

  function expandAroundMiddle(left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      const currentPalindrome = right - left + 1;
      if (currentPalindrome > maxLength) {
        maxLength = currentPalindrome;
        startIndex = left;
      }
      left -= 1;
      right += 1;
    }
  }

  for (let index = 0; index < str.length; index++) {
    expandAroundMiddle(index - 1, index + 1);
    expandAroundMiddle(index, index + 1);
  }
  return str.slice(startIndex, startIndex + maxLength);
}
