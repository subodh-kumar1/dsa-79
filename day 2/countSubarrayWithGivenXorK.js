function countSubarraysWithXorK(nums, k) {
    let count = 0;
    let xor = 0;
    const freq = new Map();
    freq.set(0, 1); // Initialize with prefix xor 0 occurring once

    for (let num of nums) {
        xor ^= num; // Update prefix xor
        count += (freq.get(xor ^ k) || 0); // Increment count by occurrences
        freq.set(xor, (freq.get(xor) || 0) + 1); // Increment frequency of current prefix xor
    }
    return count;
}


// Example usage:
console.log(countSubarraysWithXorK([4, 2, 2, 6, 4], 6)); // Output: 4
console.log(countSubarraysWithXorK([5, 6, 7, 8, 9], 5)); // Output: 2
console.log(countSubarraysWithXorK([5, 2, 9], 7));       // Output: 1