function numberOfNiceSubarrays(nums, k) {
    let count = 0;
    let oddCount = 0;
    let prefix = {0: 1};

    for (let num of nums) {
        if (num % 2 !== 0) oddCount++;
        if (prefix[oddCount - k] !== undefined) {
            count += prefix[oddCount - k];
        }
        prefix[oddCount] = (prefix[oddCount] || 0) + 1;
    }

    return count;
}

// Example usage:
console.log(numberOfNiceSubarrays([1, 1, 2, 1, 1], 3)); // Output: 2
console.log(numberOfNiceSubarrays([4, 8, 2], 1)); // Output: 0
console.log(numberOfNiceSubarrays([41, 3, 5], 2)); // Output: 1