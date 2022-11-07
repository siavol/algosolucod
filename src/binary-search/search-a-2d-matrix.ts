/**
 * Search a 2D Matrix
 *
 * Write an efficient algorithm that searches for a value target
 * in an m x n integer matrix matrix. This matrix has the
 * following properties:
 * - Integers in each row are sorted from left to right.
 * - The first integer of each row is greater than the last
 *   integer of the previous row.
 **/

export default function searchMatrix(matrix: number[][], target: number): boolean {
    const m = matrix.length;
    const n = matrix[0].length;

    return binarySearch(
        target,
        i => {
            const row = Math.floor(i / n);
            const col = i % n;
            return matrix[row][col]
        },
        0, m*n-1);
}

function binarySearch(
    target: number,
    getItem: (i: number) => number,
    from: number,
    to: number): boolean {

    if (from >= to) {
        return getItem(from) === target;
    }

    const i = Math.floor((from + to) / 2);
    const item = getItem(i);
    if (item > target) {
        return binarySearch(target, getItem, from, i-1);
    } else if (item < target) {
        return binarySearch(target, getItem, i+1, to);
    } else {
        return true;
    }
}

