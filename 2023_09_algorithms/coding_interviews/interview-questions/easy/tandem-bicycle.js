// Time Complexity: O(n log(n)) | Space Complexity: O(1) - where n is the number of tandem bicycles
export function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);
  if (!fastest) {
    reverseArrayInPlace(redShirtSpeeds);
  }

  let total = 0;

  for (let index = 0; index < redShirtSpeeds.length; index++) {
    let reder_red = redShirtSpeeds[index];
    let reder_blue = blueShirtSpeeds[blueShirtSpeeds.length - index - 1];
    total += Math.max(reder_blue, reder_red);
  }

  return total;
}

function reverseArrayInPlace(array) {
  let startPointer = 0;
  let endPointer = array.length - 1;

  while (startPointer < endPointer) {
    let start = array[startPointer];
    array[startPointer] = array[endPointer];
    array[endPointer] = start;
    startPointer += 1;
    endPointer -= 1;
  }
}

// Second solution
// Time Complexity: O(n log(n)) | Space Complexity: O(1) - where n is the number of tandem bicycles
export function tandemBicycle_second_solution(redShirtSpeeds, blueShirtSpeeds, fastest) {
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => a - b);

  !fastest && redShirtSpeeds.reverse();

  let total = 0;

  for (let index = 0; index < redShirtSpeeds.length; index++) {
    let reder_red = redShirtSpeeds[index];
    let reder_blue = blueShirtSpeeds[blueShirtSpeeds.length - index - 1];
    total += Math.max(reder_blue, reder_red);
  }
  return total;
}
