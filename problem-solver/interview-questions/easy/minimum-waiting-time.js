// Time: O(n + log n) | Space: O(1)
export function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b);
  let waitingTime = 0;
  let length = queries.length;
  for (let index = 0; index < length; index++) {
    const queriesLeft = length - (index + 1);
    waitingTime += queries[index] * queriesLeft;
  }
  return waitingTime;
}
