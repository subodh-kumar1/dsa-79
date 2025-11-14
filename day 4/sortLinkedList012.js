/**
 * Definition for singly-linked list.
 * function ListNode(val, next = null) {
 *     this.val = val;
 *     this.next = next;
 * }
 */

/**
 * Sorts a linked list of 0s, 1s, and 2s in-place.
 * @param {ListNode} head
 * @return {ListNode}
 */
function sortLinkedList012(head) {
    if (!head || !head.next) return head;

    // Dummy nodes for 0, 1, 2 lists
    let zeroDummy = new ListNode(-1), oneDummy = new ListNode(-1), twoDummy = new ListNode(-1);
    let zero = zeroDummy, one = oneDummy, two = twoDummy;
    let curr = head;

    // Partition nodes into three lists
    while (curr) {
        if (curr.val === 0) {
            zero.next = curr;
            zero = zero.next;
        } else if (curr.val === 1) {
            one.next = curr;
            one = one.next;
        } else {
            two.next = curr;
            two = two.next;
        }
        curr = curr.next;
    }

    // Connect the three lists
    zero.next = oneDummy.next ? oneDummy.next : twoDummy.next;
    one.next = twoDummy.next;
    two.next = null;

    return zeroDummy.next;
}

// Helper functions for testing (not required in production)
function arrayToList(arr) {
    let dummy = new ListNode(-1), curr = dummy;
    for (let v of arr) {
        curr.next = new ListNode(v);
        curr = curr.next;
    }
    return dummy.next;
}

function listToArray(head) {
    let arr = [];
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    return arr;
}


// Optimized version without dummy nodes
function sortLinkedList012(head) {
    if (!head || !head.next) return head;

    let zeroHead = null, zeroTail = null;
    let oneHead = null, oneTail = null;
    let twoHead = null, twoTail = null;

    let curr = head;
    while (curr) {
        if (curr.val === 0) {
            if (!zeroHead) { // First node for 0s
                zeroHead = curr; // Initialize head
                zeroTail = curr; // Initialize tail
            } else {
                zeroTail.next = curr; // Append to tail
                zeroTail = zeroTail.next; // Move tail
            }
        } else if (curr.val === 1) {
            if (!oneHead) {
                oneHead = curr;
                oneTail = curr;
            } else {
                oneTail.next = curr;
                oneTail = oneTail.next;
            }
        } else {
            if (!twoHead) {
                twoHead = curr;
                twoTail = curr;
            } else {
                twoTail.next = curr;
                twoTail = twoTail.next;
            }
        }
        curr = curr.next;
    }
    // Connect the three lists
    if (zeroTail) {
        zeroTail.next = oneHead ? oneHead : twoHead; // Connect 0s to 1s or 2s
    }
    if (oneTail) {
        oneTail.next = twoHead; // Connect 1s to 2s
    }
    if (twoTail) {
        twoTail.next = null; // End the list
    }

    return zeroHead ? zeroHead : (oneHead ? oneHead : twoHead); // Return the head of the merged list

}
// Example usage:
// let head = arrayToList([1,0,2,0,1]);
// head = sortLinkedList012(head);
// console.log(listToArray(head)); // [0,0,1,1,2]