/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function (s) {
  const opens = [];
  const symbol = { ")": "(", "]": "[", "}": "{" };
  for (let character of s) {
    switch (character) {
      case "(":
      case "{":
      case "[":
        opens.push(character);
        break;
      case ")":
      case "}":
      case "]":
        if (opens === 0 || opens.pop() !== symbol[character]) {
          return false;
        }
    }
  }

  return opens.length === 0;
};

console.log(isValid("(){}{()"));
