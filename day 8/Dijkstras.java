import java.util.*;

class Dijkstras {
    public int[] dijkstra(int V, ArrayList<ArrayList<int[]>> adj, int S) {
        int[] dist = new int[V];
        Arrays.fill(dist, 1000000000); // 10^9 for unreachable nodes
        dist[S] = 0;

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[0]));
        pq.offer(new int[]{0, S}); // {distance, vertex}

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int d = curr[0], u = curr[1];

            if (d > dist[u]) continue; // outdated distance

            for (int[] neighbor : adj.get(u)) {
                int v = neighbor[0], w = neighbor[1];
                if (dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
                    pq.offer(new int[]{dist[v], v});
                }
            }
        }

        return dist;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int V = 5;
        ArrayList<ArrayList<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < V; i++) adj.add(new ArrayList<>());

        // Example edges: u - v, weight
        adj.get(0).add(new int[]{1, 2}); adj.get(1).add(new int[]{0, 2});
        adj.get(0).add(new int[]{2, 4}); adj.get(2).add(new int[]{0, 4});
        adj.get(1).add(new int[]{2, 1}); adj.get(2).add(new int[]{1, 1});
        adj.get(1).add(new int[]{3, 7}); adj.get(3).add(new int[]{1, 7});
        adj.get(2).add(new int[]{4, 3}); adj.get(4).add(new int[]{2, 3});
        adj.get(3).add(new int[]{4, 1}); adj.get(4).add(new int[]{3, 1});

        int[] dist = sol.dijkstra(V, adj, 0);
        System.out.println(Arrays.toString(dist));
        // Output: [0, 2, 3, 9, 6]
    }
}
