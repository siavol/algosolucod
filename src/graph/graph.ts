export class GraphNode<ValueType, MetaType> {
    private readonly edges: GraphEdge<ValueType, MetaType>[] = [];

    constructor(public readonly value: ValueType) {
    }

    addEdge(node: GraphNode<ValueType, MetaType>, meta: MetaType)
        : GraphEdge<ValueType, MetaType> {
        const edge = new GraphEdge<ValueType, MetaType>(this, node, meta);
        this.edges.push(edge);
        return edge;
    }

    getEdges(): GraphEdge<ValueType, MetaType>[] {
        return [...this.edges];
    }
}

export class GraphEdge<ValueType, MetaType> {
    constructor(
        public readonly from: GraphNode<ValueType, MetaType>,
        public readonly to: GraphNode<ValueType, MetaType>,
        public readonly meta: MetaType) {
    }
}


