import { it, expect, describe } from "vitest";
import { BinarySearchTree } from "../binary-search-tree";
const makeSut = () => {
  const binarySearchTree = new BinarySearchTree();
  return binarySearchTree;
};
describe("BinarySearchTree", () => {
  it("insert", () => {
    const binarySearchTree = makeSut();
    expect(binarySearchTree.root).toBe(null);
    binarySearchTree.insert(1);
    expect(binarySearchTree.root?.value).toBe(1);
    expect(binarySearchTree.root?.left).toBe(null);
    expect(binarySearchTree.root?.right).toBe(null);
  });
  it("insert right ", () => {
    const binarySearchTree = makeSut();
    expect(binarySearchTree.root).toBe(null);
    binarySearchTree.insert(1);
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    expect(binarySearchTree.root?.value).toBe(1);
    expect(binarySearchTree.root?.left).toBe(null);
    expect(binarySearchTree.root?.right?.value).toBe(2);
    expect(binarySearchTree.root?.right?.right?.value).toBe(3);
  });
  it("insert left ", () => {
    const binarySearchTree = makeSut();
    expect(binarySearchTree.root).toBe(null);
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    expect(binarySearchTree.root?.value).toBe(3);
    expect(binarySearchTree.root?.right).toBe(null);
    expect(binarySearchTree.root?.left?.value).toBe(2);
    expect(binarySearchTree.root?.left?.left?.value).toBe(1);
  });
  it("insert left and  right", () => {
    const binarySearchTree = makeSut();
    expect(binarySearchTree.root).toBe(null);
    binarySearchTree.insert(20);
    binarySearchTree.insert(24);
    binarySearchTree.insert(18);
    binarySearchTree.insert(17);
    binarySearchTree.insert(19);
    binarySearchTree.insert(25);
    binarySearchTree.insert(23);
    /*
                          20
                  /               \
                  24              18
                /    \          /     \
                25    23        19     17

 */
    expect(binarySearchTree.root?.value).toBe(20);
    expect(binarySearchTree.root?.right?.value).toBe(24);
    expect(binarySearchTree.root?.left?.value).toBe(18);
    //
    expect(binarySearchTree.root?.left?.left?.value).toBe(17);
    expect(binarySearchTree.root?.left?.right?.value).toBe(19);
    //

    expect(binarySearchTree.root?.right?.right?.value).toBe(25);
    expect(binarySearchTree.root?.right?.left?.value).toBe(23);
  });
  it("contains left and  right", () => {
    const binarySearchTree = makeSut();
    expect(binarySearchTree.root).toBe(null);
    binarySearchTree.insert(20);
    binarySearchTree.insert(24);
    binarySearchTree.insert(18);
    binarySearchTree.insert(17);
    binarySearchTree.insert(19);
    binarySearchTree.insert(25);
    binarySearchTree.insert(23);
    /*
                          20
                  /               \
                  24              18
                /    \          /     \
                25    23        19     17

 */
    expect(binarySearchTree.contains(18)).toBe(true);
    expect(binarySearchTree.contains(23)).toBe(true);
    expect(binarySearchTree.contains(0)).toBe(false);
    expect(binarySearchTree.contains(5)).toBe(false);
  });
});
