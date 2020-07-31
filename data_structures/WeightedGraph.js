const PriorityQueue = require('./PriorityQueue');

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    const edgeV1 = {
      node: vertex2,
      weight
    };
    this.adjacencyList[vertex1].push(edgeV1);
    const edgeV2 = {
      node: vertex1,
      weight
    };
    this.adjacencyList[vertex2].push(edgeV2);
  }
  dijkstra(startV, endV) {
    const distances = {};
    const previous = {};
    const visited = {};
    const priorityQueue = new PriorityQueue();

    for (const vertex in this.adjacencyList) {
      previous[vertex] = null;
      distances[vertex] = (vertex == startV) ? 0 : Infinity;
      priorityQueue.enqueue(vertex, distances[vertex]);
    }

    while (priorityQueue.values.length) {
      const { value: vertex, priority } = priorityQueue.dequeue();
      if (visited[vertex]) continue;
      if (vertex === endV) break;
      for (const { node, weight } of this.adjacencyList[vertex]) {
        const totalDistance = priority + weight;
        if (totalDistance < distances[node]) {
          distances[node] = totalDistance;
          previous[node] = vertex;
          priorityQueue.enqueue(node, totalDistance);
        }
      }
      visited[vertex] = true;
    }

    const path = [];
    let vertex = endV;
    while (vertex) {
      path.push(vertex);
      vertex = previous[vertex];
    }
    return path.reverse();
  }
}

const graph = new WeightedGraph();
//    C - 3 - D - 3 - E
// 4/ | \     |     / | \9
// A  2   9   7   2   7  B
// 7\ |     \ | /     | /3
//    F - 8 - G - 3 - H

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');
graph.addVertex('G');
graph.addVertex('H');
graph.addEdge('A', 'C', 4);
graph.addEdge('A', 'F', 7);
graph.addEdge('C', 'F', 2);
graph.addEdge('C', 'D', 3);
graph.addEdge('C', 'G', 9);
graph.addEdge('F', 'G', 8);
graph.addEdge('D', 'G', 7);
graph.addEdge('D', 'E', 3);
graph.addEdge('G', 'E', 2);
graph.addEdge('G', 'H', 3);
graph.addEdge('E', 'H', 7);
graph.addEdge('E', 'B', 9);
graph.addEdge('H', 'B', 3);
graph.dijkstra('A', 'B');
