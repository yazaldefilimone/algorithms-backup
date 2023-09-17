import { it, expect, describe } from "vitest";
import { selectionSort } from "./selection-sort";

describe("Selection Sort", () => {
  it("[6,3,4,2,5,1] ---> [1,2,3,4,5,6]", () => {
    const sorted = selectionSort([6, 3, 4, 2, 5, 1]);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
