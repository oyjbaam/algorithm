// https://school.programmers.co.kr/learn/courses/30/lessons/12917
function solution(str) {
  let answer = str
    .split('')
    .sort((a, b) => b.charCodeAt() - a.charCodeAt())
    .join('')
  return answer
}
solution('Zbcdefg')

// 다른 사람 풀이

function solution(s) {
  return s.split('').sort().reverse().join('')
}
