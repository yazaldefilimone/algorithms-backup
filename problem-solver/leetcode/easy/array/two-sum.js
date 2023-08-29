/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums, target) {
  let hash = {};
  for (let index = 0; index < nums.length; index++) {
    let value = nums[index];
    let sum = target - value;
    if (hash[sum] !== undefined) {
      return [hash[sum], index];
    } else {
      hash[value] = index;
    }
  }
  return [];
};
