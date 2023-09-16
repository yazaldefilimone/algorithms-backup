function findCombinations(array, targetSum) {
  const result = [];
  function backtrack(currentCombination, startIndex, currentSum) {
    if (currentSum === targetSum) {
      result.push(currentCombination.slice()); // Encontramos uma combinação válida
      return;
    }

    if (currentSum > targetSum || startIndex === array.length) {
      return; // Condições de parada
    }

    for (let i = startIndex; i < array.length; i++) {
      currentCombination.push(array[i]); // Escolhe um elemento
      backtrack(currentCombination, i, currentSum + array[i]); // Chamada recursiva
      currentCombination.pop(); // Desfaz a escolha (backtrack)
    }
  }

  backtrack([], 0, 0); // Inicia a busca a partir do início
  return result;
}

const array = [2, 4, 6, 8];
const targetSum = 10;
const combinations = findCombinations(array, targetSum);
console.log(combinations);
