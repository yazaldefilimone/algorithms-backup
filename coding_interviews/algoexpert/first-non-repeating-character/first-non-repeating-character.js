/**
 *
 * @param {String} string
 * @returns {Number}
 */

//  Time: O(n) || O(1) = space (1) because is contains max  26 character in string
function firstNonRepeatingCharacter(string) {
  const table = new Map();
  for (let index = 0; index < string.length; index++) {
    const current = table.get(string[index]);
    table.set(string[index], current ? current + 1 : 1);
  }
  for (let index = 0; index < string.length; index++) {
    if (table.get(string[index]) === 1) {
      return index;
    }
  }
  return -1;
}
