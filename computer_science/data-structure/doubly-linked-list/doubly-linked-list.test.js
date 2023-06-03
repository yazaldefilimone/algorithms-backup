import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  it("create a new node", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.next).toBe(null);
    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.tail.value).toBe(1);
  });
  // it("method pushFront", () => {
  //   const doublyLinkedList = new DoublyLinkedList(1);
  //   doublyLinkedList.pushFront(2);
  //   expect(doublyLinkedList.head.value).toBe(2);
  //   expect(doublyLinkedList.head.next.value).toBe(1);
  // });
  // it("method pop", () => {
  //   const doublyLinkedList = new DoublyLinkedList(1);
  //   doublyLinkedList.push(2);
  //   doublyLinkedList.push(3);
  //   doublyLinkedList.pop();
  //   expect(doublyLinkedList.tail.value).toBe(2);
  // });
  // it("method pushBack", () => {
  //   const doublyLinkedList = new DoublyLinkedList(1);
  //   doublyLinkedList.pushFront(2);
  //   doublyLinkedList.pushFront(3);
  //   doublyLinkedList.pushBack(5);
  //   expect(doublyLinkedList.head.value).toBe(3);
  //   expect(doublyLinkedList.tail.value).toBe(5);
  //   expect(doublyLinkedList.tail.prev.value).toBe(3);
  // });
});
