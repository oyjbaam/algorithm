/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
 */

const sliceDot = (str) => {
  if (str.charAt(0) === '.') {
    str = str.slice(1)
  }

  if (str.charAt(str.length - 1) === '.') {
    str = str.slice(0, -1)
  }
  return str
}
function solution(new_id) {
  const lowerStr = new_id
    .toLowerCase()
    .split('')
    .filter((x) => {
      if (x === '-' || x === '_' || x === '.') {
        return x
      }
      const charCode = x.charCodeAt(0)
      if ((charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)) {
        return x
      }
    })
    .join('')

  let replacedStr = ''
  let prevChar = ''
  for (let i = 0; i < lowerStr.length; i++) {
    const currentChar = lowerStr[i]
    if (currentChar !== '.' || currentChar !== prevChar) {
      replacedStr += currentChar
    }
    prevChar = currentChar
  }
  replacedStr = sliceDot(replacedStr)
  if (replacedStr === '') {
    replacedStr = 'a'
  }
  if (replacedStr.length >= 16) {
    replacedStr = replacedStr.slice(0, 15)
    replacedStr = sliceDot(replacedStr)
  }
  if (replacedStr.length <= 2) {
    const lastChar = replacedStr.charAt(replacedStr.length - 1)
    replacedStr = replacedStr.padEnd(3, lastChar)
  }
  console.log(replacedStr)

  return replacedStr
}
