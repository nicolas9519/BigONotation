function WeightedGraph() {
  Graph.call(this);
}
WeightedGraph.prototype = Object.create(Graph.prototype);

WeightedGraph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = {};
};

WeightedGraph.prototype.addEdge = function (vertex1, vertex2, weight) {
  this.adjacencyList[vertex1][vertex2] = weight;
  this.adjacencyList[vertex2][vertex1] = weight;
};
WeightedGraph.prototype.Dijkstra = function (vertex1, vertex2) {
  const distances = {};
  const previous = {};
  const visited = {};
  const priorityQueue = new PriorityQueue();
  for (const vertex in this.adjacencyList) {
    previous[vertex] = null;
    distances[vertex] = vertex1 === vertex ? 0 : Infinity;
    priorityQueue.enqueue(vertex, distances[vertex]);
  }

  while (priorityQueue.values.length) {
    const { val: vertex, priority } = priorityQueue.dequeue();
    if (visited[vertex]) continue;
    visited[vertex] = true;
    if (vertex === vertex2) break;
    for (const neighbor in this.adjacencyList[vertex]) {
      const totalDistance = priority + this.adjacencyList[vertex][neighbor];
      if (totalDistance < distances[neighbor]) {
        distances[neighbor] = totalDistance;
        previous[neighbor] = vertex;
        priorityQueue.enqueue(neighbor, totalDistance);
      }
    }
  }

  let tail = vertex2;
  const path = [];
  while (tail) {
    path.push(tail);
    tail = previous[tail];
  }
  return path.reverse();
};

/*** 
   *** Use Graph as a constructor for WeightedGraph to inherit from! 
   ***
***/

function Graph() {
  this.adjacencyList = {};
}

Graph.prototype.numEdges = function () {
  let total = 0;

  Object.values(this.adjacencyList).forEach(list => {
    total += list.length;
  });

  // note that we've double-counted up til now since we've looked at
  // the adjacencyList for every node.
  return total / 2;
};

Graph.prototype.addVertex = function (vertex) {
  this.adjacencyList[vertex] = [];
};

Graph.prototype.addEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1].push(vertex2);
  this.adjacencyList[vertex2].push(vertex1);
};

Graph.prototype.removeVertex = function (vertex) {
  while (this.adjacencyList[vertex].length) {
    const adjacentVertex = this.adjacencyList[vertex].pop();
    this.removeEdge(adjacentVertex, vertex);
  }
  delete this.adjacencyList[vertex];
};

Graph.prototype.removeEdge = function (vertex1, vertex2) {
  this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
    v => v !== vertex2
  );
  this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    v => v !== vertex1
  );
};

/*** 
   *** Use the following as a PriorityQueue (it's a min heap)! 
   ***
***/
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const assert = require('assert').strict;

const g = new WeightedGraph();

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');
g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);
g.addEdge('Z', 'Q', 2);
g.addEdge('C', 'G', 4);
g.addEdge('D', 'Q', 8);
g.addEdge('E', 'H', 1);
g.addEdge('H', 'Q', 3);
g.addEdge('Q', 'C', 6);
g.addEdge('G', 'Q', 9);
assert.deepEqual(g.Dijkstra('A', 'E'), ['A', 'Z', 'Q', 'H', 'E']);
assert.deepEqual(g.Dijkstra('A', 'Q'), ['A', 'Z', 'Q']);
assert.deepEqual(g.Dijkstra('A', 'G'), ['A', 'C', 'G']);
assert.deepEqual(g.Dijkstra('A', 'D'), ['A', 'Z', 'Q', 'D']);
