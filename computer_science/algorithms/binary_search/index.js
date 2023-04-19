function binary_search(elements, search_data) {
  let down = 0;
  let up = elements.length - 1;

  while (down <= up) {
    let quite = Math.round((down + up) / 2);
    let kick = elements[quite];
    if (kick === search_data) {
      return quite;
    } else if (kick > search_data) {
      up = quite - 1;
    } else {
      up = quite + 1;
    }
  }
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 3, 14, 1, 15, 16], 3));
