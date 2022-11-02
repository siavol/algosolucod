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
    }

    unionSet(x: number, y: number): void {
        const rootX = this.find(x);
        const rootY = this.find(y);
        if (rootX !== rootY) {
            this.root[rootY] = rootX;
        }
    }
}

