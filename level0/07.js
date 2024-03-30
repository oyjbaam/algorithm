/**
 * @see https://school.programmers.co.kr/learn/courses/30/lessons/181858
 * @param {*} arr
 * @param {*} k
 * @returns
 */
function solution(arr, k) {
  var answer = []
  const setArr = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (!setArr.has(arr[i])) {
      setArr.add(arr[i])
      answer.push(arr[i])
    }
    if (answer.length === k) break
  }
  while (answer.length < k) {
    answer.push(-1)
  }

  return answer
}
solution([0, 1, 1, 1, 1], 4)

// 다른 사람 풀이

const solution1 = (a, k) => [...new Set(a), ...Array(k).fill(-1)].slice(0, k)
