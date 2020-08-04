class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.last) {
      node.prev = this.last;
    } else {
      this.first = node;
    }
    this.last = node;
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.last) return null;
    const removedNode = this.last;
    this.last = removedNode.prev;
    this.size--;
    if(this.size === 0) {
      this.first = null;
    }
    return removedNode.value;
  }

};
// const newStack = new Stack();
// newStack.push("First");
// newStack.push("Second");
// newStack.push("Third");
// newStack.pop();
// newStack.pop();
// newStack.pop();
// newStack.pop();

module.exports = Stack;
