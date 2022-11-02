export default class UnionFind {
    private readonly root: number[];

    constructor(size: number) {
        this.root = [];
        for (let i=0; i<size; i++) {
            this.root[i] = i;
        }
    }

    find(x: number): number {
        if (x === this.root[x]) {
            return x;
        }
        return this.root[x] = this.find(this.root[x]);

        // TODO: optimize find to re-write the path during find
    }

    unionSet(x: number, y: number): void {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.root[rootY] = rootX;
        }
    }

    connected(x: number, y: number): boolean {
        return this.find(x) === this.find(y);
    }

    // TODO: I need some way to handle result groups
    // 1. get number of groups
    // 2. get groups list
}

