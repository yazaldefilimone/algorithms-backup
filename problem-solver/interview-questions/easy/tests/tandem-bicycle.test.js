import { it, describe, expect } from "vitest";
import { tandemBicycle, tandemBicycle_second_solution } from "../tandem-bicycle";

describe("tandemBicycle", () => {
  it("should return 32", () => {
    const redShirtSpeeds = [5, 5, 3, 9, 2];
    const blueShirtSpeeds = [3, 6, 7, 2, 1];
    const fastest = true;
    const expected = 32;
    const actual = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
    const actual_second = tandemBicycle_second_solution(redShirtSpeeds, blueShirtSpeeds, fastest);
    expect(actual).toBe(expected);
    expect(actual_second).toBe(expected);
  });
  it("should return 25", () => {
    const redShirtSpeeds = [5, 5, 3, 9, 2];
    const blueShirtSpeeds = [3, 6, 7, 2, 1];
    const fastest = false;
    const expected = 25;
    const actual = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
    const actual_second = tandemBicycle_second_solution(redShirtSpeeds, blueShirtSpeeds, fastest);
    expect(actual).toBe(expected);
    expect(actual_second).toBe(expected);
  });
  it("should return 4", () => {
    const redShirtSpeeds = [1, 1, 1, 1];
    const blueShirtSpeeds = [1, 1, 1, 1];
    const fastest = false;
    const expected = 4;
    const actual = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
    const actual_second = tandemBicycle_second_solution(redShirtSpeeds, blueShirtSpeeds, fastest);
    expect(actual).toBe(expected);
    expect(actual_second).toBe(expected);
  });
  it("should return 21", () => {
    const redShirtSpeeds = [1, 2, 3, 4, 5];
    const blueShirtSpeeds = [5, 4, 3, 2, 1];
    const fastest = true;
    const expected = 21;
    const actual = tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest);
    const actual_second = tandemBicycle_second_solution(redShirtSpeeds, blueShirtSpeeds, fastest);
    expect(actual).toBe(expected);
    expect(actual_second).toBe(expected);
  });
});
