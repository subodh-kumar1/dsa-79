# Day 6: Binary Trees

## Overview
Comprehensive tree traversals, tree construction, path problems, and BST operations.

## Problems

### 1. **Bottom View of Binary Tree** - Tree Traversal
**Description**: Get nodes visible from bottom when looking at tree from below.

**Approach**: Level order traversal with horizontal distance tracking. Keep last node at each distance.

```mermaid
graph TD
    A["      1"] --> B["    2   3"]
    B --> C["   4   5 6"]
    C --> D["Bottom view: 4 2 5 3 6"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 2. **Burn Tree from Leaf** - Path Finding
**Description**: Find time to burn entire tree starting from a leaf node.

**Approach**: Find target leaf, track parent pointers, BFS/DFS from target treating edges as burnable in all directions.

```mermaid
graph TD
    A["      1"] --> B["    2   3"]
    B --> C["   4"]
    C --> D["Burn from 4"]
    D --> E["Time: Distance to farthest node"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 3. **Construct Binary Tree from Preorder and Inorder** - Tree Construction
**Description**: Build binary tree from preorder and inorder traversal arrays.

**Approach**: Preorder gives root, inorder tells left/right subtrees. Use recursion with index mapping.

```mermaid
graph TD
    A["Preorder: [3,9,20,15,7]"] --> B["Inorder: [9,3,15,20,7]"]
    B --> C["Root = 3 (first in preorder)"]
    C --> D["Left subtree inorder: [9]"]
    C --> E["Right subtree inorder: [15,20,7]"]
    F["      3"] --> G["    9   20"]
    G --> H["      15  7"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 4. **Correct BST from Swapped Nodes** - BST Repair
**Description**: Fix BST where two values were swapped.

**Approach**: Inorder traversal finds violations, identify swapped nodes, swap values back.

```mermaid
graph TD
    A["BST with vals 1,3 swapped"] --> B["Inorder: [3,1,2] - WRONG"]
    B --> C["Find first violation: 3"]
    C --> D["Find second violation: 1"]
    D --> E["Swap values back"]
    E --> F["Result: correct BST"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(h)

---

### 5. **Inorder Successor/Predecessor in BST** - BST Navigation
**Description**: Find inorder successor or predecessor of a node in BST.

**Approach**: 
- Successor: Go right once, then left as far as possible
- Predecessor: Go left once, then right as far as possible

```mermaid
graph TD
    A["      6"] --> B["    2   9"]
    B --> C["   1  4"]
    C --> D["Node 4: Successor=6"]
    C --> E["Node 4: Predecessor=2"]
```

**Time Complexity**: O(h) | **Space Complexity**: O(1)

---

### 6. **Largest BST in Binary Tree** - Complex DP
**Description**: Find largest binary search subtree in binary tree.

**Approach**: Use DFS returning (is_bst, size, min_val, max_val) for each subtree.

```mermaid
graph TD
    A["Mixed Tree"] --> B["Check each subtree if valid BST"]
    B --> C["Track size of valid BSTs"]
    C --> D["Return largest valid BST subtree"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(h)

---

### 7. **LCA in BST** - Binary Search Tree Property
**Description**: Find lowest common ancestor in BST.

**Approach**: Use BST property - if both nodes are in different subtrees, current node is LCA.

```mermaid
graph TD
    A["      6"] --> B["    2   8"]
    B --> C["   1  4  7  9"]
    C --> D["LCA(1,4): values < 2, go left"]
    D --> E["LCA(1,6): values on opposite sides"]
    E --> F["LCA(1,6) = 6"]
```

**Time Complexity**: O(h) | **Space Complexity**: O(1)

---

### 8. **LCA in Binary Tree** - General Tree
**Description**: Find lowest common ancestor in general binary tree.

**Approach**: Use recursion - LCA is node where both p and q are in different subtrees or node itself is p or q.

```mermaid
graph TD
    A["      3"] --> B["    5   1"]
    B --> C["   6  2  0  8"]
    C --> D["LCA(5,1): one in left, one in right"]
    D --> E["LCA(5,2): 5 is ancestor of 2"]
    E --> F["LCA(5,1)=3, LCA(5,2)=5"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(h)

---

### 9. **Morris Inorder Traversal** - Advanced Traversal
**Description**: Inorder traversal without recursion or explicit stack using threaded tree.

**Approach**: Create temporary links (threads) to successor nodes.

```mermaid
graph TD
    A["      1"] --> B["    2   3"]
    B --> C["   4  5"]
    C --> D["Thread 4 → 2, 5 → 1"]
    D --> E["Traverse using threads"]
    E --> F["Inorder: 4,2,5,1,3"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(1)

---

### 10. **Two Sum in BST** - Pair Finding
**Description**: Find two nodes with sum equal to target in BST.

**Approach**: Use inorder traversal to get sorted array, then two-pointer technique.

```mermaid
graph TD
    A["      5"] --> B["    3   6"]
    B --> C["   2  4  7"]
    C --> D["Inorder: [2,3,4,5,6,7]"]
    D --> E["Two pointer for sum=9"]
    E --> F["Result: (3,6) or (4,5)"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(h)
