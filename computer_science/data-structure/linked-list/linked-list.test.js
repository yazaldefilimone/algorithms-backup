import { it, expect, describe } from "vitest";
import { LinkedList } from "./linked-list";
const makeSut = () => {
  const linkedList = new LinkedList();
  return linkedList;
};
describe("Linked List", () => {
  it("push", () => {
    const linkedList = makeSut();
    expect(linkedList.head).toBe(null);
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.head.value).toBe(1);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.tail.next).toBe(null);
    expect(linkedList.length).toBe(2);
  });
  it("pop", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.pop()?.value).toEqual(2);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.tail.next).toBe(null);
    expect(linkedList.length).toBe(1);
  });
  it("unshift", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.unshift(2);
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.length).toBe(2);
  });

  it("shift", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.push(2);
    linkedList.shift();
    expect(linkedList.head.value).toBe(2);
    expect(linkedList.tail.value).toBe(2);
    expect(linkedList.length).toBe(1);
  });
  it("get", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.get(2)?.value).toBe(2);
    expect(linkedList.get(1)?.value).toBe(1);
    expect(linkedList.get(-1)?.value).toBe(undefined);
    expect(linkedList.get(3)?.value).toBe(undefined);
  });
  it("set", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.push(2);
    expect(linkedList.set(2, 3)).toBe(true);
    expect(linkedList.tail.value).toBe(3);
    expect(linkedList.set(-1, 2)).toBe(false);
  });
  it("insert", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.push(3);
    linkedList.insert(2, 2);
    expect(linkedList.get(2)?.value).toBe(2);
    expect(linkedList.get(3)?.value).toBe(3);
    expect(linkedList.length).toBe(3);
  });
  it("remove", () => {
    const linkedList = makeSut();
    linkedList.push(1);
    linkedList.push(3);
    expect(linkedList.remove(2)?.value).toBe(3);
    expect(linkedList.tail.value).toBe(1);
    expect(linkedList.length).toBe(1);
  });
});
