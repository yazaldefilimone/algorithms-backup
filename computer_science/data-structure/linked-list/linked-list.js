import { Node } from "./node";

export class LinkedList {
  constructor(value) {
    const currentNode = new Node(value);
    this.head = currentNode;
    this.tail = this.head;
    this.len = 1;
  }
  push(value) {
    const current = new Node(value);
    this.len += 1;
    if (!this.tail) {
      this.tail = current;
      this.head = current;
      return this;
    }

    this.tail.next = current;
    this.tail = current;
    return this;
  }

  unshift(value) {
    const current = new Node(value);
    this.len += 1;
    if (!this.head) {
      this.tail = current;
      this.head = current;
      return this;
    }
    this.head.next = current;
    this.head = current;
    return this;
  }
  insert(index, value) {
    const current = new Node(value);
    while (condition) {}
  }
}
