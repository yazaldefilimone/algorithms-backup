import { it, expect, describe } from "vitest";
import { validParentheses } from "coding_interviews/leetcode/easy/valid-parentheses";

describe("valid Parentheses", () => {
  it("s=() ----->  true", () => {
    expect(validParentheses("()")).toBe(true);
  });
  it("s=()[]{} ----->  true", () => {
    expect(validParentheses("()[]{}")).toBe(true);
  });
  it("s=(] --->  false", () => {
    expect(validParentheses("(]")).toBe(false);
  });
  it("s=({[{}]})  --->  true", () => {
    expect(validParentheses("({[{}]})")).toBe(true);
  });
  it("s=){[{}]})  --->  false", () => {
    expect(validParentheses("){[{}]})")).toBe(false);
  });
});
