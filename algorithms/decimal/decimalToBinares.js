function decimalToBinary(decimalNumber) {
  var restStack = [];
  var rest;
  var binaryString = '';

  while (decimalNumber > 0) {
    rest = Math.floor(decimalNumber % 2);
    restStack.push(rest);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  while (restStack.length > 0) {
    binaryString += restStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(23));
