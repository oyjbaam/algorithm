/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181936
 */

function solution(number, n, m) {
  var answer = 0
  if (!(number % n) && !(number % m)) {
    answer = 1
  } else {
    answer = 0
  }
  console.log(answer)
  return answer
}

solution(60, 2, 3)
