import getHint from "./bulls-and-cows"

describe('[Bulls and Cows]', () => {
    test('returns correct answer for the secret 1807 and guess 7810', () => {
        expect(getHint('1807', '7810')).toBe('1A3B');
    });

    test('returns correct answer for the secret 1123 and guess 0111', () => {
        expect(getHint('1123', '0111')).toBe('1A1B');
    });

    test('returns correct answer for the secret 1122 and guess 1222', () => {
        expect(getHint('1122', '1222')).toBe('3A0B');
    });
})
