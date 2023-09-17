/**
 * @param {Array<Number>} array
 * @param {Number} first_index
 * @param {Number} second_index
 */

function swap(array, first_index, second_index) {
  let temp = array[first_index];
  array[first_index] = array[second_index];
  array[second_index] = temp;
}

/**
 * @param {Array<Number>} array
 * @param {Number} pivot_index
 * @param {Number} end_index
 */
function pivot(array, pivot_index = 0, end_index = array.length - 1) {
  let swap_index = pivot_index;
  for (let index = pivot_index + 1; index <= end_index; index++) {
    if (array[index] < array[pivot_index]) {
      swap_index++;
      swap(array, swap_index, index);
    }
  }
  swap(array, pivot_index, swap_index);
  return swap_index;
}

/**
 * @param {Array<Number>} array
 * @param {Number} left
 * @param {Number} right
 * @returns {Array<Number>}
 */

export function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) return;
  let pivot_index = pivot(array, left, right);
  quickSort(array, left, pivot_index - 1);
  quickSort(array, pivot_index + 1, right);
}
