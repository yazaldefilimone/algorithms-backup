import { it, expect, describe } from "vitest";
import { longestIncreasingSubsequence } from "../longest-increasing-subsequence";
describe("Longest Increasing Subsequence", () => {
  it("nums=[10,9,2,5,3,7,101,18] ----> 4", () => {
    const result = longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]);
    expect(result).toEqual(4);
  });
  it("nums=[0,1,0,3,2,3] ----> 4", () => {
    const result = longestIncreasingSubsequence([0, 1, 0, 3, 2, 3]);
    expect(result).toEqual(4);
  });
  it("nums=[7,7,7,7,7,7,7] ----> 1", () => {
    const result = longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7]);
    expect(result).toEqual(1);
  });
  it("nums=[1,3,6,7,9,4,10,5,6] ----> 6", () => {
    const result = longestIncreasingSubsequence([1, 3, 6, 7, 9, 4, 10, 5, 6]);
    expect(result).toEqual(6);
  });
});
