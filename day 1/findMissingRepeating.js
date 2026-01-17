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

// Optimized approach using mathematical properties
function findMissingRepeatingNumbersOptimized(nums) {
    const n = nums.length;
    let sumN = (n * (n + 1)) / 2;
    let sumNSq = (n * (n + 1) * (2 * n + 1)) / 6;

    let sumArr = 0;
    let sumArrSq = 0;

    for (const num of nums) {
        sumArr += num;
        sumArrSq += num * num;
    }

    const diff = sumN - sumArr; // missing - repeating
    const diffSq = sumNSq - sumArrSq; // missing^2 - repeating^2

    const sumMR = diffSq / diff; // missing + repeating

    const missing = (diff + sumMR) / 2;
    const repeating = sumMR - missing;

    return [repeating, missing];
}

// Example usage:
const nums = [3, 1, 3, 4, 2];
console.log(findMissingRepeatingNumbers(nums)); // Output: [3, 5]
console.log(findMissingRepeatingNumbersOptimized(nums)); // Output: [3, 5]