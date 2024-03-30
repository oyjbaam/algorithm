/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181851
 */

function solution(rank, attendance) {
  var answer = 0
  let trueStd = rank
    .map((student, index) => ({ student, index }))
    .filter((_, idx) => attendance[idx])
    .sort((a, b) => a.student - b.student)
    .slice(0, 3)

  answer = 10000 * trueStd[0].index + 100 * trueStd[1].index + trueStd[2].index

  return answer
}

solution([1, 2, 3], [true, true, true])
