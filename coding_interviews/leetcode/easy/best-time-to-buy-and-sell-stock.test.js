
import { it, expect, describe } from 'vitest'

import maxProfit from './best-time-to-buy-and-sell-stock'
describe('maxProfit', () => {
  it('should return 5', () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5)
  })
  it('should return 0', () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0)
  })
})