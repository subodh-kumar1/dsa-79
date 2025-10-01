class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function largestBSTSubtree(root) {
    let maxSize = 0;

    function postorder(node) {
        if (!node) {
            return {
                isBST: true,
                size: 0,
                min: Infinity,
                max: -Infinity
            };
        }

        const left = postorder(node.left);
        const right = postorder(node.right);

        // Check BST property
        if (left.isBST && right.isBST && node.val > left.max && node.val < right.min) {
            const size = 1 + left.size + right.size;
            maxSize = Math.max(maxSize, size);
            return {
                isBST: true,
                size: size,
                min: Math.min(left.min, node.val),
                max: Math.max(right.max, node.val)
            };
        }

        // If not BST, propagate failure
        return {
            isBST: false,
            size: 0,
            min: -Infinity,
            max: Infinity
        };
    }

    postorder(root);
    return maxSize;
}
