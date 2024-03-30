function solution(array) {
  let answer = []
  let maxNum = 0
  let index = 0
  for (let x in array) {
    if (maxNum < array[x]) {
      maxNum = array[x]
      index = x
    }
  }
  answer.push(maxNum, +index)
}
// 다른 사람 풀이

function solution(array) {
  let max = Math.max(...array)
  return [max, array.indexOf(max)]
}
solution([1, 8, 3])
