import { it, expect, describe } from "vitest";
import { Stack } from "./stack";
const makeSut = () => {
  const stack = new Stack();
  return stack;
};
describe("Stack", () => {
  it("push", () => {
    const stack = makeSut();
    expect(stack.length).toBe(0);
    stack.push(1);
    expect(stack.length).toBe(1);
    expect(stack.top?.value).toBe(1);
    stack.push(2);
    expect(stack.top?.value).toBe(2);
  });
  it("pop", () => {
    const stack = makeSut();
    stack.push(1);
    stack.push(2);
    expect(stack.length).toBe(2);
    expect(stack.top?.value).toBe(2);
    expect(stack.pop()?.value).toBe(2);
    expect(stack.top?.value).toBe(1);
    expect(stack.length).toBe(1);
  });
});
