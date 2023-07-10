import { it, expect, describe } from "vitest";
import { Node } from "../depth-first-search";

describe("Depth first search", () => {
  it("Test Case #1", () => {
    const graph = new Node("A");
    graph.addChild("B").addChild("C").addChild("D");
    graph.children[0].addChild("E").addChild("F");
    graph.children[2].addChild("G").addChild("H");
    graph.children[0].children[1].addChild("I").addChild("J");
    graph.children[2].children[0].addChild("K");
    expect(graph.depthFirstSearch([])).toEqual(["A", "B", "E", "F", "I", "J", "C", "D", "G", "K", "H"]);
  });
});
