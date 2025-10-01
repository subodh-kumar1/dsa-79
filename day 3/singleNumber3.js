function singleNumber3(nums) {
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Input must be an array with at least two elements.");
    }

    // XOR all numbers to get xor = unique1 ^ unique2
    let xor = 0;
    for (const num of nums) xor ^= num;

    // Find rightmost set bit (distinguishes the two unique numbers)
    const mask = xor & -xor;

    let num1 = 0, num2 = 0;
    for (const num of nums) {
        if ((num & mask) === 0) num1 ^= num;
        else num2 ^= num;
    }

    return num1 < num2 ? [num1, num2] : [num2, num1];
}

// Example usage:
console.log(singleNumber3([1, 2, 1, 3, 5, 2])); // [3, 5]
console.log(singleNumber3([-1, 0])); // [-1, 0]
console.log(singleNumber3([1, 9, 1, 2, 8, 2])); // [8, 9]
