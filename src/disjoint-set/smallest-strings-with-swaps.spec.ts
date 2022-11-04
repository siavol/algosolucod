import smallestStringWithSwaps from "./smallest-strings-with-swaps";

describe('[Smalles Strings With Swaps]', () => {

    const testCases = [
        {
            input: 'dcab',
            pairs: [[0,3],[1,2]],
            result: 'bacd'
        },
        {
            input: 'dcab',
            pairs: [[0,3],[1,2],[0,2]],
            result: 'abcd'
        },
        {
            input: 'cba',
            pairs: [[0,1],[1,2]],
            result: 'abc'
        }
    ];
    for (const testCase of testCases) {
        test(`returns correct result for ${JSON.stringify(testCase.input)} with pairs ${JSON.stringify(testCase.pairs)}`, () => {
            const actual = smallestStringWithSwaps(testCase.input, testCase.pairs);
            expect(actual).toStrictEqual(testCase.result);
        });
    }
});

