/**
 * @param {string} parentheses
 * @return {boolean}
 */
export const validParentheses = function (parentheses) {
  const stack = [];
  const symbol = { "(": ")", "{": "}", "[": "]" };
  for (let index = 0; index < parentheses.length; index++) {
    let currentChar = parentheses[index];
    if (symbol[currentChar]) {
      stack.push(currentChar);
    } else if (symbol[stack.pop()] !== currentChar) {
      return false;
    }
  }
  return stack.length === 0;
};
