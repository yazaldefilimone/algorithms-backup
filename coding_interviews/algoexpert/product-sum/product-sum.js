
// Time: O(n) || Space: O(d) where d is the greatest depth of special arrays
export function productSum(array, depth = 1, result = 0) {
  let idx = 0
  while (idx < array.length) {
    if (typeof array[idx] !== "number") {
      depth++
      let r = productSum(array[idx], depth, 0) * depth
      depth = 1
      result += r
    } else {
      result += array[idx]
    }
    idx++
  }
  return result
}
//  Time: O(n) || Space: O(d) where d is the greatest depth of special arrays
export function productSumSecond(array, depth = 1, result = 0) {
  if (array.length == 0) {
    return result
  }
  let curr = array.shift()
  if (Array.isArray(curr)) {
    depth++
    result += productSum(curr, depth, 0) * depth
    return productSum(array, 1, result)
  } else {
    return productSum(array, depth, result + curr)
  }
}