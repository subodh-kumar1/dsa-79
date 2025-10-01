function maxMeetings(start, end) {
    const n = start.length;
    // Create array of meetings with start, end, and index
    const meetings = [];
    for (let i = 0; i < n; i++) {
        meetings.push({start: start[i], end: end[i], idx: i});
    }
    // Sort meetings by end time
    meetings.sort((a, b) => a.end - b.end);

    let count = 1; // Always select the first meeting
    let lastEnd = meetings[0].end;

    for (let i = 1; i < n; i++) {
        if (meetings[i].start > lastEnd) {
            count++;
            lastEnd = meetings[i].end;
        }
    }
    return count;
}

// Example usage:
console.log(maxMeetings([1, 3, 0, 5, 8, 5], [2, 4, 6, 7, 9, 9])); // Output: 4
console.log(maxMeetings([10, 12, 20], [20, 25, 30])); // Output: 1
console.log(maxMeetings([1, 4, 6, 9], [2, 5, 7, 12])); // Output: 4