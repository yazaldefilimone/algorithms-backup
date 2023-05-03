export class Queue {
  constructor() {
    this.elements = [];
  }
  enqueue(element) {
    this.elements.push(element);
  }

  dequeue() {
    return this.elements.shift();
  }

  front() {
    return this.elements[0];
  }

  back() {
    return this.elements.at(-1);
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.elements.length === 0;
  }
}
