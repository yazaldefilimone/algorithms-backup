import { it, expect, describe } from "vitest";
import { removeDuplicatesFromLinkedList } from "../remove-duplicates-from-linked-list.js";
import { LinkedList } from "computer_science/data-structure/linked-list/linked-list.js";
describe("Remove Duplicates From LinkedList ", () => {
  it("should remove duplicates from linked list: test#1", () => {
    let test = [1, 1, 3, 4, 4, 4, 5];
    const expect_list = [1, 3, 4, 5];
    const linkedList = new LinkedList();
    test.forEach((value) => linkedList.push(value));
    let currentNode = removeDuplicatesFromLinkedList(linkedList.head);
    expect_list.forEach((value) => {
      expect(currentNode.value).toEqual(value);
      currentNode = currentNode.next;
    });
  });
  it("should remove duplicates from linked list: test#2", () => {
    let test = [1, 1, 1, 1, 1, 1, 1];
    const expect_list = [1];
    const linkedList = new LinkedList();
    test.forEach((value) => linkedList.push(value));
    let currentNode = removeDuplicatesFromLinkedList(linkedList.head);
    expect_list.forEach((value) => {
      expect(currentNode.value).toEqual(value);
      currentNode = currentNode.next;
    });
  });
  it("should remove duplicates from linked list: test#2", () => {
    let test = [2, 1, 1, 1, 1, 1, 3];
    const expect_list = [2, 1, 3];
    const linkedList = new LinkedList();
    test.forEach((value) => linkedList.push(value));
    let currentNode = removeDuplicatesFromLinkedList(linkedList.head);
    expect_list.forEach((value) => {
      expect(currentNode.value).toEqual(value);
      currentNode = currentNode.next;
    });
  });
});
