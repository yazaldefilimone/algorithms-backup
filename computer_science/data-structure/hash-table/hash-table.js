import { LinkedList } from "../linked-list/linked-list.js";

const defaultHashTableSize = 18;

export class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());

    this.keys = {};
  }
  hash(key) {
    const hashCode = Array.from(key).reduce((acc, character) => {
      return acc + character.charCodeAt();
    }, 0);
    return hashCode % this.buckets.length;
  }
  createStringData(key, value) {
    return JSON.stringify({ key, value }).trim();
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const linkedListBucket = this.buckets[hashCode];
    const str = createStringData(key, value);
    const node = linkedListBucket.search(str);
    if (node) {
      node.value.next = str;
    } else {
      linkedListBucket.pushFront(str);
    }
  }
}
