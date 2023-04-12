function smallestPositiveInteger(A) {
  let A_positivos = A.filter(function (numero) {
    return numero > 0;
  });

  A_positivos.sort(function (a, b) {
    return a - b;
  });

  let menorInteiro = 1;
  for (let i = 0; i < A_positivos.length; i++) {
    if (A_positivos[i] == menorInteiro) {
      menorInteiro++;
    } else if (A_positivos[i] > menorInteiro) {
      return menorInteiro;
    }
  }

  return menorInteiro;
}
