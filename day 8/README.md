# Day 8: Graph Algorithms

## Overview
Graph traversals, shortest paths, topological sorting, and strongly connected components.

## Problems

### 1. **Alien Dictionary** - Topological Sort
**Description**: Derive order of characters in alien language from sorted words.

**Approach**: Build directed graph from character pairs, perform topological sort.

```mermaid
graph TD
    A["words: ['wrt','wrf','er','ett','rftt']"] --> B["Extract character pairs"]
    B --> C["Edges: w→e, e→r, r→t, t→f"]
    C --> D["Topological sort"]
    D --> E["Result: 'wertf'"]
```

**Time Complexity**: O(n + k log k) where n=total chars, k=unique chars | **Space Complexity**: O(k)

---

### 2. **Bipartite Graph Check** - Graph Coloring
**Description**: Check if graph can be colored with 2 colors (bipartite check).

**Approach**: Use BFS/DFS to color nodes alternately, detect conflict.

```mermaid
graph TD
    A["Nodes: 1,2,3,4"] --> B["Edges: (1,2),(1,3),(2,3)"]
    B --> C["Color 1: RED"]
    C --> D["Color 2,3: BLUE"]
    D --> E["Edge (2,3) connects same color"]
    E --> F["Not Bipartite"]
```

**Time Complexity**: O(V + E) | **Space Complexity**: O(V)

---

### 3. **Cheapest Flights Within K Stops** - Modified Dijkstra
**Description**: Find cheapest flight from source to destination with at most k stops.

**Approach**: Use modified Dijkstra tracking (node, stops, cost).

```mermaid
graph TD
    A["Flights: (u,v,price)"] --> B["Source: 0, Dest: 2, k=1"]
    B --> C["Explore with (node, stops, cost)"]
    C --> D["Priority queue by cost"]
    D --> E["Track minimum cost with ≤k stops"]
    E --> F["Result: minimum price"]
```

**Time Complexity**: O((V+E) log V) | **Space Complexity**: O(V)

---

### 4. **Course Schedule** - Cycle Detection
**Description**: Determine if all courses can be completed with prerequisites (DAG check).

**Approach**: Build graph from prerequisites, detect cycle using DFS.

```mermaid
graph TD
    A["Courses: 2, Prerequisites: [[1,0]]"] --> B["Edge: 1→0"]
    B --> C["DFS to detect cycle"]
    C --> D["No cycle found"]
    D --> E["Result: Can complete"]
```

**Time Complexity**: O(V + E) | **Space Complexity**: O(V + E)

---

### 5. **Dijkstra's Algorithm** - Shortest Path
**Description**: Find shortest path from source to all nodes in weighted graph.

**Approach**: Use priority queue, repeatedly pick minimum distance node and relax edges.

```mermaid
graph TD
    A["Graph with weighted edges"] --> B["Start: source = 0"]
    B --> C["Init: dist[0]=0, others=∞"]
    C --> D["Priority queue: [(0,0)]"]
    D --> E["Extract min, relax neighbors"]
    E --> F["Update distances"]
    F --> G["Result: shortest paths"]
```

**Time Complexity**: O((V+E) log V) with min-heap | **Space Complexity**: O(V)

---

### 6. **Disjoint Set Union (DSU)** - Union-Find
**Description**: Efficient data structure for union and find operations with path compression.

**Approach**: Maintain parent pointers with union by rank and path compression.

```mermaid
graph TD
    A["Elements: 1,2,3,4,5"] --> B["Initially: each element is own parent"]
    B --> C["Union(1,2): 1's parent = 2"]
    C --> D["Union(3,4): 3's parent = 4"]
    D --> E["Find(1) with path compression"]
    E --> F["Direct link to root"]
```

**Time Complexity**: O(α(n)) amortized per operation | **Space Complexity**: O(n)

---

### 7. **Floyd-Warshall Algorithm** - All Pairs Shortest Path
**Description**: Find shortest paths between all pairs of nodes.

**Approach**: Use DP with intermediate vertices - dist[i][j] = min(dist[i][j], dist[i][k] + dist[k][j]).

```mermaid
graph TD
    A["Weighted directed graph"] --> B["Initialize: dist[i][j] = edge weight"]
    B --> C["For each intermediate vertex k"]
    C --> D["Update: dist[i][j] = min distance through k"]
    D --> E["Result: all-pairs shortest paths"]
```

**Time Complexity**: O(V³) | **Space Complexity**: O(V²)

---

### 8. **Kahn's Algorithm** - Topological Sort
**Description**: Topological sort using in-degree (BFS approach).

**Approach**: Process nodes with in-degree 0, reduce in-degrees of neighbors.

```mermaid
graph TD
    A["Graph with edges"] --> B["Calculate in-degrees"]
    B --> C["Queue with in-degree 0 nodes"]
    C --> D["Process node, decrease neighbor in-degrees"]
    D --> E["Add new in-degree 0 nodes"]
    E --> F["Result: topological order"]
```

**Time Complexity**: O(V + E) | **Space Complexity**: O(V)

---

### 9. **Kosaraju's Algorithm** - Strongly Connected Components
**Description**: Find all strongly connected components (SCCs) in directed graph.

**Approach**: DFS on original graph for finish times, DFS on transpose in order of decreasing finish times.

```mermaid
graph TD
    A["Directed Graph"] --> B["DFS: track finish times"]
    B --> C["Create transpose graph"]
    C --> D["DFS on transpose by finish time order"]
    D --> E["Each DFS tree is one SCC"]
    E --> F["Result: all SCCs"]
```

**Time Complexity**: O(V + E) | **Space Complexity**: O(V)

---

### 10. **Rotten Oranges** - Multi-source BFS
**Description**: Find minimum time for all fresh oranges to rot (BFS on grid).

**Approach**: Multi-source BFS starting from all rotten oranges simultaneously.

```mermaid
graph TD
    A["Grid with fresh(1) & rotten(2) oranges"] --> B["Queue: all rotten positions"]
    B --> C["BFS in 4 directions"]
    C --> D["Mark adjacent fresh as rotten"]
    D --> E["Track time level"]
    E --> F["Check if all oranges rotten"]
```

**Time Complexity**: O(m*n) | **Space Complexity**: O(m*n)
