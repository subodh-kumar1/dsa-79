/*
Given a string s and an integer k, find the length of the longest substring that contains at most k distinct characters.

Input: s = "aababbcaacc", k = 2
Output: 6

Algorithm: Sliding Window with Hash Map

Explanation:
1. We use two pointers (left and right) to represent the current window in the string.
2. We maintain a hash map (charMap) to count the occurrences of each character in the current window.
3. We expand the right pointer to include new characters and update their counts in charMap.
4. If the size of charMap exceeds k, we shrink the window from the left by moving the left pointer and updating the counts in charMap until we have at most k distinct characters.
*/
function longestSubstringWithAtMostKDistinct(s, k) {
    if (k === 0 || s.length === 0) return 0;

    let left = 0, maxLen = 0;
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        charMap.set(char, (charMap.get(char) || 0) + 1); // Add/update character count

        while (charMap.size > k) { // More than k distinct characters
            const leftChar = s[left]; // Character to be removed from the window
            charMap.set(leftChar, charMap.get(leftChar) - 1); // Decrease its count
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar); // Remove it from the map if count is 0
            }
            left++; // Shrink the window from the left
        }

        maxLen = Math.max(maxLen, right - left + 1); // Update max length
    }

    return maxLen;
}

// Example usage:
console.log(longestSubstringWithAtMostKDistinct("aababbcaacc", 2)); // 6
console.log(longestSubstringWithAtMostKDistinct("abcddefg", 3));    // 4
console.log(longestSubstringWithAtMostKDistinct("abccab", 4));      // 6