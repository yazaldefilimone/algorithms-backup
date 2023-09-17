// Time Complexity: O(log n) for insert, delete (heapIfyUp, heapIfyDown)
// Space Complexity: O(n) for items
export class MinHeap {
  constructor() {
    this.items = [];
    this.length = 0;
  }
  // Time complexity: O(log n)
  delete() {
    if (this.length == 0) {
      return -1;
    }
    this.length -= 1;
    const out = this.items[0];
    if (this.length == 0) {
      return this.items.shift();
    }
    this.items[0] = this.items[this.length];
    this.heapIfyDown(0);
    return out;
  }
  // Time complexity: O(log n)
  insert(value) {
    this.items[this.length] = value;
    this.heapIfyUp(this.length);
    this.length += 1;
  }
  // Time complexity: O(log n)
  heapIfyUp(index) {
    if (index === 0) return;
    const currentValue = this.items[index];
    const parentIndex = this.parent(index);
    const parentValue = this.items[parentIndex];

    if (currentValue < parentValue) {
      this.swap(parentIndex, parentValue, index, currentValue);
      this.heapIfyUp(parentIndex);
    }
  }
  // Time complexity: O(log n)
  heapIfyDown(index) {
    const leftIndex = this.leftChild(index);
    const rightIndex = this.rightChild(index);
    if (index >= this.length || leftIndex >= this.length) {
      return;
    }

    const leftValue = this.items[leftIndex];
    const rightValue = this.items[rightIndex];
    const currentValue = this.items[index];

    if (leftValue > rightValue && currentValue > rightValue) {
      this.swap(rightIndex, rightValue, index, currentValue);
      this.heapIfyDown(rightIndex);
    } else if (rightValue > leftValue && currentValue > leftValue) {
      this.swap(leftIndex, leftValue, index, currentValue);
      this.heapIfyDown(leftIndex);
    }
  }

  swap(idx_value_left, value_left, idx_value_right, value_right) {
    this.items[idx_value_left] = value_right;
    this.items[idx_value_right] = value_left;
  }
  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  leftChild(index) {
    return index * 2 + 1;
  }
  rightChild(index) {
    return index * 2 + 2;
  }
}
