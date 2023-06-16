import { it, expect, describe } from "vitest";
import { removeElement } from "coding_interviews/leetcode/easy/strings/remove-element";

describe("Valid Anagram", () => {
  it("nums=[3,2,2,3] val:3 --->  [2,2]", () => {
    const nums = [3, 2, 2, 3];
    const test = removeElement(nums, 3);
    expect(nums).toEqual([2, 2]);
    expect(test).toEqual([2, 2].length);
  });
  it("nums=[0,1,2,2,3,0,4,2], val:2 --->  [0,1,3,0,4]", () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const test = removeElement(nums, 2);
    expect(nums).toEqual([0, 1, 3, 0, 4]);
    expect(test).toEqual([0, 1, 3, 0, 4].length);
  });
});
