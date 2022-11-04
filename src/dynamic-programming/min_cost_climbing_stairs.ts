/** Min Cost Climbing Stairs
 *
 * You are given an integer array cost where cost[i] is the cost 
 * of ith step on a staircase. Once you pay the cost, you can 
 * either climb one or two steps.
 *
 * You can either start from the step with index 0, or the step 
 * with index 1.
 *
 * Return the minimum cost to reach the top of the floor.
 **/

export default function minCostClimbingStairs(cost: number[]): number {
    const costsMemo: number[] = [];
    const getCostForIndex = (i: number): number => {
        if (i < 0) {
            return 0;
        }
        if (costsMemo[i] !== undefined) {
            return costsMemo[i];
        }

        const oneStepCost = getCostForIndex(i - 1);
        const twoStepCost = getCostForIndex(i - 2);
        const result = cost[i] + Math.min(oneStepCost, twoStepCost);
        costsMemo[i] = result;
        return result;
    };

    let idx = cost.length;
    return Math.min(getCostForIndex(idx-1), getCostForIndex(idx - 2));
};

