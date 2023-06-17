import { it, expect, describe } from "vitest";
import { twoNumberSum } from "coding_interviews/algo/two-number-sum";

describe("twoNumberSum", () => {
  it("array=[-7, -5, -3, -1, 0, 1, 3, 5, 7], target=-5  ------> [-5, 0]", () => {
    expect(twoNumberSum([-7, -5, -3, -1, 0, 1, 3, 5, 7], -5)?.sort()).toEqual([-5, 0].sort());
  });
  it("array=[3, 5, -4, 8, 11, 1, -1, 6], target=15 ------> []", () => {
    expect(twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 15)).toEqual([]);
  });
  it("array=[4, 6, 1], target=5 ------> [4,1]", () => {
    expect(twoNumberSum([4, 6, 1], 5)?.sort()).toEqual([4, 1].sort());
  });
});
