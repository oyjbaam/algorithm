// https://school.programmers.co.kr/learn/courses/30/lessons/12915
function solution(strings, n) {
  var answer = strings.sort((a, b) =>
    a.charCodeAt(n) - b.charCodeAt(n) === 0 ? (a > b ? 1 : -1) : a.charCodeAt(n) - b.charCodeAt(n)
  )
  return answer
}

solution(['abce', 'abcd', 'cdx'], 2)
