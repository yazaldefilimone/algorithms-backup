// Time: O(n) || Space: O(n)

export function runLengthEncodingUsingArray(string) {
  const encodingStringCaracter = [];
  let currentRunLen = 1;
  let startPointer = 1;
  while (startPointer <= string.length) {
    const currentCaracter = string[startPointer];
    const previousCaracter = string[startPointer - 1];
    if (currentCaracter !== previousCaracter || currentRunLen === 9) {
      encodingStringCaracter.push(String(currentRunLen));
      encodingStringCaracter.push(String(previousCaracter));
      currentRunLen = 0;
    }
    currentRunLen++;
    startPointer++;
  }
  return encodingStringCaracter.join("");
}
// Time: O(n) || Space: O(n)
export function runLengthEncoding(string) {
  let encodingStringCaracter = "";
  let currentRunLen = 1;
  let startPointer = 1;
  while (startPointer <= string.length) {
    const currentCaracter = string[startPointer];
    const previousCaracter = string[startPointer - 1];
    if (currentCaracter !== previousCaracter || currentRunLen === 9) {
      const pattern = String(currentRunLen) + previousCaracter;
      encodingStringCaracter += pattern;
      currentRunLen = 0;
    }
    currentRunLen++;
    startPointer++;
  }
  return encodingStringCaracter;
}
