/*
Flatten a multilevel linked list where each node has two pointers: 'next' and 'child'.
Each 'next' pointer points to the next node in the same level, and each 'child' pointer points to the head of a sublist.
The goal is to flatten the list into a single-level sorted linked list using only the 'child' pointers.

Algorithm: 
1. Define a ListNode class with 'val', 'next', and 'child' properties.
2. Create a Solution class with methods to merge two sorted lists and to flatten the linked list.

Explanation:

*/
class ListNode {
    constructor(val = 0, next = null, child = null) {
        this.val = val;
        this.next = next;
        this.child = child;
    }
}

class Solution {
    // Helper to merge two sorted child lists
    merge(a, b) {
        let dummy = new ListNode(-1);
        let curr = dummy;
        while (a && b) {
            if (a.val < b.val) {
                curr.child = a;
                a = a.child;
            } else {
                curr.child = b;
                b = b.child;
            }
            curr = curr.child;
        }
        curr.child = a || b;
        return dummy.child;
    }

    // Flatten the linked list in-place, O(N) time, O(1) extra space
    flattenLinkedList(head) {
        if (!head) return null;
        // Recursively flatten the next list
        head.child = this.flattenLinkedList(head.child);
        head.next = this.flattenLinkedList(head.next);
        // Merge current node's child list and next list
        let merged = this.merge(head, head.next);
        // Remove .next pointers in the flattened list
        let curr = merged;
        while (curr) {
            curr.next = null;
            curr = curr.child;
        }
        return merged;
    }
}

// Function to print the linked list
function printLinkedList(head) {
    while (head !== null) {
        process.stdout.write(head.val + " ");
        head = head.child;
    }
    console.log();
}

// Function to print the linked list in a grid-like structure
function printOriginalLinkedList(head, depth) {
    while (head !== null) {
        process.stdout.write(head.val.toString());
        if (head.child) {
            process.stdout.write(" -> ");
            printOriginalLinkedList(head.child, depth + 1);
        }
        if (head.next) {
            console.log();
            for (let i = 0; i < depth; ++i) {
                process.stdout.write("| ");
            }
        }
        head = head.next;
    }
}

// Example usage
let head = new ListNode(5);
head.child = new ListNode(14);

head.next = new ListNode(10);
head.next.child = new ListNode(4);

head.next.next = new ListNode(12);
head.next.next.child = new ListNode(20);
head.next.next.child.child = new ListNode(13);

head.next.next.next = new ListNode(7);
head.next.next.next.child = new ListNode(17);

console.log("Original linked list:");
printOriginalLinkedList(head, 0);

let sol = new Solution();
let flattened = sol.flattenLinkedList(head);

console.log("\nFlattened linked list: ");
printLinkedList(flattened);