/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = function (matrix) {
  const spiral = [];
  let start_row = 0;
  let end_row = matrix.length - 1;
  let start_column = 0;
  let end_column = matrix[0].length - 1;

  while (start_row <= end_row && start_column <= end_column) {
    for (let column = start_column; column <= end_column; column++) {
      spiral.push(matrix[start_row][column]);
    }
    for (let row = start_row + 1; row <= end_row; row++) {
      spiral.push(matrix[row][end_column]);
    }
    for (let column = end_column - 1; column >= start_column; column--) {
      if (start_row === end_row) break;
      spiral.push(matrix[end_row][column]);
    }
    for (let row = end_row - 1; row > start_row; row--) {
      if (start_column === end_column) break;
      spiral.push(matrix[row][start_column]);
    }
    start_row++;
    end_row--;
    start_column++;
    end_column--;
  }
  return spiral
};