// bicycle parking rank
function solutiontest(A) {
  A.sort((a, b) => a - b);
  let maxDistance = 0;
  for (let i = 1; i < A.length; i++) {
    const distance = A[i] - A[i - 1];
    maxDistance = distance > maxDistance ? distance : maxDistance;
  }
  return Math.round(maxDistance / 2);
}
