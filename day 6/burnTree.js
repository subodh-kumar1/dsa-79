// Definition for a binary tree node.
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Helper to build tree from level order array (null for missing nodes)
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

// Main function to find min time to burn tree
function minTimeToBurnTree(root, target) {
    if (!root) return 0;

    // Map each node to its parent
    let parentMap = new Map();
    let targetNode = null;

    function mapParents(node, parent = null) {
        if (!node) return;
        if (node.val === target) targetNode = node;
        if (parent) parentMap.set(node, parent);
        mapParents(node.left, node);
        mapParents(node.right, node);
    }
    mapParents(root);

    // BFS from target node
    let queue = [];
    let visited = new Set();
    if (targetNode) queue.push(targetNode);
    visited.add(targetNode);

    let time = -1;
    while (queue.length) {
        let size = queue.length;
        time++;
        for (let i = 0; i < size; i++) {
            let node = queue.shift();
            for (let neighbor of [node.left, node.right, parentMap.get(node)]) {
                if (neighbor && !visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push(neighbor);
                }
            }
        }
    }
    return time;
}

// Example usage:
const arr = [1, 2, 3, 4, null, 5, 6, null, 7];
const root = buildTree(arr);
const target = 1;
console.log(minTimeToBurnTree(root, target)); // Output: 3