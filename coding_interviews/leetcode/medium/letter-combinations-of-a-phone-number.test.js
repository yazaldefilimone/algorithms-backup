import { it, expect, describe } from 'vitest'
import { letterCombinationsPhoneNumber } from './letter-combinations-of-a-phone-number'

describe('letter-combinations-of-a-phone-number', () => {
  it('should return ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
    const result = letterCombinationsPhoneNumber('23')
    expect(result).toEqual(["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"])
  })

  it('should return []', () => {
    const result = letterCombinationsPhoneNumber('')
    expect(result).toEqual([])
  })


})