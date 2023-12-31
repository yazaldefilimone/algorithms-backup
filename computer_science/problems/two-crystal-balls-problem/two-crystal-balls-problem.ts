// Time: O(sqrt(n)) || space: O(1)
export function two_crystal_balls(breaks: boolean[]): number {
  const amount = Math.floor(Math.sqrt(breaks.length));

  let index = amount;

  for (; index < breaks.length; index += amount) {
    if (breaks[index]) {
      break;
    }
  }

  index -= amount;

  for (let idx = 0; idx < amount && index < breaks.length; idx++, index++) {
    if (breaks[index]) {
      return index;
    }
  }

  return -1;
}
