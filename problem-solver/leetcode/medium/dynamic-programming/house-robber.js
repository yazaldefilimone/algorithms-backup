/**
 * @param {number[]} nums
 * @return {number}
 */
// Complexity
// Time: O(n)
// Space: O(n)
export const houseRobber = function (nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  let maxLoot = [nums[0], Math.max(nums[0], nums[1])];

  for (let index = 2; index < nums.length; index++) {
    maxLoot.push(Math.max(nums[index] + maxLoot[index - 2], maxLoot[index - 1]));
  }

  return maxLoot.pop();
};
