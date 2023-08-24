import { it, expect, describe } from 'vitest'
import { mergeSortedArray } from '../merge-sorted-array.js'

describe('Merge Sorted Array', () => {
  it('nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6] n =3 ----> [1,2,2,3,5,6]', () => {
    const expected = [1, 2, 2, 3, 5, 6]
    let list_one = [1, 2, 3, 0, 0, 0]
    mergeSortedArray(list_one, 3, [2, 5, 6], 3)
    expect(list_one).toEqual(expected)
  })
  it('nums1 = [1], m = 1, nums2 = [], n = 0 ----> [1]', () => {
    const expected = [1]
    let list_one = [1]
    const merged = mergeSortedArray(list_one, 1, [], 0)
    expect(list_one).toEqual(expected)
  })
  it('nums1 = [0], m = 0, nums2 = [1], n = 1 ----> [1]', () => {
    const expected = [1]
    let list_one = [0]
    const merged = mergeSortedArray(list_one, 0, [1], 1)
    expect(list_one).toEqual(expected)
  })
})