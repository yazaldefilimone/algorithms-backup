class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev ?? null;
    this.next = next ?? null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value, this.tail);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
      this.length++;
    }
  }
  unshift(value) {
    const node = new Node(value, null, this.head);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head = node;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) return undefined;
    const temp = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }
    this.length--;
    return temp;
  }
}
