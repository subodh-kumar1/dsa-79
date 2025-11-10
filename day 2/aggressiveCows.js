/*
Aggressive Cows Problem
You are given n stalls and k cows. The stalls are located at different positions along a straight line. Your task is to place the cows in the stalls such that the minimum distance between any two cows is maximized.
arguments:
n: number of stalls
k: number of cows
nums: array representing the positions of the stalls

Return the largest minimum distance between any two cows.
*/

function aggressiveCows(n, k, nums) {
    nums.sort((a, b) => a - b); // Sort stall positions

    // Helper to check if we can place k cows with at least 'dist' distance apart
    function canPlace(dist) {
        let count = 1; // Place first cow at the first stall
        let lastPos = nums[0];
        for (let i = 1; i < n; i++) {
            if (nums[i] - lastPos >= dist) { // Can place another cow here
                count++;
                lastPos = nums[i]; // Update last position
                if (count === k) return true; // All cows placed successfully
            }
        }
        return false; // Not all cows could be placed
    }

    let left = 1; // Minimum possible distance
    let right = nums[n - 1] - nums[0]; // Maximum possible distance
    let result = 0; // To store the largest minimum distance

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