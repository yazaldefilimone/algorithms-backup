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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let nums = []
  inorderTraversalHalper(root, nums)
  return nums
};

function inorderTraversalHalper(node, nums) {

  let stack = []
  let current = node
  while (current || stack.length > 0) {
    while (current) {
      stack.push(current)
      current = current.left
    }
    current = stack.pop()
    nums.push(current.val)
    current = current.right
  }
  // inorderTraversalHalper(node.left, nums)
  // nums.push(node.val)
  // inorderTraversalHalper(node.right, nums)
}


function tests() {
  let root = {
    val: 1,
    left: null,
    right: {
      right: null,
      val: 2,
      left: {
        val: 3
      },
    }
  }
  let expected = [1, 3, 2]
  let result = inorderTraversal(root)
  console.log(result)
}
tests()