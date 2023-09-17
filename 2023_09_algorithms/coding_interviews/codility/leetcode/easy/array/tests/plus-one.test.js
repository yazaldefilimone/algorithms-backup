import { it, expect, describe } from "vitest";
import { plusOne } from "../plus-one";

describe("66. Plus One", () => {
  it("digits=[1,2,3] --->  [1,2,4]", () => {
    const test = plusOne([1, 2, 3]);
    expect(test).toEqual([1, 2, 4]);
  });
  it("digits=[4,3,2,1] --->  [4,3,2,2]", () => {
    const test = plusOne([4, 3, 2, 1]);
    expect(test).toEqual([4, 3, 2, 2]);
  });
  it("digits=[9] --->  [1,0]", () => {
    const test = plusOne([9]);
    expect(test).toEqual([1, 0]);
  });
  it("digits=[2] --->  [3]", () => {
    const test = plusOne([2]);
    expect(test).toEqual([3]);
  });
  it("digits=[] --->  []", () => {
    const test = plusOne([]);
    expect(test).toEqual([]);
  });
  it("digits=[9,9] --->  [1,0,0]", () => {
    const test = plusOne([9, 9]);
    expect(test).toEqual([1, 0, 0]);
  });
});
