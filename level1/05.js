// 문자열 정렬
function solution(my_string) {
  var answer = my_string.toLowerCase().split("").sort().join("")

  return answer
}
solution("Bcad")

// 다른사람 풀이
function solution(s) {
  return [...s.toLowerCase()].sort().join("")
}
