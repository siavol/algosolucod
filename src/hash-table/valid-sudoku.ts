/**
 * Valid Sudoku
 *
 * Determine if a 9 x 9 Sudoku board is valid. Only the filled
 * cells need to be validated according to the following rules:
 *
 * 1. Each row must contain the digits 1-9 without repetition.
 * 2. Each column must contain the digits 1-9 without repetition.
 * 3. Each of the nine 3 x 3 sub-boxes of the grid must contain
 *    the digits 1-9 without repetition.
 *
 * Note:
 * - A Sudoku board (partially filled) could be valid but is
 *   not necessarily solvable.
 * - Only the filled cells need to be validated according to
 *   the mentioned rules.
 **/

const BOARD_SIZE = 9;
const emptyCell = '.';
const NINE_SIZE = 3;

export default function isValidSudoku(board: string[][]): boolean {
    const m = board.length;
    const n = board[0].length;
    if (m !== BOARD_SIZE || n !== BOARD_SIZE) {
        return false;
    }

    const colMap: ContentMap[] = [];
    const nineMap : ContentMap[] = [];
    for (let i = 0; i < BOARD_SIZE; i++) {
        colMap.push({});
        nineMap.push({});
    }

    for (let row = 0; row < BOARD_SIZE; row++) {
        const rowMap: ContentMap = {};

        for (let col = 0; col < BOARD_SIZE; col++) {
            const item = board[row][col];
            if (item === emptyCell) {
                continue;
            }

            const nineRow = Math.floor(row / NINE_SIZE);
            const nineCol = Math.floor(col / NINE_SIZE);
            const nineIndex = nineRow * NINE_SIZE + nineCol;
            if (rowMap[item] || colMap[col][item] || nineMap[nineIndex][item]) {
                return false;
            }
            rowMap[item] = true;
            colMap[col][item] = true;
            nineMap[nineIndex][item] = true;
        }
    }

    return true;
}

type ContentMap = {
    [key: string]: boolean;
}
