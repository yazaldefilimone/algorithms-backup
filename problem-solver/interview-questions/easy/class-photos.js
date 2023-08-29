// Time: O(n+ log n) | Space: O(1) - where n is the number of students
export function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort((a, b) => a - b);
  blueShirtHeights.sort((a, b) => a - b);
  let RED = "RED";
  let BUE = "BLUE";

  let shirtColorInFirstRow = redShirtHeights[0] > blueShirtHeights[0] ? RED : BUE;
  for (let index = 0; index < redShirtHeights.length; index++) {
    if (shirtColorInFirstRow == RED) {
      if (blueShirtHeights[index] >= redShirtHeights[index]) {
        return false;
      }
    } else {
      if (redShirtHeights[index] >= blueShirtHeights[index]) {
        return false;
      }
    }
  }
  return true;
}
