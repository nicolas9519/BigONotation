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

}

const myTree = new BinarySearchTree();
myTree.insert(6);
myTree.insert(3);
myTree.insert(4);
myTree.insert(8);
myTree.insert(7);
myTree.insert(6);
myTree.find(6);
myTree.find(4);
myTree.find(7);
myTree.find(9);
console.log(myTree);
