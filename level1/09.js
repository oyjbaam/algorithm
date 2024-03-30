// 모의고사
const makeArray = (arr, length) => {
  return [...Array(length)].map((_, i) => arr[i % arr.length]).flat()
}
const filterArrLength = (ast, ans) => ans.filter((x, i) => ans[i] === ast[i]).length

function solution(answers) {
  const a = makeArray([1, 2, 3, 4, 5], answers.length)
  const b = makeArray([2, 1, 2, 3, 2, 4, 2, 5], answers.length)
  const c = makeArray([3, 3, 1, 1, 2, 2, 4, 4, 5, 5], answers.length)

  const answerArr = [
    filterArrLength(a, answers),
    filterArrLength(b, answers),
    filterArrLength(c, answers),
  ]

  const maxCount = Math.max(...answerArr)
  let answer = []
  for (let i = 0; i < answerArr.length; i++) {
    if (answerArr[i] === maxCount) {
      answer.push(i + 1)
    }
  }
  return answer
}

// 이상한 정렬

function solution(numlist, n) {
  var answer = numlist.sort((a, b) => {
    if (Math.abs(a - n) === Math.abs(b - n)) {
      return a > b ? -1 : 1
    }
    return Math.abs(a - n) - Math.abs(b - n)
  })

  return answer
}
