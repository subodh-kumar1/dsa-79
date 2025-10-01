class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        // Dummy head and tail nodes
        this.head = new Node(0, 0);
        this.tail = new Node(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    _remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    _add(node) {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next.prev = node;
        this.head.next = node;
    }

    get(key) {
        if (!this.map.has(key)) return -1;
        const node = this.map.get(key);
        this._remove(node);
        this._add(node);
        return node.value;
    }

    put(key, value) {
        if (this.map.has(key)) {
            const node = this.map.get(key);
            node.value = value;
            this._remove(node);
            this._add(node);
        } else {
            if (this.map.size === this.capacity) {
                // Remove LRU node
                const lru = this.tail.prev;
                this._remove(lru);
                this.map.delete(lru.key);
            }
            const newNode = new Node(key, value);
            this._add(newNode);
            this.map.set(key, newNode);
        }
    }
}

module.exports = LRUCache;