import { it, expect, describe } from "vitest";
import { linear_search_array } from "../linear-search";

describe("computer-science/algorithms/searching/array/linear-search", () => {
  it("case #1, should true", () => {
    const hey_stack = [1, 2, 3, 4, 5];
    const target = 4;
    expect(linear_search_array(hey_stack, target)).toBe(true);
  });
  it("case #2, should false", () => {
    const hey_stack = [1, 2, 3, 4, 5];
    const target = 0;
    expect(linear_search_array(hey_stack, target)).toBe(false);
  });
});
