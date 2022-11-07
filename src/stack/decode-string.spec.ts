import decodeString from "./decode-string"

describe('[Decode String]', () => {
    test('returns correct result for "3[a]2[bc]"', () => {
        expect(decodeString("3[a]2[bc]")).toBe('aaabcbc');
    });

    test('returns correct result for "3[a2[c]]"', () => {
        expect(decodeString("3[a2[c]]")).toBe('accaccacc');
    });

    test('returns correct result for "2[abc]3[cd]ef"', () => {
        expect(decodeString("2[abc]3[cd]ef")).toBe('abcabccdcdcdef');
    });
})

