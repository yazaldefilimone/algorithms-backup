/**
 *
 * @param {number[]} array
 * @returns
 */
// Time: O(n) || Space: (1)
function majorityElement(array) {
  let answer = array[0];
  let counter = 1;
  for (let index = 1; index < array.length; index++) {
    const current = array[index];
    if (counter === 0) {
      answer = current;
    }
    if (answer === current) {
      counter++;
    } else {
      counter--;
    }
  }
  return answer;
}

/**
 *
 * @param {number[]} array
 * @returns
 */
// Time: O(n) || Space: (1)
function majorityElementSecond(array) {
  let answer = 0;
  for (let currentBit = 0; currentBit < 32; currentBit++) {
    const currentBitValue = 1 << currentBit;
    let onesCount = 0;

    for (let num of array) {
      if ((num & currentBitValue) != 0) {
        onesCount += 1;
      }
    }

    if (onesCount > array.length / 2) {
      answer += currentBitValue;
    }
  }

  return answer;
}
// Do not edit the line below.
