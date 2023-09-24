import { it, expect, describe } from "vitest";
import { lengthOfLastWord } from "../ length-of-last-word";

describe("58. Length of Last Word", () => {
  it("s=Hello World --->  5", () => {
    const test = lengthOfLastWord("Hello World");
    expect(test).toEqual(5);
  });
  it("s=`   fly me   to   the moon   ` --->  4", () => {
    const test = lengthOfLastWord("   fly me   to   the moon   ");
    expect(test).toEqual(4);
  });
  it("s=luffy is still joyboy --->  6", () => {
    const test = lengthOfLastWord("luffy is still joyboy");
    expect(test).toEqual(6);
  });
  it("s=a --->  1", () => {
    const test = lengthOfLastWord("a");
    expect(test).toEqual(1);
  });
  it("s=`    day` --->  3", () => {
    const test = lengthOfLastWord("    day");
    expect(test).toEqual(3);
  });
});
