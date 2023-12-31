import { it, expect, describe } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("Bubble Sort", () => {
  it("[6,3,4,2,5,1] ---> [1,2,3,4,5,6]", () => {
    const sorted = bubbleSort([6, 3, 4, 2, 5, 1]);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
