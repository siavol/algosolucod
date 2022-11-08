import {MaxHeap} from "./heap";

describe('[Heap]', () => {

    describe('[MaxHeap]', () => {
        describe('When heap is newly created', () => {
            let heap: MaxHeap;

            beforeEach(() => {
                heap = new MaxHeap();
            });

            test('#isEmpty() returns true', () => {
                expect(heap.isEmpty()).toBeTruthy();
            });

            test('#findTop() throws an error', () => {
                expect(() => heap.findTop()).toThrow();
            });
        });

        test('#insert(...) adds new item to the heap', () => {
            const heap = new MaxHeap();
            heap.insert(10);
            expect(heap.isEmpty()).toBeFalsy();
        });

        test('#findTop returns top element for the heap with one item', () => {
            const heap = new MaxHeap();
            heap.insert(5);
            expect(heap.findTop()).toBe(5);
            expect(heap.isEmpty()).toBeFalsy();
        });

        test('#extractTop returns top element end removes it from theone item heap', () => {
            const heap = new MaxHeap();
            heap.insert(7);
            expect(heap.extractTop()).toBe(7);
            expect(heap.isEmpty()).toBeTruthy();
        });


        describe('When heap has multiple items', () => {
            let heap: MaxHeap;

            beforeEach(() => {
                heap = new MaxHeap();
                heap.insert(5);
                heap.insert(10);
                heap.insert(1);
            });

            test('#findTop returns top element', () => {
                expect(heap.findTop()).toBe(10);
            });

            test('#extractTop extracts all the items one by one in the max to min order', () => {
                expect(heap.extractTop()).toBe(10);
                expect(heap.extractTop()).toBe(5);
                expect(heap.extractTop()).toBe(1);
                expect(heap.isEmpty()).toBeTruthy();
            });
        })
    });
})
