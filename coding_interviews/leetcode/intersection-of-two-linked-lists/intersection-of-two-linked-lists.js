/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
function getIntersectionNodePref(headA, headB) {
  let _headA = headA;
  let _headB = headB;
  while (_headA !== _headB) {
    if (_headA == null) {
      _headA = headB;
    } else {
      _headA = _headA.next;
    }
    if (_headB == null) {
      _headB = headA;
    } else {
      _headB = _headB.next;
    }
  }
  return _headA;
}
