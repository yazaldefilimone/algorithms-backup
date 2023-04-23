class Queue {
  constructor() {
    this.elements = {};
    this.head = 0;
    this.tails = 0;
  }
  enqueue(element) {
    this.elements[this.tails] = element;
    this.tails++;
  }

  dequeue() {
    const element = this.elements[this.head];
    delete this.elements[this.head];
    this.head++;
    return element;
  }

  peek() {
    return this.elements[this.head];
  }

  get length() {
    return this.tails - this.head;
  }

  get isEmpty() {
    return this.tails - this.head;
  }
}
