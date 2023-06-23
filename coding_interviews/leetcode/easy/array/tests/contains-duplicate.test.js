import { it, expect, describe } from "vitest";
import { containsDuplicate } from "..//contains-duplicate";

describe("Contains Duplicate", () => {
  it("[1,2,3,1]  ----> true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toEqual(true);
  });
  it("[1,2,3,4]  ----> false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toEqual(false);
  });
  it("[1,1,1,3,3,4,3,2,4,2]----> true", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toEqual(true);
  });
});
