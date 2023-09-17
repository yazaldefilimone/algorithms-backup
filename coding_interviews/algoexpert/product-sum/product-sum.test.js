import { it, expect, describe } from 'vitest'
import { productSum, productSumSecond } from './product-sum'

describe('productSum()', () => {
  it('should return 12 for [5, 2, [7, -1], 3, [6, [-13, 8], 4]]', () => {
    expect(productSum([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12)
    expect(productSumSecond([5, 2, [7, -1], 3, [6, [-13, 8], 4]])).toBe(12)
  })
  it('should return 600 for [[[[[5]]]]]', () => {
    expect(productSum([[[[[5]]]]])).toBe(600)
    expect(productSumSecond([[[[[5]]]]])).toBe(600)
  })
})