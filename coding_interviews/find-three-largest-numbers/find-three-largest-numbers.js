// Time: O(log(n) + n) | Space: O(1)
export function findThreeLargestNumbers(array) {
  return array.sort((a, b) => a - b).slice(-3)
}


// Time: O(n) | Space: O(1)
export function findThreeLargestNumbersBetter(array) {
  let threeLargest = [null, null, null];
  for (let num of array) {
    updateLargest(threeLargest, num);
  }
  return threeLargest
}

function updateLargest(threeLargest, num) {
  if (threeLargest[2] == null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2)
  } else if (threeLargest[1] == null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1)
  } else if (threeLargest[0] == null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0)
  }
}

function shiftAndUpdate(array, num, idx) {
  for (let index = 0; index < idx + 1; index++) {
    if (index == idx) {
      array[index] = num
    } else {
      array[index] = array[index + 1]
    }
  }
}