import { it, expect, describe } from "vitest";
import { groupAnagrams } from "../group-anagrams";
describe("group-anagrams", () => {
  it('strs = ["eat","tea","tan","ate","nat","bat"] ----> [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
    const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
    console.log(result);
    expect(JSON.stringify(result)).toEqual(JSON.stringify([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]));
  });

  it('strs = [""] ----> [[""]]', () => {
    expect(groupAnagrams([""])).toEqual([[""]]);
  });
  it('strs = ["a"] ----> [["a"]]', () => {
    expect(groupAnagrams(["a"])).toEqual([["a"]]);
  });
});
