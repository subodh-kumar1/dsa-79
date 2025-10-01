class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function findTarget(root, k) {
    const values = [];

    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        values.push(node.val);
        inorder(node.right);
    }

    inorder(root); // Get sorted values

    // Two-pointer approach
    let left = 0, right = values.length - 1;

    while (left < right) {
        const sum = values[left] + values[right];
        if (sum === k) return true;
        else if (sum < k) left++;
        else right--;
    }

    return false;
}
