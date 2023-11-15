/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const wordListSet = new Set(wordList.map((crr) => crr.split("").sort()));
  if (wordListSet.has(endWord)) return 0;

  for (const iterator of alphabet) {
    // for (let index = 0; index < beginWord.length; index++) {
    const element = beginWord.split("");
    // }
  }
};
"".split("").splice(0, 1, char).join("");

function isExist() {}
