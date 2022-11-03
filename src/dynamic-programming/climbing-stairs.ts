/**
 * Climbing Stairs
 *
 * You are climbing a staircase. It takes n steps to reach the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many distinct 
 * ways can you climb to the top?
 **/

export function climbStairs(n: number): number {
    // The result is actually a Fibonnacci number.
    // For every number n all the possible steps can be received as
    // a union of steps for number (n-1) adding 1
    // and steps for number (n-2) adding 2. So the number of steps
    // climbStairs(n) => climbStairs(n-1) + climbStairs(n-2)
    if (n === 1) return 1;
    if (n === 2) return 2;

    let n1 = 1;
    let n2 = 2;
    for (let i = 3; i <= n; i++) {
        const fib = n1 + n2;
        n1 = n2;
        n2 = fib;
    }
    return n2;
}

