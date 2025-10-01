function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b); // Sort to handle duplicates easily
    const results = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            results.push([...path]);
            return;
        }
        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) continue;
            path.push(candidates[i]);
            backtrack(i + 1, path, sum + candidates[i]);
            path.pop();
        }
    }

    backtrack(0, [], 0);
    return results;
}

// Example usage:
console.log(combinationSum2([2, 1, 2, 7, 6, 1, 5], 8)); // [ [1,1,6], [1,2,5], [1,7], [2,6] ]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); // [ [1,2,2], [5] ]
console.log(combinationSum2([2, 1, 2], 5)); // [ [1,2,2] ]