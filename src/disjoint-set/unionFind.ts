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

    getGroups(): UFGroups {
        const result: UFGroups = {};
        for (let i = 0; i < this.root.length; i++) {
            const grRoot = this.find(i);
            let group = result[grRoot];
            if (!group) {
                group = [];
                result[grRoot] = group;
            }
            group.push(i);
        }
        return result;
    }
}

export type UFGroups = {
    [key: number]: number[];
}

