import { it, expect, describe } from "vitest";
import { insertionSort } from "./insertion-sort";

describe("Insertion Sort", () => {
  it("[6,3,4,2,5,1] ---> [1,2,3,4,5,6]", () => {
    const sorted = insertionSort([6, 3, 4, 2, 5, 1]);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
