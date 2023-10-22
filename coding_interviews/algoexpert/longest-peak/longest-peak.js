// https://www.algoexpert.io/questions/longest-peak

// Time:O(n) || Space: O(1)
function longestPeak(array) {
  let longestPeakLen = 0;
  let index = 1;

  while (index < array.length - 1) {
    const isPeak = array[index - 1] < array[index] && array[index] > array[index + 1];
    if (!isPeak) {
      index++;
      continue;
    }

    let leftIndex = index - 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex--;
    }
    let rightIndex = index + 2;
    while (rightIndex < array.length && array[rightIndex] < array[rightIndex - 1]) {
      rightIndex++;
    }
    const currentPeakLen = rightIndex - leftIndex - 1;
    longestPeakLen = Math.max(longestPeakLen, currentPeakLen);

    index = rightIndex;
  }
  return longestPeakLen;
}
