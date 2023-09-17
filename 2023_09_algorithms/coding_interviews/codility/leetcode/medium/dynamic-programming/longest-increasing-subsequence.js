export function longestIncreasingSubsequence(nums) {
  if (nums.length == 0) return 0;

  let dpSubsequence = new Array(nums.length).fill(1);
  let maxFar = 1;
  for (let rootIndex = 1; rootIndex < nums.length; rootIndex++) {
    for (let childIndex = 0; childIndex < rootIndex; childIndex++) {
      if (nums[rootIndex] > nums[childIndex]) {
        dpSubsequence[rootIndex] = Math.max(dpSubsequence[childIndex] + 1, dpSubsequence[rootIndex]);
      }
    }
    maxFar = Math.max(maxFar, dpSubsequence[rootIndex]);
  }

  return maxFar;
}
