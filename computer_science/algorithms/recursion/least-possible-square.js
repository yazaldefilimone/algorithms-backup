/**
 * @param {number} hight
 * @param {number} width
 * @return {number}
 */

function leastPossibleSquare(hight, width) {
  if (hight === width) return hight;
  return hight > width
    ? leastPossibleSquare(hight - width, width)
    : leastPossibleSquare(hight, width - hight);
}
