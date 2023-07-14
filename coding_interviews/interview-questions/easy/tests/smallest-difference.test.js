import { it, expect, describe } from "vitest";
import { smallestDifference } from "../smallest-difference.js";

describe("Smallest Difference", () => {
  it("should return the smallest difference between two arrays", () => {
    const arrayOne = [-1, 5, 10, 20, 28, 3];
    const arrayTwo = [26, 134, 135, 15, 17];
    expect(smallestDifference(arrayOne, arrayTwo)).toEqual([28, 26]);
  });
  it("should return the smallest difference between two arrays", () => {
    const arrayOne = [-1, 5, 10, 20, 3];
    const arrayTwo = [26, 134, 135, 15, 17];
    expect(smallestDifference(arrayOne, arrayTwo)).toEqual([20, 17]);
  });
});
