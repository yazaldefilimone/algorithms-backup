import { Queue } from "../queue/queue.js";
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

  preOrder() {
    console.log(this.value);
    if (this.left) this.left.preOrder();
    if (this.right) this.right.preOrder();
  }

  inOrder() {
    if (this.left) this.left.inOrder();
    console.log(this.value);
    if (this.right) this.right.inOrder();
  }

  postOrder() {
    if (this.left) this.left.postOrder();
    if (this.right) this.right.postOrder();
    console.log(this.value);
  }

  bfs() {
    const queue = new Queue();
    queue.enqueue(this);
    while (!queue.isEmpty()) {
      const node = queue.dequeue();
      console.log(node.value);
      if (node.left) queue.enqueue(node.left);
      if (node.right) queue.enqueue(node.right);
    }
  }
}
