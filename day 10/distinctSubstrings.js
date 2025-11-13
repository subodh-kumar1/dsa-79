function distinctSubstrings(s) {
    const n = s.length;
    // Step 1: Build suffix array
    const suffixArr = buildSuffixArray(s);
    // Step 2: Build LCP array
    const lcp = buildLCP(s, suffixArr);
    // Step 3: Count distinct substrings
    const totalSubstrings = BigInt(n) * BigInt(n + 1) /
    BigInt(2);
    let duplicateSubstrings = BigInt(0);
    for (const x of lcp) duplicateSubstrings += BigInt(x);
    return Number(totalSubstrings - duplicateSubstrings + BigInt(1));
}
    function buildSuffixArray(s) {
    const n = s.length;
    const order = Array.from({length: n}, (_, i) => i);
    order.sort((a, b) => s.substring(a).localeCompare(s.substring(b)));
    return order;
}
function buildLCP(s, suffixArr) {
    const n = s.length;
    const lcp = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
        let len = 0;
        const a = suffixArr[i - 1], b = suffixArr[i];
        while (a + len < n && b + len < n && s.charAt(a + len) === s.charAt(b + len)) len++;
        lcp[i] = len;
    }
    return lcp;
}
// Example usage:
console.log(distinctSubstrings("aba"));   // 6
console.log(distinctSubstrings("abc"));   // 7
console.log(distinctSubstrings("aaabc")); // ?
