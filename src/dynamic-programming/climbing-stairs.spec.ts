import {climbStairs} from "./climbing-stairs";

describe('[Climbing Stairs]', () => {
    test('return 2 steps for input 2', () => {
        // 1. 1 step + 1 step
        // 2. 2 steps
        expect(climbStairs(2)).toBe(2);
    });

    test('return 3 steps for input 3', () => {
        // 1. 1 step + 1 step + 1 step
        // 2. 1 step + 2 steps
        // 3. 2 steps + 1 step
        expect(climbStairs(3)).toBe(3);
    });

    test('return 5 steps for input 4', () => {
        // 1 + 1 + 1 + 1
        // 1 + 2 + 1
        // 2 + 1 + 1
        // 1 + 1 + 2
        // 2 + 2
        expect(climbStairs(4)).toBe(5);
    });
});
