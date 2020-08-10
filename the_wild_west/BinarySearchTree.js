const Queue = require("./Queue");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return this;
    }
    let current = this.root;
    while (true) {
      if (current.value > node.value) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
    return this;
  }
  find(value) {
    if (!this.root) return undefined;
    let current = this.root;
    while (current) {
      if (current.value === value) {
        return current;
      }
      if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return undefined;
  }
  DFSPreOrder() {
    const result = [];
    function helper(node) {
      result.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return result;
  }
  DFSInOrder() {
    const result = [];
    function helper(node) {
      if (node.left) helper(node.left);
      result.push(node.value);
      if (node.right) helper(node.right);
    }
    helper(this.root);
    return result;
  }
  DFSPostOrder() {
    const result = [];
    function helper(node) {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      result.push(node.value);
    }
    helper(this.root);
    return result;
  }
  breadthFirstSearch() {
    if (!this.root) return [];
    const result = [];
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const node = queue.dequeue();
      result.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return result;
  }
  remove(value) {
    if (!this.root) return undefined;
    let previous = null;
    let removed = this.root;
    while (true) {
      if (removed.value === value) {
        break;
      }
      previous = removed;
      if (removed.value < value) {
        if (!removed.right) return undefined;
        removed = removed.right;
      } else {
        if (!removed.left) return undefined;
        removed = removed.left;
      }
    }
    this.replaceNodeWithSmallest(removed, previous);
    return removed;
  }
  // Get the smallest child which replace the current node and remove it
  replaceNodeWithSmallest(replacedNode = this.root, previous = null) {
    let nextChild = replacedNode.left || replacedNode.right;
    if (replacedNode.left && replacedNode.right) {
      nextChild = replacedNode.right;
      let previousNextChild;
      while (nextChild.left) {
        previousNextChild = nextChild;
        nextChild = nextChild.left;
      }
      if (nextChild.right && previousNextChild) {
        previousNextChild.left = nextChild.right;
      } else if (previousNextChild) {
        previousNextChild.left = null;
      }
      nextChild.right = replacedNode.right;
      nextChild.left = replacedNode.left;
    }
    if (previous) {
      if (previous.value > replacedNode.value) {
        previous.left = nextChild;
      } else {
        previous.right = nextChild;
      }
    } else {
      this.root = nextChild;
    }
    replacedNode.left = null;
    replacedNode.right = null;
    return replacedNode;
  }
}

const binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(89)
  .insert(100)
  .insert(74)
  .insert(42)
  .insert(77)
  .insert(97)
  .insert(3)
  .insert(70)
  .insert(87)
  .insert(95)
  .insert(99)
  .insert(44)
  .insert(98)
  .insert(55)
  .insert(46);
binarySearchTree.remove(89);
binarySearchTree.remove(95);
// binarySearchTree.remove(42);
// binarySearchTree.remove(44);
// binarySearchTree.replaceNodeWithSmallest();