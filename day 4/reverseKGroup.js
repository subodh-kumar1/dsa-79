/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Reverses nodes of a linked list in groups of k.
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if (!head || k === 1) return head;

    // Helper to check if there are at least k nodes left
    function hasKNodes(node, k) {
        let count = 0;
        while (node && count < k) {
            node = node.next;
            count++;
        }
        return count === k;
    }

    // Helper to reverse k nodes
    function reverseK(head, k) {
        let prev = null, curr = head;
        while (k--) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return [prev, curr]; // prev is new head, curr is next group's head
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (hasKNodes(groupPrev.next, k)) {
        let groupStart = groupPrev.next;
        let [newGroupHead, nextGroupHead] = reverseK(groupStart, k);
        groupPrev.next = newGroupHead;
        groupStart.next = nextGroupHead;
        groupPrev = groupStart;
    }

    return dummy.next;
};

// Helper function to create a linked list from array (for testing)
function arrayToList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper function to convert linked list to array (for testing)
function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}

// Example usage:
// let head = arrayToList([1,2,3,4,5]);
// let k = 2;
// let newHead = reverseKGroup(head, k);
// console.log(listToArray(newHead)); // [2,1,4,3,5]