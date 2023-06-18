import { Queue } from "~/computer_science/data-structure/queue/queue";

export function breadthFirstSearch(root) {
  let queue = new Queue();
  let result = [];
  queue.enqueue(root);
  while (queue.length !== 0) {
    let currentNode = queue.dequeue()?.value;
    result.push(currentNode.value);
    if (currentNode.left) queue.enqueue(currentNode.left);
    if (currentNode.right) queue.enqueue(currentNode.right);
  }
  return result;
}
