function longestSubstringWithAtMostKDistinct(s, k) {
    if (k === 0 || s.length === 0) return 0;

    let left = 0, maxLen = 0;
    const charMap = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        charMap.set(char, (charMap.get(char) || 0) + 1);

        while (charMap.size > k) {
            const leftChar = s[left];
            charMap.set(leftChar, charMap.get(leftChar) - 1);
            if (charMap.get(leftChar) === 0) {
                charMap.delete(leftChar);
            }
            left++;
        }

        maxLen = Math.max(maxLen, right - left + 1);
    }

    return maxLen;
}

// Example usage:
console.log(longestSubstringWithAtMostKDistinct("aababbcaacc", 2)); // 6
console.log(longestSubstringWithAtMostKDistinct("abcddefg", 3));    // 4
console.log(longestSubstringWithAtMostKDistinct("abccab", 4));      // 6