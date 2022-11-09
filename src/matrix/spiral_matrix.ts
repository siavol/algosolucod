/**
 * Spiral Matrix
 *
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 **/

export default function spiralOrder(matrix: number[][]): number[] {
    const m = matrix.length;
    const n = matrix[0].length;
    const result: number[] = [];

    let mPassed = 0, nPassed = 0;
    let row = 0, col = -1;
    while (mPassed < m && nPassed < n) {
        let dir: Direction;
        let passSize: number;
        if ((mPassed + nPassed + 1) % 2 === 1) {
            // horizontal pass
            passSize = n - nPassed;
            dir = (nPassed + 1) % 2 === 1 ? [0, 1] : [0, -1];
            mPassed++;
       } else {
            //vertical pass
            passSize = m - mPassed;
            dir = mPassed % 2 === 1 ? [1, 0] : [-1, 0];
            nPassed++;
       }

        for (let i = 0; i < passSize; i++) {
            row += dir[0];
            col += dir[1];
            result.push(matrix[row][col]);
        }
    }

    return result;
};

type Direction = [number, number];

