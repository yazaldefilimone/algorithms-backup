export function secondLargeNumber(arr) {
  let first = arr[0];
  let second = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = arr[i];
    } else if (arr[i] > second && arr[i] < first) {
      second = arr[i];
    }
  }
  return second;
}

