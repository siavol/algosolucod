import spiralOrder from "./spiral_matrix";

describe('[Spiral Matrix]', () => {
    test('returns correct result for 3x3 matrix', () => {
        const matrix = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
        ];
        expect(spiralOrder(matrix))
            .toStrictEqual([1,2,3,6,9,8,7,4,5]);
    });

    test('returns correct result for 4x3 matrix', () => {
        const matrix = [
            [1,2,3,4],
            [5,6,7,8],
            [9,10,11,12]
        ];
        expect(spiralOrder(matrix))
            .toStrictEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
    })
})

