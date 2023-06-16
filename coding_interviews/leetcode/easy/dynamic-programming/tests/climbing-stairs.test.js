import { it, expect, describe } from "vitest";
import { climbStairs } from "coding_interviews/leetcode/easy/dynamic-programming/climbing-stairs";

describe("Valid Anagram", () => {
  it("n=2 ------> 2", () => {
    expect(climbStairs(2)).toBe(2);
  });
  it("n=3 ------> 3", () => {
    expect(climbStairs(3)).toBe(3);
  });
  it("n=5 ------> 8", () => {
    expect(climbStairs(5)).toBe(8);
  });
  it("n=7 ------> 21", () => {
    expect(climbStairs(7)).toBe(21);
  });
});
