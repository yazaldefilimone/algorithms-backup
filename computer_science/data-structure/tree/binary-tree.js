class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    const node = new BinaryTree(value);
    if (this.left) {
      node.left = this.left;
      this.left = node;
    } else {
      this.left = node;
    }
  }

  insertRight(value) {
    const node = new BinaryTree(value);
    if (this.right) {
      node.right = this.right;
      this.right = node;
    } else {
      this.right = node;
    }
  }
}
