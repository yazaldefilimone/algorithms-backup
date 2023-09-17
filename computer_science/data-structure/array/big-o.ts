const offset = 0;
const array = new Array<number | null>(10).fill(0);

array[getPosition(9, 1, offset)] = 10;
array[getPosition(5, 1, offset)] = 5;
console.log(array[getPosition(5, 1, offset)]); // 5
console.log(array[getPosition(9, 1, offset)]); // 10

deleteElement(5, 1, offset);
console.log(array[getPosition(5, 1, offset)]); // null

// O(1) - Constant Time
function getPosition(index: number, elementSize: number, offset: number) {
  return index * elementSize + offset;
}
// O(1) - Constant Time
function deleteElement(index: number, elementSize: number, offset: number) {
  //  you can choose between null, undefined or 0
  array[getPosition(index, elementSize, offset)] = null;
}
