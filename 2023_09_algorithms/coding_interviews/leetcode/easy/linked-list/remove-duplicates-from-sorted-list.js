/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  let currentNode = head;
  while (currentNode) {
    if (currentNode.val == currentNode.next?.val) {
      let equal = currentNode;
      let nextCount = 0;
      while (equal != null && equal.val == equal.next?.val) {
        nextCount++;
        if (nextCount >= 2) {
          equal = equal.next;
        } else {
          equal = equal.next.next;
        }
      }
      currentNode.next = equal;
    }
    if (currentNode.val == currentNode.next?.val) {
      currentNode.next = currentNode.next.next;
    }

    currentNode = currentNode.next;
  }
  return head;
};
