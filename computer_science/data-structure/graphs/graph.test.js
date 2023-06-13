import { it, expect, describe } from "vitest";
import { Graph } from "./graph";
const makeSut = () => {
  const graph = new Graph();
  return graph;
};

describe("Graph", () => {
  it("addVertex", () => {
    const graph = makeSut();
    expect(graph.addVertex("A")).toBe(true);
    expect(graph.addVertex("A")).toBe(false);
    expect(graph.adjacencyList).toHaveProperty("A");
    expect(graph.adjacencyList.A).toEqual([]);
  });
  it("addEge", () => {
    const graph = makeSut();
    graph.addVertex("A");
    graph.addVertex("B");

    expect(graph.addEge("A", "B")).toBe(true);
    expect(graph.adjacencyList.A).toEqual(["B"]);
    expect(graph.adjacencyList.B).toEqual(["A"]);
    expect(graph.addEge("A", "C")).toBe(false);
    expect(graph.adjacencyList.A).toEqual(["B"]);
  });
  it("removeVertex", () => {
    const graph = makeSut();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEge("A", "B");
    graph.addEge("A", "C");
    graph.addEge("B", "C");
    graph.removeVertex("C");
    expect(graph.adjacencyList.A).toEqual(["B"]);
    expect(graph.adjacencyList.B).toEqual(["A"]);
    expect(graph.adjacencyList.C).toEqual(undefined);
  });
  it("removeVertex", () => {
    const graph = makeSut();
    graph.addVertex("A");
    graph.addVertex("B");
    graph.addVertex("C");
    graph.addEge("A", "B");
    graph.addEge("A", "C");
    graph.addEge("B", "C");
    expect(graph.removeEdge("C", "A")).toBe(true);
    expect(graph.adjacencyList.A).toEqual(["B"]);
    expect(graph.adjacencyList.C).toEqual(["B"]);
    expect(graph.adjacencyList.B).toEqual(["A", "C"]);
  });
});
