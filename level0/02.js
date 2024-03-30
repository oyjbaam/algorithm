/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181934
 * @param {*} ineq
 * @param {*} eq
 * @param {*} n
 * @param {*} m
 * @returns
 */
function solution(ineq, eq, n, m) {
  const eqeq = eq === '!' ? eval(n + ineq + m) : eval(n + ineq + eq + m)

  return eqeq ? 1 : 0
}

solution('>', '!', 41, 78)
