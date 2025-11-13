import java.util.*;

class Kosaraju {
    public int kosarajuSCC(int V, ArrayList<ArrayList<Integer>> adj) {
        boolean[] visited = new boolean[V];
        Stack<Integer> stack = new Stack<>();

        // Step 1: Fill stack with vertices in order of finishing times
        for (int i = 0; i < V; i++) {
            if (!visited[i]) dfs(i, adj, visited, stack);
        }

        // Step 2: Reverse the graph
        ArrayList<ArrayList<Integer>> reverseAdj = new ArrayList<>();
        for (int i = 0; i < V; i++) reverseAdj.add(new ArrayList<>());

        for (int u = 0; u < V; u++) {
            for (int v : adj.get(u)) {
                reverseAdj.get(v).add(u);
            }
        }

        // Step 3: Do DFS according to finishing times in stack
        Arrays.fill(visited, false);
        int sccCount = 0;

        while (!stack.isEmpty()) {
            int node = stack.pop();
            if (!visited[node]) {
                dfsReverse(node, reverseAdj, visited);
                sccCount++;
            }
        }

        return sccCount;
    }

    // DFS to fill the stack
    private void dfs(int u, ArrayList<ArrayList<Integer>> adj, boolean[] visited, Stack<Integer> stack) {
        visited[u] = true;
        for (int v : adj.get(u)) {
            if (!visited[v]) dfs(v, adj, visited, stack);
        }
        stack.push(u);
    }

    // DFS on reversed graph
    private void dfsReverse(int u, ArrayList<ArrayList<Integer>> reverseAdj, boolean[] visited) {
        visited[u] = true;
        for (int v : reverseAdj.get(u)) {
            if (!visited[v]) dfsReverse(v, reverseAdj, visited);
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        int V = 5;
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        adj.get(0).add(2);
        adj.get(2).add(1);
        adj.get(1).add(0);
        adj.get(0).add(3);
        adj.get(3).add(4);

        System.out.println(sol.kosarajuSCC(V, adj)); // Output: 3
    }
}
