function longestCompleteString(nums) {
    const set = new Set(nums);
    let result = "";
    for (const word of nums) {
        if (isComplete(word, set)) {
            if (word.length > result.length || 
                (word.length === result.length && word < result)) {
                result = word;
            }
        }
    }
    return result === "" ? "None" : result;
}
function isComplete(word, set) {
    for (let i = 1; i <= word.length; i++) {
        if (!set.has(word.substring(0, i))) return false;
    }
    return true;
}
// Driver
console.log(longestCompleteString(["n", "ni", "nin", "ninj", "ninja", "nil"])); // ninja
console.log(longestCompleteString(["ninja", "night", "nil"])); // None
console.log(longestCompleteString(["cat", "car", "cow", "c", "ca", "t", "r", "w"])); // car OR cat OR cow?

// Time Complexity: O(N * L^2) where N is the number of words and L is the maximum length of a word.
// Space Complexity: O(N) for storing the words in a set.
