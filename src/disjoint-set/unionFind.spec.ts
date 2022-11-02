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

        expect(uf.find(0) === uf.find(2) && uf.find(0) === uf.find(5)).toBeTruthy();
        expect(uf.find(1) === uf.find(3)).toBeTruthy();
        expect(uf.find(0) !== uf.find(1) && uf.find(1) !== uf.find(4)).toBeTruthy();
    });
});
