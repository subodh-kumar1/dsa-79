class HouseRobber {
    public int rob(int[] money) {
        int n = money.length;
        if (n == 1) return money[0];

        // Case 1: Rob houses 0 to n-2
        int max1 = robLinear(money, 0, n - 2);
        // Case 2: Rob houses 1 to n-1
        int max2 = robLinear(money, 1, n - 1);

        return Math.max(max1, max2);
    }

    private int robLinear(int[] money, int start, int end) {
        int prev = 0;   // dp[i-2]
        int curr = 0;   // dp[i-1]

        for (int i = start; i <= end; i++) {
            int temp = curr;
            curr = Math.max(curr, prev + money[i]);
            prev = temp;
        }
        return curr;
    }

    public static void main(String[] args) {
        HouseRobber sol = new HouseRobber();

        int[] money1 = {2, 1, 4, 9};
        System.out.println(sol.rob(money1)); // 10

        int[] money2 = {1, 5, 2, 1, 6};
        System.out.println(sol.rob(money2)); // 11
    }
}
