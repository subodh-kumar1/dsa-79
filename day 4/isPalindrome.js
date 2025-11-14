/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
function isPalindrome(head) {
    if (!head || !head.next) return true;

    // Find the middle of the linked list
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half
    let prev = null, curr = slow;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }

    // Compare first and second half
    let first = head, second = prev;
    while (second) {
        if (first.val !== second.val) return false;
        first = first.next;
        second = second.next;
    }
    return true;
}


// Time Complexity: O(N)
// Space Complexity: O(1)