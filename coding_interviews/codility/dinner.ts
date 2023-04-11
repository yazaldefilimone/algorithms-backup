function dinnerSolution(A: number[], B: number[]) {
  if (areAllElementsEqual(A)) {
    return -1;
  }

  let condition = true;
  let loops = 0;
  while (condition) {
    const is = B.every((num, index) => !(num === A[index]));
    condition = !is;
    if (!is) {
      const end = B.pop();
      console.log({ end });
      if (end) B.unshift(end);
    }
    loops++;
  }

  return loops - 1;
}

function areAllElementsEqual(arr: number[]) {
  if (arr.length < 2) {
    return false;
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[0]) {
      return false;
    }
  }
  return true;
}

const s = dinnerSolution([1], [2]);
console.log(s);

/*
1. Dado A = [1, 3, 5, 2, 8, 7] e B = [7, 1, 9, 8, 5, 7], sua função deve retornar 2. Depois de girar a tabela duas vezes, obtemos B = [5, 7, 7, 1, 9, 8], então A[K] ≠ B[K] para cada K de 0 a 5. Se girássemos a tabela uma vez, obteríamos B = [7, 7, 1, 9, 8, 5], o que não preenche a condição, uma vez que A[4] = B[4] = 8. Se não girássemos a tabela, haveria A[5] = B[5] = 7. Note que girar a tabela três vezes nos dá B = [8, 5, 7, 7, 1, 9], o que também preenche a condição, mas não é mínimo.

2. Dado A = [1, 1, 1, 1] e B = [1, 2, 3, 4], sua função deve retornar -1. É impossível girar a mesa para que cada pessoa fique satisfeita. Alguém sempre terá um prato de gosto 1.

3. Dado A = [3, 5, 0, 2, 4] e B = [1, 3, 10, 6, 7], sua função deve retornar 0. Nenhuma rotação é necessária para garantir que A[K] ≠ B[K].
*/
