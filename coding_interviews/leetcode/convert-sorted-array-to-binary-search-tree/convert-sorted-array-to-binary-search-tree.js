/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// Time: O(n) | Space: O(n)
var sortedArrayToBST = function (nums) {
  return walk(nums, 0, nums.length - 1);
};
function walk(nums, start, end) {
  if (start > end) return null;
  const middle = Math.ceil((start + end) / 2);
  const root = new TreeNode(nums[middle]);
  root.left = walk(nums, start, middle - 1);
  root.right = walk(nums, middle + 1, end);
  return root;
}
