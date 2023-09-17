/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
export const canBeEqual = function (s1, s2) {
  s2 = s2.split('')
  let count = 0
  for (let s1idx = 0; s1idx < s2.length; s1idx++) {
    let status = false
    for (let s2idx = 0; s2idx < s1.length; s2idx++) {
      if (s2[s2idx] === s1[s1idx]) {
        console.log(s2[s2idx], s1[s1idx])
        status = true
        if (s1idx === s2idx) {
          console.log('s1idx === s2idx')
          continue;
        }
        swap(s2, s2idx, s1idx)
        count++
      }

    }
    if (!status || count > 2) {
      return false
    }
    if (count == 2) {
      break
    }
    status = false
  }
  console.log(s1, s2)
  return s1.join('') === s2.join('')
};


function swap(str, curr_idx, put_idx) {
  console.log('1', str)
  let s = str[curr_idx]
  str[curr_idx] = str[put_idx]
  str[put_idx] = s
  console.log('2', str)
}

