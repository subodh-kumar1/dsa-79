function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n)); // Initialize empty board
    const cols = new Set(); // Columns where queens are placed
    const diag1 = new Set(); // Major diagonals (row - col)
    const diag2 = new Set(); // Minor diagonals (row + col)

    function backtrack(row) { // row: current row to place a queen
        if (row === n) { // All queens are placed
            results.push([...board]); // Add a copy of the board to results
            return;
        }
        for (let col = 0; col < n; col++) { // Try placing queen in each column
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue; // Skip if under attack
            // Place queen
            board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1); // Update board
            cols.add(col); // Mark column
            diag1.add(row - col); // Mark major diagonal
            diag2.add(row + col); // Mark minor diagonal

            backtrack(row + 1); // Recurse to next row

            // Remove queen
            board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1); // Reset board
            cols.delete(col); // Unmark column
            diag1.delete(row - col); // Unmark major diagonal
            diag2.delete(row + col); // Unmark minor diagonal
        }
    }

    backtrack(0); // Start backtracking from the first row
    return results; // Return all valid board configurations
}

/*
    backtracking technique is used to explore all possible placements of queens on the board.
    template code
    Time Complexity: O(N!) in the worst case, as we may explore all permutations of queen placements.
    Space Complexity: O(N) for the recursion stack and the sets used to track columns and diagonals.

    backtracking algorithm template used for any problem involving placing items with constraints
    base case: all items placed -> record solution
    for each position:
        if position is valid:
            place item
            recurse to place next item
            remove item (backtrack)

    backtracking examples:
    - N-Queens Problem
    - Sudoku Solver
    
*/

// Example usage:
// console.log(solveNQueens(4));