/**
 * Finds the minimum eating speed k such that all bananas are eaten in h hours.
 * @param {number} n - Number of piles.
 * @param {number[]} nums - Array representing bananas in each pile.
 * @param {number} h - Total hours available.
 * @return {number} - Minimum bananas per hour.
 */
function minEatingSpeed(n, nums, h) {
    let left = 1;
    let right = Math.max(...nums);

    const hoursNeeded = (speed) => {
        let hours = 0;
        for (let bananas of nums) {
            hours += Math.ceil(bananas / speed);
        }
        return hours;
    };

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (hoursNeeded(mid) > h) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

// Example usage:
console.log(minEatingSpeed(4, [7, 15, 6, 3], 8)); // Output: 5
console.log(minEatingSpeed(5, [25, 12, 8, 14, 19], 5)); // Output: 25
console.log(minEatingSpeed(4, [3, 7, 6, 11], 8)); // Output: 4