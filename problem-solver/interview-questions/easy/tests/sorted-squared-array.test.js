import { it, expect, describe } from "vitest";
import { sortedSquaredArray } from "~/coding_interviews/interview-questions/easy/sorted-squared-array";

describe("Sorted Squared Array", () => {
  it("array=[1, 2, 3, 5, 6, 8, 9]  ------> [1, 4, 9, 25, 36, 64, 81]", () => {
    expect(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9])).toEqual([1, 4, 9, 25, 36, 64, 81]);
  });
  it("array=[-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20] ------> [0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500]", () => {
    expect(sortedSquaredArray([-50, -13, -2, -1, 0, 0, 1, 1, 2, 3, 19, 20])).toEqual([
      0, 0, 1, 1, 1, 4, 4, 9, 169, 361, 400, 2500,
    ]);
  });

  it("array=[1, 2, 3, 4, 5]  ------> [1, 4, 9, 16, 25]", () => {
    expect(sortedSquaredArray([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
  });
});

// describe("Sorted Squared Array Second Solution", () => {
//   it("array=[5, 1, 22, 25, 6, -1, 8, 10]  ------> true", () => {
//     expect(sortedSquaredArray_second([5, 1, 22, 25, 6, -1, 8, 10])).toEqual(true);
//   });
//   it("array=[5, 1, 22, 25, 6, -1, 8, 10] ------> true", () => {
//     expect(sortedSquaredArray_second([5, 1, 22, 25, 6, -1, 8, 10])).toEqual(true);
//   });
//   it("array=[5, 1, 22, 25, 6, -1, 8, 10]  ------> false", () => {
//     expect(sortedSquaredArray_second([5, 1, 22, 25, 6, -1, 8, 10]).toEqual(false);
//   });
// });
