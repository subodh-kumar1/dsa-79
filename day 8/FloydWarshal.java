import java.util.*;

class FloydWarshal {
    public int[][] shortestDistance(int[][] matrix) {
        int n = matrix.length;
        int INF = 1000000000; // treat as infinity
        int[][] dist = new int[n][n];
        
        // Step 1: Initialize distance matrix
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == -1) {
                    dist[i][j] = INF;
                } else {
                    dist[i][j] = matrix[i][j];
                }
            }
            dist[i][i] = 0; // distance to self = 0
        }

        // Step 2: Floyd-Warshall
        for (int k = 0; k < n; k++) {
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < n; j++) {
                    if (dist[i][k] < INF && dist[k][j] < INF) {
                        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
                    }
                }
            }
        }

        // Step 3: Convert INF back to -1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (dist[i][j] >= INF) dist[i][j] = -1;
            }
        }

        return dist;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] matrix1 = {
            {0, 2, -1, -1},
            {1, 0, 3, -1},
            {-1, -1, 0, 1},
            {3, 5, 4, 0}
        };
        System.out.println(Arrays.deepToString(sol.shortestDistance(matrix1)));
        // Output: [[0, 2, 5, 6], [1, 0, 3, 4], [4, 6, 0, 1], [3, 5, 4, 0]]
    }
}
