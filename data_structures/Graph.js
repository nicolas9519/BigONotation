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
}

const newGraph = new Graph();
newGraph.addVertex('A');
newGraph.addVertex('B');
newGraph.addVertex('C');
newGraph.addVertex('D');
newGraph.addEdge('A', 'B');
newGraph.addEdge('A', 'C');
newGraph.addEdge('D', 'C');
newGraph.addEdge('B', 'C');
newGraph.removeEdge('C', 'A');
newGraph.removeVertex('C');
