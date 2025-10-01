function nextGreaterElement(arr) {
    const n = arr.length;
    const result = new Array(n).fill(-1);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length && arr[i] > arr[stack[stack.length - 1]]) {
            const idx = stack.pop();
            result[idx] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

// Example usage:
console.log(nextGreaterElement([1, 3, 2, 4])); // [3, 4, 4, -1]
console.log(nextGreaterElement([6, 8, 0, 1, 3])); // [8, -1, 1, 3, -1]
console.log(nextGreaterElement([1, 3, 2])); // [3, -1, -1]