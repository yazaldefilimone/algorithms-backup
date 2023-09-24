import { it, expect, describe } from 'vitest'
import { singleNumber } from "./single-number";
describe('single-number', () => {
  it('should return 1 for [2,2,1]', () => {
    expect(singleNumber([2, 2, 1])).toBe(1)
  })

  it('should return 4 for [4,1,2,1,2]', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4)
  })

  it('should return 1 for [1]', () => {
    expect(singleNumber([1])).toBe(1)
  })
  it('should return 1 for [1,1,2]', () => {
    expect(singleNumber([1, 1, 2])).toBe(2)
  })

  it('should return 1 for [1,2,1]', () => {
    expect(singleNumber([1, 2, 1])).toBe(2)
  })

})