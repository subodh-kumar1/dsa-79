// Definition for a Node.
class Node {
    constructor(val, next = null, random = null) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

// Function to build the linked list from input matrix
function buildList(matrix) {
    if (!matrix.length) return null;
    const nodes = matrix.map(([val]) => new Node(val));
    for (let i = 0; i < matrix.length; i++) {
        if (i < matrix.length - 1) nodes[i].next = nodes[i + 1];
        const randomIdx = matrix[i][1];
        nodes[i].random = randomIdx === -1 ? null : nodes[randomIdx];
    }
    return nodes[0];
}

// Function to deep copy the linked list
function copyRandomList(head) {
    if (!head) return null;
    const oldToNew = new Map();

    // First pass: copy all nodes
    let curr = head;
    while (curr) {
        oldToNew.set(curr, new Node(curr.val));
        curr = curr.next;
    }

    // Second pass: assign next and random pointers
    curr = head;
    while (curr) {
        oldToNew.get(curr).next = curr.next ? oldToNew.get(curr.next) : null;
        oldToNew.get(curr).random = curr.random ? oldToNew.get(curr.random) : null;
        curr = curr.next;
    }

    return oldToNew.get(head);
}

// Helper to print the list values
function printList(head) {
    const vals = [];
    let curr = head;
    while (curr) {
        vals.push(curr.val);
        curr = curr.next;
    }
    return vals.join(' ');
}

// Helper to check if all nodes are new (deep copy)
function isDeepCopy(origHead, copyHead) {
    let orig = origHead, copy = copyHead;
    const origNodes = [], copyNodes = [];
    while (orig && copy) {
        if (orig === copy) return false;
        origNodes.push(orig);
        copyNodes.push(copy);
        orig = orig.next;
        copy = copy.next;
    }
    if (orig || copy) return false; // Length mismatch

    // Check random pointers
    for (let i = 0; i < origNodes.length; i++) {
        if (origNodes[i].val !== copyNodes[i].val) return false;
        if (origNodes[i].random === null && copyNodes[i].random !== null) return false;
        if (origNodes[i].random !== null && copyNodes[i].random === null) return false;
        if (origNodes[i].random !== null && copyNodes[i].random !== null) {
            const origIdx = origNodes.indexOf(origNodes[i].random);
            const copyIdx = copyNodes.indexOf(copyNodes[i].random);
            if (origIdx !== copyIdx) return false;
        }
    }
    return true;
}

// Main function to process input and output
function processInput(matrix) {
    const origHead = buildList(matrix);
    const copyHead = copyRandomList(origHead);
    const output = printList(copyHead);
    const deepCopy = isDeepCopy(origHead, copyHead);
    console.log(`${output}, ${deepCopy}`);
    return { head: copyHead, deepCopy };
}

// Example usage:
processInput([[1, -1], [2, 0], [3, 4], [4, 1], [5, 2]]); // output: "1 2 3 4 5, true"
processInput([[5, -1], [3, -1], [2, 1], [1, 1]]); // output: "5 3 2 1, true"
processInput([[-1, -1], [-2, -1], [-3, -1], [10, -1]]); // output: "-1 -2 -3 10, true"