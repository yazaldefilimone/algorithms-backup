/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
//  Time complexity: O(n log k) where k is the number of linked lists.
export function merge_k_sorted_lists(lists) {
  if (lists.length == 0) {
    return null
  }
  let main = lists[0];
  for (let index = 1; index < lists.length; index++) {
    main = mergeTowLists(main, lists[index]);
  }
  return main;
}

function mergeTowLists(left, right) {
  if (!left || !right) return left ?? right;
  if (left.val < right.val) {
    left.next = mergeTowLists(left.next, right);
    return left;
  } else {
    right.next = mergeTowLists(right.next, left);
    return right;
  }
}
