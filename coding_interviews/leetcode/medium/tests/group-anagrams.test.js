import { it, expect, describe } from "vitest";
import { groupAnagrams } from "../group-anagrams";
describe("group-anagrams", () => {
  it('strs = ["eat","tea","tan","ate","nat","bat"] ----> [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    expect(result.length).toEqual(3);
  });

  it('strs = [""] ----> [[""]]', () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });
  it('strs = ["a"] ----> [["a"]]', () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });
});
