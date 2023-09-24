import { it, expect, describe } from "vitest";
import { isSubsequence } from "coding_interviews/leetcode/easy/strings/is-subsequence";

describe("Is Subsequence", () => {
  it("s=abc t=ahbgdc --->  true", () => {
    const test = isSubsequence("abc", "ahbgdc");
    expect(test).toEqual(true);
  });
  it("s=axc, t=ahbgdc --->  false", () => {
    const test = isSubsequence("axc", "ahbgdc");
    expect(test).toEqual(false);
  });
  it("s=a, t=c --->  false", () => {
    const test = isSubsequence("a", "c");
    expect(test).toEqual(false);
  });
  it("s=acb, t=ahbgdc --->  false", () => {
    const test = isSubsequence("acb", "ahbgdc");
    expect(test).toEqual(false);
  });
});
