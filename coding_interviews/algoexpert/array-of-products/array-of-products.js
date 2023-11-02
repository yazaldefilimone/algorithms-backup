//  Time: O(n) || Space: O(1)
function arrayOfProducts(array) {
  // Write your code here.
  const res = walk(array, 1);
  const products = [res];
  const first = array[0];
  for (let index = 1; index < array.length; index++) {
    if (res == 0 && array[index] == 0) {
      products.push(0);
      continue;
    }
    const result = res / array[index];
    products.push(result * first);
  }
  return products;
}
function walk(array, idx) {
  let product = array[idx];
  for (let index = idx + 1; index < array.length; index++) {
    product = array[index] * product;
  }
  return product;
}
