/**
 * @param {string} digits
 * @return {string[]}
 */
// Time: O(3^N * 4^M) where N is the number of digits in the input that maps to 3 letters and M is the number of digits in the input that maps to 4 letters
export function letterCombinationsPhoneNumber(digits) {
  if (!digits) return []
  const HashMap = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }
  function backtrack(combination, nextDigits) {
    if (nextDigits.length === 0) {
      output.push(combination)
    } else {
      const digit = nextDigits.substring(0, 1)
      const letters = HashMap[digit] || []
      for (let i = 0; i < letters.length; i++) {
        const letter = letters[i]
        backtrack(combination + letter, nextDigits.substring(1))
      }
    }
  }
  const output = []
  backtrack('', digits)
  return output

} 
