export class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      return true;
    }
    return false;
  }

  addEge(vertex_1, vertex_2) {
    if (this.adjacencyList[vertex_1] && this.adjacencyList[vertex_2]) {
      this.adjacencyList[vertex_1].push(vertex_2);
      this.adjacencyList[vertex_2].push(vertex_1);
      return true;
    }
    return false;
  }

  removeEdge(vertex_1, vertex_2) {
    if (this.adjacencyList[vertex_1] && this.adjacencyList[vertex_2]) {
      this.adjacencyList[vertex_1] = this.adjacencyList[vertex_1].filter((edge) => edge !== vertex_2);

      this.adjacencyList[vertex_2] = this.adjacencyList[vertex_2].filter((edge) => edge !== vertex_1);
      return true;
    }
    return false;
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) return undefined;

    while (this.adjacencyList[vertex].length) {
      let temp = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, temp);
    }
    delete this.adjacencyList[vertex];
    return this;
  }
}
