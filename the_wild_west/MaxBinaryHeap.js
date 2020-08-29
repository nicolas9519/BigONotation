const assert = require('assert').strict;

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  bubbleUp() {
    let currentPos = this.values.length - 1;
    const lastValue = this.values[currentPos];
    while (currentPos > 0) {
      const parentPos = Math.floor((currentPos - 1) / 2);
      if (this.values[parentPos] < lastValue) {
        this.values[currentPos] = this.values[parentPos];
        currentPos = parentPos;
      } else {
        break;
      }
    }
    this.values[currentPos] = lastValue;
  }
  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }
  bubbleDown() {
    let currentPos = 0;
    const value = this.values[currentPos];
    while (currentPos < this.values.length) {
      const left = (currentPos * 2) + 1;
      const right = (currentPos * 2) + 2;
      let swap = null;
      if (this.values[left] && this.values[left] > value) {
        swap = left;
      }
      if (this.values[right] && (this.values[right] > value && (!swap || this.values[right] > this.values[swap]))) {
        swap = right;
      }
      if(!swap) {
        break;
      }
      this.values[currentPos] = this.values[swap];
      currentPos = swap;
    }
    this.values[currentPos] = value;
  }
  extractMax() {
    const removed = this.values[0];
    const newRoot = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = newRoot;
      this.bubbleDown();
    }
    return removed;
  }
}

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(1);
assert.equal(binaryHeap.values[0], 1);
binaryHeap.insert(2);
assert.equal(binaryHeap.values[0], 2);
binaryHeap.insert(3);
assert.equal(binaryHeap.values[0], 3);
binaryHeap.insert(4);
assert.equal(binaryHeap.values[0], 4);
binaryHeap.insert(5);
assert.equal(binaryHeap.values[0], 5);
binaryHeap.insert(6);
assert.equal(binaryHeap.values[0], 6);
assert.deepEqual(binaryHeap.values, [6, 4, 5, 1, 3, 2]);
binaryHeap.extractMax();
assert.equal(binaryHeap.values[0], 5);
assert.deepEqual(binaryHeap.values, [5, 4, 2, 1, 3]);
binaryHeap.extractMax();
assert.deepEqual(binaryHeap.values, [4, 3, 2, 1]);
binaryHeap.extractMax();
assert.deepEqual(binaryHeap.values, [3, 1, 2]);
