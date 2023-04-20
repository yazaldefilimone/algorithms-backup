// Charlemagne, the King of Frankia
function TheKingFrankia(A) {
  let lastWasHill = null;
  let count = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] === A[i - 1]) {
      continue;
    }
    if (lastWasHill === null) {
      lastWasHill = A[i] > A[i - 1];
      count++;
    } else if (lastWasHill && A[i] < A[i - 1]) {
      lastWasHill = false;
      count++;
    } else if (!lastWasHill && A[i] > A[i - 1]) {
      lastWasHill = true;
      count++;
    }
  }

  return count;
}
