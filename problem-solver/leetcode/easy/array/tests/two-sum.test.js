import { it, expect, describe } from "vitest";
import { twoSum } from "../two-sum";

describe("Two Sum", () => {
  it("nums=[2,7,11,15], target=9  ----> [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it("nums=[3,2,4], target=6  ----> [1,2]", () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it("nums=[3,3], target=6 ----> [0,1]", () => {
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
