class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  pushFront(value) {
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

  search(value, callback = null) {
    let currentNode = this.head;
    if (callback) {
      while (currentNode && !callback(currentNode.value)) {
        currentNode = currentNode.next;
      }
      return currentNode;
    }
    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
  remove(value, callback = null) {
    if (this.isEmpty()) {
      return;
    }

    if (callback) {
      if (callback(this.head.value)) {
        this.head = this.head.next;
        return;
      }
    } else if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    while (currentNode.next) {
      if (callback) {
        if (callback(currentNode.next.value)) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      } else {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
          return;
        }
        currentNode = currentNode.next;
      }
    }
  }
}
