/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// n=strs.length, k=strs[index].length
// Complexity: O(n + k + log k)
// memory: O(n k)
export const groupAnagrams = function (strs) {
  const group = {};
  for (let index = 0; index < strs.length; index++) {
    const word = strs[index];
    const key = word.split("").sort().join("");
    if (!group[key]) {
      group[key] = [];
    }
    group[key].push(word);
  }
  return Object.values(group).reverse();
};
