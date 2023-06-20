import { it, expect, describe } from "vitest";
import { BinarySearchTree } from "~/computer_science/data-structure/tree/binary-search-tree";
import { depthFirstSearch } from "./depth-first-search";

describe("Depth First Search", () => {
  it("teste one", () => {
    const binarySearchTree = new BinarySearchTree();
    binarySearchTree.insert(47);
    binarySearchTree.insert(21);
    binarySearchTree.insert(76);
    binarySearchTree.insert(18);
    binarySearchTree.insert(27);
    binarySearchTree.insert(52);
    binarySearchTree.insert(82);
    const result = depthFirstSearch.preOrder(binarySearchTree.root);
    expect(result).toEqual([47, 21, 18, 27, 76, 52, 82]);
  });
});
