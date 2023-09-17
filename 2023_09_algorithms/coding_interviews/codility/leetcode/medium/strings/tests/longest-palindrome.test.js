import { describe, expect, it } from "vitest";
import { longestPalindrome } from "../longest-palindrome";

describe("Longest Palindrome", () => {
  it("a return a", () => {
    expect(longestPalindrome("a")).toBe("a");
  });
  it("aba return aba", () => {
    expect(longestPalindrome("aba")).toBe("aba");
  });
  it("babad return bab or ba", () => {
    expect(longestPalindrome("babad")).toBe("bab");
  });
});
