import { it, expect, describe } from "vitest";
import { transposeMatrix } from "../transpose-matrix";

describe("Transpose Matrix", () => {
  it("matrix=[[1]];  ----> [[1]]", () => {
    let matrix = [[1]];
    expect(transposeMatrix(matrix)).toEqual([[1]]);
  });
  it("matrix=[[1, 4],[2, 5],[3, 6]];  ----> [[1, 2, 3], [4, 5, 6]]", () => {
    let matrix = [
      [1, 4],
      [2, 5],
      [3, 6],
    ];
    expect(transposeMatrix(matrix)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
    ]);
  });
  it("matrix=[[5, 6, 3, -3, 12],[-3, 6, 5, 2, -1],[0, 0, 3, 12, 3]];  ----> [[5, -3, 0],[6, 6, 0],[3, 5, 3],[-3, 2, 12],[12, -1, 3],]", () => {
    let matrix = [
      [5, 6, 3, -3, 12],
      [-3, 6, 5, 2, -1],
      [0, 0, 3, 12, 3],
    ];

    expect(transposeMatrix(matrix)).toEqual([
      [5, -3, 0],
      [6, 6, 0],
      [3, 5, 3],
      [-3, 2, 12],
      [12, -1, 3],
    ]);
  });
});
