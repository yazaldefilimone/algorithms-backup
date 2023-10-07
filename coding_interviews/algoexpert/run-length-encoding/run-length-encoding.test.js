import { it, expect, describe } from "vitest";
import { runLengthEncoding, runLengthEncodingUsingArray } from "./run-length-encoding";
describe("run-length-encoding", () => {
  it("case #1", () => {
    const string = "AAAAAAAAAAAAABBCCCCDD";
    const expected = "9A4A2B4C2D";
    expect(runLengthEncoding(string)).toEqual(expected);
    expect(runLengthEncodingUsingArray(string)).toEqual(expected);
  });
  it("case #2", () => {
    const string = "aA";
    const expected = "1a1A";
    expect(runLengthEncoding(string)).toEqual(expected);
    expect(runLengthEncodingUsingArray(string)).toEqual(expected);
  });
  it("case #3", () => {
    const string = "************^^^^^^^$$$$$$%%%%%%%!!!!!!AAAAAAAAAAAAAAAAAAAA";
    const expected = "9*3*7^6$7%6!9A9A2A";
    expect(runLengthEncoding(string)).toEqual(expected);
    expect(runLengthEncodingUsingArray(string)).toEqual(expected);
  });
  it("case #3", () => {
    const string = "1A2BB3CCC4DDDD";
    const expected = "111A122B133C144D";
    expect(runLengthEncoding(string)).toEqual(expected);
    expect(runLengthEncodingUsingArray(string)).toEqual(expected);
  });
});
