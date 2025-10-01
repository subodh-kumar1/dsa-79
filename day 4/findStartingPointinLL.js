// Definition for singly-linked list node.
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Detects the starting node of a loop in a singly linked list.
 * @param {ListNode} head
 * @return {ListNode|null}
 */
function detectCycle(head) {
    let slow = head;
    let fast = head;

    // Step 1: Detect if a cycle exists
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // Cycle detected
            break;
        }
    }

    // No cycle
    if (!fast || !fast.next) {
        return null;
    }

    // Step 2: Find the start of the cycle
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

// Example usage:
// let head = new ListNode(3);
// head.next = new ListNode(2);
// head.next.next = new ListNode(0);
// head.next.next.next = new ListNode(-4);
// head.next.next.next.next = head.next; // Creates a cycle at node with value 2
// console.log(detectCycle(head)); // Returns the node with value 2