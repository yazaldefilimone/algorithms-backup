function mergeOverlappingIntervals(array) {
  const overlapping = [];
  for (let index = 0; index < array.length; index++) {
    const over = array[index];
    for (let nextId = index; nextId < array.length; nextId++) {
      const next = array[nextId];
      if (over[0] > next[0] || over[1] > next[0]) {
        over[1] = next[1];
      } else {
        // overlapping.push(over);
        // overlapping.push(next);
      }
    }
    overlapping.push(over);
  }
  return overlapping;
}
