/**
 *
 * @param {number[]} array
 * @returns
 */
function majorityElement(array) {
  let answer = array[0];
  let counter = 0;
  for (let index = 1; index < array.length; index++) {
    const current = array[index];
    if (answer === current) {
      counter++;
    } else {
      counter--;
    }
    if (counter === 0) {
      answer = current;
    }
  }
  return counter != 0 ? answer : -1;
}

// Do not edit the line below.
console.log(majorityElement([1, 2, 2, 7, 2, 2]));
