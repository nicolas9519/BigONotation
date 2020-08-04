class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.first) {
      this.last = node;
    } else {
      node.next = this.first;
    }
    this.first = node;
    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }

};
const newStack = new Stack();
newStack.push("First");
newStack.push("Second");
newStack.push("Third");
newStack.pop();
newStack.pop();
newStack.pop();
newStack.pop();
