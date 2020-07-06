class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    let pos = this.values.push(value);
    this.bubbleUp(pos);
    return pos;
  }

  bubbleUp() {
    let pos = this.values.length - 1;
    while (pos > 0) {
      const parentPos = Math.floor((pos - 1) / 2);
      if (this.values[parentPos] >= this.values[pos]) break;
      const temp = this.values[pos];
      this.values[pos] = this.values[parentPos];
      this.values[parentPos] = temp;
      pos = parentPos;
    }
  }

  extractMax() {
    const removedElement = this.values[0];
    const value = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = value;
      this.bubbleDown();
    }
    return removedElement;
  }

  bubbleDown() {
    let current = 0;
    const newValue = this.values[current];
    while (current < this.values.length) {
      const left = (2 * current) + 1;
      const right = (2 * current) + 2;
      let swap = null;
      if (!isNaN(this.values[right]) && this.values[left] < this.values[right] && this.values[current] < this.values[right]) {
        swap = right;
      } else if (!isNaN(this.values[left]) && this.values[right] < this.values[left] && this.values[current] < this.values[left]) {
        swap = left;
      } else {
        break;
      }
      this.values[current] = this.values[swap];
      this.values[swap] = newValue;
      current = swap;
    }
  }
}

const myHeap = new MaxBinaryHeap();
/*
                80
        60              30
    47      58      27      15
  25  10  53  24  20  11
*/
myHeap.insert(60);
myHeap.insert(58);
myHeap.insert(30);
myHeap.insert(47);
myHeap.insert(53);
myHeap.insert(27);
myHeap.insert(15);
myHeap.insert(25);
myHeap.insert(10);
myHeap.insert(80);
myHeap.insert(24);
myHeap.insert(20);
myHeap.insert(11);
myHeap.extractMax();
myHeap.extractMax();
myHeap.extractMax();
