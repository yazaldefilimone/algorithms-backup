import { selectionSort } from "./selection-sort";


describe('selection-sort', () => {
  it('Test #1', () => {
    expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3])
  })
  it('Test #2', () => {
    expect(selectionSort([2, 1, 3])).toEqual([1, 2, 3])
  })

  it('Test #3', () => {
    expect(selectionSort([10, 30, 21, 3, 2])).toEqual([2, 3, 10, 21, 30])
  })
  it('Test #4', () => {
    expect(selectionSort([8, 5, 2, 9, 5, 6, 3])).toEqual([2, 3, 5, 5, 6, 8, 9])
  })
})