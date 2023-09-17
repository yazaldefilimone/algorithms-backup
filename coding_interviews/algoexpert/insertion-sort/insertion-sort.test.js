import { it, expect, describe } from 'vitest'
import { insertionSortRefactor } from "./insertion-sort";

describe('insertion-sort', () => {
  it('should sort the array', () => {
    expect(insertionSortRefactor([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
  it('should sort the array', () => {
    expect(insertionSortRefactor([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9])
  })
})