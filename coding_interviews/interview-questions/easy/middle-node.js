// Time complexity: O(n)  Space complexity: O(1) where n is the number of nodes in the linked list
export function middleNode(linkedList) {
  let currentNode = linkedList;
  let fastNode = linkedList;
  while (fastNode && fastNode.next) {
    currentNode = currentNode.next;
    fastNode = fastNode?.next?.next;
  }
  return currentNode;
}

// Time complexity: O(n)  Space complexity: O(1) where n is the number of nodes in the linked list
export function middleNode_second_solution(linkedList) {
  let currentNode = linkedList;
  let length = 0;
  while (currentNode) {
    length += 1;
    currentNode = currentNode.next;
  }
  let middle = linkedList;
  for (let index = 0; index < Math.floor(length / 2); index++) {
    middle = middle.next;
  }
  return middle;
}
