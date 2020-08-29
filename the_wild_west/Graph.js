const assert = require('assert').strict;
const Queue = require('./Queue');

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const neighbor = this.adjacencyList[vertex].pop();
      this.removeEdge(neighbor, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  depthFirstSearch(start) {
    const resp = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;
    function helper(vertex) {
      resp.push(vertex);
      visited[vertex] = true;
      for (const neighbor of adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          helper(neighbor);
        }
      }
    }
    helper(start);
    return resp;
  }
  breadthFirstSearch(start) {
    const resp = [];
    const visited = {};
    const queue = new Queue();
    queue.enqueue(start);
    visited[start] = true;
    while (queue.size) {
      const vertex = queue.dequeue();
      resp.push(vertex);
      for (let neighbor of this.adjacencyList[vertex]) {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.enqueue(neighbor);
        }
      }
    }
    return resp;
  }
}

const graph = new Graph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
assert.deepEqual(graph.adjacencyList['A'], []);
assert.deepEqual(graph.adjacencyList['B'], []);
assert.deepEqual(graph.adjacencyList['C'], []);

graph.addVertex('D');
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'D');
graph.removeEdge('B', 'A');
graph.removeEdge('C', 'D');
assert.deepEqual(graph.adjacencyList['A'], ['C']);
assert.deepEqual(graph.adjacencyList['B'], ['D']);
assert.deepEqual(graph.adjacencyList['C'], ['A']);
assert.deepEqual(graph.adjacencyList['D'], ['B']);

graph.addEdge('B', 'A');
graph.addEdge('C', 'D');
graph.removeVertex('C');
graph.removeVertex('B');
assert.deepEqual(graph.adjacencyList['A'], []);
assert.deepEqual(graph.adjacencyList['D'], []);
assert.equal(graph.adjacencyList['C'], undefined);
assert.equal(graph.adjacencyList['B'], undefined);

// GRAPH 2
const graph2 = new Graph();

graph2.addVertex('S');
graph2.addVertex('P');
graph2.addVertex('U');
graph2.addVertex('X');
graph2.addVertex('Q');
graph2.addVertex('Y');
graph2.addVertex('V');
graph2.addVertex('R');
graph2.addVertex('W');
graph2.addVertex('T');
graph2.addEdge('S', 'P');
graph2.addEdge('S', 'U');
graph2.addEdge('P', 'X');
graph2.addEdge('U', 'X');
graph2.addEdge('P', 'Q');
graph2.addEdge('U', 'V');
graph2.addEdge('X', 'Q');
graph2.addEdge('X', 'Y');
graph2.addEdge('X', 'V');
graph2.addEdge('Q', 'R');
graph2.addEdge('Y', 'R');
graph2.addEdge('Y', 'W');
graph2.addEdge('V', 'W');
graph2.addEdge('R', 'T');
graph2.addEdge('W', 'T');
assert.deepEqual(graph2.depthFirstSearch('S'), ['S', 'P', 'X', 'U', 'V', 'W', 'Y', 'R', 'Q', 'T']);
assert.deepEqual(graph2.breadthFirstSearch('S'), ['S', 'P', 'U', 'X', 'Q', 'V', 'Y', 'R', 'W', 'T']);
