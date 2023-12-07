// O(n * m) Time || O(c)  Space

function commonCharacters(strings) {
  if (strings.length === 1) {
    return [strings[0]];
  }
  if (strings.length === 0) {
    return [];
  }
  const table = new Map();
  const patternsInSets = strings.map((pattern) => new Set(pattern));
  for (const pattern of patternsInSets) {
    incrementCommonCharacter(pattern, table);
  }
  return getCommonByLenOfStrings(strings.length, table);
}

function incrementCommonCharacter(pattern, table) {
  pattern.forEach((element) => {
    let currentValue = table.get(element);
    table.set(element, currentValue ? currentValue + 1 : 1);
  });
}

function getCommonByLenOfStrings(max, table) {
  const values = [];
  for (const [key, value] of table) {
    if (value === max) {
      values.push(key);
    }
  }
  return values;
}

// O(n * m) Time || O(1)  Space

function commonCharactersUsingPotencialCommon(strings) {
  const smallString = getSmallString(strings);
  const potencialCommonCharacter = new Set(smallString);
  for (const currentString of strings) {
    removeNonsexistCharacter(currentString, potencialCommonCharacter);
  }

  return Array.from(potencialCommonCharacter);
}

function getSmallString(strings) {
  let current = strings[0];
  for (let index = 1; index < strings.length; index++) {
    if (strings[index].length < current.length) {
      current = strings[index];
    }
  }
  return current;
}

function removeNonsexistCharacter(currentString, potencialCommonCharacter) {
  const uniqueCharacters = new Set(currentString);
  for (const potencialCharacter of Array.from(potencialCommonCharacter)) {
    if (!uniqueCharacters.has(potencialCharacter)) {
      potencialCommonCharacter.delete(potencialCharacter);
    }
  }
}
