import calcEquation from "./evaluate-division";

describe('[Evaluate Division]', () => {
    test('calcEquation returns empty array for empty input', () => {
        const result = calcEquation([[]], [], []);
        expect(result).toStrictEqual([]);
    });

    test('calcEquation returns correct result for a/b, b/c', () => {
        const equations = [["a","b"],["b","c"]];
        const values = [2.0,3.0];
        const queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]];
        const result = calcEquation(equations, values, queries);
        expect(result).toStrictEqual([6.0, 0.5, -1.0, 1.0, -1.0]);
    });

    test('calcEquation returns correct result for a/b, b/c, bc/cd', () => {
        const equations = [["a","b"],["b","c"],["bc","cd"]];
        const values = [1.5,2.5,5.0];
        const queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]];
        const result = calcEquation(equations, values, queries);
        expect(result).toStrictEqual([3.75, 0.4, 5.0, 0.2]);
    });

    test('calcEquation returns correct result for a/b', () => {
        const equations = [["a","b"]];
        const values = [0.5];
        const queries = [["a","b"],["b","a"],["a","c"],["x","y"]];
        const result = calcEquation(equations, values, queries);
        expect(result).toStrictEqual([0.5, 2.0, -1.0, -1.0]);
    });
});
