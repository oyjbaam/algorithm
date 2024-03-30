/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181913
 */
function solution(my_string, queries) {
  var answer = my_string.split('')

  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0]
    let end = queries[i][1]
    let newArr = answer.slice(start, end + 1).reverse()

    for (let j = 0; j < newArr.length; j++) {
      let index = start + j
      answer[index] = newArr[j]
    }
  }
  return answer.join('')
}
solution('rermgorpsam', [
  [2, 3],
  [0, 7],
  [5, 9],
  [6, 10],
])
