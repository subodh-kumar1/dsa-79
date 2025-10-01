function aggressiveCows(n, k, nums) {
    nums.sort((a, b) => a - b);

    // Helper to check if we can place k cows with at least 'dist' distance apart
    function canPlace(dist) {
        let count = 1; // Place first cow at the first stall
        let lastPos = nums[0];
        for (let i = 1; i < n; i++) {
            if (nums[i] - lastPos >= dist) {
                count++;
                lastPos = nums[i];
                if (count === k) return true;
            }
        }
        return false;
    }

    let left = 1;
    let right = nums[n - 1] - nums[0];
    let result = 0;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (canPlace(mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return result;
}

// Example usage:
console.log(aggressiveCows(6, 4, [0, 3, 4, 7, 10, 9])); // Output: 3
console.log(aggressiveCows(5, 2, [4, 2, 1, 3, 6]));      // Output: 5
console.log(aggressiveCows(5, 3, [10, 1, 2, 7, 5]));     // Output: 4