import { it, expect, describe } from "vitest";
import { middleOfTheLinkedList } from "../middle-of-the-linked-list";
import { LinkedList } from "../../../../computer_science/data-structure/linked-list/linked-list";

describe("Valid Anagram", () => {
  it("head = [1,2,3,4,5] --->  middle=[3,4,5]", () => {
    const linkedList = new LinkedList();
    [1, 2, 3, 4, 5].forEach((element) => {
      linkedList.push(element);
    });
    const test = middleOfTheLinkedList(linkedList.head);
    expect(test.value).toBe(3);
    expect(test?.next?.value).toBe(4);
    expect(test?.next?.next?.value).toBe(5);
  });
  it("head=[1,2,3,4,5,6] --->  middle=[4,5,6]", () => {
    const linkedList = new LinkedList();
    [1, 2, 3, 4, 5, 6].forEach((element) => {
      linkedList.push(element);
    });
    const test = middleOfTheLinkedList(linkedList.head);
    expect(test.value).toBe(4);
    expect(test?.next?.value).toBe(5);
    expect(test?.next?.next?.value).toBe(6);
  });
});
