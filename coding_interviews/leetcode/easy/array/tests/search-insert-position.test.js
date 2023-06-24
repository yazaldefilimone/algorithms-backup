import { it, expect, describe } from "vitest";
import { searchInsertPosition } from "../search-insert-position";

describe("move zeroes", () => {
  it("nums=[1,3,5,6], target=5  ----> 2", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 5)).toEqual(2);
  });
  it("nums=[1,3,5,6], target=2  ----> 1", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 2)).toEqual(1);
  });
  it("nums=[1,3,5,6], target=7  ----> 4", () => {
    expect(searchInsertPosition([1, 3, 5, 6], 7)).toEqual(4);
  });
  it("nums=[1,3], target=2  ----> 1", () => {
    expect(searchInsertPosition([1, 3], 2)).toEqual(1);
  });
  it("nums=[1], target=1  ----> 1", () => {
    expect(searchInsertPosition([1], 1)).toEqual(0);
  });
  it("nums=[1,3], target=3  ----> 1", () => {
    expect(searchInsertPosition([1, 3], 3)).toEqual(1);
  });
  it("nums=[1,3,5], target=4  ----> 2", () => {
    expect(searchInsertPosition([1, 3, 5], 4)).toEqual(2);
  });
  it("nums=[2,5], target=1  ----> 0", () => {
    expect(searchInsertPosition([2, 5], 1)).toEqual(0);
  });
  it("nums=[-1,3,5,6], target=0  ----> 1", () => {
    expect(searchInsertPosition([-1, 3, 5, 6], 0)).toEqual(1);
  });
  it("nums=[-1,3,5,6], target=0  ----> 1", () => {
    expect(searchInsertPosition([-1, 3, 5, 6], 0)).toEqual(1);
  });
});
