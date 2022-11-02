import numberOfProvinces from './number-of-provinces'

test('numberOfProvinces returns correct value for empty array', () => {
    const result = numberOfProvinces([]);
    expect(result).toBe(0);
});

