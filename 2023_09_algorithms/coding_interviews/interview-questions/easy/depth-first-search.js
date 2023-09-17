export class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // Write your code here.
    array.push(this.name);
    for (let index = 0; index < this.children.length; index++) {
      this.children[index].depthFirstSearch(array);
    }
    return array;
  }
}
