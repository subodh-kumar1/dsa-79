class EditDistance {
    public int minDistance(String start, String target) {
        int m = start.length();
        int n = target.length();
        int[][] dp = new int[m + 1][n + 1];

        // Initialize base cases
        for (int i = 0; i <= m; i++) dp[i][0] = i;
        for (int j = 0; j <= n; j++) dp[0][j] = j;

        // Fill DP table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (start.charAt(i - 1) == target.charAt(j - 1)) {
                    dp[i][j] = dp[i - 1][j - 1];
                } else {
                    dp[i][j] = 1 + Math.min(
                        dp[i - 1][j - 1], // replace
                        Math.min(dp[i - 1][j], dp[i][j - 1]) // delete, insert
                    );
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        String start1 = "planet", target1 = "plan";
        System.out.println(sol.minDistance(start1, target1)); // 2

        String start2 = "abcdefg", target2 = "azced";
        System.out.println(sol.minDistance(start2, target2)); // 4
    }
}
