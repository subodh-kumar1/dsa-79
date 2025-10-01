class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findPreSuc(root, key) {
    let predecessor = -1;
    let successor = -1;

    let node = root;

    // Step 1: Find the node with the given key
    while (node) {
        if (key < node.val) {
            successor = node.val;
            node = node.left;
        } else if (key > node.val) {
            predecessor = node.val;
            node = node.right;
        } else break;
    }

    // Step 2: Check left and right subtrees for predecessor and successor
    if (node.left) {
        let temp = node.left;
        while (temp.right) temp = temp.right;
        predecessor = temp.val;
    }

    if (node.right) {
        let temp = node.right;
        while (temp.left) temp = temp.left;
        successor = temp.val;
    }

    return [predecessor, successor];
}
