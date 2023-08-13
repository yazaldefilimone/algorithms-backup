import { it, expect, describe } from 'vitest'
import { spiralTraverse, spiralTraverseRecursive } from "../spiral-traverse";

describe("spiral traverse", () => {
  it("should return a spiral array", () => {
    const array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    expect(spiralTraverse(array)).toEqual(expected);
  })
  it("should return a spiral array in recursive", () => {
    const array = [
      [1, 2, 3, 4],
      [12, 13, 14, 5],
      [11, 16, 15, 6],
      [10, 9, 8, 7],
    ];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    expect(spiralTraverseRecursive(array)).toEqual(expected);
  })
})