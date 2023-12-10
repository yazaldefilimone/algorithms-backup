/**
 *
 * @param {String[]} words
 * @returns {String[][]}
 */

// Time: O(n * m) || Space: O(n * m) = n (len of words) m (len of words[i])
function semordnilap(words) {
  const wordSets = new Set(words);
  const pairs = [];
  let index = 0;
  while (index < words.length && wordSets.size > 1) {
    const currentWord = words[index];
    const reverse = currentWord.split("").reverse().join("");
    if (wordSets.has(reverse) && reverse !== currentWord) {
      wordSets.delete(currentWord);
      wordSets.delete(reverse);
      pairs.push([currentWord, reverse]);
    }
    index++;
  }
  return pairs;
}

console.log(semordnilap(["desserts", "dog", "god", "test", "stressed"]));
