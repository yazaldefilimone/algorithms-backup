import { it, expect, describe } from "vitest";
import { isPalindrome } from "../valid-palindrome.js";
describe("Valid Palindrome", () => {
  it("should return true if the string is a valid palindrome", () => {
    const tests = [
      {
        string: "aba",
        expected: true,
      },
      {
        string: "abba",
        expected: true,
      },
      {
        string: '"A man, a plan, a canal: Panama"',
        expected: true,
      },
      {
        string: '"race a car"',
        expected: false,
      },
      {
        string: "  ",
        expected: true,
      },
    ];
    tests.forEach((test) => {
      expect(isPalindrome(test.string)).toEqual(test.expected);
    });
  });
});
