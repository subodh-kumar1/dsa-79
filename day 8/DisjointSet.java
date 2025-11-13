class DisjointSet {
    private int[] parent;
    private int[] rank;
    private int[] size;

    // Initialize n elements
    public DisjointSet(int n) {
        parent = new int[n];
        rank = new int[n];
        size = new int[n];

        for (int i = 0; i < n; i++) {
            parent[i] = i; // initially each node is its own parent
            rank[i] = 0;   // initial rank
            size[i] = 1;   // initial size
        }
    }

    // Find representative of set containing u with path compression
    private int findParent(int u) {
        if (parent[u] != u) {
            parent[u] = findParent(parent[u]); // path compression
        }
        return parent[u];
    }

    // Union by rank
    public void unionByRank(int u, int v) {
        int parU = findParent(u);
        int parV = findParent(v);

        if (parU == parV) return; // already in same set

        if (rank[parU] < rank[parV]) {
            parent[parU] = parV;
        } else if (rank[parU] > rank[parV]) {
            parent[parV] = parU;
        } else {
            parent[parV] = parU;
            rank[parU]++;
        }
    }

    // Union by size
    public void unionBySize(int u, int v) {
        int parU = findParent(u);
        int parV = findParent(v);

        if (parU == parV) return; // already in same set

        if (size[parU] < size[parV]) {
            parent[parU] = parV;
            size[parV] += size[parU];
        } else {
            parent[parV] = parU;
            size[parU] += size[parV];
        }
    }

    // Check if u and v are in the same set
    public boolean find(int u, int v) {
        return findParent(u) == findParent(v);
    }
}
