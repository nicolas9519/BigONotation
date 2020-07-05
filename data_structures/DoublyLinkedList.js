class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    const deleted = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = deleted.prev;
      this.tail.next = null;
      deleted.prev = null;
    }
    this.length--;
    return deleted;
  }

  shift() {
    if (!this.head) return undefined;
    const deleted = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = deleted.next;
      this.head.prev = null;
      deleted.next = null;
    }
    this.length--;
    return deleted;
  }

  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (!Number.isInteger(index)) throw new Error('Index must be a integer');
    if (index < 0 || index >= this.length) return undefined;
    let node = null;
    if (index <= this.length / 2) {
      node = this.head;
      for (let i = 0; i < index; i++) {
        node = node.next;
      }
    } else {
      node = this.tail;
      for (let i = this.length - 1; i > index; i++) {
        node = node.prev;
      }
    }
    return node;
  }

  set(index, value) {
    const node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (!Number.isInteger(index)) throw new Error('Index must be a integer');
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    if (index === this.length) {
      this.push(value);
      return true;
    }
    const newNode = new Node(value);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (!Number.isInteger(index)) throw new Error('Index must be a integer');
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const deleted = this.get(index);
    const prevNode = deleted.prev;
    const nextNode = deleted.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    this.length--;
    deleted.prev = null;
    deleted.next = null;
    return deleted;
  }

  reverse() {
    if (this.length <= 1) return this;
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    for (let i = 0; i < this.length; i++) {
      const temp = node.next;
      node.next = node.prev;
      node.prev = temp;
      node = temp;
    }
    return this;
  }

}

const doubly = new DoublyLinkedList();
doubly.push(1);
doubly.push(2);
doubly.push(3);
doubly.push(4);
// doubly.pop();
// doubly.shift();
// doubly.unshift(0);
// doubly.get(3)
// doubly.set(1, 2000)
// doubly.insert(4, 5);
// doubly.insert(3, 3.5);
// doubly.insert(0, 0);
// doubly.remove(3);
// doubly.remove(1);
// doubly.remove(0);
// doubly.reverse();
doubly; 
