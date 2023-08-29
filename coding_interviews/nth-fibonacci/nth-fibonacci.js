
// Time: O(n) || Space: O(n)
export function getNthFibRecursion(n, cache = new Map()) {
  if (cache.has(n)) {
    return cache.get(n)
  }
  switch (n) {
    case 2:
      return 1;
    case 1:
      return 0;
    default:
      let calc = getNthFib(n - 1, cache) + getNthFib(n - 2, cache)
      cache.set(n, calc)
      return calc
  }
}


// Time: O(n) || Space: O(1)
export function getNthFibOInteractions(n) {
  let last = [0, 1];
  let count = 3;
  while (count <= n) {
    let r = last[0] + last[1];
    last[0] = last[1];
    last[1] = r
    count += 1
  }
  return n > 1 ? last[1] : last[0]
}
