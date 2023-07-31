import { it, expect, describe } from 'vitest'
import { isMonotonic } from "../monotonic-array";

describe('monotonic-array', () => {
  it('should return true', () => {
    expect(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -1102, -9001])).toBe(true)
  })
  it('should return true ', () => {
    expect(isMonotonic([])).toBe(true)
  })
  it('should return true', () => {
    expect(isMonotonic([1])).toBe(true)
  })
  it('should return true', () => {
    expect(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11])).toBe(true)
  })
  it('should return true', () => {
    expect(isMonotonic([-1, -1, -2, -3, -4, -5, -5, -5, -6, -7, -8, -8, -9, -10, -11])).toBe(true)
  })
  it('should return false', () => {
    expect(isMonotonic([1, 2, -1, -2, -5])).toBe(false)
  })
  it('should return false ', () => {
    expect(isMonotonic([2, 2, 2, 1, 4, 5])).toBe(false)
  })
  it('should return false', () => {
    expect(isMonotonic([1, 2, 3, 3, 2, 1])).toBe(false)
  })
  it('should return false', () => {
    expect(isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -9001])).toBe(false)
  })
  it('should return false ', () => {
    expect(isMonotonic([1, 2, 0])).toBe(false)
  })
})