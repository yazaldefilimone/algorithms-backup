import { describe, expect, it } from "vitest";
import { HashTable } from "./hash-table.js";

describe("hash table", () => {
  it("should return hash and its number", () => {
    const hashTable = new HashTable();
    expect(hashTable).toHaveProperty("hash");
    expect(hashTable.hash("yaz")).toBeTypeOf("number");
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
    expect(hashTable.get("me")).toBe(null);
  });
  it("should return null if delete  value", () => {
    const value = "Yazalde Filimone";
    const hashTable = new HashTable();
    hashTable.set("me", value);
    expect(hashTable.get("me")).toBe(value);
    hashTable.delete("me");
    expect(hashTable.get("me")).toBe(null);
  });
});
