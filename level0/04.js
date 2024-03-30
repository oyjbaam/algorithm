/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181921
 */

function solution(l, r) {
  var answer = []
  for (let i = l; i <= r; i++) {
    let isAllZeroOrFive = true
    for (let j = 0; j < String(i).length; j++) {
      if (String(i)[j] !== '0' && String(i)[j] !== '5') {
        isAllZeroOrFive = false
        break
      }
    }
    if (isAllZeroOrFive) {
      answer.push(i)
    }
  }
  console.log(answer)
  return answer.length ? answer : [-1]
}

function solution2(l, r) {
  const answer = []
  for (let i = l; i <= r; i++) {
    if (!i.toString().match(/[^05]+/)) {
      answer.push(i)
    }
  }
  console.log(answer)
  return answer.length ? answer : [-1]
}
solution(5, 555)
