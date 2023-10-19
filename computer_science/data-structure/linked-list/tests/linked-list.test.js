import { it, expect, describe } from "vitest";
import { LinkedList } from "../linked-list";

describe("linked list", () => {
  it("push method", () => {
    const test = [0, 1, 2, 3, 4];
    const linkedList = new LinkedList(test[0]);
    for (let index = 1; index < test.length; index++) {
      linkedList.push(test[index]);
    }

    let current = linkedList.head;
    let indx = 0;
    expect(linkedList.len).toEqual(test.length);
    while (current) {
      expect(current.value).toEqual(test[indx]);
      current = current.next;
      indx++;
    }
  });
});
