import { describe } from "vitest";
import { canJump } from "../jump-game";
describe("55. Jump Game", () => {
  it("[2,3,1,1,4] -----> true", () => {
    expect(canJump([2, 3, 1, 1, 4])).toEqual(true);
  });
  it("[3,2,1,0,4] -----> false", () => {
    expect(canJump([3, 2, 1, 0, 4])).toEqual(false);
  });
});
