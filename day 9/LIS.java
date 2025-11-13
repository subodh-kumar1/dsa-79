class LIS {
    public int lengthOfLIS(int[] nums) {
        int n = nums.length;
        int[] dp = new int[n];
        Arrays.fill(dp, 1); // every element is an LIS of length 1

        for (int i = 1; i < n; i++) {
            for (int j = 0; j < i; j++) {
                if (nums[i] > nums[j]) {
                    dp[i] = Math.max(dp[i], dp[j] + 1);
                }
            }
        }

        int maxLen = 0;
        for (int len : dp) maxLen = Math.max(maxLen, len);
        return maxLen;
    }

    public int lengthOfLIS2(int[] nums) {
        ArrayList<Integer> sub = new ArrayList<>();

        for (int num : nums) {
            int idx = Collections.binarySearch(sub, num);
            if (idx < 0) idx = -(idx + 1); // position to replace
            if (idx < sub.size()) sub.set(idx, num);
            else sub.add(num);
        }

        return sub.size();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        int[] nums1 = {10, 9, 2, 5, 3, 7, 101, 18};
        System.out.println(sol.lengthOfLIS(nums1)); // 4

        int[] nums2 = {0, 1, 0, 3, 2, 3};
        System.out.println(sol.lengthOfLIS(nums2)); // 4
    }
}
