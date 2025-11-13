class Heapsort {
    public void heapSort(int[] nums) {
        int n = nums.length;

        // Step 1: Build max heap
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(nums, n, i);
        }

        // Step 2: Extract elements from heap
        for (int i = n - 1; i > 0; i--) {
            swap(nums, 0, i);        // Move current root to end
            heapify(nums, i, 0);     // Heapify reduced heap
        }
    }

    private void heapify(int[] nums, int heapSize, int i) {
        int largest = i; // root
        int left = 2 * i + 1;
        int right = 2 * i + 2;

        // Check if left child exists and is greater
        if (left < heapSize && nums[left] > nums[largest]) {
            largest = left;
        }

        // Check if right child exists and is greater
        if (right < heapSize && nums[right] > nums[largest]) {
            largest = right;
        }

        // If root is not largest, swap and continue heapifying
        if (largest != i) {
            swap(nums, i, largest);
            heapify(nums, heapSize, largest);
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
