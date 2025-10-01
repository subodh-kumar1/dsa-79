/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    const n = nums.length;

    for (let i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // skip duplicates for i

        let left = i + 1, right = n - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                // skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    return res;
}

// Example usage:
console.log(threeSum([2, -2, 0, 3, -3, 5])); // [[-3,0,3],[-3,-2,5],[-2,0,2]]
console.log(threeSum([2, -1, -1, 3, -1]));   // [[-1,-1,2]]
console.log(threeSum([8, -6, 5, 4]));        // []