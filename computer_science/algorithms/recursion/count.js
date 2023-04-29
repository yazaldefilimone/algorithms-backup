function count(arr) {
  if (arr.length === 0) {
    return 0;
  } else {
    return arr.pop() + count(arr);
  }
}

console.log(count([1, 2, 3, 4]));
