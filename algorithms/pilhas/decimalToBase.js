function decimalToBase(decimalNumber, base) {
  var restStack = [];
  var rest;
  var baseString = '';
  var digits = '0123456789ABCDEF ';

  while (decimalNumber > 0) {
    rest = Math.floor(decimalNumber % base);
    restStack.push(rest);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  while (restStack.length > 0) {
    baseString += digits[restStack.pop()];
  }

  return baseString;
}

console.log(decimalToBase(123, 16));
