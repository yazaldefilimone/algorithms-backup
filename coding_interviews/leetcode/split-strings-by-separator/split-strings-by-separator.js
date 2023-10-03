/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */

// https://leetcode.com/problems/split-strings-by-separator/
// Time: O(n^2) || space: O(n)
const splitWordsBySeparator = function (words, separator) {
  const results = [];
  for (let index = 0; index < words.length; index++) {
    findSeparator(words[index], separator, results);
  }
  return results;
};

function findSeparator(word, separator, results = []) {
  let pointer = 0;
  let pastPointer = 0;
  while (pointer < word.length) {
    if (word[pointer] == separator) {
      const splitWord = word.slice(pastPointer, pointer);
      if (splitWord.trim()) {
        results.push(splitWord);
      }
      pastPointer = pointer + 1;
    }
    pointer++;
  }
  const splitWord = word.slice(pastPointer, pointer);
  if (splitWord.trim()) {
    results.push(splitWord);
  }
}
