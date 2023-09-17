import { it, expect, describe } from "vitest";
import { middleNode, middleNode_second_solution } from "../middle-node";
import { LinkedList } from "~/2023_09_algorithms/computer_science/data-structure/linked-list/linked-list.js";

describe("Middle Node", () => {
  it("should find the middle node: test#1", () => {
    let test = [1, 2, 3, 4, 5, 6];
    const middle = 4;
    const linkedList = new LinkedList();
    test.forEach((value) => linkedList.push(value));
    let currentNode = middleNode(linkedList.head);
    let currentNode_second_solution = middleNode_second_solution(linkedList.head);
    expect(currentNode.value).toEqual(middle);
    expect(currentNode_second_solution.value).toEqual(middle);
  });
  it("should find the middle node: test#2", () => {
    let test = [1, 2, 3, 4, 5, 6, 7];
    const middle = 4;
    const linkedList = new LinkedList();
    test.forEach((value) => linkedList.push(value));
    let currentNode = middleNode(linkedList.head);
    let currentNode_second_solution = middleNode_second_solution(linkedList.head);
    expect(currentNode.value).toEqual(middle);
    expect(currentNode_second_solution.value).toEqual(middle);
  });
  it("should find the middle node: test#3", () => {
    let test = [1, 2, 3, 4];
    const middle = 3;
    const linkedList = new LinkedList();
    test.forEach((value) => linkedList.push(value));
    let currentNode = middleNode(linkedList.head);
    let currentNode_second_solution = middleNode_second_solution(linkedList.head);
    expect(currentNode.value).toEqual(middle);
    expect(currentNode_second_solution.value).toEqual(middle);
  });
});
