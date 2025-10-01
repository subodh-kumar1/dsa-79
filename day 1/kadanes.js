function maxSubArray(nums) {
    let currSum = nums[0], maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currSum = Math.max(currSum + nums[i], nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6