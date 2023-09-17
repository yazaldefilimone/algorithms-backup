// Time:(n) | Space: O(h) - h is the height of the tree
function nodeDepths(root) {
  const stack = [{ node: root, depth: 0 }];
  let total = 0;
  while (stack.length > 0) {
    const current = stack.pop();
    if (current.node == null) {
      continue;
    }
    let { node, depth } = current;
    total += depth;
    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }
  return total;
}
//  Time:(n) | Space: O(h) - h is the height of the tree
function nodeDepths_recursion(root, depth = 0) {
  if (root == null) {
    return 0;
  }
  return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
}
