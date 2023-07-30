
// Time: O(n) | Space: O(1) - where n is the length of the array
export function moveElementToEnd(array, toMove) {
  let right = array.length - 1;
  let left = 0;
  while (left < right) {
    if (array[left] == toMove && array[right] !== toMove) {
      let store = array[left];
      array[left] = array[right]
      array[right] = store;
      right -= 1;
      left += 1;
      continue;
    }
    if (array[left] == toMove && array[right] == toMove) {
      right -= 1;
      continue;
    }
    if (array[left] !== toMove) {
      left += 1
      continue;
    }

    right -= 1;
    left += 1;
  }

  return array
}