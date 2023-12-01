/**
 * @param {number} x
 * @return {number}
 */

//  Time: O(log n) || Space: O(1) || 61ms runtime || 42.67 MB
function square_root_binary_search(x) {
  if (x === 1 || x === 0 || x === 2) return 1;
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
}

/**
 * @param {number} x
 * @return {number}
 */
//  Time: O(log n) || Space: O(1) || 50ms runtime || 43.96 MB
function square_root_binary_search_newton(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let guess = x / 2;
  while (true) {
    const newGuess = (guess + x / guess) / 2;
    if (Math.abs(newGuess - guess) < 1) {
      return Math.floor(newGuess);
    }
    guess = newGuess;
  }
}
