/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if(str1 + str2 != str2 + str1) return "";

    const gcd = (len1, len2) => {
        while(len2 != 0) {
            [len1, len2] = [len2, len1 % len2];
        }
        return len1;
    }

    return str1.slice(0, gcd(str1.length, str2.length));
};

/*
Explanation:
1. The function first checks if the concatenation of str1 and str2 in both orders is the same. If not, it returns an empty string since no common divisor string exists.
2. It defines a helper function `gcd` to compute the greatest common divisor of the lengths of str1 and str2 using the Euclidean algorithm.
3. Finally, it returns the substring of str1 from index 0 to the length equal to the GCD of the lengths of str1 and str2, which is the greatest common divisor string.
*/
// Example usage:
console.log(gcdOfStrings("ABCABC", "ABC")); // Output: "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // Output: "AB"
console.log(gcdOfStrings("LEET", "CODE")); // Output: ""