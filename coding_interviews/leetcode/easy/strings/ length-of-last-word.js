/**
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function (s) {
  let str_store = "";
  let stringWithoutStartAndEndSpaces = s.trim();
  if (stringWithoutStartAndEndSpaces.length == 1) return 1;

  let start = stringWithoutStartAndEndSpaces.length - 1;
  while (start > -1) {
    if (stringWithoutStartAndEndSpaces[start].trim()) {
      str_store += stringWithoutStartAndEndSpaces[start];
    } else {
      return str_store.length;
    }
    start--;
  }
  return str_store.length;
};
