/**
 *
 * @param {String} characters
 * @param {String} document
 * @returns {Boolean}
 */

// Time: O(c + d) || Space (c) =  n = characters, d = document
function generateDocument(characters, document) {
  const charactersTable = new Map();
  for (let character of characters) {
    const current = charactersTable.get(character);
    charactersTable.set(character, current ? current + 1 : 1);
  }

  for (let character of document) {
    const current = charactersTable.get(character);
    if (current > 1) {
      charactersTable.set(character, current - 1);
    } else if (current == 1) {
      charactersTable.delete(character);
    } else {
      return false;
    }
  }
  return true;
}
