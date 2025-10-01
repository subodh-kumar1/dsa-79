function longestSubstringWithoutRepeatingChars(S) {
    let maxLen = 0;
    let start = 0;
    const seen = new Map();

    for (let end = 0; end < S.length; end++) {
        const char = S[end];
        if (seen.has(char) && seen.get(char) >= start) {
            start = seen.get(char) + 1;
        }
        seen.set(char, end);
        maxLen = Math.max(maxLen, end - start + 1);
    }

    return maxLen;
}

// Example usage:
console.log(longestSubstringWithoutRepeatingChars("abcddabac")); // 4
console.log(longestSubstringWithoutRepeatingChars("aaabbbccc")); // 2
console.log(longestSubstringWithoutRepeatingChars("aaaa"));      // 1