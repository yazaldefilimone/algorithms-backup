export function isMonotonic(array) {
  if (array.length < 2) return true;
  let slow = 0;
  let fast = slow + 1;
  let status = '';
  while (fast < array.length) {
    if (array[slow] > array[fast]) {
      if (status == "DEC") {
        return false;
      }
      status = "INC"
    }
    if (array[slow] < array[fast]) {
      if (status == "INC") {
        return false;
      }
      status = "DEC"

    }
    slow += 1;
    fast += 1;
  }

  return true;
}