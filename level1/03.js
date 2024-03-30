// 잘라서 배열로 저장하기
function solution(m, n) {
  var answer = []

  let limit = Math.ceil(m.length / n)
  let startNum = 0
  let lastNum = n
  for (let i = 0; i < limit; i++) {
    b = m.slice(startNum, lastNum)
    startNum += n
    lastNum += n
    answer.push(b)
  }
}

// 다른 사람 풀이
function solution(m, n) {
  var answer = []

  for (let i = 0; i < m.length; i += n) {
    answer.push(m.slice(i, n))
  }
}

solution("abc1Addfggg4556b", 6)
