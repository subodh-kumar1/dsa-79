function subArrayRanges(nums) {
    const n = nums.length;
    let total = 0;

    // Helper to calculate sum of all subarray minimums or maximums
    function sumOfSubarrays(isMax) {
        let stack = [];
        let res = 0;
        for (let i = 0; i <= n; i++) {
            let cur = isMax ? Infinity : -Infinity;
            if (i < n) cur = nums[i];
            while (stack.length && (
                (isMax && nums[stack[stack.length - 1]] < cur) ||
                (!isMax && nums[stack[stack.length - 1]] > cur)
            )) {
                let j = stack.pop();
                let k = stack.length ? stack[stack.length - 1] : -1;
                res += nums[j] * (i - j) * (j - k);
            }
            stack.push(i);
        }
        return res;
    }

    // Sum of all subarray maximums minus sum of all subarray minimums
    return sumOfSubarrays(true) - sumOfSubarrays(false);
}

// Example usage:
console.log(subArrayRanges([1, 2, 3]));      // Output: 4
console.log(subArrayRanges([1, 3, 3]));      // Output: 4
console.log(subArrayRanges([4, -2, -3, 4, 1])); // Output: 59