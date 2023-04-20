class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  pushHead(value) {
    this.head = new Node(value, this.head);
  }

  pushBack(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
  }

  size() {
    let currentNode = this.head;
    let count = 0;
    while (currentNode) {
      count += 1;
      currentNode = currentNode.next;
    }
    return count;
  }

  search(value) {
    let currentNode = this.head;
    while (currentNode && currentNode.value === value) {
      currentNode = currentNode.next;
    }
    return Boolean(currentNode);
  }
}
