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
  if (left >= right) return 0; // Base case: single element

  const mid = left + Math.floor((right - left) / 2); // Find mid index
  let count = 0;

  count += mergeSortAndCount(nums, left, mid); //  Divide first half
  count += mergeSortAndCount(nums, mid + 1, right); // Divide second half
  count += countReversePairs(nums, left, mid, right); // Count reverse pairs conquing across halves

  mergeSortedHalves(nums, left, mid, right); // Merge the two sorted halves
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

/*
Algotithm Explanation:
The algorithm uses a modified merge sort to count reverse pairs efficiently. It recursively divides the array into halves, counts reverse pairs across the two halves, and merges them back together in sorted order. The key steps are:
1. Divide: Recursively split the array into two halves until single elements are reached.
2. Conquer: Count reverse pairs across the two sorted halves using two pointers.
3. Merge: Merge the two sorted halves back together.

Algorithm Complexity:
- Time Complexity: O(n log n), where n is the number of elements in the array. This is due to the divide-and-conquer approach of merge sort.
- Space Complexity: O(n) for the temporary array used during the merge process.

Algorithm Steps:
1. Check if the input array is valid and has at least two elements.
2. Define a recursive function `mergeSortAndCount` to perform the modified merge sort and count reverse pairs.
3. Define a helper function `countReversePairs` to count reverse pairs across two sorted halves.
4. Define a helper function `mergeSortedHalves` to merge two sorted halves of the array.
5. Return the total count of reverse pairs found in the array.

countReversePairs Explanation:
This function counts the number of reverse pairs (i, j) such that i < j and nums[i] > 2 * nums[j] across two sorted halves of the array. It uses two pointers: one iterating through the left half and another through the right half. For each element in the left half, it advances the pointer in the right half until the condition is violated, counting how many valid j's exist for each i. This approach ensures that we efficiently count reverse pairs without needing a nested loop, maintaining an overall O(n log n) time complexity for the entire algorithm.
steps:
1. Initialize a count variable to keep track of reverse pairs.
2. Use a pointer j to traverse the right half of the array.
3. For each element in the left half, move the pointer j in the right half as long as the condition nums[i] > 2 * nums[j] holds.
4. For each valid position of j, increment the count by the number of valid elements found in the right half for the current i.
5. Return the total count of reverse pairs found across the two halves.
*/

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
