import { it, expect, describe } from "vitest";
import { findTheIndexOfTheFirstOccurrenceInAString } from "coding_interviews/leetcode/easy/find-the-index-of-the-first-occurrence-in-a-string";

describe("Find the Index of the First Occurrence in a String", () => {
  it("haystack=sadbutsad, needle=sad ---> 0", () => {
    const result = findTheIndexOfTheFirstOccurrenceInAString("sadbutsad", "sad");
    expect(result).toBe(0);
  });

  it("haystack=bustasad, needle=sad ---> 0", () => {
    const result = findTheIndexOfTheFirstOccurrenceInAString("bustasad", "sad");
    expect(result).toBe(5);
  });

  it("haystack=leetcode, needle=leeto ---> -1", () => {
    const result = findTheIndexOfTheFirstOccurrenceInAString("leetcode", "leeto");
    expect(result).toBe(-1);
  });
  it("haystack=leet needle=leet ---> 0", () => {
    const result = findTheIndexOfTheFirstOccurrenceInAString("leet", "leet");
    expect(result).toBe(0);
  });
  it("haystack=mississippi needle=issip ---> 4", () => {
    const result = findTheIndexOfTheFirstOccurrenceInAString("mississippi", "issip");
    expect(result).toBe(4);
  });
});
