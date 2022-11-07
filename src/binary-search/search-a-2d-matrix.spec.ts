import searchMatrix from "./search-a-2d-matrix";

describe('[Search a 2D Matrix]', () => {
    test('returns correct result when value is in the matrix', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10,11,16,20],
            [23,30,34,60]
        ];
        expect(searchMatrix(matrix, 20)).toBeTruthy();
    });

    test('returns correct result when value is not in the matrix', () => {
        const matrix = [
            [1, 3, 5, 7],
            [10,11,16,20],
            [23,30,34,60]
        ];
        expect(searchMatrix(matrix, 13)).toBeFalsy();
    });

    test('returns correct result for one item matrix', () => {
        const matrix = [[1]];
        expect(searchMatrix(matrix, 2)).toBeFalsy();
    });
})

