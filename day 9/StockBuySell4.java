class StockBuySell4 {
    public int maxProfit(int k, int[] prices) {
        int n = prices.length;
        if (n == 0) return 0;

        // If k is very large, it's equivalent to infinite transactions
        if (k >= n / 2) {
            int maxProfit = 0;
            for (int i = 1; i < n; i++) {
                if (prices[i] > prices[i - 1]) {
                    maxProfit += prices[i] - prices[i - 1];
                }
            }
            return maxProfit;
        }

        int[][] dp = new int[k + 1][n];
        for (int i = 1; i <= k; i++) {
            int maxDiff = -prices[0];
            for (int j = 1; j < n; j++) {
                dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
                maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
            }
        }

        return dp[k][n - 1];
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] arr1 = {3, 2, 6, 5, 0, 3};
        System.out.println(sol.maxProfit(2, arr1)); // 7

        int[] arr2 = {1, 2, 4, 2, 5, 7, 2, 4, 9, 0};
        System.out.println(sol.maxProfit(3, arr2)); // 15
    }
}
