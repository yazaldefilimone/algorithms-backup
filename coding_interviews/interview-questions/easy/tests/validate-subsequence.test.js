import { it, expect, describe } from "vitest";
import {
  isValidSubsequence,
  isValidSubsequence_second,
} from "~/coding_interviews/interview-questions/easy/validate-subsequence";

describe("Is ValidSubsequence", () => {
  it("array=[5, 1, 22, 25, 6, -1, 8, 10], sequence=[1, 6, -1, 10]  ------> true", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBe(true);
  });
  it("array=[5, 1, 22, 25, 6, -1, 8, 10], sequence=[5, 1, 22, 25, 6, -1, 8, 10] ------> true", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])).toBe(true);
  });
  it("array=[5, 1, 22, 25, 6, -1, 8, 10], sequence=[26]  ------> false", () => {
    expect(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [26])).toBe(false);
  });
});

describe("Is ValidSubsequence Second Solution", () => {
  it("array=[5, 1, 22, 25, 6, -1, 8, 10], sequence=[1, 6, -1, 10]  ------> true", () => {
    expect(isValidSubsequence_second([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])).toBe(true);
  });
  it("array=[5, 1, 22, 25, 6, -1, 8, 10], sequence=[5, 1, 22, 25, 6, -1, 8, 10] ------> true", () => {
    expect(isValidSubsequence_second([5, 1, 22, 25, 6, -1, 8, 10], [5, 1, 22, 25, 6, -1, 8, 10])).toBe(true);
  });
  it("array=[5, 1, 22, 25, 6, -1, 8, 10], sequence=[26]  ------> false", () => {
    expect(isValidSubsequence_second([5, 1, 22, 25, 6, -1, 8, 10], [26])).toBe(false);
  });
});
