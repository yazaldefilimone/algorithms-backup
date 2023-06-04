import { it, expect, describe } from "vitest";
import { reverseLinkedList } from "../reverse-linked-list";
import { LinkedList } from "../../../../computer_science/data-structure/linked-list/linked-list";

describe("Valid Anagram", () => {
  it("head=[1,2,3,4,5] ---> [5,4,3,2,1]", () => {
    const linkedList = new LinkedList();
    const nodes = [1, 2, 3, 4, 5];
    const test = [5, 4, 3, 2, 1];
    nodes.forEach((element) => {
      linkedList.push(element);
    });
    let headTest = reverseLinkedList(linkedList.head);
    for (let index = 0; index < test.length; index++) {
      const element = test[index];
      expect(headTest.value).toBe(element);
      headTest = headTest.next;
    }
  });
  it("head=[1,2] ---> [2,1]", () => {
    const linkedList = new LinkedList();
    const nodes = [1, 2];
    const test = [2, 1];
    nodes.forEach((element) => {
      linkedList.push(element);
    });
    let headTest = reverseLinkedList(linkedList.head);
    for (let index = 0; index < test.length; index++) {
      const element = test[index];
      expect(headTest.value).toBe(element);
      headTest = headTest.next;
    }
  });
});
