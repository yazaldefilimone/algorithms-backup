import { it, expect, describe } from "vitest";
import { binary_search } from "./binary-search";

describe("computer-science/algorithms/searching/array/linear-search", () => {
  it("case #1, should true", () => {
    const hey_stack = [1, 2, 3, 4, 5];
    const target = 4;
    expect(binary_search(hey_stack, target)).toBe(true);
  });
  it("case #2, should false", () => {
    const hey_stack = [1, 2, 3, 4, 5];
    const target = 0;
    expect(binary_search(hey_stack, target)).toBe(false);
  });
});
