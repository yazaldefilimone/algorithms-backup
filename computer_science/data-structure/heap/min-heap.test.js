import { MinHeap } from "./min-heap";
import { it, expect, describe } from "vitest";

describe("MinHeap", () => {
  it("should insert and delete", () => {
    const heap = new MinHeap();
    [1, 2, 3, 4, 5].forEach((value) => heap.insert(value));
    expect(heap.delete()).toBe(1);
  });
  it("should insert and delete", () => {
    const heap = new MinHeap();
    [1, 2, 3, 4, 5].forEach((value) => heap.insert(value));
    expect(heap.length).toBe(5);
    expect(heap.delete()).toBe(1);
    expect(heap.delete()).toBe(2);
    expect(heap.delete()).toBe(3);
    expect(heap.delete()).toBe(4);
    expect(heap.delete()).toBe(5);
    expect(heap.delete()).toBe(-1);
    expect(heap.length).toBe(0);
  });
});
