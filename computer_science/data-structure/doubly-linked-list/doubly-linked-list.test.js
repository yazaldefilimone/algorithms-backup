import { describe, expect, it } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  it("push", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    expect(doublyLinkedList.head.value).toBe(1);
    expect(doublyLinkedList.head.next?.value).toBe(2);
    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.tail.value).toBe(3);
    expect(doublyLinkedList.tail.prev.value).toBe(2);
  });
  it("unshift", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.unshift(1);
    expect(doublyLinkedList.head.next).toBe(null);
    doublyLinkedList.unshift(2);
    doublyLinkedList.unshift(3);
    expect(doublyLinkedList.head.prev).toBe(null);
    expect(doublyLinkedList.head.value).toBe(3);
    expect(doublyLinkedList.head.next.prev.value).toBe(3);
    expect(doublyLinkedList.head.next.value).toBe(2);
    expect(doublyLinkedList.head.next.next.value).toBe(1);
    expect(doublyLinkedList.tail.value).toBe(1);
    expect(doublyLinkedList.length).toBe(3);
  });

  it("shift", () => {
    const doublyLinkedList = new DoublyLinkedList();
    const doublyLinkedList_second = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList_second.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    const is = doublyLinkedList_second.shift();
    expect(doublyLinkedList.shift()?.value).toBe(1);
    expect(is?.value).toBe(1);
    expect(doublyLinkedList_second.shift()?.value).toBe(undefined);
    expect(doublyLinkedList_second.length).toBe(0);
    expect(doublyLinkedList.length).toBe(2);
  });

  it("get", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    expect(doublyLinkedList.get(0)?.value).toBe(undefined);
    expect(doublyLinkedList.get(4)?.value).toBe(undefined);
    expect(doublyLinkedList.get(1)?.value).toBe(1);
    expect(doublyLinkedList.get(2)?.value).toBe(2);
    expect(doublyLinkedList.get(3)?.value).toBe(3);
    expect(doublyLinkedList.length).toBe(3);
  });

  it("set", () => {
    const doublyLinkedList = new DoublyLinkedList();
    doublyLinkedList.push(1);
    doublyLinkedList.push(2);
    doublyLinkedList.push(3);
    expect(doublyLinkedList.get(2)?.value).toBe(2);
    expect(doublyLinkedList.set(2, 100)).toBe(true);
    expect(doublyLinkedList.set(4, 2)).toBe(false);
    expect(doublyLinkedList.get(2)?.value).toBe(100);
    expect(doublyLinkedList.length).toBe(3);
  });
});
