// https://school.programmers.co.kr/learn/courses/30/lessons/12935
function solution(arr) {
  var answer = []
  if (arr[0] === 10 || arr.length === 0) return [-1]
  let minN = Math.min.apply(null, arr)
  answer = arr.filter((n) => n !== minN)
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] > arr[j] && !answer.includes(arr[i])) answer.push(arr[i])
  //   }
  // }
  console.log(answer)
  // arr.sort().shift()
  // answer = arr.reverse()
  // return answer
}
solution([4, 5, 3, 2, 7, 1])
