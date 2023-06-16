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
export const middleOfTheLinkedList = function (head) {
  let slow = head;
  let fast = head;
  while (slow.next && fast?.next?.next) {
    slow = slow.next;
    fast = fast?.next?.next;
  }
  if (fast.next === null) {
    return slow;
  }
  return slow.next;
};
