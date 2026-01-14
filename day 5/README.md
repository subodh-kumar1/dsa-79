# Day 5: Stack & Monotonic Structures

## Overview
Stack-based algorithms, monotonic deques/stacks, and dynamic programming on stack problems.

## Problems

### 1. **Asteroid Collision** - Stack Simulation
**Description**: Simulate asteroid collisions and return final state.

**Approach**: Use stack to track asteroids, check collision rules (left-moving hits right-moving).

```mermaid
graph LR
    A["[5,10,-5]"] --> B["Push 5, Push 10"]
    B --> C["Push -5: collision with 10"]
    C --> D["10 > 5, so 5 destroyed"]
    D --> E["10 survives, push 10"]
    E --> F["Result: [10]"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 2. **Largest Rectangle in Histogram** - Monotonic Stack
**Description**: Find largest rectangle area in histogram.

**Approach**: Use monotonic stack to efficiently find left and right boundaries for each bar.

```mermaid
graph TD
    A["Heights: [2,1,5,6,2,3]"] --> B["Monotonic Stack"]
    B --> C["For each bar, find nearest smaller on left/right"]
    C --> D["Bar height=6: width=2, area=12"]
    D --> E["Bar height=5: width=2, area=10"]
    E --> F["Result: 12"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 3. **LRU Cache** - Design Problem
**Description**: Implement LRU cache with O(1) get and put operations.

**Approach**: Use doubly-linked list + hash map for O(1) operations.

```mermaid
graph TD
    A["Capacity: 2"] --> B["Put(1,1): {1}"]
    B --> C["Put(2,2): {1,2}"]
    C --> D["Get(1): Move 1 to end {2,1}"]
    D --> E["Put(3,3): Evict 2 → {1,3}"]
    E --> F["Get(2): -1 (evicted)"]
```

**Time Complexity**: O(1) for get/put | **Space Complexity**: O(capacity)

---

### 4. **Next Greater Element** - Monotonic Stack
**Description**: For each element, find next greater element.

**Approach**: Traverse from right to left with monotonic decreasing stack.

```mermaid
graph LR
    A["[1,2,1]"] --> B["Stack: empty"]
    B --> C["Process 1 (right): stack=[1]"]
    C --> D["Process 2: pop 1, stack=[2]"]
    D --> E["Process 1 (left): NGE=2, stack=[2,1]"]
    E --> F["Result: [2,-1,-1]"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 5. **Remove K Digits** - Greedy Stack
**Description**: Remove k digits to get smallest number.

**Approach**: Use stack, remove larger digits when smaller digit comes. Maintain order.

```mermaid
graph TD
    A["'1432219', k=3"] --> B["Stack: empty"]
    B --> C["Process digits maintaining ascending order"]
    C --> D["Remove '4','3','2' at positions"]
    D --> E["Result: '1219'"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 6. **Sum of Subarray Ranges** - Complex
**Description**: Sum of (max - min) for all subarrays.

**Approach**: Use monotonic stacks to find contribution of each element as max/min across all subarrays.

```mermaid
graph TD
    A["[1,4,3,2]"] --> B["Find each element's contribution as MAX"]
    B --> C["Find each element's contribution as MIN"]
    C --> D["Sum all MAX contributions"]
    D --> E["Sum all MIN contributions"]
    E --> F["Answer = MAX sum - MIN sum"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 7. **Trapping Rain Water** - Two Pointer Technique
**Description**: Calculate trapped rainwater between elevation map heights.

**Approach**: Track left/right maximums from both ends, move pointer with smaller max.

```mermaid
graph TD
    A["[0,1,0,2,1,0,1,3,2,1,2,1]"] --> B["Left pointer: 0, Right: 11"]
    B --> C["Track max from left and right"]
    C --> D["Water at position i = min(leftMax, rightMax) - height[i]"]
    D --> E["Position 2: min(1,3) - 0 = 1"]
    E --> F["Total: 6 units of water"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)
