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
    let result = 0;
    let idx = cost.length;
    while (idx > 1) {
        const step1 = cost[idx - 1];
        const step2 = cost[idx - 2];
        if (step1 < step2) {
            idx -= 1;
            result += step1;
        } else {
            idx -= 2;
            result += step2;
        }
    }
    return result;
};

