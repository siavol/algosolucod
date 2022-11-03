import UnionFind from './unionFind';

describe('[UnionFind]', () => {

    test('new UnionFind has all nodes as root', () => {
        const uf = new UnionFind(3);
        expect(uf.find(0)).toBe(0);
        expect(uf.find(1)).toBe(1);
        expect(uf.find(2)).toBe(2);
    });

    test('connected nodes has same root', () => {
        // 0->2->5, 1->3, 4
        const uf = new UnionFind(5);
        uf.unionSet(0, 2);
        uf.unionSet(2, 5);
        uf.unionSet(1, 3);

        expect(uf.connected(0, 2) && uf.connected(0, 5)).toBeTruthy();
        expect(uf.connected(1, 3)).toBeTruthy();
        expect(!uf.connected(0, 1) && !uf.connected(1, 4)).toBeTruthy();
    });

    test('getGroups returns all unionFind groups', () => {
         // 0->2->5, 1->3, 4
        const uf = new UnionFind(5);
        uf.unionSet(0, 2);
        uf.unionSet(2, 5);
        uf.unionSet(1, 3);

        const groups = uf.getGroups();
        expect(Object.keys(groups).length).toBe(3);
        expect(Object.values(groups)).toStrictEqual([
            [0, 2, 5],
            [1, 3],
            [4]
        ]);
   });
});
