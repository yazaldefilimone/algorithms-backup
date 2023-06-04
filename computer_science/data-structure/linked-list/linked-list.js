class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.head === null;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let previous = this.head;
    while (currentNode.next) {
      previous = currentNode;
      currentNode = currentNode.next;
    }
    previous.next = null;
    this.tail = previous;
    this.length--;

    if (!this.head) {
      this.tail = null;
    }

    return currentNode;
  }

  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    }
    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  shift() {
    if (!this.head) return undefined;
    const temp = this.head;
    this.head = this.head.next;
    temp.next = null;
    this.length--;
    if (!this.head) {
      this.tail = null;
    }
    return temp;
  }

  get(index) {
    if (index <= 0 || index > this.length) {
      return undefined;
    }
    let temp = this.head;
    for (let idx = 1; idx < index; idx++) {
      temp = temp.next;
    }
    return temp;
  }
  set(index, value) {
    const currentNode = this.get(index);
    if (currentNode) {
      currentNode.value = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (!this.head) return this.unshift(value);
    if (index <= 0 || index > this.length) return false;
    let idx = index - 1;
    let currentNode = this.get(idx);
    const node = new Node(value, currentNode.next);
    currentNode.next = node;
    this.length++;
  }

  remove(index) {
    if (index <= 0 || index > this.length) return false;
    if (index === 1) return this.shift();
    if (this.length === index) return this.pop();
    let idx = index - 1;
    let currentNode = this.get(idx);
    const node = currentNode.next;
    currentNode.next = node.next;
    node.next = null;
    this.length--;
    return node;
  }
}
