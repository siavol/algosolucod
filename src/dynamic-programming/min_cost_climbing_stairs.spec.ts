import minCostClimbingStairs from "./min_cost_climbing_stairs";

describe('Min Cost Climbing Stairs', () => {

    test('returns correct result for short stairs', () => {
        const input = [10,15,20];
        // - Pay 15 and climb two steps to reach the top.
        // The total cost is 15.
        const result = minCostClimbingStairs(input);
        expect(result).toBe(15);
    });

    test('returns correct result for longer stairs', () => {
        const input = [1,100,1,1,1,100,1,1,100,1];
        // You will start at index 0.
        // - Pay 1 and climb two steps to reach index 2.
        // - Pay 1 and climb two steps to reach index 4.
        // - Pay 1 and climb two steps to reach index 6.
        // - Pay 1 and climb one step to reach index 7.
        // - Pay 1 and climb two steps to reach index 9.
        // - Pay 1 and climb one step to reach the top.
        // The total cost is 6.
        const result = minCostClimbingStairs(input);
        expect(result).toBe(6);
    });

    test('returns correct result for [0,2,2,1]', () => {
        const input = [0,2,2,1];
        // You will start at index 0
        // - Pay 0 and climb to index 2
        // - Pay 2 and reach the top
        // The total cost is 2
        const result = minCostClimbingStairs(input);
        expect(result).toBe(2);
    })
})
