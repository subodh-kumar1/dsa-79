function removeKDigits(num, k) {
    const stack = [];
    for (let digit of num) {
        while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
            stack.pop();
            k--;
        }
        stack.push(digit);
    }
    // If k > 0, remove from the end
    while (k > 0) {
        stack.pop();
        k--;
    }
    // Remove leading zeros
    let result = stack.join('').replace(/^0+/, '');
    return result === '' ? '0' : result;
}

// Example usage:
console.log(removeKDigits("541892", 2));    // "1892"
console.log(removeKDigits("1002991", 3));   // "21"
console.log(removeKDigits("10", 2));        // "0"