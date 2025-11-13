import java.util.*;

class PrimeFactorization {
    public static List<List<Integer>> primeFactorization(int[] queries) {
        List<List<Integer>> result = new ArrayList<>();

        for (int num : queries) {
            List<Integer> factors = new ArrayList<>();
            int n = num;

            // Factor out 2s
            while (n % 2 == 0) {
                factors.add(2);
                n /= 2;
            }

            // Factor out odd numbers from 3 up to sqrt(n)
            for (int i = 3; i * i <= n; i += 2) {
                while (n % i == 0) {
                    factors.add(i);
                    n /= i;
                }
            }

            // If remaining n is > 1, it is prime
            if (n > 1) {
                factors.add(n);
            }

            result.add(factors);
        }
        return result;
    }

    public static void main(String[] args) {
        int[] queries1 = {2, 3, 4, 5, 6};
        System.out.println(primeFactorization(queries1));
        // Output: [[2], [3], [2, 2], [5], [2, 3]]

        int[] queries2 = {7, 12, 18};
        System.out.println(primeFactorization(queries2));
        // Output: [[7], [2, 2, 3], [2, 3, 3]]

        int[] queries3 = {15, 20};
        System.out.println(primeFactorization(queries3));
        // Output: [[3, 5], [2, 2, 5]]
    }
}
