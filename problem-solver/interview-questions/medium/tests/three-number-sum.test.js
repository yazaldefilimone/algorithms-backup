import { it, expect, describe } from "vitest";
import { threeNumberSum } from "~/coding_interviews/interview-questions/medium/three-number-sum";

describe("Sorted Squared Array", () => {
  it("array=[12, 3, 1, 2, -6, 5, -8, 6], target=0  ------> [[-8, 2, 6],[-8, 3, 5],[-6, 1, 5]]", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, -8, 6], 0)).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 1, 5],
    ]);
  });
  it("array=[1, 2, 3], target=7  ------> []", () => {
    expect(threeNumberSum([1, 2, 3], 7)).toEqual([]);
  });
  it("array=[1, 2, 3, 4, 5, 6, 7, 8, 9, 15], target=32  ------> [[8, 9, 15]]", () => {
    expect(threeNumberSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 15], 32)).toEqual([[8, 9, 15]]);
  });
  it("array=[12, 3, 1, 2, -6, 5, 0, -8, -1, 6], target=0  ------> [[-8, 2, 6],[-8, 3, 5],[-6, 0, 6],[-6, 1, 5],[-1, 0, 1]]", () => {
    expect(threeNumberSum([12, 3, 1, 2, -6, 5, 0, -8, -1, 6], 0)).toEqual([
      [-8, 2, 6],
      [-8, 3, 5],
      [-6, 0, 6],
      [-6, 1, 5],
      [-1, 0, 1],
    ]);
  });
});
