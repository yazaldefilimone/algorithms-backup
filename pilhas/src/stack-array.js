class Stack {
  constructor() {
    this.items = []; //{1}
  }
  push(props) {
    this.items.push(props);
  }
  pop() {
    const elementDeleted = this.items.pop();
    return elementDeleted;
  }
  peek() {
    const lastElement = this.items[this.items.length - 1];
    return lastElement;
  }
  isEmpty() {
    const result = this.items.length === 0;
    return result;
  }
  clear() {
    this.items = [];
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); //true
stack.push(8);
stack.push(9);
console.log(stack.peek());
console.log(stack.isEmpty()); //false
stack.push(2022);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
