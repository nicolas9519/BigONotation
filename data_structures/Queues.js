class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.first) {
      this.first = node;
    } else {
      this.last.next = node;
    }
    this.last = node;
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    const removedNode = this.first;
    this.first = removedNode.next;
    this.size--;
    if (this.size === 0) {
      this.last = null;
    }
    return removedNode.value;
  }

}
// const newQueue = new Queue();
// newQueue.enqueue("First");
// newQueue.enqueue("Second");
// newQueue.enqueue("Third");
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
// newQueue.dequeue();
module.exports = Queue;
