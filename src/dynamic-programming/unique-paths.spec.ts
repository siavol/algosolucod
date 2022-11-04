import uniquePaths from "./unique-paths"

describe('[Unique Paths]', () => {
    test('returns correct value for 3x2 grid', () => {
        const result = uniquePaths(3, 2);
        expect(result).toBe(3);
    });

    test('returns correct value for 3x7 grid', () => {
        const result = uniquePaths(3, 7);
        expect(result).toBe(28);
    });
})
