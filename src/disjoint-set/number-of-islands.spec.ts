import numIslands from './number-of-islands';

describe('Number of Islands', () => {

    test('numIslands return zero for empty input', () => {
        const input = [[]];
        const result = numIslands(input);
        expect(result).toBe(0);
    });

    test('numIslands returns zero when grid has water only', () => {
        const input = [
            ['0', '0'],
            ['0', '0']
        ];
        const result = numIslands(input);
        expect(result).toBe(0);
    });

    test('numIslands returns one when grid has one island', () => {
        const input = [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
        ];
        const result = numIslands(input);
        expect(result).toBe(1);
    });

    test('numIslands returns 3 when grid has 3 islands', () => {
        const input = [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
        ];
        const result = numIslands(input);
        expect(result).toBe(3);
    });
});
