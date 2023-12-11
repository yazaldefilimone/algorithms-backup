/**
 *
 * @param {number[][]} array
 * @returns {number[][]}
 */
function mergeOverlappingIntervals(intervals) {
  const sortedIntervals = intervals.sort((left, right) => left[0] - right[0]);
  let currentInterval = sortedIntervals[0];
  const mergeOverlapping = [currentInterval];
  for (const nextInterval of sortedIntervals) {
    const currentIntervalEnd = currentInterval[1];
    const [nextIntervalStart, nextIntervalEnd] = nextInterval;

    if (currentIntervalEnd >= nextIntervalStart) {
      currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
    } else {
      currentInterval = nextInterval;
      mergeOverlapping.push(currentInterval);
    }
  }

  return mergeOverlapping;
}
/*
[
  [1, 2],
  [3, 8],
  [9, 10]
]
[
  [-50, 20],
  [70, 95]
]
 */
console.log(
  mergeOverlappingIntervals([
    [89, 90],
    [-10, 20],
    [-50, 0],
    [70, 90],
    [90, 91],
    [90, 95],
  ])
);
// Do not edit the line below.
// exports.mergeOverlappingIntervals = mergeOverlappingIntervals;
