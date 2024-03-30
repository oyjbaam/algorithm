/**
 *
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181834
 */

function solution(myString) {
  let strI = 'l'.charCodeAt()

  var answer = myString
    .split('')
    .map((x) => {
      if (strI > x.charCodeAt()) {
        return (x = 'l')
      }
      return x
    })
    .join('')

  return answer
}

solution('abcdevwxyz')
