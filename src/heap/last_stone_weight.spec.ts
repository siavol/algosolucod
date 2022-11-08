import lastStoneWeight from "./last_stone_weight"

describe('[ Last Stone Weight]', () => {
    test('returns correct result for one stone', () => {
        expect(lastStoneWeight([1])).toBe(1);
    });

    test('return correct result for multiple stones', () => {
        expect(lastStoneWeight([2,7,4,1,8,1])).toBe(1);
    });

    test('returns correct result when all stones will be unnihilated', () => {
        expect(lastStoneWeight([7,5,6,9,10,5])).toBe(0);
    });
})

