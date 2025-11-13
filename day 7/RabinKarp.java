class RabinKarp {
    public List<Integer> search(String pat, String txt) {
        int n = pat.length();
        int m = txt.length();

        // List to store the result
        List<Integer> ans = new ArrayList<>();

        // Traverse the text string
        for (int i = 0; i <= m - n; i++) {
            boolean flag = true;

            // Check for every character in pattern
            for (int j = 0; j < n; j++) {

                // If characters does not match
                if (txt.charAt(i + j) != pat.charAt(j)) {
                    flag = false; // Set the flag as false
                    break;
                }
            }

            // if the pattern is found, store the index
            if (flag) ans.add(i);
        }

        return ans; // Return the stored result
    }
}
