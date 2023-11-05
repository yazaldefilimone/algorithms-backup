/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function linked_list_cycle_ii(head) {
  if (head == null || !head?.next) {
    return null;
  }
  if (!head?.next?.next) {
    return head.next.val === head.val ? head.next : null;
  }
  let current = head;
  while (current.next) {
    if (current.val === true) return current;
    current.val = true;
    if (current.next.val === true) return current.next;
    current = current.next;
  }
  return null;
}
