import { it, expect, describe } from "vitest";
import { isAnagram } from "coding_interviews/leetcode/easy/strings/valid-anagram";

describe("Valid Anagram", () => {
  it("s=anagram, t=nagaram --->  true", () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });
  it("s=rat, t=car --->  false", () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
  it("s='', t='' --->  false", () => {
    expect(isAnagram("", "")).toBe(true);
  });
  it("s='aacc', t='ccac' --->  false", () => {
    expect(isAnagram("aacc", "ccac")).toBe(false);
  });
  it("s='ccac', t='aacc' --->  false", () => {
    expect(isAnagram("ccac", "aacc")).toBe(false);
  });
});
