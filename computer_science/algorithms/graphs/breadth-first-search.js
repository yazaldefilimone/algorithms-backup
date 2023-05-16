const graphs = {
  me: [
    { name: "alice", isProgrammer: false },
    { name: "bob", isProgrammer: false },
    { name: "john", isProgrammer: false },
  ],
  alice: [
    { name: "bob", isProgrammer: false },
    { name: "victor", isProgrammer: false },
    { name: "ben", isProgrammer: false },
  ],
  ben: [
    { name: "alberto", isProgrammer: true },
    { name: "ana", isProgrammer: false },
  ],
  alberto: [{ name: "Arthur", isProgrammer: false }],
};

// O(v) + O(a) // v:9 + a:3 // O(v+a) // O(9+3) // O(12)

export function breadthFirstSearch(graphs, start) {
  const queue = new Array();
  const verticesVerified = new Array();
  queue.push(...graphs[start]);

  for (const currentVertex of queue) {
    const isVerified = verticesVerified.find((vertex) => vertex.name === currentVertex.name);
    if (!isVerified) {
      if (isProgrammer(currentVertex)) {
        return currentVertex;
      }
      verticesVerified.push(currentVertex);

      const verticesChildren = graphs[currentVertex.name];

      if (verticesChildren) {
        queue.push(...verticesChildren);
      }
    }
  }
  return false;
}

function isProgrammer(person) {
  return person.isProgrammer;
}

console.log(breadthFirstSearch(graphs, "me"));
