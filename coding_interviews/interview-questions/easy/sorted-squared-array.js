/**
 *
 * @param {Array<Number>} array
 * @returns {Array<Number>}
 */

// Best Solution
// Complexity
// Time: O(n)
// Space: O(n)
export function sortedSquaredArray(array) {
  let sortedSquared = Array(array.length).fill(0);
  let small_pointer = 0;
  let large_pointer = array.length - 1;
  for (let index = array.length - 1; index >= 0; index--) {
    let small_value = Math.abs(array[small_pointer]);
    let large_value = Math.abs(array[large_pointer]);
    if (small_value > large_value) {
      sortedSquared[index] = small_value * small_value;
      small_pointer += 1;
    } else {
      sortedSquared[index] = large_value * large_value;
      large_pointer -= 1;
    }
  }
  return sortedSquared;
}

// Second Solution
// Complexity
// Time: O(n + log n)
// Space: O(n)
export function sortedSquaredArray_second(array) {
  let sortedSquared = Array(array.length).fill(0);
  for (let index = 0; index < array.length; index++) {
    const element = Math.abs(array[index]);
    sortedSquared[index] = element * element;
  }
  return sortedSquared.sort((a, b) => a - b);
}
