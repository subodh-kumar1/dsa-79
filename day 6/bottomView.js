/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Returns the bottom view of a binary tree.
 * @param {TreeNode} root
 * @return {number[]}
 */
function bottomView(root) {
    if (!root) return [];

    // Map to store the last node at each horizontal distance
    const hdMap = new Map();
    // Queue for level order traversal: [node, horizontal distance]
    const queue = [[root, 0]];

    let minHd = 0, maxHd = 0;

    while (queue.length) {
        const [node, hd] = queue.shift();
        // Overwrite value at hd, so the last node at this hd is stored
        hdMap.set(hd, node.val);

        minHd = Math.min(minHd, hd);
        maxHd = Math.max(maxHd, hd);

        if (node.left) queue.push([node.left, hd - 1]);
        if (node.right) queue.push([node.right, hd + 1]);
    }

    // Collect the bottom view from leftmost to rightmost horizontal distance
    const result = [];
    for (let i = minHd; i <= maxHd; i++) {
        result.push(hdMap.get(i));
    }
    return result;
}

// Example usage:
// Helper to build tree from array (LeetCode style)
function buildTree(arr) {
    if (!arr.length || arr[0] == null) return null;
    let root = new TreeNode(arr[0]);
    let queue = [root];
    let i = 1;
    while (queue.length && i < arr.length) {
        let node = queue.shift();
        if (arr[i] != null) {
            node.left = new TreeNode(arr[i]);
            queue.push(node.left);
        }
        i++;
        if (i < arr.length && arr[i] != null) {
            node.right = new TreeNode(arr[i]);
            queue.push(node.right);
        }
        i++;
    }
    return root;
}

// Uncomment below to test:
// class TreeNode { constructor(val, left, right) { this.val = val; this.left = left || null; this.right = right || null; } }
// let root = buildTree([20, 8, 22, 5, 3, null, 25, null, null, 10, 14]);
// console.log(bottomView(root)); // Output: [5, 10, 3, 14, 25]