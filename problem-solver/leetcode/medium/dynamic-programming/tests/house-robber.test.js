import { it, expect, describe } from "vitest";
import { houseRobber } from "../house-robber";
describe("group-anagrams", () => {
  it("[1,2,3,1] ----> 4", () => {
    const result = houseRobber([1, 2, 3, 1]);
    expect(result).toEqual(4);
  });

  it("[2,7,9,3,1]  ----> 12", () => {
    expect(houseRobber([2, 7, 9, 3, 1])).toEqual(12);
  });
  it("[1] ----> 1", () => {
    expect(houseRobber([1])).toEqual(1);
  });
  it("[] ----> 0", () => {
    expect(houseRobber([])).toEqual(0);
  });
});
