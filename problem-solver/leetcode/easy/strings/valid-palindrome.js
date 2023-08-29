/**
 * @param {string} s
 * @return {boolean}
 */
//  Time Complexity: O(n) where n is the length of the string
//  Space Complexity: O(1) since we are not using any extra space
export const isPalindrome = function (s) {
  const string = s.toUpperCase().replace(/[^a-zA-Z0-9]/g, "");
  let start_point = 0;
  let end_point = string.length - 1;
  while (start_point < end_point) {
    let first_position = string[start_point];
    let last_position = string[end_point];
    if (first_position != last_position) {
      return false;
    }
    start_point++;
    end_point--;
  }
  return true;
};
