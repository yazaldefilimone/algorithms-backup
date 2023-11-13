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
//  runtime:70ms
function getIntersectionNode(headA, headB) {
  if (headA === headB) return headB;
  if (headA.next === headB) return headB;
  if (headB.next === headA) return headA;
  let _headA = headA;
  const table = new Map();
  while (_headA !== null) {
    table.set(_headA, true);
    if (_headA.next) table.set(_headA.next, true);
    if (_headA.next?.next) table.set(_headA.next?.next, true);
    if (_headA.next?.next?.next) table.set(_headA.next?.next?.next);
    _headA = _headA.next?.next?.next || null;
  }
  let _headB = headB;
  while (_headB !== null) {
    if (table.get(_headB)) return _headB;
    if (_headB.next && table.get(_headB.next)) return _headB.next;
    if (_headB.next?.next && table.get(_headB.next?.next)) return _headB.next?.next;
    if (_headB.next?.next?.next && table.get(_headB.next?.next?.next)) return _headB.next?.next?.next;
    _headB = _headB.next?.next?.next || null;
  }
  return null;
}
// 1 - 2 - 3 - 4 - 5 - 6
// 0 - 9 - 8 - 4 - 5 - 6
// runtime: 86ms
function getIntersectionNodeFirst(headA, headB) {
  if (headA === headB) return headB;
  if (headA.next === headB) return headB;
  if (headB.next === headA) return headA;
  let _headA = headA;
  const table = new Map();
  while (_headA !== null) {
    table.set(_headA, _headA);
    _headA = _headA.next;
  }
  let _headB = headB;
  while (_headB !== null) {
    const last = table.get(_headB);
    if (last) {
      return _headB;
    }
    _headB = _headB.next;
  }

  return null;
}
