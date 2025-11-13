class FrogJumpWithKJumps {
    public int frogJump(int[] heights, int k) {
        int dp[] = new int[heights.length];
        Arrays.fill(dp, -1);

        return dpFunc(heights, heights.length - 1, dp, k);
    }

    int dpFunc(int ht[], int i, int[] dp, int k) {
        if(i == 0) return dp[0] = 0;
        if(dp[i] != -1) return dp[i];
        int steps = Integer.MAX_VALUE;

        for(int j = 1; j <= k; j++) {
            if(i - j >= 0) {
                int frogJump = dpFunc(ht, i - j, dp, k) + Math.abs(ht[i] - ht[i - j]);
                steps = Math.min(steps, frogJump);
            }
        }

        // int jump1 = dpFunc(ht, i - 1, dp) + Math.abs(ht[i] - ht[i - 1]);
        // int jump2 = i > 1 ? dpFunc(ht, i - 2, dp) + Math.abs(ht[i] - ht[i - 2]) :  Integer.MAX_VALUE;

        return dp[i] = steps;
    }
}