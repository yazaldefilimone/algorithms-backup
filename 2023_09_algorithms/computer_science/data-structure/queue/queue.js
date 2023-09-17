export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value) {
    const node = new Node(value);
    if (!this.last && this.length == 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if (!this.first) return undefined;
    const temp = this.first;
    this.first = temp.next;
    if (this.first === null) {
      this.last = null;
    }
    temp.next = null;
    this.length--;
    return temp;
  }
}
