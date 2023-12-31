class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (this.value == undefined) {
      this.value = value;
      return this;
    }
    this._insert(value);
    return this;
  }

  contains(value) {
    // Write your code here.
  }

  remove(value) {
    // Write your code here.
    // Do not edit the return statement of this method.
    return this;
  }

  _insert(value) {}
}

const bst = new BST(10);
bst.insert(15);
// bst.insert(10);
console.log(JSON.stringify(bst, null, 2));
// console.log();
// console.log();
