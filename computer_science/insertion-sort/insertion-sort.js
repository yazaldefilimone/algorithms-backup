/**
 * @param {Array} list
 */
export function insertionSort(list) {
  let temp;
  for (let index = 1; index < list.length; index++) {
    temp = list[index];
    for (var idx = index - 1; list[idx] > temp && idx > -1; idx--) {
      list[idx + 1] = list[idx];
    }
    list[idx + 1] = temp;
  }
  return list;
}
