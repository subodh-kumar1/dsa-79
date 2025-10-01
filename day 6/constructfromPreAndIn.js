/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    // Map value to its index in inorder for O(1) lookups
    const inorderIndexMap = new Map();
    inorder.forEach((val, idx) => inorderIndexMap.set(val, idx));

    let preIndex = 0;

    function helper(left, right) {
        if (left > right) return null;

        const rootVal = preorder[preIndex++];
        const root = new TreeNode(rootVal);

        // Build left and right subtree
        root.left = helper(left, inorderIndexMap.get(rootVal) - 1);
        root.right = helper(inorderIndexMap.get(rootVal) + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
}

// TreeNode class definition
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val);
    this.left = (left===undefined ? null : left);
    this.right = (right===undefined ? null : right);
}

// Example usage:
// const preorder = [3, 9, 20, 15, 7];
// const inorder = [9, 3, 15, 20, 7];
// const tree = buildTree(preorder, inorder);
// console.log(tree);