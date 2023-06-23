import { it, expect, describe } from "vitest";
import { ArrayStarch } from "./array";

const makeSut = () => {
  const arrayStarch = new ArrayStarch();
  return { arrayStarch };
};

describe("Array", () => {
  it("build of instance", () => {
    const { arrayStarch } = makeSut();
    expect(arrayStarch.length).toBe(0);
    expect(arrayStarch.data).toEqual({});
  });
  it("get method", () => {
    const { arrayStarch } = makeSut();
    expect(arrayStarch.get(0)).toBeUndefined();
  });
  it("push method", () => {
    const { arrayStarch } = makeSut();
    arrayStarch.push("hei");
    expect(arrayStarch.get(0)).not.toBeUndefined();
    expect(arrayStarch.length).toEqual(1);
    expect(arrayStarch.get(0)).toEqual("hei");
  });

  it("pop method", () => {
    const { arrayStarch } = makeSut();
    arrayStarch.push("hei");
    arrayStarch.push("any");
    expect(arrayStarch.length).toEqual(2);
    expect(arrayStarch.pop()).toEqual("any");
    expect(arrayStarch.length).toEqual(1);
  });

  it("delete method", () => {
    const { arrayStarch } = makeSut();
    arrayStarch.push("hei");
    arrayStarch.push("any");

    expect(arrayStarch.length).toEqual(2);
    expect(arrayStarch.delete(0)).toEqual("hei");
    expect(arrayStarch.get(0)).toEqual("any");
    expect(arrayStarch.length).toEqual(1);
  });
});
