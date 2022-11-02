/**
 * Number of Islands
 *
 * Given an m x n 2D binary grid grid which represents a map 
 * of '1's (land) and '0's (water), return the number of islands.
 * 
 * An island is surrounded by water and is formed by connecting 
 * adjacent lands horizontally or vertically. You may assume all 
 * four edges of the grid are all surrounded by water.
 **/

import UnionFind from "./unionFind";

type Coord = {
    x: number;
    y: number
}

type IslandsMap = {
    [key: number]: Coord;
}

export default function numIslands(grid: string[][]): number {
    const m = grid.length;
    const n = grid[0].length;
    const index = (x: number, y: number) => x*n + y;

    const uf = new UnionFind(m*n);
    for (let x=0; x<m; x++) {
        for (let y=0; y<n; y++) {
            if (x+1<m && grid[x][y] === grid[x+1][y]) {
                uf.unionSet(
                    index(x, y),
                    index(x+1, y));
            }
            if (y+1<n && grid[x][y] === grid[x][y+1]) {
                uf.unionSet(
                    index(x, y),
                    index(x, y+1));
            }
        }
    }

    const groups: IslandsMap = {};
    for (let x=0; x<m; x++) {
        for (let y=0; y<n; y++) {
            const idx = index(x, y);
            const root = uf.find(idx);
            groups[root] = {x, y};
        }
    }
    return Object.values(groups)
        .filter(({x, y}) => grid[x][y] === '1')
        .length;
}

