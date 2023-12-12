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
