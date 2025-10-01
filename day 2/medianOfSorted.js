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

// Example usage:
console.log(findMedianSortedArrays([2, 4, 6], [1, 3, 5])); // 3.5
console.log(findMedianSortedArrays([2, 4, 6], [1, 3]));    // 3.0
console.log(findMedianSortedArrays([2, 4, 5], [1, 6]));    // 4.0