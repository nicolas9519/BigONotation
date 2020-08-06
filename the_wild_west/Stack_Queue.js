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
  enqueue(data) {
    var node = new Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first == this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

class Stack {
  constructor() {
    this.queue = new Queue();
  }
  push(val) {
    const queue2 = new Queue();
    queue2.enqueue(val);
    while (this.queue.size) {
      queue2.enqueue(this.queue.dequeue());
    }
    this.queue = queue2;
    return this;
  }
  pop() {
    return this.queue.dequeue();
  }
}
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
