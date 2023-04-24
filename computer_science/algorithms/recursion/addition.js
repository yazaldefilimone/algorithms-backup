function addition(arr) {
  return arr.splice(0, 1)[0] + (arr.length == 1 ? arr[0] : addition(arr));
}
