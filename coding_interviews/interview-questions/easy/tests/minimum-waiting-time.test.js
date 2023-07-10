import { it, expect, describe } from "vitest";
import { minimumWaitingTime } from "../minimum-waiting-time";

describe("Depth first search", () => {
  it("Test Case #1", () => {
    const queries = [3, 2, 1, 2, 6];
    const expected = 17;
    const actual = minimumWaitingTime(queries);
    expect(actual).toEqual(expected);
  });

  it("Test Case #2", () => {
    const queries = [7, 9, 2, 3];
    const expected = 19;
    const actual = minimumWaitingTime(queries);
    expect(actual).toEqual(expected);
  });
  it("Test Case #2", () => {
    const queries = [1, 1, 1, 4, 5, 6, 8, 1, 1, 2, 1];
    const expected = 81;
    const actual = minimumWaitingTime(queries);
    expect(actual).toEqual(expected);
  });
});
