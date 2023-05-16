const graphs = {
  me: [
    { name: "alice", isProgrammer: false },
    { name: "bob", isProgrammer: false },
    { name: "john", isProgrammer: false },
  ],
  alice: [
    { name: "bob", isProgrammer: true },
    { name: "victor", isProgrammer: false },
    { name: "ben", isProgrammer: false },
  ],
  ben: [
    { name: "alberto", isProgrammer: false },
    { name: "ana", isProgrammer: false },
  ],
  alberto: [{ name: "Arthur", isProgrammer: false }],
};

function breadthFirstSearch() {
  const queue = new Array();
  queue.push(...graphs["me"]);
  for (const iterator of queue) {
    if (isProgrammer(iterator)) {
      return iterator;
    }
    const currentVectors = graphs[iterator.name];
    if (currentVectors) {
      queue.push(...currentVectors);
    }
  }
  return false;
}

function isProgrammer(person) {
  return person.isProgrammer;
}

console.log(breadthFirstSearch());
