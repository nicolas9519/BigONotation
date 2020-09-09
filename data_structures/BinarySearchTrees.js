const Queue = require('./Queues');
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.counter = 1;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * loop insert
   */
  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let current = this.root;
      while (true) {
        if (current.value === newNode.value) {
          current.counter++;
          break;
        }
        if (current.value > newNode.value) {
          if (!current.left) {
            current.left = newNode;
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode;
            break;
          }
          current = current.right;
        }
      }
    }
    return this;
  }

  /**
   * Recursive insert
   */
  // checkGreaterOrLower(node, newNode) {
  //   if (node.value === newNode.value) {
  //     node.counter++;
  //   } else if (node.value < newNode.value) {
  //     if (node.right) {
  //       this.checkGreaterOrLower(node.right, newNode);
  //     } else node.right = newNode;
  //   } else {
  //     if (node.left) {
  //       return this.checkGreaterOrLower(node.left, newNode);
  //     } else node.left = newNode;
  //   }
  //   return;
  // }
  // insert(value) {
  //   const newNode = new Node(value);
  //   if (!this.root) {
  //     this.root = newNode;
  //   } else {
  //     this.checkGreaterOrLower(this.root, newNode);
  //   }
  //   return this;
  // }

  find(value) {
    if (!this.root) return false;
    let foundIt = false;
    let current = this.root;
    while (current && !foundIt) {
      if (current.value === value) {
        foundIt = true;
      } else if (current.value > value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return current ? current : undefined;
  }

  breadthFirstSearch() {
    if (!this.root) return [];
    const queue = new Queue();
    const visited = [];
    queue.enqueue(this.root);
    while (queue.size) {
      const node = queue.dequeue();
      visited.push(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
    return visited;
  }

  helperPreOrder(node) {
    let visited = [node.value];
    if (node.left) visited = visited.concat(this.helperPreOrder(node.left));
    if (node.right) visited = visited.concat(this.helperPreOrder(node.right));
    return visited;
  }

  DFSPreOrder() {
    if (!this.root) return [];
    const visited = this.helperPreOrder(this.root);
    return visited;
  }

  helperPostOrder(node) {
    let visited = [];
    if (node.left) visited = visited.concat(this.helperPostOrder(node.left));
    if (node.right) visited = visited.concat(this.helperPostOrder(node.right));
    visited.push(node.value);
    return visited;
  }

  DFSPostOrder() {
    if (!this.root) return [];
    const visited = this.helperPostOrder(this.root);
    return visited;
  }

  helperInOrder(node) {
    let visited = [];
    if (node.left) visited = visited.concat(this.helperInOrder(node.left));
    visited.push(node.value);
    if (node.right) visited = visited.concat(this.helperInOrder(node.right));
    return visited;
  }

  DFSInOrder() {
    if (!this.root) return [];
    const visited = this.helperInOrder(this.root);
    return visited;
  }

  helperBalanceTree(arr) {
    if (!arr.length) return null;
    if (arr.length === 1) {
      const node = new Node(arr[0]);
      return node;
    }
    const mid = Math.floor(arr.length / 2);
    const root = new Node(arr[mid]);
    root.left = this.helperBalanceTree(arr.slice(0, mid));
    root.right = this.helperBalanceTree(arr.slice(mid + 1));
    return root;
  }

  balanceTree() {
    const arr = this.DFSInOrder();
    this.root = this.helperBalanceTree(arr);
    return this;
  }

}
/*
         14
  9          22
6    11    19    30
   10  13      26
*/
const myTree = new BinarySearchTree();
myTree.insert(14);
myTree.insert(9);
myTree.insert(22);
myTree.insert(6);
myTree.insert(11);
myTree.insert(19);
myTree.insert(30);
myTree.insert(10);
myTree.insert(13);
myTree.insert(26);
myTree.find(14);
myTree.find(30);
myTree.find(10);
myTree.find(9);
myTree.breadthFirstSearch();
myTree.DFSPreOrder();
myTree.DFSPostOrder();
myTree.DFSInOrder();

const secondTree = new BinarySearchTree();
secondTree.insert(15);
secondTree.insert(14);
secondTree.insert(13);
secondTree.insert(12);
secondTree.insert(11);
secondTree.insert(10);
secondTree.insert(9);
secondTree.insert(16);
secondTree.insert(17);
secondTree.insert(18);
secondTree.insert(19);
secondTree.insert(20);
secondTree.insert(21);
secondTree.balanceTree();
