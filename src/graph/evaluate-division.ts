/**
 * Evaluate Division
 *
 * You are given an array of variable pairs equations and an array 
 * of real numbers values, where equations[i] = [Ai, Bi] and values[i] 
 * represent the equation Ai / Bi = values[i]. Each Ai or Bi is a string 
 * that represents a single variable.
 *
 * You are also given some queries, where queries[j] = [Cj, Dj] represents 
 * the jth query where you must find the answer for Cj / Dj = ?.
 *
 * Return the answers to all queries. If a single answer cannot be 
 * determined, return -1.0.
 * 
 * Note: The input is always valid. You may assume that evaluating the 
 * queries will not result in division by zero and that there is no contradiction.
 **/

import {GraphNode} from "./graph";

type NodeMap = {
    [key: string]: GraphNode<string, number>;
}

const QUERY_CAN_NOT_BE_SOLVED = -1.0;

export default function calcEquation(
    equations: string[][],
    values: number[],
    queries: string[][]): number[] {

    if (!queries.length) {
        return [];
    }

    // build graph
    const nodesMap: NodeMap = {};
    for (let i = 0; i < equations.length; i++) {
        const [ var1, var2 ] = equations[i];
        const val = values[i];

        let node1 = nodesMap[var1];
        if (!node1) {
            node1 = new GraphNode<string, number>(var1);
            nodesMap[var1] = node1;
        }
        let node2 = nodesMap[var2];
        if (!node2) {
            node2 = new GraphNode<string, number>(var2);
            nodesMap[var2] = node2;
        }
        node1.addEdge(node2, val);
        node2.addEdge(node1, 1 / val);
    }

    return queries
        .map(q => calcQuery(q, nodesMap));
}

function calcQuery(query: string[], nodesMap: NodeMap): number {
    const [var1, var2] = query;
    const node1 = nodesMap[var1];
    const node2 = nodesMap[var2];
    if (!node1 || !node2) {
        return QUERY_CAN_NOT_BE_SOLVED;
    }
    if (node1 === node2) {
        return 1.0;
    }

    const visited = new Map<GraphNode<string, number>, boolean>();
    const dfsTraverse = (node: GraphNode<string, number>): number => {
        visited.set(node, true);
        for (const edge of node.getEdges()) {
            if (!visited.has(edge.to)) {
                if (edge.to === node2) {
                    return edge.meta;
                }

                const iterVal = dfsTraverse(edge.to);
                if (iterVal >= 0) {
                    return edge.meta * iterVal;
                }
            }
       }
       return QUERY_CAN_NOT_BE_SOLVED;
    }

    return dfsTraverse(node1);
}

