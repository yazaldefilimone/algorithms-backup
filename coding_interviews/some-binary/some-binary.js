const cache = new Map();
export function sumBinary(a, b) {
  let sum = 0;
  let carry = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    if (cache.has(`${sum}${a[i] || 0}${b[j] || 0}${carry}`)) {
      result = cache.get(`${sum}${a[i] || 0}${b[j] || 0}${carry}`);
      i--;
      j--;
      continue;
    }
    sum = +(a[i] || 0) + +(b[j] || 0) + carry;
    if (sum > 1) {
      sum -= 2;
      carry = 1;
    } else {
      carry = 0;
    }
    result = sum + result;
    cache.set(`${sum}${a[i] || 0}${b[j] || 0}${carry}`, result);
    i--;
    j--;
  }
  return result;
}