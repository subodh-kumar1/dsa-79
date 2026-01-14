# Day 2: Binary Search & Dynamic Programming

## Overview
Advanced search techniques and optimization problems using binary search and backtracking.

## Problems

### 1. **Aggressive Cows** - Binary Search Application
**Description**: Place k cows in n stalls such that minimum distance between any two cows is maximized.

**Approach**: Binary search on the answer (distance). For each distance, check if we can place all cows.

```mermaid
graph TD
    A["Stalls: [1,2,4,8,9], k=3 cows"] --> B["Binary Search on distance"]
    B --> C["Try distance = 4"]
    C --> D["Place cows at positions 1, 5, 9"]
    D --> E["Check if all cows placed ✓"]
    E --> F["Binary search continues"]
    F --> G["Result: 4"]
```

**Time Complexity**: O(n log n + n log(max_distance)) | **Space Complexity**: O(1)

---

### 2. **Combination Sum II**
**Description**: Find all unique combinations that sum to target, each element used once.

**Approach**: Backtracking with sorting to avoid duplicates.

```mermaid
graph TD
    A["[10,1,2,7,6,1,5], target=8"] --> B["Sort: [1,1,2,5,6,7,10]"]
    B --> C["Backtrack"]
    C --> D["Path: [1,1,6]"]
    C --> E["Path: [1,2,5]"]
    C --> F["Path: [1,7]"]
    C --> G["Path: [2,6]"]
```

**Time Complexity**: O(2^n) | **Space Complexity**: O(n)

---

### 3. **Count Subarray with Given XOR**
**Description**: Count subarrays with XOR equal to k.

**Approach**: Use prefix XOR with hash map. If prefix_xor ^ k exists, it forms a valid subarray.

```mermaid
graph LR
    A["arr=[4,2,2,6,4], k=6"] --> B["Track prefix XOR values"]
    B --> C["For each element, check if prefix_xor^k exists"]
    C --> D["Count = 4"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 4. **Koko Eating Bananas** - Binary Search on Answer
**Description**: Find minimum eating speed for Koko to finish all piles within h hours.

**Approach**: Binary search on the eating speed and verify if Koko can finish within time limit.

```mermaid
graph TD
    A["Piles: [312884132], h=968709470"] --> B["Binary Search: low=1, high=max_pile"]
    B --> C["Try mid speed"]
    C --> D["Calculate total hours needed"]
    D --> E["If hours ≤ h, try slower speed"]
    E --> F["If hours > h, try faster speed"]
    F --> G["Result: minimum speed"]
```

**Time Complexity**: O(n log(max_pile)) | **Space Complexity**: O(1)

---

### 5. **Median of Two Sorted Arrays** - Hard Problem
**Description**: Find median of two sorted arrays.

**Approach**: Binary search on smaller array to partition both arrays correctly.

```mermaid
graph TD
    A["arr1 = [1,3], arr2 = [2]"] --> B["Binary search on arr1"]
    B --> C["Find partition where left_max ≤ right_min"]
    C --> D["Partition: [1 | 3] and [2]"]
    D --> E["left_max = max(1,2) = 2"]
    E --> F["Median = 2"]
```

**Time Complexity**: O(log(min(m,n))) | **Space Complexity**: O(1)

---

### 6. **N-Queens Problem** - Backtracking
**Description**: Place n queens on n×n chessboard so no two queens attack each other.

**Approach**: Backtracking with constraint checking (no same row, column, or diagonal).

```mermaid
graph TD
    A["4-Queens Problem"] --> B["Place Q1 in row 0"]
    B --> C["Try positions for Q2"]
    C --> D["Backtrack on conflicts"]
    D --> E["Find all valid configurations"]
    E --> F["Result: 2 solutions for n=4"]
```

**Time Complexity**: O(N!) | **Space Complexity**: O(N)

---

### 7. **Search in Rotated Sorted Array**
**Description**: Find target in a rotated sorted array with O(log n) complexity.

**Approach**: Binary search identifying which half is properly sorted, then search accordingly.

```mermaid
graph LR
    A["[4,5,6,7,0,1,2], target=0"] --> B["mid=7"]
    B --> C["Right half [0,1,2] is sorted"]
    C --> D["0 is in right half"]
    D --> E["Search right"]
    E --> F["Result: index=4"]
```

**Time Complexity**: O(log n) | **Space Complexity**: O(1)
