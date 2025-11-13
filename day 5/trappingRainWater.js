function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {  // update left max
                leftMax = height[left]; // update left max
            } else {
                water += leftMax - height[left]; // accumulate water
            }
            left++;
        } else {
            if (height[right] >= rightMax) { // update right max
                rightMax = height[right];   // update right max
            } else {
                water += rightMax - height[right]; // accumulate water
            }
            right--;
        }
    }
    return water;
}

// Example usage:
const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height)); // Output: 6