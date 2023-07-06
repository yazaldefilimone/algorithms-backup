export function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);
  let triplets = [];

  for (let index = 0; index < array.length; index++) {
    let left = index + 1;
    let right = array.length - 1;

    while (left < right) {
      let currentSum = array[index] + array[left] + array[right];
      if (currentSum === targetSum) {
        triplets.push([array[index], array[left], array[right]]);
        right -= 1;
        left += 1;
      }

      if (currentSum > targetSum) {
        right -= 1;
      }

      if (currentSum < targetSum) {
        left += 1;
      }
    }
  }

  return triplets;
}
