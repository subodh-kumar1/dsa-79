import java.util.*;

class AlienDictionary {
    public String findOrder(String[] dict, int N, int K) {
        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < K; i++) adj.add(new ArrayList<>());
        
        // Step 1: Build graph from consecutive words
        for (int i = 0; i < N - 1; i++) {
            String w1 = dict[i], w2 = dict[i+1];
            int len = Math.min(w1.length(), w2.length());
            for (int j = 0; j < len; j++) {
                if (w1.charAt(j) != w2.charAt(j)) {
                    adj.get(w1.charAt(j) - 'a').add(w2.charAt(j) - 'a');
                    break; // only first difference matters
                }
            }
        }
        
        // Step 2: Kahn's Algorithm for topological sort
        int[] indegree = new int[K];
        for (int u = 0; u < K; u++) {
            for (int v : adj.get(u)) indegree[v]++;
        }
        
        Queue<Integer> q = new LinkedList<>();
        for (int i = 0; i < K; i++) if (indegree[i] == 0) q.offer(i);
        
        StringBuilder sb = new StringBuilder();
        int count = 0;
        
        while (!q.isEmpty()) {
            int u = q.poll();
            sb.append((char)(u + 'a')).append(' ');
            count++;
            for (int v : adj.get(u)) {
                indegree[v]--;
                if (indegree[v] == 0) q.offer(v);
            }
        }
        
        // If cycle exists, ordering is invalid
        if (count != K) return "";
        return sb.toString().trim();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        String[] dict1 = {"baa","abcd","abca","cab","cad"};
        System.out.println(sol.findOrder(dict1, 5, 4)); // Example output: b d a c

        String[] dict2 = {"caa","aaa","aab"};
        System.out.println(sol.findOrder(dict2, 3, 3)); // Example output: c a b
    }
}
