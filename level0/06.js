/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181836/solution_groups?language=javascript
 */

function solution(arr, k) {
  var answer = arr
    .flatMap((item) => Array(k).fill(item))
    .map((n) => {
      const splitStr = n.split('')

      let aStr = ''
      for (const x in splitStr) {
        for (let i = 1; i <= k; i++) {
          aStr += splitStr[x]
        }
      }
      return aStr
    })

  return answer
}

solution(['.xx...xx.', 'x..x.x..x', 'x...x...x', '.x.....x.', '..x...x..', '...x.x...', '....x....'], 2)
