import characterReplacement from "./longest-repeating-character-replacement";

describe('[Longest Repeating Character Replacement]', () => {
    test('returns correct result for "ABAB" and k=2', () => {
        expect(characterReplacement('ABAB', 2)).toBe(4);
    });

    test('returns correct result for "AABABBA" and k=1', () => {
        expect(characterReplacement('AABABBA', 1)).toBe(4);
    });

    test('returns correct result for "ABAA" and k=0', () => {
        expect(characterReplacement('ABAA', 0)).toBe(2);
    });
});
