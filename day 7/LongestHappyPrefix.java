class LongestHappyPrefix {
    public String longestPrefix(String s) {
        int n = s.length();
        int[] lps = buildLPS(s);
        int len = lps[n - 1]; // Length of longest happy prefix
        return s.substring(0, len);
    }

    private int[] buildLPS(String s) {
        int n = s.length();
        int[] lps = new int[n];
        int len = 0; // length of longest prefix suffix
        int i = 1;

        while (i < n) {
            if (s.charAt(i) == s.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }

    // Demo
    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestPrefix("ababab")); // Output: "abab"
        System.out.println(sol.longestPrefix("aaaa"));   // Output: "aaa"
        System.out.println(sol.longestPrefix("abc"));    // Output: ""
    }
}
