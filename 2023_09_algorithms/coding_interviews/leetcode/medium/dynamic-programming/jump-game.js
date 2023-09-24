/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const canJump = function (nums) {
  let dep = new Array(nums.length).fill(false);
  dep[0] = true;
  for (let index = 1; index < nums.length; index++) {
    for (let nest_index = 0; nest_index < index; nest_index++) {
      if (dep[nest_index] && nest_index + nums[nest_index] >= index) {
        dep[index] = true;
      }
    }
  }
  return dep[dep.length - 1];
};
