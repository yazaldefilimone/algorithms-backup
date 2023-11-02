// https://leetcode.com/problems/minimum-depth-of-binary-tree/
// Time: O(n) || Space: O(n)
function minimum_depth_of_binary_tree(root) {
  if (!root) {
    return 0;
  }
  const queue = [[root, 1]];
  while (queue.length > 0) {
    const [currentNode, depth] = queue.shift();
    if (!currentNode.left && !currentNode.right) {
      return depth;
    }
    if (currentNode.left) {
      queue.push([currentNode.left, depth + 1]);
    }
    if (currentNode.right) {
      queue.push([currentNode.right, depth + 1]);
    }
  }
}
