// Time: O(n) || Space: O(n)
function firstDuplicateValue(array) {
  const cache = new Map();
  for (let index = 0; index < array.length; index++) {
    if (cache.has(array[index])) {
      return array[index];
    }
    cache.set(array[index], true);
  }
  return -1;
}

// ----- better performance
//  Time: O(n) || Space: O(1)
function firstDuplicateValuePerf(array) {
  for (let index = 0; index < array.length; index++) {
    const abs = Math.abs(array[index]);
    if (array[abs - 1] < 0) {
      return abs;
    }
    array[abs - 1] *= -1;
  }
  return -1;
}
