# Day 10: Advanced String & Trie Data Structures

## Overview
String manipulation, tries for efficient searching, and prime factorization.

## Problems

### 1. **Distinct Substrings** - String Analysis
**Description**: Count total number of distinct substrings of a string.

**Approach**: Use suffix array, suffix tree, or hash set to count unique substrings.

```mermaid
graph TD
    A["String: 'ababa'"] --> B["All substrings:"]
    B --> C["'a','b','a','b','a'"]
    C --> D["'ab','ba','ab','ba'"]
    D --> E["'aba','bab','aba'"]
    E --> F["'abab','baba'"]
    F --> G["'ababa'"]
    G --> H["Distinct: 10"]
```

**Time Complexity**: O(n²) using hash set | **Space Complexity**: O(n²)

---

### 2. **Longest Complete String** - Trie Application
**Description**: Find longest string consisting of other strings as building blocks.

**Approach**: Use trie to track word prefixes, DFS from each word checking if all prefixes exist.

```mermaid
graph TD
    A["words: ['a','and','an','band','bear']"] --> B["Build Trie"]
    B --> C["Check 'band': 'b', 'ba', 'ban', 'band'"]
    C --> D["'b' not a word ✗"]
    D --> E["Check 'bear': 'b' not a word ✗"]
    E --> F["Result: 'and' (prefixes 'a','an','and')"]
```

**Time Complexity**: O(n*m*26) where n=words, m=avg length | **Space Complexity**: O(n*m)

---

### 3. **Maximum XOR** - Trie Optimization
**Description**: Find maximum XOR of two numbers from array.

**Approach**: Build trie of binary representations, for each number greedily pick opposite bit at each level.

```mermaid
graph TD
    A["nums = [8,10,2]"] --> B["Binary: 1000, 1010, 0010"]
    B --> C["Build bit Trie"]
    C --> D["For 8(1000): pick 0's when available"]
    D --> E["Max XOR = 8 XOR 10 = 2"]
```

**Time Complexity**: O(n*32) = O(n) | **Space Complexity**: O(32*n) = O(n)

---

### 4. **Prime Factorization** - Number Theory
**Description**: Find prime factors of a number.

**Approach**: Iterate from 2, divide completely, continue with remaining number.

```mermaid
graph TD
    A["Number: 30"] --> B["Divide by 2: 30/2 = 15"]
    B --> C["Divide by 3: 15/3 = 5"]
    C --> D["Divide by 5: 5/5 = 1"]
    D --> E["Prime factors: [2,3,5]"]
```

**Time Complexity**: O(√n) | **Space Complexity**: O(log n)

---

### 5. **Sieve of Eratosthenes** - Prime Generation
**Description**: Efficiently find all primes up to n.

**Approach**: Mark multiples of each prime as composite.

```mermaid
graph TD
    A["Find primes up to 20"] --> B["Array: [2,3,4,...,20]"]
    B --> C["Mark multiples of 2: cross out 4,6,8..."]
    C --> D["Mark multiples of 3: cross out 9,15..."]
    D --> E["Mark multiples of 5: cross out 25..."]
    E --> F["Primes: [2,3,5,7,11,13,17,19]"]
```

**Time Complexity**: O(n log log n) | **Space Complexity**: O(n)

---

### 6. **Trie Data Structure** - Core Implementation
**Description**: Efficient tree structure for storing and retrieving strings.

**Approach**: Each node has children map, terminal flag for word end.

```mermaid
graph TD
    A["Trie Root"] --> B["'c'"]
    B --> C["'a'"]
    C --> D["'t'* (word)"]
    C --> E["'r'"]
    E --> F["'s'* (word)"]
    A --> G["'d'"]
    G --> H["'o'"]
    H --> I["'g'* (word)"]
```

Operations:
- **Insert**: Follow/create path, mark as word
- **Search**: Follow path, check if marked as word
- **StartsWith**: Follow path without needing word mark

**Time Complexity**: O(m) for m-length string | **Space Complexity**: O(n*26) where n=total chars

---

### 7. **Implement Trie II** - Advanced Operations
**Description**: Trie with additional operations like counting prefixes and words.

**Approach**: Store count of words and prefixes at each node.

```mermaid
graph TD
    A["Node tracks:"] --> B["countWord: words ending here"]
    B --> C["countPrefix: traversals through node"]
    C --> D["Both useful for queries"]
```

**countWord** methods:
- Insert: increment word counts along path
- CountWordsEqualTo: return count at node
- CountWordsStartingWith: return prefix count at node

**Time Complexity**: O(m) per operation | **Space Complexity**: O(n*26)

**Key Differences from Trie I:**
- Track both word and prefix counts
- Enable efficient counting queries
- Support wildcard searches

---

## Summary

| Problem | Type | Key Technique |
|---------|------|--|
| Distinct Substrings | String | Hash Set |
| Longest Complete String | Trie | DFS on Trie |
| Maximum XOR | Trie | Bit Trie Greedy |
| Prime Factorization | Math | Trial Division |
| Sieve of Eratosthenes | Math | Marking Multiples |
| Trie | Data Structure | Prefix Tree |
