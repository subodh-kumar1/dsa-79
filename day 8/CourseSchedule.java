import java.util.*;

class CourseSchedule {
    public boolean canFinish(int N, int[][] arr) {
        // Build adjacency list
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            adj.add(new ArrayList<>());
        }
        
        int[] indegree = new int[N];
        for (int[] edge : arr) {
            int a = edge[0];
            int b = edge[1];
            adj.get(b).add(a);   // b → a (must do b before a)
            indegree[a]++;
        }
        
        // Queue for BFS
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < N; i++) {
            if (indegree[i] == 0) {
                q.offer(i);
            }
        }
        
        int count = 0;
        while (!q.isEmpty()) {
            int u = q.poll();
            count++;
            for (int v : adj.get(u)) {
                indegree[v]--;
                if (indegree[v] == 0) {
                    q.offer(v);
                }
            }
        }
        
        // If count == N, all tasks can be completed
        return count == N;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] arr1 = {{1,0},{2,1},{3,2}};
        System.out.println(sol.canFinish(4, arr1)); // true

        int[][] arr2 = {{0,1},{3,2},{1,3},{3,0}};
        System.out.println(sol.canFinish(4, arr2)); // false
    }
}
