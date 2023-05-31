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

  it("method push", () => {
    const doublyLinkedList = new DoublyLinkedList(1);

    doublyLinkedList.push(2);
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.next.value).toBe(2);
    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.tail.value).toBe(2);
  });

  it("method pop", () => {
    const doublyLinkedList = new DoublyLinkedList(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    doublyLinkedList.pop();
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.next.value).toBe(2);
    expect(doublyLinkedList.tail.prev.value).toBe(1);
    expect(doublyLinkedList.tail.next).toBe(null);
    expect(doublyLinkedList.tail.value).toBe(2);
  });
});
