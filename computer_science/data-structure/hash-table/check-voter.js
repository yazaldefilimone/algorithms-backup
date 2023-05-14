import { HashTable } from "./hash-table.js";

const voted = new HashTable();
function checkVoter(name) {
  const isVoted = voted.get(name);
  if (isVoted) {
    console.log("You already voted, you can't vote again");
  } else {
    voted.set(name, true);
    console.log("Voted!");
  }
}
