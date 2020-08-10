class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
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
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
    return this.size;
  }

  dequeue() {
    if (!this.first) return undefined;
    const removed = this.first;
    this.first = removed.next;
    this.size--;
    return removed.value;
  }
}

module.exports = Queue;
