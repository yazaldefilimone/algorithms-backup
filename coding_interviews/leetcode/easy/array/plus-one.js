/**
 * @param {number[]} digits
 * @return {number[]}
 */
// Complexity
// Time: O(n)
// Space: O(1)
export const plusOne = function (digits) {
  if (!digits.length) return [];
  let last = digits.length - 1;
  if (digits[last] < 9) {
    digits[last] = digits[last] + 1;
    return digits;
  }
  if (digits.length === 1) {
    let str = String(digits[last] + 1);
    digits[last] = Number(str[0]);
    digits[last + 1] = Number(str[1]);
    return digits;
  }

  let calc = String(digits[last] + 1);
  digits[last] = Number(calc[1]);
  for (let index = digits.length - 2; index > -1; index--) {
    if (calc !== "") {
      const element = String(digits[index] + Number(calc[0]));
      if (element.length > 1) {
        digits[index] = Number(element[1]);
        calc = element;
      } else {
        digits[index] = Number(element[0]);
        calc = "";
      }
    } else {
      return digits;
    }
  }
  if (calc != "") {
    digits.unshift(Number(calc[0]));
  }
  return digits;
};
// 1 9
// 0
// 0
