/**
 * Searches for a target value in a rotated sorted array.
 * @param {number[]} nums - Rotated sorted array.
 * @param {number} target - Value to search for.
 * @return {number} Index of target if found, else -1.
 */
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) return mid;

        // Handle duplicates
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left++;
            right--;
        }
        // Left half is sorted
        else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// Example usage:
console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4