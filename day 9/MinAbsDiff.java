class MinAbsDiff {
    public int minSubsetSumDifference(int[] arr) {
        int n = arr.length;
        int sum = 0;
        for (int num : arr) sum += num;

        boolean[][] dp = new boolean[n + 1][sum / 2 + 1];

        // Initialize DP: sum 0 is always achievable
        for (int i = 0; i <= n; i++) dp[i][0] = true;

        // Fill DP table
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= sum / 2; j++) {
                if (arr[i - 1] <= j) {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - arr[i - 1]];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }

        // Find the largest achievable sum ≤ sum/2
        int S1 = 0;
        for (int j = sum / 2; j >= 0; j--) {
            if (dp[n][j]) {
                S1 = j;
                break;
            }
        }

        int S2 = sum - S1;
        return Math.abs(S2 - S1);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] arr1 = {1, 7, 14, 5};
        System.out.println(sol.minSubsetSumDifference(arr1)); // 1

        int[] arr2 = {3, 1, 6, 2, 2};
        System.out.println(sol.minSubsetSumDifference(arr2)); // 0

        int[] arr3 = {2, 2, 2, 9};
        System.out.println(sol.minSubsetSumDifference(arr3)); // 3
    }
}
