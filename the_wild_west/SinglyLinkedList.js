class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const removed = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      let previous = this.head;
      let current = this.head;
      while (current.next) {
        previous = current;
        current = previous.next;
      }
      previous.next = null;
      this.tail = previous;
    }
    this.length--;
    return removed;
  }
  get(pos) {
    if (this.length <= pos || pos < 0 || !this.head) return null;
    let temp = 0;
    let current = this.head;
    while (temp < pos) {
      current = current.next;
      temp++;
    }
    return current;
  }
  set(pos, value) {
    const node = this.get(pos);
    if (!node) return false;
    node.val = value;
    return true;
  }
  insert(pos, value) {
    if (pos < 0 || pos > this.length) return false;
    if (this.length === pos) {
      this.push(value);
      return true;
    }
    const newNode = new Node(value);
    if (pos === 0) {
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
    } else {
      let previous = this.get(pos - 1);
      const tempNode = previous.next;
      previous.next = newNode;
      newNode.next = tempNode;
    }
    this.length++;
    return true;
  }
  rotate(quantity) {
    let temp = this.head;
    let totalChanges = quantity % this.length;
    if (totalChanges < 0) {
      totalChanges = this.length + totalChanges;
    }
    for (let i = 0; i < totalChanges; i++) {
      this.head = temp.next;
      this.tail.next = temp;
      temp.next = null;
      this.tail = temp;
      temp = this.head;
    }
    return this;
  }
}

const singly = new SinglyLinkedList();
singly.push(5).push(10).push(15).push(20).push(25);
singly.rotate(-1);
