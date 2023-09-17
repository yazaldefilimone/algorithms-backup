export class ArrayStarch {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }
  pop() {
    if (this.length == 0) return undefined;
    let last = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return last;
  }
  delete(index) {
    let store = this.data[index];
    this._shiftItems(index);
    return store;
  }

  _shiftItems(index) {
    for (let shift_idx = index; shift_idx < this.length - 1; shift_idx++) {
      this.data[shift_idx] = this.data[shift_idx + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
}
