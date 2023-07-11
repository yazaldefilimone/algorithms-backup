import { it, expect, describe } from "vitest";
import { classPhotos } from "../class-photos";

describe("Class Photos", () => {
  it("Test Case #1", () => {
    const redShirtHeights = [5, 8, 1, 3, 4];
    const blueShirtHeights = [6, 9, 2, 4, 5];
    const expected = true;
    expect(classPhotos(redShirtHeights, blueShirtHeights)).toEqual(expected);
  });
  it("Test Case #2", () => {
    const redShirtHeights = [5, 4];
    const blueShirtHeights = [4, 5];
    const expected = false;
    expect(classPhotos(blueShirtHeights, redShirtHeights)).toEqual(expected);
  });
  it("Test Case #3", () => {
    const redShirtHeights = [5, 4];
    const blueShirtHeights = [5, 6];
    const expected = true;
    expect(classPhotos(blueShirtHeights, redShirtHeights)).toEqual(expected);
  });
  it("Test Case #3", () => {
    const redShirtHeights = [126];
    const blueShirtHeights = [126];
    const expected = false;
    expect(classPhotos(blueShirtHeights, redShirtHeights)).toEqual(expected);
  });
});
