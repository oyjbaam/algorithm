// 크기가 작은 부분 문자열
/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/147355
 */
//내 풀이
function solution(str, p) {
  let len = p.length
  let strArr = []
  let answer = 0
  for (let i = 0; i < str.length; i++) {
    let a = str.slice(i, i + len)
    a.length === len && strArr.push(str.slice(i, i + len))
  }
  console.log(strArr)
  answer = strArr.filter(n => +n <= +p).length
}
// 다른 사람 풀이

function solution(t, p) {
  let count = 0
  for (let i = 0; i <= t.length - p.length; i++) {
    let value = t.slice(i, i + p.length)
    if (+p >= +value) count++
  }
  return count
}
