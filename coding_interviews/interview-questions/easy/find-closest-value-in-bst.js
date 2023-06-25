/**
 * Definition for singly-linked list.
 * class BST {
 *  constructor(value) {
 *  this.value = value;
 *  this.left = null;
 *  this.right = null;
 *  }
 * }
 */
/**
 * @param {BST} tree
 * @param {ListNode} target
 * @return {Number}
 */
// Complexity
// Time: O(log n)
// Space: O(1)
function findClosestValueInBst(tree, target) {
  return findClosestValueInBstHelper(tree, target, Infinity);
}

function findClosestValueInBstHelper(tree, target, closest) {
  let currentNode = tree;
  while (currentNode !== null) {
    if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
      closest = currentNode.value;
    }
    if (target < currentNode.value) {
      currentNode = currentNode.left;
    } else if (target > currentNode.value) {
      currentNode = currentNode.right;
    } else {
      break;
    }
  }
  return closest;
}

// -------- Second Solution ---------
// Complexity
// Time: O(log n)
// Space: O(log n)
function findClosestValueInBst_Recursive(tree, target) {
  return findClosestValueInBst_RecursiveHelper(tree, target, Infinity);
}

function findClosestValueInBst_RecursiveHelper(tree, target, closest) {
  if (tree == null) {
    return closest;
  }

  if (Math.abs(target - closest) > Math.abs(target - tree.value)) {
    closest = tree.value;
  }

  if (target < tree.value) {
    return findClosestValueInBstHelper(tree.left, target, closest);
  } else if (target > tree.value) {
    return findClosestValueInBstHelper(tree.right, target, closest);
  } else {
    return closest;
  }
}
