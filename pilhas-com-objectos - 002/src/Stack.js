class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  push(prop) {
    this.items[this.count] = prop;
    this.count++;
  }
  size() {
    const value = this.count;
    return value;
  }
  isEmpty() {
    const isValue = this.count === 0;
    return isValue;
  }
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count - 1];
    return result;
  }
  clear() {
    //   this.count = 0;
    //   this.items = {};
    while (!this.isEmpty()) {
      this.pop();
    }
  }
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let OjectString = `${this.items[0]}`;

    for (let index = 1; index < this.count; index++) {
      OjectString = `${OjectString}, ${this.items[index]}`;
    }
    return OjectString;
  }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(9));
console.log(stack.push(8));
console.log(stack.push(7));
console.log(stack.push(1));
console.log(stack.size());
console.log(stack.toString());
console.log(stack.clear());
console.log(stack.size());
