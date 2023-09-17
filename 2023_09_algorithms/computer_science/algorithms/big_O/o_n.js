function logItems(n) {
  for (let index = 0; index < n; index++) {
    console.log(index);
  }
}

logItems(10); // o(n)/o(10)
logItems(20); // o(n)/o(20)
