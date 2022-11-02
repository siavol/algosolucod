import numberOfProvinces from './number-of-provinces'

describe('[Number of Provinces task]', () => {
    test('numberOfProvinces returns correct value for empty array', () => {
        const result = numberOfProvinces([]);
        expect(result).toBe(0);
    });

    /*
     * 0   1
     *   2
     */
    test('numberOfProvinces returns correct value when cities are not connected', () => {
        const input = [
            [1, 0, 0],
            [0, 1, 0],
            [0, 0, 1]
        ];
        const result = numberOfProvinces(input);
        expect(result).toBe(3);
    });

    /*
     * 0  -  1
     *    2
     */
    test('numberOfProvinces returns correct value when two cities are connected', () => {
         const input = [
            [1, 1, 0],
            [1, 1, 0],
            [0, 0, 1]
        ];
        const result = numberOfProvinces(input);
        expect(result).toBe(2);
    });
});

