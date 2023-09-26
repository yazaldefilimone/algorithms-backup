/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
// https://leetcode.com/problems/path-sum

// Time: O(n) || Space: O(n)
var hasPathSum = function (root, targetSum) {
  return walk(root, targetSum, 0)
};

function walk(root, target, sum) {
  if (!root) return false
  if (!root.left && !root.right) return sum + root.val == target;
  return walk(root.left, target, sum + root.val) || walk(root.right, target, sum + root.val)
}
