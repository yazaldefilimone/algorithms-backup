/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Complexity
// Time: O(n)
// Space: O(1)
export const moveZeroes = function (nums) {
  let start = 0;
  let last = 0;
  while (start < nums.length - 1) {
    if (nums[start] === 0) {
      let next = nums[start + 1];
      nums[start - last] = next;
      nums[start + 1] = 0;
      last = next == 0 ? last + 1 : last;
    }
    start++;
  }
};
