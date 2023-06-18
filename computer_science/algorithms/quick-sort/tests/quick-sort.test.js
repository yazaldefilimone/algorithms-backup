import { it, expect, describe } from "vitest";
import { quickSort } from "computer_science/algorithms/quick-sort/quick-sort";

describe("Quick Sort", () => {
  it("[4,6,1,7,3,2,5] ---> [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    const sorted = [4, 6, 1, 7, 3, 2, 5];
    quickSort(sorted);
    expect(sorted).toEqual([4, 6, 1, 7, 3, 2, 5].sort());
  });
  it("[6,3,4,2,5,1]  ---> [1,2,3,4,5,6]", () => {
    const sorted = [6, 3, 4, 2, 5, 1];
    quickSort(sorted);
    expect(sorted).toEqual([6, 3, 4, 2, 5, 1].sort());
  });
});
