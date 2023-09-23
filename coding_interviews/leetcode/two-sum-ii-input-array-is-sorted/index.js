// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

// Time: O(n) Space: O(1)
var twoSum = function (numbers, target) {
  // Optimization
  if (numbers.length < 2) return []
  if (numbers.length == 2) {
    if (numbers[0] + numbers[1] == target) {
      return [1, 2]
    } else {
      return []
    }
  }
  // Solution without optimization
  let left = 0;
  let right = numbers.length - 1
  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum > target) {
      right--
    } else if (sum < target) {
      left++
    } else {
      return [left + 1, right + 1]
    }
  }
  return []
};