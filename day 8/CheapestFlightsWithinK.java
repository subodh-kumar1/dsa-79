import java.util.*;

class CheapestFlightsWithinK {
    public int findCheapestPrice(int n, int[][] flights, int src, int dst, int K) {
        // Step 1: Build adjacency list
        List<int[]>[] adj = new ArrayList[n];
        for (int i = 0; i < n; i++) adj[i] = new ArrayList<>();
        for (int[] f : flights) {
            adj[f[0]].add(new int[]{f[1], f[2]}); // [to, price]
        }

        // Step 2: BFS with priority queue or queue
        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{src, 0, 0}); // [city, costSoFar, stopsSoFar]

        int[] minCost = new int[n];
        Arrays.fill(minCost, Integer.MAX_VALUE);
        minCost[src] = 0;

        int ans = Integer.MAX_VALUE;

        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int city = curr[0], cost = curr[1], stops = curr[2];

            if (stops > K + 1) continue; // can't exceed k stops

            if (city == dst) {
                ans = Math.min(ans, cost);
                continue;
            }

            for (int[] next : adj[city]) {
                int nei = next[0], price = next[1];
                int newCost = cost + price;
                if (newCost < minCost[nei] || stops < K + 1) {
                    minCost[nei] = newCost;
                    q.offer(new int[]{nei, newCost, stops + 1});
                }
            }
        }

        return ans == Integer.MAX_VALUE ? -1 : ans;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] flights1 = {{0,1,100},{1,2,100},{0,2,500}};
        System.out.println(sol.findCheapestPrice(3, flights1, 0, 2, 1)); // 200

        int[][] flights2 = {{0,1,100},{1,2,100},{0,2,500}};
        System.out.println(sol.findCheapestPrice(3, flights2, 0, 2, 0)); // 500
    }
}
