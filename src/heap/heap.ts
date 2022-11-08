export class MaxHeap {
    private readonly items: number[] = [];

    constructor() {
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    insert(value: number) {
        this.items.push(value);
        this.shiftUp(this.items.length - 1);
   }

    findTop(): number {
        if (this.isEmpty()) {
            throw new Error('Heap is empty');
        }
        return this.items[0];
    }

    extractTop(): number {
        const lastItem = this.items.pop();
        if (lastItem === undefined) {
            throw new Error('Heap is empty');
        } else if (this.isEmpty()) {
            return lastItem;
        } else {
            const result = this.items[0];
            this.items[0] = lastItem;
            this.shiftDown(0);
            return result;
        }
    }

    private shiftUp(i: number) {
        if (i > 0) {
            let parent = this.parentIndex(i);
            while (this.items[i] > this.items[parent]) {
                this.swapItems(i, parent);
                i = parent;
                parent = this.parentIndex(i);
            }
        }
    }

    private shiftDown(i: number) {
        let li = this.leftChildIndex(i);
        let ri = this.rightChildIndex(i);
        while ((li < this.items.length && this.items[i] < this.items[li])
              || (ri < this.items.length && this.items[i] < this.items[ri])) {
            if (li < this.items.length && ri < this.items.length
                && this.items[i] < this.items[li]
                && this.items[i] < this.items[ri]) {
                const j = this.items[li] < this.items[ri] ? li : ri;
                this.swapItems(i, j);
                i = j;
            } else if (li < this.items.length && this.items[i] < this.items[li]) {
                this.swapItems(i, li);
                i = li;
            } else {
                this.swapItems(i, ri);
                i = ri;
            }
            li = this.leftChildIndex(i);
            ri = this.rightChildIndex(i);
        }
    }

    private parentIndex(i: number): number {
        return Math.floor((i-1) / 2);
    }

    private leftChildIndex(i: number): number {
        return 2*i + 1;
    }

    private rightChildIndex(i: number): number {
        return 2*i + 2;
    }

    private swapItems(i: number, j: number): void {
        const tmp = this.items[i];
        this.items[i] = this.items[j];
        this.items[j] = tmp;
    }
}

