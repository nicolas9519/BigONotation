class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
};

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    const pos = this.values.push(newNode);
    this.bubbleUp();
    return pos;
  }

  bubbleUp() {
    let current = this.values.length - 1;
    const currentNode = this.values[current];
    while (current > 0) {
      const parent = Math.floor((current - 1) / 2);
      const parentNode = this.values[parent];
      if (parentNode.priority <= currentNode.priority) break;
      this.values[parent] = currentNode;
      this.values[current] = parentNode;
      current = parent;
    }
  }

  dequeue() {
    const removedNode = this.values[0];
    const node = this.values.pop();
    if(this.values.length > 0) {
      this.values[0] = node;
      this.bubbleDown();
    }
    return removedNode;
  }

  bubbleDown() {
    let current = 0;
    const node = this.values[current];
    while (current < this.values.length) {
      let left = (current * 2) + 1;
      let right = (current * 2) + 2;
      let leftChild = this.values[left];
      let rightChild = this.values[right];
      let swap = null;
      if (leftChild && leftChild.priority < node.priority) {
        swap = left;
      }
      if (rightChild && rightChild.priority < node.priority && (swap === null || rightChild.priority < leftChild.priority)) {
        swap = right;
      }
      if (!swap) break;
      this.values[current] = this.values[swap];
      this.values[swap] = node;
      current = swap;
    }
  }

};
/*
        1
    2       1
  3   3   3   2
*/
const myPriorityQueue = new PriorityQueue();
myPriorityQueue.enqueue("Low", 3);
myPriorityQueue.enqueue("Low", 3);
myPriorityQueue.enqueue("Low", 3);
myPriorityQueue.enqueue("Medium", 2);
myPriorityQueue.enqueue("Medium", 2);
myPriorityQueue.enqueue("High", 1);
myPriorityQueue.enqueue("High", 1);
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
myPriorityQueue.dequeue();
