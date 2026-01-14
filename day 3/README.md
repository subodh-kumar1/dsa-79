# Day 3: Sliding Window & Greedy Algorithms

## Overview
Efficient techniques for substring/subarray problems and scheduling algorithms.

## Problems

### 1. **Count Number of Nice Subarrays** - Sliding Window
**Description**: Count subarrays with exactly k odd numbers.

**Approach**: Convert problem to counting subarrays with exactly k 1s (odd=1, even=0). Use sliding window with two-pointer technique.

```mermaid
graph LR
    A["[1,1,2,1,1], k=3"] --> B["Convert: [1,1,0,1,1]"]
    B --> C["Find subarrays with exactly 3 ones"]
    C --> D["Result: 2"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

### 2. **Job Sequencing with Deadlines**
**Description**: Maximize profit by scheduling jobs with deadlines.

**Approach**: Greedy - sort by profit (descending), schedule each job at its latest possible time before deadline.

```mermaid
graph TD
    A["Jobs: (profit,deadline)"] --> B["[(35,1), (30,2), (45,3), (50,4)]"]
    B --> C["Sort by profit descending"]
    C --> D["Schedule each job at latest slot before deadline"]
    D --> E["Result: Max profit"]
```

**Time Complexity**: O(n² + n log n) | **Space Complexity**: O(n)

---

### 3. **Longest Substring with At Most K Distinct Characters**
**Description**: Find longest substring containing at most k distinct characters.

**Approach**: Sliding window with hash map tracking character frequencies.

```mermaid
graph LR
    A["'eceba', k=2"] --> B["Window with ≤2 distinct chars"]
    B --> C["'ece' has 2 distinct"]
    C --> D["'eceb' has 3 - shrink window"]
    D --> E["Result: 'ece' = 3"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(k)

---

### 4. **Longest Substring Without Repeating Characters** - Sliding Window
**Description**: Find length of longest substring without repeating characters.

**Approach**: Use sliding window with character map to track last seen position. Move left pointer when character repeats.

```mermaid
graph TD
    A["'abcddabac'"] --> B["Window: 'a'"]
    B --> C["Window: 'ab'"]
    C --> D["Window: 'abc'"]
    D --> E["Encounter 'd': Window: 'abcd'"]
    E --> F["Encounter 'd' again: Shrink to 'dda'"]
    F --> G["Result: 4 (longest = 'abcd')"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(min(n, charset_size))

---

### 5. **Minimum Platforms Needed** - Greedy/Sorting
**Description**: Minimum platforms needed for trains arriving and departing at given times.

**Approach**: Sort arrivals and departures separately, use two pointers to find maximum concurrent trains.

```mermaid
graph TD
    A["Arrivals: [100,200,300]"] --> B["Departures: [110,210,310]"]
    B --> C["Two pointer approach"]
    C --> D["At time 100: 1 train arrives"]
    D --> E["At time 110: 1 train departs, 1 still present"]
    E --> F["Result: 1 platform needed"]
```

**Time Complexity**: O(n log n) | **Space Complexity**: O(1)

---

### 6. **N Meetings in One Room** - Greedy
**Description**: Select maximum non-overlapping meetings.

**Approach**: Greedy - sort by end time, select meetings that start after current end time.

```mermaid
graph TD
    A["Meetings: (start,end)"] --> B["[(100,110), (50,60), (60,70)]"]
    B --> C["Sort by end time"]
    C --> D["Select (50,60)"]
    D --> E["Select (60,70) - starts when previous ends"]
    E --> F["Result: 2 meetings"]
```

**Time Complexity**: O(n log n) | **Space Complexity**: O(1)

---

### 7. **Single Number III** - Bit Manipulation
**Description**: Find two numbers appearing once in array where all others appear twice.

**Approach**: XOR all numbers to get a^b, find rightmost set bit to partition numbers, XOR each partition separately.

```mermaid
graph LR
    A["[1,2,1,3,2,5]"] --> B["XOR all: 3^5 = 6"]
    B --> C["Find set bit: bit 0"]
    C --> D["Partition into two groups"]
    D --> E["Group1 XOR = 3"]
    E --> F["Group2 XOR = 5"]
    F --> G["Result: [3, 5]"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)
