import {GraphNode} from "./graph";

describe('[Graph]', () => {
    describe('GraphNode', () => {
        test('node provides access to the value', () => {
            const node = new GraphNode(23);
            expect(node.value).toBe(23);
        });

        test('new node has no links', () => {
            const node = new GraphNode('wat');
            expect(node.getEdges().length).toBe(0);
        });

        test('addEdge creates link object with ', () => {
            const node1 = new GraphNode<number, undefined>(3.14);
            const node2 = new GraphNode<number, undefined>(2.7);
            node1.addEdge(node2, undefined);
            const edged = node1.getEdges();
            expect(edged.length).toBe(1);
            expect(edged[0].from).toBe(node1);
            expect(edged[0].to).toBe(node2);
        });
    });
});
