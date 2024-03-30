// 다항식 더하기

function solution(s) {
  var answer = []
  let xNum = 0
  let num = 0
  const arr = s.split(" + ")
  arr.forEach((n) => {
    if (n.includes("x")) {
      const strVal = n.replace("x", "") || 1
      xNum += parseInt(strVal, 10)
    } else {
      num += parseInt(n)
    }
  })
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`)
  if (num) answer.push(num)

  return answer.join(" + ")
}

function solution(poly) {
  let answer = []
  const arr = poly.split(" + ")
  const xNum = arr
    .filter((n) => n.includes("x"))
    .map((item) => item.replace("x", "") || "1")
    .reduce((acc, cur) => acc + +cur, 0)
  const num = arr.filter((n) => !isNaN(n)).reduce((acc, cur) => acc + +cur, 0)
  if (xNum) answer.push(`${xNum === 1 ? "" : xNum}x`)
  if (num) answer.push(num)
  return answer.join(" + ")
}
