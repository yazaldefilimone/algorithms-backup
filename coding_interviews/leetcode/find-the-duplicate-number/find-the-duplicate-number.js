/**
 * @param {number[]} nums
 * @return {number}
 */

//  Time: O(n) || Space: O(1)
var findDuplicate = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    const abs = Math.abs(nums[index]);
    if (nums[abs - 1] < 0) {
      return abs;
    }
    nums[abs - 1] *= -1;
  }
  return -1;
};
