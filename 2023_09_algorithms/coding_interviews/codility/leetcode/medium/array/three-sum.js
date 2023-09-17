/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time: (n^2) | Space: O(n)
export const threeSum = function (nums) {
  let targetSum = 0;
  nums.sort((a, b) => a - b);
  let triplets = [];
  let table = {};
  for (let index = 0; index < nums.length; index++) {
    let left = index + 1;
    let right = nums.length - 1;

    while (left < right) {
      let currentSum = nums[index] + nums[left] + nums[right];
      if (currentSum === targetSum) {
        let keyTable = `${nums[index]}+${nums[left]}+${nums[right]}`;
        if (!table[keyTable]) {
          table[keyTable] = true;
          triplets.push([nums[index], nums[left], nums[right]]);
        }
        right -= 1;
        left += 1;
      }

      if (currentSum > targetSum) {
        right -= 1;
      }

      if (currentSum < targetSum) {
        left += 1;
      }
    }
  }

  return triplets;
};
