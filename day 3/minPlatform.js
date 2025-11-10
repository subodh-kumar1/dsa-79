/**
 * Returns the minimum number of platforms required for the trains.
 * @param {number[]} arrival - Array of arrival times in 24-hour format (e.g., 900, 940).
 * @param {number[]} departure - Array of departure times in 24-hour format.
 * @returns {number} Minimum number of platforms required.
 */
function findMinPlatforms(arrival, departure) {
    if (!arrival.length || !departure.length) return 0;

    // Sort arrival and departure times
    arrival.sort((a, b) => a - b); // Sort arrival times
    departure.sort((a, b) => a - b); // Sort departure times

    let n = arrival.length; // Number of trains
    let plat_needed = 1, max_platforms = 1; // At least one platform needed
    let i = 1, j = 0; // Pointers for arrival and departure

    while (i < n && j < n) {
        // If next train arrives before the last one departs, need extra platform
        if (arrival[i] <= departure[j]) {
            plat_needed++; // New platform needed
            i++; // Move to next arrival
        } else {
            // Train departs, free a platform
            plat_needed--; // Platform freed
            j++; // Move to next departure
        }
        max_platforms = Math.max(max_platforms, plat_needed); // Update max platforms needed
    }

    return max_platforms;
}

// Example usage:
console.log(findMinPlatforms([900, 940, 950, 1100, 1500, 1800], [910, 1200, 1120, 1130, 1900, 2000])); // 3
console.log(findMinPlatforms([900, 1100, 1235], [1000, 1200, 1240])); // 1
console.log(findMinPlatforms([900, 1000, 1200], [1000, 1200, 1240])); // 1
console.log(findMinPlatforms([900, 1000, 1200] ,[1000, 1200, 1240])); // 1