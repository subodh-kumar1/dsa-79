// Definition for singly-linked list node.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * Finds the intersection node of two singly linked lists.
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode|null}
 */
function getIntersectionNode(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA;
    let pB = headB;

    // Traverse both lists. When one pointer reaches the end, redirect it to the head of the other list.
    // If the lists intersect, the pointers will meet at the intersection node after at most 2 passes.
    // If not, both will be null at the end.
    while (pA !== pB) {
        pA = pA ? pA.next : headB;
        pB = pB ? pB.next : headA;
    }

    return pA; // Can be the intersection node or null
}

module.exports = { ListNode, getIntersectionNode };