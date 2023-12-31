/**
 * @param {array} elements
 */

function quicksort(elements) {
  if (elements.length < 2) {
    return elements;
  } else {
    const quite = elements[0];
    const bigger = elements.filter((e) => e > quite);
    const smaller = elements.filter((e) => e < quite);
    return [...quicksort(smaller), quite, ...quicksort(bigger)];
  }
}
