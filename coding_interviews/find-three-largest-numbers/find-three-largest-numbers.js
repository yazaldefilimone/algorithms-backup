// Time: O(log(n) + n) | Space: O(1)
function findThreeLargestNumbers(array) {
  return array.sort((a, b) => a - b).slice(-3)
}
