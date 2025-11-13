class LCS {
    public int longestCommonSubsequence(String str1, String str2) {
        int m = str1.length();
        int n = str2.length();

        int[][] dp = new int[m + 1][n + 1];

        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (str1.charAt(i - 1) == str2.charAt(j - 1)) {
                    dp[i][j] = 1 + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                }
            }
        }

        return dp[m][n];
    }

    public static void main(String[] args) {
        LCS sol = new LCS();

        String str1 = "bdefg", str2 = "bfg";
        System.out.println(sol.longestCommonSubsequence(str1, str2)); // 3

        String str3 = "mnop", str4 = "mnq";
        System.out.println(sol.longestCommonSubsequence(str3, str4)); // 2
    }
}
