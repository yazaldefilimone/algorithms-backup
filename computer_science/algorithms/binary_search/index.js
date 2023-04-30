// O(log2)
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
