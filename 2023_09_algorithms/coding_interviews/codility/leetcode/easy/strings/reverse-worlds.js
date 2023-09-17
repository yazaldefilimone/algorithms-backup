/**
 * @param {string} s
 * @return {string}
 */
// time: O(n * m) where n is the number of words and m is the length of the word
// Space: O(n) where n is the number of words
export const reverseWordsString = function (s) {
  let arr = s.split(" ");
  let result = ''
  for (const iterator of arr) {
    for (let index = iterator.length - 1; index > -1; index--) {
      result += iterator[index];
    }
    result += " "
  }
  return result.trimEnd()
};

// time: O(n * m) where n is the number of words and m is the length of the word
// Space: O(n) where n is the number of words
export const reverseWordsArray = function (s) {
  let arr = s.split(" ");
  let result = []
  for (const iterator of arr) {
    for (let index = iterator.length - 1; index > -1; index--) {
      result.push(iterator[index]);
    }
    result.push(" ");
  }
  return result.join("").trimEnd()
};