/**
 * Morris Inorder Traversal of a binary tree.
 * @param {TreeNode} root
 * @return {number[]}
 */
function morrisInorderTraversal(root) {
    const result = [];
    let current = root;

    while (current) {
        if (!current.left) {
            result.push(current.val);
            current = current.right;
        } else {
            let pre = current.left;
            while (pre.right && pre.right !== current) {
                pre = pre.right;
            }
            if (!pre.right) {
                pre.right = current;
                current = current.left;
            } else {
                pre.right = null;
                result.push(current.val);
                current = current.right;
            }
        }
    }
    return result;
}

/**
 * Morris Preorder Traversal of a binary tree.
 * @param {TreeNode} root
 * @return {number[]}
 */
function morrisPreorderTraversal(root) {
    const result = [];
    let current = root;

    while (current) {
        if (!current.left) {
            result.push(current.val);
            current = current.right;
        } else {
            let pre = current.left;
            while (pre.right && pre.right !== current) {
                pre = pre.right;
            }
            if (!pre.right) {
                result.push(current.val); // Visit before making thread
                pre.right = current;
                current = current.left;
            } else {
                pre.right = null;
                current = current.right;
            }
        }
    }
    return result;
}

// Helper function to build tree from array (LeetCode style)
function buildTree(arr) {
    if (!arr.length || arr[0] == null) return null;
    let nodes = arr.map(val => val == null ? null : new TreeNode(val));
    let kids = nodes.slice(1);
    for (let i = 0, j = 0; i < nodes.length && j < kids.length; i++) {
        if (nodes[i]) {
            if (j < kids.length) nodes[i].left = kids[j++];
            if (j < kids.length) nodes[i].right = kids[j++];
        }
    }
    return nodes[0];
}

function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}

const root = buildTree([1, 4, null, 4, 2]);
console.log('Inorder:', morrisInorderTraversal(root));   // Output: [4, 4, 2, 1]
console.log('Preorder:', morrisPreorderTraversal(root)); // Output: [1, 4, 4, 2]