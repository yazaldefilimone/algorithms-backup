/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

export const searchInsertPosition = function (nums, target) {
  let left = 0;
  let right = nums.length;
  if (nums[left] === target || target < nums[left]) return 0;
  if (target > nums[right - 1]) return right;
  if (target == nums[right - 1]) return right - 1;
  let lastSep = "";

  let mid = Math.floor(nums.length / 2);
  while (mid < right && mid > left) {
    if (nums[mid] === target) return mid;

    if (nums[mid] > target) {
      if (lastSep == "right") {
        return mid;
      }
      lastSep = "left";
      mid--;
    }

    if (nums[mid] < target) {
      if (lastSep == "left") {
        return mid + 1;
      }
      lastSep = "right";
      mid++;
    }
  }
};
