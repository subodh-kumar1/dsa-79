function solveNQueens(n) {
    const results = [];
    const board = Array.from({ length: n }, () => '.'.repeat(n));
    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    function backtrack(row) {
        if (row === n) {
            results.push([...board]);
            return;
        }
        for (let col = 0; col < n; col++) {
            if (cols.has(col) || diag1.has(row - col) || diag2.has(row + col)) continue;
            // Place queen
            board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
            cols.add(col);
            diag1.add(row - col);
            diag2.add(row + col);

            backtrack(row + 1);

            // Remove queen
            board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
            cols.delete(col);
            diag1.delete(row - col);
            diag2.delete(row + col);
        }
    }

    backtrack(0);
    return results;
}

// Example usage:
// console.log(solveNQueens(4));