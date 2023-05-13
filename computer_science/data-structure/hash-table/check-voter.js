const voted = {};
function checkVoter(name) {
  const isVoted = voted[name];
  if (isVoted) {
    console.log("You already voted, you can't vote again");
  } else {
    voted[name] = true;
    console.log("Voted!");
  }
}
