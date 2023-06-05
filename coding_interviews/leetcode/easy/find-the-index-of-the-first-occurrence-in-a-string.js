/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const findTheIndexOfTheFirstOccurrenceInAString = function (haystack, needle) {
  let start = 0;
  let end = needle.length;
  for (let index = 0; index < haystack.length; index++) {
    const str = haystack.slice(start + index, end + index);
    if (str === needle) {
      return start + index;
    }
  }
  return -1;
};
