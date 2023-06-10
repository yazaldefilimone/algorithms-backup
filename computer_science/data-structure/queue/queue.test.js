import { it, expect, describe } from "vitest";
import { Queue } from "./queue";
const makeSut = () => {
  const queue = new Queue();
  return queue;
};
describe("Queue", () => {
  it("push", () => {
    const queue = makeSut();
    expect(queue.length).toBe(0);
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect(queue.last?.value).toBe(1);
    expect(queue.first?.value).toBe(1);
    expect(queue.last?.next).toBe(null);
  });
  it("dequeue", () => {
    const queue = makeSut();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(2);
    expect(queue.length).toBe(3);
    expect(queue.first?.value).toBe(1);
    expect(queue.dequeue()?.value).toBe(1);
    expect(queue.length).toBe(2);
    expect(queue.first?.value).toBe(2);
  });
  it("dequeue part 2", () => {
    const queue = makeSut();
    queue.enqueue(1);
    expect(queue.length).toBe(1);
    expect(queue.first?.value).toBe(1);
    expect(queue.dequeue()?.value).toBe(1);
    expect(queue.length).toBe(0);
    expect(queue.last).toBe(null);
    expect(queue.first).toBe(null);
  });
});
