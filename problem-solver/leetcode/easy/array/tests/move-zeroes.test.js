import { it, expect, describe } from "vitest";
import { moveZeroes } from "../move-zeroes";

describe("move zeroes", () => {
  it("[0, 1, 0, 3, 12];  ----> [1, 3, 12, 0, 0]", () => {
    let test_array = [0, 1, 0, 3, 12];
    moveZeroes(test_array);
    expect(test_array).toEqual([1, 3, 12, 0, 0]);
  });
  it("[0]  ----> [0]", () => {
    let test_array = [0];
    moveZeroes(test_array);
    expect(test_array).toEqual([0]);
  });
  it("[0,0,1]  ----> [1,0,0]", () => {
    let test_array = [0, 0, 1];
    moveZeroes(test_array);
    expect(test_array).toEqual([1, 0, 0]);
  });
});
