// Definition for a binary tree node.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Finds the lowest common ancestor (LCA) of two nodes in a binary tree.
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left && right) return root;
    return left ? left : right;
}

// Helper function to build a binary tree from array (level order)
function buildTree(arr) {
    if (!arr.length) return null;
    const nodes = arr.map(val => val === null ? null : new TreeNode(val));
    let i = 0, j = 1;
    while (j < nodes.length) {
        if (nodes[i]) {
            nodes[i].left = nodes[j++] || null;
            if (j < nodes.length) nodes[i].right = nodes[j++] || null;
        } else {
            i++;
        }
        i++;
    }
    return nodes[0];
}

// Helper function to find a node by value
function findNode(root, val) {
    if (!root) return null;
    if (root.val === val) return root;
    return findNode(root.left, val) || findNode(root.right, val);
}

// Example usage:
const arr = [3, 5, 1, 6, 2, 0, 8, null, null, 7, 4];
const root = buildTree(arr);
const p = findNode(root, 5);
const q = findNode(root, 1);
const lca = lowestCommonAncestor(root, p, q);
console.log(lca ? lca.val : null); // Output: 3