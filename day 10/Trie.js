class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.countEnd = 0;      // number of words ending here
        this.countPrefix = 0;   // number of words passing through
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    // Insert a word
    insert(word) {
        let node = this.root;
        for (const c of word) {
            const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[idx]) {
                node.children[idx] = new TrieNode();
            }
            node = node.children[idx];
            node.countPrefix++;
        }
        node.countEnd++;
    }

    // Count words equal to given word
    countWordsEqualTo(word) {
        let node = this.root;
        for (const c of word) {
            const idx = c   .charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[idx]) return 0;
            node = node.children[idx];
        }
        return node.countEnd;
    }

    // Count words starting with given prefix
    countWordsStartingWith(prefix) {
        let node = this.root;
        for (const c of prefix) {
            const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[idx]) return 0;
            node = node.children[idx];
        }
        return node.countPrefix;
    }

    // Erase one occurrence of word
    erase(word) {
        if (this.countWordsEqualTo(word) === 0) return; // word not present

        let node = this.root;
        for (const c of word) {
            const idx = c.charCodeAt(0) - 'a'.charCodeAt(0);
            const next = node.children[idx];
            next.countPrefix--;
            if (next.countPrefix === 0) {
                // Optional optimization: cleanup node
                node.children[idx] = null;
                return;
            }
            node = next;
        }
        node.countEnd--;
    }
}

// Example usage:
const trie = new Trie();
trie.insert("apple");
trie.insert("app");
console.log(trie.countWordsEqualTo("app"));        // 1
console.log(trie.countWordsStartingWith("ap"));     // 2
trie.erase("app");
console.log(trie.countWordsEqualTo("app"));        // 0
console.log(trie.countWordsStartingWith("ap"));     // 1