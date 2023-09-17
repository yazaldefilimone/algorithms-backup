// Time complexity: O(nlog(n) + mlog(m))  Space complexity: O(1) where n is the length of arrayOne and m is the length of arrayTwo
export function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let indexOne = 0;
  let indexTwo = 0;
  let smallest = Infinity;
  let current = Infinity;
  let smallestPair = [];
  while (indexOne < arrayOne.length && indexTwo < arrayTwo.length) {
    let first = arrayOne[indexOne];
    let second = arrayTwo[indexTwo];

    if (first < second) {
      current = second - first;
      indexOne += 1;
    } else if (second < first) {
      current = first - second;
      indexTwo += 1;
    } else {
      return [first, second];
    }

    if (smallest > current) {
      smallest = current;
      smallestPair = [first, second];
    }
  }
  return smallestPair;
}
