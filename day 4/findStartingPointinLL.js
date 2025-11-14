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

    let slow = head, fast = head;

    // Step 1: Detect if a cycle exists
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            // Cycle detected
            break;
        }
    }

    /* 
        How does it work?
        Let
        L = length from head to start of cycle
        C = length of the cycle
        When slow and fast meet, let’s say slow has traveled S steps.
        Fast has traveled 2S steps (since it moves twice as fast).
        Since fast has also completed k full cycles in the loop, we can write:
        2S = S + kC  =>  S = kC

        This means that the distance traveled by slow (S) is a multiple of the cycle length (C).

        Now, the distance from head to the start of the cycle is L.

        When we reset slow to head and move both slow and fast one step at a time,
        they will meet at the start of the cycle after L steps.

        Example:
        If L = 3 and C = 5,
        When slow and fast meet, slow has traveled S = kC steps.
        Resetting slow to head and moving both pointers one step at a time,
        they will meet at the start of the cycle after L = 3 steps.

        Let's visualize:
        Head -> A -> B -> C -> D -> E
                        ^              |
                        |______________|
        Here, the cycle starts at node C.

        Formula:
        Distance traveled by slow = Distance from head to cycle start + Distance traveled in cycle
        S = L + mC  (where m is the number of cycles completed)
        Since S = kC, we have:
        L + mC = kC  =>  L = (k - m)C
        This shows that moving both pointers at the same speed will lead them to meet at the cycle start after L steps.

        Faster pointer (fast) moves twice as fast as the slower pointer (slow).

        Meeting point inside the cycle confirms the presence of a loop.
        Where they meet is not necessarily the start of the cycle.

        Meeting point in example:
        Head -> A -> B -> C -> D -> E

        Fast and slow meet at node D inside the cycle.
        Why?
        At meeting point:
        Slow has traveled S = L + x (where x is the distance traveled in the cycle)
        Fast has traveled 2S = L + y (where y is the distance traveled in the cycle)
        Since fast has completed k full cycles:
        2S = S + kC  =>  S = kC
        This means that the distance traveled by slow (S) is a multiple of the cycle length (C).
        Resetting slow to head and moving both pointers one step at a time,
        they will meet at the start of the cycle after L steps.
    */


    // No cycle
    if (!fast || !fast.next) {
        return null;
    }

    // Step 2: Find the start of the cycle
    // Reset slow to head
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow;
}

// Simplified version without comments
function detectCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            break;
        }
    }
    if (!fast || !fast.next) {
        return null;
    }
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