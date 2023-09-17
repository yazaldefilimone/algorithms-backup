import { it, expect, describe } from 'vitest'
import { canBeEqual } from "./can-be-equal";
describe('canBeEqual', () => {
  it("test case 1", () => {
    let s1 = "abc", s2 = "bca"
    expect(canBeEqual(s1, s2)).toBe(true);
  })
  it("test case 2", () => {
    let s1 = "abcd", s2 = "dacb"
    expect(canBeEqual(s1, s2)).toBe(false);
  }
  )
})