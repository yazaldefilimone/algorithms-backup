export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);

    if (!this.top) {
      this.top = node;
    } else {
      node.next = this.top;
      this.top = node;
    }

    this.length++;
    return this;
  }
  pop() {
    if (!this.top) return undefined;
    const temp = this.top;
    this.top = temp.next;
    temp.next = null;
    this.length--;
    return temp;
  }
}
