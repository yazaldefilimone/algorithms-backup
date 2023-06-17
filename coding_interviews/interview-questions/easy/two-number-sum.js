// Time=O(log n + n)
// Space=O(1)
export function twoNumberSum(array, targetSum) {
  let left = 0;
  let right = array.length - 1;
  array.sort((a, b) => a - b);
  while (left < right) {
    let sum = array[left] + array[right];
    if (sum == targetSum) {
      return [array[left], array[right]];
    } else if (sum > targetSum) {
      right -= 1;
    } else if (sum < targetSum) {
      left += 1;
    }
  }
  return [];
}

// Time=O(n)
// Space=O(n)
export function twoNumberSum_solution_2(array, targetSum) {
  let hash = {};
  for (let index = 0; index < array.length; index++) {
    let sum = targetSum - array[index];
    if (hash[sum]) {
      return [sum, array[index]];
    }
    hash[array[index]] = true;
  }
  return [];
}

// Time=O(n^2)
// Space=O(1)
export function twoNumberSum_solution_3(array, targetSum) {
  for (let index = 0; index < array.length; index++) {
    let first = array[index];
    for (let idx = index + 1; idx < array.length; idx++) {
      if (first + array[idx] === targetSum) {
        return [first, array[idx]];
      }
    }
  }
  return [];
}
