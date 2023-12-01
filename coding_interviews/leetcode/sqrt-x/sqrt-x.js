/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let right = x;
  let left = 0;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let sqrt = middle * middle;
    if (sqrt > x) {
      right = middle - 1;
      continue;
    }
    if (sqrt < x) {
      left = middle + 1;
      continue;
    }
    return middle;
  }
  return right;
};
