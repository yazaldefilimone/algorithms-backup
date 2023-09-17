const arrayBuffer = new ArrayBuffer(6);

const arrayInt8 = new Uint8Array(arrayBuffer);
console.log(arrayBuffer); // ArrayBuffer { [Uint8Contents]: <00 00 00 00 00 00>, byteLength: 6 }

arrayInt8[0] = 45;

console.log(arrayBuffer); // ArrayBuffer { [Uint8Contents]: <2d 00 00 00 00 00>, byteLength: 6 }
arrayInt8[2] = 45;

console.log(arrayBuffer); // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 00 00>, byteLength: 6 }

const arrayInt16 = new Uint16Array(arrayBuffer);
arrayInt16[2] = 0x4545;
console.log(arrayBuffer); // ArrayBuffer { [Uint8Contents]: <2d 00 2d 00 45 45>, byteLength: 6 }

// for delete an element you can change value to null, undefined  or 0
// you can access to an element by index use se calculate the index by the formula: index = (index * elementSize) + offset

const simple_array = new Array<number>(10).fill(0);
// access 9 position
console.log(simple_array);
simple_array[calcPosition(9, 1, 0)] = 10;
/// access 5 position
simple_array[calcPosition(5, 1, 0)] = 5;
console.log(simple_array);

function calcPosition(index: number, elementSize: number, offset: number): number {
  return index * elementSize + offset;
}
