class Node {
  constructor(value) {
    this.value = value;
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
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let temp = pre;
    while (temp.next) {
      pre = temp;
      temp = pre.next;
    }
    this.tail = pre;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return temp;
  }

  shift() {
    if (!this.head) return undefined;
    const head = this.head;
    this.head = head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return head;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (!Number.isInteger(index)) throw new Error('Index should be a integer');
    if (index >= this.length || index < 0) return undefined;
    let count = 0;
    let node = this.head;
    while (count < index) {
      node = node.next;
      count++;
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
    if (!Number.isInteger(index)) throw new Error('Index should be a integer');
    if (index > this.length || index < 0) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const newNode = new Node(value);
    const pre = this.get(index - 1);
    const temp = pre.next;
    newNode.next = temp;
    pre.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (!Number.isInteger(index)) throw new Error('Index should be a integer');
    if (index >= this.length || index < 0) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    const pre = this.get(index - 1);
    const toDelete = pre.next;
    pre.next = toDelete.next;
    this.length--;
    return toDelete;
  }

  reverse() {
    if (this.length <= 1) return this;
    let current = this.head;
    this.head = this.tail;
    this.tail = current;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      let tempNext = current.next;
      current.next = prev;
      prev = current;
      current = tempNext;
    }
    return this;
  }

  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

const list = new SinglyLinkedList();
list.push(5);
list.push(6);
list.push(54);
// list.pop();
// list.shift();
// list.unshift(1);
// list.get(2);
// list.set(1, 5000);
// list.insert(3, 6000);
// list.remove(1);
// list.reverse();
for (let i of list) {
  console.log(i);
}
