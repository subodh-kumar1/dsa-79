/*
    Given an integer array nums where exactly two elements appear only once and all the other elements appear exactly twice, return the two elements that appear only once. You can return the answer in any order.
    You must write an algorithm that runs in linear runtime complexity and uses only constant extra space.

    Algorithm: Bit Manipulation (XOR)

    Explanation:
    1. XOR all numbers in the array. The result will be the XOR of the two unique numbers (let's call them unique1 and unique2) because all other numbers cancel out.
    2. Find a bit that is set (1) in the result of step 1. This bit is different between unique1 and unique2.
    3. Use this bit to partition the original array into two groups: one group with this bit set and another group with this bit not set.
    4. XOR all numbers in each group separately. Each group will yield one of the unique numbers.

*/
function singleNumber3(nums) {
    if (!Array.isArray(nums) || nums.length < 2) {
        throw new Error("Input must be an array with at least two elements.");
    }

    // XOR all numbers to get xor = unique1 ^ unique2
    let xor = 0;
    for (const num of nums) xor ^= num;

    // Find rightmost set bit (distinguishes the two unique numbers)
    /*
    Explanation:
    The expression xor & -xor isolates the rightmost set bit of xor.
    example:
    If xor = 0010 1100 (which is 44 in decimal),
    then -xor (the two's complement) is 1101 0100 (which is -44 in decimal).
    how did it get that?
    1. Invert all bits of xor: 1101 0011
    2. Add 1 to the inverted bits: 1101 0011 + 1 = 1101 0100

    Now, performing the bitwise AND operation:
    0010 1100
    1101 0100
    -----------
    0000 0100
    */
    const mask = xor & -xor;

    let num1 = 0, num2 = 0;
    for (const num of nums) { // Partition numbers into two groups based on the set bit
        if ((num & mask) === 0) num1 ^= num; // Group where the bit is not set
        else num2 ^= num; // Group where the bit is set
    }

    return num1 < num2 ? [num1, num2] : [num2, num1]; // Return the two unique numbers in ascending order
}

// Example usage:
console.log(singleNumber3([1, 2, 1, 3, 5, 2])); // [3, 5]
console.log(singleNumber3([-1, 0])); // [-1, 0]
console.log(singleNumber3([1, 9, 1, 2, 8, 2])); // [8, 9]
