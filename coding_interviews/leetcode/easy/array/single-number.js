/**
 * @param {number[]} nums
 * @return {number}
 */

// Time: O(n) | Space: O(1) | n = length of nums
export function singleNumber(nums) {
  let unique = 0;
  for (const num of nums) {
    unique = unique ^ num
  }
  return unique
};