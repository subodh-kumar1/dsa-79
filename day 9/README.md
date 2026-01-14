# Day 9: Dynamic Programming

## Overview
Advanced DP problems covering edit distance, knapsack, longest subsequences, and optimization problems.

## Problems

### 1. **Edit Distance** - DP Problem
**Description**: Minimum operations (insert, delete, replace) to transform one string to another.

**Approach**: DP table where dp[i][j] = min operations to transform first i characters to first j.

```mermaid
graph TD
    A["s1: 'horse', s2: 'ros'"] --> B["DP table"]
    B --> C["If chars match: dp[i][j] = dp[i-1][j-1]"]
    C --> D["Else: 1 + min(replace, insert, delete)"]
    D --> E["Result: 3"]
```

**Time Complexity**: O(m*n) | **Space Complexity**: O(m*n)

---

### 2. **Frog Jump with K Jumps** - DP
**Description**: Frog can jump 1 to k steps, reach from 0 to n-1.

**Approach**: DP where dp[i] = can frog reach position i.

```mermaid
graph TD
    A["n=3, k=1"] --> B["From 0: can jump 1"]
    B --> C["From 1: can jump 1"]
    C --> D["From 2: reached n-1"]
    D --> E["Result: true"]
```

**Time Complexity**: O(n*k) | **Space Complexity**: O(n)

---

### 3. **House Robber** - DP
**Description**: Maximum money can rob without robbing adjacent houses.

**Approach**: dp[i] = max(dp[i-1], dp[i-2] + arr[i]).

```mermaid
graph LR
    A["[1,2,3,1]"] --> B["dp[0]=1"]
    B --> C["dp[1]=max(1,2)=2"]
    C --> D["dp[2]=max(2,1+3)=4"]
    D --> E["dp[3]=max(4,2+1)=4"]
    E --> F["Result: 4"]
```

**Time Complexity**: O(n) | **Space Complexity**: O(n)

---

### 4. **0/1 Knapsack** - Classic DP
**Description**: Select items to maximize value within weight limit.

**Approach**: DP table where dp[i][w] = max value using first i items with weight w.

```mermaid
graph TD
    A["items: weights=[1,2,3], values=[10,20,30], capacity=5"] --> B["Build DP table"]
    B --> C["dp[i][w] = max(exclude item, include item)"]
    C --> D["Include: dp[i-1][w-wt[i]] + val[i]"]
    D --> E["Result: 50 (items 1,2,3)"]
```

**Time Complexity**: O(n*W) where W=capacity | **Space Complexity**: O(n*W)

---

### 5. **Longest Common Subsequence (LCS)** - DP
**Description**: Find length of longest common subsequence between two strings.

**Approach**: DP table where dp[i][j] represents LCS of first i and j characters.

```mermaid
graph TD
    A["s1: 'AGGTAB', s2: 'GXTXAYB'"] --> B["DP table"]
    B --> C["If chars match: dp[i][j] = 1 + dp[i-1][j-1]"]
    C --> D["Else: max(dp[i-1][j], dp[i][j-1])"]
    D --> E["Result: 5 (GTAB)"]
```

**Time Complexity**: O(m*n) | **Space Complexity**: O(m*n)

---

### 6. **Longest Increasing Subsequence (LIS)** - DP
**Description**: Find length of longest increasing subsequence.

**Approach**: dp[i] = length of LIS ending at i.

```mermaid
graph LR
    A["[10,9,2,5,3,7,101,18]"] --> B["dp[0]=1"]
    B --> C["dp[1]=1 (9<10)"]
    C --> D["dp[2]=1 (2 smallest)"]
    D --> E["dp[3]=2 (2<5)"]
    E --> F["Result: 4 (2,3,7,101)"]
```

**Time Complexity**: O(n²) basic, O(n log n) optimized | **Space Complexity**: O(n)

---

### 7. **Matrix Chain Multiplication (MCM)** - DP
**Description**: Find optimal way to parenthesize matrix chain multiplication.

**Approach**: dp[i][j] = min operations to multiply matrices from i to j.

```mermaid
graph TD
    A["Matrices: (10×20)(20×30)(30×40)"] --> B["dp[i][j] = min cost of multiplying i to j"]
    B --> C["Try all split points k"]
    C --> D["Cost = left + right + multiply result"]
    D --> E["Result: 26000"]
```

**Time Complexity**: O(n³) | **Space Complexity**: O(n²)

---

### 8. **Minimum Absolute Difference** - DP
**Description**: Partition array into two subsets with minimum difference sum.

**Approach**: Knapsack variant - find subset sum closest to total/2.

```mermaid
graph TD
    A["[1,5,11,5]"] --> B["Total sum = 22"]
    B --> C["Find subset sum ≤ 11"]
    C --> D["Subset [5,5]: sum=10"]
    D --> E["Diff = 22 - 2*10 = 2"]
```

**Time Complexity**: O(n*sum) | **Space Complexity**: O(n*sum)

---

### 9. **Minimum Falling Path Sum** - 2D DP
**Description**: Find minimum path sum from top to bottom (each row pick one element).

**Approach**: dp[i][j] = min sum to reach [i][j] from top row.

```mermaid
graph TD
    A["Matrix:"] --> B["1 2 3"]
    B --> C["4 5 6"]
    C --> D["7 8 9"]
    D --> E["dp paths with adjacency"]
    E --> F["Result: 13"]
```

**Time Complexity**: O(m*n) | **Space Complexity**: O(m*n)

---

### 10. **Stock Buy Sell IV** - Complex DP
**Description**: Complete at most k transactions to maximize profit.

**Approach**: DP with states (day, transactions_used, holding/not_holding).

```mermaid
graph TD
    A["prices=[3,3,5,0,0,3,1,4], k=2"] --> B["Track buy/sell with ≤k transactions"]
    B --> C["dp[i][t][0] = max without stock"]
    C --> D["dp[i][t][1] = max with stock"]
    D --> E["Result: 6 (buy@3, sell@5, buy@1, sell@4)"]
```

**Time Complexity**: O(n*k) or O(n) if k ≥ n/2 | **Space Complexity**: O(n*k)
