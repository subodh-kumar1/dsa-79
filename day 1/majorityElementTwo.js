/**
 * Finds all elements in the array that appear more than ⌊ n/3 ⌋ times.
 * @param {number[]} nums
 * @return {number[]}
 */
function majorityElementTwo(nums) {
    let vote1 = 0, vote2 = 0;
    let candidate1 = null, candidate2 = null;

    for (let num of nums) {
        if (candidate1 === num) {
            vote1++;
        } else if (candidate2 === num) {
            vote2++;
        } else if (vote1 === 0) {
            candidate1 = num;
            vote1 = 1;
        } else if (vote2 === 0) {
            candidate2 = num;
            vote2 = 1;
        } else {
            vote1--;
            vote2--;
        }
    }

    // Verify the candidates
    let count1 = 0, count2 = 0;
    for (let num of nums) {
        if (num === candidate1) count1++;
        else if (num === candidate2) count2++;
    }

    const result = [];
    const n = nums.length;
    if (count1 > Math.floor(n / 3)) result.push(candidate1);
    if (count2 > Math.floor(n / 3)) result.push(candidate2);

    return result;
}

module.exports = majorityElementTwo;