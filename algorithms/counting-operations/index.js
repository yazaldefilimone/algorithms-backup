const sumUpToSimple = function (n) {
  return (n * (n + 1)) / 2;
};

const sumUpToComplex = function (n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

let timeOne, timeTwo;
//Test 1
timeOne = Date.now();
sumUpToSimple(2500000000);
timeTwo = Date.now();
console.log(`${(timeTwo - timeOne) / 1000} seconds`);

//Test 2
timeOne = Date.now();
sumUpToComplex(2500000000);
timeTwo = Date.now();
console.log(`${(timeTwo - timeOne) / 1000} seconds`);
