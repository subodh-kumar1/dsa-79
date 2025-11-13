class Heapify {
    public void updateHeap(int[] nums, int ind, int val) {
        nums[ind] = val;
        // Try to bubble up first
        bubbleUp(nums, ind);
        // If bubble up did nothing, maybe bubble down is needed
        bubbleDown(nums, ind);
    }

    private void bubbleUp(int[] nums, int i) {
        while (i > 0) {
            int parent = (i - 1) / 2;
            if (nums[parent] <= nums[i]) break;
            swap(nums, parent, i);
            i = parent;
        }
    }

    private void bubbleDown(int[] nums, int i) {
        int n = nums.length;
        while (true) {
            int left = 2 * i + 1;
            int right = 2 * i + 2;
            int smallest = i;

            if (left < n && nums[left] < nums[smallest]) {
                smallest = left;
            }
            if (right < n && nums[right] < nums[smallest]) {
                smallest = right;
            }

            if (smallest == i) break;
            swap(nums, i, smallest);
            i = smallest;
        }
    }

    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
}
