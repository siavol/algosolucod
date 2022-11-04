/**
 * Unique Paths
 *
 * There is a robot on an m x n grid. The robot is initially located
 * at the top-left corner (i.e., grid[0][0]). The robot tries to move
 * to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot
 * can only move either down or right at any point in time.
 *
 * Given the two integers m and n, return the number of possible unique
 * paths that the robot can take to reach the bottom-right corner.
 *
 * The test cases are generated so that the answer will be less
 * than or equal to 2 * 109.
 **/

export default function uniquePaths(m: number, n: number): number {
    const memo: number[] = [];
    const getPathCount = (x: number, y: number): number => {
        if (x == m-1 && y == n-1) {
            return 1;
        }

        const idx = x*n + y;
        if (memo[idx] !== undefined) {
            return memo[idx];
        }

        let result = 0;
        if (x+1 < m) {
            result += getPathCount(x+1, y);
        }
        if (y+1 < n) {
            result += getPathCount(x, y+1);
        }
        memo[idx] = result;
        return result;
    }

    return getPathCount(0, 0);
}
