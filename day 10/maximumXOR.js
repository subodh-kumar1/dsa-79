// JS Version
function findMaximumXOR(nums) {
    class TrieNode {
        constructor() {
            this.children = [null, null];
        }
    }

    const root = new TrieNode();

    // Step 1: Insert all numbers into trie
    for (const num of nums) {
        let node = root;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            if (!node.children[bit]) {
                node.children[bit] = new TrieNode();
            }
            node = node.children[bit];
        }
    }

    let maxXor = 0;

    // Step 2: For each number, find best XOR
    for (const num of nums) {
        let node = root;
        let currXor = 0;
        for (let i = 31; i >= 0; i--) {
            const bit = (num >> i) & 1;
            const opposite = 1 - bit;
            if (node.children[opposite]) {
                currXor |= (1 << i);
                node = node.children[opposite];
            } else {
                node = node.children[bit];
            }
        }
        maxXor = Math.max(maxXor, currXor);
    }

    return maxXor;
}

// Example usage:
console.log(findMaximumXOR([3, 9, 10, 5, 1])); // 15
console.log(findMaximumXOR([26, 49, 30, 15, 69])); // 116
console.log(findMaximumXOR([1, 2, 3, 4, 5, 6])); // ?