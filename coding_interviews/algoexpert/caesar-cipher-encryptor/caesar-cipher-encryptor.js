/**
 * @param {string} string
 * @param {number} key
 * @return {boolean}
 */
// Time: O(n) || Space: O(n)
function caesarCipherEncryptor(string, key) {
  key = key % 26
  let pointer = 0;
  let result = ''
  while (pointer < string.length) {
    const code = string.charCodeAt(pointer)
    let unicode = code + key
    console.log(unicode, code)
    if (unicode <= 122) {
      result += String.fromCharCode(unicode)
    } else {
      result += String.fromCharCode(96 + (unicode % 122))
    }
    pointer++
  }
  console.log({ result })
  return result
}