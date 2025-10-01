class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function recoverTree(root) {
    let first = null, middle = null, last = null, prev = null;

    function inorder(node) {
        if (!node) return;

        inorder(node.left);

        if (prev && prev.val > node.val) {
            if (!first) {
                first = prev;
                middle = node;
            } else {
                last = node;
            }
        }

        prev = node;

        inorder(node.right);
    }

    inorder(root);

    // Recover the BST by swapping the node values
    if (first && last) {
        [first.val, last.val] = [last.val, first.val];
    } else if (first && middle) {
        [first.val, middle.val] = [middle.val, first.val];
    }
}
