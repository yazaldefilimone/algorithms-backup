import { it, expect, describe } from 'vitest'
import { findThreeLargestNumbers, findThreeLargestNumbersBetter } from "./find-three-largest-numbers";

describe('Find Three Largest Numbers', () => {
  it('Test #1', () => {
    const array = [141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]
    const expected = [18, 141, 541]
    expect(findThreeLargestNumbers(array)).toEqual(expected)
    expect(findThreeLargestNumbersBetter(array)).toEqual(expected)
  })
  it('Test #2', () => {
    const array = [55, 7, 8]
    const expected = [7, 8, 55]
    expect(findThreeLargestNumbers(array)).toEqual(expected)
    expect(findThreeLargestNumbersBetter(array)).toEqual(expected)
  })
  it('Test #3', () => {
    const array = [-1, -2, -3, -7, -17, -27, -18, -541, -8, -7, 7]
    const expected = [-2, -1, 7]
    expect(findThreeLargestNumbers(array)).toEqual(expected)
    expect(findThreeLargestNumbersBetter(array)).toEqual(expected)
  })
})