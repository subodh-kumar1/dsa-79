import java.util.*;

class ZFunction {
    public static void searchPattern(String text, String pattern) {
        String combined = pattern + "$" + text;
        int n = combined.length();
        int[] Z = new int[n];
        computeZArray(combined, Z);

        int patLen = pattern.length();
        List<Integer> result = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            if (Z[i] == patLen) {
                // Match found, adjust index relative to text
                result.add(i - patLen - 1);
            }
        }

        // Print indices
        for (int i = 0; i < result.size(); i++) {
            System.out.print(result.get(i));
            if (i < result.size() - 1) System.out.print(" ");
        }
    }

    private static void computeZArray(String s, int[] Z) {
        int n = s.length();
        int l = 0, r = 0;
        for (int i = 1; i < n; i++) {
            if (i <= r) {
                Z[i] = Math.min(r - i + 1, Z[i - l]);
            }
            while (i + Z[i] < n && s.charAt(Z[i]) == s.charAt(i + Z[i])) {
                Z[i]++;
            }
            if (i + Z[i] - 1 > r) {
                l = i;
                r = i + Z[i] - 1;
            }
        }
    }

    // Demo
    public static void main(String[] args) {
        searchPattern("xyzabxyzabxyz", "xyz"); // Output: 0 5 10
        System.out.println();
        searchPattern("cabcdab", "abc");       // Output: 1
        System.out.println();
        searchPattern("aaabaaaabaaa", "aa");   // Output: 0 1 4 5 6 9 10
    }
}
