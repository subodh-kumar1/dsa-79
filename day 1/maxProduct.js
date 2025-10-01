function maxProduct(nums) {
    if (!nums.length) return 0;

    let maxSoFar = nums[0];
    let minSoFar = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // If negative, swap max and min
        if (num < 0) {
            [maxSoFar, minSoFar] = [minSoFar, maxSoFar];
        }

        maxSoFar = Math.max(num, num * maxSoFar);
        minSoFar = Math.min(num, num * minSoFar);

        result = Math.max(result, maxSoFar);
    }

    return result;
}