/**
 * Maximum Subarray
 *
 * Given an integer array nums, find the subarray which 
 * has the largest sum and return its sum.
 **/
export default function maxSubArray(nums: number[]): number {
    // This task can also be solved with Divide and Conquer approach,
    // but Dynamic Programming way is much simplier, straightforward and
    // performant.
    if (nums.length <= 1) {
        return nums[0];
    }

    let max = nums[0];
    let currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        // if currentSum is neganive it will be beneficial to just start new seq
        const currentSumOrSkip = currentSum > 0 ? currentSum : 0;
        currentSum = currentSumOrSkip + nums[i];
        max = Math.max(max, currentSum);
    }
    return max;
}

