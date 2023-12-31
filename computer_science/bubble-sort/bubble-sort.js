/**
 * @param {Array} list
 */
export function bubbleSort(list) {
  for (let index = list.length - 1; index > 0; index--) {
    for (let idx = 0; idx < index; idx++) {
      if (list[idx] > list[idx + 1]) {
        const temp = list[idx];
        list[idx] = list[idx + 1];
        list[idx + 1] = temp;
      }
    }
  }
  return list;
}
// [9,3,4,2,5,1]
