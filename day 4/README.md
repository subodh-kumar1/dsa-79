# Day 4: Linked List Problems

## Overview
Comprehensive linked list manipulation including flattening, reversal, cycle detection, and pointer operations.

## Problems

### 1. **Find Starting Point of Cycle in Linked List**
**Description**: Detect if cycle exists and find the node where cycle begins.

**Approach**: Floyd's Cycle Detection Algorithm - use slow and fast pointers. When they meet, move one to head and advance both by 1 until they meet again.

```mermaid
graph LR
    A["1 → 2 → 3 → 4 → 5 → 3"] --> B["Slow & Fast pointers"]
    B --> C["They meet at 3 (cycle start)"]
    C --> D["Reset one pointer to head"]
    D --> E["Advance both by 1"]
    E --> F["Meet at 3: Answer"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

### 2. **Flattening a Multilevel Linked List** - Complex Problem
**Description**: Flatten multilevel linked list where each node has 'next' and 'child' pointers.

**Approach**: Use recursion or stack-based approach. Merge child list into next, continue flattening.

```mermaid
graph TD
    A["1 → 2 → 3 → 4"] --> B["2 has child: 5 → 6"]
    B --> C["3 has child: 7 → 8"]
    C --> D["Flatten: Merge each child into next"]
    D --> E["Result: 1→2→5→6→3→7→8→4"]
```

**Time Complexity**: O(n) where n = total nodes | **Space Complexity**: O(1)

---

### 3. **Intersection Point of Two Linked Lists**
**Description**: Find node where two linked lists intersect.

**Approach**: Get lengths, move pointer of longer list by difference, then advance both until they meet.

```mermaid
graph TD
    A["List1: 1 → 2 → 3 → 4 → 5"] --> B["List2: 0 → 1 → 3 → 4 → 5"]
    B --> C["Lengths: 5 and 5"]
    C --> D["Move to same reference distance"]
    D --> E["Advance both pointers"]
    E --> F["Meet at node 3"]
```

**Time Complexity**: O(m + n) | **Space Complexity**: O(1)

---

### 4. **Check if Linked List is Palindrome**
**Description**: Determine if linked list is palindrome.

**Approach**: Find middle using slow/fast pointers, reverse second half, compare both halves.

```mermaid
graph TD
    A["1 → 2 → 3 → 2 → 1"] --> B["Find middle: 3"]
    B --> C["Reverse from 3: 3 → 2 → 1"]
    C --> D["Compare first half with reversed"]
    D --> E["1==1, 2==2, 3==3 ✓"]
    E --> F["Result: Palindrome"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

### 5. **Random Pointer Linked List** - Deep Copy
**Description**: Create deep copy of linked list with random pointers.

**Approach**: Use hash map to store mapping of original nodes to copied nodes, handle random pointers in second pass.

```mermaid
graph LR
    A["Node A (random→C)"] --> B["Node B (random→A)"]
    B --> C["Node C (random→B)"]
    C --> D["Create mapping: A'→A"]
    D --> E["Create mapping: B'→B, C'→C"]
    E --> F["Copy random pointers"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 6. **Reverse K Group** - Complex Reversal
**Description**: Reverse nodes of linked list k at a time.

**Approach**: Group nodes in k, reverse each group, connect groups together.

```mermaid
graph TD
    A["1 → 2 → 3 → 4 → 5, k=2"] --> B["Group1: (1,2) → (2,1)"]
    B --> C["Group2: (3,4) → (4,3)"]
    C --> D["Node 5 remains"]
    D --> E["Connect: 2→4→3→1→5"]
    E --> F["Result: 2→4→3→1→5"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

### 7. **Sort Linked List of 0, 1, 2** - Partitioning
**Description**: Sort linked list containing only 0s, 1s, and 2s.

**Approach**: Create three separate lists for 0s, 1s, 2s, then concatenate them.

```mermaid
graph TD
    A["2 → 0 → 2 → 1 → 1 → 0"] --> B["Separate into 3 lists"]
    B --> C["List0: 0 → 0"]
    B --> D["List1: 1 → 1"]
    B --> E["List2: 2 → 2"]
    F["Connect: 0→0→1→1→2→2"] --> G["Result"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)
