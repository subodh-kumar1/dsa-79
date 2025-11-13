import java.util.*;

class Bipartite {
    public boolean isBipartite(int V, List<List<Integer>> adj) {
        int[] color = new int[V];
        Arrays.fill(color, -1); // -1 = uncolored

        for (int i = 0; i < V; i++) {
            if (color[i] == -1) { // Not yet visited
                if (!bfsCheck(i, adj, color)) {
                    return false;
                }
            }
        }
        return true;
    }

    private boolean bfsCheck(int start, List<List<Integer>> adj, int[] color) {
        Queue<Integer> q = new LinkedList<>();
        q.offer(start);
        color[start] = 0; // Start with color 0

        while (!q.isEmpty()) {
            int node = q.poll();

            for (int neighbor : adj.get(node)) {
                if (color[neighbor] == -1) {
                    // Assign alternate color
                    color[neighbor] = 1 - color[node];
                    q.offer(neighbor);
                } else if (color[neighbor] == color[node]) {
                    // Conflict detected
                    return false;
                }
            }
        }
        return true;
    }

    // Demo
    public static void main(String[] args) {
        Solution sol = new Solution();

        // Example 1: Bipartite
        List<List<Integer>> adj1 = new ArrayList<>();
        for (int i = 0; i < 4; i++) adj1.add(new ArrayList<>());
        adj1.get(0).add(1);
        adj1.get(1).add(0);
        adj1.get(1).add(2);
        adj1.get(2).add(1);
        adj1.get(2).add(3);
        adj1.get(3).add(2);
        System.out.println(sol.isBipartite(4, adj1)); // true

        // Example 2: Not Bipartite (odd cycle)
        List<List<Integer>> adj2 = new ArrayList<>();
        for (int i = 0; i < 3; i++) adj2.add(new ArrayList<>());
        adj2.get(0).add(1); adj2.get(1).add(0);
        adj2.get(1).add(2); adj2.get(2).add(1);
        adj2.get(2).add(0); adj2.get(0).add(2);
        System.out.println(sol.isBipartite(3, adj2)); // false
    }
}
