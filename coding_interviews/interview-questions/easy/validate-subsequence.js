/**
 *
 * @param {Array<Number>} array
 * @param {Array<Number>} sequence
 * @returns {Boolean}
 */

// Complexity
// Time: O(n)
// Space: O(1)
export function isValidSubsequence(array, sequence) {
  let pointer_array = 0;
  let pointer_sequence = 0;

  while (pointer_array < array.length) {
    if (pointer_sequence == sequence.length) return true;
    if (array[pointer_array] == sequence[pointer_sequence]) {
      pointer_sequence++;
    }
    pointer_array++;
  }
  return pointer_sequence == sequence.length;
}

// Complexity
// Time: O(n)
// Space: O(1)
export function isValidSubsequence_second(array, sequence) {
  let pointer_sequence = 0;
  for (let value of array) {
    if (pointer_sequence == sequence.length) break;

    if (sequence[pointer_sequence] == value) {
      pointer_sequence += 1;
    }
  }
  return pointer_sequence == sequence.length;
}
