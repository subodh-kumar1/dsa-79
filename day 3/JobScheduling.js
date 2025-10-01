function jobScheduling(Jobs) {
    // Sort jobs by profit in descending order
    Jobs.sort((a, b) => b[2] - a[2]);

    // Find maximum deadline
    let maxDeadline = 0;
    for (let job of Jobs) {
        maxDeadline = Math.max(maxDeadline, job[1]);
    }

    // Initialize time slots
    let slots = Array(maxDeadline + 1).fill(false);
    let count = 0, profit = 0;

    // Iterate over jobs
    for (let job of Jobs) {
        // Find a free slot for this job (from its deadline to 1)
        for (let j = job[1]; j > 0; j--) {
            if (!slots[j]) {
                slots[j] = true;
                count++;
                profit += job[2];
                break;
            }
        }
    }

    return [count, profit];
}

// Example usage:
console.log(jobScheduling([[1, 4, 20], [2, 1, 10], [3, 1, 40], [4, 1, 30]])); // Output: [2, 60]
console.log(jobScheduling([[1, 2, 100], [2, 1, 19], [3, 2, 27], [4, 1, 25], [5, 1, 15]])); // Output: [2, 127]
console.log(jobScheduling([[1, 1, 100], [2, 2, 200], [3, 3, 300], [4, 4, 400]])); // Output: [4, 1000]