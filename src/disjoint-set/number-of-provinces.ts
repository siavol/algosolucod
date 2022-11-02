/**
 * Number of Provinces
 *
 * There are n cities. Some of them are connected, while some are not. 
 * If city a is connected directly with city b, and city b is connected 
 * directly with city c, then city a is connected indirectly with city c.
 *
 * A province is a group of directly or indirectly connected cities and 
 * no other cities outside of the group.
 *
 * You are given an n x n matrix isConnected where isConnected[i][j] = 1 
 * if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
 * 
 * Return the total number of provinces.
 **/

import UnionFind from "./unionFind";

type GroupsMap = {
    [key: number]: number;
}

export default function findCircleNum(isConnected: number[][]): number {
    const size = isConnected.length;
    if (size === 0) {
        return 0;
    }

    const uf = new UnionFind(size);
    for (let x=0; x<size; x++) {
        for (let y=x+1; y<size; y++) {
            if (isConnected[x][y]) {
                uf.unionSet(x, y);
            }
        }
    }

    const groups: GroupsMap = {};
    for (let i=0; i<size; i++) {
        const root = uf.find(i);
        groups[root] = root;
    }
    return Object.keys(groups).length;
}
