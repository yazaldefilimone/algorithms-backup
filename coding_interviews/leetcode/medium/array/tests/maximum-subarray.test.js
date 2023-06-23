import { it, expect, describe } from "vitest";
import { maximumSubArray } from "../maximum-subarray";
describe("Maximum SubArray", () => {
  it("[-2,1,-3,4,-1,2,1,-5,4] ----> 6", () => {
    const result = maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
    expect(result).toEqual(6);
  });
  it("[1] ----> 1", () => {
    expect(maximumSubArray([1])).toEqual(1);
  });
  it("[5,4,-1,7,8] ----> 23", () => {
    expect(maximumSubArray([5, 4, -1, 7, 8])).toEqual(23);
  });
});
