export class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new Node(value);

    if (this.root === null) {
      this.root = node;
      return this;
    }

    let tempNode = this.root;
    while (true) {
      if (tempNode.value === node.value) return undefined;

      if (node.value < tempNode.value) {
        if (tempNode.left == null) {
          tempNode.left = node;
          return this;
        }
        tempNode = tempNode.left;
      } else {
        if (tempNode.right === null) {
          tempNode.right = node;
          return this;
        }
        tempNode = tempNode.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    let tempNode = this.root;
    while (tempNode) {
      if (value < tempNode.value) {
        tempNode = tempNode.left;
      } else if (value > tempNode.value) {
        tempNode = tempNode.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
