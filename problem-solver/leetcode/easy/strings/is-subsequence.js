/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// Complexity
// Time: O(n)
// Space: O(1)
export const isSubsequence = function (s, t) {
  if (s.length == 0) return true;
  let s_pointer = 0;
  let t_pointer = 0;
  while (t_pointer < t.length && s_pointer < s.length) {
    if (s_pointer == s.length) break;
    if (t[t_pointer] == s[s_pointer]) {
      s_pointer += 1;
    }
    t_pointer += 1;
  }

  return s_pointer == s.length;
};
