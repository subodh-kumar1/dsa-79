function findMedianSortedArrays(arr1, arr2) {
    const m = arr1.length;
    const n = arr2.length;
    const total = m + n;
    let i = 0, j = 0, merged = [];

    // Merge the two arrays
    while (i < m && j < n) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i++]);
        } else {
            merged.push(arr2[j++]);
        }
    }
    while (i < m) merged.push(arr1[i++]);
    while (j < n) merged.push(arr2[j++]);

    // Find the median
    if (total % 2 === 1) {
        return merged[Math.floor(total / 2)];
    } else {
        const mid1 = merged[total / 2 - 1];
        const mid2 = merged[total / 2];
        return (mid1 + mid2) / 2;
    }
}
// Time Complexity: O(m + n), Space Complexity: O(m + n)


// optimized version using binary search
function findMedianSortedArraysOptimized(arr1, arr2) {
    if (arr1.length > arr2.length) {
        [arr1, arr2] = [arr2, arr1];
    } // ensure arr1 is the smaller array
    const m = arr1.length;
    const n = arr2.length;

    let left = 0, right = m; // binary search on the smaller array

    while (left <= right) {
        const partitionA = Math.floor((left + right) / 2); // Partition index for arr1
        const partitionB = Math.floor((m + n + 1) / 2) - partitionA;
        const maxLeftA = partitionA === 0 ? -Infinity : arr1[partitionA - 1];
        const minRightA = partitionA === m ? Infinity : arr1[partitionA];
        const maxLeftB = partitionB === 0 ? -Infinity : arr2[partitionB - 1];
        const minRightB = partitionB === n ? Infinity : arr2[partitionB];
        if (maxLeftA <= minRightB && maxLeftB <= minRightA) {


            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
            } else {
                return Math.max(maxLeftA, maxLeftB);
            }
        } else if (maxLeftA > minRightB) {
            right = partitionA - 1;
        } else {
            left = partitionA + 1;
        }
    }
    throw new Error("Input arrays are not sorted or invalid.");
}
// Time Complexity: O(log(min(m, n))), Space Complexity: O(1)

// Example usage:
console.log(findMedianSortedArrays([2, 4, 6], [1, 3, 5])); // 3.5
console.log(findMedianSortedArrays([2, 4, 6], [1, 3]));    // 3.0
console.log(findMedianSortedArrays([2, 4, 5], [1, 6]));    // 4.0