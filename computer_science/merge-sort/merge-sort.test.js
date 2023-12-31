import { it, expect, describe } from "vitest";
import { merge, mergeSort } from "~/2023_09_algorithms/computer_science/algorithms/merge-sort/merge-sort";

describe("merge Sort", () => {
  it("merge: [1, 3, 7, 8], [2, 4, 5, 6] ---> [1, 2, 3, 4, 5, 6, 7, 8]", () => {
    let myArray1 = [1, 3, 7, 8];
    let myArray2 = [2, 4, 5, 6];
    const sorted = merge(myArray1, myArray2);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
  it("merge: [6,3,4,2,5,1]  ---> [1,2,3,4,5,6]", () => {
    const sorted = mergeSort([6, 3, 4, 2, 5, 1]);
    expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
