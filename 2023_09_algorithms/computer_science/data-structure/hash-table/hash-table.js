const DEFAULT_HASH_TABLE_SIZE = 7;

export class HashTable {
  constructor(hashTableSize = DEFAULT_HASH_TABLE_SIZE) {
    this.data_map = Array(hashTableSize);
  }

  _hash(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      hash = (hash + key.charCodeAt(index) * 23) % this.data_map.length;
    }
    return hash;
  }

  set(key, value) {
    const index = this._hash(key);
    const data = [key, value];
    if (!this.data_map[index]) {
      this.data_map[index] = [data];
    } else {
      this.data_map[index].push(data);
    }
    return this;
  }

  get(key) {
    const index = this._hash(key);
    if (this.data_map[index]) {
      for (let idx = 0; idx < this.data_map[index].length; idx++) {
        if (this.data_map[index][idx][0] == key) {
          return this.data_map[index][idx][1];
        }
      }
    }
    return undefined;
  }

  keys() {
    let keys = [];
    for (let index = 0; index < this.data_map.length; index++) {
      if (this.data_map[index]) {
        for (let idx = 0; idx < this.data_map[index].length; idx++) {
          keys.push(this.data_map[index][idx][0]);
        }
      }
    }
    return keys;
  }
}
