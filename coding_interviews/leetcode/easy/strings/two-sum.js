/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const t = nums[index];
    nums[index] = null;
    const i = nums.indexOf(target - t);
    if (i !== -1 && i !== index) return [index, i];
  }
};
