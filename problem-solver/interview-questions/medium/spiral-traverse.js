//  Time: O(n) | Space: O(n)
export function spiralTraverse(array) {
  const spiral = [];
  let start_row = 0;
  let end_row = array.length - 1;
  let start_column = 0;
  let end_column = array[0].length - 1;

  while (start_row <= end_row && start_column <= end_column) {
    for (let column = start_column; column <= end_column; column++) {
      spiral.push(array[start_row][column]);
    }
    for (let row = start_row + 1; row <= end_row; row++) {
      spiral.push(array[row][end_column]);
    }
    for (let column = end_column - 1; column >= start_column; column--) {
      if (start_row === end_row) break;
      spiral.push(array[end_row][column]);
    }
    for (let row = end_row - 1; row > start_row; row--) {
      if (start_column === end_column) break;
      spiral.push(array[row][start_column]);
    }
    start_row++;
    end_row--;
    start_column++;
    end_column--;
  }
  return spiral
}


//  Recursive solution
//  Time: O(n) | Space: O(n)
export function spiralTraverseRecursive(array) {
  const result = [];
  spiralFill(array, 0, array[0].length - 1, 0, array.length - 1, result)
  return result
}

function spiralFill(array, start_col, end_col, start_row, end_row, result) {
  if (start_row > end_row || start_col > end_col) {
    return
  }
  for (let column = start_col; column <= end_col; column++) {
    result.push(array[start_row][column]);
  }
  for (let row = start_row + 1; row <= end_row; row++) {
    result.push(array[row][end_col]);
  }
  for (let column = end_col - 1; column >= start_col; column--) {
    if (start_row === end_row) return;
    result.push(array[end_row][column]);
  }
  for (let row = end_row - 1; row > start_row; row--) {
    if (start_col === end_col) return;
    result.push(array[row][start_col]);
  }

  return spiralFill(array, start_col + 1, end_col - 1, start_row + 1, end_row - 1, result)

}