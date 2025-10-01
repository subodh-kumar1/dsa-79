/**
 * Returns the minimum number of platforms required for the trains.
 * @param {number[]} arrival - Array of arrival times in 24-hour format (e.g., 900, 940).
 * @param {number[]} departure - Array of departure times in 24-hour format.
 * @returns {number} Minimum number of platforms required.
 */
function findMinPlatforms(arrival, departure) {
    if (!arrival.length || !departure.length) return 0;

    // Sort arrival and departure times
    arrival.sort((a, b) => a - b);
    departure.sort((a, b) => a - b);

    let n = arrival.length;
    let plat_needed = 1, max_platforms = 1;
    let i = 1, j = 0;

    while (i < n && j < n) {
        // If next train arrives before the last one departs, need extra platform
        if (arrival[i] <= departure[j]) {
            plat_needed++;
            i++;
        } else {
            // Train departs, free a platform
            plat_needed--;
            j++;
        }
        max_platforms = Math.max(max_platforms, plat_needed);
    }

    return max_platforms;
}

// Example usage:
console.log(findMinPlatforms([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000])); // 3
console.log(findMinPlatforms([900, 1100, 1235], [1000, 1200, 1240])); // 1
console.log(findMinPlatforms([900, 1000, 1200], [1000, 1200, 1240])); // 1
console.log(findMinPlatforms([900, 1000, 1200] ,[1000, 1200, 1240])); // 1