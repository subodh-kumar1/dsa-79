import java.util.*;

class KMP {
    public static void KMPSearch(String text, String pattern) {
        int n = text.length();
        int m = pattern.length();

        // Step 1: Build LPS array
        int[] lps = buildLPS(pattern);

        List<Integer> result = new ArrayList<>();
        int i = 0, j = 0; // i -> text, j -> pattern

        while (i < n) {
            if (text.charAt(i) == pattern.charAt(j)) {
                i++;
                j++;
                if (j == m) {
                    result.add(i - j); // Match found
                    j = lps[j - 1];   // Continue searching
                }
            } else {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }

        // Print results
        for (int k = 0; k < result.size(); k++) {
            System.out.print(result.get(k));
            if (k < result.size() - 1) System.out.print(" ");
        }
    }

    private static int[] buildLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int len = 0; // length of previous longest prefix suffix
        int i = 1;

        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
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
        KMPSearch("abracadabra", "abra"); // Output: 0 7
        System.out.println();
        KMPSearch("abcabcabc", "abc");    // Output: 0 3 6
        System.out.println();
        KMPSearch("daad", "aa");          // Output: 1
    }
}
