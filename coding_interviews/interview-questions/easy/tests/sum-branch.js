// Complexity
// Time: O(n)
// Space: O(n)
export function branchSums(root) {
  let sums = [];
  calculateBranchSums(root, 0, sums);
  return sums;
}

function calculateBranchSums(node, runningSum, sums) {
  if (node == null) {
    return;
  }
  let newRunningSum = runningSum + node.value;

  if (node.left == null && node.right == null) {
    sums.push(newRunningSum);
    return;
  }

  calculateBranchSums(node.left, newRunningSum, sums);
  calculateBranchSums(node.right, newRunningSum, sums);
}
