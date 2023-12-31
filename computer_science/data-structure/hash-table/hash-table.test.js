import { describe, expect, it } from "vitest";
import { HashTable } from "./hash-table.js";

describe("hash table", () => {
  it("should return hash and its number", () => {
    const hashTable = new HashTable();
    expect(hashTable).toHaveProperty("_hash");
    expect(hashTable._hash("yaz")).toBeTypeOf("number");
    expect(hashTable._hash("yaz")).toBe(hashTable._hash("yaz"));
  });

  it("should return correct value by key", () => {
    const value = "Yazalde Filimone";
    const hashTable = new HashTable();
    hashTable.set("me", value);
    expect(hashTable.get("me")).toBe(value);
  });
  it("should return null if no set value", () => {
    const value = "Yazalde Filimone";
    const hashTable = new HashTable();
    // hashTable.set("me", value);
    expect(hashTable.get("me")).toBe(undefined);
  });
  it("should return all keys", () => {
    const value = "Yazalde Filimone";
    const hashTable = new HashTable();
    hashTable.set("me", value);
    hashTable.set("hei", "hello");
    hashTable.set("ten", 10);
    hashTable.set("do", 100);
    expect(hashTable.keys()?.sort()).toEqual(["me", "hei", "ten", "do"].sort());
  });
  // it("should return null if delete  value", () => {
  //   const value = "Yazalde Filimone";
  //   const hashTable = new HashTable();
  //   hashTable.set("me", value);
  //   expect(hashTable.get("me")).toBe(value);
  //   hashTable.delete("me");
  //   expect(hashTable.get("me")).toBe(null);
  // });

  // it("should be replace the old value if pass key exists", () => {
  //   const value = "Yazalde Filimone";
  //   const hashTable = new HashTable();
  //   hashTable.set("me", value);
  //   expect(hashTable.get("me")).toBe(value);
  //   hashTable.set("me", "Filimone");
  //   expect(hashTable.get("me")).toBe("Filimone");
  // });
});
