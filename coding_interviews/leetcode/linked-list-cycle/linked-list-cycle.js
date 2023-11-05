/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// Time: O(n)  || Space: O(1)
function linked_list_cycle(head) {
  if (head == null || !head?.next) {
    return false;
  }

  if (!head?.next?.next) {
    return head.next.val === head.val;
  }

  let current = head;
  while (current.next) {
    if (current.val === true) return true;
    current.val = true;
    current = current.next;
  }
  return false;
}
