/**
 * Smallest Strings With Swaps
 *
 * You are given a string s, and an array of pairs of indices 
 * in the string pairs where pairs[i] = [a, b] indicates 2 indices(0-indexed) 
 * of the string.
 *
 * You can swap the characters at any pair of indices in the given pairs
 * any number of times.
 * 
 * Return the lexicographically smallest string that s can be changed 
 * to after using the swaps.
 **/

import UnionFind from "./unionFind";

export default function smallestStringWithSwaps(
    s: string, 
    pairs: number[][]): string {

    // When some characters in the input string are connected with 
    // one or more pairs, it means that we can swap them and put in any order.
    // So we will use UnionFind to split string into connected groups and
    // then sort each one.

    const size = s.length;
    const uf = new UnionFind(size);
    for (const [x, y] of pairs) {
        uf.unionSet(x, y);
    }

    const groups = uf.getGroups();
    const result: string[] = [];
    for (const group of Object.values(groups)) {
        group
            .map(i => s[i])
            .sort()
            .forEach((ch, i) => {
                const idx = group[i];
                result[idx] = ch;
            });
    }

    return result.join('');
}

