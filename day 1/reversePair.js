/**
 * Counts the number of reverse pairs in an array.
 * A reverse pair is defined as (i, j) where i < j and nums[i] > 2 * nums[j].
 * 
 * @param {number[]} nums - The input array.
 * @return {number} - Total number of reverse pairs.
 */
function reversePairs(nums) {
  if (!Array.isArray(nums) || nums.length < 2) return 0;
  return mergeSortAndCount(nums, 0, nums.length - 1);
}

/**
 * Recursively sorts the array and counts reverse pairs.
 */
function mergeSortAndCount(nums, left, right) {
  if (left >= right) return 0;

  const mid = left + Math.floor((right - left) / 2);
  let count = 0;

  count += mergeSortAndCount(nums, left, mid); //  Divide first half
  count += mergeSortAndCount(nums, mid + 1, right); // Divide second half
  count += countReversePairs(nums, left, mid, right); // Count reverse pairs conquing across halves

  mergeSortedHalves(nums, left, mid, right);
  return count;
}

/**
 * Counts reverse pairs across two sorted halves: [left..mid] and [mid+1..right].
 */
function countReversePairs(nums, left, mid, right) {
  let count = 0;
  let j = mid + 1; // Pointer for the right half

  for (let i = left; i <= mid; i++) { // Iterate through the left half
    while (j <= right && nums[i] > 2 * nums[j]) { // Find valid j's
      j++; // Move pointer in the right half
    }
    count += j - (mid + 1); // Count valid pairs for current i  [COUNT HOW MANY js WORK FOR THIS i]
  }

  return count; // Return total count of reverse pairs found across the two halves
}

/**
 * Merges two sorted halves of the array.
 */
function mergeSortedHalves(nums, left, mid, right) {
  const merged = []; // Temporary array to hold merged result
  let i = left, j = mid + 1; // Pointers for both halves

  while (i <= mid && j <= right) { // Merge while both halves have elements
    if (nums[i] <= nums[j]) { // Choose smaller element
      merged.push(nums[i++]); // Add from left half
    } else { // Choose from right half
      merged.push(nums[j++]); // Add from right half
    }
  }

  while (i <= mid) merged.push(nums[i++]); // Add remaining elements from left half
  while (j <= right) merged.push(nums[j++]); // Add remaining elements from right half

  for (let k = 0; k < merged.length; k++) { // Copy merged result back to original array
    nums[left + k] = merged[k]; // Update original array
  }
}


console.log(reversePairs([]));
console.log(reversePairs([5]));
console.log(reversePairs([1, 2, 3, 4, 5]));
console.log(reversePairs([5, 4, 3, 2, 1]));
console.log(reversePairs([2, 4, 3, 5, 1]));
console.log(reversePairs([1, 1, 1, 1]));
console.log(reversePairs([2000000000, 100000000]));
console.log(reversePairs([-5, -2, -1, 0, 1]));
console.log(reversePairs([-2, -1, 0, 1, 2, 3]));
const arr = Array.from({ length: 10000 }, (_, i) => i);
console.log(reversePairs(arr));

module.exports = reversePairs;
