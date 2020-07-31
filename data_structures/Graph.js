const Stack = require('./Stack');
const Queue = require('./Queues');
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    return this;
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      for (const vertex2 of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, vertex2);
      }
      delete this.adjacencyList[vertex];
    }
    return this;
  }

  addEdge(vertex1, vertex2) {
    if (vertex1 !== vertex2 && this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
    return this;
  }

  removeEdge(vertex1, vertex2) {
    if (vertex1 !== vertex2 && this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
    return this;
  }

  // depth first recursive
  recursiveDF(firstVertex) {
    if (!this.adjacencyList[firstVertex]) return undefined;
    const visited = {};
    const order = [];
    const helperDFS = (vertex) => {
      visited[vertex] = true;
      order.push(vertex);
      for (const v of this.adjacencyList[vertex]) {
        if (!visited[v]) {
          helperDFS(v);
        }
      }
    };
    helperDFS(firstVertex);
    return order;
  }
  // depth first iterative
  iterativeDF(firstVertex) {
    if (!this.adjacencyList[firstVertex]) return undefined;
    const stack = new Stack();
    const order = [];

    stack.push(firstVertex);
    const visited = {
      [firstVertex]: true
    };

    while (stack.size) {
      const vertex = stack.pop();
      order.push(vertex);
      for (let v of this.adjacencyList[vertex]) {
        if (!visited[v]) {
          visited[v] = true;
          stack.push(v);
        }
      }
    }
    return order;
  }

  breadthFirst(firstVertex) {
    if (!this.adjacencyList[firstVertex]) return undefined;
    const visited = {};
    const order = [];
    const queue = new Queue();

    queue.enqueue(firstVertex);
    visited[firstVertex] = true;

    while (queue.size) {
      const vertex = queue.dequeue();
      order.push(vertex);
      for (const v of this.adjacencyList[vertex]) {
        if (!visited[v]) {
          visited[v] = true;
          queue.enqueue(v);
        }
      }
    }
    return order;
  }
}

const newGraph = new Graph();
//     .-------.
//     B - A - C
//     | \ | / |
//     F   E - D

newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addVertex('E');
newGraph.addVertex('F');
newGraph.addEdge('A', 'B');
newGraph.addEdge('A', 'C');
newGraph.addEdge('D', 'C');
newGraph.addEdge('B', 'C');
newGraph.addEdge('E', 'A');
newGraph.addEdge('E', 'B');
newGraph.addEdge('E', 'C');
newGraph.addEdge('E', 'D');
newGraph.addEdge('F', 'B');
newGraph.removeEdge('C', 'A');
newGraph.removeVertex('C');
newGraph.recursiveDF('A');
newGraph.recursiveDF('H');
newGraph.iterativeDF('A');
newGraph.breadthFirst('A');
