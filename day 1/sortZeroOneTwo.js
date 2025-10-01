function sortZeroOneTwo(arr) {
    const count = [0, 0, 0];
    for (const num of nums) {
        count[num]++;
    }
    let pos = 0;
    for (let i = 0; i < count.length; i++) {
        for (let j = 0; j < count[i]; j++) {
            nums[pos] = i;
            pos++;
        }
    }
    return nums;
}

// Example usage:
const arr = [2, 0, 1, 2, 1, 0, 1, 2, 0];
console.log(sortZeroOneTwo(arr)); // Output: [0, 0, 0, 1, 1, 1, 2, 2, 2]