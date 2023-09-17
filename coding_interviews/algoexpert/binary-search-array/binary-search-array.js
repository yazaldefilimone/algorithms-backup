// Time: (log(n)) | Space: O(log(n)) - recursive
export function binarySearchRecursive(array, target) {
  return helpRecursive(array, target, 0, array.length - 1);
}

function helpRecursive(array, target, left, right) {
  if (left > right) {
    return -1
  }
  const middle = Math.floor((left + right) / 2);
  if (array[middle] === target) {
    return middle
  }
  if (array[middle] > target) {
    return help(array, target, left, middle - 1);
  } else {
    return help(array, target, middle + 1, right);
  }
}

// Time: (log(n)) | Space: O(1) - iterative
export function binarySearchIterative(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    if (array[middle] == target) {
      return middle
    }
    if (target < array[middle]) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }
  return - 1
}