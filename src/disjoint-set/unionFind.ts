export default class UnionFind {
    private readonly root: number[];

    constructor(size: number) {
        this.root = [];
        for (let i=0; i<size; i++) {
            this.root[i] = i;
        }
    }

    find(x: number): number {
        while (x != this.root[x]) {
            x = this.root[x];
        }
        return this.root[x];

        // TODO: optimize find to re-write the path during find
    }

    unionSet(x: number, y: number): void {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.root[rootY] = rootX;
        }
    }

    // TODO: I need some way to handle result groups
    // 1. get number of groups
    // 2. get groups list
}

