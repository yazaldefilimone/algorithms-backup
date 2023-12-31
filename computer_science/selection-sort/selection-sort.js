/**
 * @param { Array } list
 */

export function selectionSort(list) {
  let minimum;
  for (let index = 0; index < list.length - 1; index++) {
    minimum = index;
    for (let idx = index + 1; idx < list.length; idx++) {
      if (list[idx] < list[minimum]) {
        minimum = idx;
      }
    }
    if (minimum !== index) {
      let temp = list[minimum];
      list[minimum] = list[index];
      list[index] = temp;
    }
  }
  return list;
}
