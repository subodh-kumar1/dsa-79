/*
    Given an array of integers nums and an integer k. A subarray is called nice if there are k odd numbers on it.
    Return the number of nice sub-arrays.
    Algorithm: Prefix Sum with Hash Map
    In this approach, we maintain a count of odd numbers encountered so far (oddCount) as we iterate through the array.
    We use a hash map (prefix) to store the frequency of each oddCount value.
    For each element in the array:
    1. If the element is odd, we increment oddCount.
    2. We then check if there exists a prefix with oddCount - k. 
        If it does, it means there is a subarray ending at the current index with exactly k odd numbers, 
        and we add the frequency of that prefix to our result count.
    3. Finally, we update the frequency of the current oddCount in the prefix map.
    
    Input:
    nums = [1,1,2,1,1], k = 3
    Output: 2


*/
function numberOfNiceSubarrays(nums, k) {
    let count = 0;
    let oddCount = 0;
    let prefix = {0: 1};

    for (let num of nums) {
        if (num % 2 !== 0) oddCount++;
        if (prefix[oddCount - k] !== undefined) {
            count += prefix[oddCount - k];
        }
        prefix[oddCount] = (prefix[oddCount] || 0) + 1;
    }

    return count;
}

// Example usage:
console.log(numberOfNiceSubarrays([1, 1, 2, 1, 1], 3)); // Output: 2
console.log(numberOfNiceSubarrays([4, 8, 2], 1)); // Output: 0
console.log(numberOfNiceSubarrays([41, 3, 5], 2)); // Output: 1