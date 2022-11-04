import maxSubArray from "./maximum-subarray"

describe('[Maximum Subarray]', () => {
    test('returns correct result for the one item array', () => {
        const result = maxSubArray([3]);
        expect(result).toBe(3);
    });

    test('returns correct result for the two positive items array', () => {
        expect(maxSubArray([3, 4])).toBe(7);
    });

    test('returns correct result for the array with negative item in the middle', () => {
        expect(maxSubArray([5,4,-1,7,8])).toBe(23);
    });

    test('returns correct result for the array with multiple negative items', () => {
        expect(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])).toBe(6);
    });

    test('return correct result for the array with negative first item', () => {
        expect(maxSubArray([-1, 2])).toBe(2);
    });

    test('return corrent result for array with only negative items', () => {
        expect(maxSubArray([-2, -1])).toBe(-1);
    })
})
