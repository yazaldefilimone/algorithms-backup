// Time complexity: O(n)  Space complexity: O(1) where n is the number of nodes in the linked list
export function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode) {
    let nextNode = currentNode.next;
    while (nextNode && nextNode.value === currentNode.value) {
      nextNode = nextNode.next;
    }
    currentNode.next = nextNode;
    currentNode = nextNode;
  }
  return linkedList;
}
