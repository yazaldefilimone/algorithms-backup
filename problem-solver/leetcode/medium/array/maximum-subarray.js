/**
 * @param {number[]} nums
 * @return {number}
 */
export const maximumSubArray = function (nums) {
  let maxSum = nums[0]; // initialize maximum sum as the first element
  let currentSum = nums[0]; // initialize current sum as the first element
  for (let i = 1; i < nums.length; i++) {
    // calculate the maximum of current element and current element + current sum
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // update the maximum sum if current sum is greater
    maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
};
