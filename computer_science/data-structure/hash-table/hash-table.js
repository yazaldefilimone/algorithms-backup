import { LinkedList } from "../linked-list/linked-list.js";

const defaultHashTableSize = 18;

export class HashTable {
  constructor(hashTableSize = defaultHashTableSize) {
    this.buckets = Array(hashTableSize)
      .fill(null)
      .map(() => new LinkedList());
  }

  hash(key) {
    const hashCode = Array.from(key).reduce((acc, character) => {
      return acc + character.charCodeAt();
    }, 0);
    return hashCode % this.buckets.length;
  }

  getStringify(key, value) {
    return JSON.stringify({ key, value }).trim();
  }

  getParse(data) {
    return JSON.parse(data);
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const linkedListBucket = this.buckets[hashCode];
    const str = this.getStringify(key, value);
    const node = linkedListBucket.search(str);
    if (node) {
      node.value = str;
    } else {
      linkedListBucket.pushFront(str);
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const linkedListBucket = this.buckets[hashCode];
    const node = linkedListBucket.search("", (currentNode) => currentNode.includes(`{"key":"${key}"`));
    return node ? this.getParse(node.value).value : null;
  }
}
