# Day 7: String Algorithms & Heaps

## Overview
String pattern matching, prime factorization, and heap operations.

## Problems

### 1. **Heapify** - Heap Construction
**Description**: Convert array into min or max heap structure.

**Approach**: Start from last non-leaf node, heapify down to maintain heap property.

```mermaid
graph TD
    A["Array: [1,3,5,4,6,13,10,9,8,15,17]"] --> B["Heapify to min-heap"]
    B --> C["Start from index 4: heapify down"]
    C --> D["Result: [1,3,5,4,6,13,10,9,8,15,17]"]
    D --> E["Min element at root"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

### 2. **Heap Sort** - Sorting via Heap
**Description**: Sort array using heap data structure.

**Approach**: Build max heap, repeatedly extract max element and place at end.

```mermaid
graph TD
    A["Array: [4,10,3,5,1]"] --> B["Build max-heap"]
    B --> C["Extract max 10, heap=[4,5,3,1]"]
    C --> D["Extract max 5, heap=[4,1,3]"]
    D --> E["Continue extraction"]
    E --> F["Sorted: [1,3,4,5,10]"]
```

**Time Complexity**: O(n log n) | **Space Complexity**: O(1)

---

### 3. **KMP Algorithm** - String Matching
**Description**: Find pattern in text efficiently using KMP (Knuth-Morris-Pratt).

**Approach**: Build failure function to avoid redundant comparisons on mismatch.

```mermaid
graph LR
    A["Text: 'ABABDABAACA'"] --> B["Pattern: 'ABABACA'"]
    B --> C["Build failure array"]
    C --> D["Match with partial overlap"]
    D --> E["Found at index 3"]
```

**Time Complexity**: O(n + m) | **Space Complexity**: O(m)

---

### 4. **Kth Largest Element** - Heap Application
**Description**: Find kth largest element in array.

**Approach**: Use min-heap of size k to track k largest elements.

```mermaid
graph TD
    A["Array: [3,2,1,5,6,4], k=2"] --> B["Min-heap size 2"]
    B --> C["Push 3, 2: heap=[2,3]"]
    C --> D["Push 1: 1 < 2 (min), skip"]
    D --> E["Push 5: remove 2, add 5: heap=[3,5]"]
    E --> F["Push 6: heap=[5,6]"]
    F --> G["Result: 5"]
```

**Time Complexity**: O(n log k) | **Space Complexity**: O(k)

---

### 5. **Longest Happy Prefix** - KMP Variant
**Description**: Find longest prefix that is also a suffix (no overlap).

**Approach**: Use KMP failure function to find longest proper prefix-suffix.

```mermaid
graph LR
    A["'ababab'"] --> B["Prefix 'ab'"]
    B --> C["Suffix 'ab'"]
    C --> D["Prefix 'abab'"]
    D --> E["Suffix 'abab'"]
    E --> F["Result: 'abab'"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 6. **Rabin-Karp Algorithm** - String Matching
**Description**: Find pattern using rolling hash for efficient comparison.

**Approach**: Compute hash of pattern and text window, compare hashes, verify on match.

```mermaid
graph TD
    A["Text: 'ABCCDDEF'"] --> B["Pattern: 'CDD'"]
    B --> C["Compute hashes"]
    C --> D["Slide window, update hash"]
    D --> E["Match found at index 2"]
```

**Time Complexity**: O(n + m) average | **Space Complexity**: O(1)

---

### 7. **Z-Function Algorithm** - String Processing
**Description**: Compute Z-array where Z[i] = length of substring starting at i matching prefix.

**Approach**: Maintain window [l, r] of maximum Z-value found so far.

```mermaid
graph LR
    A["'aabaab'"] --> B["Z-array: [6,1,0,3,1,0]"]
    B --> C["Z[0] = length of string"]
    C --> D["Z[3] = 3 ('aab' matches prefix)"]
    D --> E["Used for pattern matching"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)
