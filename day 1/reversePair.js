/**
 * Counts the number of reverse pairs in the array.
 * A reverse pair is a pair (i, j) such that i < j and nums[i] > 2 * nums[j].
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(nums) {
    return mergeSort(nums, 0, nums.length - 1);
}

function mergeSort(nums, lo, hi) {
    if (lo >= hi) return 0;
    const mid = Math.floor((lo + hi) / 2);
    let count = mergeSort(nums, lo, mid) + mergeSort(nums, mid + 1, hi);
    count += countPairs(nums, lo, mid, hi);
    merge(nums, lo, mid, hi);
    return count;
}

function countPairs(nums, lo, mid, hi) {
    let count = 0, j = mid + 1;
    for (let i = lo; i <= mid; i++) {
        while (j <= hi && nums[i] > 2 * nums[j]) {
            j++;
        }
        count += j - (mid + 1);
    }
    return count;
}

function merge(nums, lo, mid, hi) {
    const temp = [];
    let i = lo, j = mid + 1;
    while (i <= mid && j <= hi) {
        if (nums[i] <= nums[j]) {
            temp.push(nums[i++]);
        } else {
            temp.push(nums[j++]);
        }
    }
    while (i <= mid) temp.push(nums[i++]);
    while (j <= hi) temp.push(nums[j++]);
    for (let k = 0; k < temp.length; k++) {
        nums[lo + k] = temp[k];
    }
}

module.exports = reversePairs;