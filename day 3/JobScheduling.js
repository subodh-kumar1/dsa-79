/*
Job Scheduling Problem
You are given an array of jobs where each job is represented as a triplet [jobId, deadline, profit]. 
The goal is to schedule the jobs to maximize the total profit while ensuring that no two jobs overlap in their deadlines.

Each job takes 1 unit of time to complete, and a job can only be scheduled before or on its deadline.
arguments:
Jobs: array of jobs, where each job is represented as [jobId, deadline, profit]
Return an array containing the number of jobs done and the maximum profit.

Algorithm: Greedy with Disjoint Set Union (DSU)

Explanation:
1. Sort the jobs in descending order based on profit.
2. Initialize a set to keep track of free time slots up to the maximum deadline.
3. Iterate through the sorted jobs and for each job, find a free time slot before its deadline.
*/
function jobScheduling(Jobs) {
    // Sort jobs by profit in descending order
    Jobs.sort((a, b) => b[2] - a[2]);
    const maxDeadline = Math.max(...Jobs.map(job => job[1]));
    const freeSlots = new Set();
    for (let i = 1; i <= maxDeadline; i++) {
        freeSlots.add(i);
    }
    let count = 0, profit = 0;
    for (let job of Jobs) {
        for (let j = job[1]; j > 0; j--) {
            if (freeSlots.has(j)) {
                freeSlots.delete(j);
                count++;
                profit += job[2];
                break;
            }
        }
    }
    return [count, profit];
}

// Time Complexity: O(n log n) due to sorting, Space Complexity: O(d) where d is the maximum deadline
// Example usage:
console.log(jobScheduling([[1, 4, 20], [2, 1, 10], [3, 1, 40], [4, 1, 30]])); // Output: [2, 60]
console.log(jobScheduling([[1, 2, 100], [2, 1, 19], [3, 2, 27], [4, 1, 25], [5, 1, 15]])); // Output: [2, 127]
console.log(jobScheduling([[1, 1, 100], [2, 2, 200], [3, 3, 300], [4, 4, 400]])); // Output: [4, 1000]