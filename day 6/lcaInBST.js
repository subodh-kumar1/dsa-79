// Definition for a binary tree node.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to find LCA in BST
function lowestCommonAncestor(root, p, q) {
    if (!root) return null;
    // If both p and q are less than root, LCA is in left subtree
    if (p < root.val && q < root.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    // If both p and q are greater than root, LCA is in right subtree
    if (p > root.val && q > root.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    // Otherwise, root is the LCA
    return root;
}

// Helper function to build BST from array (level order)
function insertLevelOrder(arr, i = 0) {
    if (i >= arr.length || arr[i] === null) return null;
    const root = new TreeNode(arr[i]);
    root.left = insertLevelOrder(arr, 2 * i + 1);
    root.right = insertLevelOrder(arr, 2 * i + 2);
    return root;
}

// Example usage:
const arr = [5, 3, 6, 2, 4, null, 7];
const root = insertLevelOrder(arr);
const p = 2, q = 4;
const lcaNode = lowestCommonAncestor(root, p, q);
console.log([lcaNode.val]); // Output: [3]