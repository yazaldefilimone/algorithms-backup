// Time: O(n) || Space: O(n)

function zeroSumSubarray(nums) {
  const subarraySets = new Set([0]);
  let currentSum = 0;
  for (const num of nums) {
    currentSum = num + currentSum;
    if (subarraySets.has(currentSum)) {
      return true;
    }
    subarraySets.add(currentSum);
  }
  return false;
}
