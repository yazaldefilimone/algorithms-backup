/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (currentString) {
  const tableSymbols = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    CM: 900,
    CD: 400,
    XC: 90,
    XL: 40,
    IV: 4,
    IX: 9,
  };

  let index = 0;
  let result = 0;
  while (index < currentString.length) {
    const character = currentString[index];
    const pastCharacter = currentString[index + 1];
    const two = character + pastCharacter;
    const current = tableSymbols[two];
    if (current) {
      result += current;
      index += 2;
      continue;
    }
    const charNum = tableSymbols[character];
    if (charNum) {
      result += charNum;
    }
    index += 1;
  }

  return result;
};

console.log(romanToInt("MCMXCIV"));
