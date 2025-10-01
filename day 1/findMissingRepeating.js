function findMissingRepeatingNumbers(nums) {
    const set = new Set();
    const result = [0, 0];

    for (const num of nums) {
        if (set.has(num)) {
            result[0] = num; // Repeating number
        }
        set.add(num);
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)) {
            result[1] = i; // Missing number
            break;
        }
    }
    return result;
}