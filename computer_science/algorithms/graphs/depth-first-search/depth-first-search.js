export function depthFirstSearch(root) {
  let results = [];
  function traverse(currentNode) {
    results.push(currentNode?.value);
    if (currentNode.left) traverse(currentNode.left);
    if (currentNode.right) traverse(currentNode.right);
  }
  traverse(root);
  return results;
}
