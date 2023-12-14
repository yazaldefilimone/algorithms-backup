function missingNumbers(nums) {
  const missing = new Set(nums);
  const solutions = [];

  const end = nums.length + 3;

  for (let current = 1; current < end; current++) {
    if (!missing.has(current)) {
      solutions.push(current);
    }
  }
  return solutions;
}

// Do not edit the line below.
// Time: O(n) || Space: O(1)
function missingNumbersBetter(nums) {
  const end = nums.length + 3;
  let total = 0;
  for (let current = 1; current < end; current++) {
    total += current;
  }

  for (const num of nums) {
    total -= num;
  }

  const averageMissingValue = Math.floor(total / 2);
  let firstFoundHalf = 0;
  let secondFoundHalf = 0;

  for (const num of nums) {
    if (num <= averageMissingValue) {
      firstFoundHalf += num;
    } else {
      secondFoundHalf += num;
    }
  }

  let expectFirstFoundHalf = 0;
  let expectSecondFoundHalf = 0;

  for (let current = 1; current < averageMissingValue + 1; current++) {
    expectFirstFoundHalf += current;
  }
  for (let current = averageMissingValue + 1; current < end; current++) {
    expectSecondFoundHalf += current;
  }

  return [expectFirstFoundHalf - firstFoundHalf, expectSecondFoundHalf - secondFoundHalf];
}
console.log(missingNumbersBetter([1, 3, 5]));
