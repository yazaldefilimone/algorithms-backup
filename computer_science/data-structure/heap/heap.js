class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export class Heap {
  constructor(capacity = 8) {
    this.size = 0;
    this.capacity = capacity;
    this.items = [];
  }

  swap(indexOne, indexTwo) {
    let temp = this.items[indexOne];
    this.items[indexOne] = this.items[indexTwo];
    this.items[indexTwo] = temp;
  }

  shift() {
    if (this.size == 0) return undefined;
    return this.items[0];
  }

  poll() {
    if (this.size == 0) return undefined;
    let temp = this.items[0];
    this.items[0] = this.items[this.size];
    this.size -= 1;
    this.heapIfyDown();
    return temp;
  }
  heapIfyDown() {}
}

const heap = new Heap();
