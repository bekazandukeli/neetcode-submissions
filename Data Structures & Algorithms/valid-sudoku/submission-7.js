class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(0);
        const columns = new Array(9).fill(0);
        const squares = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                let num = board[r][c];

                if (num === '.') continue;

                let shift = num - 1;
                let mask = 1 << shift;
                let sqr = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                if (rows[r] & mask) return false;
                if (columns[c] & mask) return false;
                if (squares[sqr] & mask) return false;

                rows[r] = rows[r] | mask;
                columns[c] = columns[c] | mask;
                squares[sqr] = squares[sqr] | mask;
            }
        }

        return true;
    }
}
