/**
 * @param {string} s
 * @return {string[]}
 */

export const letterCasePermutation = function (s) {
  const solution = [];
  function letterCasePermutationHelper(str, index, current) {
    if (index == str.length) {
      solution.push(current);
      return;
    }
    if (isNaN(Number(str[index]))) {
      let upperCase = str[index].toUpperCase();
      let lowerCase = str[index].toLowerCase();
      letterCasePermutationHelper(str, index + 1, current + upperCase);
      letterCasePermutationHelper(str, index + 1, current + lowerCase);
    } else {
      letterCasePermutationHelper(str, index + 1, current + str[index]);
    }
  }

  letterCasePermutationHelper(s, 0, "");
  return solution;
};
