/**
 * @param {number} numRows
 * @return {number[][]}
 */

function pascalTriangle(numRows) {
  if (numRows == 1) {
    return [[1]];
  }
  let triangle = [[1], [1, 1]];
  if (numRows == 2) {
    return triangle;
  }
  for (let index = 2; index < numRows; index++) {
    let last = index - 1;
    const current = triangle[last];
    let idx = 0;
    const row = [1];
    while (idx < current.length) {
      let next = idx + 1;
      if (next >= current.length) {
        break;
      }
      let sum = current[next] + current[idx];
      row.push(sum);
      idx += 1;
    }
    row.push(1);
    triangle.push(row);
  }
  return triangle;
}
console.log(pascalTriangle(5));
