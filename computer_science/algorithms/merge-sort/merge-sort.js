/**
 *
 * @param {Array<Number>} first_list
 * @param {Array<Number>} second_list
 * @return {Array<Number>}
 */

export function merge(first_list, second_list) {
  let combined = [];
  let first_idx = 0;
  let second_idx = 0;

  while (first_idx < first_list.length && second_idx < second_list.length) {
    if (first_list[first_idx] < second_list[second_idx]) {
      combined.push(first_list[first_idx]);
      first_idx++;
    } else {
      combined.push(second_list[second_idx]);
      second_idx++;
    }
  }

  while (first_idx < first_list.length) {
    combined.push(first_list[first_idx]);
    first_idx++;
  }

  while (second_idx < second_list.length) {
    combined.push(second_list[second_idx]);
    second_idx++;
  }
  return combined;
}

/**
 *
 * @param {Array<number>} list
 * @return {Array<number>}
 */
// Time: O(n + log n)
// Space: O(n)
export function mergeSort(list) {
  if (list.length === 1) return list;
  let mid = Math.floor(list.length / 2);
  let left = list.slice(0, mid);
  let right = list.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
