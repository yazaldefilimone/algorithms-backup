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

  getBucket(key) {
    const hashCode = this.hash(key);
    const linkedListBucket = this.buckets[hashCode];
    return linkedListBucket;
  }

  set(key, value) {
    const linkedListBucket = this.getBucket(key);
    const str = this.getStringify(key, value);
    const node = linkedListBucket.search(str);
    if (node) {
      node.value = str;
    } else {
      linkedListBucket.pushFront(str);
    }
  }

  get(key) {
    const linkedListBucket = this.getBucket(key);
    const node = linkedListBucket.search("", (currentNode) => currentNode.includes(`{"key":"${key}"`));
    return node ? this.getParse(node.value).value : null;
  }

  delete(key) {
    const linkedListBucket = this.getBucket(key);
    linkedListBucket.remove("", (currentNode) => currentNode.includes(`{"key":"${key}"`));
  }
}

const value = "Yazalde Filimone";
const hashTable = new HashTable();
hashTable.set("me", value);
console.log(hashTable.get("me"));
hashTable.delete("me");
console.log(hashTable.get("me"));
