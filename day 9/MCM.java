class MCM {
    public int matrixMultiplication(int[] nums) {
        //your code goes here

        int i = 1;
        int j = nums.length - 1;
        int dp[][] = new int[nums.length][nums.length];
        for(int k = 0; k < dp.length; k++) {
            Arrays.fill(dp[k], -1);
        }
        return func(i, j, nums, dp);
    }

    int func(int i, int j, int nums[], int dp[][]) {
        if(i >= j) return 0;

        int min = Integer.MAX_VALUE;
        if(dp[i][j] != -1)
            return dp[i][j];
        for(int k = i; k < j; k++) {
            int ans = func(i, k, nums, dp) + func(k + 1, j, nums, dp) 
                        + nums[i - 1] * nums[k] * nums[j];
            min = Math.min(min, ans);
        }
        return dp[i][j] = min;
    }
}