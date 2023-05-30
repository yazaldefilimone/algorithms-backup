import { describe, expect, it } from "vitest";
import { longestSubstringWithoutRepeatingCharacters } from "../longest-substring-without-repeating-characters";

describe("Longest Substring Without Repeating Characters", () => {
  it("abcabcbb return 3", () => {
    expect(longestSubstringWithoutRepeatingCharacters("abcabcbb")).toBe(3);
  });
  it("bbbbb return 1", () => {
    expect(longestSubstringWithoutRepeatingCharacters("bbbbb")).toBe(1);
  });
  it("pwwkew return 3", () => {
    expect(longestSubstringWithoutRepeatingCharacters("pwwkew")).toBe(3);
  });
  it("dvdf return 3", () => {
    expect(longestSubstringWithoutRepeatingCharacters("dvdf")).toBe(3);
  });
});
