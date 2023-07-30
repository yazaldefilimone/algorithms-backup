import { it, expect, describe } from 'vitest'

import { moveElementToEnd } from './move-element-to-end.js'

describe('moveElementToEnd', () => {
  it('should move of 2 to the end of the array', () => {
    const array = [2, 1, 2, 2, 2, 3, 4, 2];
    const toMove = 2;
    const expected = [4, 1, 3, 2, 2, 2, 2, 2];
    const result = moveElementToEnd(array, toMove);
    expect(result.length).toEqual(array.length)
    expect(result).toEqual(expected)
  })
  it('should move of 1 to the end of the array', () => {
    const array = [1, 2, 4, 5, 6];
    const toMove = 1;
    const expected = [6, 2, 4, 5, 1];
    const result = moveElementToEnd(array, toMove);
    expect(result.length).toEqual(array.length)
    expect(result).toEqual(expected)
  })
  it('should move of 3 to the end of the array', () => {
    const array = [1, 2, 4, 5, 6];
    const toMove = 3;
    const expected = [1, 2, 4, 5, 6];
    const result = moveElementToEnd(array, toMove);
    expect(result.length).toEqual(array.length)
    expect(result).toEqual(expected)
  })

  it('should move of 3 to the end of the array', () => {
    const array = [1, 2, 4, 5, 6, 3];
    const toMove = 3;
    const expected = [1, 2, 4, 5, 6, 3];
    const result = moveElementToEnd(array, toMove);
    expect(result.length).toEqual(array.length)
    expect(result).toEqual(expected)
  })

})