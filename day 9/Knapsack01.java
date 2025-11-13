class Knapsack01 {
    public int knapsack(int[] val, int[] wt, int W) {
        int N = val.length;
        int[][] dp = new int[N + 1][W + 1];

        for (int i = 1; i <= N; i++) {
            for (int w = 0; w <= W; w++) {
                dp[i][w] = dp[i - 1][w]; // not pick
                if (wt[i - 1] <= w) {
                    dp[i][w] = Math.max(dp[i][w], dp[i - 1][w - wt[i - 1]] + val[i - 1]);
                }
            }
        }

        return dp[N][W];
    }
    public int knapsackOptimized(int[] val, int[] wt, int W) {
        int N = val.length;
        int[] dp = new int[W + 1];

        for (int i = 0; i < N; i++) {
            for (int w = W; w >= wt[i]; w--) {
                dp[w] = Math.max(dp[w], dp[w - wt[i]] + val[i]);
            }
        }

        return dp[W];
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] val1 = {60, 100, 120};
        int[] wt1 = {10, 20, 30};
        int W1 = 50;
        System.out.println(sol.knapsack(val1, wt1, W1)); // 220

        int[] val2 = {10, 40, 30, 50};
        int[] wt2 = {5, 4, 6, 3};
        int W2 = 10;
        System.out.println(sol.knapsack(val2, wt2, W2)); // 90
    }
}
