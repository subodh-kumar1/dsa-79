import java.util.*;

class RottenOranges {
    public int orangesRotting(int[][] grid) {
        if (grid == null || grid.length == 0) return -1;

        int rows = grid.length, cols = grid[0].length;
        Queue<int[]> q = new LinkedList<>();
        int freshCount = 0;

        // Step 1: Initialize queue with all rotten oranges
        for (int r = 0; r < rows; r++) {
            for (int c = 0; c < cols; c++) {
                if (grid[r][c] == 2) {
                    q.offer(new int[]{r, c, 0}); // row, col, time
                } else if (grid[r][c] == 1) {
                    freshCount++;
                }
            }
        }

        int time = 0;
        int[][] directions = {{1,0}, {-1,0}, {0,1}, {0,-1}};

        // Step 2: BFS
        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int r = curr[0], c = curr[1], t = curr[2];
            time = Math.max(time, t);

            for (int[] dir : directions) {
                int nr = r + dir[0];
                int nc = c + dir[1];

                // Rot fresh orange
                if (nr >= 0 && nr < rows && nc >= 0 && nc < cols && grid[nr][nc] == 1) {
                    grid[nr][nc] = 2; // make rotten
                    freshCount--;
                    q.offer(new int[]{nr, nc, t + 1});
                }
            }
        }

        // Step 3: Check result
        return freshCount == 0 ? time : -1;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        int[][] grid1 = {{2,1,1}, {0,1,1}, {1,0,1}};
        System.out.println(sol.orangesRotting(grid1)); // -1

        int[][] grid2 = {{2,1,1}, {1,1,0}, {0,1,1}};
        System.out.println(sol.orangesRotting(grid2)); // 4
    }
}
