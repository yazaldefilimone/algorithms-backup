import { it, expect, describe } from 'vitest'
import { spiralOrder } from "../spiral-matrix";

describe("Spiral Matrix", () => {
  it('test #01', () => {
    const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    const expected = [1, 2, 3, 6, 9, 8, 7, 4, 5]
    expect(spiralOrder(matrix)).toEqual(expected)

  })
  it('test #02', () => {
    const matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
    const expected = [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]
    expect(spiralOrder(matrix)).toEqual(expected)
  })
})