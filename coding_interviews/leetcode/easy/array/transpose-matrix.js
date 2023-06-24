/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

// Complexity
// Time: O(col * row)
// Space: O(col * row)
export const transposeMatrix = function (matrix) {
  let transposedMatrix = [];
  for (let col_index = 0; col_index < matrix[0].length; col_index++) {
    let newRow = [];
    for (let row_index = 0; row_index < matrix.length; row_index++) {
      newRow.push(matrix[row_index][col_index]);
    }
    transposedMatrix.push(newRow);
  }
  return transposedMatrix;
};
