export function selectionSort(array) {
  let idx = 0;
  while (idx < array.length) {
    let smallest = idx
    for (let index = idx + 1; index < array.length; index++) {
      if (array[smallest] > array[index]) {
        smallest = index
        continue;
      }
    }
    swap(array, smallest, idx)
    idx++
  }
  return array;
}

function swap(array, swap_idx, current_test_idx) {
  let s = array[swap_idx];
  array[swap_idx] = array[current_test_idx];
  array[current_test_idx] = s
}
