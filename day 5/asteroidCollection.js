function asteroidCollision(asteroids) {
    const stack = [];
    for (let asteroid of asteroids) {
        let destroyed = false;
        while (
            stack.length > 0 &&
            stack[stack.length - 1] > 0 &&
            asteroid < 0
        ) {
            const top = stack[stack.length - 1];
            if (Math.abs(top) < Math.abs(asteroid)) {
                stack.pop();
                continue;
            } else if (Math.abs(top) === Math.abs(asteroid)) {
                stack.pop();
                destroyed = true;
                break;
            } else {
                destroyed = true;
                break;
            }
        }
        if (!destroyed) {
            stack.push(asteroid);
        }
    }
    return stack;
}

// Example usage:
console.log(asteroidCollision([1, 2, 3, -4, -2])); // [-4, -2]
console.log(asteroidCollision([5, 10, -5, -10, 8, -8, -3, 12])); // [5, 12]
console.log(asteroidCollision([10, 2, -5])); // [10]