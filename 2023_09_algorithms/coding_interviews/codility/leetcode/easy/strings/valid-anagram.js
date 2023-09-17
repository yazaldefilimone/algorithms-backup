/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Complexity: O(n)
// Space: O(1)
export const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const sCharsCounts = {};

  for (let index = 0; index < s.length; index++) {
    const element = s[index];
    sCharsCounts[element] = sCharsCounts[element] + 1 || 1;
  }

  for (let index = 0; index < t.length; index++) {
    const element = t[index];
    if (!sCharsCounts[element]) {
      return false;
    } else {
      sCharsCounts[element]--;
    }
  }
  return true;
};
