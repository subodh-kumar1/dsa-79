class MinFallingPathSum {
    public int minFallingPathSum(int[][] matrix) {
        int n = matrix.length;
        int m = matrix[0].length;
        int dp[][] = new int[n][m];
        for(int[] row: dp)
            Arrays.fill(row, -1);
        int minAns = Integer.MAX_VALUE;

        for(int i = 0; i < m; i++) {
            minAns = Math.min(minAns, dpRecur(matrix, n - 1, i, dp));
        }
        return minAns;
    }

    int dpRecur(int[][] matrix, int i, int j, int[][] dp) {
        if(i < 0 || j < 0 || i >= dp.length || j >= dp[0].length) 
            return Integer.MAX_VALUE;
        if(i == 0)
            return matrix[i][j];
        if(dp[i][j] != -1)
            return dp[i][j];

        int up = dpRecur(matrix, i - 1, j, dp);
        int upRight = dpRecur(matrix, i - 1, j + 1, dp);
        int upLeft = dpRecur(matrix, i - 1, j - 1, dp);

        int min = Math.min(up, Math.min(upRight, upLeft));

        return dp[i][j] = min == Integer.MAX_VALUE ? Integer.MAX_VALUE : matrix[i][j] +  min;
    }
}