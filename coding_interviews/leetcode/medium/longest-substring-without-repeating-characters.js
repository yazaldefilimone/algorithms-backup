/**
 * @param {string} str
 * @return {number}
 */

// Time: O(n)
// Space: O(min(m, n))
export function longestSubstringWithoutRepeatingCharacters(str) {
  let window = {};
  let longest = 0;
  let windowStart = 0;
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (window[element] >= windowStart) {
      windowStart = window[element] + 1;
    }
    window[element] = index;
    longest = Math.max(longest, index - windowStart + 1);
  }

  return longest;
}
