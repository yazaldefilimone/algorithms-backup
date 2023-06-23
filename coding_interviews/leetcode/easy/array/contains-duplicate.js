/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function (nums) {
  if (nums.length <= 1) return false;
  let hash = {};
  for (let index = 0; index < nums.length; index++) {
    if (hash[nums[index]]) {
      return true;
    } else {
      hash[nums[index]] = true;
    }
  }
  return false;
};
