// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// Time: (n) | Space: O(n) | n = number of nodes
function evaluateExpressionTree(tree) {
  if (tree.value > 0) {
    return tree.value;
  }

  const right_value = evaluateExpressionTree(tree.right);
  const left_value = evaluateExpressionTree(tree.left);

  switch (tree.value) {
    case -1:
      return left_value + right_value;
    case -2:
      return left_value - right_value;
    case -3:
      return parseInt(left_value / right_value);
    default:
      return left_value * right_value;
  }
}
