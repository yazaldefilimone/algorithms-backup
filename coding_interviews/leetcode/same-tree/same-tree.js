/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

// https://leetcode.com/problems/same-tree/
var isSameTree = function (p, q) {
  const cache = new Map();
  cache.set(p);
  if (cache.has(q)) {
    return true;
  }
  let left = [];
  let right = [];
  walk(p, left, null);
  walk(q, right, left.length);
  if (left.length !== right.length) return false;
  return left.join() === right.join();
};

function walk(root, curr, max) {
  if (!root) {
    curr.push("_");
    return;
  }
  // pref
  if (max && curr.length > max) {
    return;
  }
  curr.push(root.val);
  if (!root.left && !root.right) {
    return;
  }
  walk(root.right, curr, max);
  walk(root.left, curr, max);
}
